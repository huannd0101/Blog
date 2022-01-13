import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ClientContent from "./components/ClientContent";
import AdminContent from "./components/AdminContent";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={AdminContent} />
        <Route path="/login" component={Login} />
        <Route path="/" component={ClientContent} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
