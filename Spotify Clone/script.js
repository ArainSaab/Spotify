function seterror(id, error) {
    element = document.getElementById(id);
    element = document.getElementsByClassName('formerror')[0].innerHTML = error;

}

function seterror1(id, error) {
    element = document.getElementById(id);
    element = document.getElementsByClassName('formerror')[1].innerHTML = error;

}

function validateform() {
    returnval = true;
    Name = document.forms['myform']["fname"].value;
    password = document.forms['myform']["password"].value;

    if (Name == "Alihasan" && password == '12345') {
        window.location.assign("spotify.html")
        returnval = false;
    }
    else if (Name != "Alihasan") {
        seterror("Name", "*Wrong Your Name")
        returnval = false;

    }

    if (password != 12345) {
        seterror1("password", "*Wrong Your password")
        returnval = false;

    }

    if (password.length > 10) {
        seterror1("password", "*Lenght of password too long")

        returnval = false;

    }
    if (Name.length < 5) {
        seterror("Name", "*Lenght of name  too short")
        returnval = false;
    }
    return returnval;
}