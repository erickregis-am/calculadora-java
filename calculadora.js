 function digitar(num) {
    document.querySelector('.visor_calc').innerHTML += num 
}
 

var c = document.querySelector('.operatorsButtons');
c.addEventListener('click',limpar);

function limpar(){
     document.querySelector('.visor_calc').innerHTML='';
}     
 
     

 
