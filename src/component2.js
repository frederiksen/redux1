import React from 'react';
import { connect } from "react-redux";

class Component2 extends React.Component {
    render() {
        return (
            <div>
                <h2>Component2</h2>
                <p>Text: {this.props.txt} </p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { txt: state.txt };
};

export default connect(mapStateToProps)(Component2);