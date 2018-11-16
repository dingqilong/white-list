
var sentence="This is my book.Reading book is good habit";
document.write("letter: "+sentence.length);
document.write("<p>"+"letter of 3"+sentence.charAt(3));
var count=0;
for(i=0;i<sentence.length;i++){
var ch=sentence.charAt(i).toLowerCase();
if(ch=='a'||ch=='e'||ch=='o'||ch=='u'||ch=='i')
count++
}
document.write("<p>"+"vowel: "+count);
