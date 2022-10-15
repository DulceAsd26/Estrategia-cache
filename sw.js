


self.addEventListener('fetch', event => {

    const offLineResp = new Response(`
        Bienvenido a mi Pagina Web
        
        Disculpa pero para usarla, necesitas internet
        
        `);

    const resp = fetch(event.request)
                    .catch( () => {

                        return offLineResp;
                    });


    event.respondWith(fetch(event.request) );

});