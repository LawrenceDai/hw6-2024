var video;

// on load set autoplay and loop to false
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");

	video.autoplay = false;
	video.loop = false;

	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

// play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// slower button
document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
})

// faster button
document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate = video.playbackRate * 10 / 9;
	console.log("Speed is " + video.playbackRate);
})

// skip ahead
document.querySelector("#skip").addEventListener("click", function () {
	video.currentTime += 10;
	if (video.currentTime == video.duration) {
		video.currentTime = 0;
	}
	console.log("Video current time is "+video.currentTime)
})

// mute/unmute button
document.querySelector("#mute").addEventListener("click", function () {
	video.muted = !video.muted;
	this.innerHTML = (video.muted ? "Unmute" : "Mute");
})

// Volume slider
document.querySelector("#slider").addEventListener("input", function () {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Current volume: " + video.volume);
})

// Style old school
document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
})

// Style original
document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
})