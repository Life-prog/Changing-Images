let img = document.getElementById('img');
let btn = document.getElementById('submit');
let input = document.getElementById('input');

// Изменение фона в зависимости от времени суток
let currentTime = new Date().getHours();
if (1 < currentTime && currentTime < 2) {
    document.body.background = './orange.jpg';
}
else {
    document.body.background = './space.png';
}

// Последовательное отображение изображений
function interval() {
    setTimeout(() => {
        if (img.getAttribute('src') == 'frog.png')
            img.setAttribute('src', 'pepe.png');
        else 
            img.setAttribute('src', 'frog.png');
    }, 200)
}

// Изменение интервала отображения изображений
let temp = setInterval(interval, 1000)
btn.addEventListener('click', () => {
    clearInterval(temp);
    temp = setInterval(interval, input.value * 1000);
})

// Отображение часов в реальном времени
var time = setInterval(function() {
  var date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString(); 
}, 1000);