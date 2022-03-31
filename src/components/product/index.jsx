import React, { Component } from "react";
import CartIcon from "../cartIcon";
import styles from "./style.module.scss";
export default class Product extends Component {
  render() {
    const symbol = this.props.product.prices.filter(
      (price) => price.currency.symbol === this.props.symbol
    )[0];
    return (
      <div
        className={`${styles.product} ${
          this.props.product.inStock ? "" : styles["product--out"]
        } ${this.props.inCart ? "product--inCart" : ""}`}
      >
        <div className={styles.product__image}>
          <img
            src={this.props.product.gallery[0]}
            alt={this.props.product.name}
          />
        </div>
        <div className={styles.product__body}>
          <h3 className={styles.product__name}>{this.props.product.name}</h3>
          <h4 className={styles.product__price}>
            {symbol.currency.symbol}
            {symbol.amount}
          </h4>
        </div>
        {!this.props.product.inStock && (
          <h2 className={styles.product__outStock}>out of stock</h2>
        )}
        {this.props.product.inStock && (
          <div
            className={styles.product__cart}
            onClick={() => this.props.addToCart(this.props.product)}
          >
            <CartIcon />
          </div>
        )}
      </div>
    );
  }
}
