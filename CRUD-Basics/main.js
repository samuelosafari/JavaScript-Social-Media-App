let form = document.getElementById("form");

let input = document.getElementById("input");

let msg = document.getElementById("msg");

let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank.";
    console.log("failure");
  } else {
    console.log("Success");
    msg.innerHTML = "";
    acceptData();
  }
};

// Accept and store the data inside an object

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

// creating a post on the screen

let createPost = () => {
  posts.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
         <i onClick = "editPost(this)" class="bx bxs-edit"></i>
        <i onClick = "deletePost(this)" class="bx bx-trash"></i>
    </span>
</div>
`;
  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
