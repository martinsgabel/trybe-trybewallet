import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { email, password } = this.state;
    this.setState({
      [target.name]: target.value,
    });
    if (target.name === 'email') {
      this.disablingButton(target.value, password);
    }
    if (target.name === 'password') {
      this.disablingButton(email, target.value);
    }
  }

  disablingButton = (email, password) => {
    const validLogs = this.validLogs(email, password);
    if (!validLogs) {
      this.setState({
        disabled: true,
      });
    } else {
      this.setState({
        disabled: false,
      });
    }
  }

  validLogs = (email, password) => {
    const six = 5;
    const format = /\S+@\S+\.\S+/;
    if (format.test(email) && password.length > six) { return true; }
    return false;
  }

  handleLogin = () => {
    const { email } = this.state;
    const { history, setUserInfo } = this.props;
    setUserInfo(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div className="login-page">
        <form>
          <input
            data-testid="email-input"
            type="email"
            placeholder="email"
            name="email"
            value={ email }
            onChange={ (e) => this.handleChange(e) }
          />
          <input
            data-testid="password-input"
            type="password"
            placeholder="password"
            name="password"
            value={ password }
            onChange={ (e) => this.handleChange(e) }
          />
          <button
            type="button"
            onClick={ this.handleLogin }
            disabled={ disabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserInfo: (email) => dispatch(saveEmail(email)),
});

Login.propTypes = {
  setUserInfo: propTypes.func.isRequired,
  history: propTypes.shape({
    push: propTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
