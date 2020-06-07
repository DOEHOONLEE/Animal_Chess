            /*******************/
            /* --[VARIABLES]-- */
            /*******************/

let validCoord = [7,8,9,12,13,14,17,18,19,22,23,24];
let getValidPos = [];
let highlightOnOff = false;
let num = 0;
let cellId = 7;
let turn = "blue";

    // animals

let animalWarriers = {
    "blue": [{
            "name": "blue_rabbit",
            "url": "./images/rabbit_blue.png",
            "defPos": 24,
            "move": [1,-1,5,-5]
        },
        {
            "name": "blue_tiger",
            "url": "./images/tiger_blue.png",
            "defPos": 23,
            "move": [1,5,4,6,-1,-5,-4,-6]
        },
        {
            "name": "blue_cow",
            "url": "./images/cow_blue.png",
            "defPos": 22,
            "move": [4,6,-4,-6]
        },
        {
            "name": "blue_sheep",
            "url": "./images/sheep_blue.png",
            "defPos": 18,
            "move": [-5]
        }
    ],
    "red": [{
            "name": "red_rabbit",
            "url": "./images/rabbit.png",
            "defPos": 9,
            "move": [1,5,-1,-5]
        },
        {
            "name": "red_lion",
            "url": "./images/lion.png",
            "defPos": 8,
            "move": [1,5,4,6,-1,-5,-4,-6]
        },
        {
            "name": "red_cow",
            "url": "./images/cow.png",
            "defPos": 7,
            "move": [4,6,-4,-6]
        },
        {
            "name": "red_sheep",
            "url": "./images/sheep.png",
            "defPos": 13,
            "move": [5]
        }
    ]
}


            /*******************/
            /* --[FUNCTIONS]-- */
            /*******************/


    // 게임 보드 그리기 -> table 에 tr/td 넣기 + 가로/ 세로/ 아이디 부여
    // Draw Game Board -> put tr/td in table + set width/ height/ id
function setGameTable() {

    let table = document.getElementById("game_board");
    
    table.style.tableLayout = "fixed";
    
    for (let i=0; i<4; i++) {
        let row = document.createElement("tr");
        
        for (let c=0; c<3; c++) {
            let cell = document.createElement("td");
            
            // height/ width/ height/ id 지정
            // assign height/ width/ height/ id
            row.style.height = "112px";
            cell.style.width = "111px";
            cell.style.height = "112px";
            cell.id = num + cellId;
            row.appendChild(cell);
            num++;
        }
        
        cellId=cellId+2;
        table.appendChild(row);
    }
    
};


    // 동물전사들 보드에 올리기
    // Place animal warriors on the board
function setDefaultPos() {
    
    for (let i=0; i<4; i++) {
        // animal img 를 넣기 위해 img 태그 생성
        let imgBlue = document.createElement("img");
        let imgRed = document.createElement("img");
        
        // img 태그에 BLUE / RED 팀에 따른 컬러 부여
        imgBlue.style.border = "3px solid blue";
        imgRed.style.border = "3px solid red";
        
        // 동물 전사에 Id 부여
        imgBlue.id = animalWarriers.blue[i].name;
        imgRed.id = animalWarriers.red[i].name;
        
        // 동물 img url HTML 에 img tag 집어넣기
        imgBlue.src = animalWarriers.blue[i].url;
        document.getElementById(animalWarriers.blue[i].defPos).appendChild(imgBlue);
        
        imgRed.src = animalWarriers.red[i].url;
        document.getElementById(animalWarriers.red[i].defPos).appendChild(imgRed);
        
        checkLegalMove(imgBlue);
        checkLegalMove(imgRed);
    }
    
}


    // 가능한 움직임 확인/보여주기
    // Show/check legal/possible moves
