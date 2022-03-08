import React, { Component } from "react";
import CartIcon from "../cartIcon";
import Logo from "../logo";
import styles from "./style.module.scss";
export default class Navbar extends Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          {this.props.cateogries.length > 0 ? (
            this.props.cateogries.map((categroy) => (
              <li key={categroy.name} className={styles.list__item}>
                {categroy.name}
              </li>
            ))
          ) : (
            <li>all</li>
          )}
        </ul>
        <Logo />
        <div className={styles.actions}>
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
