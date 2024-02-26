// Función autoinvocada cuando carga el DOM
var miAudio = document.getElementById('audio');
(function () {

    // Obtener referencia a la sección  
    const section = document.getElementById('inicio');

    if (section) {

        window.addEventListener('scroll', () => {

            // Posición vertical de la sección
            const sectionTop = section.getBoundingClientRect().top;

            // Scroll desde el top de la página 
            scrollActual = window.scrollY;

            // Cálculo de posición según scroll
            const posicion = scrollActual + sectionTop;

            console.log("----", posicion);
            console.log("xxx", scrollActual);
            if (scrollActual > posicion) {
                console.log("pausar");
                miAudio.pause();

            } else {
                console.log("sonar");
                miAudio.play();
            }




        });

    }
})();