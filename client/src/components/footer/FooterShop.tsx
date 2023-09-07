import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterShop() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/new" style={{ color: "rgb(71,98,87)" }}>
            New
          </Link>
        </li>
        <li>
          <Link to="/products" style={{ color: "rgb(71,98,87)" }}>
            All Jewellry
          </Link>
        </li>
        <li>
          <Link to="/favorites" style={{ color: "rgb(71,98,87)" }}>
            Our Favorites
          </Link>
        </li>
        <li>
          <Link to="/sale" style={{ color: "rgb(71,98,87)" }}>
            Sale
          </Link>
        </li>
      </ul>
    </div>
  );
}

