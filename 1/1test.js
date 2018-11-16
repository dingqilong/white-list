define(["require", "exports", "module", "system"], function(require, exports, module) {

exports.print = typeof print !== "undefined" ? print : function () {
    var system = require("system");
    var stdio = system.stdio;
    stdio.print.apply(stdio, arguments);
};

exports.assert = function (guard, message) {
    if (guard) {
        exports.print('PASS ' + message, 'pass');
    } else {
        exports.print('FAIL ' + message, 'fail');
    }
};


});

  MT("oneElementPerLine",
     "[tag h1] Hey There .h2");

  MT("idShortcut",
     "[attribute&def #test] Hey There");

  MT("tagWithIdShortcuts",
     "[tag h1][attribute&def #test] Hey There");

  MT("classShortcut",
     "[attribute&qualifier .hello] Hey There");

  MT("tagWithIdAndClassShortcuts",
     "[tag h1][attribute&def #test][attribute&qualifier .hello] Hey There");

  MT("docType",
     "[keyword doctype] xml");

  MT("comment",
     "[comment / Hello WORLD]");

  MT("notComment",
     "[tag h1] This is not a / comment ");

  MT("attributes",
     "[tag a]([attribute title]=[string \"test\"]) [attribute href]=[string \"link\"]}");

  MT("multiLineAttributes",
     "[tag a]([attribute title]=[string \"test\"]",
     "  ) [attribute href]=[string \"link\"]}");

  MT("htmlCode",
     "[tag&bracket <][tag h1][tag&bracket >]Title[tag&bracket </][tag h1][tag&bracket >]");

  MT("rubyBlock",
     "[operator&special =][variable-2 @item]");

  MT("selectorRubyBlock",
     "[tag a][attribute&qualifier .test][operator&special =] [variable-2 @item]");

  MT("nestedRubyBlock",
      "[tag a]",
      "  [operator&special =][variable puts] [string \"test\"]");

  MT("multilinePlaintext",
      "[tag p]",
      "  | Hello,",
      "    World");

  MT("multilineRuby",
      "[tag p]",
      "  [comment /# this is a comment]",
      "     [comment and this is a comment too]",
      "  | Date/Time",
      "  [operator&special -] [variable now] [operator =] [tag DateTime][operator .][property now]",
      "  [tag strong][operator&special =] [variable now]",
      "  [operator&special -] [keyword if] [variable now] [operator >] [tag DateTime][operator .][property parse]([string \"December 31, 2006\"])",
      "     [operator&special =][string \"Happy\"]",
      "     [operator&special =][string \"Belated\"]",
      "     [operator&special =][string \"Birthday\"]");

  MT("multilineComment",
      "[comment /]",
      "  [comment Multiline]",
      "  [comment Comment]");

  MT("hamlAfterRubyTag",
    "[attribute&qualifier .block]",
    "  [tag strong][operator&special =] [variable now]",
    "  [attribute&qualifier .test]",
    "     [operator&special =][variable now]",
    "  [attribute&qualifier .right]");

  MT("stretchedRuby",
     "[operator&special =] [variable puts] [string \"Hello\"],",
     "   [string \"World\"]");

  MT("interpolationInHashAttribute",
     "[tag div]{[attribute id] = [string \"]#{[variable test]}[string _]#{[variable ting]}[string \"]} test");

  MT("interpolationInHTMLAttribute",
     "[tag div]([attribute title]=[string \"]#{[variable test]}[string _]#{[variable ting]()}[string \"]) Test");
})();
ol',
      'foo',
      'bar',
      '',
      '[variable-2 # foo]',
      '[variable-2 # bar]');

  MT('olNoBlank',
      'foo',
      'bar',
      '[variable-2 # foo]',
      '[variable-2 # bar]');

  MT('ulFormatting',
      '[variable-2 * ][variable-2&em _foo_][variable-2 bar]',
      '[variable-2 * ][variable-2&strong *][variable-2&em&strong _foo_]' +
        '[variable-2&strong *][variable-2  bar]',
      '[variable-2 * ][variable-2&strong *foo*][variable-2 bar]');

  MT('olFormatting',
      '[variable-2 # ][variable-2&em _foo_][variable-2 bar]',
      '[variable-2 # ][variable-2&strong *][variable-2&em&strong _foo_]' +
        '[variable-2&strong *][variable-2  bar]',
      '[variable-2 # ][variable-2&strong *foo*][variable-2 bar]');

  MT('ulNested',
      '[variable-2 * foo]',
      '[variable-3 ** bar]',
      '[keyword *** bar]',
      '[variable-2 **** bar]',
      '[variable-3 ** bar]');

  MT('olNested',
      '[variable-2 # foo]',
      '[variable-3 ## bar]',
      '[keyword ### bar]',
      '[variable-2 #### bar]',
      '[variable-3 ## bar]');

  MT('ulNestedWithOl',
      '[variable-2 * foo]',
      '[variable-3 ## bar]',
      '[keyword *** bar]',
      '[variable-2 #### bar]',
      '[variable-3 ** bar]');

  MT('olNestedWithUl',
      '[variable-2 # foo]',
      '[variable-3 ** bar]',
      '[keyword ### bar]',
      '[variable-2 **** bar]',
      '[variable-3 ## bar]');

  MT('definitionList',
      '[number - coffee := Hot ][number&em _and_][number  black]',
      '',
      'Normal text.');

  MT('definitionListSpan',
      '[number - coffee :=]',
      '',
      '[number Hot ][number&em _and_][number  black =:]',
      '',
      'Normal text.');

  MT('boo',
      '[number - dog := woof woof]',
      '[number - cat := meow meow]',
      '[number - whale :=]',
      '[number Whale noises.]',
      '',
      '[number Also, ][number&em _splashing_][number . =:]');

  /*
   * Attributes
   */

  MT('divWithAttribute',
      '[punctuation div][punctuation&attribute (#my-id)][punctuation . foo bar]');

  MT('divWithAttributeAnd2emRightPadding',
      '[punctuation div][punctuation&attribute (#my-id)((][punctuation . foo bar]');

  MT('divWithClassAndId',
      '[punctuation div][punctuation&attribute (my-class#my-id)][punctuation . foo bar]');

  MT('paragraphWithCss',
      'p[attribute {color:red;}]. foo bar');

  MT('paragraphNestedStyles',
      'p. [strong *foo ][strong&em _bar_][strong *]');

  MT('paragraphWithLanguage',
      'p[attribute [[fr]]]. Parlez-vous français?');

  MT('paragraphLeftAlign',
      'p[attribute <]. Left');

  MT('paragraphRightAlign',
      'p[attribute >]. Right');

  MT('paragraphRightAlign',
      'p[attribute =]. Center');

  MT('paragraphJustified',
      'p[attribute <>]. Justified');

  MT('paragraphWithLeftIndent1em',
      'p[attribute (]. Left');

  MT('paragraphWithRightIndent1em',
      'p[attribute )]. Right');

  MT('paragraphWithLeftIndent2em',
      'p[attribute ((]. Left');

  MT('paragraphWithRightIndent2em',
      'p[attribute ))]. Right');

  MT('paragraphWithLeftIndent3emRightIndent2em',
      'p[attribute ((())]. Right');

  MT('divFormatting',
      '[punctuation div. ][punctuation&strong *foo ]' +
        '[punctuation&strong&em _bar_][punctuation&strong *]');

  MT('phraseModifierAttributes',
      'p[attribute (my-class)]. This is a paragraph that has a class and' +
      ' this [em _][em&attribute (#special-phrase)][em emphasized phrase_]' +
      ' has an id.');

  MT('linkWithClass',
      '[link "(my-class). This is a link with class":http://redcloth.org]');

  /*
   * Layouts
   */

  MT('paragraphLayouts',
      'p. This is one paragraph.',
      '',
      'p. This is another.');

  MT('div',
      '[punctuation div. foo bar]');

  MT('pre',
      '[operator pre. Text]');

  MT('bq.',
      '[bracket bq. foo bar]',
      '',
      'Normal text.');

  MT('footnote',
      '[variable fn123. foo ][variable&strong *bar*]');

  /*
   * Spanning Layouts
   */

  MT('bq..ThenParagraph',
      '[bracket bq.. foo bar]',
      '',
      '[bracket More quote.]',
      'p. Normal Text');

  MT('bq..ThenH1',
      '[bracket bq.. foo bar]',
      '',
      '[bracket More quote.]',
      '[header&header-1 h1. Header Text]');

  MT('bc..ThenParagraph',
      '[atom bc.. # Some ruby code]',
      '[atom obj = {foo: :bar}]',
      '[atom puts obj]',
      '',
      '[atom obj[[:love]] = "*love*"]',
      '[atom puts obj.love.upcase]',
      '',
      'p. Normal text.');

  MT('fn1..ThenParagraph',
      '[variable fn1.. foo bar]',
      '',
      '[variable More.]',
      'p. Normal Text');

  MT('pre..ThenParagraph',
      '[operator pre.. foo bar]',
      '',
      '[operator More.]',
      'p. Normal Text');

  /*
   * Tables
   */

  MT('table',
      '[variable-3&operator |_. name |_. age|]',
      '[variable-3 |][variable-3&strong *Walter*][variable-3 |   5  |]',
      '[variable-3 |Florence|   6  |]',
      '',
      'p. Normal text.');

  MT('tableWithAttributes',
      '[variable-3&operator |_. name |_. age|]',
      '[variable-3 |][variable-3&attribute /2.][variable-3  Jim |]',
      '[variable-3 |][variable-3&attribute \\2{color: red}.][variable-3  Sam |]');

  /*
   * HTML
   */

  MT('html',
      '[comment <div id="wrapper">]',
      '[comment <section id="introduction">]',
      '',
      '[header&header-1 h1. Welcome]',
      '',
      '[variable-2 * Item one]',
      '[variable-2 * Item two]',
      '',
      '[comment <a href="http://example.com">Example</a>]',
      '',
      '[comment </section>]',
      '[comment </div>]');

  MT('inlineHtml',
      'I can use HTML directly in my [comment <span class="youbetcha">Textile</span>].');

  /*
   * No-Textile
   */

  MT('notextile',
    '[string-2 notextile. *No* formatting]');

  MT('notextileInline',
      'Use [string-2 ==*asterisks*==] for [strong *strong*] text.');

  MT('notextileWithPre',
      '[operator pre. *No* formatting]');

  MT('notextileWithSpanningPre',
      '[operator pre.. *No* formatting]',
      '',
      '[operator *No* formatting]');
})();
