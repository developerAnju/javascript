// textContent property represents the content of the heading
// what is the issue in the below code?
const myheading = document.querySelectorAll('h1');
// myheading.textContent = 'Hello world'; // textContent is a property of a single element
for (const heading of myheading){ // for all elements in the document
    heading.textContent = "Hello world";
}
// what is let, var and const?
// what is queryselector() function?
