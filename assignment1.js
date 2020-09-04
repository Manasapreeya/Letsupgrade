console.log(" 1. program to search for a particular character in a string : ");
var string1="I am a string";
console.log("string : " + string1);
let n=8; //we are searching for the 7th char in the string
for(var i=0;i<n;i++)
{
	console.log(string1.substr(n,1));

}
console.log("----------");


console.log(" 2. program to convert minutes to seconds  : ");

let minute=20;
var second;
second=(minute*60);
console.log("minutes = " + minute + " , Equals " + second + " seconds." );
console.log("----------");


console.log(" 3. program to search for an element in an array of strings  : ");
var string2= [ "I","am","a","String"];
console.log("string : " + string1);
let m=3; //we are searching for the 3rd element in the array
for(var j=0;j<m;j++)
{
console.log(string1[m]);
}
console.log("----------");


console.log(" 4. program to display only elements containing 'a' in them from an array  : ");



var s1=['I'];
var s2=['a','m'];
var s3=['a'];
var s4=['s','t','r','i','n','g'];
var string3= [s1,s2,s3,s4];
for(var k=0;k<2;k++)
{
	for(var l=0;l<k;l++)
	{
		if(s1[l]=='a')
	{
console.log("string : " + string3[0]);
}
if(s2[l]=='a')
	{
console.log("string : " + string3[1]);
}
if(s3[l]=='a')
	{
console.log("string : " + string3[2]);
}
if(s4[l]=='a')
	{
console.log("string : " + string3[3]);
}

}
}
console.log("----------");


console.log(" 4. program to print array in reverse order : ");

var ar = ['a','b','c','d','e'];
var len = ar.length;
for(var i=len-1; i>=0; i--) 
{
  console.log(ar[i]);
}

console.log("----------");


