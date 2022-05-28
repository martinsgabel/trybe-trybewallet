import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class FormDespesas extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      description: '',
      paymentMethod: '',
      currency: '',
      tag: '',
    };
  }

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
            onChange={ this.handleChange }
          />
          <input
            data-testid="description-input"
            type="text"
            name="description"
            placeholder="description"
            value={ description }
            onChange={ this.handleChange }
          />
          <label
            htmlFor="currencies"
          >
            Moeda
            <select
              data-testid="currency-input"
              id="currencies"
              name="currencies"
              value={ currency }
              onChange={ this.handleChange }
            >
              { currencies.map((curr, index) => (
                <option
                  key={ index }
                  value={ curr }
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
              value={ paymentMethod }
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Crédito">Cartão de crédito</option>
              <option value="Débito">Cartão de débito</option>
            </select>
          </div>
          <div>
            <p>Categoria</p>
            <select
              data-testid="tag-input"
              name="categoria"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </div>
          <div>
            <button type="button">
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
});

FormDespesas.propTypes = {
  currencies: propTypes.arrayOf(propTypes.string),
}.isRequired;

export default connect(mapStateToProps)(FormDespesas);
