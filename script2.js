// Define an array to store the audio items
const audioItems = [
  {
      surahname: "Surat ur-Ibrahim",
      audioDuration: "2:00",
      buttonId: "singlePlayButton1",
      buttonClass: "fa-play",
  },
  {
      surahname: "Surat ul-Hijir",
      audioDuration: "2:00",
      buttonId: "singlePlayButton2",
      buttonClass: "fa-play",
  },
  // Add other audio items as objects in the array
];

// Function to toggle the play/pause button
function togglePlayPause(index) {
  const audioItem = audioItems[index];
  const button = document.getElementById(audioItem.buttonId);

  if (button.classList.contains('fa-play')) {
      // Change to pause button
      button.classList.remove('fa-play');
      button.classList.add('fa-pause');
      // Update the state in the array
      audioItem.buttonClass = "fa-pause";
  } else {
      // Change to play button
      button.classList.remove('fa-pause');
      button.classList.add('fa-play');
      // Update the state in the array
      audioItem.buttonClass = "fa-play";
  }
}

// Add click event listeners to each play button
audioItems.forEach((audioItem, index) => {
  document.getElementById(audioItem.buttonId).addEventListener('click', () => {
      togglePlayPause(index);
  });
});

// Add click event listeners for other play buttons (repeat the pattern)
