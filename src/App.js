import { Component } from "react";
import { gql, getApolloContext } from "@apollo/client";
import "./App.css";
const data = gql`
  {
    categories {
      products {
        id
        name
        inStock
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
        }
        brand
      }
    }
  }
`;
const ctx = getApolloContext();
class App extends Component {
  static contextType = ctx;
  state = {
    categories: [],
    cart: null,
    total: 0,
  };
  async componentDidMount() {
    this.setState({
      categories: (await this.context.client.query({ query: data })).data
        .categories,
    });
  }
  render() {
    return (
      <div>
        {this.state.categories.map((category) => (
          <ul key={category}>
            {category.products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        ))}
      </div>
    );
  }
}

export default App;
