import React, { Component } from "react";
import styles from "./style.module.scss";
export default class Categories extends Component {
  render() {
    return (
      <ul className={styles.list}>
        {this.props.cateogries.length > 0 ? (
          this.props.cateogries.map((categroy) => (
            <li
              key={categroy.name}
              className={`${styles.list__item} ${
                this.props.chosen === categroy.name ? styles.active : ""
              }`}
              data-chosen={categroy.name}
              onClick={this.props.handleClick}
            >
              {categroy.name}
            </li>
          ))
        ) : (
          <li>all</li>
        )}
      </ul>
    );
  }
}
