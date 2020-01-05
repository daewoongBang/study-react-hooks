import React from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

function App() {
  const triggerNotif = useNotification("Can I Steal your car?", {
    body: "I love your car!!!"
  });
  return (
    <div className="App">
      <h1>Hello!</h1>
      <button onClick={triggerNotif}>steal car</button>
    </div>
  );
}

export default App;
