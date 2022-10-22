// Класс масок для полей ввода (в работе)

/*
data-mask ="значение,подзначение"
*/

export class InputMask {
	constructor(props, data = null) {
		let defaultConfig = {
			init: true,
			logging: true,
		}
		this.config = Object.assign(defaultConfig, props);

		this.masks = {
			phone: {
				ua: "+38(999)999-99-99"
			}
		}
		// Запуск инициализации
		if (this.config.init) {
			// Получение всех масок на странице
			const maskItems = data ? document.querySelectorAll(data) : document.querySelectorAll(`[data-mask]`);
			if (maskItems.length) {
				this.initMasks(maskItems);
				this.setLogging(`Проснулся, построил масок: (${maskItems.length})`);
				document.querySelector(`._mask-init`) ? this.setActions() : null;
			} else {
				this.setLogging('Нет ни одной маски. Сплю...zzZZZzZZz...');
			}
		}
	}
	setActions() {
		document.addEventListener("input", this.maskActions.bind(this));
		document.addEventListener("focusin", this.maskActions.bind(this));
		document.addEventListener("focusout", this.maskActions.bind(this));
		document.addEventListener("keydown", this.maskActions.bind(this));
	}
	initMasks(maskItems) {
		maskItems.forEach(maskItem => {
			this.initMask(maskItem);
		});
	}
	initMask(maskItem) {
		const maskValue = this.getMask(maskItem);
		maskValue ? this.setMask(maskItem, maskValue) : null;
	}
	getMask(maskItem) {
		const maskData = maskItem.dataset.mask ? maskItem.dataset.mask.split(',') : "";
		const maskName = maskData[0] ? maskData[0] : null;

		if (!maskName) {
			this.setLogging(`Маска для ${maskItem} не заполнена!`);
			return;
		}

		let maskValue = maskData[1] ? maskData[1] : null;

		if (maskName === "phone") {
			!maskValue ? maskValue = "ua" : null;
			this.masks[maskName][maskValue] ? maskValue = this.masks[maskName][maskValue] : null;
		}
		return maskValue;
	}
	setMask(maskItem, maskValue) {
		maskValue = maskValue.replace(/9/g, "_");
		maskItem.classList.add('_mask-init');
		//maskItem.value = maskValue;
	}
	maskActions(e) {
		const targetElement = e.target;
		if (targetElement.closest('._mask-init')) {
			const input = targetElement;
			let inputValue = input.value;
			const inputMask = this.getMask(input);
			console.log(input.selectionStart);

			/*
			взять новые символы
			заменить девятки на новые символы
			*/

			var matrix = inputMask,
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = inputValue.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a
				});

			console.log(matrix);
			console.log(def);
			console.log(val);
			console.log(new_value);

			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i)
			}
			var reg = matrix.substr(0, inputValue.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}"
				}).replace(/[+()]/g, "\\$&");


			reg = new RegExp("^" + reg + "$");
			input.value = new_value;

			/*
			if (!reg.test(inputValue) || inputValue.length < 5 || keyCode > 47 && keyCode < 58) {
				inputValue = new_value;
			}
			if (e.type === "blur" && inputValue.length < 5) {
				inputValue = "";
			}
			*/


			if (input.selectionStart > inputMask.length) {
				e.preventDefault();
				//inputValue = inputValue.slice(0, inputMask.length);

			}
		}
	}
	// Логгинг в консоль
	setLogging(message) {
		this.config.logging ? console.log(`[Elton Mask]: ${message}`) : null;
	}
}

/*
[].forEach.call(document.querySelectorAll('.tel'), function (input) {
	var keyCode;
	function mask(event) {
		event.keyCode && (keyCode = event.keyCode);
		var pos = this.selectionStart;
		if (pos < 3) event.preventDefault();
		var matrix = "+7 (___) ___ ____",
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, ""),
			new_value = matrix.replace(/[_\d]/g, function (a) {
				return i < val.length ? val.charAt(i++) || def.charAt(i) : a
			});
		i = new_value.indexOf("_");
		if (i != -1) {
			i < 5 && (i = 3);
			new_value = new_value.slice(0, i)
		}
		var reg = matrix.substr(0, this.value.length).replace(/_+/g,
			function (a) {
				return "\\d{1," + a.length + "}"
			}).replace(/[+()]/g, "\\$&");
		reg = new RegExp("^" + reg + "$");
		if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
		if (event.type == "blur" && this.value.length < 5) this.value = ""
	}

	input.addEventListener("input", mask, false);
	input.addEventListener("focus", mask, false);
	input.addEventListener("blur", mask, false);
	input.addEventListener("keydown", mask, false)
});
*/