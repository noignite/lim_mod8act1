let fName = prompt("Please enter your full name: ");
document.getElementById("fname").innerHTML = fName;

let uName = prompt("Please enter your username: ");
document.getElementById("username").innerHTML = uName;

if (confirm("What is your gender?\nPress OK if you are Male\nCancel if Female") == true) {
    alert("Your profile gender is set to MALE");
    document.getElementById("gender").innerHTML = "M";
}
else {
    alert("Your profile gender is set to FEMALE");
    document.getElementById("gender").innerHTML = "F";
}

let desc = prompt("Please type a brief description of yourself: ");
document.getElementById("desc").innerHTML = desc;

let birthYear = prompt("Please enter your birth year: ");
document.getElementById("year").innerHTML = birthYear;

let age = 2023-birthYear;
document.getElementById("age").innerHTML = age;

if (confirm("Do you want to use a custom profile picture?") == true) {
    var imgNm = prompt("Please enter the file name of the picture. (Ex: wow.jpg)");
    document.getElementById("ppic").src = imgNm;
    alert("Profile picture has been updated.");
}
else {
    alert("No image has been set.");
}