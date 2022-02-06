window.onload = opens;
function opens(){
	var bpr = document.getElementById('forms');
	bpr.hidden = true;
}
function openform(){
	var bpr = document.getElementById('forms');
	bpr.hidden = false;
	opf.parentNode.removeChild(opf)
}
function one()
{
	var kp1 = document.getElementById('kp1');
	document.location.href = "описание/one.html";
}
function two()
{
	var kp1 = document.getElementById('kp2');
	document.location.href = "история/two.html";
}
function three()
{
	var kp1 = document.getElementById('kp3');
	document.location.href = "отрасли/three.html";
}
function four()
{
	var kp1 = document.getElementById('kp4');
	document.location.href = "справочник/karta.html";
}
function five()
{
	var kp1 = document.getElementById('kp5');
	document.location.href = "паспорт/five.html";
}
function six()
{
	var kp1 = document.getElementById('kp6');
	document.location.href = "игра/six.html";
}
function seven()
{
	var kp1 = document.getElementById('kp7');
	document.location.href = "кроссворд/seven.html";
}
function dom()
{
	document.location.href = "../index.html";
}
function kpi1()
{
document.write
	('<br><br><p>Верно ли утверждение? <br><br>«Оператор станка может ремонтировать станок самостоятельно в случае его неисправности.»</p><br> <input type="button" id="tr" class="" value="Узнать ответ" onclick="kpi_1()"> <style>body{font-size: 50px; outline: none; text-align: center;} input{background: #F4A460; border-radius: 10px;border: 1px solid #CD853F;padding: 1.5em 5em;color: white;}</style>');
}
function kpi_1()
{
	tr.parentNode.removeChild(tr)
	document.write
	('<p>Ответ: Нет</p><br> <input type="button" class="kpi_1" value="Вернуться" onclick="kpi_nazad()"> <style>body{font-size: 50px; outline: none; text-align: center;}</style>');
}
function kpi_nazad()
{
	document.location.href = "six.html";
}
function kir()
{
	document.location.href = "kirzavod.html";
}
function spbzavod()
{
	document.location.href = "spbzavod.html";
}
function pkf()
{
	document.location.href = "pkf.html";
}
function silmah()
{
	document.location.href = "silmah.html";
}
function lenmz()
{
	document.location.href = "lenmz.html";
}
function els()
{
	document.location.href = "els.html";
}
function ztl()
{
	document.location.href = "ztl.html";
}
function igz()
{
	document.location.href = "igz.html";
}
function nevz()
{
	document.location.href = "nevz.html";
}
function lenelzav()
{
	document.location.href = "lenelzav.html";
}
function znaz()
{
	document.location.href = "four.html";
}
function karta()
{
	document.location.href = "karta.html";
}
function kpi2()
{
document.write
	('<br><br><p>Разрешается ли работать в рукавицах на токарном, фрезерном станках?</p><br> <input type="button" id="tr" class="" value="Узнать ответ" onclick="kpi_2()"> <style>body{font-size: 50px; outline: none; text-align: center;} input{background: #F4A460; border-radius: 10px;border: 1px solid #CD853F;padding: 1.5em 5em;color: white;}</style>');
}
function kpi_2()
{
	tr.parentNode.removeChild(tr)
	document.write
	('<p>Ответ: Нет</p><br><input type="button" class="kpi_2" value="Вернуться" onclick="kpi_nazad()"> <style>body{font-size: 50px; outline: none; text-align: center;}</style>');
}

function kpi3()
{
document.write
	('<br><p>Что из перечисленного является основным вредным производственным факторам при обработке материалов на металлорежущих станках?</p><br><ol><li>Утразвук</li> <li>Пыль обрабатываемого материала</li> <li>Инфракрасное излучение</li></ol<br><br><br><br><br> <div class="kpid"><input type="button" id="tr" class="" value="Узнать ответ" onclick="kpi_3()"></div> <style>.kpid{text-align: center;}p{font-size: 50px; outline: none; text-align: center;} li{font-size: 50px;} input{background: #F4A460; border-radius: 10px;border: 1px solid #CD853F;padding: 1.5em 5em;color: white;}</style>');
}
function kpi_3()
{
	tr.parentNode.removeChild(tr)
	document.write
	('<p>Ответ: B. Пыль обрабатываемого материала</p><br> <div class="kpid"><input type="button" class="kpi_3" value="Вернуться" onclick="kpi_nazad()"></div> <style>.kpid{text-align: center;}p{font-size: 50px; outline: none; text-align: center;}</style>');
}

