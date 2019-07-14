import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    let latitute;

    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        latitute = position.coords.latitude;
      },
      error => console.log(error)
    );

    return <div>Latitude: {latitute}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
