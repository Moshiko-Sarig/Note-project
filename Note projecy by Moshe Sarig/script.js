let text = document.getElementById("text");
var date = document.getElementById("date");
var time = document.getElementById("time");
let noteAreaDisplay = document.getElementById("noteAreaDisplay");
let noteCounter = 0;
let isTime = false;

let noteList = [];



if (localStorage.savedNoteList) {
   noteList = JSON.parse(localStorage.savedNoteList);
}

displayNote();

function displayNote() {//Show the note object on the page.
   noteAreaDisplay.innerHTML = ""
   for (let note of noteList) {
      noteAreaDisplay.innerHTML += `<div class="textpanel" style="animation: fadeIn ease 1.4s;">
   <img src="assets/photos/notebg.png" alt="note">
   <div class="col-sm-6 col-md-5 col-lg-4"></div>
   <div class="trash" onclick="deletNote(${noteCounter})"><i class="bi bi-trash"></i></div>
   <textarea readonly id="dispalyText">${note.task}</textarea>
   <span id="displayDate" class="displayDate">${note.date}</span>
   <span id="displayTime" class="displayTime">${note.time}</span>
</div>`;

   }

}

function addNote() {//Add new note to the araay and new note on the page.
   dateValidation();
   if (isTime == false) {
      alert("ERROR! The date you entered passed Try a new date");
   }
   else if (isTime == true) {
      let newNote = new Note(task.value, date.value, time.value);
      noteList.push(newNote);
      localStorage.savedNoteList = JSON.stringify(noteList);
      displayNote();
      noteCounter++;
      task.value = "";
      date.value = "";
      time.value = "";
   }

}

function deletNote(i) {//Delet the note from the page and from the local storage.
   if (i == 0) {
      noteList = noteList.slice(1);
      localStorage.savedNoteList = JSON.stringify(noteList);
      displayNote();
   }
   else if (i >= 1) {
      let secondPart = noteList.slice(i + 1);
      let firstPart = noteList.splice(0, i);
      noteList = firstPart.concat(secondPart);
      localStorage.savedNoteList = JSON.stringify(noteList);
      displayNote();
   }

}

function dateValidation() {//Validate if the user input date is smaller than the current date.
   let inputDate = new Date(date.value);
   let d = new Date();
   let day = d.getDate();
   let month = d.getMonth() + 1;
   let year = d.getFullYear();


   if (inputDate.getFullYear() > year) {
      isTime = true;
   }
   else if (inputDate.getFullYear() == year) {
      if (inputDate.getMonth() + 1 > month) {
         isTime = true;
      }
      else if (inputDate.getMonth() + 1 == month) {
         if (inputDate.getDate() > day) {
            isTime = true;

         }
      }
   }
   else {
      isTime = false;
   }
}














