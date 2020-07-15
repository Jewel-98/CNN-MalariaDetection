var loader= function(e){
	let file= e.target.files;
	let show= "<span>File: </span>"+file[0].name;
	let output= document.getElementById("selector");
	output.innerHTML=show;
	output.classList.add("active");
};

//add event listener

let fileInput= document.getElementById("file");
fileInput.addEventListener("change",loader);