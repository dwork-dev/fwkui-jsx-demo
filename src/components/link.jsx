export const Link = (props) => {
  let {className="", to, children=[] } = props || {};
    return (
    <a href={to} className={className} onClick={(e) => {
      e.preventDefault();
      window.history.pushState({}, "", to);
      window.dispatchEvent(new Event("popstate"));
    }}>
      {children}
    </a>
    );
  };