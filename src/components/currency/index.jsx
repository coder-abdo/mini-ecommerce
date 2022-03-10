import React, { Component } from "react";
import styles from "./style.module.scss";
export default class Currency extends Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <span className={styles.chosen}>{this.props.chosen}</span>

          <span className={styles.icon} onClick={this.props.toggleMenu}>
            {this.props.isClicked ? (
              <svg
                width="8"
                height="4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m1 3.5 3-3 3 3"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="8"
                height="4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m1 .5 3 3 3-3"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
        </div>

        <ul
          className={`${styles.currency} ${
            this.props.isClicked ? styles.show : styles.hidden
          }`}
        >
          {this.props.currencies.length > 0 ? (
            this.props.currencies.map((currency) => (
              <li
                key={currency.symbol}
                onClick={this.props.handleClick}
                className={styles.currency__item}
                data-currency={currency.symbol}
              >
                {currency.symbol} {currency.label}
              </li>
            ))
          ) : (
            <li>
              <span>$</span> <span>USD</span>
            </li>
          )}
        </ul>
      </>
    );
  }
}
