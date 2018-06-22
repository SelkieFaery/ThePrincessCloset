function validateForm() {
    var a = document.forms["myForm"]["name"].value;
    if (a == "First Last") {
        alert("Name must be filled out");
        return false;
    }
	var b = document.forms["myForm"]["street"].value;
    if (b == "") {
        alert("Street must be filled out");
        return false;
    }
    var c = document.forms["myForm"]["city"].value;
    if (c == "") {
        alert("City must be filled out");
        return false;
    }
    var d = document.forms["myForm"]["state"].value;
    if (d == "") {
        alert("State must be filled out");
        return false;
    }
    var e = document.forms["myForm"]["zip"].value;
    if (e == "") {
        alert("Zip must be filled out");
        return false;
    }
    var f = document.forms["myForm"]["phone"].value;
    if (f == "") {
        alert("Phone must be filled out");
        return false;
    }
    var g = document.forms["myForm"]["email"].value;
    if (g == "") {
        alert("Email address must be filled out");
        return false;
    }
    var h = document.forms["myForm"]["size"].value;
    if (h == "") {
        alert("Size must be filled out");
        return false;
    }
    var i = document.forms["myForm"]["style"].value;
    if (i == "") {
        alert("Style must be filled out");
        return false;
    }
    var j = document.forms["myForm"]["description"].value;
    if (j == "") {
        alert("Description must be filled out");
        return false;
    }
}
