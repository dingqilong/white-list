const parse = require('../../../src/parsers/javascript');
const inferName = require('../../../src/infer/name');

function toComment(fn, file) {
  return parse(
    {
      file,
      source: fn instanceof Function ? '(' + fn.toString() + ')' : fn
    },
    {}
  )[0];
}

function evaluate(fn, file) {
  return inferName(toComment(fn, file));
}

test('inferName', function() {
  expect(
    evaluate(function() {
      // ExpressionStatement (comment attached here)
      //   AssignmentExpression
      //     MemberExpression
      //     Identifier
      /** Test */
      exports.name = test;
    }).name
  ).toBe('name');

  expect(
    evaluate(function() {
      // ExpressionStatement
      //   AssignmentExpression
      //     MemberExpression (comment attached here)
      //     FunctionExpression
      /** Test */
      exports.name = function() {};
    }).name
  ).toBe('name');

  expect(
    evaluate(function() {
      exports = {
        // Property (comment attached here)
        //   Identifier
        //   FunctionExpression
        /** Test */
        name: test
      };
    }).name
  ).toBe('name');

  expect(
    evaluate(function() {
      exports = {
        // Property
        //   Identifier (comment attached here)
        //   FunctionExpression
        /** Test */
        name() {}
      };
    }).name
  ).toBe('name');

  expect(
    evaluate(function() {
      exports = {
        // Property
        //   Identifier (comment attached here)
        //   FunctionExpression
        /** Test */
        name() {}
      };
    }).name
  ).toBe('name');

  expect(
    evaluate(function() {
      /** Test */
      function name() {}
    }).name
  ).toBe('name');

  expect(
    evaluate(function() {
      /** Test */
      const name = function() {};
    }).name
  ).toBe('name');

  expect(
    evaluate(function() {
      /** Test */
      const name = function name2() {};
    }).name
  ).toBe('name');

  expect(
    evaluate(function() {
      /** @name explicitName */
      function implicitName() {}
    }).name
  ).toBe('explicitName');

  expect(
    evaluate(function() {
      /** @alias explicitAlias */
      function implicitName() {}
    }).name
  ).toBe('explicitAlias');

  expect(
    evaluate(function() {
      /** @class ExplicitClass */
      function ImplicitClass() {}
    }).name
  ).toBe('ExplicitClass');

  expect(
    evaluate(function() {
      /** @class */
      function ImplicitClass() {}
    }).name
  ).toBe('ImplicitClass');

  expect(
    evaluate(function() {
      /** @event explicitEvent */
      function implicitName() {}
    }).name
  ).toBe('explicitEvent');

  expect(
    evaluate(function() {
      /** @typedef {Object} ExplicitTypedef */
      function implicitName() {}
    }).name
  ).toBe('ExplicitTypedef');

  expect(
    evaluate(function() {
      /** @callback explicitCallback */
      function implicitName() {}
    }).name
  ).toBe('explicitCallback');

  expect(
    evaluate(function() {
      /** @module explicitModule */
      function implicitName() {}
    }).name
  ).toBe('explicitModule');

  expect(
    evaluate(function() {
      /** @module {Function} explicitModule */
      function implicitName() {}
    }).name
  ).toBe('explicitModule');

  expect(
    evaluate(function() {
      /** @module */
      function implicitName() {}
    }, '/path/inferred-from-file.js').name
  ).toBe('inferred-from-file');

  expect(
    evaluate(function() {
      /** @module */
    }, '/path/inferred-from-file.js').name
  ).toBe('inferred-from-file');

  expect(evaluate('/** Test */ export function exported() {}').name).toBe(
    'exported'
  );

  expect(
    evaluate(
      '/** Test */ export default function() {}',
      '/path/inferred-from-file.js'
    ).name
  ).toBe('inferred-from-file');

  expect(
    evaluate(
      '/** Test */ export default function exported() {}',
      '/path/inferred-from-file.js'
    ).name
  ).toBe('exported');

  expect(evaluate('/** Test */ export var life = 42;').name).toBe('life');

  expect(evaluate('/** Test */ export class Wizard {}').name).toBe('Wizard');

  expect(
    evaluate(
      '/** Test */ export default class Warlock {}',
      '/path/inferred-from-file.js'
    ).name
  ).toBe('Warlock');

  expect(
    evaluate(
      '/** Test */ export default class {}',
      '/path/inferred-from-file.js'
    ).name
  ).toBe('inferred-from-file');
});
d.getVisible';
            var parts = jsdoc.name.shorten(startName);

            expect(parts.name).toEqual('getVisible');
            expect(parts.memberof).toEqual('elements.selected');
            expect(parts.scope).toEqual('.');
        });

        it('should work on protoyped names', function() {
            var startName = 'Validator.prototype.$element';
            var parts = jsdoc.name.shorten(startName);

            expect(parts.name).toEqual('$element');
            expect(parts.memberof).toEqual('Validator');
            expect(parts.scope).toEqual('#');
        });

        it('should work on inner names', function() {
            var startName = 'Button~_onclick';
            var parts = jsdoc.name.shorten(startName);

            expect(parts.name).toEqual('_onclick');
            expect(parts.memberof).toEqual('Button');
            expect(parts.scope).toEqual('~');
        });

        it('should work on global names', function() {
            var startName = 'close';
            var parts = jsdoc.name.shorten(startName);

            expect(parts.name).toEqual('close');
            expect(parts.memberof).toEqual('');
            expect(parts.scope).toEqual('');
        });

        it('should work when a single property uses bracket notation', function() {
            var startName = 'channels["#ops"]#open';
            var parts = jsdoc.name.shorten(startName);

            expect(parts.name).toEqual('open');
            expect(parts.memberof).toEqual('channels."#ops"');
            expect(parts.scope).toEqual('#');
        });

        it('should work when consecutive properties use bracket notation', function() {
            var startName = 'channels["#bots"]["log.max"]';
            var parts = jsdoc.name.shorten(startName);

            expect(parts.name).toEqual('"log.max"');
            expect(parts.memberof).toEqual('channels."#bots"');
            expect(parts.scope).toEqual('.');
        });

        it('should work when a property uses single-quoted bracket notation', function() {
            var startName = "channels['#ops']";
            var parts = jsdoc.name.shorten(startName);

            expect(parts.name).toBe("'#ops'");
            expect(parts.memberof).toBe('channels');
            expect(parts.scope).toBe('.');
        });

        it('should work on double-quoted strings', function() {
            var startName = '"foo.bar"';
            var parts = jsdoc.name.shorten(startName);

            expect(parts.name).toEqual('"foo.bar"');
            expect(parts.longname).toEqual('"foo.bar"');
            expect(parts.memberof).toEqual('');
            expect(parts.scope).toEqual('');
        });

        it('should work on single-quoted strings', function() {
            var startName = "'foo.bar'";
            var parts = jsdoc.name.shorten(startName);

            expect(parts.name).toBe("'foo.bar'");
            expect(parts.longname).toBe("'foo.bar'");
            expect(parts.memberof).toBe('');
            expect(parts.scope).toBe('');
        });

        it('should find the variation', function() {
            var startName = 'anim.fadein(2)';
            var parts = jsdoc.name.shorten(startName);

            expect(parts.variation).toEqual('2');
            expect(parts.name).toEqual('fadein');
            expect(parts.longname).toEqual('anim.fadein(2)');
        });
    });

    describe('applyNamespace', function() {
        it('should insert the namespace only before the name part of the longname', function() {
            var startName = 'lib.Panel#open';
            var endName = jsdoc.name.applyNamespace(startName, 'event');

            expect(endName, 'lib.Panel#event:open');
        });

        it('should insert the namespace before a global name', function() {
            var startName = 'maths/bigint';
            var endName = jsdoc.name.applyNamespace(startName, 'module');

            expect(endName, 'module:maths/bigint');
        });

        it('should treat quoted parts of the name as atomic and insert namespace before a quoted shortname', function() {
            var startName = 'foo."*dont\'t.look~in#here!"';
            var endName = jsdoc.name.applyNamespace(startName, 'event');

            expect(endName, 'foo.event:"*dont\'t.look~in#here!"');
        });

        it('should not add another namespace if one already exists.', function() {
            var startName = 'lib.Panel#event:open';
            var endName = jsdoc.name.applyNamespace(startName, 'event');

            expect(endName, 'lib.Panel#event:open');
        });
    });

    describe('stripNamespace', function() {
        it('should not change longnames without a leading namespace', function() {
            var startName = 'Foo#bar';
            var endName = jsdoc.name.stripNamespace(startName);

            expect(endName).toBe(startName);
        });

        it('should not change longnames with an embedded namespace', function() {
            var startName = 'foo/bar.baz~event:qux';
            var endName = jsdoc.name.stripNamespace(startName);

            expect(endName).toBe(startName);
        });

        it('should remove the leading namespace, if present', function() {
            var startName = 'module:foo/bar/baz';
            var endName = jsdoc.name.stripNamespace(startName);

            expect(endName).toBe('foo/bar/baz');
        });
    });

    describe('hasAncestor', function() {
        it('should return false if "parent" is missing', function() {
            var hasAncestor = jsdoc.name.hasAncestor(null, 'foo');

            expect(hasAncestor).toBe(false);
        });

        it('should return false if "child" is missing', function() {
            var hasAncestor = jsdoc.name.hasAncestor('foo');

            expect(hasAncestor).toBe(false);
        });

        it('should correctly identify when the immediate parent is passed in', function() {
            var hasAncestor = jsdoc.name.hasAncestor('module:foo', 'module:foo~bar');

            expect(hasAncestor).toBe(true);
        });

        it('should correctly identify when an ancestor is passed in', function() {
            var hasAncestor = jsdoc.name.hasAncestor('module:foo', 'module:foo~bar.Baz#qux');

            expect(hasAncestor).toBe(true);
        });

        it('should correctly identify when a non-ancestor is passed in', function() {
            var hasAncestor = jsdoc.name.hasAncestor('module:foo', 'foo');

            expect(hasAncestor).toBe(false);
        });

        it('should not say that a longname is its own ancestor', function() {
            var hasAncestor = jsdoc.name.hasAncestor('module:foo', 'module:foo');

            expect(hasAncestor).toBe(false);
        });
    });

    xdescribe('combine', function() {
        // TODO: tests
    });

    describe('stripVariation', function() {
        it('should not change longnames without a variation', function() {
            var startName = 'Foo#bar';
            var endName = jsdoc.name.stripVariation(startName);

            expect(endName).toBe(startName);
        });

        it('should remove the variation, if present', function() {
            var startName = 'Foo#bar(qux)';
            var endName = jsdoc.name.stripVariation(startName);

            expect(endName).toBe('Foo#bar');
        });
    });

    xdescribe('longnamesToTree', function() {
        // TODO: tests
    });

    describe('splitName', function() {
        it('should find the name and description.', function() {
            var startName = 'ns.Page#"last \\"sentence\\"".words~sort(2)   - This is a description. ';
            var parts = jsdoc.name.splitName(startName);

            expect(parts.name, 'ns.Page#"last \\"sentence\\"".words~sort(2)');
            expect(parts.description, 'This is a description.');
        });

        it('should strip the separator when the separator starts on the same line as the name', function() {
            var startName = 'socket - The networking kind, not the wrench.';
            var parts = jsdoc.name.splitName(startName);

            expect(parts.name).toBe('socket');
            expect(parts.description).toBe('The networking kind, not the wrench.');
        });

        it('should not strip a separator that is preceded by a line break', function() {
            var startName = 'socket\n - The networking kind, not the wrench.';
            var parts = jsdoc.name.splitName(startName);

            expect(parts.name).toBe('socket');
            expect(parts.description).toBe('- The networking kind, not the wrench.');
        });

        it('should allow default values to have brackets', function() {
            var startName = '[path=["home", "user"]] - Path split into components';
            var parts = jsdoc.name.splitName(startName);

            expect(parts.name).toBe('[path=["home", "user"]]');
            expect(parts.description).toBe('Path split into components');
        });

        it('should allow default values to have unmatched brackets inside strings', function() {
            var startName = '[path=["Unmatched begin: ["]] - Path split into components';
            var parts = jsdoc.name.splitName(startName);

            expect(parts.name).toBe('[path=["Unmatched begin: ["]]');
            expect(parts.description).toBe('Path split into components');
        });

        it('should fail gracefully when the default value has an unmatched bracket', function() {
            var startName = '[path=["home", "user"] - Path split into components';
            var parts = jsdoc.name.splitName(startName);

            expect(parts).not.toBe(null);
            expect(parts.name).toBe('[path=["home", "user"]');
            expect(parts.description).toBe('Path split into components');
        });

        it('should fail gracefully when the default value has an unmatched quote', function() {
            var startName = '[path=["home", "user] - Path split into components';
            var parts = jsdoc.name.splitName(startName);

            expect(parts).not.toBe(null);
            expect(parts.name).toBe('[path=["home", "user]');
            expect(parts.description).toBe('Path split into components');
        });
    });

    describe('resolve', function() {
        // TODO: further tests (namespaces, modules, ...)

        function makeDoclet(tagStrings) {
            var comment = '/**\n' + tagStrings.join('\n') + '\n*/';

            return new jsdoc.doclet.Doclet(comment, {});
        }

        describe('aliases', function() {
            // If `doclet.alias` is defined, `doclet.name` will be set to the same value by the time
            // we call `resolve()`. Therefore, we set both `@alias` and `@name` in these tests.

            it('can resolve aliases that identify instance members', function() {
                var doclet = makeDoclet(['@alias Foo#bar', '@name Foo#bar']);

                jsdoc.name.resolve(doclet);

                expect(doclet.name).toBe('bar');
                expect(doclet.memberof).toBe('Foo');
                expect(doclet.scope).toBe('instance');
                expect(doclet.longname).toBe('Foo#bar');
            });

            it('can resolve aliases that identify static members', function() {
                var doclet = makeDoclet(['@alias Foo.bar', '@name Foo.bar']);

                jsdoc.name.resolve(doclet);

                expect(doclet.name).toBe('bar');
                expect(doclet.memberof).toBe('Foo');
                expect(doclet.scope).toBe('static');
                expect(doclet.longname).toBe('Foo.bar');
            });

            it('works when the alias only specifies the short name', function() {
                var doclet = makeDoclet(['@alias bar', '@name bar', '@memberof Foo', '@instance']);

                jsdoc.name.resolve(doclet);

                expect(doclet.name).toBe('bar');
                expect(doclet.memberof).toBe('Foo');
                expect(doclet.scope).toBe('instance');
                expect(doclet.longname).toBe('Foo#bar');
            });
        });

        describe('events', function() {
            var event = '@event';
            var memberOf = '@memberof MyClass';
            var name = '@name A';

            // Test the basic @event that is not nested.
            it('unnested @event gets resolved correctly', function() {
                var doclet = makeDoclet([event, name]);

                jsdoc.name.resolve(doclet);

                expect(doclet.name).toEqual('A');
                expect(doclet.memberof).toBeUndefined();
                expect(doclet.longname).toEqual('event:A');
            });

            // test all permutations of @event @name [name] @memberof.
            it('@event @name @memberof resolves correctly', function() {
                var doclet = makeDoclet([event, name, memberOf]);

                jsdoc.name.resolve(doclet);

                expect(doclet.name).toEqual('A');
                expect(doclet.memberof).toEqual('MyClass');
                expect(doclet.longname).toEqual('MyClass.event:A');
            });
            it('@event @memberof @name resolves correctly', function() {
                var doclet = makeDoclet([event, memberOf, name]);

                jsdoc.name.resolve(doclet);

                expect(doclet.name).toEqual('A');
                expect(doclet.memberof).toEqual('MyClass');
                expect(doclet.longname).toEqual('MyClass.event:A');
            });
            it('@name @event @memberof resolves correctly', function() {
                var doclet = makeDoclet([name, event, memberOf]);

                jsdoc.name.resolve(doclet);

                expect(doclet.name).toEqual('A');
                expect(doclet.memberof).toEqual('MyClass');
                expect(doclet.longname).toEqual('MyClass.event:A');
            });
            it('@name @memberof @event resolves correctly', function() {
                var doclet = makeDoclet([name, memberOf, event]);

                jsdoc.name.resolve(doclet);

                expect(doclet.name).toEqual('A');
                expect(doclet.memberof).toEqual('MyClass');
                expect(doclet.longname).toEqual('MyClass.event:A');
            });
            it('@memberof @event @name resolves correctly', function() {
                var doclet = makeDoclet([memberOf, event, name]);

                jsdoc.name.resolve(doclet);

                expect(doclet.name).toEqual('A');
                expect(doclet.memberof).toEqual('MyClass');
                expect(doclet.longname).toEqual('MyClass.event:A');
            });
            it('@memberof @name @event resolves correctly', function() {
                var doclet = makeDoclet([memberOf, name, event]);

                jsdoc.name.resolve(doclet);

                expect(doclet.name).toEqual('A');
                expect(doclet.memberof).toEqual('MyClass');
                expect(doclet.longname).toEqual('MyClass.event:A');
            });

            // test all permutations of @event [name]  @memberof
            it('@event [name] @memberof resolves correctly', function() {
                var doclet = makeDoclet(['@event A', memberOf]);

                jsdoc.name.resolve(doclet);

                expect(doclet.name).toEqual('A');
                expect(doclet.memberof).toEqual('MyClass');
                expect(doclet.longname).toEqual('MyClass.event:A');
            });
            it('@memberof @event [name] resolves correctly', function() {
                var doclet = makeDoclet([memberOf, '@event A']);

                jsdoc.name.resolve(doclet);

                expect(doclet.name).toEqual('A');
                expect(doclet.memberof).toEqual('MyClass');
                expect(doclet.longname).toEqual('MyClass.event:A');
            });

            // test full @event A.B
            it('full @event definition works', function() {
                var doclet = makeDoclet(['@event MyClass.A']);

                jsdoc.name.resolve(doclet);

                expect(doclet.name).toEqual('A');
                expect(doclet.memberof).toEqual('MyClass');
                expect(doclet.longname).toEqual('MyClass.event:A');
            });
            it('full @event definition with event: works', function() {
                var doclet = makeDoclet(['@event MyClass.event:A']);

                jsdoc.name.resolve(doclet);

                expect(doclet.name).toEqual('event:A');
                expect(doclet.memberof).toEqual('MyClass');
                expect(doclet.longname).toEqual('MyClass.event:A');
            });

            // a double-nested one just in case
            it('@event @name MyClass.EventName @memberof somethingelse works', function() {
                var doclet = makeDoclet([event, '@name MyClass.A', '@memberof MyNamespace']);

                jsdoc.name.resolve(doclet);

                expect(doclet.name).toEqual('A');
                expect(doclet.memberof).toEqual('MyNamespace.MyClass');
                expect(doclet.longname).toEqual('MyNamespace.MyClass.event:A');
            });
        });

        describe('special names', function() {
            // TODO: this test doesn't test what it claims to test! copy-and-paste error?
            it('correctly handles a function parameter named "prototype"', function() {
                var doclet = makeDoclet([
                    '@name Bar.prototype.baz',
                    '@function',
                    '@memberof module:foo',
                    '@param {string} qux'
                ]);

                jsdoc.name.resolve(doclet);

                expect(doclet.name).toBe('baz');
                expect(doclet.memberof).toBe('module:foo.Bar');
                expect(doclet.longname).toBe('module:foo.Bar#baz');
            });
        });
    });
});
