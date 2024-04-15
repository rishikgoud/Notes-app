const createbutton = document.querySelector(".createnotes");
const notescontainer = document.querySelector(".notescontainer");
let notes = document.querySelectorAll(".notes");

createbutton.addEventListener("click", ()=>{
    let notespage = document.createElement("p");
    let noteimage = document.createElement("img");
    notespage.className = "notes";
    notespage.setAttribute("contenteditable","true");
    noteimage.src = "images/delete.png"
    notescontainer.appendChild(notespage).appendChild(noteimage);
})  

// alert("hi");