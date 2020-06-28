import React from 'react'
import NotFoundImage from '../images/404.png'

export default function NotFound(){
    return(
        <div className="text-center">
            <h1 className="Error_Text">Error: 404 Pagina No Encontrada</h1>    
        <img src={NotFoundImage} alt="400 error" className="Error_Image" />
    </div>
    )
}