import { Component } from "react";
import { gql, getApolloContext } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageDetailsList from "./pages/pageDetailsList";
import ProductDescription from "./pages/ProductDescription";
import Cart from "./pages/Cart";
import Navbar from "./components/navbar";
import styles from "./App.module.scss";
import Categories from "./components/categories";
import Currency from "./components/currency";
import Logo from "./components/logo";
import CartIcon from "./components/cartIcon";
import CartOverLay from "./components/cartOverlay";
const data = gql`
  {
    categories {
      name
    }
  }
`;
const products = gql`
  {
    categories {
      products {
        id
        name
        inStock
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        gallery
        category
        attributes {
          id
          name
          items {
            displayValue
            value
            id
          }
        }
      }
    }
  }
`;
const currencies = gql`
  {
    currencies {
      label
      symbol
    }
  }
`;
const ctx = getApolloContext();
class App extends Component {
  static contextType = ctx;
  state = {
    categories: [],
    category: "all",
    currencies: [],
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    products: [],
    total: 0,
    currency: "$",
    isClicked: false,
    showCart: false,
  };
  async componentDidMount() {
    this.setState({
      categories: (await this.context.client.query({ query: data })).data
        .categories,
      currencies: (await this.context.client.query({ query: currencies })).data
        .currencies,
      products: [
        ...new Set(
          (await this.context.client.query({ query: products })).data.categories
            .map((category) => category.products)
            .flat()
        ),
      ],
    });
  }

  handleClick = (e) => {
    this.setState({
      currency: e.target.dataset.currency,
      isClicked: false,
    });
  };
  toggleCartOverLay = (e) => {
    this.setState({
      showCart: !this.state.showCart,
    });
  };
  toggleMenu = (e) => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };
  clickCategory = (e) => {
    this.setState({
      category: e.target.dataset.chosen,
    });
  };
  addToCart = (product) => {
    const newProduct = { ...product, quantity: 1 };
    const existedProduct = this.state.cart.find(
      (proudct) => proudct.id === newProduct.id
    );
    if (existedProduct) {
      const newCart = this.state.cart.map((product) => {
        if (product.id === existedProduct.id) {
          product.quantity++;
        }
        return product;
      });
      localStorage.setItem("cart", JSON.stringify(newCart));
      this.setState({
        cart: newCart,
      });
    } else {
      this.setState({
        cart: [...this.state.cart, newProduct],
      });
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <Navbar>
          <Categories
            cateogries={this.state.categories}
            chosen={this.state.category}
            handleClick={this.clickCategory}
          />
          <Logo />
          <div className={styles.actions}>
            <Currency
              currencies={this.state.currencies}
              isClicked={this.state.isClicked}
              chosen={this.state.currency}
              handleClick={this.handleClick}
              toggleMenu={this.toggleMenu}
            />
            <div className="cart">
              <CartIcon
                withBadge
                count={
                  this.state.cart.length > 0
                    ? this.state.cart
                        .map((product) => product.quantity)
                        .reduce((prev, next) => prev + next)
                    : 0
                }
                handleClick={this.toggleCartOverLay}
              />
            </div>
          </div>
        </Navbar>
        {this.state.showCart && (
          <CartOverLay cart={this.state.cart} currency={this.state.currency} />
        )}
        <div className={this.state.showCart && styles.overlay} />
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <PageDetailsList
                  products={this.state.products}
                  currency={this.state.currency}
                  category={this.state.category}
                  addToCart={this.addToCart}
                />
              )}
            />
            <Route path="/products/:id" component={ProductDescription} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
