const parse = require('../../../src/parsers/javascript');
const inferKind = require('../../../src/infer/kind');
const inferType = require('../../../src/infer/type');

function toComment(code) {
  return parse(
    {
      source: code
    },
    {}
  )[0];
}

function evaluate(code) {
  return inferType(inferKind(toComment(code)));
}

test('inferType', function() {
  expect(evaluate('/** @typedef {T} V */').type).toEqual({
    name: 'T',
    type: 'NameExpression'
  });

  expect(evaluate('/** */' + 'type V = T').type).toEqual({
    name: 'T',
    type: 'NameExpression'
  });

  expect(evaluate('/** @typedef {Array<T>} V */').type).toEqual({
    applications: [
      {
        name: 'T',
        type: 'NameExpression'
      }
    ],
    expression: {
      name: 'Array',
      type: 'NameExpression'
    },
    type: 'TypeApplication'
  });

  expect(evaluate('/** */' + "type V = {a:number,'b':string}").type).toEqual({
    fields: [
      {
        key: 'a',
        type: 'FieldType',
        value: {
          name: 'number',
          type: 'NameExpression'
        }
      },
      {
        key: 'b',
        type: 'FieldType',
        value: {
          name: 'string',
          type: 'NameExpression'
        }
      }
    ],
    type: 'RecordType'
  });

  expect(evaluate('/** */' + 'type V = Array<T>').type).toEqual({
    applications: [
      {
        name: 'T',
        type: 'NameExpression'
      }
    ],
    expression: {
      name: 'Array',
      type: 'NameExpression'
    },
    type: 'TypeApplication'
  });

  expect(evaluate('/** */' + 'var x: number').type).toEqual({
    name: 'number',
    type: 'NameExpression'
  });

  expect(evaluate('/** */' + 'let x: number').type).toEqual({
    name: 'number',
    type: 'NameExpression'
  });

  expect(evaluate('/** */' + 'const x: number = 42;').type).toEqual({
    name: 'number',
    type: 'NameExpression'
  });

  expect(evaluate('let x,' + '/** */' + 'y: number').type).toEqual({
    name: 'number',
    type: 'NameExpression'
  });

  expect(evaluate('class C {' + '/** */' + 'x: number;' + '}').type).toEqual({
    name: 'number',
    type: 'NameExpression'
  });

  expect(evaluate('/** */' + 'const x = 42;').type).toEqual({
    name: 'number',
    type: 'NameExpression'
  });

  expect(evaluate('/** */' + 'const x = "abc";').type).toEqual({
    name: 'string',
    type: 'NameExpression'
  });

  expect(evaluate('/** */' + 'const x = true;').type).toEqual({
    name: 'boolean',
    type: 'NameExpression'
  });
});

        text = expressionAndText.newString;
    }

    if (canHaveName) {
        nameAndDescription = jsdoc.name.splitName(text);
        name = nameAndDescription.name;
        text = nameAndDescription.description;
    }

    // an inline @type tag, like {@type Foo}, overrides the type expression
    if (canHaveType) {
        typeOverride = jsdoc.tag.inline.extractInlineTag(text, 'type');
        if (typeOverride.tags && typeOverride.tags[0]) {
            typeExpression = typeOverride.tags[0].text;
        }
        text = typeOverride.newString;
    }

    return {
        name: name,
        typeExpression: typeExpression,
        text: text
    };
}

/**
 * Information provided in a JSDoc tag.
 *
 * @typedef {Object} TagInfo
 * @memberof module:jsdoc/tag/type
 * @property {string} TagInfo.defaultvalue - The default value of the member.
 * @property {string} TagInfo.name - The name of the member (for example, `myParamName`).
 * @property {boolean} TagInfo.nullable - Indicates whether the member can be set to `null` or
 * `undefined`.
 * @property {boolean} TagInfo.optional - Indicates whether the member is optional.
 * @property {string} TagInfo.text - Descriptive text for the member (for example, `The user's email
 * address.`).
 * @property {Array.<string>} TagInfo.type - The type or types that the member can contain (for
 * example, `string` or `MyNamespace.MyClass`).
 * @property {string} TagInfo.typeExpression - The type expression that was parsed to identify the
 * types.
 * @property {boolean} TagInfo.variable - Indicates whether the number of members that are provided
 * can vary (for example, in a function that accepts any number of parameters).
 */

// TODO: move to module:jsdoc/name?
/**
 * Extract JSDoc-style type information from the name specified in the tag info, including the
 * member name; whether the member is optional; and the default value of the member.
 *
 * @private
 * @param {module:jsdoc/tag/type.TagInfo} tagInfo - Information contained in the tag.
 * @return {module:jsdoc/tag/type.TagInfo} Updated information from the tag.
 */
