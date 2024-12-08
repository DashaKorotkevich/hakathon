//Метод Get
const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method,url,body=null){
  return fetch(url).then(response=>{
    return response.json()
  })
}
sendRequest('GET',requestURL)
.then(data=>console.log(data))
.catch(err=>console.log(err))


document.addEventListener('DOMContentLoaded', () => {

  const modals = {
    chat: {
      modal: document.getElementById("chat"),
      btn: document.getElementById("openchat"),
      closeBtn: document.getElementById("closeChat")
    },
    ai: {
      modal: document.getElementById("ai"),
      btn: document.getElementById("openai"),
      closeBtn: document.getElementById("closeAi")
    },
    table: {
      modal: document.getElementById("poisk"),
      btn: document.getElementById("opentables"),
      closeBtn: document.getElementById("closePoisk")
    },
    camera: {
      modal: document.getElementById("poisk"),
      btn: document.getElementById("opencameras"),
      closeBtn: document.getElementById("closePoisk")
    }
  };

  // Функция для открытия модального окна
  function openModal(modal) {
    modal.style.display = "block";
    makeDraggable(modal);
  }

  // Функция для закрытия модального окна
  function closeModal(modal) {
    modal.style.display = "none";
  }

  // Функция для перетаскивания модального окна
  function makeDraggable(modal) {
    modal.onmousedown = function(event) {
      let shiftX = event.clientX - modal.getBoundingClientRect().left;
      let shiftY = event.clientY - modal.getBoundingClientRect().top;

      function moveAt(pageX, pageY) {
        modal.style.left = pageX - shiftX + 'px';
        modal.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener('mousemove', onMouseMove);

      modal.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        modal.onmouseup = null;
      };
    };

    modal.ondragstart = function() {
      return false; 
    };
  }

  // Привязываем события к кнопкам
  for (const key in modals) {
    const { modal, btn, closeBtn } = modals[key];

    btn.onclick = function(event) {
      event.preventDefault();
      openModal(modal);
    };

    closeBtn.onclick = function() {
      closeModal(modal);
    };
  }

// Поиск

const poiskInput = document.getElementById('table-poisk-input');
const submitPoisk = document.getElementById('table-submit-poisk');

submitPoisk.onclick = function(event) {
  event.preventDefault();
  const userInputValue = poiskInput.value;

  const foundObject = arrRoad.find(obj => obj.name === userInputValue);
  if(userInputValue==="") {
    poiskInput.placeholder = 'Вы не ввели улицу'
    poiskInput.style.color="red"
  }
  if (foundObject) { 
    const name = document.getElementById("table-name");
    const numberOfCars = document.getElementById("table-info-number-of-cars");
    const speed = document.getElementById("table-info-speed");
    const density = document.getElementById("table-info-density");
    const accident = document.getElementById("table-info-accident");
    name.innerHTML = `${
      foundObject.name}`
    numberOfCars.innerHTML = `${
      foundObject.numberOfCars}`
      speed.innerHTML = `${
      foundObject.speed}`
      density.innerHTML = `${
      foundObject.density}`
      accident.innerHTML = `${
      foundObject.accident}`
  } else {
      console.log('Объект не найден');
  }
  //открывается модальное окно
  const modal = document.getElementById("table-content");
  event.preventDefault();
      openModal(modal);
      const closeBtn = document.getElementById("closeTable");
      closeBtn.onclick = function() {
        closeModal(modal);
      };
}

// Клик по светофорам
const  tableOpenTrafficLights= document.getElementById('table-open-traffic-lights');

tableOpenTrafficLights.onclick = function(event) {
  event.preventDefault();
  const arrTrafficLights=[
    { 
      id: 0,
      group: 1,
      x: 45.040183,
      y: 38.976389,
      xAnchor: 10.040183,
      yAnchor: 27.976389,
      modeOld: 1,
      timeOfChange: "12:30",
      modeNow: 1,
    },
    { 
      id: 1,
      group: 1,
      x: 45.037052,
      y: 38.975166,
      xAnchor: 10.040183,
      yAnchor: 27.976389,
      modeOld: 1,
      timeOfChange: "12:00",
      modeNow: 1,
    },
    {
      id: 2,
      group: 1,
      x: 45.042204,
      y: 38.977180,
      xAnchor: 10.040183,
      yAnchor: 27.976389,
      modeOld: 1,
      timeOfChange: "11:00",
      modeNow: 1,
    },
    { 
      id: 3,
      group: 2,
      x: 45.036782,
      y: 38.976689,
      xAnchor: 10.040183,
      yAnchor: 27.976389,
      modeOld: 1,
      timeOfChange: "12:01",
      modeNow: 1,
    },
    { 
      id: 4,
      group: 2,
      x: 45.040183,
      y: 38.976389,
      xAnchor: 10.040183,
      yAnchor: 27.976389,
      modeOld: 1,
      timeOfChange: "12:30",
      modeNow: 1,
    },
    { 
      id: 5,
      group: 2,
      x: 45.036400,
      y:  38.978846,
      xAnchor: 10.040183,
      yAnchor: 27.976389,
      modeOld: 1,
      timeOfChange: "12:40",
      modeNow: 1,
    },

    { 
      id: 6,
      group: 3,
      x: 45.039607,
      y: 38.980037,
      xAnchor: 10.040183,
      yAnchor: 27.976389,
      modeOld: 1,
      timeOfChange: "12:50",
      modeNow: 1,
    },
    { 
      id: 7,
      group: 3,
      x: 45.038895,
      y: 38.984311,
      xAnchor: 10.040183,
      yAnchor: 27.976389,
      modeOld: 1,
      timeOfChange: "14:00",
      modeNow: 1,
    }
  ]
  arrTrafficLights.forEach((item)=>{
    var customIcon = L.icon({
      iconUrl: './icon/traffic_light.svg', // Путь к вашей иконке
      iconSize: [25, 25], // Размер иконки
      iconAnchor: [10.040183, 27.976389], // Анкорная точка иконки
      popupAnchor: [0, -50] // Анкорная точка для попапа
    });

    // Создание метки
  
    let marker = L.marker([item.x,item.y ],{ icon: customIcon }).addTo(map);
  
    // Добавление всплывающего окна к метке
    marker.bindPopup(`<p>Предыдущий режим: ${item.modeOld}</p><p>Время изменений: ${item.timeOfChange}</p><b>Текущий режим: ${item.modeNow}</b>`).openPopup();

  })
}

//Клик по камеарм

const  tableOpenCameras= document.getElementById('table-opencameras');
const  closeCamera= document.getElementById('closeCamera');
const  camerasContainer= document.getElementById('cameras-container');

tableOpenCameras.onclick = function(event) {
  event.preventDefault();
  openModal(camera);

    const video = document.createElement('video');
        video.width = 330;
        video.height = 235;
        video.autoplay = true; // Автовоспроизведение
        video.loop = true;    // Бесконечное повторение

        const sourceMp4 = document.createElement('source');
        sourceMp4.type = 'video/mp4';

    const userInputValue = poiskInput.value;
    if(userInputValue==='Красная'){
        sourceMp4.src = './videos/Camera1.mp4';
    }
    else if(userInputValue==='Кузнечная'){
        sourceMp4.src = './videos/Camera2.mp4';
    }
    else{
        sourceMp4.src = './videos/Camera3.mp4';
    }
    const name = document.getElementById("camera-name");
    name.innerHTML = `${
          userInputValue}`
    video.appendChild(sourceMp4);
    camerasContainer.appendChild(video);
}

closeCamera.onclick = function(event) {
  event.preventDefault();
  camerasContainer.innerHTML = '';
  closeModal(camera);
};

const arrRoad = [
  { id: 1,
    name: "Кузнечная",
    cameras: 1,
    numberOfCars: 20,
    speed: 60,
    density: 1,
    accident: 'нет'
  },
  { id: 2,
    name: "Северная",
    cameras: 1,
    numberOfCars: 30,
    speed: 66,
    density: 1.5,
    accident: 'нет'
  },
  { id: 3,
    name: "Красная",
    cameras: 1,
    numberOfCars: 30,
    speed: 66,
    density: 1.5,
    accident: 'нет'
  },

]
});
  




