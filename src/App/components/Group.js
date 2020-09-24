import React, { Component } from 'react';
import './Group.scss';
import {autoGroup, getGroup} from "../utils/http";

class Group extends Component {
    state = {
        groups:[],
    }

    handleGroupTrainee() {
        autoGroup()
            .then(res =>
            this.setState({
                groups:res
            }))
            .catch(err => console.log(err))
    }

    GroupSection = (props) => {
        const { group } = props;
        return (
            <div className='group-section'>
                <div className="input-section">
                    <input className='group-name' defaultValue={group.name}></input>
                    <div className='group-teachers'>
                        {
                            group.trainerList.map((trainer) => (
                                <div key={trainer.id} className='group-teacher'>
                                    <label>{trainer.id}. </label>
                                    {trainer.name}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='group-students'>
                    {
                        group.traineeList.map((trainee) => (
                            <div key={trainee.id} className='group-student'>
                                <label>{trainee.id}. </label>
                                {trainee.name}
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="head">
                <div className="header">
                    <h1>分组列表</h1>
                    <button onClick={() => this.handleGroupTrainee()}>分组学员</button>
                </div>
                <main className="main">
                    {
                        this.state.groups.map((group) => (
                            <this.GroupSection group={group} key={group.name}/>
                        ))
                    }
                </main>
            </div>
        );
    }
}

export default Group;
