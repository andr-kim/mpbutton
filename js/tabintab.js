document.querySelectorAll('.tabs-triggers__item').forEach((item) =>
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '');

		document.querySelectorAll('.tabs-triggers__item').forEach(
			(child) => child.classList.remove('tabs-triggers__item--active')
		);
		document.querySelectorAll('.tabs-content-wrap').forEach(
			(child) => child.classList.remove('tabs-content-wrap--active')
		);

		item.classList.add('tabs-triggers__item--active');
		document.getElementById(id).classList.add('tabs-content-wrap--active')
	})
);

document.querySelector('.tabs-triggers__item').click();
document.querySelector('[href="#tab-201"]').classList.add('tabs-triggers__item--active');


