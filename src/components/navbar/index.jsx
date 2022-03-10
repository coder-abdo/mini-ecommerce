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
        <Categories
          cateogries={this.props.cateogries}
          chosen={this.props.category}
          handleClick={this.props.clickCategory}
        />
        <Logo />
        <div className={styles.actions}>
          <Currency
            currencies={this.props.currencies}
            isClicked={this.props.isClicked}
            chosen={this.props.chosen}
            handleClick={this.props.handleClick}
            toggleMenu={this.props.toggleMenu}
          />
          <div className="cart">
            <CartIcon />
          </div>
        </div>
      </nav>
    );
  }
}
