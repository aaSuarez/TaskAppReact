import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import {tasks} from './task.json'
import FormTask from './components/FormTask'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      title:'Titulo en el estado',
      tasks:tasks
    };
    this.AddTask = this.AddTask.bind(this);
  }
  

  AddTask(task){
    this.setState({
        tasks:[...this.state.tasks, task]
    })

}
Remove(index){
  this.setState({
    tasks:this.state.tasks.filter((e,i)=>{
      return i !== index
    })
  })
}
  render(){
  const tasks =  this.state.tasks.map((tasks,b)=>{
      return (
       <div className="col-md-4" key={b}>
              <div className="card mt-3">
                <div className="card-header">
                <h3>{tasks.title}</h3>
                <h4><strong>{tasks.responsible}</strong></h4>
      <span className="badge badge-danger"> {tasks.priority}</span>
              </div>
              <div className="card-body">
                  <p>{tasks.description}</p>
              </div >
              <div className="card-footer"> 
              <button className="btn btn-dark btn-md" onClick={this.Remove.bind(this,b)}>Remove</button>
              </div>
            </div>

       </div>
      )
    })
  return (
    <div className="App">
     <Navigation titulo={this.state.title} ntareas={this.state.tasks.length}/>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container m ">
          <div className="col-md-4"><FormTask addTarea={this.AddTask}/></div>
        
        </div>
    <div className="container">
    <div className="row">
      {tasks}
    </div>

    </div>
  
    
    </div>
  );
}
}

export default App;
