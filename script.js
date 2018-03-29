// VARIABLES

    // cell ID
var cellId = 0;
var dragged;

var selectedAnimal;
var animalPosition;

    // animals

var animalsInfo = {
    "animal": [{
        "name": "cow",
        "url": "./images/cow.png"
    }, {
        "name": "lion",
        "url": "./images/lion.png"
    }, {
        "name": "rabbit",
        "url": "./images/rabbit.png"
    }, {
        "name": "sheep",
        "url": "./images/sheep.png"
    }]
};

// FUNCTIONS

    // game table grid with ID numbers
function setGameTable() {
    var table = document.getElementById("game_board");
    table.style.tableLayout = "fixed";
    
    for (var i=0; i<4; i++) {
        var row = document.createElement("tr");
        
        for (var c=0; c<3; c++) {
            var cell = document.createElement("td");
            
            // add drop event listener to td
            cell.addEventListener("drop", function(event) {
                event.preventDefault();
                //dragged = event.dataTransfer.getData("text")
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);
                for (var i=0; i<12; i++) {
                    var cellStyle = document.getElementById(i);
                    cellStyle.style.backgroundColor = "";
                    cellStyle.style.opacity = "";
                }
            }, false);
            
            //var cellImg = document.createElement("img");
            
            row.style.height = "112px";
            cell.style.width = "111px";
            cell.style.height = "112px";
            cell.id = cellId;
            cellId++;
            /*
            cellImg.src="";
            cellImg.style.width = "105px";
            cellImg.style.height = "106px";
            cellImg.style.border="";
            cellImg.alt = "";
            cellImg.style.fontSize = "0";
            cellImg.style.overflow = "hidden";
            cellImg.style.display = "block";
            cellImg.style.margin = "0 auto";
            cellImg.id = "img"+cellId;
            
            cell.appendChild(cellImg);
            */
            row.appendChild(cell);
            //cell.innerHTML = cellId;
        }
        table.appendChild(row);
    }
};

    // default animal positions
function defaultPos() {
    for (var i=0; i<4; i++) {
        // create animal image tags
        var ani = document.createElement("img");
        
        // make images draggable
        ani.setAttribute("draggable", "true");
        ani.setAttribute("ondragstart", "event.dataTransfer.setData('text/plain',event.target.id)");
        
        // set animal IDs
        ani.id = animalsInfo.animal[i].name;
        
        // animal image sources
        ani.src = animalsInfo.animal[i].url;
        
        // add drag eventlistner
        ani.addEventListener("drag", function(event) {
            event.dataTransfer.setData("text", event.target.id);
        }, false)
        ani.addEventListener("dragstart", function(event) {
            dragged = event.target;
            
            // check valid moves when animal is picked up
            validMoves();
        }, false)
        
        // append to html
        if (i==3) {
            document.getElementById(i+1).appendChild(ani);
        }
        else {
            document.getElementById(i).appendChild(ani);
        }
        
    }
}

    // allow dragging
document.addEventListener("dragover", function(event) {
    event.preventDefault();
}, false);

    // check valid moves

function validMoves() {
    selectedAnimal = dragged.id;
    animalPosition = Number(dragged.parentNode.id);
    console.log("Your animal is " + dragged.id + " and is " + "currently at " + animalPosition);
    
    
    if (dragged.id == "cow") {
        if (animalPosition == 4 || animalPosition == 7) {
            document.getElementById(Math.abs(animalPosition-3)).style.backgroundColor = "skyblue";
            document.getElementById(Math.abs(animalPosition+3)).style.backgroundColor = "skyblue";
            document.getElementById(Math.abs(animalPosition-1)).style.backgroundColor = "skyblue";
            document.getElementById(Math.abs(animalPosition+1)).style.backgroundColor = "skyblue";
            document.getElementById(animalPosition).style.opacity = "0.3";
        }
    }
    else if (dragged.id == "lion") {
        
    }
    else if (dragged.id == "rabbit") {
        
    }
    else if (dragged.id == "sheep") {
        
    }
}


function moveConfirmation() {
    
}

// TEST

function hi() {
    alert("hi");
}

// set game table - default

function setAnimalsDef() {
    // set game table
    setGameTable();
    
    // set animals
    defaultPos();
}

// START the game

setAnimalsDef();
//move();