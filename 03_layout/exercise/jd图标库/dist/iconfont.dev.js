"use strict";

!function (e) {
  var t,
      _n,
      o,
      i,
      a,
      c = '<svg><symbol id="icon-sousuo1" viewBox="0 0 1024 1024"><path d="M471.99999969 752c-156 0-280.00000031-124.00000031-279.99999938-280.00000031s124.00000031-280.00000031 279.99999938-279.99999938 280.00000031 124.00000031 280.00000031 279.99999938-124.00000031 280.00000031-280.00000031 280.00000031z m0-79.99999969c112.00000031 0 199.99999969-88.00000031 200.00000062-200.00000062s-88.00000031-199.99999969-200.00000062-199.99999969-199.99999969 88.00000031-199.99999969 199.99999969 88.00000031 199.99999969 199.99999969 200.00000062z m236.00000062 0l111.99999938 111.99999938-55.99999969 56.00000062-112.00000031-112.00000031 56.00000062-55.99999969z" fill="#d81e06" ></path></symbol><symbol id="icon-jingdong_" viewBox="0 0 1024 1024"><path d="M81.92 0h860.16a81.92 81.92 0 0 1 81.92 81.92v860.16a81.92 81.92 0 0 1-81.92 81.92H81.92a81.92 81.92 0 0 1-81.92-81.92V81.92a81.92 81.92 0 0 1 81.92-81.92z" fill="#d81e06" ></path><path d="M384 239.0016h-75.776v329.5232a258.8672 258.8672 0 0 1-7.9872 78.6432 61.44 61.44 0 0 1-25.6 37.2736 132.3008 132.3008 0 0 1-50.5856 24.3712L154.624 716.8v68.1984h6.3488l97.4848-12.9024a225.28 225.28 0 0 0 72.4992-35.84c35.4304-31.3344 54.0672-78.6432 54.0672-141.9264zM870.4 512a325.4272 325.4272 0 0 0-20.48-118.9888A224.0512 224.0512 0 0 0 792.576 307.2c-51.6096-44.8512-125.952-67.584-223.4368-67.584h-111.2064v545.3824h111.2064c97.4848 0 171.8272-23.7568 223.4368-69.632a198.656 198.656 0 0 0 58.1632-85.1968A317.8496 317.8496 0 0 0 870.4 512z m-126.976-155.4432a139.264 139.264 0 0 1 39.3216 63.6928 266.24 266.24 0 0 1 14.7456 91.7504 252.3136 252.3136 0 0 1-14.7456 89.4976 133.12 133.12 0 0 1-39.3216 63.6928C706.56 700.416 650.8544 716.8 577.9456 716.8h-48.128V305.152h48.128c72.9088 0 128.6144 17.408 165.4784 52.224z" fill="#FFFFFF" ></path></symbol></svg>',
      d = (d = document.getElementsByTagName("script"))[d.length - 1].getAttribute("data-injectcss"),
      l = function l(e, t) {
    t.parentNode.insertBefore(e, t);
  };

  if (d && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e);
    }
  }

  function s() {
    a || (a = !0, o());
  }

  function r() {
    try {
      i.documentElement.doScroll("left");
    } catch (e) {
      return void setTimeout(r, 50);
    }

    s();
  }

  t = function t() {
    var e,
        t = document.createElement("div");
    t.innerHTML = c, c = null, (t = t.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", t = t, (e = document.body).firstChild ? l(t, e.firstChild) : e.appendChild(t));
  }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(t, 0) : (_n = function n() {
    document.removeEventListener("DOMContentLoaded", _n, !1), t();
  }, document.addEventListener("DOMContentLoaded", _n, !1)) : document.attachEvent && (o = t, i = e.document, a = !1, r(), i.onreadystatechange = function () {
    "complete" == i.readyState && (i.onreadystatechange = null, s());
  });
}(window);