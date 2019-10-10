import React, { Component } from "react";

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      list: []
    }

    this.text = this.text.bind(this);
    this.keyPress = this.keyPress.bind(this);
  };

  text(e) {
    this.setState({ value: e.target.value });
  }

  keyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
     this.setState({
       list: this.state.list.concat([this.state.value]),
       value:""
     })
    
    }
  }

  render() {
    
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo" >
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            {this.state.list.map(elementList => {
            return <li key={`elementList_${elementList}`}>{elementList}</li>;
          })}
          </ul>
          <form>
            <input
              type="text"
              id="new-task"
              placeholder="Ingresa una tarea y oprime Enter"
              value={this.state.value}
              onKeyPress={this.keyPress}
              onChange={this.text} 
            />
          </form>
        </div>
      </div>
    );
  }
}


export default App;
