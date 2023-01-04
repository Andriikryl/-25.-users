const { response } = require("express");

const API_URL = "http://127.0.0.1:3000"

const usersBlock = document.querySelector(".usersBlock");

const addUsersHtml = ({id, name, age}) =>{
    const div = document.createElement("div")
    div.setAttribute("data-id", id);
    
    div.insertAdjacentHTML(
        "beforeend",
        `<p><span>user: ${name}; age: ${age}</span><button>edit</button></p>`
        );

        usersBlock.append(div)
}


const getUsers = () => 
fetch(`${API_URL}/users`)
.then((response) => response.json())
.then((data) => {
    data.forEach(addUsersHtml)
})
.catch((error) =>{
    alert(error.message)
});

document.forms.user.addEventListener("submit", function(event){
    event.preventDefault();

    const name = this.name.value;
    const age = this.age.value;

    fetch(`${API_URL}/users`, {
        method: "POST",
        body: JSON.stringify({name, age}),
        headers: {
            "Content-Type": "application/json",

        },
    })
    .then((response) => response.json())
    .then((data)=>{

    });
});



