import React, { Component } from "react";
import { gql, getApolloContext } from "@apollo/client";
import styles from "./style.module.scss";
import ProductAttributes from "../../components/productAttributes";
import { Link } from "react-router-dom";

const product = gql`
  query ($id: String!) {
    product(id: $id) {
      id
      name
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
`;
const ctx = getApolloContext();
export default class ProductDescription extends Component {
  static contextType = ctx;
  state = {
    product: {},
    loading: false,
    src: "",
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    console.log(
      await this.context.client.query({ query: product, variables: { id } })
    );
    const { data, loading } = await this.context.client.query({
      query: product,
      variables: { id },
    });
    this.setState({
      product: data.product,
      loading,
    });
  }
  changeImage = (e) => {
    console.log(e.target.src);
    this.setState({ src: e.target.src });
  };
  render() {
    const { symbol } = this.props;
    const priceAmount = this.state.product.prices?.filter(
      (currsymbol) => currsymbol.currency.symbol === symbol
    );
    return !this.state.loading ? (
      <>
        <main className={styles.product__container}>
          <aside className={styles.product__thumbnails}>
            {this.state.product.gallery?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumbnail${idx + 1}`}
                onClick={this.changeImage}
              />
            ))}
          </aside>
          <section className={styles.product__body}>
            <div className={styles.product__image}>
              <img
                src={
                  this.state.src
                    ? this.state.src
                    : this.state.product.gallery?.[0]
                }
                alt={this.state.product?.name}
              />
            </div>
            <div className={styles.product__description}>
              <h1 className={styles.product__title}>
                {this.state.product.name}
              </h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.product.description,
                }}
                className={styles.product__info}
              ></div>
              <ProductAttributes
                attributes={this.state.product?.attributes}
                inDetail
              />
              <div className={styles.product__price}>
                <h5 className={styles.product__price_text}>Price:</h5>
                {priceAmount?.map((item) => (
                  <h5 key={item.currency.symbol}>
                    {item.currency.symbol}
                    {item.amount}
                  </h5>
                ))}
              </div>
              <button
                className={styles.product__ctoBtn}
                onClick={() => this.props.addToCart(this.state.product)}
              >
                Add To Cart
              </button>
              <p className={styles.product__footer}>
                Find stunning {this.state.product?.brand}.Stand out in lace and
                metallic cocktail {this.state.product?.brand} from all your
                favorite brands.
              </p>
            </div>
          </section>
        </main>
        <Link className={styles.backBtn} to="/">
          back to products
        </Link>
      </>
    ) : (
      <div className={styles.loading}>loading...</div>
    );
  }
}
