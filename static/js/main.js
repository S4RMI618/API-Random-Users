import { getEmojiCountry } from "./getCountry.js";
import { bold } from "./bold.js";
import { searchBar } from "./searchBar.js";

const API = 'https://randomuser.me/api/?results=50'

const app = () => {
    fetch(API)
    .then(res => {
        if (!res.ok) {
            throw new Error(`Error al realizar la solicitud. Código de estado: ${res.status}`)   
        }
        return res.json()
    })
    .then(data => {
        const sortedResults = data.results.sort((a, b) => {
            return a.name.first.localeCompare(b.name.first);
        });
        renderData(sortedResults);
        searchBar(sortedResults);
    })
    .catch(err => {
        console.error("Error: ", err);
    })

} 


function renderData(data) {
    const container = document.querySelector("#root"),
        template = document.getElementById("template-card").content,
        fragment = document.createDocumentFragment(),
        cardContent = data;
        
    
        cardContent.forEach(user => {
           template.querySelector("img").setAttribute("src", user.picture.large);
           template.querySelector("img").setAttribute("alt", user.name.title); 
           template.querySelector("h4").textContent = user.name.first + " " + user.name.last;
           template.getElementById("email").innerHTML    = bold('Email') + user.email;
           template.getElementById("phone").innerHTML    = bold('Phone') + user.phone;
           template.getElementById("country").innerHTML  = bold('Country') + user.location.country;
/*         template.getElementById("countryImg").setAttribute("src", getEmojiCountry(user.location.country)); */
           template.getElementById("location").innerHTML = bold('Location') + user.location.state + " - " + user.location.city;
           template.getElementById("address").innerHTML  = bold('Address') + "Street " +user.location.street.number + ", " + user.location.street.name;


           let clone = document.importNode(template, true);
           fragment.appendChild(clone);
           container.appendChild(fragment);
        });
    }


app()