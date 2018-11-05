var d = new Date();
var time = d.getHours();
if (time<10)
{
    document.write("<b>早上好</b>");
}
else if (time>=10 && time<16)
{
    document.write("<b>今天好</b>");
}
else
{
    document.write("<b>晚上好!</b>");
}