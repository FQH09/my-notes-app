import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { login } from '../utils/network-data';
import Login from '../component/Login';

function LoginPage({ loginSuccess }) {
    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password});

        if (!error) {
            loginSuccess(data);
        }
    }

    return (
        <section className='page-login'>
            <h2>Silahkan Login</h2>
            <Login login={onLogin} />
            <p>Belum punya akun? <Link to="/register">Silahkan Daftar di sini.</Link></p>
        </section>
    );
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;