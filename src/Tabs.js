import { React, useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("HTML");
  const [active, setActive] = useState("");
  function onClickButton(key) {
    setActiveTab(key);
    if (key) setActive(key);
  }
  return (
    <div>
      <div>
        <button
          style={{ color: active === "HTML" ? "blue" : "black" }}
          onClick={() => onClickButton("HTML")}
        >
          HTML
        </button>
        <button
          style={{ color: active === "CSS" ? "blue" : "black" }}
          onClick={() => onClickButton("CSS")}
        >
          CSS
        </button>
        <button
          style={{ color: active === "JS" ? "blue" : "black" }}
          onClick={() => onClickButton("JS")}
        >
          JavaScript
        </button>
      </div>
      <div>
        {activeTab === "HTML" && (
          <p>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </p>
        )}
        {activeTab === "CSS" && (
          <p>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </p>
        )}
        {activeTab === "JS" && (
          <p>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </p>
        )}
      </div>
    </div>
  );
}
