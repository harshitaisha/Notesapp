// Function to create a new note element
function createNoteElement(noteText) {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    const textarea = document.createElement("textarea");
    textarea.value = noteText;
    textarea.setAttribute("readonly", true);
    noteDiv.appendChild(textarea);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
        deleteNoteElement(noteDiv);
    });
    noteDiv.appendChild(deleteBtn);

    return noteDiv;
}

// Function to delete a note element
function deleteNoteElement(noteElement) {
    const notesContainer = document.querySelector(".notes");
    notesContainer.removeChild(noteElement);
}

// Function to add a new note
function addNote() {
    const noteInput = document.getElementById("noteInput");
    const noteText = noteInput.value.trim();

    if (noteText === "") {
        alert("Please enter a valid note.");
        return;
    }

    const newNoteElement = createNoteElement(noteText);
    const notesContainer = document.querySelector(".notes");
    notesContainer.appendChild(newNoteElement);

    noteInput.value = ""; // Clear the input field after adding the note
}

// Add event listener to the "Add Note" button
const addNoteBtn = document.getElementById("addNoteBtn");
addNoteBtn.addEventListener("click", addNote);
