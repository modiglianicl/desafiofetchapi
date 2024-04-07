const urlApi = "https://jsonplaceholder.typicode.com/posts";

const getPosts = async () => {
    try {
        const respuestaDatos = await fetch(urlApi);
        if (!respuestaDatos.ok) {
            throw new Error('Error al obtener los datos de la API');
        }
        const obtenerDatos = await respuestaDatos.json();

        for (let i = 0; i < 4; i++) {
            let tituloPost = obtenerDatos[i].title;
            let bodyPost = obtenerDatos[i].body;
            document.getElementById("post-data").innerHTML += `<li><b>${tituloPost}<b></li>`;
            document.getElementById("post-data").innerHTML += `${bodyPost}<br />`;
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        // Manejo de errores, por ejemplo, mostrar un mensaje al usuario
        // o realizar alguna acción específica para manejar el error.
    }
};

getPosts();
