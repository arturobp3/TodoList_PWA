// Si se pueden cargar ServiceWorkers
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        //Registra y da feedback dependiendo del resultado
        navigator.serviceWorker.register('/javascript/sw.js').then(reg => {
            console.log('El navegador ejecuta service workers ', reg)
        }, function (err) {
            console.log('Fallo. El navegador no soporta service workers ', err)
        })
    })
}