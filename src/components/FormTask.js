import React, {Component} from 'react'

class FormTask extends Component{
   
    constructor(){
        super();
        this.state ={
            title: '',
            responsible:'',
            description:'',
            priority:'low'
        };
        this.handleinput = this.handleinput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleinput(e){ 
        const {value, name, description}= e.target;
        this.setState({
            [name]:value

        })
        console.log(this.state)

        }
        handleSubmit(e){
            e.preventDefault();
            this.props.addTarea(this.state)
            console.log('send data')
        }

    render(){
        return(
            <div className="card ">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <h1>Tabla de Tareas</h1>
                        <input
                        type="text"
                        name="title"
                        onChange={this.handleinput}
                        className="form-control"
                        placeholder="title"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        name="responsible"
                        onChange={this.handleinput}
                        className="form-control"
                        placeholder="responsible"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        name="description"
                        onChange={this.handleinput}
                        className="form-control"
                        placeholder="description"
                        />
                    </div>
                    <div className="form-group">
                        <select name="priority" className="form-control"
                            onChange={this.handleinput}>
                            <option>important</option>
                            <option>low</option>
                            <option>medium</option>

                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">SEND</button>
                </form>
            </div>
        )

        
    }
 }
export default FormTask;