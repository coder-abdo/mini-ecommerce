import React, { Component } from "react";
import styles from "./styles.module.scss";
import ProductItems from "../productAttributes";
export default class ProductInCart extends Component {
  render() {
    const symbol = this.props.product.prices.filter(
      (price) => price.currency.symbol === this.props.symbol
    )[0];
    return (
      <div
        className={
          this.props.inCartPage ? styles.productInPage : styles.product
        }
      >
        <div
          className={
            this.props.inCartPage
              ? styles.productInPage__body
              : styles.product__body
          }
        >
          <div
            className={
              this.props.inCartPage
                ? styles.productInPage__description
                : styles.product__description
            }
          >
            <h3
              className={
                this.props.inCartPage
                  ? styles.productInPage__title
                  : styles.product__title
              }
            >
              {this.props.product.name}
            </h3>
            {this.props.inCartPage && (
              <div
                className={styles.productInPage__info}
                dangerouslySetInnerHTML={{
                  __html: this.props.product.description,
                }}
              ></div>
            )}
            <span
              className={
                this.props.inCartPage
                  ? styles.productInPage__price
                  : styles.product__price
              }
            >
              {symbol.currency.symbol}
              {symbol.amount}
            </span>
            <ProductItems
              attributes={this.props.product.attributes}
              inDetail={this.props.inCartPage}
            />
          </div>
          <div
            className={
              this.props.inCartPage
                ? styles.productInPage__amountContainer
                : styles["product__amount-container"]
            }
          >
            <button
              className={`${
                this.props.inCartPage ? styles.btnInCart : styles.btn
              } ${styles["btn--plus"]}`}
              onClick={() => this.props.increasAmount(this.props.product)}
            >
              +
            </button>
            <span
              className={
                this.props.inCartPage
                  ? styles.productInPage__quantity
                  : styles.product__quantity
              }
            >
              {this.props.product.quantity}
            </span>
            <button
              className={`${
                this.props.inCartPage ? styles.btnInCart : styles.btn
              } ${styles["btn--minus"]}`}
              onClick={() => this.props.decreasAmount(this.props.product)}
            >
              -
            </button>
          </div>
        </div>
        <div
          className={
            this.props.inCartPage
              ? styles.productInPage__img
              : styles.product__img
          }
        >
          <img
            src={this.props.product.gallery[0]}
            alt={this.props.product.name}
          />
        </div>
      </div>
    );
  }
}
