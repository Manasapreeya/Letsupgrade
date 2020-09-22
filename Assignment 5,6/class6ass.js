window.onload = function () {
  let initiallist1 = [
    {
      name: "",
      source:"" ,
      destination: "",
      number: "",
      capacity:""
    },{
      name: "",
      source:"" ,
      destination: "",
      number: "",
      capacity:""
    }
  ];

  if (localStorage.getItem("list1") == null) {
    localStorage.setItem("list1", JSON.stringify(initiallist1));
  }
};

function display(superarray = undefined) {
  let tabledata = "";
  let list1;
  if (superarray == undefined) {
    list1 = JSON.parse(localStorage.getItem("list1"));
  } else {
    list1 = superarray;
  }

  list1.forEach(function (list2, index) {
    let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${list2.name}</td>
      <td>${list2.source}</td>
      <td>${list2.destination}</td>
      <td>${list2.number}</td>
       <td>${list2.capacity}</td>
      
      </tr>`;

    tabledata += currentrow;
  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
  //   document.getElementById("tdata").innerHTML = tabledata;
}

display();

function adddata(e) {
  e.preventDefault();
  let list2 = {};
  let name = document.getElementById("bname").value;
  let source = document.getElementById("bsource").value;
  let destination = document.getElementById("bdest").value;
  let number = document.getElementById("bno").value;
  let capacity = document.getElementById("bcap").value;
  list2.name = name;
  list2.source = source;
  list2.destination = destination;
  list2.number = number;
  list2.capacity=capacity;

  //   superheroes.push(superhero);

  let list1 = JSON.parse(localStorage.getItem("list1"));
  list1.push(list2);
  localStorage.setItem("list1", JSON.stringify(list1));

  display();

  document.getElementById("bname").value = "";
  document.getElementById("bsource").value = "";
  document.getElementById("bdest").value = "";
  document.getElementById("bno").value = "";
   document.getElementById("bcap").value = "";
}

function searchdata() {
  let searchValue = document.getElementById("bsearch").value;
  let list1 = JSON.parse(localStorage.getItem("list1"));
  let newdata = list1.filter(function (list2) {
  return (((list2.source.toUpperCase().indexOf(searchValue.toUpperCase())) && (list2.destination.toUpperCase().indexOf(searchValue.toUpperCase())))!= -1 );
  });

  display(newdata);
}

