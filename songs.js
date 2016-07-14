

//songs array
var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//add one song to beginning and end
songs.unshift("Frances the Mute > by The Mars Volta on the album Frances the Mute");
songs.push("Cloud Zero > by Porcupine Tree on the album Up the Downstair");


// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.
for (var i = 0; i < songs.length; i++) {
	var song = songs[i];
	song = song.replace(/[@\*\(\!]/g, "");
	song = song.replace(/>/g, "-");
	//console.log(song);
}

//Must add each string to the DOM in index.html in the main content area.



