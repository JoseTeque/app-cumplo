import React from 'react'
import { Bar } from 'react-chartjs-2'
import './grafica.scss'

class Grafica extends React.Component{
    render(){
        const {data, opciones , maximo , minimo , promedio} = this.props;
        return(
                 <div className="grafica"  >

                        <Bar  data={data}  options={opciones}/>

                    <div className="resultados">
                        <div className="contenido-resultados">
                            <p >Valor Máximo: <span> $ {maximo}</span></p>
                        </div>
                        <div className="contenido-resultados">

                            <p>Valor Mínimo: <span>$ {minimo}</span></p>
                        </div>
                        <div className="contenido-resultados">

                            <p>Valor Promedio: <span>$ {promedio}</span></p>
                        </div>
                    </div>
                </div>

        )
    }
}

export default Grafica