import React, { Component } from "react";
import styles from "./style.module.scss";
export default class Navbar extends Component {
  render() {
    return <nav className={styles.navbar}>{this.props.children}</nav>;
  }
}
