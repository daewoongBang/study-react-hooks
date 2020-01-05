import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    chageItem: setCurrentIndex
  };
};

const App = () => {
  const { currentItem, chageItem } = useTabs(0, content);
  return (
    <>
      {content.map((section, index) => (
        <button onClick={() => chageItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </>
  );
};
export default App;
