import React, { Component } from "react";
import styles from "./style.module.scss";
export default class CartIcon extends Component {
  render() {
    return (
      <div className={styles.cart} onClick={this.props.handleClick}>
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M19.561 4.874a2.06 2.06 0 0 0-1.579-.745H5.16l-.4-1.49c-.232-.866-1.031-1.47-1.958-1.47H.653c-.358 0-.653.282-.653.624 0 .343.294.625.653.625h2.148a.69.69 0 0 1 .673.503l2.57 9.787c.231.866 1.03 1.47 1.958 1.47h8.4c.927 0 1.749-.604 1.96-1.47l1.579-6.202a1.786 1.786 0 0 0-.38-1.632Zm-.904 1.349-1.58 6.202a.69.69 0 0 1-.673.503H8.002a.69.69 0 0 1-.674-.504L5.496 5.399h12.487c.21 0 .421.1.548.261.126.16.188.362.126.564ZM8.444 14.981c-1.2 0-2.19.947-2.19 2.094 0 1.148.99 2.094 2.19 2.094s2.19-.946 2.19-2.093c0-1.148-.99-2.095-2.19-2.095Zm0 2.92c-.484 0-.863-.363-.863-.826 0-.463.379-.826.863-.826.485 0 .864.363.864.826 0 .444-.4.826-.864.826ZM15.688 14.981c-1.2 0-2.19.947-2.19 2.094 0 1.148.99 2.094 2.19 2.094s2.189-.946 2.189-2.094c-.02-1.147-.99-2.094-2.19-2.094Zm0 2.92c-.485 0-.864-.363-.864-.826 0-.463.38-.826.864-.826s.863.363.863.826c0 .444-.4.826-.863.826Z" />
          </g>
        </svg>
        {this.props.withBadge && this.props.count > 0 && (
          <span className={styles.cart__badge}>{this.props.count}</span>
        )}
      </div>
    );
  }
}
