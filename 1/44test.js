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
 MT("docType",
     "[tag !!! XML]");

  MT("comment",
     "[comment / Hello WORLD]");

  MT("notComment",
     "[tag %h1] This is not a / comment ");

  MT("attributes",
     "[tag %a]([variable title][operator =][string \"test\"]){[atom :title] [operator =>] [string \"test\"]}");

  MT("htmlCode",
     "[tag <h1>]Title[tag </h1>]");

  MT("rubyBlock",
     "[operator =][variable-2 @item]");

  MT("selectorRubyBlock",
     "[tag %a.selector=] [variable-2 @item]");

  MT("nestedRubyBlock",
      "[tag %a]",
      "   [operator =][variable puts] [string \"test\"]");

  MT("multilinePlaintext",
      "[tag %p]",
      "  Hello,",
      "  World");

  MT("multilineRuby",
      "[tag %p]",
      "  [comment -# this is a comment]",
      "     [comment and this is a comment too]",
      "  Date/Time",
      "  [operator -] [variable now] [operator =] [tag DateTime][operator .][variable now]",
      "  [tag %strong=] [variable now]",
      "  [operator -] [keyword if] [variable now] [operator >] [tag DateTime][operator .][variable parse]([string \"December 31, 2006\"])",
      "     [operator =][string \"Happy\"]",
      "     [operator =][string \"Belated\"]",
      "     [operator =][string \"Birthday\"]");

  MT("multilineComment",
      "[comment /]",
      "  [comment Multiline]",
      "  [comment Comment]");

  MT("hamlComment",
     "[comment -# this is a comment]");

  MT("multilineHamlComment",
     "[comment -# this is a comment]",
     "   [comment and this is a comment too]");

  MT("multilineHTMLComment",
    "[comment <!--]",
    "  [comment what a comment]",
    "  [comment -->]");

  MT("hamlAfterRubyTag",
    "[attribute .block]",
    "  [tag %strong=] [variable now]",
    "  [attribute .test]",
    "     [operator =][variable now]",
    "  [attribute .right]");

  MT("stretchedRuby",
     "[operator =] [variable puts] [string \"Hello\"],",
     "   [string \"World\"]");

  MT("interpolationInHashAttribute",
     //"[tag %div]{[atom :id] [operator =>] [string \"#{][variable test][string }_#{][variable ting][string }\"]} test");
     "[tag %div]{[atom :id] [operator =>] [string \"#{][variable test][string }_#{][variable ting][string }\"]} test");

  MT("interpolationInHTMLAttribute",
     "[tag %div]([variable title][operator =][string \"#{][variable test][string }_#{][variable ting]()[string }\"]) Test");
})();
