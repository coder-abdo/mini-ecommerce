import React, { Component } from "react";
import ProductInCart from "../../components/productInCart";
import styles from "./style.module.scss";
export default class Cart extends Component {
  render() {
    return (
      <main className={styles.cart__container}>
        <h1 className={styles.cart__title}>cart</h1>
        {this.props.cart.length > 0 ? (
          <>
            <div className={styles.cart__products}>
              {this.props.cart
                .filter((product) => product.quantity >= 1)
                .map((product) => (
                  <ProductInCart
                    key={product.id}
                    product={product}
                    symbol={this.props.currency}
                    increasAmount={() => this.props.increasAmount(product)}
                    decreasAmount={() => this.props.decreasAmount(product)}
                    inCartPage
                  />
                ))}
            </div>
          </>
        ) : (
          <h3 className={styles.cart__noItems}>no items yet</h3>
        )}
      </main>
    );
  }
}
