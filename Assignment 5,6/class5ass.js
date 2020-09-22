let list1=[{name:"Aparna",age:25 ,city:"Delhi",salary:25000},{name:"Bharka",age:27 ,city:"Mumbai",salary:40000},{name:"Carl",age:40 ,city:"Bangalore",salary:50000},{name:"George",age:26 ,city:"Bangalore",salary:100000},
{name:"Dev",age:25 ,city:"Delhi",salary:25000}];



//DISPLAY



function display(superarray){
	let tabledata="";
	superarray.forEach (function(list2,index)
	{

		let currentrow=`<tr> <td>${index+1}</td> <td>${list2.name}</td>  <td>${list2.age}</td> <td>${list2.city}</td>
		<td>${list2.salary}</td> <td><button type="submit" onclick="deletedata(${index})">Delete</button></td></tr>`;
		tabledata=tabledata+currentrow;
	});
	document.getElementsByClassName("data")[0].innerHTML=tabledata;

}
display(list1);



//SEARCH NAME



// function searchname(){
// 	let searchvalue1=document.getElementById("searchname1").value;
// 	// console.log(searchvalue1);
// 	let newdata=list1.filter(function(list2)
// 	{
// 		return list2.name.toUpperCase().indexOf(searchvalue1.toUpperCase())!= -1;
// 	});
// 	display(newdata);

// }

// //SEARCHCITY


// function searchcity(){
// 	let searchvalue2=document.getElementById("searchcity1").value;
// 	// console.log(searchvalue2);
// 	let newdata1=list1.filter(function(list2)
// 	{
// 		return list2.city.toUpperCase().indexOf(searchvalue2.toUpperCase())!= -1;
// 	});
// 	display(newdata1);



//SEARCHING BOTH CITY AND NAME IN THE SAME TEXTBOX


function search(){
	let searchvalue1=document.getElementsByClassName("s1")[0].value;
	// console.log(searchvalue1);
	let newdata=list1.filter(function(list2)
	{
		return ((list2.city.toUpperCase().indexOf(searchvalue1.toUpperCase())) && (list2.name.toUpperCase().indexOf(searchvalue1.toUpperCase())))!= -1 ;
		// return list2.name.toUpperCase().indexOf(searchvalue1.toUpperCase())!= -1;
		
	});
	display(newdata);

}



//DELETE


function deletedata(index){
	list1.splice(index,1);
	display(list1);

}








