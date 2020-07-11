import React from 'react';
import { connect } from "react-redux";
import { sendTxtAction } from "./app-redux"

class Component1 extends React.Component {
    cl = () => {
        let s = 'klokken er: ' + Date();
        this.props.sendTxtAction(s);
    }
    render() {
        return (
            <div>
                <h2>Component1</h2>
                <button onClick={this.cl}>Click</button>
            </div>
        );
    }
}

export default connect(null, { sendTxtAction })(Component1);