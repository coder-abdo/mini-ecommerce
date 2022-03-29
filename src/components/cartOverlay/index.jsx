import React, { Component } from "react";
import Product from "../product";
import styles from "./style.module.scss";
export default class CartOverlay extends Component {
  render() {
    return (
      <div className={styles.cartoverlay}>
        {this.props.cart.length > 0 ? (
          <>
            <div>
              {this.props.cart.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  symbol={this.props.currency}
                  isInCart
                />
              ))}
            </div>
            <div className="total">
              <h5>Total</h5>
              <h5>{this.props.total}</h5>
            </div>
            <div className="btn-container">
              <a
                href="/cart"
                className="btn btn--success"
                role="button"
                aria-label="button"
              >
                view bag
              </a>
              <a href="!" role="button" aria-label="button">
                checkout
              </a>
            </div>
          </>
        ) : (
          <h3>no items yet</h3>
        )}
      </div>
    );
  }
}
