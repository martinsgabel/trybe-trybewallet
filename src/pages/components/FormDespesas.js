import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { updateExpenses } from '../../actions';
import ratesAPI from '../../API/ratesAPI';

class FormDespesas extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      valor: 0,
      description: '',
      paymentMethod: '',
      currency: '',
      tag: '',
    };
  }

  editExpense = async () => {
    const { id, valor, description, paymentMethod, currency, tag } = this.state;
    const expense = {
      id,
      value: valor,
      description,
      currency,
      method: paymentMethod,
      tag,
      exchangeRates: await ratesAPI(),
    };

    this.saveObjectInExpenses(expense);
  }

  saveObjectInExpenses = (expense) => {
    const { saveExpense } = this.props;
    saveExpense(expense);
    this.setState((prev) => ({
      id: prev.id + 1,
      valor: 0,
      description: '',
      paymentMethod: '',
      currency: '',
      tag: '',
      // total: 0,
    }));
    // this.addToTotal();
  }

  // addToTotal = () => {
  //   const { expenses, updateTotalProps } = this.props;
  //   expenses.forEach((exp) => {
  //     this.setState((prevTotal) => ({
  //       total: prevTotal.total + exp.value,
  //     }));
  //   });

  //   const { total } = this.state;
  //   updateTotalProps(total);
  // }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { currencies } = this.props;
    const { valor, description, paymentMethod, currency, tag } = this.state;
    return (
      <div className="form-despesas">
        <form>
          <input
            data-testid="value-input"
            type="number"
            name="valor"
            placeholder="valor"
            value={ valor }
            onChange={ (e) => this.handleChange(e) }
          />
          <input
            data-testid="description-input"
            type="text"
            name="description"
            placeholder="description"
            value={ description }
            onChange={ (e) => this.handleChange(e) }
          />
          <label
            htmlFor="currency"
          >
            Moeda
            <select
              data-testid="currency-input"
              id="currency"
              name="currency"
              value={ currency }
              onChange={ (e) => this.handleChange(e) }
            >
              { currencies.map((curr, index) => (
                <option
                  key={ index }
                  value={ curr }
                  name="currency"
                >
                  { curr }
                </option>
              )) }
            </select>
          </label>
          <div>
            <p>Método de Pagamento</p>
            <select
              data-testid="method-input"
              name="paymentMethod"
              value={ paymentMethod }
              onChange={ (e) => this.handleChange(e) }
            >
              <option value="Dinheiro" name="paymentMethod">Dinheiro</option>
              <option value="Cartão de crédito" name="paymentMethod">
                Cartão de crédito
              </option>
              <option value="Cartão de débito" name="paymentMethod">
                Cartão de débito
              </option>
            </select>
          </div>
          <div>
            <p>Categoria</p>
            <select
              data-testid="tag-input"
              name="tag"
              value={ tag }
              onChange={ (e) => this.handleChange(e) }
            >
              <option value="Alimentação" name="tag">Alimentação</option>
              <option value="Lazer" name="tag">Lazer</option>
              <option value="Trabalho" name="tag">Trabalho</option>
              <option value="Transporte" name="tag">Transporte</option>
              <option value="Saúde" name="tag">Saúde</option>
            </select>
          </div>
          <div>
            <button
              type="button"
              onClick={ () => this.editExpense() }
            >
              Adicionar despesa
            </button>
          </div>
        </form>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (expense) => dispatch(updateExpenses(expense)),
  // updateTotalProps: (total) => dispatch(updateTotal(total)),
});

FormDespesas.propTypes = {
  currencies: propTypes.arrayOf(propTypes.string),
  saveExpense: propTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FormDespesas);
