import React from 'react'

const Contacto = () => {
  return (
    <div className='maincontainer'>
      <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>
         
        <label>Correo:</label>
            <input className='email' type="text" placeholder='ingrese su dirección'></input>
      
    
        <label>Descripción:</label>
            <input className='description' type="text" placeholder='Describa el pastel que desea'
            ></input>
        <div className='button'>
      <button>Enviar</button>
        
      </div> 
    </div>
  )
}
export default Contacto;