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


/*Аниме сезон анимация1*/
/*1*/
$(document).ready(function(){
	$(".btn-slide1").click(function(){
		$("#panel1").slideToggle("slow");
		$(this).toggleClass("active"); return false;
	});
});

/*2*/
var readMore1Button = document.getElementById("readMore1");
readMore1Button.addEventListener("click", function() {
	var panel1 = document.getElementById("panel1");
	if(panel1.style.display == "block") {
		readMore1Button.innerHTML = "Показать больше";
	}else {
		readMore1Button.innerHTML = "Скрыть";
	}
})

/*Аниме сезон анимация2*/
/*1*/
$(document).ready(function(){
	$(".btn-slide2").click(function(){
		$("#panel2").slideToggle("slow");
		$(this).toggleClass("active"); return false;
	});
});

/*2*/
var readMore2Button = document.getElementById("readMore2");
readMore2Button.addEventListener("click", function() {
	var panel2 = document.getElementById("panel2");
	if(panel2.style.display == "block") {
		readMore2Button.innerHTML = "Показать больше";
	}else {
		readMore2Button.innerHTML = "Скрыть";
	}
}) 


/*Аниме сезон анимация3*/
/*1*/
$(document).ready(function(){
	$(".btn-slide3").click(function(){
		$("#panel3").slideToggle("slow");
		$(this).toggleClass("active"); return false;
	});
});

/*2*/
var readMore3Button = document.getElementById("readMore3");
readMore3Button.addEventListener("click", function() {
	var panel3 = document.getElementById("panel3");
	if(panel3.style.display == "block") {
		readMore3Button.innerHTML = "Показать больше";
	}else {
		readMore3Button.innerHTML = "Скрыть";
	}
}) 

/*Аниме сезон анимация4*/
/*1*/
$(document).ready(function(){
	$(".btn-slide4").click(function(){
		$("#panel4").slideToggle("slow");
		$(this).toggleClass("active"); return false;
	});

});

/*2*/
var readMore4Button = document.getElementById("readMore4");
readMore4Button.addEventListener("click", function() {
	var panel4 = document.getElementById("panel4");
	if(panel4.style.display == "block") {
		readMore4Button.innerHTML = "Показать больше";
	}else {
		readMore4Button.innerHTML = "Скрыть";
	}
})  