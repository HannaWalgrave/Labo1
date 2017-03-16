"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var firstname = "hanna";
console.log("hi my name is " + firstname);

var CardApp = function () {
    function CardApp() {
        _classCallCheck(this, CardApp);

        this.buttonAddNote = document.getElementById("btnAddNote");
        this.notesContainer = document.querySelector(".notes");
        this.noteInput = document.querySelector("#txtAddNote");
        this.buttonAddNote.addEventListener("click", this.addNote.bind(this));
    }

    _createClass(CardApp, [{
        key: "addNote",
        value: function addNote(e) {

            var newNote = document.createElement("div");
            newNote.setAttribute("class", "card");
            newNote.innerHTML = "<p>" + this.noteInput.value + "</p>";
            var noteLink = document.createElement("a");
            noteLink.setAttribute("class", "card-remove");
            noteLink.innerHTML = "Remove";
            noteLink.setAttribute("href", "#");
            noteLink.addEventListener("click", this.removeNote.bind(this));

            newNote.appendChild(noteLink);

            this.notesContainer.appendChild(newNote);
            this.resetForm();

            e.preventDefault();
        }
    }, {
        key: "removeNote",
        value: function removeNote(event) {
            var noteToRemove = event.target.parentElement;
            this.notesContainer.removeChild(noteToRemove);
            event.preventDefault();
        }
    }, {
        key: "resetForm",
        value: function resetForm() {
            this.noteInput.value = "";
            this.noteInput.focus();
        }
    }]);

    return CardApp;
}();

var myApp = new CardApp();

//# sourceMappingURL=app.es5.js.map