//Adds border to image when clicked.
function thumbBor(ID) { 
	//stores all thumbnails.
	var tnail = document.getElementById("thumbnails").children;
	//variable set to 0 to initiate for loop
	var i;
	//loop's through all thumbnails.
	for ( i = 0; i < tnail.length; i++ ) {
		//removes border from thumbnail.
		tnail[i].className="thumbDown";
	}
	// Adds border to currently selected thumbnail.
	document.getElementById(ID).className="thumbUp";

}

//function gets and displays large image and text when thumbnails are clicked.
function mainImage(imgs) {
	//stores all expanded images
	var expandImg = document.getElementById("largeImage");	
	//Displays selected image
	expandImg.src = imgs.src;
	//Turns the header red when thumbnail is clicked
	document.getElementById("color").style.color = 'red';
}

//Displays matching caption when thumbnail image is hovered over.
function caption(imgs) {
	//stores alt for all images as captions.
	var caption = document.getElementById("caption");
	//Displays caption when thumbnail is hovered over
	caption.innerHTML = imgs.alt;
}
