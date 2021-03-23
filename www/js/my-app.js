  

var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {path: '/index/', url: 'index.html',},

      {path: '/deportivo/', url: 'deportivo.html',},
      {path: '/videojuegos/', url: 'videojuegos.html',},
      {path: '/mesa/', url: 'mesa.html',},
      
      {path: '/copa/', url: 'copa.html',},
      {path: '/liga/', url: 'liga.html',},
      {path: '/grupo/', url: 'grupo.html',},

      {path: '/vsequipo/', url: 'vsequipo.html',},
      {path: '/vsjugador/', url: 'vsjugador.html',},
      {path: '/vstodos/', url: 'vstodos.html',},

      {path: '/equipo/', url: 'equipo.html',},
      {path: '/noequipo/', url: 'noequipo.html',},
      
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

var nomtorneo="";
var nro=0;
var key=0;
var ides=[];
var names=[];

$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


$$(document).on('page:init', function (e) {
    
    console.log(e);
})

///Pagina de modalidad deportiva
$$(document).on('page:init', '.page[data-name="deportivo"]', function (e) {

   //Para volver a index
      $$('#btnVolver').on('click', function() {
    mainView.router.navigate('/index/');
  });
   //Para ir a copa
      $$('#btnCopa').on('click', function() {
    mainView.router.navigate('/copa/');
    }); 

   //Para ir a liga
      $$('#btnLiga').on('click', function() {
    mainView.router.navigate('/liga/');
    });   
  //Para ir a grupo
      $$('#btnGrupo').on('click', function() {
    mainView.router.navigate('/grupo/');
  }); 


  ////////////////Eventos click/////////////////////////////////////////


  //Para guardar el nombre del torneo y la cantidad de participantes
     $$('#btnContinuar').on('click', fnContinuar);
  //Para volver a la vista1 
     $$('#btnVolverVista').on('click', fnVolverVista); 
  //Para guardar los nombres de los participantes
     $$('#btnGuardar').on('click', fnGuardar);
  
  //Para la función copa
    $$('#btnCopa').on('click', fnCopa);
     
      
})


/////////////////////////////////////////////////////////////////

$$(document).on('page:init', '.page[data-name="copa"]', function (e) {


  //Para volver a deportivo
      $$('#btnVolver').on('click', function() {
    mainView.router.navigate('/deportivo/');
  });

  //Para volver a Index
      $$('#btnInicio').on('click', function() {
    mainView.router.navigate('/index/');
  });     
})


$$(document).on('page:init', '.page[data-name="liga"]', function (e) {
   //Para volver a deportivo
      $$('#btnVolver').on('click', function() {
    mainView.router.navigate('/deportivo/');
  });

  //Para volver a Index
      $$('#btnInicio').on('click', function() {
    mainView.router.navigate('/index/');
  });     
})   


$$(document).on('page:init', '.page[data-name="grupo"]', function (e) {
   //Para volver a deportivo
      $$('#btnVolver').on('click', function() {
    mainView.router.navigate('/deportivo/');
  }); 

  //Para volver a Index
      $$('#btnInicio').on('click', function() {
    mainView.router.navigate('/index/');
  });      
})


///////////////////////////////////Funciones//////////////////////////////////////////

function fnContinuar(){
  nomtorneo=$$('#torneo').val();
  nro=$$('#cantidad').val();

  console.log('ver el nombre del torneo '+ nomtorneo + ' y la cantidad de jugadores/equipos ' + nro);

  $$('#titulo').html('');
  $$('#titulo').append('<p>Escribe los nombres de los participantes del torneo '+nomtorneo+'.</p>');

  $$('#nombres').html('');
  for (i = 0; i < nro; i++) {
     $$('#nombres').append('<input type="text" class="datos" id="n_'+ i +'" minlength="1" maxlength="15" placeholder="Equipo o Jugador  '+ i +'" />');
  }

  if ($$('#ver1').hasClass('vista1')) {
  $$('#ver1').removeClass('vista1').addClass('vista2');
  $$('#ver2').removeClass('vista2').addClass('vista1');}
}
//.......................................................................................//
function fnVolverVista(){
  if ($$('#ver1').hasClass('vista2')) {
  $$('#ver1').removeClass('vista2').addClass('vista1');
  $$('#ver2').removeClass('vista1').addClass('vista2');}
}
//.......................................................................................//
function fnGuardar(){
  for (i = 0; i < nro; i++) {
    ides.push('n_'+i);
  nombre= $$('#n_'+i).val();
  names.push(nombre);
  }

  console.log('ver '+ides+' y '+names);


  if ($$('#ver2').hasClass('vista1')) {
  $$('#ver2').removeClass('vista1').addClass('vista2');
  $$('#ver3').removeClass('vista3').addClass('vista1');}
}
//.......................................................................................//
function fnVolverVista2(){
  if ($$('#ver3').hasClass('vista1')) {
  $$('#ver3').removeClass('vista1').addClass('vista3');
  $$('#ver2').removeClass('vista2').addClass('vista1');}
}

//.......................................................................................//
function fnCopa(){

  key=nro/2;
  var llave=parseInt(key);
  var resto=key-llave;
  min=0;
  max=names.length-1;

  console.log('ver key '+ key +' ver cantidad de llave '+llave+' ver el resto '+ resto);

  $$('#copavs').html('');
  $$('#copavs').append('<div class="block block-strong"><p>Torneo '+nomtorneo+'</p></div>');

  $$('#coparonda').html('');
  if (llave>2) {
   $$('#coparonda').append('<div class="block block-strong"><p>Ronda 1</p></div>');
 } else if (llave == 2) {
   $$('#coparonda').append('<div class="block block-strong"><p>Semifinal</p></div>');
 } else if (llave == 1){
   $$('#coparonda').append('<div class="block block-strong"><p>Final</p></div>'); 
 } 

  for (i = 0; i < llave; i++){
    aleatorio=math.random()*(max-min)+min;
  }


  $$('#copallaves').html('');
  for (i = 0; i < llave; i++) {
     $$('#copallaves').append('<div class="block block-strong"><div class="row"><div> llave '+i+'</div><input type="number" id="puntos" class="p1" max="10" min="0" minlength="1" maxlength="2" placeholder="0" /></div><div class="row"><div> llave '+i+'</div><input type="number" id="puntos" class="p1" max="10" min="0" minlength="1" maxlength="2" placeholder="0"/></div></div>');
  }
  

}




