const createbutton = document.querySelector(".createnotes");
const notescontainer = document.querySelector(".notescontainer");
let notes = document.querySelectorAll(".notes");

function showstorage(){
    notescontainer.innerHTML = localStorage.getItem("notes");
}
showstorage();

function updatestorage(){
    localStorage.setItem("notes",notescontainer.innerHTML); 
}

createbutton.addEventListener("click", ()=>{
    let notespage = document.createElement("p");
    let noteimage = document.createElement("img");
    notespage.className = "notes";
    notespage.setAttribute("contenteditable","true");
    noteimage.src = "images/delete.png"
    notescontainer.appendChild(notespage).appendChild(noteimage);
})  

notescontainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updatestorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".notes")
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updatestorage();
            }
        })
    }
})

document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})