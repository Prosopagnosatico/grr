//crio uma variavel que vai guardar a imagem do mario
const mario = document.querySelector('.mario')

//guardando a imagem em uma variavel pipe
const pipe = document.querySelector('.pipe')

//armazenando as nuvens em uma variavel 
const cloud = document.querySelector('.clouds')

//crio uma funcao seta (arrow function)
const jump = () => {
    //aqui ele vai adicionar a classe jump do css na imagem do mario fazendo ele pular
    mario.classList.add('jump');
    setTimeout(() => {
        //removo a classe para poder colocar novamente ao clicar qualquer tecla
        mario.classList.remove('jump');
    }, 500);
};

//ao precionar a tecla, chamo a funcao seta jump
document.addEventListener('keydown', jump)

const loop = setInterval(()=>{
    const pipePosition  = pipe.offsetLeft


    console.log(pipePosition)
    if( pipePosition <= 120  ){
        pipe.style.animation = 'none'
    }     
}, 10)

