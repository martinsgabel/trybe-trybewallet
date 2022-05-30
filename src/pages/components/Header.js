import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends React.Component {
  addToTotal = () => {
    const { expenses } = this.props;
    if (!expenses) {
      return (0);
    }
    const totalReduce = expenses.reduce((acc, num) => {
      const total = Number(num.exchangeRates[num.currency].ask) * Number(num.value);
      return acc + total;
    }, 0);
    return (
      totalReduce.toFixed(2)
    );
  }

  render() {
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
          <p data-testid="total-field">{ this.addToTotal() }</p>
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
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: propTypes.string,
  total: propTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Header);
