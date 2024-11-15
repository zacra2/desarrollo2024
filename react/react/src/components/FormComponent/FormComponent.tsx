import { useForm } from "../../hooks/useForm";


export const FormComponent = () => {
    const {values,handleChange,resetForm} = useForm({
        email:'',
        nombre:'',
        edad:0,
    })
 
    const {email, nombre, edad} = values;

    const handleSubmitForm = () => {
        console.log(values);
    }

    const handleResetForm = () => {
        resetForm();
    }

  return (
    <div>
        <div>
          <h2>Formulario</h2>  
        </div> 
        <div style={{display: "flex", flexDirection: "column", gap:'2vh'}}>
            <input value={email} name="email" onChange={handleChange} type="email" placeholder="example@example.com" />
            <input value={nombre} name="nombre" onChange={handleChange} type="text" placeholder="Nombre" />
            <input value={edad} name="edad" onChange={handleChange} type="number" placeholder="Edad" />
        </div>   
        <div>
            <button onClick={handleSubmitForm}>Enviar</button>
            <button onClick={handleResetForm}>Resetear</button>

        </div>
        
        
    
    
    </div>
  )
}
