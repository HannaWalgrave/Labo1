/*//prototypes !!
function Client(p_name, p_birthYear){
    this.name = p_name;
    this.birthYear = p_birthYear;
    
}
Client.prototype.speak = function( p_question){
    console.log(p_question);
}
var client1 = new Client("Jens Duerinckx", 1996);
client1.speak("Negertjes zijn jullie aant werk");

var body = document.querySelector("body");
HTMLElement.prototype.css= function(prop, val){
    this.style.prop = val;
}
body.css("background-color","red");*/




function CardApp(){
    this.buttonAddNote = document.getElementById("btnAddNote");
    this.notesContainer = document.querySelector(".notes");
    this.noteInput = document.querySelector("#txtAddNote");
    this.buttonAddNote.addEventListener("click", this.addNote.bind(this));
}
CardApp.prototype.resetForm = function(){
    this.noteInput.value ="";
    this.noteInput.focus();
}
CardApp.prototype.addNote = function(e){
    var newNote = document.createElement("div");
    newNote.setAttribute("class", "card");
    newNote.innerHTML = "<p>" + this.noteInput.value +"</p>";
    
    var noteLink = document.createElement("a");
    noteLink.setAttribute("class", "card-remove");
    noteLink.innerHTML = "Remove";
    noteLink.setAttribute("href", "#");
    noteLink.addEventListener("click", this.removeNote.bind(this));
    
    newNote.appendChild(noteLink);
    
    this.notesContainer.appendChild(newNote);
    this.resetForm();

}
CardApp.prototype.removeNote = function(e){
    var noteToRemove = e.target.parentElement;
    this.notesContainer.removeChild(noteToRemove);
    e.preventDefault();
}
var myApp = new CardApp();