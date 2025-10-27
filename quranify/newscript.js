// var audioitem = Array.from(document.getElementsByClassName("audioitem"));
//    function  loops(){
//         for(var i =0; i < audioitem.length ; i++)
//     {
//         var runningSurahsLoop = surahsrrays[i];
//         document.getElementsByClassName("surahname")[0].textContent = runningSurahsLoop[i].name;
//         document.getElementsByClassName("audio-duration")[0].textContent = runningSurahsLoop[i].duration;
//         // document.getElementsByClassName("imagesource")[0].src = names.imagePath;
//         // document.getElementsByClassName("imagesource")[0].src = runningSurahsLoop[i].imagePath;

//     }
//     }

    var surahsrrays = [
        { name: "Surah-baqra", imagePath: "../covers/1.jpg" , duration :" 3:00"},
        { name: "Surah-baqra", imagePath: "../covers/2.jpg" , duration :" 3:00"},
        { name: "Surah-baqra", imagePath: "../covers/3.jpg" , duration :" 3:00"},
        { name: "Surah-baqra", imagePath: "../covers/4.jpg" , duration :" 3:00"},
        { name: "Surah-baqra", imagePath: "../covers/5.jpg" , duration :" 3:00"},
        { name: "Surah-baqra", imagePath: "../covers/6.jpg" , duration :" 3:00"},
        { name: "Surah-baqra", imagePath: "../covers/7.jpg" , duration :" 3:00"},  
    ];
    // loops();



// Get all elements with class "surahnam" and "audio-duration"
const surahNameElements = document.querySelectorAll('.surahnam');
const audioDurationElements = document.querySelectorAll('.audio-duration');
const audioImageElements = document.querySelectorAll('.imagesource');

// Loop through the elements and update their content
surahNameElements.forEach((element, index) => {
    if (index < surahsrrays.length) {
        element.textContent = surahsrrays[index].name;
    }
});

audioDurationElements.forEach((element, index) => {
    if (index < surahsrrays.length) {
        element.textContent = surahsrrays[index].duration;
    }
});

audioImageElements.forEach((element, index) => {
    if (index < surahsrrays.length) {
        element.src = surahsrrays[index].imagePath;
    }
});
