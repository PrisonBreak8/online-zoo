// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
//import { isMobile } from "./functions.js";
//import { formsModules } from "./forms/forms.js";

//const { log } = require("gulp-util");

//const { log } = require("gulp-util");

// https://barba.js.org/ ==============================================================================================================================================================================================================================================================================================================================
//barba.init({
//	transitions: [{
//		name: 'base',
//		async leave(data) {
//		},
//		async enter() {
//		}
//	}]
//});

//================ POPUP START ========================================================================================================================================
const popupLinks = document.querySelectorAll('.popup-link'); // получаем все обьекты с класом popup-link
const body = document.querySelector('body'); // получаем сам тег body для блокировки прокрутки скролла
const lockPadding = document.querySelectorAll('.lock-padding'); // получаю все обьекты с классом lock-padding 

let unlock = true;
const timeout = 400; // время анимации указываем такоеже как в css

// ------ Вешаю событие на ссылки popup-link
if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener('click', function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

// ------ Вешаю событие на иконку для закрытия popupa popup-close
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

// ------ Функцыя открытия попапа
function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener('click', function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyLock();
		}
	}
}

function bodyLock() {

	body.classList.toggle('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}
//================ POPUP END ========================================================================================================================================


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
let submit = document.querySelector(".form__button");
const input = document.querySelector('.input');
const inputAmount = document.querySelector('.js-input');

submit.addEventListener('click', onInput);
input.addEventListener('input', onInput);


function onInput() {
	if (input) {
		input.addEventListener("blur", function (e) {
			input.style.boxShadow = null
			input.style.color = '#929699';
			submit.style.color = null;
			submit.style.border = '1px solid #333B41'
		})
	}
	if (isEmailValid(input.value)) {
		input.style.outline = 'none';
		input.style.color = '#4B9200';
		input.style.boxShadow = '0px 0px 0px 2px #4B9200'
		submit.style.color = '#4B9200';
		submit.style.border = '1px solid #4B9200'
	} else {
		input.style.outline = 'none';
		input.style.color = '#D31414';
		input.style.boxShadow = '0px 0px 0px 2px #D31414'
		submit.style.color = '#D31414';
		submit.style.border = '1px solid #D31414'
	}
}

function isEmailValid(value) {
	return EMAIL_REGEXP.test(value);
}

if (inputAmount.value == '') {
	inputAmount.addEventListener("focus", function (e) {
		//elems.classList.remove('selected');
		inputAmount.style.outline = 'none';
		inputAmount.style.boxShadow = '0px 0px 0px 1px #D31414'
		inputAmount.style.color = '#D31414';
	});
}

if (inputAmount) {
	inputAmount.addEventListener("keypress", function (e) {
		inputAmount.style.outline = 'none';
		inputAmount.style.boxShadow = '0px 0px 0px 1px #4B9200'
		inputAmount.style.color = '#4B9200';
		//elems.classList.remove('selected');
	})

}
if (inputAmount) {
	inputAmount.addEventListener("blur", function (e) {
		inputAmount.style.boxShadow = null
		inputAmount.style.color = '#929699';

	})
}

//=======================================================
const list = document.querySelectorAll('.donate-section__dot')
//console.log(list);

list.forEach(item => {
	item.addEventListener('click', (e) => {
		list.forEach(el => { el.classList.remove('selected'); });
		item.classList.add('selected')
		//console.log(item.childNodes);
		let num = item.childNodes[1].childNodes[1].innerHTML;
		//console.log(num);
		document.getElementById('amo').value = num;
	})
})

///=============проверка введенного числа===============
let elem = document.getElementById('amo');
if (elem) {
	const num5000 = document.getElementById('num5000');
	const num2000 = document.getElementById('num2000');
	const num1000 = document.getElementById('num1000');
	const num500 = document.getElementById('num500');
	const num250 = document.getElementById('num250');
	const num100 = document.getElementById('num100');
	const num50 = document.getElementById('num50');
	const num25 = document.getElementById('num25');
	elem.addEventListener('input', () => {
		list.forEach(el => { el.classList.remove('selected'); });
		const presetAmmounts = [];
		document.querySelectorAll('.donate-section__dot-num').forEach(item => presetAmmounts.push(item.innerHTML));
		//console.log(presetAmmounts);
		let index = presetAmmounts.indexOf(elem.value)
		//console.log(index);
		if (index == 0) {
			num5000.classList.add('selected');
		}
		if (index == 1) {
			num2000.classList.add('selected');
		}
		if (index == 2) {
			num1000.classList.add('selected');
		}
		if (index == 3) {
			num500.classList.add('selected');
		}
		if (index == 4) {
			num250.classList.add('selected');
		}
		if (index == 5) {
			num100.classList.add('selected');
		}
		if (index == 6) {
			num50.classList.add('selected');
		}
		if (index == 7) {
			num25.classList.add('selected');
		}
	})
}


//================== MENULINK ======================================================================================================================================
let menuLinks = document.querySelectorAll('.menu__link ')

menuLinks.forEach(elm => {
	elm.addEventListener('click', () => {
		menuLinks.forEach(elm => {
			elm.classList.remove('js-active')
		})
		elm.classList.add('js-active')
	})
})
//================ MAP ========================================================================================================================================
google.charts.load('current', {
	'packages': ['geochart'],
	//'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY',
});

google.charts.setOnLoadCallback(drawRegionsMap);
async function drawRegionsMap() {
	var data = google.visualization.arrayToDataTable([
		['Country', 'Population'],
		['United States', 2761477],
		['China', 2761477],
		['CG', 2761477],
		//['Germany', 200],
		//['Congo', 400],
		//['Canada', 500],
		//['France', 600],
		//['RU', 700]
	]);
	var options = {
		region: ['030', '019', '002'], // Congo 242
		colorAxis: { colors: ['#FFEE2E'] },
		backgroundColor: '#EAF7FEFF',
		datalessRegionColor: '#C3B89E',
		defaultColor: 'red',
	};

	//google.charts.setOnLoadCallback(drawMarkersMap);
	//async function drawMarkersMap() {
	//	var data = google.visualization.arrayToDataTable([
	//		['City', 'Population', 'Area'],

	//	]);

	var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

	chart.draw(data, options);
};


//============ YOU TUBE VIDEO ============================================================================================================================================

// https://img.youtube.com/vi/sGF6bOi1NfA/maxresdefault.jpg ссылка на картинку ютюб видео

window.addEventListener('DOMContentLoaded', function () {

	let video = document.querySelector('.video');
	if (video) {
		video.addEventListener('click', function () {
			if (video.classList.contains('ready')) {
				return
			}
			video.classList.add('ready');

			let src = video.dataset.src;

			video.insertAdjacentHTML('afterbegin', '<iframe src="' + src + '" title="YouTube video player" frameborder="0"	allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe >');

		});
	}
});


//window.addEventListener('DOMContentLoaded', function () {
//	let videoSlide = document.querySelector('.video-slide');
//	videoSlide.addEventListener('click', function () {
//		if (videoSlide.classList.contains('ready')) {
//			return
//		}
//		videoSlide.classList.add('ready');

//		let src = videoSlide.dataset.src;

//		videoSlide.insertAdjacentHTML('afterbegin', '<iframe src="' + src + '" title="YouTube video player" frameborder="0"	allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe >');

//	});
//});






//============ ACTIVE LINKS ============================================================================================================================================
const navLink = document.querySelectorAll('.animals-link__link');

function linkColor() {
	navLink.forEach(link => link.classList.remove('active-link'));
	this.classList.add('active-link')
}

navLink.forEach(link => link.addEventListener('click', linkColor))



















//const tooltip = document.querySelector('.tooltip');
//const continents = document.querySelectorAll('.continent');
//const popupBg = document.querySelector('.info__bg');
//const popupMap = document.querySelector('.info');

//continents.forEach(continent => {
//	continent.addEventListener('click', function () {
//		//popupMap.querySelector('.info__foto').setAttribute('src', this.dataset.foto);
//		popupMap.querySelector('.info__animal').innerText = this.dataset.animal;
//		popupMap.querySelector('.info__country').innerText = this.dataset.country;
//		popupMap.querySelector('.info__watch').innerText = this.dataset.watch;
//		popupBg.classList.add('popup-active');
//	})

//	continent.addEventListener('mousemove', function (e) {
//		tooltip.innerText = this.dataset.title;
//		tooltip.style.top = (e.y - 20) + 'px';
//		tooltip.style.left = (e.x + 25) + 'px';
//	});
//	continent.addEventListener('mouseenter', function () {
//		tooltip.style.display = 'block';
//	});
//	continent.addEventListener('mouseleave', function () {
//		tooltip.style.display = 'none';
//	});
//});

//document.addEventListener('click', (e) => {
//	if (e.target === popupBg) {
//		popupBg.classList.remove('popup-active');
//	}
//});

	//< div class="tooltip" ></ >

	//	<div class="info__bg">
	//		<div class="info">
	//			<img class="info__foto" src="" alt="panda">
	//				<p class="info__animal"></p>
	//				<p class="info__country"></p>
	//				<div class="info__link">
	//					<a class="info__watch" href="#"></a>
	//				</div>
	//		</div>
	//	</div>

//========================================================================================================================================================






















/*
///============================рандом по выводу карточки--------------
let pets = document.querySelector('.pets__slider');

if (pets) {
	//console.log(containerParent);
	let containerParent = document.getElementById('pets__body');
	let containerParent2 = document.getElementById('pets__body2');


	////-------создали массив с детьми, которые необходимы для первой страницы---8 шт----
	let parent = document.querySelector(".item");
	console.log(parent);

	let parentArrDn = parent.parentElement.children;
	console.log(parentArrDn);
	////-------создали массив с детьми, которые необходимы для второй страницы---8 шт----
	let parentArrDn2 = document.querySelector(".items").parentElement.children;
	//console.log(parentArrDn2);

	////-------запускаем рандомную функцию-----получаем нужное число DIV---6штук
	///---для первой страницы
	let mixArrCard = Array.from(parentArrDn).sort(() => Math.random() - Math.random()).slice(0, 6);
	console.log(mixArrCard);
	//---для второй страницы
	let mixArr = Array.from(parentArrDn2).sort(() => Math.random() - Math.random()).slice(0, 6);
	//console.log(mixArr);
	/////------------------------------делаем микс титульной страницы при старте-------------
	function mix() {
		if (parent) {
			let mixArr1 = mixArrCard;
			for (let i = 0; i < 6; i++) {
				//---для первой страницы
				let elemArrMix = mixArr1.pop()
				containerParent.replaceChild(elemArrMix, containerParent.children[i]);

			}
		}
	}
	mix();
	////----------------test--------------



	//document.querySelector('.swiper-button-next').addEventListener('click', function () {
	//	var count = 0;
	//	if (count == 0) { mix(); count++ } else
	//		if (count == 1) { mix2(); count = 0 }
	//})




	//document.querySelector('.swiper-button-prev').addEventListener('click', function () {
	//	var count = 0;
	//	if (count == 0) { mix2(); count++ } else
	//		if (count == 1) { mix(); count = 0 }
	//})


	//function mix2() {
	//	//let mixArr = Array.from(parentArrDn2).sort(() => Math.random() - Math.random()).slice(0, 6);
	//	let mixArr2 = mixArr;

	//	if (window.matchMedia('(max-width: 767px)').matches) {
	//		for (let i = 0; i < 4; i++) {
	//			//---для второй страницы
	//			let elemArr = mixArr2.pop();
	//			containerParent2.replaceChild(elemArr, containerParent2.children[i]);
	//			containerParent2.removeChild(containerParent2.children[4]);

	//		}
	//	} else {
	//		for (let i = 0; i < 6; i++) {
	//			//---для второй страницы
	//			let elemArr = mixArr2.pop();
	//			containerParent2.replaceChild(elemArr, containerParent2.children[i]);
	//		}
	//	}
	//}

	//mix2();

}
*/
















/*
console.log(
	//========================================================================================================================================================
	"OlineZ00-Week-One ОЦЕНКА 100 (Если есть вопросы по работе пишите в дискорд 'Artur(@PrisonBreak8)') \n",
	//========================================================================================================================================================
	" СЛАЙДЕРЫ ВСЕ РАБОТАЮТ \n",
	//========================================================================================================================================================
	"OlineZ00-Week-One  + 100 \n",
	//========================================================================================================================================================


	//========================================================================================================================================================
	"Блок Header: +20. \n",
	"логотип: +5.\n",
	" About блок есть и он интерактивен +2\n",
	" Map  блок есть и он интерактивен  +2\n",
	" Zoos элемент блок есть и он интерактивен ) +2 \n",
	" Donate блок есть и он интерактивен ) +2 \n",
	"Contact блок есть и он интерактивен  +2 \n",
	"Designed блок есть и он интерактивен  +2 \n",
	"<h1> = 5 +5\n",



	//========================================================================================================================================================
	"Блок Watch your favorite animal online: +10. \n",
	"Ecnmь кнопки Watch online. b интерактивная: +5. \n",
	"Есть фоновая картинка: +5. \n",



	//========================================================================================================================================================
	"Блок Pets: +30. \n",
	"кнопки вправобкнопки влево:  +5\n",
	"карточки животного:  интерактивная, и есть анимации текста на затемненном фоне    +5 \n",
	"кнопкa Choose your favorite     +5 \n",
	"картинки растения слева     +5 \n",
	"картинки растения справа     +5 \n",


	//========================================================================================================================================================
	"Блок Pick and feed a friend: +10. \n",
	"кнопкa Feed a friend now, интерактивная     5+ \n",
	"Текст Emergency support Fund  является ссылкой, и  работает как ссылка на donate:     2+ \n",


	//========================================================================================================================================================
	"Блок  блока Testimonials: +10. \n",
	"кнопкa Leave feedback, интерактивная     +5 \n",
	"картинки растения справа     +5 \n",


	//========================================================================================================================================================
	"Блок  Footer: +20. \n",
	"логотип, работает как ссылка на petstory (Landing)    +5.\n",
	"кнопки Donate for volunteers,интерактивная, работает как ссылка на donate:     +5.\n",
	"иконки соцсетей:    5+ \n",
	"Все иконки соцсетей  интерактивные     +2 \n",
	" поле <input> указан тип email     +5 \n",
	"кнопки Submit: интерактивная:      +5 \n",


	" About блок есть и он интерактивен +2\n",
	" Map  блок есть и он интерактивен  +2\n",
	" Zoos элемент блок есть и он интерактивен ) +2 \n",
	"Contact блок есть и он интерактивен  +2 \n",
	"Designed блок есть и он интерактивен  +2 \n",


	//========================================================================================================================================================
	"Создана страница donate: : +30. \n",

	"Блок Header: +20. \n",
	"логотип, работает как ссылка на petstory (Landing): +5.\n",
	"панели навигации, интерактивная    +5 \n",
	"элемента About, работает как ссылка на petstory (Landing):      +2 \n",
	"тэлемента Map, интерактивный:     +2 \n",
	"тэлемента Zoos, интерактивный:     +2 \n",
	"элемента Zoos, интерактивный:     +2 \n",
	"элемента Donate, или он не подсвечен: -2.     + \n",
	"элемента Contact Us, интерактивный:     +2 \n",
	"элемента Designed by ©,  работает как ссылка на оригинальную страницу Figma:     +2 \n",
	"<h1> = 5 +5\n",


	//========================================================================================================================================================
	"Блок Pick and feed a friend: +30. \n",

	"Зона в радиусе 20px хотя бы от одной желтой точки не интерактивная: -5 за весь блок     + \n",
	"<input> Another amount,  указан тип number     +5 \n",
	"поля <input> Monthly, указан тип radio     +5 \n",
	"поля <input> Once, указан тип radio     +5 \n",
	"Есть поля Monthly и Once,  они  взаимоисключающие: .     +5 \n",
	" кнопки Feed a friend now: Кнопка есть,  она  интерактивная     +2 \n",


	//========================================================================================================================================================
	"Блок  Footer: +20. \n",
	"логотип, работает как ссылка на petstory (Landing)    +5.\n",
	"кнопки Donate for volunteers,интерактивная, работает как ссылка на donate:     +5.\n",
	"иконки соцсетей:    +5 \n",
	"Все иконки соцсетей  интерактивные     +2 \n",
	" поле <input> указан тип email     +5 \n",
	"кнопки Submit: интерактивная:      +5 \n",


	" About блок есть и он интерактивен +2\n",
	" Map  блок есть и он интерактивен  +2\n",
	" Zoos элемент блок есть и он интерактивен ) +2 \n",
	"Contact блок есть и он интерактивен  +2 \n",
	"Designed блок есть и он интерактивен  +2 \n",











	"Pets Нет кнопки Choose your favorite: -5. Кнопка есть, но не интерактивная, или не работает как ссылка на Map: -2.\n",




	//"Есть поля Monthly и Once, но они не взаимоисключающие: -5.??????????????? \n",

);*/



//const Slider = {
//	init() {
//		document.querySelector('.swiper-button-next').addEventListener('click', () => this.changeSlides(-1));
//		document.querySelector('.swiper-button-prev').addEventListener('click', () => this.changeSlides(1));
//	},
//	changeSlides(direction) {
//		const massiveCard = [];
//		const slides = document.querySelectorAll('.pets__card');
//		for (const slide of slides) {
//			massiveCard.push(slide.cloneNode(true));
//		}
//		const miksSlide = massiveCard.map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);

//		const currentContainer = document.querySelector('.pets__body');
//		currentContainer.innerHTML = '';
//		currentContainer.append(...miksSlide)

//	}
//}
//document.addEventListener('DOMContentLoaded', () => Slider.init())