const suggestionsList = document.querySelector(".suggestions-list");
const publicationsList = document.querySelector(".publications-list");

// let idUser = 0;
// let nameUser = "";
// let stackUser = "";

for (j = 0; j < sugestUsers.length; j++) {
  let sugestId = sugestUsers[j];

  for (let i = 0; i < users.length; i++) {
    idUser = users[i].id;
    nameUser = users[i].user;
    stackUser = users[i].stack;
    imgUser = users[i].img;

    let userData = document.createElement("li");
    userData.classList.add("user-data");

    let userCard = document.createElement("span");

    let userImg = document.createElement("img");
    userImg.classList.add("user-img");
    userImg.src = imgUser;
    userImg.alt = nameUser;

    let span = document.createElement("span");

    let userName = document.createElement("h1");
    userName.innerText = nameUser;

    let userStack = document.createElement("p");
    userStack.innerText = stackUser;

    let followButton = document.createElement("button");
    followButton.classList.add("position-bt","follow-bt");
    followButton.innerText = "Seguir";

    let followedButton = document.createElement("button");
    followedButton.classList.add("position-bt","followed-bt");
    followedButton.innerText = "Seguindo";

    span.append(userName, userStack);

    if(idUser == 3){
      span.appendChild(followedButton);
    } else {
      span.appendChild(followButton);
    }

    userData.append(userImg, span);

    if (idUser == sugestId) {
      suggestionsList.append(userData);
    }
  }
}

for (k = 0; k < posts.length; k++) {
  let postUser = posts[k].user;
  let postTitle = posts[k].title;
  let postText = posts[k].text;
  let postId = posts[k].id_post;

  let article = document.createElement("article");

  let publicationTitle = document.createElement("h1");
  publicationTitle.classList.add("publication-title");
  publicationTitle.innerText = postTitle;

  let publicationText = document.createElement("p");
  publicationText.classList.add("publication-text");
  publicationText.innerText = postText;

  article.append(publicationTitle, publicationText);

  for (let i = 0; i < users.length; i++) {
    idUser = users[i].id;
    nameUser = users[i].user;
    stackUser = users[i].stack;
    imgUser = users[i].img;

    let userData = document.createElement("li");
    userData.classList.add("user-data");

    let userImg = document.createElement("img");
    userImg.classList.add("user-img");
    userImg.src = imgUser;
    userImg.alt = nameUser;

    let span = document.createElement("span");

    let userName = document.createElement("h1");
    userName.innerText = nameUser;

    let userStack = document.createElement("p");
    userStack.innerText = stackUser;

    let buttonOpen = document.createElement("button");
    buttonOpen.classList.add("normal-button");
    buttonOpen.setAttribute("data-control-modal", postId);
    buttonOpen.innerText = "Abrir Post";

    let likeImg = document.createElement("img");
    likeImg.classList.add("like-img");
    likeImg.src = "./assets/img/like.png";
    likeImg.alt = "buton like";

    let buttons = document.createElement("span");
    buttons.classList.add("buttons");
    buttons.append(buttonOpen, likeImg);

    span.append(userName, userStack);
    userData.append(userImg, span);

    if (postUser == idUser) {
      publicationsList.append(userData, article, buttons);
    }
  }
}
