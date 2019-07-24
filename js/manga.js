/*Настройки Расписания анимешек*/
var oneOpen = false;

function closeAll() {
	var divs = document.querySelectorAll(".width-timetable-container .container-timetable-p");

	for(var i = 0; i < divs.lenth; i++) {
		divs[i].style.height = 0;
	}
}

function toggle(button) {
	var innerDiv = button.target.nextElementSibling;

	if(oneOpen) {
		closeAll();
	}

	if (innerDiv.style.height === "0px" || innerDiv.style.height === "" ){
		innerDiv.style.height = innerDiv.scrollHeight + "px";
		
		oneOpen = true;
	}
	else {
		innerDiv.style.height = 0;
	}
}

var buttons = document.querySelectorAll(".width-timetable-container .button-container-slide");

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', toggle);
	}



/*Карусель2*/
autoSlider();
var left = 0;
var timer;

function autoSlider () {
	timer = setTimeout(function () {
		var polosa = document.getElementById('polosa');
		left = left - 206;
		if (left < - 2266) {
			left = 0;
			clearTimeout(timer);
		}
		polosa.style.left = left +'px';
		autoSlider (); 	
	}, 60000);
}



/*Выдвижная менюшка для музыки*/
var oneOpen = false;

function closeAll() {
	var divs = document.querySelectorAll(".container-mp3 .container-rotate-mp3");

	for(var i = 0; i < divs.lenth; i++) {
		divs[i].style.height = 0;
	}
}

function toggle(button) {
	var innerDiv = button.target.nextElementSibling;

	if(oneOpen) {
		closeAll();
	}

	if (innerDiv.style.height === "0px" || innerDiv.style.height === "" ){
		innerDiv.style.height = innerDiv.scrollHeight + "px";
		
		oneOpen = true;
	}
	else {
		innerDiv.style.height = 0;
	}
}

var buttons = document.querySelectorAll(".container-mp3 .mp3-button");

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', toggle);
}



/*Кнопка "Наверх"*/
$(function() {
 
	$(window).scroll(function() {
 
		if($(this).scrollTop() != 0) {
 
			$('#toTop').fadeIn();

		} else {
 
		$('#toTop').fadeOut();
 
	}
 
});

$('#toTop').click(function() {
 
	$('body,html').animate({scrollTop:0},800);
 
	});
 
});

