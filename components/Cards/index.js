// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const component =  document.querySelector(".cards");
function makingAComponent(data) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const name = document.createElement("div");
  const imgContainer = document.createElement("img");
  const imgAuthors = document.createElement("img");
  const authorsName = document.createElement("span");
  
  
  card.append(headline);
  card.append(author);
  author.append(imgContainer);
  author.append(imgAuthors);
  card.append(authorsName);

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  name.classList.add("name");
  authorsName.classList.add("authorsName")

  imgAuthors.src = data.avatar_url;
  headline.textContent = data.headline;
  author.textContent = data.author;
  authorsName.textContent = data.authorsName;



