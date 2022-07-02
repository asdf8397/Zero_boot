const resetButton = document.querySelector(".reset");

const onReset = function (event) {
    console.dir(event);
};

resetButton.addEventListener("click", onReset);

/*
const resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", function(event) {
    console.dir(event);
});
*/
// resetButton.removeEventListener("click", function (event) {
//     console.dir(event);
// })