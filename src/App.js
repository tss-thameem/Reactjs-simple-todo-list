import React,{Component} from 'react';
import './App.css';
import axios from 'axios';
import Loading from './Loading';
class App extends Component {
  state={
      todos:[]
  }
 async componentDidMount() {
    let result= await axios.get('https://jsonplaceholder.typicode.com/todos');
     await new Promise (x=>setTimeout(x , 3000));
    this.setState({
        todos: result.data
      })  
    console.log(result);

  }
  render() {
  return (
    <div className="container">
      {this.state.todos.length>0?(<div>{this.state.todos.map(todo=>
      <ul className="list-group">
  <li key={todo.id}  className="list-group-item d-flex justify-content-between align-items-center">
    {todo.title}
    <span className="">
    <input type ='checkbox' checked={todo.checked}/></span>
  </li>
  </ul>
  )}</div>):
      <Loading/>
      }  
    </div>
  );
}
}
export default App;
