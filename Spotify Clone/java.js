let img = 0;
let songIndex = 0;
let playMusic = new Audio('songs/1.mp3');
let masterplay = document.getElementById('playsong');
let progress = document.getElementById('progress');
let gif = document.getElementById('gif');
let songnameitem = document.getElementById('songnameitem')
let songCovers = Array.from(document.getElementsByClassName('songCover'));
let Songs = [
  { songName: "California _Love Gur Sidhu", filepath: "songs/1.mp3", coverPath: "covers/1.jpg" },
  { songName: "Still-Rollin SHUBH", filepath: "songs/2.mp3", coverPath: "covers/2.jpg" },
  { songName: "295 Sidhu Mosse Wala", filepath: "songs/3.mp3", coverPath: "covers/3.jpg" },
  { songName: "8 Raflaan Mankirt Aulakh", filepath: "songs/4.mp3", coverPath: "covers/4.jpg" },
  { songName: "Droptop Ap Dhillon", filepath: "songs/5.mp3", coverPath: "covers/5.jpg" },
  { songName: "Daku Inder Mogha", filepath: "songs/6.mp3", coverPath: "covers/6.jpg" },
  { songName: "Gaal Ni Kadni Parmish Verma", filepath: "songs/7.mp3", coverPath: "covers/7.jpg" },
  { songName: "Coka Sukh-E-Musical", filepath: "songs/8.mp3", coverPath: "covers/8.jpg" },
  { songName: "Wallian Harnoor", filepath: "songs/9.mp3", coverPath: "covers/9.jpg" },
  { songName: "Celebrity Killer ", filepath: "songs/10.mp3", coverPath: "covers/10.jpg" },


]
songCovers.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = Songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = Songs[i].songName;
});


masterplay.addEventListener("click", () => {
  if (playMusic.paused || playMusic.currentTime <= 0) {
    playMusic.play();
    masterplay.classList.remove("fa-circle-play")
    masterplay.classList.add("fa-circle-pause")
    gif.style.opacity = 1;
  }
  else {
    playMusic.pause();
    masterplay.classList.remove('fa-circle-pause')
    masterplay.classList.add('fa-circle-play')
    gif.style.opacity = 0;
  }
});
playMusic.addEventListener('timeupdate', () => {
  myProgress = parseInt((playMusic.currentTime / playMusic.duration) * 100);
  progress.value = myProgress;
});
progress.addEventListener('change', () => {
  playMusic.currentTime = progress.value * playMusic.duration / 100;

});
const allplays = () => {
  Array.from(document.getElementsByClassName('songplay')).forEach((element) => {
    element.classList.remove('fa-circle-pause')
    element.classList.add('fa-circle-play')

  });

}

Array.from(document.getElementsByClassName('songplay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    allplays();
    songIndex = parseInt(e.target.id)
    e.target.classList.remove('fa-circle-play')
    e.target.classList.add('fa-circle-pause')
    playMusic.src = `songs/${songIndex +1}.mp3`
    playMusic.currentTime = 0;
    playMusic.play();
    gif.style.opacity = 1;
    masterplay.classList.remove("fa-circle-pause")
    masterplay.classList.add("fa-circle-play")
  });
});

document.getElementById('next').addEventListener('click', () => {
  if (songIndex >= 9) {
    songIndex = 0;
  }
  else {
    songIndex += 1;
  }
  playMusic.src = `songs/${songIndex +1}.mp3`
  songnameitem.innerText = Songs[songIndex].songName
  playMusic.currentTime = 0;
  playMusic.play();
  masterplay.classList.remove("fa-circle-play")
  masterplay.classList.add("fa-circle-pause")
})
document.getElementById('previous').addEventListener('click', () => {
  if (songIndex <= 0) {
    songIndex = 0;
  }
  else {
    songIndex -= 1;
  }
  playMusic.src =`songs/${songIndex +1}.mp3`
  songnameitem.innerText = Songs[songIndex].songName
  playMusic.currentTime = 0;
  playMusic.play();
  masterplay.classList.remove("fa-circle-play")
  masterplay.classList.add("fa-circle-pause")
})