var showDeadAnimals = document.getElementById("revivalMenuOpen");

var hideDeadAnimals = document.getElementById("revivalMenuClose");

var deadAnimalList = document.getElementById("animal_revival");

showDeadAnimals.addEventListener("click", function() {
    deadAnimalList.style.width = "100%";
});

hideDeadAnimals.addEventListener("click", function() {
    deadAnimalList.style.width = "0%";
});