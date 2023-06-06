var p1 = document.getElementById('page1');
var p2 = document.getElementById('page2');
p2.style.display = 'none';
var btn_exec = document.getElementById('btnExecutar');
btn_exec.addEventListener('click', gerar);
var btn_limp = document.getElementById('btnLimpar');
btn_limp.addEventListener('click',limpar)
var mudar = document.getElementsByClassName('switch');


function gerar() {
    p1.style.display = 'none';
    p2.style.display = 'block';

    tHtml = document.getElementById('codeHtml').value;
    tJs = document.getElementById('codeJs').value;

    p2.innerHTML = tHtml 
    document.getElementById('jsUser').innerHTML = tJs;

    var btn_exec = document.getElementById('btnExecutar');
    btn_exec.addEventListener('click', voltar);
    btn_exec.removeEventListener('click',gerar);
    document.getElementById('btnExecutar').value = 'Voltar';
    
}

function voltar() {
    mp1 = document.getElementById('page1').style.display = 'block';
    mp2 = document.getElementById('page2').style.display = 'none';
    var btn_exec = document.getElementById('btnExecutar');
    btn_exec.addEventListener('click', gerar);
    btn_exec.removeEventListener('click',voltar);
    document.getElementById('btnExecutar').value = 'Gerar';
    location.reload(false);
}

function limpar(){
    document.getElementById('codeHtml').value ='';
    document.getElementById('codeJs').value = '';
    document.getElementById('jsUser').innerHTML = '';
}


const html = document.querySelector("html");
const body = document.querySelector("body");

   
var muda = 0;
var mudar = document.querySelector('.switch');
mudar.addEventListener('click',function(){
    muda=document.querySelector('#claro')
    if(muda.checked){
        html.classList.toggle("white-mode");
        body.classList.toggle("white-mode");    
        }
})
