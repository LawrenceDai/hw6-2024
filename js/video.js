var video = document.querySelector("#player1");
var volume = document.querySelector("#volume")

window.addEventListener("load", function() {
	console.log("Good job opening the window");

	video.autoplay = false;
	video.loop = false;
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	volume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate = video.playbackRate * 10 / 9;
	console.log(video.playbackRate);
})

document.querySelector("#mute").addEventListener("click", function () {
	video.muted = !video.muted;
	this.innerHTML = (video.muted ? "Unmute" : "Mute");
})