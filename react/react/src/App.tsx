
import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect"
import { ComponetCounter } from "./components/ComponetCounter/ComponetCounter"
import { FormComponent } from "./components/FormComponent/FormComponent"
import { AppProduct } from "./components/Appproduct/AppProduct"


export const App = () => {
   


  return (
    <div style={{display:'flex',flexDirection:'column',gap:"2vh"}}>   
    
    
    {/*< MiPrimerComponent text={"texto desde propiedades"} color= "red" fontSize={5} />    
    
     <ComponetCounter/>

     <ComponentUseEffect/>
    <FormComponent/>*/}

    
      <AppProduct/>
    
    
    </div>
    

  )
}
