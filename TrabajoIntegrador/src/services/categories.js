import { handleFilter } from "../views/store";

export const renderCategorias = ()=> {
    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="Mayorprecio">Mayor Precio</li>
    <li id="Menorprecio">Menor Precio</li>
    `;

    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement)=>{
        liElement.addEventListener("click", ()=>{
            handleClick(liElement);
        });
    });

    const handleClick = (elemento) => {
        liElements.forEach((el)=>{
            if(el.classList.contains('liActive')){
                el.classList.remove("liActive")
            } else {
                if(elemento === el){
                    el.classList.add("liActive")
                }
            }
        });
        handleFilter(elemento.id);
    };
};
