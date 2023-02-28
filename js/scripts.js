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
document.querySelector('[benefits__tabs-triggers__item="#tab-01"]').classList.add('benefits__tabs-triggers__item--active');



function _class(name){
    return document.getElementsByClassName(name);
}

let tabPanes = _class("tab-header")[0].getElementsByTagName("div");

for(let i=0;i<tabPanes.length;i++){
    tabPanes[i].addEventListener("click", function(){
        _class("tab-header")[0].getElementsByClassName("active")
[0].classList.remove("active");
    tabPanes[i].classList.add("active");

        _class("tab-content")[0].getElementsByClassName("active")
[0].classList.remove("active");
        _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
    
    });
}

