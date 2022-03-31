import React, { Component } from "react";
import styles from "./style.module.scss";
export default class ProductAttributes extends Component {
  state = {
    chosen: false,
  };

  render() {
    const RenderItem = ({ name, items = [], inDetail }) => {
      if (name === "Color") {
        return (
          <div className={styles.attr__items}>
            {inDetail && <h4 className={styles.attr__name}>{name}</h4>}
            {items.map((item) => (
              <button
                key={item.id}
                style={{
                  backgroundColor: item.value,
                  width: inDetail ? "6.3rem" : "2.4rem",
                  height: inDetail ? "6.3rem" : "2.4rem",
                  border: item.value === "#FFFFFF" ? "1px solid #333" : "none",
                  marginRight: inDetail ? "1rem" : "0.3rem",
                }}
              />
            ))}
          </div>
        );
      } else {
        return (
          <div className={styles.attr__items}>
            {inDetail && <h4 className={styles.attr__name}>{name}</h4>}
            {items.map((item) => (
              <button
                key={item.id}
                className={inDetail ? styles.btnIndetail : styles.btn}
              >
                {item.displayValue}
              </button>
            ))}
          </div>
        );
      }
    };
    return (
      <div className={styles.container}>
        <div className={styles["btn-group"]}>
          {this.props.attributes?.map((attr) => (
            <RenderItem
              key={attr.id}
              name={attr.name}
              items={attr.items}
              inDetail={this.props.inDetail}
            />
          ))}
        </div>
      </div>
    );
  }
}
