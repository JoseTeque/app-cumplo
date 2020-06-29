import React from 'react'
import FaltalError from '../../images/500.png'

export default function FatalError(){
    return(
        <div className="text-center contenedor">
                <h1 className="Error_Text"> Error: 500 Inesperado Error</h1>    
                <img src={FaltalError} alt="500 error" className="Error_Image" />
                <div className="boton">
                    <a className="link" href="/">
                        <p>Recargar</p>
                    </a>
                 </div>
            </div>
    )
}