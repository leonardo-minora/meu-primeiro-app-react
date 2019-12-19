import React from 'react';
import logo from './logo.svg';

function TarefaLista(props) {
    const titulo = props.title;
    const dados = props.data;
    const {title, data} = props;
    console.log(props)
    return (
      <div>
        <p>
          {title}
        </p>

        <ul>
          {data.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    );
}

const Tarefa = (propriedades) => {
  return (<div>
    <p>{propriedades.title}</p>
    <input type="text" value={propriedades.text} onChange={propriedades.onChange}/>
    <button type="submit">Criar nova tarefa</button>
  </div>);
}

class App extends React.Component {
  state = {
    tarefas: [
      "Aula de componentes",
      "Aula sobre propriedades e estados",
      "Outra aula sobre UI"
    ],
    text: "Minha nova tarefa"
  };
  // constructor(props) {
  //   super(props);
  //   this.state = [];
  // }

  onChangeText(text) {
    this.setState({text});
  }

  render() {
    return (
      <div>
        <TarefaLista data={this.state.tarefas} title="Minha lista de tarefas" />
        <Tarefa 
          title="Nova tarefa" 
          text={this.state.text} 
          onChange={(text) => this.onChangeText(text)} />
      </div>
    );
  }
}

export default App;
