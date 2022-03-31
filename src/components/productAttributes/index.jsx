import React, { Component } from "react";
import styles from "./style.module.scss";
export default class ProductAttributes extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles["btn-group"]}>
          {this.props.attributes.map((attr) => {
            if (attr.name === "Color") {
              return attr.items.map((item) => (
                <button
                  key={item.id}
                  style={{
                    backgroundColor: item.value,
                    width: "2.4rem",
                    height: "2.4rem",
                    border:
                      item.value === "#FFFFFF" ? "1px solid #333" : "none",
                    marginRight: "0.3rem",
                    marginBottom: "0.2rem",
                  }}
                />
              ));
            } else {
              return attr.items.map((item) => (
                <button key={item.id} className={styles.btn}>
                  {item.displayValue}
                </button>
              ));
            }
          })}
        </div>
      </div>
    );
  }
}
