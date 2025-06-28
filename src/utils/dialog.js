import $ from "./../fw.js";
let zIndex = 99;
export const modal = ({ closed = $.stateValue(false), title, content, width = 200, top= "20px", init = {}, cb = (d) => { } }) => {
    zIndex++;
    let w = typeof width === "number" ? width + "px" : width.trim();
    let topV = typeof top === "number" ? top + "px" : top.trim();
    let cssTop = ` t${topV} bAuto`;
    $.dialog({
        title: title || "Thông báo",
        content: content || "",
        close: closed,
        clsHeader: "fns1.5rem c--bg-top",
        clsBody: "my24px mh{calc(100vh;-;60px)} oflAuto",
        clsDialog: "p{32px;24px} w" + w + " z"+zIndex + cssTop,
    })
}

export const  toastInit = (msg, className = "") => {
     zIndex++;
    let close = $.stateValue(false);
    let sto = setTimeout(() => {
        close.value = true;
    }, 2000);
    $.dialog({
        close: close,
        isHeader: false,
        isModal: false,
        clsDialog: "mr10px b10px posF "+className + " z"+zIndex,
        content: $.div({ class: "dF jcSp miw200px mw300px" }, $.div(msg), $.span({
            class: "crP",
            onclick: () => {
                close.value = true;
                clearTimeout(sto);
            }
        }, "×"))


    });


}
export const toastError = (msg) => {
    toastInit(msg, "bgcRed cWhite");
}
export const toastSuccess = (msg) => {
    toastInit(msg, "bgc#004fad cWhite");
}


export const  alertMsg = ({ button= 'Cập nhật', okCb=() =>{}, errCb= () =>{}, title="", content="" }) =>{
    let closed=$.stateValue(false);
    let width = 457;
   let w = typeof width === "number" ? width + "px" :  width.trim();
   let cotentDialog =  $.tags["div"](
            {class:'dF fxdC jcSp'},
            $.tags["div"]({class:'my24px'}, content),
            $.tags["div"]({class:'dF aiC jcFe Btn-gp'},
                $.tags["button"]({class:'Cancel TMA Btn1', onclick:()=>{
                    closed.value=true;
                    errCb();
                }}, "Huỷ bỏ"),

                $.tags["button"]({class:'TMA Btn2', onclick:()=>{
                    if (typeof okCb === 'function') {
                        closed.value=true;
                        okCb();
                    }
                }}, button)
            )
         );
    $.dialog({
        title: title || "Thông báo",
        content: cotentDialog,
        close:closed,
        clsHeader: "fns1.5rem c--bg-top",
        clsBody:"my24px mh{calc(100vh;-;60px)} oflAuto",
        clsDialog:"p{32px;24px} mt30px w"+ w,
    })
   
   
  
}

export const openLoadding = (removeLoadding =$.stateValue(false)) => {
    const cssText = `
        @keyframes l26 {
        100% {transform:rotate(1turn)}}
        .Loader {
        width: 50px;
        aspect-ratio: 1;
        display:grid;
        -webkit-mask: conic-gradient(from 15deg,#0000,#000);
        animation: l26 1s infinite steps(12);
        }
        .Loader,
        .Loader:before,
        .Loader:after{
        background:
            radial-gradient(closest-side at 50% 12.5%, #f03355 96%, #0000) 50% 0 / 20% 80% repeat-y, radial-gradient(closest-side at 12.5% 50%, #0600ff 96%, #0000) 0 50% / 80% 20% repeat-x;
        }
        .Loader:before,
        .Loader:after {
        content: "";
        grid-area: 1/1;
        transform: rotate(30deg);
        }
        .Loader:after {
        transform: rotate(60deg);
        }

        `
    let bbody=  $.div( {class:"aiC bg#0000005e dF fxdC h100vh jcC posF w100vw z999"},
        $.style(cssText),
        $.div({ class: 'Loader' }),
    ) ;
    $.effect(() => {
        console.log(removeLoadding.value);
        if (removeLoadding.value) {
            bbody.remove();
        }
    })
    
    $.append(document.body, bbody);
}