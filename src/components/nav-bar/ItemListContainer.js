import React, { Component } from "react";
import { MenuItems } from "./MenuItems";

const ItemListContainer = () => {
  return (
    <nav className="nav-bar-navegacion">
      <ul className="nav-bar-list">
        {MenuItems.map((item) => {
          return (
            <li className="nav-bar-list-item" key={item.id}>
              <a href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ItemListContainer;
