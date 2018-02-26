import * as React from "react";
import * as ReactDOM from "react-dom";
import User from "./components/user";

const App = () => (
  <div>
    <User
      name="Hiro"
      highlighted={false}
      userSelected={() => console.log('yay!')}
    />
    <User
      name="Kazu"
      highlighted={true}
      userSelected={() => console.log('yay!')}
    />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);