import { AppRegistry } from "react-native";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// register the app
AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  intialProps: {},
  rootTag: document.getElementById("root")
}); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
