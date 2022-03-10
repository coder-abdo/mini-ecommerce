import React, { Component } from "react";

export default class Currency extends Component {
  render() {
    return (
      <select name="currency" id="currency">
        {this.props.currencies.length > 0 ? (
          this.props.currencies.map((currency) => (
            <option key={currency.symbol} value={currency.symbol}>
              {currency.symbol} {currency.label}
            </option>
          ))
        ) : (
          <option value="$">USD</option>
        )}
      </select>
    );
  }
}
