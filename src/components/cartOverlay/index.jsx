import React, { Component } from "react";
import ProductInCart from "../productInCart";
import styles from "./style.module.scss";
export default class CartOverlay extends Component {
  // state = {
  //   total: 0,
  //   symbol: "$",
  // };
  // componentDidMount() {
  //   const { symbol } = this.props;
  //   const priceSymbol = this.props.cart.map((product) => {
  //     const price = product.prices
  //       .filter((price) => price.symbol === symbol)
  //       .map((price) => price.currency.symbol)[0];
  //     return price;
  //   })[0];
  //   const productsPricesAndQuantity = this.props.cart
  //     .map((product) => {
  //       const prices = product.prices
  //         .filter((price) => price.symbol === symbol)
  //         .map((price) => price.amount)[0];
  //       return { price: prices, quantity: product.quantity };
  //     })
  //     .map((product) => product.price * product.quantity);
  //   const total = productsPricesAndQuantity.reduce((prev, next) => prev + next);
  //   this.setState({
  //     symbol: priceSymbol,
  //     total,
  //   });
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps, prevState);
  // }
  render() {
    return (
      <div className={styles.cartoverlay}>
        <h2 className={styles.title}>
          <span className={styles["title--bold"]}>My Bag, </span>
          {
            this.props.cart.filter((product) => product.quantity >= 1).length
          }{" "}
          Items
        </h2>
        {this.props.cart.length > 0 ? (
          <>
            <div>
              {this.props.cart
                .filter((product) => product.quantity >= 1)
                .map((product) => (
                  <ProductInCart
                    key={product.id}
                    product={product}
                    symbol={this.props.currency}
                    increasAmount={() => this.props.increasAmount(product)}
                    decreasAmount={() => this.props.decreasAmount(product)}
                  />
                ))}
            </div>
            <div className={styles.total}>
              <h5 className={styles.total__title}>Total</h5>
              <h5 className={styles.total__amount}>
                {this.props.priceSymbol}
                {this.props.total?.toFixed(2)}
              </h5>
            </div>
            <div className={styles.btnContainer}>
              <a
                href="/cart"
                className={styles.btn}
                role="button"
                aria-label="button"
              >
                view bag
              </a>
              <a
                href="!#"
                role="button"
                className={styles.btn}
                aria-label="button"
              >
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
