import { m as n, T as l, d as c, C as u } from "./index.8ca336c3.js";
window.Alpine = n;
n.data("SetupForm", () => ({
  init() {
    this.$root.querySelectorAll("input").forEach((e) => {
      e.addEventListener("keypress", (t) => {
        t.key == "Enter" &&
          (t.preventDefault(),
          t.target
            .closest(".tab-pane")
            .querySelector("button[data-href]")
            .click());
      }),
        e.addEventListener("change", (t) => {
          t.target.checkValidity() === !1
            ? t.target.classList.add("input-filled-invalid")
            : t.target.classList.remove("input-filled-invalid");
        });
    }),
      window.addEventListener("storage", function (e) {
        e.key == "integrations" &&
          e.newValue &&
          JSON.parse(e.newValue).name == "mlc" &&
          ($("#integration-mlc")
            .text("Already Configured")
            .attr("disabled", !0),
          window.focus(),
          localStorage.removeItem("integrations"));
      });
  },
  validateFileSize(e, t) {
    e.target.files[0].size > t &&
      (confirm(
        `This image file is larger than ${
          t / 1e3
        }KB which may result in increased load times. Are you sure you'd like to use this file?`
      ) ||
        (e.target.value = ""));
  },
  switchTab(e) {
    let t = !0;
    if (
      (e.target
        .closest('[role="tabpanel"]')
        .querySelectorAll("input,textarea")
        .forEach((i) => {
          i.checkValidity() === !1 &&
            (i.classList.add("input-filled-invalid"), (t = !1));
        }),
      t == !1)
    )
      return;
    let r = e.target.dataset.href,
      o = this.$root.querySelector(`[data-bs-target="${r}"]`);
    l.getOrCreateInstance(o).show();
  },
  setThemeColor(e) {
    document.querySelector("#config-color-input").value = e.target.value;
  },
  resetThemeColor(e) {
    (document.querySelector("#config-color-input").value = ""),
      (document.querySelector("#config-color-picker").value = "");
  },
  processDateTime(e) {
    return function (t) {
      let a = document.querySelector(`#${e}-date`),
        r = document.querySelector(`#${e}-time`),
        o = c(`${a.value} ${r.value}`, "YYYY-MM-DD HH:mm").unix();
      isNaN(o)
        ? (document.querySelector(`#${e}-preview`).value = "")
        : (document.querySelector(`#${e}-preview`).value = o);
    };
  },
  mlcSetup() {
    let e = u.config.urlRoot,
      t = {
        name: document.querySelector("#ctf_name").value,
        type: "jeopardy",
        description: document.querySelector("#ctf_description").value,
        user_mode: document.querySelector("[name=user_mode]:checked").value,
        event_url: window.location.origin + e,
        redirect_url: window.location.origin + e + "/redirect",
        integration_setup_url:
          window.location.origin + e + "/setup/integrations",
        start: document.querySelector("#start-preview").value,
        end: document.querySelector("#end-preview").value,
        platform: "CTFd",
        state: window.STATE,
      };
    const a = [];
    for (let r in t)
      a.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
    window.open(
      "https://www.majorleaguecyber.org/events/new?" + a.join("&"),
      "_blank"
    );
  },
  submitSetup(e) {
    if (document.querySelector("#newsletter-checkbox").checked) {
      let r = {
        email: e.target.querySelector("input[name=email]").value,
        b_38e27f7d496889133d2214208_d7c3ed71f9: "",
        c: "jsonp_callback_" + Math.round(1e4 * Math.random()),
      };
      const o = [];
      for (let i in r)
        o.push(encodeURIComponent(i) + "=" + encodeURIComponent(r[i]));
      var t = document.createElement("script");
      (t.src =
        "https://newsletters.ctfd.io/lists/ot889gr1sa0e1/subscribe/post-json?" +
        o.join("&")),
        document.head.appendChild(t);
    }
  },
}));
n.start();
