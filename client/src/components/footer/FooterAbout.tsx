import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterAbout() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/about" style={{ color: "rgb(71,98,87)" }}>
            Our Story
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: "rgb(71,98,87)" }}>
            Contact US
          </Link>
        </li>
        <li>
          <Link to="/stores" style={{ color: "rgb(71,98,87)" }}>
            Store
          </Link>
        </li>
        <li>
          <Link to="/careers" style={{ color: "rgb(71,98,87)" }}>
            Careers
          </Link>
        </li>
      </ul>
    </div>
  );
}
