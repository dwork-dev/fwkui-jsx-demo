
const lsCSSdf = [
    "html,body,*{ font-family: 'Roboto', sans-serif;font-style: normal;line-height: 1.4;max-width:inherit;max-height:inherit;overflow:inherit;}",
    "input.TMA,select.TMA,textarea.TMA{border:1px solid #D9D9D9;}",
    "input.TMA,select.TMA,textarea.TMA{ padding: 0.65rem 1rem; border-radius: 0.3rem;}",
    "select.TMA{ -webkit-appearance: none;-moz-appearance: none;appearance: none; min-width:80px; background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ii8+PC9zdmc+') no-repeat right 8px center; background-size: 12px;background-color:#fff;}",
    "button.TMA{white-space:nowrap; border-radius: 5px;margin:auto 8px;padding: 0.5rem 1rem; font-size: 1rem; background-color: transparent;cursor: pointer;}",
    "button.TMA2{white-space:nowrap; border-radius: 5px;margin:auto 8px;padding: 4px 8px; font-size: 1rem; background-color: transparent;cursor: pointer;}",
    "button.Btn1{ border: 1px solid #004fad; color: #004fad;}",
    "button.Btn2{border: none; background-color: #004fad;color: #FFFFFF;}",
    "button.Btn3{ border: 1px solid rgb(255, 0, 0); color: rgb(255, 0, 0);}",
    "button.Btn4{border: 1px solid rgb(255, 0, 0);background-color:rgb(255, 0, 0);color: #FFFFFF;}",
    "button:disabled.Btn1{ border-color:#004fadb3; background-color: #f3f3f3;}",
    "button:disabled.Btn2{background-color:#004fadb3}",
    "td button.TMA{padding: 4px 8px;}",
    ".Row.TMA{margin:8px auto;}",
    ".Icon {font-family: 'icon'; font-weight: normal;font-style: normal; font-size: 24px;line-height: 1;letter-spacing: normal;text-transform: none;display: inline-block;white-space: nowrap; word-wrap: normal; direction: ltr; -webkit-font-smoothing: antialiased;}"
];
const  cssDefault = "@layer l0{"+lsCSSdf.join("")+"}";
export default cssDefault;