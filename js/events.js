console.log('This is separate JS file')


//option: 2 add onclick function
function makered() {
    document.body.style.backgroundColor = 'red';

}

//Option: 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue();

function makeBlue() {
    document.body.style.backgroundColor = 'blue';

}

const makeButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple'

}

//option 4
const pintButton = document.getElementById('make-pink');
pintButton.addEventListener('click', makePink)
function makePink() {
    document.body.style.backgroundColor = 'pink';

}
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';

})

//option 4 final
// document.getElementById('make-goldenrod').addEventListener('click', function () {})
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})


