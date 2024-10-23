import { handleGetProductsToStore, handleDeleteElement } from "../services/prod.js";

export let productoActivo = null;

export const setProductoActivo = (producto) => {
    productoActivo = producto;
};

export const openModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display = 'flex';
    const deleteButton = document.getElementById("deletebutton");

    if (productoActivo) {
        document.getElementById("name").value = productoActivo.nombre;
        document.getElementById("img").value = productoActivo.imagen;
        document.getElementById("precio").value = productoActivo.precio;
        document.getElementById("categoria").value = productoActivo.categories;
        deleteButton.style.display = 'block';
    } else {
        deleteButton.style.display = 'none';
    }
};

export const closeModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display = 'none';
    setProductoActivo(null);
};

export const resetModal = () => {
    document.getElementById("name").value = "";
    document.getElementById("img").value = "";
    document.getElementById("precio").value = 0;
    document.getElementById("categoria").value = "Seleccione una categoría";
};

const cancelbutton = document.getElementById("cancelbutton");
cancelbutton.addEventListener("click", () => {
    handleCancelButton();
});

const handleCancelButton = () => {
    closeModal();
    resetModal();
};

const acceptbutton = document.getElementById("acceptbutton");
acceptbutton.addEventListener("click", () => {
    handleSaveOrModifyElements();
});

const deletebutton = document.getElementById("deletebutton");
deletebutton.addEventListener("click", () => {
    handleDeleteElement();
});
