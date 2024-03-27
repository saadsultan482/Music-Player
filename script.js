let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let songImg = document.getElementById('songImg');

let currentSongIndex = 0; // Index of the current song in the playlist


const playlist = [
    { title: 'Othe Amlan De Hony Ne Navede', artist: 'Nusrat Fateh Ali Khan', source: '/Audio/qawali1.mp3', image: '/Images/1.jpg' },

    { title: 'Dill Peh Zakham ', artist: 'Nusrat Fateh Ali Khan', source: '/Audio/qawali2.mp3', image: '/Images/2.jpg' },

    { title: 'Dill-e-Umeed', artist: 'Nusrat Fateh Ali Khan', source: '/Audio/qawali3.mp3', image: '/Images/3.jpg' },

    { title: 'Durood Sharif', artist: 'Hafiz Ahmed Raza Qadri', source: '/Audio/durood-sharif.mp3', image: '/Images/4.jpg' },

    { title: 'banda-tou-gunahgar-hai', artist: 'Hafiz Ahmed Raza Qadri', source: '/Audio/banda-tou-gunahgar-hai.mp3', image: '/Images/5.jpg' },
    // Add more songs to your playlist

];

// Load the current song
loadSong();

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function loadSong() {
    let currentSong = playlist[currentSongIndex];
    song.src = currentSong.source;
    songImg.src = currentSong.image;
    document.querySelector('h1').textContent = currentSong.title;
    document.querySelector('p').textContent = currentSong.artist;
}

function playPause() {
    if (ctrlIcon.classList.contains('fa-pause')) {
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
    } else {
        song.play();
        ctrlIcon.classList.add('fa-pause');
        ctrlIcon.classList.remove('fa-play');
    }
}

// Update progress continuously
setInterval(() => {
    progress.value = song.currentTime;
}, 500);

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong();
    song.play();
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
}

function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong();
    song.play();
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
}