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
                    />
                </div>
            </div>
        )
    }
}

export default TraineeList;