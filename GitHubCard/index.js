// Start coding here below

//html placement
const cardPlacement = document.querySelector(".cards");

//card array
const followersArray = [
  "CodeworldcoBootcamp"
];


// grabbing card info from array

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`).then(response => {
    console.log(response.data);
    cardPlacement.appendChild(userCards(response.data));
  });
});

function userCards(data) {
  const newCard = document.createElement("div");
  

  //set class names
  newCard.classList.add("card");
  

  //Set text content
  cardImg.src = data.avatar_url;


  //format of elements
  newCard.appendChild(cardImg);
 

  return newCard;
}


