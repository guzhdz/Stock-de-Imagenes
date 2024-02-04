const agregarImagenes = () => {
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < 20; i++) {
        contImg++;
        let imagen = document.createElement('IMG');
        imagen.src = `https://picsum.photos/300/180?random=${contImg}`;
        imagen.classList.add('image');
        fragment.appendChild(imagen);
    }

    imagesContainer.append(fragment);
    imagesContainer.classList.remove('dont-appear');
}

const imagesContainer = document.getElementById('images-container');
let contImg = 0;
agregarImagenes();


window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        agregarImagenes();
    }
};


const home = document.getElementById('home');
const api = document.getElementById('api');
const refresh = document.getElementById('refresh');

home.addEventListener('click', (event) => {
    window.location.href = "/index.html";
});

api.addEventListener('click', (event) => {
    window.location.href = "https://picsum.photos/";
});

refresh.addEventListener('click', (event) => {
    window.location.href = "/index.html";
});



