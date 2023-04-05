let userInput = document.querySelector('.userInput');
let answerContainer = document.querySelector('.answerContainer');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#backspaceBtn');
let clearbtn = document.querySelector('#clearScreen');
let evaluate = document.querySelector('#evaluate');
let realTimeScreenValue = []

document.addEventListener("keydown", (event) => {
    let key = event.key;
    let btn = document.querySelector(`button[value="${key}"]`);
    if (btn) {
      btn.click();
    }
  });
  

clearbtn.addEventListener("click", () => {
    realTimeScreenValue = [''];
    answerContainer.innerHTML = 0;
    userInput.className = 'userInput'
    answerContainer.className = 'answerContainer';
    answerContainer.style.color = " rgba(150, 150, 150, 0.87)";
})


buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // when clicked button is not erased button 
        if (!btn.id.match('backspaceBtn')) {
            // To display value on btn press
            realTimeScreenValue.push(btn.value)
            userInput.innerHTML = realTimeScreenValue.join('');

        // To evaluate answer in real time
            if (btn.classList.contains('num_btn')) {
                // changes the default number 0 in the answer container to the inputted number
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            }
    }

        // When erase button is clicked
        if (btn.id.match('backspaceBtn')) {
            realTimeScreenValue.pop();
            userInput.innerHTML = realTimeScreenValue.join('');
            answerContainer.innerHTML = eval(realTimeScreenValue.join(''));
        }

        // When clicked button is evaluate button
        if (btn.id.match('evaluate')) {
            userInput.className = 'answerContainer';
            answerContainer.className = 'userInput';
            answerContainer.style.color = "white";
            userInput.innerHTML = realTimeScreenValue.join('');
            answerContainer.innerHTML = eval(realTimeScreenValue.join(''));
        }

        // To prevent undefined error in screen
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerContainer.innerHTML = 0
        }
    })
    
 })