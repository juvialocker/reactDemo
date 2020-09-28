import React from 'react';
import "./loginForm.css"

class loginForm extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleNameChange=this.handleNameChange.bind(this);
        this.state={
            pwd:"",
            name:"",
        }
    }

    handleSubmit(event){
        event.preventDefault();
        alert(`当前用户提交的姓名${this.state.name},密码${this.state.pwd}`)
    }
    handleNameChange(event){
        const name=this.inputName.value;
        this.setState({name});
    }
    handleChange(event){
        const pwd = event.target.value;
        this.setState({pwd});
    }
    render() {
        return (
            <div className="loginForm">
                <form action="/test" onSubmit={this.handleSubmit}>
                    用户名:<input type="text" ref={input => this.inputName = input} onChange={this.handleNameChange}/>
                    密码: <input type="password" value={this.state.value} onChange={this.handleChange}/>
                    <input type="submit" value="登录"/>
                </form>
            </div>
        )
    }
}
export default loginForm;
