let darkmode = localStorage.getItem('darkmode');
const  botao_escuro = document.getElementById('ModoEscuro');

const enabledDarkmode = () =>{
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode= () =>{
document.body.classList.remove('darkmode');
localStorage.setItem('darkmode', null);
}

if(darkmode  === "active") enabledDarkmode()

botao_escuro.addEventListener('click',()=>{
    darkmode=localStorage.getItem('darkmode')
    darkmode !== 'active' ? enabledDarkmode() : disableDarkmode()
})