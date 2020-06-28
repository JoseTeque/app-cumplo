import React from 'react'
import NotFoundImage from '../../images/404.png'
import './error.scss'

export default function NotFound(){
    return(
        <div className="text-center contenedor">
            <h1 className="Error_Text">Error: 404 No Encontrada</h1>    
            <img src={NotFoundImage} alt="400 error" className="Error_Image" />
        </div>
    )
}