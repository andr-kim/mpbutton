document.querySelectorAll('.tabs3-triggers__item').forEach((item) =>
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '');


		document.querySelectorAll('.tabs3-triggers__item').forEach(
			(child) => child.classList.remove('tabs3-triggers__item--active')
		);
		document.querySelectorAll('.tabs3-content-wrap').forEach(
			(child) => child.classList.remove('tabs3-content-wrap--active')
		);

		item.classList.add('tabs3-triggers__item--active');
		document.getElementById(id).classList.add('tabs3-content-wrap--active')
	})
);

document.querySelector('.tabs3-triggers__item').click();
document.querySelector('[href="#tab-401"]').classList.add('tabs3-triggers__item--active');


