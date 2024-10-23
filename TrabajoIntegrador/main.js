import { handleGetProductsToStore } from "./src/services/prod.js";
import { renderCategorias } from "./src/services/categories.js";
import { openModal } from "./src/views/modal.js";
import { handleSearchProductByName } from "./src/services/search.js";
import './style.css';

// Aplicacion
handleGetProductsToStore();
renderCategorias();

// Produc
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click", () => {
    openModal();
});

// Search
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", () => {
    const inputHeader = document.getElementById("inputHeader").value;
    handleSearchProductByName(inputHeader);
});
