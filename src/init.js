import React from 'react';
import { Link } from 'react-router-dom';

class Init extends React.Component {
    render() {
        return (
            <div>
                <Link to="/home">
                    <div>组件化</div>
                </Link>
                <Link to="/login">
                    <div>登录表单</div>
                </Link>
                <Link to="/lifecycle">
                    <div>生命周期</div>
                </Link>

            </div>
        )
    }
}
export default Init;