function checkLegalMove(animal) {
    animal.addEventListener("click", function() {
        
        for (let i=0; i<4; i++) {
            
            // 블루팀 동물 선택 시
            // if selected animal is team blue
            // this.id[0] == "b"
            if (turn == "blue" && this.id[0] == "b") {
                
                let blueTeam = animalWarriers.blue[i];
                if (this.id == blueTeam.name) {
                    
                    // 선택된 동물의 parent Id 받아오기
                    // Get parent Id of selected animal
                    let parentID = this.parentNode.id;
                    
                    for (let j=0; j<blueTeam.move.length; j++) {

                        let getPos = (+parentID) + blueTeam.move[j];
                        
                        if (validCoord.includes(getPos)) {
                            getValidPos.push(getPos);
                            
                            if (highlightOnOff == false) {
                                document.getElementById(getPos).style.backgroundColor = "#6495ED";
                                
                                // 동물 움직이기
                                // Move animal warrior
                                document.getElementById(getPos).addEventListener("click", function(e) {
                                    
                                    if (e.target == this) {
                                        
                                        this.appendChild(animal);
                                        
                                        for (let c=0; c < getValidPos.length; c++) {
                                            document.getElementById(getValidPos[c]).style.backgroundColor = "";
                                        }
                                        getValidPos = [];
                                        (highlightOnOff) ? highlightOnOff = false : highlightOnOff = true;
                                        turn = "red";
                                    }
                                })
                            }
                            else {
                                document.getElementById(getPos).style.backgroundColor = "";
                            }
                        }
                    }
                }
            }
            
            // 레드팀 동물 선택 시
            // if selected animal is team red
            if (turn == "red" && this.id[0] == "r") {
                
                let redTeam = animalWarriers.red[i];
                if (this.id == redTeam.name) {
                    
                    // 선택된 동물의 parent Id 받아오기
                    // Get parent Id of selected animal
                    let parentID = this.parentNode.id;
                    
                    for (let j=0; j<redTeam.move.length; j++) {

                        let getPos = (+parentID) + redTeam.move[j];
                        
                        if (validCoord.includes(getPos)) {
                            getValidPos.push(getPos);
                            //console.log(getPos);
                            if (highlightOnOff == false) {
                                document.getElementById(getPos).style.backgroundColor = "hotpink";
                                
                                // 동물 움직이기
                                // Move animal warrior
                                
                                document.getElementById(getPos).addEventListener("click", function(e) {
                                    //console.log(this);
                                    if (e.target == this) {
                                        
                                        this.appendChild(animal);
                                        
                                        for (let c=0; c < getValidPos.length; c++) {
                                            document.getElementById(getValidPos[c]).style.backgroundColor = "";
                                        }
                                        getValidPos = [];
                                        (highlightOnOff) ? highlightOnOff = false : highlightOnOff = true;
                                        turn = "blue";
                                    }
                                })
                                /*
                                document.getElementById(getPos).onclick = function(e) {

                                    if (e.target !== document.getElementById(getPos)) {
                                        console.log("hi");
                                    }
                                }
                                */
                            }
                            else {
                                document.getElementById(getPos).style.backgroundColor = "";
                            }
                        }
                    }
                }
            }
            
            else if (turn !== "red" && this.id[0] == "r") {
                alert("It's not your turn. Let BLUE animals play :)");
                break;
            }
            
            else if (turn !== "blue" && this.id[0] == "b") {
                alert("It's not your turn. Let RED animals play :)");
                break;
            }
        
    }
        
        (highlightOnOff) ? highlightOnOff = false : highlightOnOff = true;
    })
}

function reset() {
    // id = game_board 에 td/tr 이 존재할 경우
    // if there are td/tr in id = game_board, remove them
    if (document.getElementById("game_board").childNodes.length > 0) {
        for (let i=0; i < 4; i++) {
            document.getElementById("game_board").childNodes[0].remove();
        }
    }
    // variable 초기화!
    // reset variables!
    num = 0;
    cellId = 7;
}


            /*******************/
            /* --[Game Start]-- */
            /*******************/


    // 게임 스타트
    // Game Start
function start() {
    
    // 게임 초기화
    // reset game board
    reset();
    
    alert("Shall we begin?!");
    
    // 게임 보드 그리기
    // Draw Game Board Table
    setGameTable();
    
    // 동물전사들 보드에 올리기
    // Place animal warriors on the board
    setDefaultPos();
};