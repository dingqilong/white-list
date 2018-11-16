// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function() {
  var mode = CodeMirror.getMode({indentUnit: 2}, "xml"), mname = "xml";
  function MT(name) { test.mode(name, mode, Array.prototype.slice.call(arguments, 1), mname); }

  MT("matching",
     "[tag&bracket <][tag top][tag&bracket >]",
     "  text",
     "  [tag&bracket <][tag inner][tag&bracket />]",
     "[tag&bracket </][tag top][tag&bracket >]");

  MT("nonmatching",
     "[tag&bracket <][tag top][tag&bracket >]",
     "  [tag&bracket <][tag inner][tag&bracket />]",
     "  [tag&bracket </][tag&error tip][tag&bracket&error >]");

  MT("doctype",
     "[meta <!doctype foobar>]",
     "[tag&bracket <][tag top][tag&bracket />]");

  MT("cdata",
     "[tag&bracket <][tag top][tag&bracket >]",
     "  [atom <![CDATA[foo]",
     "[atom barbazguh]]]]>]",
     "[tag&bracket </][tag top][tag&bracket >]");

  // HTML tests
  mode = CodeMirror.getMode({indentUnit: 2}, "text/html");

  MT("selfclose",
     "[tag&bracket <][tag html][tag&bracket >]",
     "  [tag&bracket <][tag link] [attribute rel]=[string stylesheet] [attribute href]=[string \"/foobar\"][tag&bracket >]",
     "[tag&bracket </][tag html][tag&bracket >]");

  MT("list",
     "[tag&bracket <][tag ol][tag&bracket >]",
     "  [tag&bracket <][tag li][tag&bracket >]one",
     "  [tag&bracket <][tag li][tag&bracket >]two",
     "[tag&bracket </][tag ol][tag&bracket >]");

  MT("valueless",
     "[tag&bracket <][tag input] [attribute type]=[string checkbox] [attribute checked][tag&bracket />]");

  MT("pThenArticle",
     "[tag&bracket <][tag p][tag&bracket >]",
     "  foo",
     "[tag&bracket <][tag article][tag&bracket >]bar");

})();
able aaaaa]',   ']][string aa"];',
     '[keyword echo] [string "aaa][variable-2 $aaaa][[','[variable-2 $aaaaa]',']][string aa"];',
     '[meta ?>]');

  MT('variable_interpolation_simple_syntax_3',
     '[meta <?php]',
     '[keyword echo] [string "aaa][variable-2 $aaaa]->[variable aaaaa][string .aaaaaa"];',
     '[keyword echo] [string "aaa][variable-2 $aaaa][string ->][variable-2 $aaaaa][string .aaaaaa"];',
     '[keyword echo] [string "aaa][variable-2 $aaaa]->[variable aaaaa][string [[2]].aaaaaa"];',
     '[keyword echo] [string "aaa][variable-2 $aaaa]->[variable aaaaa][string ->aaaa2.aaaaaa"];',
     '[meta ?>]');

  MT('variable_interpolation_escaping',
     '[meta <?php] [comment /* Escaping */]',
     '[keyword echo] [string "aaa\\$aaaa->aaa.aaa"];',
     '[keyword echo] [string "aaa\\$aaaa[[2]]aaa.aaa"];',
     '[keyword echo] [string "aaa\\$aaaa[[asd]]aaa.aaa"];',
     '[keyword echo] [string "aaa{\\$aaaa->aaa.aaa"];',
     '[keyword echo] [string "aaa{\\$aaaa[[2]]aaa.aaa"];',
     '[keyword echo] [string "aaa{\\aaaaa[[asd]]aaa.aaa"];',
     '[keyword echo] [string "aaa\\${aaaa->aaa.aaa"];',
     '[keyword echo] [string "aaa\\${aaaa[[2]]aaa.aaa"];',
     '[keyword echo] [string "aaa\\${aaaa[[asd]]aaa.aaa"];',
     '[meta ?>]');

  MT('variable_interpolation_complex_syntax_1',
     '[meta <?php]',
     '[keyword echo] [string "aaa][variable-2 $]{[variable aaaa]}[string ->aaa.aaa"];',
     '[keyword echo] [string "aaa][variable-2 $]{[variable-2 $aaaa]}[string ->aaa.aaa"];',
     '[keyword echo] [string "aaa][variable-2 $]{[variable-2 $aaaa][[','  [number 42]',']]}[string ->aaa.aaa"];',
     '[keyword echo] [string "aaa][variable-2 $]{[variable aaaa][meta ?>]aaaaaa');

  MT('variable_interpolation_complex_syntax_2',
     '[meta <?php] [comment /* Monsters */]',
     '[keyword echo] [string "][variable-2 $]{[variable aaa][comment /*}?>} $aaa<?php } */]}[string ->aaa.aaa"];',
     '[keyword echo] [string "][variable-2 $]{[variable aaa][comment /*}?>*/][[','  [string "aaa][variable-2 $aaa][string {}][variable-2 $]{[variable aaa]}[string "]',']]}[string ->aaa.aaa"];',
     '[keyword echo] [string "][variable-2 $]{[variable aaa][comment /*} } $aaa } */]}[string ->aaa.aaa"];');


  function build_recursive_monsters(nt, t, n){
    var monsters = [t];
    for (var i = 1; i <= n; ++i)
      monsters[i] = nt.join(monsters[i - 1]);
    return monsters;
  }

  var m1 = build_recursive_monsters(
    ['[string "][variable-2 $]{[variable aaa] [operator +] ', '}[string "]'],
    '[comment /* }?>} */] [string "aaa][variable-2 $aaa][string .aaa"]',
    10
  );

  MT('variable_interpolation_complex_syntax_3_1',
     '[meta <?php] [comment /* Recursive monsters */]',
     '[keyword echo] ' + m1[4] + ';',
     '[keyword echo] ' + m1[7] + ';',
     '[keyword echo] ' + m1[8] + ';',
     '[keyword echo] ' + m1[5] + ';',
     '[keyword echo] ' + m1[1] + ';',
     '[keyword echo] ' + m1[6] + ';',
     '[keyword echo] ' + m1[9] + ';',
     '[keyword echo] ' + m1[0] + ';',
     '[keyword echo] ' + m1[10] + ';',
     '[keyword echo] ' + m1[2] + ';',
     '[keyword echo] ' + m1[3] + ';',
     '[keyword echo] [string "end"];',
     '[meta ?>]');

  var m2 = build_recursive_monsters(
    ['[string "a][variable-2 $]{[variable aaa] [operator +] ', ' [operator +] ', '}[string .a"]'],
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
