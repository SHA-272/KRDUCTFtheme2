import { C as e, m as n } from "./index.8ca336c3.js";
window.CTFd = e;
window.Alpine = n;
let l = e.events.counter.read.getLast();
e.fetch(`/api/v1/notifications?since_id=${l}`)
  .then((t) => t.json())
  .then((t) => {
    let a = t.data,
      o = e.events.counter.read.getAll();
    a.forEach((d) => {
      o.push(d.id);
    }),
      e.events.counter.read.setAll(o),
      e.events.counter.unread.readAll();
    let r = e.events.counter.unread.getAll().length;
    e.events.controller.broadcast("counter", { count: r }),
      n.store("unread_count", r);
  });
n.start();