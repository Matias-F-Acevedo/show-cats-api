// Realizar un llamado a una Api y al menos traer imagenes. Agregar estilos (opcional).

let imgContainer = document.createElement("div")

imgContainer.id = "img-container";

document.body.appendChild(imgContainer)



fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME").then(response => response.json()).then(data => data.forEach(element => {

        let imgUrl = element.url;

        let imgElement = document.createElement("img")

        imgElement.src = imgUrl;
        imgElement.alt = "Bengal cat"
        imgContainer.appendChild(imgElement);

}))
    
.catch(error => console.log(error, "No se puedo resolver la peticion"));


