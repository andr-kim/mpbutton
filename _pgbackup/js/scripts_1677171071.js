let titles = document.querySelectorAll('.title');
for(i = 0; i < titles.length; i++){
  titles[i].onclick = function(){
    this.classList.toggle('active');
    let box = this.nextElementSibling;
    if(box.style.maxHeight){
      box.style.maxHeight = null;
    } else {
      box.style.maxHeight = box.scrollHeight + 'px'
    }
    for(j = 0; j < titles.length; j++){
      if(titles[j] !== this ){
        titles[j].classList.remove('active');
        titles[j].nextElementSibling.style.maxHeight = null;
      }
    }
  }
}


document.querySelectorAll('.benefits__tabs-triggers__item').forEach((item) =>
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');


        document.querySelectorAll('.benefits__tabs-triggers__item').forEach(
            (child) => child.classList.remove('benefits__tabs-triggers__item--active')
        );
        document.querySelectorAll('.benefits__tabs-content-wrap').forEach(
            (child) => child.classList.remove('benefits__tabs-content-wrap--active')
        );

        item.classList.add('benefits__tabs-triggers__item--active');
        document.getElementById(id).classList.add('benefits__tabs-content-wrap--active')
    })
);

document.querySelector('.benefits__tabs-triggers__item').click();
document.querySelector('[benefits__tabs-triggers__item="#tab-01"]').classList.add(benefits__tabs-triggers__item--active);
document.querySelector('')



document.querySelectorAll('.instruments__tabs-triggers__item').forEach((item) =>
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');


        document.querySelectorAll('.instruments__tabs-triggers__item').forEach(
            (child) => child.classList.remove('instruments__tabs-triggers__item--active')
        );
        document.querySelectorAll('.instruments__tabs-content-wrap').forEach(
            (child) => child.classList.remove('instruments__tabs-content-wrap--active')
        );

        item.classList.add('instruments__tabs-triggers__item--active');
        document.getElementById(id).classList.add('instruments__tabs-content-wrap--active')
    })
);

document.querySelector('.instruments__tabs-triggers__item').click();



document.querySelectorAll('.i__tabs-triggers__item').forEach((item) =>
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');


        document.querySelectorAll('.i__tabs-triggers__item').forEach(
            (child) => child.classList.remove('i__tabs-triggers__item--active')
        );
        document.querySelectorAll('.i__tabs-content-wrap').forEach(
            (child) => child.classList.remove('i__tabs-content-wrap--active')
        );

        item.classList.add('i__tabs-triggers__item--active');
        document.getElementById(id).classList.add('i__tabs-content-wrap--active')
    })
);

document.querySelector('.i__tabs-triggers__item').click();