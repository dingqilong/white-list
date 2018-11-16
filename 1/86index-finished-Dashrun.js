
  const synth = window.speechSynthesis;
  let voices = [];
  const msg = new SpeechSynthesisUtterance();
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');
  msg.text = '你能说中文吗';

  //获得浏览器支持的阅读语言并填充至下拉列表
function getSupportVoice() {
  voices = synth.getVoices();
  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
   
    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voicesDropdown.appendChild(option);
  }
}

//点击speak按钮时阅读文字
function speak() {
  console.log(voicesDropdown.value);
  synth.speak(msg);
}

//阅读参数发生变化
function paramChange(){
  msg[this.name] = this.value;
  console.log(this.name,this.value);
}

//停止阅读
function stopSpeak(){
  synth.cancel();
}

// 事件绑定
options.forEach(opt => opt.addEventListener('change', paramChange));
synth.addEventListener('voiceschanged', getSupportVoice);//经测试直接执行无效，须由事件触发
speakButton.addEventListener('click', speak);
stopButton.addEventListener('click', stopSpeak);
