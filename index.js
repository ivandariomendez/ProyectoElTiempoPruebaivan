const API_URL = "https://images-api.nasa.gov";
const xhr = new XMLHttpRequest();



function onRequestHandler(){
    if (this.readyState == 4 && this.status == 200) {
       
          /*  diferentes estados
           0 = unset, no se llama al metodo open 
           1 = opened, se llama al metodo open
           2= heders_received se llama a el metodo send 
           3= esta cargando,recibiendo la respuesta
           4= done se completa la  respuesta*/ 
           const data = JSON.parse(this.response);
           console.log(data);
          // const HTMLResponse = document.querySelector('#app')
           //const tpl =data.map(users)
   }
}

xhr.addEventListener("load",onRequestHandler);
xhr.open('GET', `${API_URL}/search?q=apollo%2011`);
xhr.send();