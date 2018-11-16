
    /*
      yes, something like Mocha would've been nice,
      but we didn't want to add *any* dependencies
     */
    var source = '$foo:123px;\n\n.m {\n  width:$foo;\n}';
    var expected = '.m {\n  width: 123px; }\n';
    var result, test;

    test = 'simple compile';
    result = Sass.compile(source);
    if (result !== expected) {
      console.error('FAILED ' + test);
      console.log(source, result);
    } else {
      console.log('OK ' + test);
    }

    test = 'syntax error';
    source = '$foo:123px;\n\n.m {\n  width:$foo;\n}\n\nfoobar';
    result = Sass.compile(source);
    if (typeof result === 'string' || result.line !== 7 || result.message !== 'error: invalid top-level expression') {
      console.error('FAILED ' + test);
      console.log(source, result);
    } else {
      console.log('OK ' + test);
    }

    test = '@import compile';
    source = '@import "testfile";';
    expected = '.imported {\n  content: "testfile"; }\n';
    Sass.writeFile('testfile.scss', '.imported { content: "testfile"; }');
    result = Sass.compile(source);
    if (result !== expected) {
      console.error('FAILED ' + test);
      console.log(source, result);
    } else {
      console.log('OK ' + test);
    }

    test = '@import compile nested';
    source = '@import "nested/testfile";';
    expected = '.imported {\n  content: "testfile"; }\n';
    Sass.writeFile('nested/testfile.scss', '.imported { content: "testfile"; }');
    result = Sass.compile(source);
    if (result !== expected) {
      console.error('FAILED ' + test);
      console.log(source, result);
    } else {
      console.log('OK ' + test);
    }

    test = '@import compile not found';
    source = '@import "testfile2";';
    result = Sass.compile(source);
    if (typeof result === 'string' || result.line !== 1 || result.message !== 'error: file to import not found or unreadable: "testfile2"') {
      console.error('FAILED ' + test);
      console.log(source, result);
    } else {
      console.log('OK ' + test);
    }

    test = 'comments compile';
    source = '@import "nested/testfile";\n\n$foo:123px;\n\n.m {\n  width:$foo;\n}';
    expected = '/* line 1, /sass/nested/testfile */\n.imported {\n  content: "testfile"; }\n\n/* line 5, source string */\n.m {\n  width: 123px; }\n';
    Sass.options({comments: true});
    result = Sass.compile(source);
    if (result !== expected) {
      console.error('FAILED ' + test);
      console.log(source, result);
    } else {
      console.log('OK ' + test);
    }

  