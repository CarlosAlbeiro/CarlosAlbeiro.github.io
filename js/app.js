(function () {
    window.addEventListener('scroll', () => {
        scrollActual = window.scrollY;
        if (scrollActual > 801.1636352539062) {
            $("#menu").css("display", "block")
            $("#menu").show();
        } else {
            $("#menu").hide("slow");
        }
    });
})();

