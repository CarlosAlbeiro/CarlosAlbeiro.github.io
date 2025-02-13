function esMovil() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

(function () {
  window.addEventListener("scroll", () => {
    scrollActual = window.scrollY;
    console.log("====================================");
    console.log(scrollActual);
    console.log("====================================");
    let medida=0;
    if (esMovil()) {
      medida=582.9818115234375;
    } else {
      medida=636.2181396484375;
    }
    if (scrollActual > medida) {
      $("#menu").css("display", "block");
      $("#menu").show();
    } else {
      $("#menu").hide("slow");
    }
  });
})();

function ruta(id_ruta){
  let ruta="";
  switch (id_ruta) {
    case 1:
        ruta="TECNICO.jpg"
      break;
    case 2:
        ruta="TECNOLOGO.jpg"
      break;
  
    default:
      ruta="programador.png"
      break;
  }
  $("#titulo").attr("src", "estilos/img/" + ruta);
}