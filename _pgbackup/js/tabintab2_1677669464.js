document.querySelectorAll('.tabs1-triggers__item').forEach((item) =>
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '');


		document.querySelectorAll('.tabs1-triggers__item').forEach(
			(child) => child.classList.remove('tabs1-triggers__item--active')
		);
		document.querySelectorAll('.tabs1-content-wrap').forEach(
			(child) => child.classList.remove('tabs1-content-wrap--active')
		);

		item.classList.add('tabs1-triggers__item--active');
		document.getElementById(id).classList.add('tabs1-content-wrap--active')
	})
);

document.querySelector('.tabs1-triggers__item').click();
document.querySelector('[tabs1-triggers__item="#tab-301"]').classList.add('tabs1-triggers__item--active');


