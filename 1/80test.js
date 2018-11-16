// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

// Don't take these too seriously -- the expected results appear to be
// based on the results of actual runs without any serious manual
// verification. If a change you made causes them to fail, the test is
// as likely to wrong as the code.

(function() {
  var mode = CodeMirror.getMode({tabSize: 4}, "xquery");
  function MT(name) { test.mode(name, mode, Array.prototype.slice.call(arguments, 1)); }

  MT("eviltest",
     "[keyword xquery] [keyword version] [variable &quot;1][keyword .][atom 0][keyword -][variable ml&quot;][def&variable ;]      [comment (: this is       : a          \"comment\" :)]",
     "      [keyword let] [variable $let] [keyword :=] [variable &lt;x] [variable attr][keyword =][variable &quot;value&quot;&gt;&quot;test&quot;&lt;func&gt][def&variable ;function]() [variable $var] {[keyword function]()} {[variable $var]}[variable &lt;][keyword /][variable func&gt;&lt;][keyword /][variable x&gt;]",
     "      [keyword let] [variable $joe][keyword :=][atom 1]",
     "      [keyword return] [keyword element] [variable element] {",
     "          [keyword attribute] [variable attribute] { [atom 1] },",
     "          [keyword element] [variable test] { [variable &#39;a&#39;] },           [keyword attribute] [variable foo] { [variable &quot;bar&quot;] },",
     "          [def&variable fn:doc]()[[ [variable foo][keyword /][variable @bar] [keyword eq] [variable $let] ]],",
     "          [keyword //][variable x] }                 [comment (: a more 'evil' test :)]",
     "      [comment (: Modified Blakeley example (: with nested comment :) ... :)]",
     "      [keyword declare] [keyword private] [keyword function] [def&variable local:declare]() {()}[variable ;]",
     "      [keyword declare] [keyword private] [keyword function] [def&variable local:private]() {()}[variable ;]",
     "      [keyword declare] [keyword private] [keyword function] [def&variable local:function]() {()}[variable ;]",
     "      [keyword declare] [keyword private] [keyword function] [def&variable local:local]() {()}[variable ;]",
     "      [keyword let] [variable $let] [keyword :=] [variable &lt;let&gt;let] [variable $let] [keyword :=] [variable &quot;let&quot;&lt;][keyword /let][variable &gt;]",
     "      [keyword return] [keyword element] [variable element] {",
     "          [keyword attribute] [variable attribute] { [keyword try] { [def&variable xdmp:version]() } [keyword catch]([variable $e]) { [def&variable xdmp:log]([variable $e]) } },",
     "          [keyword attribute] [variable fn:doc] { [variable &quot;bar&quot;] [variable castable] [keyword as] [atom xs:string] },",
     "          [keyword element] [variable text] { [keyword text] { [variable &quot;text&quot;] } },",
     "          [def&variable fn:doc]()[[ [qualifier child::][variable eq][keyword /]([variable @bar] [keyword |] [qualifier attribute::][variable attribute]) [keyword eq] [variable $let] ]],",
     "          [keyword //][variable fn:doc]",
     "      }");

  MT("testEmptySequenceKeyword",
     "[string \"foo\"] [keyword instance] [keyword of] [keyword empty-sequence]()");

  MT("testMultiAttr",
     "[tag <p ][attribute a1]=[string \"foo\"] [attribute a2]=[string \"bar\"][tag >][variable hello] [variable world][tag </p>]");

  MT("test namespaced variable",
     "[keyword declare] [keyword namespace] [variable e] [keyword =] [string \"http://example.com/ANamespace\"][variable ;declare] [keyword variable] [variable $e:exampleComThisVarIsNotRecognized] [keyword as] [keyword element]([keyword *]) [variable external;]");

  MT("test EQName variable",
     "[keyword declare] [keyword variable] [variable $\"http://www.example.com/ns/my\":var] [keyword :=] [atom 12][variable ;]",
     "[tag <out>]{[variable $\"http://www.example.com/ns/my\":var]}[tag </out>]");

  MT("test EQName function",
     "[keyword declare] [keyword function] [def&variable \"http://www.example.com/ns/my\":fn] ([variable $a] [keyword as] [atom xs:integer]) [keyword as] [atom xs:integer] {",
     "   [variable $a] [keyword +] [atom 2]",
     "}[variable ;]",
     "[tag <out>]{[def&variable \"http://www.example.com/ns/my\":fn]([atom 12])}[tag </out>]");

  MT("test EQName function with single quotes",
     "[keyword declare] [keyword function] [def&variable 'http://www.example.com/ns/my':fn] ([variable $a] [keyword as] [atom xs:integer]) [keyword as] [atom xs:integer] {",
     "   [variable $a] [keyword +] [atom 2]",
     "}[variable ;]",
     "[tag <out>]{[def&variable 'http://www.example.com/ns/my':fn]([atom 12])}[tag </out>]");

  MT("testProcessingInstructions",
     "[def&variable data]([comment&meta <?target content?>]) [keyword instance] [keyword of] [atom xs:string]");

  MT("testQuoteEscapeDouble",
     "[keyword let] [variable $rootfolder] [keyword :=] [string \"c:\\builds\\winnt\\HEAD\\qa\\scripts\\\"]",
     "[keyword let] [variable $keysfolder] [keyword :=] [def&variable concat]([variable $rootfolder], [string \"keys\\\"])");
})();
, '}[string .a"]'],
    '[comment /* }?>{{ */] [string "a?>}{{aa][variable-2 $aaa][string .a}a?>a"]',
    5
  );

  MT('variable_interpolation_complex_syntax_3_2',
     '[meta <?php] [comment /* Recursive monsters 2 */]',
     '[keyword echo] ' + m2[0] + ';',
     '[keyword echo] ' + m2[1] + ';',
     '[keyword echo] ' + m2[5] + ';',
     '[keyword echo] ' + m2[4] + ';',
     '[keyword echo] ' + m2[2] + ';',
     '[keyword echo] ' + m2[3] + ';',
     '[keyword echo] [string "end"];',
     '[meta ?>]');

  function build_recursive_monsters_2(mf1, mf2, nt, t, n){
    var monsters = [t];
    for (var i = 1; i <= n; ++i)
      monsters[i] = nt[0] + mf1[i - 1] + nt[1] + mf2[i - 1] + nt[2] + monsters[i - 1] + nt[3];
    return monsters;
  }

  var m3 = build_recursive_monsters_2(
    m1,
    m2,
    ['[string "a][variable-2 $]{[variable aaa] [operator +] ', ' [operator +] ', ' [operator +] ', '}[string .a"]'],
    '[comment /* }?>{{ */] [string "a?>}{{aa][variable-2 $aaa][string .a}a?>a"]',
    4
  );

  MT('variable_interpolation_complex_syntax_3_3',
     '[meta <?php] [comment /* Recursive monsters 2 */]',
     '[keyword echo] ' + m3[4] + ';',
     '[keyword echo] ' + m3[0] + ';',
     '[keyword echo] ' + m3[3] + ';',
     '[keyword echo] ' + m3[1] + ';',
     '[keyword echo] ' + m3[2] + ';',
     '[keyword echo] [string "end"];',
     '[meta ?>]');

  MT("variable_interpolation_heredoc",
     "[meta <?php]",
     "[string <<<here]",
     "[string doc ][variable-2 $]{[variable yay]}[string more]",
     "[string here]; [comment // normal]");
})();
