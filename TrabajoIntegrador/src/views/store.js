import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { setProductoActivo, openModal } from "../views/modal";

export const handleGetProductsToStore = () => {
    const products = handleGetProductLocalStorage();
    console.log("Products from localStorage:", products);
    handleRenderList(products);
}

export const handleRenderList = (productosIn) => {
    const burgers = productosIn.filter((el) => el.categories === "Hamburguesas");
    const papas = productosIn.filter((el) => el.categories === "Papas");
    const gaseosas = productosIn.filter((el) => el.categories === "Gaseosas");

    console.log("Burgers:", burgers);
    console.log("Papas:", papas);
    console.log("Gaseosas:", gaseosas);

    const renderProductGroup = (productos, title) => {
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return `
                <div class='containerTargetItem' id='product-${producto.categories}-${index}'>
                    <img src='${producto.imagen}'/>
                    <div class='targetProps'>
                        <h2>${producto.nombre}</h2>
                        <p><b>Precio:</b> $${producto.precio}</p>
                    </div>
                </div>
                `;
            });
            return `
            <section class='sectionStore'>
                <div class='containerTitleSection'>
                    <h3>${title}</h3>
                </div>
                <div class='containerProductStore'>
                    ${productosHTML.join("")}
                </div>
            </section>
            `;
        } else {
            return "";
        }
    };

    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosas, "Gaseosas")}
    `;

    const addEvents = (productsIn) => {
        productsIn.forEach((element, index) => {
            const productContainer = document.getElementById(`product-${element.categories}-${index}`);
            productContainer.addEventListener("click", () => {
                setProductoActivo(element);
                openModal();
            });
        });
    };

    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};

// Función para manejar el filtro por categoría
export const handleFilter = (categoria) => {
    const products = handleGetProductLocalStorage();
    setProductoActivo(null);

    switch (categoria) {
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el) => el.categories === categoria);
            handleRenderList(result);
            break;
        case "Mayorprecio":
            const resultMayorPrecio = products.sort((a, b) => b.precio - a.precio);
            handleRenderList(resultMayorPrecio);
            break;
        case "Menorprecio":
            const resultMenorPrecio = products.sort((a, b) => a.precio - b.precio);
            handleRenderList(resultMenorPrecio);
            break;
        default:
            handleRenderList(products);
            break;
    }
};
