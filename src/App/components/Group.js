import React, { Component } from 'react';
import './Group.scss';
import {autoGroup, changeGroupName, getGroup} from "../utils/http";

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

    handleChangeGroupName = (event) => {
        event.preventDefault();
        if (event.keyCode === 13){

        }
    }

    handleChangeGroupName = (name, event) => {
      // TODO Feedback: 建议用解构
        let groups = this.state.groups
        if (event.keyCode === 13) {
            changeGroupName(name, event.target.value.trim())
                .then((res) => {
                    if (!res) {
                        this.setState({
                            groups: res
                        })
                    }
                    else {
                      // TODO Feedback: 不建议用reload去刷新页面，在React中页面的render是通过state的改变去触发的
                        location.reload();
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    GroupSection = (props) => {
        const { group } = props;
        return (
            <div className='group-section'>
                <div className="input-section">
                  {/*// TODO Feedback:不建议在这里bind this*/}
                  <input className='group-name' onKeyUp={this.handleChangeGroupName.bind(this, group.name)} defaultValue={group.name}></input>
                    <div className='group-teachers'>
                        {
                            group.trainerList.map((trainer) => (
                                <div key={trainer.id} className='group-teacher'>
                                  {/*// TODO Feedback:不应该使用label标签*/}
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
          // TODO Feedback: 语义标签使用不合理
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