function kpi4()
{
document.write
	('<br><br><p>Какое напряжение электрической сети допускается для питания светильников местного освещения токарных, фрезерных станков?</p><br> <input type="button" id="tr" class="" value="Узнать ответ" onclick="kpi_4()"> <style>body{font-size: 50px; outline: none; text-align: center;} input{background: #F4A460; border-radius: 10px;border: 1px solid #CD853F;padding: 1.5em 5em;color: white;}</style>');
}
function kpi_4()
{
	tr.parentNode.removeChild(tr)
	document.write
	('<p>Ответ: Не более 42 B</p><br><input type="button" class="kpi_4" value="Вернуться" onclick="kpi_nazad()"> <style>body{font-size: 50px; outline: none; text-align: center;}</style>');
}

function kpi5()
{
document.write
	('<br><br><p>К какой группе относились самые первые в истории станки?</p><br> <input type="button" id="tr" class="" value="Узнать ответ" onclick="kpi_5()"> <style>body{font-size: 50px; outline: none; text-align: center;} input{background: #F4A460; border-radius: 10px;border: 1px solid #CD853F;padding: 1.5em 5em;color: white;}</style>');
}
function kpi_5()
{
	tr.parentNode.removeChild(tr)
	document.write
	('<p>Ответ: Токарные <br><img src="../images/tokar.jpg" width="600px"/></p><input type="button" class="kpi_5" value="Вернуться" onclick="kpi_nazad()"> <style>body{font-size: 50px; outline: none; text-align: center;}</style>');
}
function kpi6()
{
document.write
	('<br><br><p>Назовите фамилию русского учёного, который разработал первый в мире токарно-винторезный станок с механизированным суппортом и набором сменных зубчатых колёс.</p><br> <input type="button" id="tr" class="" value="Узнать ответ" onclick="kpi_6()"> <style>body{font-size: 50px; outline: none; text-align: center;} input{background: #F4A460; border-radius: 10px;border: 1px solid #CD853F;padding: 1.5em 5em;color: white;}</style>');
}
function kpi_6()
{
	tr.parentNode.removeChild(tr)
	document.write
	('<p>Ответ: Нартов <br><img src="../images/nartov.jpg" width="200px"/></p><input type="button" class="kpi_6" value="Вернуться" onclick="kpi_nazad()"> <style>body{font-size: 50px; outline: none; text-align: center;}</style>');
}
function kpi7()
{
document.write
	('<br><br><p>Назовите полное имя французского изобретателя XVIII века, который сконструировал первый в мире полностью металлический токарный станок универсального типа.</p><br> <input type="button" id="tr" class="" value="Узнать ответ" onclick="kpi_7()"> <style>body{font-size: 50px; outline: none; text-align: center;} input{background: #F4A460; border-radius: 10px;border: 1px solid #CD853F;padding: 1.5em 5em;color: white;}</style>');
}
function kpi_7()
{
	tr.parentNode.removeChild(tr)
	document.write
	('<p>Ответ: Жак де Вокансон <br><img src="../images/voksan.png" width="200px"/></p><input type="button" class="kpi_7" value="Вернуться" onclick="kpi_nazad()"> <style>body{font-size: 50px; outline: none; text-align: center;}</style>');
}
function kpi8()
{
document.write
	('<br><br><p>Станок какого типа в XIX веке одним из первых сконструировал американский инженер Эли Уитни?</p><br> <input type="button" id="tr" class="" value="Узнать ответ" onclick="kpi_8()"> <style>body{font-size: 50px; outline: none; text-align: center;} input{background: #F4A460; border-radius: 10px;border: 1px solid #CD853F;padding: 1.5em 5em;color: white;}</style>');
}
function kpi_8()
{
	tr.parentNode.removeChild(tr)
	document.write
	('<p>Ответ: Фрезерный <br><img src="../images/frez.png" width="300px"/></p><input type="button" class="kpi_8" value="Вернуться" onclick="kpi_nazad()"> <style>body{font-size: 50px; outline: none; text-align: center;}</style>');
}
function kpi9()
{
document.write
	('<br><br><p>На сколько типов металлорежущие станки классифицируют по степени автоматизации?</p><br> <input type="button" id="tr" class="" value="Узнать ответ" onclick="kpi_9()"> <style>body{font-size: 50px; outline: none; text-align: center;} input{background: #F4A460; border-radius: 10px;border: 1px solid #CD853F;padding: 1.5em 5em;color: white;}</style>');
}
function kpi_9()
{
	tr.parentNode.removeChild(tr)
	document.write
	('<p>Ответ: 5</p><br><input type="button" class="kpi_9" value="Вернуться" onclick="kpi_nazad()"> <style>body{font-size: 50px; outline: none; text-align: center;}</style>');
}
function kpi10()
{
document.write
	('<br><p>Из перечисленного, какого типа станков не существует?</p><br><ol><li>Револьверные</li> <li>Пистолетные</li> <li>Заточные</li><li>Карусельные</li></ol<br><br><br><br><br> <div class="kpid"><input type="button" id="tr" class="" value="Узнать ответ" onclick="kpi_10()"></div> <style>.kpid{text-align: center;}p{font-size: 50px; outline: none; text-align: center;} li{font-size: 50px;} input{background: #F4A460; border-radius: 10px;border: 1px solid #CD853F;padding: 1.5em 5em;color: white;}</style>');
}
function kpi_10()
{
	tr.parentNode.removeChild(tr)
	document.write
	('<p>Ответ: B. Пистолетные</p><br> <div class="kpid"><input type="button" class="kpi_10" value="Вернуться" onclick="kpi_nazad()"></div> <style>.kpid{text-align: center;}p{font-size: 50px; outline: none; text-align: center;}</style>');
}

