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


// Feedback form

document.getElementById('feedback-form').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "contacts.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("nameFF=" + f.nameFF.value + "&contactFF=" + f.contactFF.value + "&messageFF=" + f.messageFF.value);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText + ', Ваше сообщение получено.\nНаши специалисты ответят Вам в течении 2-х дней.\nБлагодарим за интерес к нашей фирме!');    
      f.messageFF.removeAttribute('value'); // очистить поле сообщения (две строки)
      f.messageFF.value='';
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
}, false);