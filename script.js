function highlight() {
    //Write your code here
	const strongs = document.querySelectorAll("strong")
	for(let strong of strongs){
		strong.style.color = "rgb(0, 128, 0)"
	}

}


function return_normal() {
    //Write your code here
	const strongs = document.querySelectorAll("strong")
	for(let strong of strongs){
		strong.style.color = "rgb(0, 0, 0)"
	}
    
}
