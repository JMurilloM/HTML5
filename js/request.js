var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/doesnt_exist", false);
xhr.send();
// Add your code below!
console.log(xhr.status);
