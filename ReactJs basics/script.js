// Creando un componente con Vanilla JavaScript sin React aun
window.addEventListener('load', ()=> {

    const $app = document.getElementById('app');

    // Creamos el componente avatar con Vanilla JavaScript
    const avatar = params => {
        const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`;
        
        // retornamos el renderizado del componente
        return `
        <picture>
        <img src="${src}">
        <em>${params.name}</em>
        </picture>
        `;
    }
    
    const names = ["Yolamda", "Anael", "Emely", "Mery"];
    
    // mandamos nuestro componente avatar al html
    for (let index = 0; index < names.length; index++) {
        $app.innerHTML += avatar({id : (index+1) , name : names[index]});
    }

    // Creando evento de click para las imagenes
    $app.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', () => {
            img.classList.toggle("disabled");
        });    
    });

    

});