import React from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const rejection = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, rejection);
  return (
    <>
      <button onClick={confirmDelete}>Delete the world</button>
    </>
  );
};
export default App;
