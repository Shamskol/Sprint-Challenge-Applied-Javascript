// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
        .then((response) => {
             console.log(response);
            const newTopics = response.data.topics;
            newTopics.forEach((topic) => {
                topicsElement.appendChild(tabCreator(topic))
            })
        })

        const topicsElement = document.querySelector(".topics");

        function tabCreator (object) {
          const tabs = document.createElement("div");
      
          tabs.classList.add("tab");
      
          tabs.textContent = object;
      
          console.log(tabs);
      
          return tabs;
      }; 
      
    




















/*cardDiv.classList.add("card");
headline.classList.add("headline");
author.classList.add("author");
imgContainer.classList.add("img-container");

authorImg.src = articleAuthorPhoto;

headline.textContent = articleHeadline;
writtenBy.textContent = `By: ${articleAuthorName}`;

cardDiv.appendChild(headline);
cardDiv.appendChild(author);
author.appendChild(imgContainer);
imgContainer.appendChild(authorImg);
author.appendChild(writtenBy);

console.log(cardDiv);

return cardDiv;
}
 cardDiv.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  authorImg.src = articleAuthorPhoto;

  headline.textContent = articleHeadline;
  writtenBy.textContent = `By: ${articleAuthorName}`;

  cardDiv.appendChild(headline);
  cardDiv.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorImg);
  author.appendChild(writtenBy);

  console.log(cardDiv);

  return cardDiv;
}


const topicsElement = document.querySelector(".topics");

function tabCreator(object) {
  const tabTopic = document.createElement("div");

  tabTopic.classList.add("tab");

  tabTopic.textContent = object;

   console.log(tabTopic);

  return tabTopic;
}*/
