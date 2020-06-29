import React from 'react'
import NotFoundImage from '../../images/404.png'
import './error.scss'


export default class  NotFound extends React.Component{


    render(){
        const { mensaje } = this.props;
        return(
            <div className="text-center contenedor">
                <h1 className="Error_Text">Error: 404 {mensaje}</h1>    
                <img src={NotFoundImage} alt="400 error" className="Error_Image" />
                <div className="boton">
                    <a className="link" href="/">
                        <p>Recargar</p>
                    </a>
                 </div>
            </div>
        )
    }
    
}