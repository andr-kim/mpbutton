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