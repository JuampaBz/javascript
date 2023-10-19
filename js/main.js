document.addEventListener("DOMContentLoaded", function () {
    // referencias a los elementos 
    const listaTareas = document.getElementById("listaTareas");
    const botonAgregarTarea = document.getElementById("agregarTarea");
    const climaBuenosAires = document.getElementById("climaBuenosAires");
    const contenedorRangos = document.getElementById("contenedorRangos");
    const mostrarResultadoButton = document.getElementById("mostrarResultado");

    cargarTareas();

    // Agregar tarea
    botonAgregarTarea.addEventListener("click", function () {
        const inputTarea = document.getElementById("inputTarea");
        const textoTarea = inputTarea.value.trim();

        if (textoTarea !== "") {
            const tarea = { texto: textoTarea, completada: false };
            agregarTarea(tarea);
            inputTarea.value = "";
        }
    });

    // agregar una tarea a la lista

    function agregarTarea(tarea) {
        const elementoTarea = document.createElement("li");
        elementoTarea.innerHTML = `
            <input type="checkbox">
            <span>${tarea.texto}</span>
            <button>Eliminar</button>
        `;

        listaTareas.appendChild(elementoTarea);

        //  tarea completada
        const checkbox = elementoTarea.querySelector("input");
        checkbox.addEventListener("change", function () {
            tarea.completada = checkbox.checked;
            guardarTareas();
        });

        //  eliminar tarea
        const botonEliminar = elementoTarea.querySelector("button");
        botonEliminar.addEventListener("click", function () {
            listaTareas.removeChild(elementoTarea);
            eliminarTarea(tarea);
        });
        
        // notificación 
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu tarea ha sido agregada',
            showConfirmButton: false,
            timer: 1500
        });
    }

    // cargar tareas 
    function cargarTareas() {
        const tareas = JSON.parse(localStorage.getItem("tareas")) || [];

        tareas.forEach(tarea => {
            agregarTarea(tarea);
            if (tarea.completada) {
                listaTareas.lastChild.querySelector("input").checked = true;
            }
        });
    }

    // guardar tareas 
    function guardarTareas() {
        const tareas = Array.from(listaTareas.children).map(elementoTarea => {
            return {
                texto: elementoTarea.querySelector("span").textContent,
                completada: elementoTarea.querySelector("input").checked,
            };
        });

        
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    // eliminar una tarea
    function eliminarTarea(tarea) {
        guardarTareas();
    }

    // mostrar el clima en Buenos Aires
    function obtenerClimaBuenosAires() {
        const apiKey = "6920e99c502df5e0365dc48f4c48259f"; 
        const ciudad = "Buenos Aires,ar";
        const unidad = "metric";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=${unidad}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const temperatura = data.main.temp;
                const descripcion = data.weather[0].description;
                const ciudadNombre = data.name;

                const datosClima = `El clima en ${ciudadNombre} es ${descripcion} y la temperatura es ${temperatura}°C.`;
                climaBuenosAires.textContent = datosClima;
            })
            .catch(error => {
                console.error("Error al obtener datos meteorológicos:", error);
            });
    }

    // actualizar el clima periódicamente
    function actualizarClimaPeriodicamente() {
        obtenerClimaBuenosAires();
        setInterval(obtenerClimaBuenosAires, 1800000);
    }

    actualizarClimaPeriodicamente();
}); 
    function mostrarFechaActual() {
        const fechaActual = new Date();
        const options = { year: "numeric", month: "long", day: "numeric" };
        const fechaFormateada = fechaActual.toLocaleDateString("es-AR", options);

        const fechaActualElement = document.getElementById("fechaActual");
        fechaActualElement.textContent = fechaFormateada;
}

    mostrarFechaActual();

    // array 
    const rangosDeEdad = [
        { nombre: "Niños", min: 0, max: 12 },
        { nombre: "Adolescentes", min: 13, max: 19 },
        { nombre: "Adultos", min: 20, max: 65 }
    ];

    const contenedorRangos = document.getElementById("contenedorRangos");
    const mostrarResultadoButton = document.getElementById("mostrarResultado");

    console.log(rangosDeEdad);



