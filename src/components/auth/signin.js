import React, { Component } from 'react';

import SignInForm from './signinForm';
import PageTitle from '../pageTitle';

class SignIn extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='sign-in'>
                <SignInForm onSubmit={this.onSubmit} className='sign-in__form' />
                <PageTitle className='sign-in__page-title' title='Login' />
            </div>
        )
    }
}

export default SignIn;