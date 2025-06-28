import $ from "../../fw.js";
import { pathMatch } from "./path-regex.js";
const Redirect = ({ to }) => {
  window.history.pushState({}, "", to);
  window.dispatchEvent(new Event("popstate"));

}
const getCurrentPath = () => window.location.pathname;
const eventPopState = (dom, { routes }) => {
  window.addEventListener("popstate", () => {
    renderApp(dom, { routes });
  });
}
const matchRoute = (pathUrl) => {
  let pathname = getCurrentPath();
  console.log(34, pathUrl, pathname);
  let m = pathMatch(pathUrl)(pathname);
  if (m.path == pathUrl || Object.keys(m.params).length > 0) {
    return m;
  }
  return null;
}
const renderApp = async (appDom, props = { routes: [] }) => {
  var content = <div>NoContent</div>;
  const routes = props.routes;
  let app = appDom || document.querySelector("#root");

  const mRouter = routes.map(r => ({ ...r, match: matchRoute(r.path) })).filter(f => f.match)[0];
  if (mRouter) {
    content = $.h(mRouter.component, { params: mRouter.params });
  }
  app.innerHTML = "";
  $.append(app, content);
};


// Component Router
export const Router = async (props = { className: "", routes: [] }) => {

  let routes = props.routes;
  if ((props.className || props?.class) && props.refDom) {
    props.refDom.className = props.className || props?.class;
  }
  eventPopState(props.refDom, { routes });
  var content = <div>NoContent</div>;
  try {
    const mRouter = routes.map(r => ({ ...r, match: matchRoute(r.path) })).filter(f => f.match)[0];
    if (mRouter) {
      content = $.h(mRouter.component, { params: mRouter.params });
    }
    return content;
  } catch (error) {
    console.log("Error in Router:", error);
  }
  finally {
    return content;
  }


};


export { eventPopState, Redirect };