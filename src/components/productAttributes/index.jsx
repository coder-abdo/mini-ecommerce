import React, { Component } from "react";
import styles from "./style.module.scss";
export default class ProductAttributes extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles["btn-group"]}>
          {this.props.attributes.items.map((item) => {
            if (this.props.attributes.name === "Color") {
              return (
                <button
                  id={item.id}
                  style={{ backgroundColor: item.value }}
                  className={`${styles.btn} ${styles["btn--circle"]}`}
                />
              );
            } else {
              return <button id={item.id}>{item.displayValue}</button>;
            }
          })}
        </div>
      </div>
    );
  }
}
