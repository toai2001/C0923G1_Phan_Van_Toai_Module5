import {Component} from "react";

export default class ToDo extends Component{
    constructor(props) {
        super(props);
        this.state={
            listTask:[
                {
                    id:1,
                    task:"Đi Học"
                },
                {
                    id:2,
                    task: "Đi Làm"
                }
            ],
            item:{},
            keyCounter:3
        };
    }
    handleChange = (event) => {
    this.setState({
        item:{
            id:this.state.keyCounter,
            task:event.target.value
        },
    });
    }
    handleAddItem = () => {
        this.setState(
            {
                ...this.state,
                listTask: [...this.state.listTask, this.state.item],
                keyCounter: this.state.keyCounter + 1
            })
    }
    render() {
        return <>
            <div className="container">
                <h2>TO DO APP</h2>
                <div className="mb-3">
                    <label htmlFor="inputToDo" className="form-label">Nhập công việc </label>
                    <br/>
                    <input type="text" className="form-control" id="inputToDo"
                           placeholder="Nhập công việc" onChange={this.handleChange}/>
                </div>
                <button className="btn btn-primary" onClick={this.handleAddItem}>Thêm công việc</button>
            </div>
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Công việc</th>
                    </tr>
                        </thead>
                    <tbody>
                    {this.state.listTask.map((value, index) => (
                        <tr key={value.id}>
                            <td>{index + 1}</td>
                            <td>{value.task}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    }
}