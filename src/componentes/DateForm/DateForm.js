import React from 'react'
import DatePicker from 'react-date-picker'
import './dateform.scss'


export default class DateForm extends React.Component {

    render(){

        const {dateIncial , dateFinal , onSubmit, onchange } = this.props;
        return(
            <div className="contenedor">
                <form onSubmit={onSubmit} >
                    <div className="form">
                        <div className="fechas">
                            <label>Fecha Inicio: </label>
                            <DatePicker  
                            onChange={(date) => onchange(date, 'dateInicial')}
                            value={dateIncial}
                            className ="datepiker"
                            name="dateInicial"
                            />
                        </div>
                        <div className="fechas">
                            <label>Fecha Final: </label>
                            <DatePicker
                            onChange={(date) => onchange(date, 'dateFinal')}
                            value={dateFinal}
                            className ="datepiker"
                            name="dateFinal"
                             />
                        </div>
                        <button type="submit" className="btn" >
                            Aceptar
                        </button>
                    </div>
                </form>
            </div>
        )
    }
   
}

