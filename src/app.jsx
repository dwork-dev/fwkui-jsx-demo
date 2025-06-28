
import $ from "./fw.js";
import css from "./css";
import { Router } from "./components/router";
import { Home } from "./pages/home.jsx";
$.start({css});
export const App =() => {
  const routes = [ 
    {path:"/flights/:from-:to", component: Home},
  ];

  return (
    <Router routes={routes} className="ABC" > </Router>
  );
}