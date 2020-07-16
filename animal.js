            /*******************/
            /* --[VARIABLES]-- */
            /*******************/

let validCoord = [7,8,9,12,13,14,17,18,19,22,23,24];
let getValidPos = [];
let highlightOnOff = false;
let num = 0;
let cellId = 7;
let turn = "blue";
let killedAnimals = [];

    // 동물전사 리스트
    // animals warriors

let animalWarriers = {
    "blue": [{
            "name": "blue_rabbit",
            "url": "./images/rabbit.png",
            "defPos": 24,
            "move": [1,-1,5,-5]
        },
        {
            "name": "blue_tiger",
            "url": "./images/tiger.png",
            "defPos": 23,
            "move": [1,5,4,6,-1,-5,-4,-6]
        },
        {
            "name": "blue_cow",
            "url": "./images/cow.png",
            "defPos": 22,
            "move": [4,6,-4,-6]
        },
        {
            "name": "blue_sheep",
            "url": "./images/sheep.png",
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

        //      [1]       //

    // 게임 보드 그리기 -> table 에 tr/td 넣기 + 가로/ 세로/ 아이디 부여
    // Draw Game Board -> put tr/td in table + set width/ height/ id
function setGameTable() {

    let table = document.getElementById("game_board");
    
    table.style.tableLayout = "fixed";
    
    for (let i=0; i<4; i++) {
        let row = document.createElement("tr");
        
        for (let c=0; c<3; c++) {
            let cell = document.createElement("td");
            
            // 가로/세로 길이 및 ID 지정
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

    //      [2]       //

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

    //      [3]  + [4]       //

    // 가능한 움직임 확인/보여주기
    // Show/check legal/possible moves
function checkLegalMove(animal) {
    animal.addEventListener("click", function() {
        
        validPointerCaptured(animal);

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
                            
                            if (highlightOnOff == false) {
                                
                                // 상대편의 동물이 있거나 비어있는 곳으로만 움직일 수 있음 (같은 팀의 동물이 있는 경우 움직임을 제한)
                                // Below IF STATEMENTS disable movement to the same team
                                if (document.getElementById(getPos).childNodes.length > 0) {
                                    
                                    if (document.getElementById(getPos).childNodes[0].id[0] !== "b") {
                                        validPointer(getPos, animal, "#6495ED", "coordB ");
                                        moveAnimalPiece(getPos, animal, ".coordB");
                                    }
                                }

                                else if (document.getElementById(getPos).childNodes.length === 0) {
                                    
                                    validPointer(getPos, animal, "#6495ED", "coordB ");
                                    moveAnimalPiece(getPos, animal, ".coordB");
                                }

                            }
                            
                            else {
                                // remove highlights/indicators
                                document.querySelectorAll(".coordB").forEach(function(a) {
                                    a.remove();
                                });
                                document.querySelectorAll("td").forEach(c => c.style.backgroundColor = "");
                                
                                document.querySelectorAll("img").forEach(function(c) {
                                    c.style.opacity = 1; 
                                });
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

                            if (highlightOnOff == false) {

                                // 상대편의 동물이 있거나 비어있는 곳으로만 움직일 수 있음 (같은 팀의 동물이 있는 경우 움직임을 제한)
                                // Below IF STATEMENTS disable movement to the same team
                                if (document.getElementById(getPos).childNodes.length > 0) {
                                    
                                    if (document.getElementById(getPos).childNodes[0].id[0] !== "r") {
                                        validPointer(getPos, animal, "hotpink", "coordR ");
                                        moveAnimalPiece(getPos, animal, ".coordR");
                                    }
                                }

                                else if (document.getElementById(getPos).childNodes.length === 0) {
                                    
                                    validPointer(getPos, animal, "hotpink", "coordR ");
                                    moveAnimalPiece(getPos, animal, ".coordR");
                                }

                            }

                            else {
                                // remove highlights/indicators
                                document.querySelectorAll(".coordR").forEach(function(a) {
                                    a.remove();
                                });
                                document.querySelectorAll("td").forEach(c => c.style.backgroundColor = "");
                                
                                document.querySelectorAll("img").forEach(function(c) {
                                    c.style.opacity = 1; 
                                });
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

    //      [3]       //

    // 가능한 움직임 표시하기
    // Show valid/legal moves
function validPointer(getPos, animal, teamColor, teamColorTxt) {
    document.getElementById(getPos).style.backgroundColor = teamColor;
    console.log(document.getElementById(getPos).childNodes.length)
    let coord = document.createElement("div");
    coord.className = teamColorTxt + getPos;
    
    document.getElementById(getPos).appendChild(coord);

    // console.log(
    //     coord + " " +
    //     typeof coord.className + " " +
    //     document.getElementById(getPos).appendChild(coord)
    // );

    // 선택된 동물 외 모든 동물들의 opacity = 0.5
    // if animal warrior is selected, reduce opacity of unselected
    document.querySelectorAll("img").forEach(function(c) {
        if (c.id !== animal.id) c.style.opacity = 0.5; 
    });
}

    //      [00]       //

    // 포로 동물들의 가능한 움직임 표시
    // Show valid/legal moves for captured animals
function validPointerCaptured(captured) {
    
    if (captured.parentNode.parentNode.id === "killed_red") {
        validCoord.forEach(function(c) {
            if (!document.getElementById(c).childNodes.length) {
                validPointer(c, captured, "hotpink", "coordR ");
                moveAnimalPiece(c, captured, ".coordR");
            }
        })
    }

    else if (captured.parentNode.parentNode.id === "killed_blue") {
        validCoord.forEach(function(c) {
            if (!document.getElementById(c).childNodes.length) {
                validPointer(c, captured, "hotpink", "coordR ");
                moveAnimalPiece(c, captured, ".coordR");
            }
        })
    }

}

    //      [4]       //

    // 동물 움직이기
    // Move animal warrior
function moveAnimalPiece(getPos, animal, teamColor) {
    document.getElementsByClassName(getPos)[0].addEventListener("click", function(e) {
        if (e.target == this) {
            
            document.querySelectorAll("img").forEach(function(c) {
                c.style.opacity = 1; 
            });
            
            if (document.getElementById(getPos).childNodes.length > 1) {
                let killed = document.getElementById(getPos).childNodes[0];
                killedAnimals.push(document.getElementById(getPos).childNodes[0]);
                document.getElementById(getPos).childNodes[0].remove();
                
                let killedCell = document.createElement("td");
                document.getElementsByClassName(killed.id)[0].appendChild(killed);
            }

            // 동물 움직이기
            // Move animal warrior
            this.parentNode.appendChild(animal);
            
            // 게임이 끝났는지 확인
            // Check if the game is OVER
            checkGameOver();
            
            // remove highlighter
            document.querySelectorAll("td").forEach(c => c.style.backgroundColor = "");
            
            // remove valid move indicator - circle
            
            document.querySelectorAll(teamColor).forEach(function(a) {
                a.remove();
            });
            
            getValidPos = [];
            
            (highlightOnOff) ? highlightOnOff = false : highlightOnOff = true;
            
            (turn == "red") ? turn = "blue" : turn = "red";
        }
    })
}

    //      [5]       //

    // 게임이 끝났는지 확인
    // Check if the game is OVER
function checkGameOver() {
    let redKing = document.getElementsByClassName("red_lion")[0].childNodes.length;
    let blueKing = document.getElementsByClassName("blue_tiger")[0].childNodes.length;
    
    if (redKing == 1) {
        alert("BLUE WON!!");
        //      [6]       //
        // 게임 다시 시작
        // Restart the game
        start();
    }
    if (blueKing == 1) {
        alert("RED WON!!");
        //      [6]       //
        // 게임 다시 시작
        // Restart the game
        start();
    }
}

    //      [6]       //

    // 게임 리셋
    // Reset Game
function reset() {
    // id = game_board 에 td/tr 이 존재할 경우
    // if there are td/tr in id = game_board, remove them
    if (document.getElementById("game_board").childNodes.length > 0) {
        for (let i=0; i < 4; i++) {
            document.getElementById("game_board").childNodes[0].remove();
        }
    }

    // 포로 동물들 리셋
    // remove animal containing cell
    document.querySelectorAll("img").forEach(c => c.remove());

    // variable 초기화!
    // reset variables!
    num = 0;
    cellId = 7;
}


            /********************/
            /* --[Game Start]-- */
            /********************/


    // 게임 스타트
    // Game Start
function start() {
    //      [6]       //
    // 게임 초기화
    // reset game board
    reset();
    
    alert("Let the game begin!!");
    
    //      [1]       //
    // 게임 보드 그리기
    // Draw Game Board Table
    setGameTable();
    
    //      [2]       //
    // 동물전사들 보드에 올리기
    // Place animal warriors on the board
    setDefaultPos();
};