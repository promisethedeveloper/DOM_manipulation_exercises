// 1. Select the section with an id of container without using querySelector.
const section = document.getElementById("container");
console.log(section);

// 2. Select the section with an id of container using querySelector.
const section2 = document.querySelector("#container");
console.log(section2);

// 3. Select all of the list items with a class of “second”.
const allList = document.querySelectorAll(".second");
console.log(allList);

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
const third = document.querySelectorAll(".third")[1];
console.log(third);

// 5. Give the section with an id of container the text “Hello!”.
// Create an h1 to hold the text
const h1 = document.createElement("h1");
// Add text to the h1 tag
h1.textContent = "Hello!";
// Prepend the text to the container
section.prepend(h1);

// 6. Add the class main to the div with a class of footer.
// Select the element with a class of footer
const footerEl = document.querySelector(".footer");
// add the class main to the selected class
footerEl.classList.add("main");

// 7. Remove the class main on the div with a class of footer.
footerEl.classList.remove("main");

// 8. Create a new li element.
const newLi = document.createElement("li");

// 9. Give the li the text “four”.
newLi.innerText = "four";

// 10. Append the li to the ul element.
const ul = document.querySelector("ul");
ul.append(newLi);

// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
const ol = document.querySelector("ol");
const lis = ol.getElementsByTagName("li");
for (const li of lis) {
	li.style.backgroundColor = "green";
}
