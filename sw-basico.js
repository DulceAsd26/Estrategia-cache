


self.addEventListener('fetch', event => {

    //const offLineResp = new Response(`

        //Bienvenido a mi Pagina Web
        
        //Disculpa pero para usarla, necesitas internet
        
        //`);

        //const offLineResp = new Response(`
        
        //<!DOCTYPE html>
//<html lang="en">
//<head>
    //<meta charset="UTF-8">
    //<meta name="viewport" content="width=device-width, initial-scale=1.0">
    //<meta http-equiv="X-UA-Compatible" content="ie=edge">
    //<title>Mi PWA</title>

//</head>
//<body class="container p-3">

//<h1> Offline Mode</h1>

//</body>
//</html>
  //      `, {
   //         headers: {
     //           'Content-Type': 'text/html'
       //     }
        //});


    const offLineResp = fetch('pages/offline.html');

    
    const resp = fetch(event.request)
                    .catch( () => offLineResp);


    event.respondWith( resp );

});