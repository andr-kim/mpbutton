const tabsTitle = document.querySelectorAll('.benefits__tabs-triggers__item');
const tabsContent = document.querySelectorAll('.benefits__tabs-content-wrap');

tabsTitle.forEach(item => item.addEventListener('click', event => {

    const tabsTitleTarget = event.target.getAttribute('data-tab');

        tabsTitle.forEach(element => element.classList.remove('active-tab'));

        tabsContent.forEach(element => element.classList.add('hidden-tab-content'))

    item.classList.add('active-tab');

    document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content')
}));

document.querySelector('[data-tab="tab-04"]').classList.add('active-tab');
document.querySelector('#tab-04').classList.remove('hidden-tab-content');