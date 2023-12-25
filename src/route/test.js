// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

const Test = require('../class/test')

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку
//   class Playlist {
//     constructor() {
         
//         this.tracks = [];
//     }
  
//     addTrack(track) {
//       this.tracks.push(track);
//     }
// }
  
// const playlist = new Playlist();

// const playlistInput = document.querySelector(".playlist-input");
// const playlistAddButton = document.querySelector(".playlist-add");

// playlistAddButton.addEventListener("click", () => {
//     const trackUrl = playlistInput.value;
//     if (trackUrl.startsWith("http://") || trackUrl.startsWith("https://")) {
//     playlist.addTrack(trackUrl);
//     playlistInput.value = "";
// }
// console.log(playlist)
// });
  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('index', {
    // вказуємо назву контейнера
    name: 'index',
    // вказуємо назву компонентів
    component: ['heading'],

    // вказуємо назву сторінки
    title: 'Travel Agency',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {
      
    },
  })
  // ↑↑ сюди вводимо JSON дані
})

// Підключаємо роутер до бек-енду
module.exports = router
