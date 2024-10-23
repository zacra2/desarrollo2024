import { handleRenderList } from "../views/store.js";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localstorage.js";
import Swal from 'sweetalert2';

export const handleGetProductsToStore = () => {
    const products = handleGetProductLocalStorage();
    console.log("Products from localStorage:", products);
    handleRenderList(products);
};

export const handleSaveOrModifyElements = () => {
    const nombre = document.getElementById("name").value,
          imagen = document.getElementById("img").value,
          precio = document.getElementById("precio").value,
          categories = document.getElementById("categoria").value;

    let object = {
        id: productoActivo ? productoActivo.id : new Date().toISOString(),
        nombre,
        imagen,
        precio,
        categories,
    };
    setInLocalStorage(object);

    closeModal();
    resetModal();
    handleGetProductsToStore();
    Swal.fire({
        title: 'Guardado',
        text: 'El elemento ha sido guardado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
};

export const handleDeleteElement = () => {
    Swal.fire({
        title: '¿Desea eliminar este elemento?',
        text: 'Si lo elimina, será permanentemente.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const newProducts = products.filter((element) => element.id !== productoActivo.id);
            setInLocalStorage(newProducts);
            closeModal();
            handleGetProductsToStore();
            Swal.fire(
                'Eliminado',
                'El elemento ha sido eliminado correctamente.',
                'success'
            );
        } else {
            closeModal();
        }
    });
};
