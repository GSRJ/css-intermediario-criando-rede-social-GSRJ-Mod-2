const body = document.querySelector("body");

for (let i = 0; i < posts.length; i++) {
  let postUser = posts[i].user;
  let postTitle = posts[i].title;
  let postText = posts[i].text;
  let postId = posts[i].id_post;

  let userData = document.createElement("li");

  let nameUser = users[postUser - 1].user;
  stackUser = users[postUser - 1].stack;
  imgUser = users[postUser - 1].img;

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

  span.append(userName, userStack);
  userData.append(userImg, span);

  let article = document.createElement("article");

  let publicationTitle = document.createElement("h1");
  publicationTitle.classList.add("publication-title");
  publicationTitle.innerText = postTitle;

  let publicationText = document.createElement("p");
  publicationText.innerText = postText;

  article.append(publicationTitle, publicationText);

  /*MODAL */
  let modal = document.createElement("div");
  modal.classList.add("modal");
  modal.id = postId;

  let modalWhiteBox = document.createElement("div");
  modalWhiteBox.classList.add("modal-white-box");
  let buttonClose = document.createElement("button");
  buttonClose.classList.add("modal-close");
  buttonClose.setAttribute("data-control-modal", postId);
  buttonClose.innerText = "X";

  let modalDataBox = document.createElement("div");
  modalDataBox.classList.add("modal-data-box");

  modalDataBox.append(userData, buttonClose);
  modalWhiteBox.appendChild(modalDataBox);
  modalWhiteBox.appendChild(article);
  modal.appendChild(modalWhiteBox);

  body.appendChild(modal);
}
const buttonModal = document.querySelectorAll("[data-control-modal]");

for (let index = 0; index < buttonModal.length; index++) {
  buttonModal[index].addEventListener("click", function () {
    let valueModalControl =
      buttonModal[index].getAttribute("data-control-modal");
    document.getElementById(valueModalControl).classList.toggle("show-modal");
  });
}
