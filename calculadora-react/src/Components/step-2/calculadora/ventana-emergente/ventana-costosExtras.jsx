import React, { Component } from "react";
import "../Styles/ventana-costos-extras.css";
import { connect } from "react-redux";
import { modificarCostosExtras } from "../../../../Reducers/inputs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faPenToSquare,
  faDollarSign,
  faCirclePlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const CSS = {
  boxCosto: {
    padding: "3px 20px",
    borderRadius: 15,
    margin: "15px 0",
    boxShadow: "0px 1px 4px rgba(64, 64, 64, 0.23)",
    backgroundColor: "white",
    alignItems: "center",
    display: "flex",
  },
  inputCosto: {
    height: 25,
    fontSize: 15,
    border: "none",
    color: "#464646",
  },
  btnAgregar: {
    backgroundColor: "#FC4D19",
    color: "white",
    width: "156px",
    height: "40px",
    border: "none",
    fontSize: 18,
    cursor: "pointer",
  },
  btnRegresar: {
    fontSize: 25,
    color: "#FFFFFF",
    cursor: "pointer",
    position: "absolute",
    top: 10,
    left: 10,
  },
};

class VentanaCostosExtras extends Component {
  constructor(props) {
    super(props);
    this.state = {
      costosExtras: [{}],
    };
  }
  componentDidMount() {
    const { actualizarCostosExtras } = this.props;
    this.setState(() => ({
      costosExtras: actualizarCostosExtras.map(({ ...value }) => {
        return value;
      }),
    }));
  }

  render() {
    const { openVentanaCostosExtras, index, modificarCostosExtras } =
      this.props;
    const { costosExtras } = this.state;
    const agregarCosto = () => {
      this.setState((state) => ({
        costosExtras: [
          ...state.costosExtras,
          {
            nombreExtra: "",
            precioExtra: 0,
          },
        ],
      }));
    };
    const eliminarCosto = (i) => {
      const elemento = [...costosExtras];
      elemento.splice(i, 1);
      this.setState(() => ({
        costosExtras: elemento,
      }));
    };
    const handleChangeNombre = (newValue, i) => {
      const elemento = [...costosExtras];
      const procesoComunValor = elemento[i];
      procesoComunValor.nombreExtra = newValue;
      this.setState(() => ({
        costosExtras: elemento,
      }));
    };

    const regresar = () => () => {
      modificarCostosExtras(index, [...costosExtras]);
      openVentanaCostosExtras();
    };

    const eliminar = (i) => () => {
      if (costosExtras.length > 1) eliminarCosto(i);
      else alert("No se puede eliminar el último costo extra");
    };

    const handleChangePrecio = (newValue, i) => {
      const elemento = [...costosExtras];
      const procesoComunValor = elemento[i];
      if (newValue === "") {
        newValue = 0;
      }
      procesoComunValor.precioExtra = parseInt(newValue);
      this.setState(() => ({
        costosExtras: elemento,
      }));
    };
    const agregar = () => () => {
      agregarCosto();
    };
    return (
      <>
        <div
          style={{
            backgroundColor: "#FC4D19",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 68,
          }}
        >
          <FontAwesomeIcon
            style={CSS.btnRegresar}
            onClick={regresar()}
            icon={faChevronCircleLeft}
          />
          <h2
            style={{
              color: "white",
              fontSize: 25,
              margin: "28px 0px 0px 50px",
            }}
          >
            Costos extras
          </h2>
        </div>
        <div style={{ marginTop: 95 }}>
          {costosExtras.map((data, i) => {
            let key = "costoExtra" + i;
            return (
              <div style={CSS.boxCosto} className="boxCosto" key={key}>
                <div>
                  <section style={{ display: "flex", marginTop: 5 }}>
                    <FontAwesomeIcon
                      style={{ color: "#FF0015", marginTop: 3, marginRight: 5 }}
                      icon={faPenToSquare}
                    />
                    <input
                      onChange={(e) => handleChangeNombre(e.target.value, i)}
                      value={data.nombreExtra}
                      placeholder="Click aquí para escribir"
                      className="nombreCostoExtra"
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        marginBottom: 2,
                      }}
                      type="text"
                    />
                  </section>
                  <section style={{ display: "flex", alignItems: "center" }}>
                    <FontAwesomeIcon
                      style={{
                        fontSize: 16,
                        color: "#05BE50",
                        marginRight: 15,
                      }}
                      icon={faDollarSign}
                    />
                    <input
                      onChange={(e) => handleChangePrecio(e.target.value, i)}
                      value={data.precioExtra}
                      placeholder="0.00"
                      style={{
                        ...CSS.inputCosto,
                        width: "100%",
                        boxSizing: "border-box",
                      }}
                      type="number"
                    />
                  </section>
                </div>
                <FontAwesomeIcon
                  onClick={eliminar(i)}
                  icon={faTrash}
                  style={{
                    color: "#BC0017",
                    fontSize: 23,
                    marginLeft: 15,
                    cursor: "pointer",
                  }}
                />
              </div>
            );
          })}
          <div
            style={{ width: "100%", display: "flex", justifyContent: "end" }}
          >
            <FontAwesomeIcon
              icon={faCirclePlus}
              onClick={agregar()}
              style={{ color: "#05BE50", fontSize: 50, cursor: "pointer" }}
            />
          </div>
        </div>
      </>
    );
  }
}

//COLOCAR MAP STATE TO PROPS PARA INICIAR

const mapDispatchToProps = (dispatch) => ({
  modificarCostosExtras: (index, valores) =>
    dispatch(modificarCostosExtras(index, valores)),
});

export default connect(null, mapDispatchToProps)(VentanaCostosExtras);
