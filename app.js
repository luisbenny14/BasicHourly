var sections = document.querySelectorAll('section');
var comenzar = document.querySelector('.comenzar');
var siguiente = document.querySelectorAll('.siguiente');
var reiniciar = document.querySelector('.reiniciar');

var calcular = document.querySelector('.calcular');

var currentSection = 0;

TweenMax.set('section',{display: 'none'});
TweenMax.set(sections[currentSection],{display: 'flex'});
TweenMax.from(sections[currentSection], 0.5, {opacity: 0});

comenzar.addEventListener('click', function(e){
  e.preventDefault();
  currentSection += 1;
  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[currentSection],{display: 'flex'});
  TweenMax.from(sections[currentSection], 0.5, {opacity: 0});
});

siguiente.forEach(btn => btn.addEventListener('click', function(e){
    e.preventDefault();
    currentSection += 1;
    TweenMax.set('section',{display: 'none'});
    TweenMax.set(sections[currentSection],{display: 'flex'});
    TweenMax.from(sections[currentSection], 0.5, {opacity: 0});
}));

calcular.addEventListener('click', function(e){
    e.preventDefault();

    
    currentSection += 1;
    TweenMax.set('section',{display: 'none'});
    TweenMax.set(sections[currentSection],{display: 'flex'});
    TweenMax.from(sections[currentSection], 0.5, {opacity: 0});



    var gastostotales=0;
   var gastos=document.querySelectorAll('.gasto');
    gastos.forEach(item => gastostotales+= Number(item.value));

  var totales = document.querySelector('.totales');
  totales.innerHTML=gastostotales;

  var ganancia=Number(document.getElementById('Ganancia').value)/100;
  var gastosMasGanancia = gastostotales + (gastostotales*ganancia);

  var Jubilacion = Number(document.getElementById('jubilacion').value)/100;
  var MinIngresoMens= gastosMasGanancia+(gastosMasGanancia*Jubilacion);
    console.log(MinIngresoMens);

  var mim = document.querySelector('.mim');
  mim.innerHTML=MinIngresoMens;


  var horastotales= Number(document.getElementById('horasdia').value);
  var Dias = Number(document.getElementById('dias').value);
  var Totalhoras= horastotales*Dias*4;

  var costoporhora=MinIngresoMens/Totalhoras;

  var cph = document.querySelector('.cph');
  cph.innerHTML=costoporhora;



});

reiniciar.addEventListener('click', function(e){
    e.preventDefault();
    currentSection =0;
    TweenMax.set('section',{display: 'none'});
    TweenMax.set(sections[currentSection],{display: 'flex'});
    TweenMax.from(sections[currentSection], 0.5, {opacity: 0});
  
});