import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import FormDespesas from './components/FormDespesas';
import Header from './components/Header';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount = () => {
    const { fetchCurrenciesProp } = this.props;
    fetchCurrenciesProp();
  }

  render() {
    return (
      <div>
        <Header />
        <FormDespesas />
      </div>
    );
  }
}

Wallet.propTypes = {
  fetchCurrenciesProp: propTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesProp: () => dispatch(fetchCurrencies()),
});

export default connect(null, mapDispatchToProps)(Wallet);
