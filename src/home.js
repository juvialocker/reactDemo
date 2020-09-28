// 记录
// 1.在调用函数时,要使用this.addTodo = this.addTodo.bind(this);
// 2.在更新数组时,要使用this.setState({ todos })
// 3.在传递参数时,要使用Add.propTypes = {count: PropTypes.number.isRequired}

// 组件化编写的流程
// 1,拆分组件
// 2,实现静态组件(只有静态界面,没有动态数据和交互)
// 3,实现动态组件
//   (1)实现初始化数据动态显示
//   (2)实现交互功能
import React from "react"
import PropTypes from 'prop-types';
import './home.css';

// class home extends React.Component {
//   constructor(props) {
//     super(props)
//     //初始化状态
//     this.state = {todos: ["朱比亚", "露西", "蕾比"]}
//     this.addTodo = this.addTodo.bind(this);
//   }
//   addTodo(todo) {
//     const { todos } = this.state
// todos.unshift(todo);
//     this.setState({ todos })
//   }
//   render() {
//     const { todos } = this.state
//     return (
//       <div className="home">
//         <h1>simple todo list</h1>
//         <Add count={todos.length} addTodo={this.addTodo} />
//         <List todos={todos} />
//       </div>
//     )
//   }
// }
// class Add extends React.Component {
//   constructor(props) {
//     super(props)
//     this.add = this.add.bind(this)
//   }
//   add() {
//     // 1.读取输入的数据
//     const todo = this.todoInput.value.trim();
//     console.log(todo);
//     // 1.检查合法性
//     if (todo) {
//       this.props.addTodo(todo);
//     }
//     // 3.添加
//     // 4.清除
//     this.todoInput.value = "";
//   }
//   render() {
//     return (
//       <div>
//         <input type="text" ref={input => this.todoInput = input} />
//         <button onClick={this.add}>add #{this.props.count + 1}</button>
//       </div>
//     )
//   }
// }
// Add.propTypes = {
//   count: PropTypes.number.isRequired,
//   addTodo: PropTypes.func.isRequired
// }
// class List extends React.Component {
//   render() {
//     return (
//       <ul>
//         {
//           this.props.todos.map((item, index) => <li key={index}>{item}</li>)
//         }
//       </ul>
//     )
//   }
// }
// List.propTypes = {todos: PropTypes.array.isRequired }
class home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: ["朱比亚", "露西", "蕾比"]
    }
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(todo) {
    const { todos } = this.state;
    if (todos.includes(todo)) {
      alert(todo+"已存在")
    }else{
      todos.unshift(todo);
      this.setState({ todos });
    }
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="home">
        <h1>simple todo list</h1>
        <Add count={todos.length} addTodo={this.addTodo}/>
        <List todos={todos} />
      </div>
    )
  }
}
class Add extends React.Component {
  constructor(props) {
    super(props)
    this.add = this.add.bind(this)
  }
  add() {
    const todo = this.todoInput.value;
    if (todo) {
      this.props.addTodo(todo);
    }
    this.todoInput.value="";
  }
  render() {
    return (
      <div>
        <input type="text" ref={input => this.todoInput = input} />
        <button onClick={this.add}>add #{this.props.count + 1}</button>
      </div>
    )
  }
}
Add.propTypes = {
  count: PropTypes.number.isRequired,
  addTodo: PropTypes.func.isRequired
}
class List extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    )
  }
}
List.propTypes = { todos: PropTypes.array.isRequired }
export default home;