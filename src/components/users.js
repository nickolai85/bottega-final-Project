import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Users extends Component {
    componentDidMount() {
        this.props.fetchUsers();
        console.log(this.props.fetchUsers());
    }
    render() {
        const { className, title } = this.props;
        return (
            <div>
             Test
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return {
        cartProducts
    }
}

function mapStateToProps(state) {
    const{ user } = state.user;
    return {
        user
    }
}

Users = connect(mapStateToProps, actions)(Users);

export default Users;