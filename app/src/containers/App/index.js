import React, {Component} from 'react';

import Button from "../../components/Button";
import Input from '../../components/Input';
import List from '../../components/List';

class App extends Component{
  state = {
    input:''
  }

  handleOnClick  = () =>{
    console.log('clicou')
  }

  handleOnChange = event =>{
    this.setState({input: event.target.value})
  }

  render() {
    const {input} = this.state;
    return (
      <div>
        <List todoList={[]} />
        <Input onChange={event =>this.handleOnChange(event)} />
        <Button onClick={()=>this.handleOnClick()}>Adicionar</Button>
      </div>
    )
  }
}

export default App;