var arr=[10,13,20,25,40,73,60,19,33,45,80];
document.write("given number"+" "+arr+"<br>"+"<br>");
var c=0;
var d;
for(let i=0;i<arr.length;i++)
		{
		c=c+arr[i];
		d=parseFloat(c/arr.length);
		}
		document.write(d);
		