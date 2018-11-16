</pre>
          <textarea class="current" rows="1" cols="40">map('1+', [2, 3])</textarea><br/>
        </div>
        <div class="eval-column">
          <button class="eval-button">&rarr;&nbsp;</button>
        </div>
        <div class="output-column">
          <pre class="transcript"></pre>
          <pre class="current" style="margin:0"> </pre><br/>
        </div>
        <div style="clear:left"> </div>
        <div class="transcript-controls">
          History:
          <input class="toggle" type="checkbox"/>show
          <input class="clear" type="button" value="clear"/>
        </div>
      </div>
      <script type="text/javascript">
        Functional.install();
        Event.observe(window, 'load', function(){new Evaluator('#evaluator', {transcript:false})});
      