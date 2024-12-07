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


const poiskInput = document.getElementById('table-poisk-input');
const submitPoisk = document.getElementById('table-submit-poisk');

submitPoisk.onclick = function(event) {
  event.preventDefault();
  const userInputValue = poiskInput.value;

  const foundObject = arrRoad.find(obj => obj.name === userInputValue);
  if (foundObject) {
    const numberOfCars = document.getElementById("table-info-number-of-cars");
    const speed = document.getElementById("table-info-speed");
    const density = document.getElementById("table-info-density");
    const accident = document.getElementById("table-info-accident");
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




const arrRoad = [
  { id: 1,
    name: "Ставропольская",
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
    accident: false
  },
  { id: 3,
    name: "Красная",
    cameras: 1,
    numberOfCars: 30,
    speed: 66,
    density: 1.5,
    accident: false
  },

]
});
  




