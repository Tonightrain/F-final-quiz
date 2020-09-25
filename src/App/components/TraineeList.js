import React, { Component } from 'react';
import {addTrainee, fetchTrainees} from "../utils/http";
import './Trainlist.scss';
import { Modal } from "antd";

class TraineeList extends Component {
    // TODO Feedback: 组件中维护了这么多的state，本身就是bad smell，应该考虑提取组件
    state = {
        trainees:[],
        name:'',
        visible: false,
        nameValid:true,
        emailValid:true,
        emailFormatValid:true,
        officeValid:true,
        zoomIdValid:true,
        githubValid:true,
        trainee:{
            name:null,
            email:null,
            office:null,
            zoomId:null,
            github:null
        }
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

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    // TODO Feedback: 很多的handle方法，考虑提取方法去重
    handleName = (event) => {
        let trainee = this.state.trainee;
        trainee.name = event.target.value;
        this.setState({
            trainee
        })
    }

    handleEmail = (event) => {
        let trainee = this.state.trainee;
        trainee.email = event.target.value;
        this.setState({
            trainee
        })
    }

    handleOffice = (event) => {
        let trainee = this.state.trainee;
        trainee.office = event.target.value;
        this.setState({
            trainee
        })
    }

    handleZoomID = (event) => {
        let trainee = this.state.trainee;
        trainee.zoomId = event.target.value;
        this.setState({
            trainee
        })
    }

    handleGithub = (event) => {
        let trainee = this.state.trainee;
        trainee.github = event.target.value;
        this.setState({
            trainee
        })
    }

    handleValid = () => {
        // TODO Feedback: 长方法，很多重复
        this.state.trainee.name === null ? this.setState({
            nameValid:false,
        }) : this.setState({
            nameValid:true
        });

        this.state.trainee.email === null ? this.setState({
            emailValid:false,
        }) : this.setState({
            emailValid:true
        });

        this.state.trainee.office === null ? this.setState({
            officeValid:false,
        }) : this.setState({
            officeValid:true
        });

        this.state.trainee.zoomId === null ? this.setState({
            zoomIdValid:false,
        }) : this.setState({
            zoomIdValid:true
        });

        this.state.trainee.github === null ? this.setState({
            githubValid:false,
        }) : this.setState({
            githubValid:true
        });

        const emailFormat = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.]){1,2}[A-Za-z\d]{2,5}$/g;
        this.state.trainee.email.match(emailFormat) ? this.setState({
            emailFormatValid:true,
        }) : this.setState({
            emailFormatValid:false
        });
    }

    handleOk = (event) => {
        event.preventDefault();
        this.handleValid();
        addTrainee(this.state.trainee)
            .then(res => console.log(res))
    };

    componentDidUpdate() {
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

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        const validContent = "此项为必填";
        const emailFormatError = "邮箱格式错误";
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
                    <button
                        type="primary"
                        className="add-trainee"
                        onClick={this.showModal}
                    >+添加学员</button>
                    <Modal
                        title="添加学员"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <form className="add-form">
                            <label><span className="asterisk">*</span>姓名</label>
                            <input type="text" onChange={this.handleName}/>
                            {this.state.nameValid === false && (
                                <p className="valid">{validContent}</p>
                            )}
                            <label><span className="asterisk">*</span>邮箱</label>
                            <input type="text" onChange={this.handleEmail}/>
                            {this.state.emailValid === false && (
                                <p className="valid">{validContent}</p>
                            )}
                            {this.state.emailFormatValid === false && (
                                <p className="valid">{emailFormatError}</p>
                            )}
                            <label><span className="asterisk">*</span>办公室</label>
                            <input type="text" onChange={this.handleOffice}/>
                            {this.state.officeValid === false && (
                                <p className="valid">{validContent}</p>
                            )}
                            <label><span className="asterisk">*</span>Zoom ID</label>
                            <input type="text" onChange={this.handleZoomID}/>
                            {this.state.zoomIdValid === false && (
                                <p className="valid">{validContent}</p>
                            )}
                            <label><span className="asterisk">*</span>Github账号</label>
                            <input type="text" onChange={this.handleGithub}/>
                            {this.state.githubValid === false && (
                                <p className="valid">{validContent}</p>
                            )}
                        </form>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default TraineeList;




