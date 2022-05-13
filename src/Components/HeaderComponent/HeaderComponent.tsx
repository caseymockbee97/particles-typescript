import React from "react";
import "./styles.css";

export default function HeaderComponent() {
  const pageTitle = "Web Aquatic";
  return (
    <header className="header">
      <h1 className="title">{pageTitle}</h1>
    </header>
  );
}
