import React, { Component } from "react";
import Product from "../../components/product";
import styles from "./style.module.scss";
export default class PageDetailList extends Component {
  render() {
    return (
      <main className={styles.container}>
        <h1 className={styles.categoryname}>{this.props.category}</h1>
        <div className={styles.products}>
          {this.props.products
            .filter((product) =>
              this.props.category === "all"
                ? product
                : product.category === this.props.category
            )
            .map((product) => (
              <Product
                key={product.id}
                product={product}
                symbol={this.props.currency}
                addToCart={this.props.addToCart}
              />
            ))}
        </div>
      </main>
    );
  }
}
