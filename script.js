
document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // 1. MENÚ PARA CELULARES
    // =====================================

    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("activo");

            const icono = menuBtn.querySelector("i");

            if (icono) {
                if (navLinks.classList.contains("activo")) {
                    icono.classList.remove("fa-bars");
                    icono.classList.add("fa-xmark");
                } else {
                    icono.classList.remove("fa-xmark");
                    icono.classList.add("fa-bars");
                }
            }

            menuBtn.setAttribute(
                "aria-expanded",
                navLinks.classList.contains("activo")
            );
        });

        // Cerrar el menú al seleccionar una sección
        const enlaces = navLinks.querySelectorAll("a");

        enlaces.forEach((enlace) => {
            enlace.addEventListener("click", () => {
                navLinks.classList.remove("activo");

                const icono = menuBtn.querySelector("i");

                if (icono) {
                    icono.classList.remove("fa-xmark");
                    icono.classList.add("fa-bars");
                }

                menuBtn.setAttribute("aria-expanded", "false");
            });
        });
    }


    // =====================================
    // 2. MODO OSCURO Y MODO CLARO
    // =====================================

    const temaBtn = document.getElementById("tema-btn");

    if (temaBtn) {

        temaBtn.addEventListener("click", () => {

            document.body.classList.toggle("claro");

            const icono = temaBtn.querySelector("i");

            if (icono) {
                if (document.body.classList.contains("claro")) {
                    icono.classList.remove("fa-moon");
                    icono.classList.add("fa-sun");
                } else {
                    icono.classList.remove("fa-sun");
                    icono.classList.add("fa-moon");
                }
            }
        });
    }


    // =====================================
    // 3. MOSTRAR EL AÑO AUTOMÁTICAMENTE
    // =====================================

    const anio = document.getElementById("anio");

    if (anio) {
        anio.textContent = new Date().getFullYear();
    }


    // =====================================
    // 4. BOTÓN PARA SUBIR AL INICIO
    // =====================================

    const subirBtn = document.getElementById("subir");

    if (subirBtn) {

        // Mostrar el botón cuando se baja por la página
        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {
                subirBtn.classList.add("mostrar");
            } else {
                subirBtn.classList.remove("mostrar");
            }

        });

        // Regresar suavemente al inicio
        subirBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }


    // =====================================
    // 5. ANIMACIONES AL DESPLAZARSE
    // =====================================

    const elementos = document.querySelectorAll(
        ".tarjeta, .meta, .sobre-contenido, .recuerdo"
    );

    if ("IntersectionObserver" in window) {

        const observador = new IntersectionObserver((entradas, observer) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                    observer.unobserve(entrada.target);
                }

            });

        }, {
            threshold: 0.15
        });

        elementos.forEach((elemento) => {
            observador.observe(elemento);
        });

    } else {

        // Alternativa para navegadores antiguos
        elementos.forEach((elemento) => {
            elemento.classList.add("visible");
        });
    }


    // =====================================
    // 6. EFECTO SUAVE DE DESPLAZAMIENTO
    // =====================================

    const enlacesInternos = document.querySelectorAll('a[href^="#"]');

    enlacesInternos.forEach((enlace) => {

        enlace.addEventListener("click", (evento) => {

            const destino = enlace.getAttribute("href");

            if (!destino || destino === "#") {
                return;
            }

            const seccion = document.querySelector(destino);

            if (seccion) {
                evento.preventDefault();

                seccion.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });
    });


    // =====================================
    // 7. MENSAJE EN LA CONSOLA
    // =====================================

    console.log("¡Bienvenido a la página personal de Roxana Taipe!");
    console.log("La página web se ha cargado correctamente.");

});
