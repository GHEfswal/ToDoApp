import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__row">
        <p className="footer__pending">You have 4 pending tasks</p>
        <button className="footer__clearall">Clear All</button>
      </div>
    </div>
  );
}
