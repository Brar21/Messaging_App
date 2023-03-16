let comments = document.querySelector(".comments");
let limit = 10;

const getComments = async () => {
  await fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((res) => showComments(limit, res))
    .catch((err) => console.log(err));
};
getComments();

function showComments(limit, data) {
  comments.innerHTML = "";
  for (let i = 0; i < limit; i++) {
    let commentBox = document.createElement("div");
    commentBox.addEventListener("click", () => {
      onOpenModal(data[i]);
    });
    let heading = document.createElement("h2");
    heading.innerText = data[i].id;
    let comment = document.createElement("p");
    comment.innerText = data[i].body;
    commentBox.append(heading, comment);
    comments.appendChild(commentBox);
  }
}

function onOpenModal(data) {
  console.log(data);
  let modal = document.querySelector(".modal");
  modal.innerHTML = "";
  let popModal = document.createElement("div");
  let popButton = document.createElement("button");
  popButton.innerText = "Close";
  popButton.addEventListener("click", () => {
    onCloseModal();
  });
  let popName = document.createElement("p");
  popName.innerText = `Name: ${data.name}`;
  let popEmail = document.createElement("p");
  popEmail.innerText = `Email: ${data.email}`;
  let popBody = document.createElement("p");
  popBody.innerText = `Comment: ${data.body}`;
  popModal.append(popButton, popName, popEmail, popBody);
  modal.append(popModal);
  modal.classList.add("db");
}

function onCloseModal() {
  let modal = document.querySelector(".modal");
  modal.classList.remove("db");
}

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log(window.innerHeight);
  if (window.scrollY + window.innerHeight >= comments.scrollHeight) {
    limit += 10;
    getComments();
  }
});
