import { Component } from "react";
import { gql, getApolloContext } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageDetailsList from "./pages/PageDetailList";
import ProductDescription from "./pages/ProductDescription";
import Cart from "./pages/Cart";
import Navbar from "./components/navbar";
import styles from "./App.module.scss";
const data = gql`
  {
    categories {
      name
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
    currencies: [],
    cart: [],
    total: 0,
  };
  async componentDidMount() {
    this.setState({
      categories: (await this.context.client.query({ query: data })).data
        .categories,
      currencies: (await this.context.client.query({ query: currencies })).data
        .currencies,
    });
  }
  render() {
    return (
      <div className={styles.container}>
        <Navbar
          cateogries={this.state.categories}
          currencies={this.state.currencies}
        />
        <Router>
          <Switch>
            <Route exact path="/" component={PageDetailsList} />
            <Route path="/products/:id" component={ProductDescription} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
