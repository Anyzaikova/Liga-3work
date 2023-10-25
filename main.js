
const CLIENT_ID = "-Vvwxjymzmgve-bBPCMgFPFPCQfH8qmS4XDRFDvBT9A";
const container = document.querySelector(".container");
const  BTN=document.querySelector('.button__btn');


let state;
let currentImage;

const searchPhoto = async () => {
    try {
        const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=2`;
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            state = data;
            currentImage = data[0].id;
            setPhoto();
        }
    } catch (error) {
        console.log("Ошибка загрузки картинки");
    }
};

const showPhoto = () => {
    return  state.map(({ urls: { regular }}) => {
        return `<div class="image" style="background-image: url(${regular})"></div>`;
    })
        .join("");
};


const setPhoto = () => {
    container.innerHTML = showPhoto();
};

function changeColor () {
    setTimeout(()=>{
        document.body.style.backgroundColor='#66A3D2';
    },700);

}

BTN.addEventListener('click', async function () {

    await  searchPhoto();
    Promise.resolve().then(()=> {
        console.log("Первая микротаска выполнена");
    });


    Promise.resolve().then(function (){
        console.log("Вторая микротаска выполнена");
    });


    Promise.resolve().then(function (){
        console.log("Cейчас изменится цвет фона на синий");
    });
    changeColor();
});




