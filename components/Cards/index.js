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

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    const articles = response.data.articles;
    Object.keys(articles).forEach(category => {
      articles[category].forEach(article =>
        cardsContainer.append(
          cardCreator(article.headline, article.authorPhoto, article.authorName)
        )
      );
    });
  });

  const cardsContainer = document.querySelector('.cards-container');

  function cardCreator(articleHeadline, authorPhoto, authorName) {
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const authorImg = document.createElement("img");
    const byAuthor = document.createElement("span");

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
  
    authorImg.src = authorPhoto;
  
    headline.textContent = articleHeadline;
    byAuthor.textContent = `By: ${authorName}`;
  
    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    imgContainer.append(authorImg);
    author.append(byAuthor);
  
    console.log(card);
  
    return card;
  }
  
  