function parseName(tagInfo) {
    // like '[foo]' or '[ foo ]' or '[foo=bar]' or '[ foo=bar ]' or '[ foo = bar ]'
    // or 'foo=bar' or 'foo = bar'
    if ( /^(\[)?\s*(.+?)\s*(\])?$/.test(tagInfo.name) ) {
        tagInfo.name = RegExp.$2;
        // were the "optional" brackets present?
        if (RegExp.$1 && RegExp.$3) {
            tagInfo.optional = true;
        }

        // like 'foo=bar' or 'foo = bar'
        if ( /^(.+?)\s*=\s*(.+)$/.test(tagInfo.name) ) {
            tagInfo.name = RegExp.$1;
            tagInfo.defaultvalue = jsdoc.util.cast.cast(RegExp.$2);
        }
    }

    return tagInfo;
}

/** @private */
function getTypeStrings(parsedType, isOutermostType) {
    var applications;
    var typeString;

    var types = [];

    var TYPES = catharsis.Types;

    switch (parsedType.type) {
        case TYPES.AllLiteral:
            types.push('*');
            break;
        case TYPES.FunctionType:
            types.push('function');
            break;
        case TYPES.NameExpression:
            types.push(parsedType.name);
            break;
        case TYPES.NullLiteral:
            types.push('null');
            break;
        case TYPES.RecordType:
            types.push('Object');
            break;
        case TYPES.TypeApplication:
            // if this is the outermost type, we strip the modifiers; otherwise, we keep them
            if (isOutermostType) {
                applications = parsedType.applications.map(function(application) {
                    return catharsis.stringify(application);
                }).join(', ');
                typeString = util.format( '%s.<%s>', getTypeStrings(parsedType.expression),
                    applications );

                types.push(typeString);
            }
            else {
                types.push( catharsis.stringify(parsedType) );
            }
            break;
        case TYPES.TypeUnion:
            parsedType.elements.forEach(function(element) {
                types = types.concat( getTypeStrings(element) );
            });
            break;
        case TYPES.UndefinedLiteral:
            types.push('undefined');
            break;
        case TYPES.UnknownLiteral:
            types.push('?');
            break;
        default:
            // this shouldn't happen
            throw new Error( util.format('unrecognized type %s in parsed type: %j', parsedType.type,
                parsedType) );
    }

    return types;
}

/**
 * Extract JSDoc-style and Closure Compiler-style type information from the type expression
 * specified in the tag info.
 *
 * @private
 * @param {module:jsdoc/tag/type.TagInfo} tagInfo - Information contained in the tag.
 * @return {module:jsdoc/tag/type.TagInfo} Updated information from the tag.
 */
function parseTypeExpression(tagInfo) {
    var parsedType;

    // don't try to parse empty type expressions
    if (!tagInfo.typeExpression) {
        return tagInfo;
    }

    try {
        parsedType = catharsis.parse(tagInfo.typeExpression, {jsdoc: true});
    }
    catch (e) {
        // always re-throw so the caller has a chance to report which file was bad
        throw new Error( util.format('Invalid type expression "%s": %s', tagInfo.typeExpression,
            e.message) );
    }

    tagInfo.type = tagInfo.type.concat( getTypeStrings(parsedType, true) );
    tagInfo.parsedType = parsedType;

    // Catharsis and JSDoc use the same names for 'optional' and 'nullable'...
    ['optional', 'nullable'].forEach(function(key) {
        if (parsedType[key] !== null && parsedType[key] !== undefined) {
            tagInfo[key] = parsedType[key];
        }
    });

    // ...but not 'variable'.
    if (parsedType.repeatable !== null && parsedType.repeatable !== undefined) {
        tagInfo.variable = parsedType.repeatable;
    }

    return tagInfo;
}

// TODO: allow users to add/remove type parsers (perhaps via plugins)
var typeParsers = [parseName, parseTypeExpression];

/**
 * Parse the value of a JSDoc tag.
 *
 * @param {string} tagValue - The value of the tag. For example, the tag `@param {string} name` has
 * a value of `{string} name`.
 * @param {boolean} canHaveName - Indicates whether the value can include a symbol name.
 * @param {boolean} canHaveType - Indicates whether the value can include a type expression that
 * describes the symbol.
 * @return {module:jsdoc/tag/type.TagInfo} Information obtained from the tag.
 * @throws {Error} Thrown if a type expression cannot be parsed.
 */
exports.parse = function(tagValue, canHaveName, canHaveType) {
    var tagInfo;

    if (typeof tagValue !== 'string') {
        tagValue = '';
    }

    tagInfo = getTagInfo(tagValue, canHaveName, canHaveType);
    tagInfo.type = tagInfo.type || [];

    typeParsers.forEach(function(parser) {
        tagInfo = parser(tagInfo);
    });

    // if we wanted a type, but the parsers didn't add any type names, use the type expression
    if (canHaveType && !tagInfo.type.length && tagInfo.typeExpression) {
        tagInfo.type = [tagInfo.typeExpression];
    }

    return tagInfo;
};
