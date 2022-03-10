import React, { Component } from "react";
import CartIcon from "../cartIcon";
import Logo from "../logo";
import Currency from "../currency";
import styles from "./style.module.scss";
import Categories from "../categories";
export default class Navbar extends Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <Categories cateogries={this.props.cateogries} />
        <Logo />
        <div className={styles.actions}>
          <Currency currencies={this.props.currencies} />
          <div className="cart">
            <CartIcon />
          </div>
        </div>
      </nav>
    );
  }
}
