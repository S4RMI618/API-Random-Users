import { getEmojiCountry } from "./getCountry.js";
import { searchBar } from "./searchBar.js";
import { renderData } from "./renderData.js";

const API = "https://randomuser.me/api/?results=50";

const app = () => {
  fetch(API)
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `Error al realizar la solicitud. Código de estado: ${res.status}`
        );
      }
      return res.json();
    })
    .then((data) => {
      const sortedResults = data.results.sort((a, b) => {
        return a.name.first.localeCompare(b.name.first);
      });
      renderData(sortedResults);
      searchBar("#searchInput",".row");
    })
    .catch((err) => {
      console.error("Error: ", err);
    });
};


app();
