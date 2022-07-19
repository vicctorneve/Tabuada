const tabuadaTitle = document.querySelector('#tabuada-do-numero');
let tabuada = document.querySelector('#tabuada');
const btnShowTabuada = document.querySelector('#btn-show-tabuada');
const inputNumber = document.querySelector('#number-input')

btnShowTabuada.addEventListener('click', execute)
function execute() {
   if (!inputNumber.value) return
   calcTabuada()
   showNumberTitle();
}
document.addEventListener('keypress', function(e) {
   if (e.key === "Enter"){
      if (!inputNumber.value) return
      execute();
   }
})
// function showTabuada (result) {
//    tabuada.innerHTML = '';
//    let p = createP();
//    p.innerText = result;
//    console.log(p)
//    tabuada.appendChild(p)
// }
function createP() {
   const p = document.createElement('p');
   return p
}
function showNumberTitle() {
   tabuadaTitle.innerHTML=`do ${inputNumber.value}`;
}
function calcTabuada () {
   tabuada.innerHTML = '';
   for (let i = 0; i <= 10; i++) {
      const number = inputNumber.value;
      let resultCalc = number * i;
      let result = ` ${number} X ${i} = ${resultCalc} `
      let p = createP()
      p.innerText = result
      tabuada.appendChild(p)
      // showTabuada(result)
   }
};

