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

document.querySelectorAll('.instruments__tabs-triggers__item').forEach((item) =>
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '');


		document.querySelectorAll('.instruments__tabs-triggers__item').forEach(
			(child) => child.classList.remove('instruments__tabs-triggers__item--acrive')
		);
		document.querySelectorAll('.instruments__tabs-content__triggers').forEach(
			(child) => child.classList.remove('instruments__tabs-content__triggers--active')
		);

		item.classList.add('instruments__tabs-triggers__item--active');
		document.getElementById(id).classList.add('instruments__tabs-content__triggers--active')
	})
);

document.querySelector('.instruments__tabs-triggers__item').click();