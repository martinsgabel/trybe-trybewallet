import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
  }

  render() {
    const { total } = this.state;
    const { email } = this.props;
    return (
      <div className="header">
        <div className="user-data">
          <p
            data-testid="email-field"
          >
            { email }
          </p>
        </div>
        <div className="wallet-data">
          <p data-testid="total-field">{ total }</p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: propTypes.string,
  currencies: propTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
