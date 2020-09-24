import React, { Component } from 'react';
import {addTrainee, fetchTrainees} from "../utils/http";
import './Trainlist.scss';

class TraineeList extends Component {
    state = {
        trainees:[],
        name:''
    }

    componentDidMount() {
        fetchTrainees()
            .then((response) => {
                this.setState({
                    trainees:response
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    handleNameChange = (event) => {
        this.setState({
            name:event.target.value,
        })
    }

    handleAddTrainee = (event) => {
        event.preventDefault();
        if (event.keyCode === 13){
            addTrainee(this.state.name)
                .then(date => this.setState({
                    trainees:date,
                    name:''
                }))
                .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <div id='main'>
                <h1>学员列表</h1>
                <div className='list'>
                    {
                        this.state.trainees.map((trainee) => (
                            <div key={trainee.id} className='trainee'>
                                <label>{trainee.id}. </label>
                                {trainee.name}
                            </div>
                        ))
                    }
                    <input
                        placeholder="+添加学员"
                        className='name-input'
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        onKeyUp={this.handleAddTrainee}
                    />
                </div>
            </div>
        )
    }
}

export default TraineeList;