/*
🛠️ **Building a Tabs Component with Active Tab and One Panel Display**

**Requirements:**

-  Clicking on a tab makes it the active tab.

-  Add a visual indication for the active tab to differentiate it from the non-active tabs, such as blue text color.

-  Only one panel's contents should be displayed at all times, which corresponds to the active tab.

**Notes:**

-  Functionality is the main focus, not styling. No custom CSS is necessary except for highlighting the active tab.

-  Markup modifications are allowed, such as adding **`id`**s or data attributes, and client-side rendering may be used instead.

-  Consider implementing user experience improvements to earn bonus credit during interviews.
*/
import { React, useState } from "react";

export default function Task() {
  const [activeTab, setActiveTab] = useState("HTML");
  const Tabs = [
    {
      label: "HTML",
      content: `The HyperText Markup Language or HTML is the standard markup
      language for documents designed to be displayed in a web browser.`
    },
    {
      label: "CSS",
      content: `Cascading Style Sheets is a style sheet language used for describing
      the presentation of a document written in a markup language such as
      HTML or XML.`
    },
    {
      label: "JavaScript",
      content: ` JavaScript, often abbreviated as JS, is a programming language that
      is one of the core technologies of the World Wide Web, alongside
      HTML and CSS.`
    }
  ];
  function onClickButton(key) {
    setActiveTab(key);
  }
  return (
    <div>
      <div>
        {Tabs.map((tab, index) => (
          <button
            key={index}
            className={activeTab === tab.label && "active"}
            onClick={() => onClickButton(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {Tabs.map(
        (tab, index) =>
          activeTab === tab.label && (
            <div key={index}>
              <p>{tab.content}</p>
            </div>
          )
      )}
    </div>
  );
}
