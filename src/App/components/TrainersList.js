import React, { Component } from 'react';
import {addTrainer, fetchTrainers} from "../utils/http";
import './TrainerList.scss';

class TrainersList extends Component {
    state = {
        trainers: [],
        name:''
    }

    componentDidMount() {
        fetchTrainers()
            .then((response => {
                this.setState({
                    trainers:response
                })
            }))
            .catch(err => console.log(err))
    }

    handleInputNameChange = (event) => {
        this.setState({
            name:event.target.value
        })
    }

    handleAddTrainer = (event) => {
        event.preventDefault();
        if (event.keyCode === 13){
            addTrainer(this.state.name)
                .then(res => this.setState({
                    trainers:res,
                    name:''
                }))
                .catch(err => console.log(err))
        }
    }


    render() {
        return(
            <div id='trainers'>
                <h1>讲师列表</h1>
                <div className="trainerList">
                    {
                        this.state.trainers.map((trainer) => (
                                <div key={trainer.id} className="trainer">
                                    <label>{trainer.id}. </label>
                                    {trainer.name}
                                </div>
                            ))
                    }
                    <input
                        placeholder="+添加讲师"
                        className='input-name'
                        value={this.state.name}
                        onChange={this.handleInputNameChange}
                        onKeyUp={this.handleAddTrainer}
                    />
                </div>
            </div>
        )
    }
}

export default TrainersList;
