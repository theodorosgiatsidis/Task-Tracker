import React from "react";
import Button from "./Button";

function Header({ title, onAdd, showAdd }) {
  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
        <Button
          onClick={onAdd}
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
        />
      </header>
    </div>
  );
}

export default Header;
