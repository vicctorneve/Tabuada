const btnShowTabuada = document.querySelector('#btn-show-tabuada');
const tabuada = document.querySelector('#tabuada');
const tabuadaTitle = document.querySelector('span#tabuada-do-numero');

btnShowTabuada.addEventListener('click', function (){
   const numberInput = document.querySelector('#number').value;
   resetTabuada();
   showTabuadaTitle(numberInput);
   calcularTabuada(numberInput, tabuadaTitle);
});
function resetTabuada(){
   tabuada.innerHTML = '';
};
function showTabuadaTitle(numberInput){
   tabuadaTitle.innerHTML = `do ${numberInput}`;
}
function calcularTabuada(numberInput) {
   for (let i = 0; i <= 10; i++) {
      let result = numberInput * i;
      tabuada.innerHTML += (`<p>${numberInput} X ${i} = ${result}</p>`);
   }
};





