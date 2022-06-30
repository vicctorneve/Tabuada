const btnShowTabuada = document.querySelector('#btn-show-tabuada');

btnShowTabuada.addEventListener('click', function (){
   const numeroTabuada = document.querySelector('#numero').value;
   const tabuadaTitle = document.querySelector('span#tabuada-do-numero');
   const tabuada = document.querySelector('#tabuada');
   tabuada.innerHTML = '';
   calcularTabuada(numeroTabuada, tabuadaTitle);
})
function calcularTabuada(numeroTabuada, tabuadaTitle) {
   for (let i = 0; i <= 10; i++) {
      tabuadaTitle.innerHTML = `do ${numeroTabuada}`;
      let result = numeroTabuada * i;
      tabuada.innerHTML += (`<p>${numeroTabuada} X ${i} = ${result}</p>`);
   }
};