function kpi11()
{
document.write
	('<br><br><p>Назовите тип станка, изображённого на картинке.</p><br><img src="../images/vert-frez.png" width="400px"/><br><br><br> <input type="button" id="tr" class="" value="Узнать ответ" onclick="kpi_11()"> <style>body{font-size: 50px; outline: none; text-align: center;} input{background: #F4A460; border-radius: 10px;border: 1px solid #CD853F;padding: 1.5em 5em;color: white;}</style>');
}
function kpi_11()
{
	tr.parentNode.removeChild(tr)
	document.write
	('<p>Ответ: Вертикально-фрезерный</p><br><input type="button" class="kpi_11" value="Вернуться" onclick="kpi_nazad()"> <style>body{font-size: 50px; outline: none; text-align: center;}</style>');
}
function kpi12()
{
document.write
	('<br><br><p>О каком типе станков идёт речь?<br>«Данный станок применяется для обработки штучных заготовок или деталей из калиброванного прутка. На нём производятся следующие виды токарной обработки: обточка, расточка, подрезка, проточка и расточка канавок, сверление, зенкерование, развертывание, фасонное точение, обработка резьб метчиками, плашками и резцами. Название станка происходит от способа закрепления режущих инструментов в барабане.»</p><br> <input type="button" id="tr" class="" value="Узнать ответ" onclick="kpi_12()"> <style>body{font-size: 50px; outline: none; text-align: center;} input{background: #F4A460; border-radius: 10px;border: 1px solid #CD853F;padding: 1.5em 5em;color: white;}</style>');
}
function kpi_12()
{
	tr.parentNode.removeChild(tr)
	document.write
	('<p>Ответ: Токарно-револьверный станок<br><img src="../images/tok-rev.png" width="300px"/></p><input type="button" class="kpi_12" value="Вернуться" onclick="kpi_nazad()"> <style>body{font-size: 50px; outline: none; text-align: center;}</style>');
}
function kpi13()
{
document.write
	('<br><br><p>Верно ли утверждение?<br>«Станина служит для измерения величины подачи суппорта, а также изменяет скорость вращения ходового винта и ходового валика.»</p><br> <input type="button" id="tr" class="" value="Узнать ответ" onclick="kpi_13()"> <style>body{font-size: 50px; outline: none; text-align: center;} input{background: #F4A460; border-radius: 10px;border: 1px solid #CD853F;padding: 1.5em 5em;color: white;}</style>');
}
function kpi_13()
{
	tr.parentNode.removeChild(tr)
	document.write
	('<p>Ответ: Нет</p><br><input type="button" class="kpi_13" value="Вернуться" onclick="kpi_nazad()"> <style>body{font-size: 50px; outline: none; text-align: center;}</style>');
}
function kpi14()
{
document.write
	('<br><br><p>Как называется разновидность вала, служащая для закрепления и вращения режущего инструмента или приспособления, несущего заготовку?</p><br> <input type="button" id="tr" class="" value="Узнать ответ" onclick="kpi_14()"> <style>body{font-size: 50px; outline: none; text-align: center;} input{background: #F4A460; border-radius: 10px;border: 1px solid #CD853F;padding: 1.5em 5em;color: white;}</style>');
}
function kpi_14()
{
	tr.parentNode.removeChild(tr)
	document.write
	('<p>Ответ: Шпиндель<br><img src="../images/hpindel.png" width="300px"/></p><input type="button" class="kpi_14" value="Вернуться" onclick="kpi_nazad()"> <style>body{font-size: 50px; outline: none; text-align: center;}</style>');
}
function kpi15()
{
document.write
	('<br><br><p>Как называется узел металлорежущего станка, изменяющий скорость подачи?</p><br> <input type="button" id="tr" class="" value="Узнать ответ" onclick="kpi_15()"> <style>body{font-size: 50px; outline: none; text-align: center;} input{background: #F4A460; border-radius: 10px;border: 1px solid #CD853F;padding: 1.5em 5em;color: white;}</style>');
}
function kpi_15()
{
	tr.parentNode.removeChild(tr)
	document.write
	('<p>Ответ: Гитара<br><img src="../images/gitara.png" width="400px"/></p><input type="button" class="kpi_15" value="Вернуться" onclick="kpi_nazad()"> <style>body{font-size: 50px; outline: none; text-align: center;}</style>');
}
function kpi16()
{
document.write
	('<br><br><p>Назовите, что изображено на картинке.</p><br><img src="../images/korob-peredah.png" width="700px"/><br><br><br> <input type="button" id="tr" class="" value="Узнать ответ" onclick="kpi_16()"> <style>body{font-size: 50px; outline: none; text-align: center;} input{background: #F4A460; border-radius: 10px;border: 1px solid #CD853F;padding: 1.5em 5em;color: white;}</style>');
}
function kpi_16()
{
	tr.parentNode.removeChild(tr)
	document.write
	('<p>Ответ: Коробка подач</p><br><input type="button" class="kpi_16" value="Вернуться" onclick="kpi_nazad()"> <style>body{font-size: 50px; outline: none; text-align: center;}</style>');
}
function kpi17()
{
document.write
	('<br><br><p>Назовите пять основных видов резцов для токарной обработки.</p><br> <input type="button" id="tr" class="" value="Узнать ответ" onclick="kpi_17()"> <style>body{font-size: 50px; outline: none; text-align: center;} input{background: #F4A460; border-radius: 10px;border: 1px solid #CD853F;padding: 1.5em 5em;color: white;}</style>');
}
function kpi_17()
{
	tr.parentNode.removeChild(tr)
	document.write
	('<p>Ответ: Проходные, расточные, отрезные, резьбовые и фасонные</p><br><input type="button" class="kpi_17" value="Вернуться" onclick="kpi_nazad()"> <style>body{font-size: 50px; outline: none; text-align: center;}</style>');
}
function kpi18()
{
document.write
	('<br><br><p>Назовите четыре отдельные группы, на которые разделяются проходные резцы.</p><br> <input type="button" id="tr" class="" value="Узнать ответ" onclick="kpi_18()"> <style>body{font-size: 50px; outline: none; text-align: center;} input{background: #F4A460; border-radius: 10px;border: 1px solid #CD853F;padding: 1.5em 5em;color: white;}</style>');
}
function kpi_18()
{
	tr.parentNode.removeChild(tr)
	document.write
	('<p>Ответ: Левые, правые, упорные и наклонные</p><br><input type="button" class="kpi_18" value="Вернуться" onclick="kpi_nazad()"> <style>body{font-size: 50px; outline: none; text-align: center;}</style>');
}
function kpi19()
{
document.write
	('<br><br><p>Для заточки режущего инструмента применяются три типа кругов. Перечислите их.</p><br> <input type="button" id="tr" class="" value="Узнать ответ" onclick="kpi_19()"> <style>body{font-size: 50px; outline: none; text-align: center;} input{background: #F4A460; border-radius: 10px;border: 1px solid #CD853F;padding: 1.5em 5em;color: white;}</style>');
}
function kpi_19()
{
	tr.parentNode.removeChild(tr)
	document.write
	('<p>Ответ: Чашечные, тарельчатые и плоские</p><br><input type="button" class="kpi_19" value="Вернуться" onclick="kpi_nazad()"> <style>body{font-size: 50px; outline: none; text-align: center;}</style>');
}
function kpi20()
{
document.write
	('<br><br><p>Какими инструментами обрабатывают отверстия на сверлильных станках?</p><br> <input type="button" id="tr" class="" value="Узнать ответ" onclick="kpi_20()"> <style>body{font-size: 50px; outline: none; text-align: center;} input{background: #F4A460; border-radius: 10px;border: 1px solid #CD853F;padding: 1.5em 5em;color: white;}</style>');
}
function kpi_20()
{
	tr.parentNode.removeChild(tr)
	document.write
	('<p>Ответ: Сверло, зенкер, развёртка</p><br><input type="button" class="kpi_20" value="Вернуться" onclick="kpi_nazad()"> <style>body{font-size: 50px; outline: none; text-align: center;}</style>');
}