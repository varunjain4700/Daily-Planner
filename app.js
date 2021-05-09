console.log("hello");
showNotes();

let addbtn = document.getElementById("addbtn");

//Function to add a new note
addbtn.addEventListener("click", function (e) {
    letaddtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    if (addtxt.value == "") alert("Please write something.");
    if (addtxt.value != "") {
        notesObj.push(addtxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addtxt.value = " ";
    }
   // console.log(notesObj);
    showNotes();
});

//Function to show elements from local storage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
         <div class="notecard mx-2 my-2" id="notecard" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Task ${index + 1}</h5>
                        <p class="card-text">${element}</p>
                        <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Task Done</button>
                    </div>
                </div>`;
    });
    //let notesElement = document.getElementById("notes");
    if (notesObj.length != 0) {
        document.getElementById("notes").innerHTML = html;
    }
    else
        document.getElementById("notes").innerHTML = `Nothing to show! Add your first note.`
}

//Function to delete a note
function deletenote(index) {
   // console.log("delete", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search=document.getElementById("searchtxt");
search.addEventListener("input",function(){

  let inputval = search.value.toLowerCase();
   // console.log("input event",inputval)
    let notecards=document.getElementsByClassName("notecard");
    Array.from(notecards).forEach(function(element){
        let cardtxt=element.getElementsByTagName("p")[0].innerText
        if(cardtxt.includes(inputval)){
            element.style.display="block";
        }
        else
            element.style.display = "none";
    })

})
