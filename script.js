// VARIABLES

var checkTarget;

    // cell ID
var cellId = 0;
var dragged;

    // revival cellID
var revCellId = 20;

var selectedAnimal;
var animalPosition;

var takenAnimals = [];

    // animals

// TEAM RED
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

// TEAM BLUE
var animalsInfoBlue = {
    "animalBlue": [{
        "name": "cowBlue",
        "url": "./images/cow_blue.png"
    }, {
        "name": "tiger",
        "url": "./images/tiger.png"
    }, {
        "name": "rabbitBlue",
        "url": "./images/rabbit_blue.png"
    }, {
        "name": "sheepBlue",
        "url": "./images/sheep_blue.png"
    }]
};

// FUNCTIONS

    // game table grid with ID numbers
function setGameTable() {
    createRevivalList();
    
    var table = document.getElementById("game_board");
    table.style.tableLayout = "fixed";
    
    for (var i=0; i<4; i++) {
        var row = document.createElement("tr");
        
        for (var c=0; c<3; c++) {
            var cell = document.createElement("td");
            
            // add drop event listener to td
            cell.addEventListener("drop", function(event) {
                event.preventDefault();
                //dragged = event.dataTransfer.getData("text");
                //dragged.parentNode.removeChild(dragged);
                
                // check if the target is another animal or an empty cell
                checkTarget = event.target.id;
                
                // get event target's parents' ID
                var targetCellId = event.target.parentNode.id;
                
                if (isNaN(checkTarget)) {    
                    if (dragged.id !== checkTarget) {
                        // move the animal to the cell
                    var targetCell = document.getElementById(targetCellId);
                    targetCell.appendChild(dragged);
                   
                    
                    // move the killed animals to the revival list
                    addToRevival();
                    
                    // spell out the moves
                    console.log(dragged.id, checkTarget);
                    }
                }
                else {
                    event.target.appendChild(dragged);
                    
                    // spell out the moves
                    console.log(dragged.id, checkTarget);
                }
                
                // stop showing available moves
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
        var aniBlue = document.createElement("img");
        
        // make images draggable
        ani.setAttribute("draggable", "true");
        ani.setAttribute("ondragstart", "event.dataTransfer.setData('text/plain',event.target.id)");
        
            // SET TEAM COLORS
        // TEAM RED
        ani.style.border = "3px solid red";
        // TEAM BLUE
        aniBlue.style.border = "3px solid blue";
        
            // animals ID
        // TEAM RED
        ani.id = animalsInfo.animal[i].name;
        // TEAM BLUE
        aniBlue.id = animalsInfoBlue.animalBlue[i].name;
        
            // animals images sources
        // TEAM RED
        ani.src = animalsInfo.animal[i].url;
        // TEAM BLUE
        aniBlue.src = animalsInfoBlue.animalBlue[i].url;
        
            // append to html
        if (i==3) {
            document.getElementById(i+1).appendChild(ani);
            document.getElementById(i+4).appendChild(aniBlue);
        }
        else {
            document.getElementById(i).appendChild(ani);
            document.getElementById(i+9).appendChild(aniBlue);
        }
        
        // add drag eventlistner
        ani.addEventListener("drag", function(event) {
            event.dataTransfer.setData("text", event.target.id);
        }, false)
        ani.addEventListener("dragstart", function(event) {
            dragged = event.target;
            
            // check valid moves when animal is picked up
            validMoves();
        }, false)
        
        aniBlue.addEventListener("drag", function(event) {
            event.dataTransfer.setData("text", event.target.id);
        }, false)
        aniBlue.addEventListener("dragstart", function(event) {
            dragged = event.target;
            
            // check valid moves when animal is picked up
            validMoves();
        }, false)
        
        // TOUCH EVENTS?
        ani.addEventListener("touchmove", function(event) {
            event.dataTransfer.setData("text", event.target.id);
        }, false)
        ani.addEventListener("touchstart", function(event) {
            dragged = event.target;
            
            // check valid moves when animal is picked up
            validMoves();
        }, false)
        
        aniBlue.addEventListener("touchmove", function(event) {
            event.dataTransfer.setData("text", event.target.id);
        }, false)
        aniBlue.addEventListener("touchstart", function(event) {
            dragged = event.target;
            
            // check valid moves when animal is picked up
            validMoves();
        }, false)
        
        // TOUCH EVENTS?
        
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
    
    // animal move log
    console.log("Your animal is " + dragged.id + " and is " + "moved from " + animalPosition);
    
    
    if (dragged.id == "cow") {
        if (animalPosition == 4 || animalPosition == 7) {
            document.getElementById(Math.abs(animalPosition-3)).style.backgroundColor = "#B7E2F3";
            document.getElementById(Math.abs(animalPosition+3)).style.backgroundColor = "#B7E2F3";
            document.getElementById(Math.abs(animalPosition-1)).style.backgroundColor = "#B7E2F3";
            document.getElementById(Math.abs(animalPosition+1)).style.backgroundColor = "#B7E2F3";
            document.getElementById(animalPosition).style.opacity = "0.3";
        }
        else {
            
        }
    }
    
}

    // revival list

function createRevivalList() {
    var table = document.getElementById("dead_animals");
    table.style.tableLayout = "fixed";
    
    for (var i=0; i<2; i++) {
        var row = document.createElement("tr");
        
        for (var c=0; c<4; c++) {
            var cell = document.createElement("td");
            
            row.style.height = "112px";
            cell.style.width = "111px";
            cell.style.height = "112px";
            
            cell.id = revCellId;
            revCellId++;
            
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
}
    // move killed animals to the revival list
function addToRevival() {
    var killedAnimal = document.getElementById(checkTarget);
    
    for (var i=20; i<28; i++) {
        var revCellContent = document.getElementById(i).children.length;
        if (revCellContent == 0) {
            document.getElementById(i).appendChild(killedAnimal);
            break;
        }
    }
}

    // valid moves

function moveConfirmation() {
    
}

// set game table - default

function setAnimalsDef() {
    // set game table
    setGameTable();
    
    // set animals
    defaultPos();
}

// START the game

function start() {
    var onStartClick = document.getElementById("start");
    onStartClick.addEventListener("click", function() {
        location.reload();
    });
    setAnimalsDef();
}

start();