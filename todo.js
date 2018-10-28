function  NewTodoconstructor(title, location, description){
	this.title = title;
	this.location = location;
	this.description = description;
	// this.id = math.rendom;
}
function addthing(){

	var arr = JSON.parse(localStorage.getItem("todo") ) || [];

	var title = document.getElementById("title").value;
	var location = document.getElementById("location").value;
	var description = document.getElementById("description").value;
	var todo = new NewTodoconstructor(title, location, description);
	if(title === "" || location === "" || description === "") {
		alert("Please fill all fields");
		return false;
	}
	arr.push(todo);
	localStorage.setItem("todo", JSON.stringify(arr));
};
var todoparse = JSON.parse(localStorage.todo);
for(var i=0; i<todoparse.length; i++){
	var parentUl = document.getElementById("runtime");
	var createChildli = document.createElement("li");
	createChildli.setAttribute("class","collection-header");	
	createChildli.innerHTML = `<form action='#'><p><label><input type='checkbox' class='filled-in'/><span style='text-decoration: line-through;'></span>${todoparse[i].title}</label><a href='#!' class='secondary-content'><i class='material-icons'>clear</i></a><a href='edittodo.html' class='secondary-content'><i class='material-icons'>edit</i></a></p></form>`
    parentUl.appendChild(createChildli);
}
