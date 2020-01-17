// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headers = document.querySelector(".headers")

function makingAComponent() {

const header = document.createElement("div");
const spanDate = document.createElement("span");
const headerTitle = document.createElement("h1");
const spanTemp = document.createElement("span");


header.append(spanDate);
header.append(headerTitle);
header.append(spanTime);

header.classList.add("header");
spanDate.classList("date");
headerTitle.classList("h1");
spanTemp.classList("temp");

spanDate.textContent = date;
headerTitle.textContent = title;
spanTemp.textContent = temp;



}
