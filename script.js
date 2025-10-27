console.log("Welcome to Quranify")

// Initialize Variables
let indexElement = 0;
let audioElement = new Audio('audios/Surah AlFatiha 1.mp3');
let audiobar = document.getElementById('audiobar');
let audioitem = Array.from(document.getElementsByClassName('audioitem'));

let surahs = [
    { Surahname: "Surah-baqra", filePath: 'audios/Surah AlFatiha 1.mp3', coverPath: "covers/1.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah Baqra 2.mp3', coverPath: "covers/2.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah Aal eImran 3.mp3', coverPath: "covers/3.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah AnNisa 4.mp3', coverPath: "covers/4.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah AlMaidah 5.mp3', coverPath: "covers/5.jpg" },
    { Surahname: "Surah-baqra", filePath: "audios/Surah Al-Anaam 6.mp3", coverPath: "covers/6.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah Al-Aaraaf 7 .mp3', coverPath: "covers/7.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah Al-Anfaal 8.mp3', coverPath: "covers/8.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah Al-Anfaal 8.mp3', coverPath: "covers/9.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah Al-Anfaal 8.mp3', coverPath: "covers/10.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah Al-Anfaal 8.mp3', coverPath: "covers/11.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah Al-Anfaal 8.mp3', coverPath: "covers/12.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah Al-Anfaal 8.mp3', coverPath: "covers/13.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah Al-Anfaal 8.mp3', coverPath: "covers/14.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah Al-Anfaal 8.mp3', coverPath: "covers/15.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah Al-Anfaal 8.mp3', coverPath: "covers/16.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah Al-Anfaal 8.mp3', coverPath: "covers/17.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah Al-Anfaal 8.mp3', coverPath: "covers/18.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah Al-Anfaal 8.mp3', coverPath: "covers/19.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah Al-Anfaal 8.mp3', coverPath: "covers/20.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah Al-Anfaal 8.mp3', coverPath: "covers/21.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah Al-Anfaal 8.mp3', coverPath: "covers/22.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah Al-Anfaal 8.mp3', coverPath: "covers/23.jpg" },
    { Surahname: "Surah-baqra", filePath: 'audios/Surah Al-Anfaal 8.mp3', coverPath: "covers/24.jpg" },

]

// for (let i = 0; i < 25; i++) {
//     // const surah = surahs[i];
//     document.getElementsByTagName("img")[0].src = surahs[i].coverPath;
//     document.getElementsByClassName('audioitems')[0].innertext = surahs[i].Surahname;
    // console.log(`Surah Name: ${surah.Surahname}`);
    // console.log(`Audio File Path: ${surah.filePath}`);
    // console.log(`Cover Image Path: ${surah.coverPath}`);


// // Array of image filenames (assuming they're named cover1.jpg, cover2.jpg, ..., cover10.jpg)
// let imageFilenames = Array.from({ length: 6 }, (_, i) => `covers/cover${i + 1}.jpg`);

// // Function to create and append an image element
// function createImageElement(src) {
//     const img = document.createElement('img');

//     img.src = src;
//     img.alt = 'Cover Image';
//     img.style.width = '50px'; // Adjust the size as needed
//     img.style.height = '50px'; // Adjust the size as needed
//     document.getElementsByClassName('audioitem').appendChild(img);
// }

// // Loop through image filenames and create image elements
// imageFilenames.forEach(filename => {
//     createImageElement(filename);
// });





// Event lishtens
document.getElementById('playbar').addEventListener("click", abc);

function abc() {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        playbar.classList.remove('fa-play');   //here we remove the classes of play button
        playbar.classList.add('fa-pause');
    }

    else {
        audioElement.pause();
        playbar.classList.remove('fa-pause');   //here we remove the classes of play button
        playbar.classList.add('fa-play');
    }
}

audioElement.addEventListener('timeupdate', timed);
function timed() {
    bar = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    audiobar.value = bar;
}

audiobar.addEventListener('input', timechange);
function timechange() {
    audioElement.currentTime = (audiobar.value / 100) * audioElement.duration;
}


 
var surahplays = document.querySelectorAll(".surahplays")
var singlePlayButton = document.getElementById("singlePlayButton")
singlePlayButton.addEventListener("click" , makeallplays);

 function makeallplays() {
    // singlePlayButton.classList.add("fa-pause");
    if(singlePlayButton.classList.contains("fa-play"))
    {
        singlePlayButton.classList.remove("fa-play");
        singlePlayButton.classList.remove("fa-pause");

    }
    

}
// Array.from(document.getElementsByClassName('surahplay')).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         console.log(e.target);
//         makeallplays();
//         e.target.classList.remove('fa-play');
//         e.target.classList.add('fa-pause')

//     })
// })