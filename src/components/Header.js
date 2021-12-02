import React from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";

function Header({ title, onAdd, showAdd }) {
  const location = useLocation();
  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
        {location.pathname === "/" && (
          <Button
            onClick={onAdd}
            color={showAdd ? "red" : "green"}
            text={showAdd ? "Close" : "Add"}
          />
        )}
      </header>
    </div>
  );
}

export default Header;
