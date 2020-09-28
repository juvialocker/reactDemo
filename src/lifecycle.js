import React from 'react';
import ReactDOM from 'react-dom';

class Lifecycle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "react太难了",
            opacity: 1
        }
        this.distroy = this.distroy.bind(this);
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            let { opacity } = this.state;
            opacity -= 0.1;
            if (opacity <= 0) {
                opacity = 1;
            }
            this.setState({ opacity })
        }, 200);
    }
    componentWillMount() {
        clearInterval(this.intervalId)
    }
    // 销毁组件
    distroy() {
        // console.log(document.getElementById("lifecycle"));
        // console.log(ReactDOM.unmountComponentAtNode);
        ReactDOM.unmountComponentAtNode(document.getElementById("lifecycle"));
    }
    render() {
        const { opacity } = this.state;
        return (
            <div id="lifecycle">
                <h2 style={{ opacity: opacity }}>{this.state.msg}</h2>
                <button onClick={this.distroy}>不活了</button>
            </div>
        )
    }
}
export default Lifecycle