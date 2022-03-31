import React, { Component } from "react";
import styles from "./styles.module.scss";
import ProductItems from "../productAttributes";
export default class ProductInCart extends Component {
  render() {
    const symbol = this.props.product.prices.filter(
      (price) => price.currency.symbol === this.props.symbol
    )[0];
    return (
      <div className={styles.product}>
        <div className={styles.product__body}>
          <div className={styles.product__description}>
            <h3 className={styles.product__title}>{this.props.product.name}</h3>
            <span className={styles.product__price}>
              {symbol.currency.symbol}
              {symbol.amount}
            </span>
            <ProductItems attributes={this.props.product.attributes} />
          </div>
          <div className={styles["product__amount-container"]}>
            <button
              className={`${styles.btn} ${styles["btn--plus"]}`}
              onClick={() => this.props.increasAmount(this.props.product)}
            >
              +
            </button>
            <span className={styles.product__quantity}>
              {this.props.product.quantity}
            </span>
            <button
              className={`${styles.btn} ${styles["btn--minus"]}`}
              onClick={() => this.props.decreasAmount(this.props.product)}
            >
              -
            </button>
          </div>
        </div>
        <div className={styles.product__img}>
          <img
            src={this.props.product.gallery[0]}
            alt={this.props.product.name}
          />
        </div>
      </div>
    );
  }
}
