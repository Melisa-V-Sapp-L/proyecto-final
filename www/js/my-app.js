  
// If we need to use custom DOM library, let's save it to $$ variable:
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

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})


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

})


$$(document).on('page:init', '.page[data-name="mesa"]', function (e) {
   //Para volver a index
      $$('#btnVolver').on('click', function() {
    mainView.router.navigate('/index/');
  });
    //Para ir a todos vs todos
      $$('#btnSiTeam').on('click', function() {
    mainView.router.navigate('/equipo/');
  });
  //Para ir a equipo vs equipo
      $$('#btnNoTeam').on('click', function() {
    mainView.router.navigate('/noequipo/');
  }); 

})


$$(document).on('page:init', '.page[data-name="videojuegos"]', function (e) {
   //Para volver a index
      $$('#btnVolver').on('click', function() {
    mainView.router.navigate('/index/');
  });
    //Para ir a jugador vs jugador
      $$('#btnVsJ').on('click', function() {
    mainView.router.navigate('/vsjugador/');
  });
   //Para ir a todos vs todos
      $$('#btnVsT').on('click', function() {
    mainView.router.navigate('/vstodos/');
  });
  //Para ir a equipo vs equipo
      $$('#btnVsE').on('click', function() {
    mainView.router.navigate('/vsequipo/');
  });      
})


$$(document).on('page:init', '.page[data-name="copa"]', function (e) {
   //Para volver a deportivo
      $$('#btnVolver').on('click', function() {
    mainView.router.navigate('/deportivo/');
  });
})
$$(document).on('page:init', '.page[data-name="liga"]', function (e) {
   //Para volver a deportivo
      $$('#btnVolver').on('click', function() {
    mainView.router.navigate('/deportivo/');
  });
})      
$$(document).on('page:init', '.page[data-name="grupo"]', function (e) {
   //Para volver a deportivo
      $$('#btnVolver').on('click', function() {
    mainView.router.navigate('/deportivo/');
  });      
})


$$(document).on('page:init', '.page[data-name="vsjugador"]', function (e) {
   //Para volver a videojuegos
      $$('#btnVolver').on('click', function() {
    mainView.router.navigate('/videojuegos/');
  });
})


$$(document).on('page:init', '.page[data-name="vstodos"]', function (e) {
   //Para volver a videojuegos
      $$('#btnVolver').on('click', function() {
    mainView.router.navigate('/videojuegos/');
  });
})


$$(document).on('page:init', '.page[data-name="vsequipo"]', function (e) {
   //Para volver a videojuegos
      $$('#btnVolver').on('click', function() {
    mainView.router.navigate('/videojuegos/');
  });      
})



$$(document).on('page:init', '.page[data-name="equipo"]', function (e) {
   //Para volver a mesa
      $$('#btnVolver').on('click', function() {
    mainView.router.navigate('/mesa/');
  });
})  

    
$$(document).on('page:init', '.page[data-name="noequipo"]', function (e) {
   //Para volver a mesa
      $$('#btnVolver').on('click', function() {
    mainView.router.navigate('/mesa/');
  });      
})