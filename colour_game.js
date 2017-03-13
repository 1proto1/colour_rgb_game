var game_size = 6;
var colours ;
var picked_colour;
var squares = document.querySelectorAll(".square");
var colour_display = document.getElementById("colour_display");
var the_menu = document.querySelector("#the_menu");
var msg_display = document.querySelector("#msg");
var the_h1 = document.querySelector("h1");
var reset_button = document.querySelector("#reset_button");
var easy_button = document.querySelector("#easy_button");
var hard_button = document.querySelector("#hard_button");

initialize_game();
run_game();
buttons_watcher();

function buttons_watcher (){
	reset_button.addEventListener("click", function(){
		reset_button.textContent = "New Colours";
		the_h1.style.background = "steelblue";
		msg_display.textContent = "";
		initialize_game();
		run_game();
	});
	easy_button.addEventListener("click", function(){
		game_size = 3;
		hard_button.classList.remove("selected_button");
		easy_button.classList.add("selected_button");
		initialize_game();
		run_game();
	});
	hard_button.addEventListener("click", function(){
		game_size = 6;
		hard_button.classList.add("selected_button");
		easy_button.classList.remove("selected_button");
		initialize_game();
		run_game();
	});
}
function initialize_game () {
	colours = get_random_colours(game_size);
	picked_colour = get_picked_colour();
	colour_display.textContent = picked_colour;

}
function run_game (){
	for (var i = 0; i<squares.length; i++) {
		if (game_size == 6) {
			squares[i].style.background = colours[i];		
			squares[i].style.display = "block";		
		} else {
			if (colours[i]) {squares[i].style.background = colours[i]; }
			else { squares[i].style.display = "none"; }
		}
		squares[i].addEventListener("click", function () {
			if (this.style.background == picked_colour) {
				msg_display.textContent = "Correct";
				colours_change(picked_colour);
				the_h1.style.background = picked_colour;
				reset_button.textContent = "Play Again";
			} else {
				this.style.background = "black"
				msg_display.textContent = "Not Correct"
			}
		});
	}
}
function colours_change(color) {
	for (var i = 0; i<squares.length; i++) {
		squares[i].style.background = color;
	}
}
function get_picked_colour() {
	var pick_colour_index = Math.floor(Math.random()*colours.length);
	return (colours[pick_colour_index]);
}
function get_random_colours(amount) {
	var colour_array = [];
	for (var i = 1; i <= amount; i++) {
		colour_array.push(make_random_colour());
	}
	return(colour_array);
}
function make_random_colour(){
	var red=Math.floor(Math.random()*256);
	var green=Math.floor(Math.random()*256);
	var blue=Math.floor(Math.random()*256);
	return("rgb("+red+", "+green+", "+blue+")");
}