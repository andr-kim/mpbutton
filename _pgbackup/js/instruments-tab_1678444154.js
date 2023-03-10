const tabs= document.querySelectorAll('.instruments_tab-btn');
const all_content= document.querySelectorAll('.content');

tabs.forEach((tab,index)=>{
    tab.addEventListener('click', (e)=>{
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');


    all_content.forEach(content=>{content.classList.remove('active')});
    all_content[index].classList.add('active');
    })

    
})

const ttabs= document.querySelectorAll('.tariff_tab-btn');
const all_tcontent= document.querySelectorAll('.content');

ttabs.forEach((ttab,index)=>{
    ttab.addEventListener('click', (e)=>{
        ttabs.forEach(ttab=>{ttab.classList.remove('active')});
        ttab.classList.add('active');


    all_tcontent.forEach(content=>{content.classList.remove('active')});
    all_tcontent[index].classList.add('active');
    })

    
})