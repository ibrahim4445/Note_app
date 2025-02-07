const noteInput = document.getElementById("noteInput");
const addNoteButton = document.getElementById("AddNote");
const noteContents = document.getElementById("notesContainer");


addNoteButton.addEventListener('click', ()=> {
    const noteText = noteInput.value;

    if(noteText === ""){
        alert("Please write the note");
        return;
    }

    const noteItem = document.createElement("div");
    noteItem.className = "noteItem";

   

    noteItem.innerHTML = `
        <p>${noteText} </p >
        <button onclick = "this.parentElement.remove()">Delete</button>
    `;

    noteContents.appendChild(noteItem);

    noteInput.value = "";

});


