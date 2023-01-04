const API_URL = "http://127.0.0.1:3000"

fetch(`${API_URL}/users`)
.then((response) => response.json())
.then((data) => {
    const usersBlock = document.querySelector(".usersBlock");
    
    data.forEach(({id, name, age}) => {
        const div = document.createElement("div")
        div.setAttribute('data-id', id);
        
        
    });
}).catch((error) =>{
    alert(error.message)
});