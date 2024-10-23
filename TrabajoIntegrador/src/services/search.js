import { handleRenderList } from "../views/store.js";
import { handleGetProductLocalStorage } from "../persistence/localstorage.js";

export const handleSearchProductByName = (name) => {
    const products = handleGetProductLocalStorage();
    const result = products.filter((el) => el.nombre.toLowerCase().includes(name.toLowerCase()));
    handleRenderList(result);
};
