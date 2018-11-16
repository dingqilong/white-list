
            YUI().use('profiler', 'console', 'substitute', function (Y) {
                // Implement Profiler.add
                Y.Profiler._subjects = [];
                Y.Profiler.add = function (subject) {
                    Y.Profiler._subjects.push(subject);
                };
                Y.Profiler.getSubjects = function () {
                    return Y.Profiler._subjects;
                };

                // Objects to profile
                var objects = [
                    'CryptoJS.lib.Base',
                    'CryptoJS.lib.WordArray',

                    'CryptoJS.x64.Word',
                    'CryptoJS.x64.WordArray',

                    'CryptoJS.enc.Hex',
                    'CryptoJS.enc.Latin1',
                    'CryptoJS.enc.Utf8',
                    'CryptoJS.enc.Utf16',
                    'CryptoJS.enc.Base64',

                    'CryptoJS.lib.BufferedBlockAlgorithm',
                    'CryptoJS.lib.Hasher',

                    'CryptoJS.algo.MD5',
                    'CryptoJS.algo.SHA1',
                    'CryptoJS.algo.SHA256',
                    'CryptoJS.algo.SHA512',
                    'CryptoJS.algo.SHA3',

                    'CryptoJS.algo.HMAC',

                    'CryptoJS.algo.PBKDF2',
                    'CryptoJS.algo.EvpKDF',

                    'CryptoJS.lib.Cipher',
                    'CryptoJS.lib.StreamCipher',
                    'CryptoJS.lib.BlockCipher',
                    'CryptoJS.lib.BlockCipherMode',
                    'CryptoJS.lib.CipherParams',
                    'CryptoJS.lib.SerializableCipher',
                    'CryptoJS.lib.PasswordBasedCipher',

                    'CryptoJS.mode.CBC', 'CryptoJS.mode.CBC.Encryptor', 'CryptoJS.mode.CBC.Decryptor',
                    'CryptoJS.mode.CFB', 'CryptoJS.mode.CFB.Encryptor', 'CryptoJS.mode.CFB.Decryptor',
                    'CryptoJS.mode.CTR', 'CryptoJS.mode.CTR.Encryptor', 'CryptoJS.mode.CTR.Decryptor',
                    'CryptoJS.mode.OFB', 'CryptoJS.mode.OFB.Encryptor', 'CryptoJS.mode.OFB.Decryptor',
                    'CryptoJS.mode.ECB', 'CryptoJS.mode.ECB.Encryptor', 'CryptoJS.mode.ECB.Decryptor',

                    'CryptoJS.pad.Pkcs7',
                    'CryptoJS.pad.AnsiX923',
                    'CryptoJS.pad.Iso10126',
                    'CryptoJS.pad.Iso97971',
                    'CryptoJS.pad.ZeroPadding',
                    'CryptoJS.pad.NoPadding',

                    'CryptoJS.format.OpenSSL',

                    'CryptoJS.kdf.OpenSSL',

                    'CryptoJS.algo.RC4',
                    'CryptoJS.algo.RC4Drop',
                    'CryptoJS.algo.Rabbit',
                    'CryptoJS.algo.AES',
                    'CryptoJS.algo.DES',
                    'CryptoJS.algo.TripleDES'
                ];

                function registerObjects() {
                    for (var i = 0; i < objects.length; i++) {
                        Y.Profiler.registerObject(objects[i]);
                    }
                }

                function unregisterObjects() {
                    for (var i = 0; i < objects.length; i++) {
                        Y.Profiler.unregisterObject(objects[i]);
                    }
                }

                // Load profile subjects
                Y.use('*', function (Y) {
                    // Iterate over profile subjects
                    var subjects = Y.Profiler.getSubjects();
                    for (var nSubject = 0; nSubject < subjects.length; nSubject++) {
                        // Shortcut
                        var subject = subjects[nSubject];

                        // Iterate over profile subject methods
                        for (var methodName in subject) {
                            if (typeof subject[methodName] == 'function' && methodName.indexOf('profile') == 0) {
                                // Set up
                                if (subject['setUp']) {
                                    subject['setUp']();
                                }

                                // Run
                                registerObjects();
                                subject[methodName]();
                                unregisterObjects();

                                // Tear down
                                if (subject['tearDown']) {
                                    subject['tearDown']();
                                }

                                // Get reports
                                var reports = Y.Profiler.getFullReport(function (report) {
                                    // Skip reports with 0 calls
                                    if ( ! report.calls) {
                                        return false;
                                    }

                                    // Create "total" entry
                                    report.total = 0;
                                    for (var i = 0; i < report.points.length; i++) {
                                        report.total += report.points[i];
                                    }

                                    // Round "avg" entry
                                    report.avg = Number(report.avg.toFixed(4));

                                    return true;
                                });

                                // Add name to reports
                                for (var name in reports) {
                                    reports[name].name = name;
                                }

                                // Sort reports by total time
                                var orderedReports = [];
                                for (var name in reports) {
                                    orderedReports.push(reports[name]);
                                }
                                orderedReports.sort(function (a, b) {
                                    return ((b.total - a.total) || (b.calls - a.calls));
                                });

                                // Create profile source
                                var source = subject.name + '_' + methodName;

                                // Create console
                                var yconsole = new Y.Console({
                                    style: 'block',
                                    width: '100%',
                                    height: '600px',
                                    entryTemplate:
                                        '<div class="{entry_class} {cat_class} {src_class}">' +
                                        '    <pre class="{entry_content_class}">{message}</pre>' +
                                        '</div>',
                                    strings: {
                                        title: source,
                                        pause: 'Pause',
                                        clear: 'Clear',
                                        collapse: 'Collapse',
                                        expand: 'Expand'
                                    },
                                    newestOnTop: false,
                                    render: true
                                });

                                // Restrict profile sources
                                (function (yconsole, source) {
                                    yconsole.on('entry', function (e) {
                                        if (e.message.source != source) {
                                            e.preventDefault();
                                        }
                                    });
                                }(yconsole, source));

                                // Collapse doesn't seem to work reliably unless we do it after DOM ready
                                (function (yconsole) {
                                    Y.on('domready', function () {
                                        yconsole.collapse();
                                    });
                                }(yconsole));

                                // Log reports
                                for (var i = 0; i < orderedReports.length; i++) {
                                    var template =
                                        '[{total}ms] {name}(): Called {calls} times. ' +
                                        'Avg: {avg}ms, Min: {min}ms, Max: {max}ms';
                                    var message = Y.substitute(template, orderedReports[i]);

                                    Y.log(message, 'time', source);
                                }

                                // Clean slate for next profile subject
                                Y.Profiler.clear();
                            }
                        }
                    }
                });
            });
        