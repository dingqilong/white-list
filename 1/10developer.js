
    $(document).ready(function() {
      var select = $('.languages');
      hljs.listLanguages().forEach(function(l) {
        select.append('<option>' + l + '</option>');
      });

      $('.editor button').click(function(e) {
        var editor = $(this).parents('.editor');
        var language = editor.find('.languages').val();
        var source = editor.find('textarea').val();
        var start_time = +new Date();
        var result = hljs.getLanguage(language) ? hljs.highlight(language, source, true) : hljs.highlightAuto(source);
        var rendering_time = +new Date() - start_time;
        editor.find('.hljs').html(result.value);
        var rendering_stats = result.language + ': ' + (result.relevance || result.r);
        if (result.second_best) {
            rendering_stats += ', ' + result.second_best.language + ': ' + (result.second_best.relevance || result.second_best.r);
        }
        editor.find('.rendering_stats').text(rendering_stats);
        editor.find('.rendering_time').text(rendering_time);
        editor.find('output').text(result.value);
        SourceStore.save(source, language);
      });
    });

    var SourceStore;
    (function(){
      SourceStore = {
        save: function(source, lang){
          localStorage.setItem(key_SOURCE, source);
          localStorage.setItem(key_LANG, lang);
        },
        resolve: function(){
          return [
            localStorage.getItem(key_SOURCE),
            localStorage.getItem(key_LANG)
          ];
        }
      };
      var key_SOURCE = 'hljs-source';
      var key_LANG = 'hljs-lang';
      $(function(){
        var data = SourceStore.resolve();
        if (data == null) return;
        $('.editor textarea').val(data[0]);
        $('.editor .languages').val(data[1]);
        $('.editor button').click();
      });
    }());
  