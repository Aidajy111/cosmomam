// Полученный массив для отборов
let goodsMstroke = document.querySelector('.senterBL6_Rightide_ForContent').innerHTML;
let goods = goodsMstroke.split('senterBL6_Rightide_ContentBL');
goods = goods.slice(1, goods.length);
document.querySelector('.senterBL6_Rightide_ForContent').innerHTML = '';
document.querySelector('.senterBL6_Rightide_ForPages').innerHTML = '';


// Количество элементов для отбора
let quantityforselection = 1;

// Главный DIV для результатов пагинации
let pagDiv = document.createElement("div");
pagDiv.setAttribute("class","senterBL6_Rightide_ForContent");
// Получаем элемент "ориентир"
let pagH1 = document.querySelector('.orient');
// Устанавливаем общий блок пагинации под заголовком h1
pagH1.after(pagDiv);


// Считает нужное количество кнопок пагинации
function numberofbuttons(arr,num){return Math.ceil(arr.length/num)}

// Отрисовывает кнопки пагинации
function paintPaginationButton (count){
	for(i=1, r=""; i<=count; i++){
		if (i == 1) {
			r += `<div class="senterBL6_Rightide_SamPage senterBL6_Rightide_SamPage_active">0${i}</div>`
		}else{r += `<div class="senterBL6_Rightide_SamPage">0${i}</div>`}
	}
	return r
}

// Отрисовывает результаты
function paintResult (arr){
	for(i=0, r=""; i<arr.length; i++){r += `<p class="result-item">${arr[i]}</p>`}
	return r
}

// Линия кнопок над результатами отбора
let bl1 = document.createElement("div");
bl1.setAttribute("class","senterBL6_Rightide_ForPages");
bl1.innerHTML = paintPaginationButton(numberofbuttons(goods,quantityforselection));

// Блок для отрисовки результатов
let result = document.createElement("div");
result.setAttribute("class","senterBL6_Rightide_ContentBL");

// Первичная отрисовка
result.innerHTML = paintResult(goods.slice(0, quantityforselection));

// Помещаем линии кнопок и результат
pagH1.after(bl1);
pagDiv.append(result);

// Вешаем обработчик для всех кнопок пагинации
document.addEventListener('click', function(event){
	if([...event.target.classList].includes("senterBL6_Rightide_SamPage")){
		let y = event.target.textContent;
		let start = quantityforselection*(y - 1);
		let end = quantityforselection*y;
		result.innerHTML = paintResult (goods.slice(start, end));
		for (let iInd = 0; iInd < goods.length; iInd++) {
			document.querySelectorAll('.senterBL6_Rightide_SamPage')[iInd].classList.remove('senterBL6_Rightide_SamPage_active');;
		}
		document.querySelectorAll('.senterBL6_Rightide_SamPage')[y-1].classList.add('senterBL6_Rightide_SamPage_active');
	}
});
