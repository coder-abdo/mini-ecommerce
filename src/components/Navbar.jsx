import React, { Component } from "react";
import CartIcon from "./CartIcon";
import Logo from "./Logo";
export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          {this.props.cateogries.length > 0 ? (
            this.props.cateogries.map((categroy) => (
              <li key={categroy.name}>{categroy.name}</li>
            ))
          ) : (
            <li>all</li>
          )}
        </ul>
        <Logo />
        <div className="actions">
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
          <div className="cart">
            <CartIcon />
          </div>
        </div>
      </nav>
    );
  }
}
