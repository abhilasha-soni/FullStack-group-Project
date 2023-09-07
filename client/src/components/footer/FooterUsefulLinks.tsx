import React from "react";
import { Link } from "react-router-dom";

export default function FooterUsefulLinks() {
  return (
    <div style={{ color: "rgb(71,98,87)" }}>
      <ul>
        <li>
          <a href="/termsofuse" style={{ color: "rgb(71,98,87)" }}>
            Terms of use
          </a>
        </li>
        <li>
          <a href="/privacy" style={{ color: "rgb(71,98,87)" }}>
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="/security" style={{ color: "rgb(71,98,87)" }}>
            Security
          </a>
        </li>
        <li>
          <a href="/return" style={{ color: "rgb(71,98,87)" }}>
            Return Policy
          </a>
        </li>
      </ul>
    </div>
  );
}
