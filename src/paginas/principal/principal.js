import React from "react";
import Header from "../../componentes/header/Header";
import "./principal.scss";
import DateForm from "../../componentes/DateForm/DateForm";
import Grafica from "../../componentes/grafica/Grafica";
import moment from "moment";
import config from "../../config";

export default class App extends React.Component {
  state = {
    respuesta: [],
    fecha: [],
    valor: [],
    colores: [],
    data: {
      label: [],
      dataset: [],
    },
    opciones: {
      responsive: true,
      maintainAspectRatio: false,
    },
    maximo: 0,
    minimo: 0,
    promedio: 0,
    dateInicial: new Date(),
    dateFinal: new Date(),
    diaInicial: 0,
    mesInicial: 0,
    anoInicial: 0,
    diafinal: 0,
    mesfinal: 0,
    anofinal: 0,
  };

  async peticion() {
    try {
      let peticion = await fetch(
        `${config["url"]}/${this.state.anoInicial}/${this.state.mesInicial}/dias_i/${this.state.diaInicial}/${this.state.anofinal}/${this.state.mesfinal}/dias_f/${this.state.diafinal}?apikey=${config["apikey"]}&formato=json`
      );

      let respuesta = await peticion.json();
      let fechas = [],
        valores = [];
      this.setState({ respuesta: respuesta["Dolares"] });

      this.state.respuesta.map((elemento) => {
        fechas.push(elemento.Fecha);
        valores.push(parseFloat(elemento.Valor.replace(",", ".")));
      });

      this.setState({ fecha: fechas, valor: valores });
    } catch (error) {}
  }

  generarCaracter() {
    let caracter = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];
    let numero = (Math.random() * 15).toFixed(0);
    return caracter[numero];
  }

  colorHex() {
    var color = "";
    for (let i = 0; i < 6; i++) {
      color += this.generarCaracter();
    }
    return `#${color}`;
  }

  generarColores() {
    var colores = [];
    for (var i = 0; i < this.state.respuesta.length; i++) {
      colores.push(this.colorHex());
    }

    this.setState({ colores: colores });
  }

  configurarGrafica() {
    const data = {
      labels: this.state.fecha,
      datasets: [
        {
          data: this.state.valor,
          backgroundColor: this.state.colores,
          borderColor: this.state.colores,
          borderWidth: 2,
        },
      ],
      fontSize: 10,
    };
    const opciones = {
      responsive: true,
      title: {
        display: true,
        text: "RANGO DEL DÓLAR",
        fontSize: 18,
      },
      legend: {
        display: false,
      },
    };

    this.setState({ data: data, opciones: opciones });
  }

  calcularValores() {
    var promedio = 0;
    var maximo = 0;
    var minimo = 0;
    for (var i = 0; i < this.state.valor.length; i++) {
      promedio += this.state.valor[i];

      if (this.state.valor[i] > maximo) {
        maximo = this.state.valor[i];
        if (i == 0) {
          minimo = this.state.valor[i];
        }
      } else if (this.state.valor[i] < minimo) {
        minimo = this.state.valor[i];
      }
    }
    let resultadoPromedio = promedio / this.state.valor.length;
    let promedioDecimal = resultadoPromedio.toFixed(2);
    this.setState({
      promedio: promedioDecimal,
      maximo: maximo,
      minimo: minimo,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.peticion();
    await this.generarColores();
    await this.calcularValores();
    this.configurarGrafica();
  };

  handleChange = (date, name) => {
    if (name === "dateInicial") {
      this.setState({
        [name]: date,
        diaInicial: moment(date).format("DD"),
        mesInicial: moment(date).format("MM"),
        anoInicial: moment(date).format("YYYY"),
      });
    } else {
      this.setState({
        [name]: date,
        diafinal: moment(date).format("DD"),
        mesfinal: moment(date).format("MM"),
        anofinal: moment(date).format("YYYY"),
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <DateForm
          dateIncial={this.state.dateInicial}
          dateFinal={this.state.dateFinal}
          onSubmit={this.handleSubmit}
          onchange={this.handleChange}
        />
        <Grafica
          maximo={this.state.maximo}
          minimo={this.state.minimo}
          promedio={this.state.promedio}
          data={this.state.data}
          opciones={this.state.opciones}
        />
      </React.Fragment>
    );
  }
}