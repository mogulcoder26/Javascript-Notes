const open_btn=document.querySelector('#open-btn')
const maincontent=document.querySelector('#main-content');
const close_btn=document.querySelector('#close-btn');


open_btn.addEventListener('click',function(){

    maincontent.style.display='block';

});

close_btn.addEventListener('click',function(){

    maincontent.style.display='none';
})
