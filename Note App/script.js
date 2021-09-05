console.log('These is script.js')
showNotes();

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addtxt");
    let addtitle = document.getElementById("addtitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let myObj = {
        title: addtitle.value,
        text: addtxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
    addtitle.value = "";
    showNotes();

})

function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id = "${index}" onclick = "DeleteNote(this.id)"class="btn btn-primary">Delete Note</button>
                </div>
            </div>
            `;

    });
    let notesElm = document.getElementById('notes');

    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `<h3>Nothing to Show !! Use "Add Note".</h3>`
    }
}

function DeleteNote(index) {

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}

let search = document.getElementById('searchtxt');
search.addEventListener("input",function(){
    let inputval = search.value.toLowerCase();

    let notecards = document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputval)){
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })

})