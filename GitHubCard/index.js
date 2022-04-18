// Start coding here below

//html placement
const cardPlacement = document.querySelector(".cards");

//card array
const followersArray = [
  "CodeworldcoBootcamp", "Toniddarden", "moronic3genius", "fabpot", "egoist"
];


// grabbing card info from array

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`).then(response => {
    console.log(`datData`,response.data);
    cardPlacement.appendChild(userCards(response.data));
  });
});

function userCards(data) {
  const newCard = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const userLoca = document.createElement("p");
  const profileLink = document.createElement("a");
  const fans = document.createElement("p");
  const following = document.createElement("p");
  const bioInfo = document.createElement("p");



  //set class names
  newCard.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");

  //Set text content
  cardImg.src = data.avatar_url;
  name.textContent = data.name;
  userName.textContent= data.login;
  userLoca.textContent = `location: ${data.location}`;
  profileLink.textContent = `${data.html_url}`;
  profileLink.href = `${data.html_url}`;
  fans.textContent = `follower: ${data.followers}`;
  following.textContent = `following: ${data.following}`;
  bioInfo.textContent = `bio: ${data.bio}`;

  //format of elements
  newCard.appendChild(cardImg);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLoca);
  cardInfo.appendChild(profileLink);
  cardInfo.appendChild(fans);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bioInfo);


  return newCard;
}


