// Constructor function for audio items
function AudioItem(name, imagePath, duration) {
    this.name = name;
    this.imagePath = imagePath;
    this.duration = duration;
}

// Create an array of audio items
const audioItems = [
    new AudioItem("Surah Al-Fatiha", "/covers/1.jpg", "2:00"),
    new AudioItem("Surah Al-Bakrah", "/covers/2.jpg", "2:00"),
    // Add more audio items here
];

// Function to create and update audio item elements in the DOM
function createAudioItems() {
    const leftList = document.querySelector('.leftlist');

    // Loop through the array of audio items
    audioItems.forEach((item, index) => {
        const audioItemDiv = document.createElement('div');
        audioItemDiv.className = 'audioitem';

        const imageElement = document.createElement('img');
        imageElement.src = item.imagePath;
        imageElement.alt = item.name;

        const nameElement = document.createElement('span');
        nameElement.className = 'surahnam';
        nameElement.textContent = item.name;

        const durationElement = document.createElement('span');
        durationElement.className = 'audio-duration';
        durationElement.textContent = item.duration;

        // Create a unique ID for each play button
        const playButtonId = `singlePlayButton${index}`;
        const playButton = document.createElement('i');
        playButton.id = playButtonId;
        playButton.className = 'fa-solid surahplay fa-play';
        playButton.style.color = '#00e3b4';

        // Append elements to the audio item div
        durationElement.appendChild(document.createElement('span').appendChild(playButton));
        audioItemDiv.appendChild(imageElement);
        audioItemDiv.appendChild(nameElement);
        audioItemDiv.appendChild(durationElement);

        // Append the audio item div to the leftlist
        leftList.appendChild(audioItemDiv);
    });
}

// Call the function to create and update audio item elements
createAudioItems();
