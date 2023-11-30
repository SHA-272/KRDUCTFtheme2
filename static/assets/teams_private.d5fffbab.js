import { m as o, C as i, M as n, c as d } from "./index.8ca336c3.js";
import { s as r, c as m } from "./clipboard.0a7406e2.js";
import { g as c } from "./userscore.87e15442.js";
import { e as u } from "./index.156d1918.js";
import "./echarts.128204f2.js";
window.Alpine = o;
window.CTFd = i;
o.store("inviteToken", "");
o.data("TeamEditModal", () => ({
  success: null,
  error: null,
  initial: null,
  errors: [],
  init() {
    this.initial = r(this.$el.querySelector("form"));
  },
  async updateProfile() {
    let e = r(this.$el, this.initial, !0);
    e.fields = [];
    for (const a in e)
      if (a.match(/fields\[\d+\]/)) {
        let t = {},
          l = parseInt(a.slice(7, -1));
        (t.field_id = l), (t.value = e[a]), e.fields.push(t), delete e[a];
      }
    let s = await i.pages.teams.updateTeamSettings(e);
    s.success
      ? ((this.success = !0),
        (this.error = !1),
        setTimeout(() => {
          (this.success = null), (this.error = null);
        }, 3e3))
      : ((this.success = !1),
        (this.error = !0),
        Object.keys(s.errors).map((a) => {
          const t = s.errors[a];
          this.errors.push(t);
        }));
  },
}));
o.data("TeamCaptainModal", () => ({
  success: null,
  error: null,
  errors: [],
  async updateCaptain() {
    let e = r(this.$el, null, !0),
      s = await i.pages.teams.updateTeamSettings(e);
    s.success
      ? window.location.reload()
      : ((this.success = !1),
        (this.error = !0),
        Object.keys(s.errors).map((a) => {
          const t = s.errors[a];
          this.errors.push(t);
        }));
  },
}));
o.data("TeamInviteModal", () => ({
  copy() {
    m(this.$refs.link);
  },
}));
o.data("TeamDisbandModal", () => ({
  errors: [],
  async disbandTeam() {
    let e = await i.pages.teams.disbandTeam();
    e.success ? window.location.reload() : (this.errors = e.errors[""]);
  },
}));
o.data("CaptainMenu", () => ({
  captain: !1,
  editTeam() {
    (this.teamEditModal = new n(document.getElementById("team-edit-modal"))),
      this.teamEditModal.show();
  },
  chooseCaptain() {
    (this.teamCaptainModal = new n(
      document.getElementById("team-captain-modal")
    )),
      this.teamCaptainModal.show();
  },
  async inviteMembers() {
    const e = await i.pages.teams.getInviteToken();
    if (e.success) {
      const s = e.data.code,
        a = `${window.location.origin}${i.config.urlRoot}/teams/invite?code=${s}`;
      (document.querySelector("#team-invite-modal input[name=link]").value = a),
        (this.$store.inviteToken = a),
        (this.teamInviteModal = new n(
          document.getElementById("team-invite-modal")
        )),
        this.teamInviteModal.show();
    }
  },
  disbandTeam() {
    (this.teamDisbandModal = new n(
      document.getElementById("team-disband-modal")
    )),
      this.teamDisbandModal.show();
  },
}));
o.data("TeamGraphs", () => ({
  solves: null,
  fails: null,
  awards: null,
  solveCount: 0,
  failCount: 0,
  awardCount: 0,
  getSolvePercentage() {
    return (
      (this.solveCount / (this.solveCount + this.failCount)) *
      100
    ).toFixed(2);
  },
  getFailPercentage() {
    return (
      (this.failCount / (this.solveCount + this.failCount)) *
      100
    ).toFixed(2);
  },
  getCategoryBreakdown() {
    const e = [],
      s = {};
    this.solves.data.map((t) => {
      e.push(t.challenge.category);
    }),
      e.forEach((t) => {
        t in s ? (s[t] += 1) : (s[t] = 1);
      });
    const a = [];
    for (const t in s)
      a.push({
        name: t,
        count: s[t],
        percent: (s[t] / e.length) * 100,
        color: d(t),
      });
    return a;
  },
  async init() {
    (this.solves = await i.pages.teams.teamSolves("me")),
      (this.fails = await i.pages.teams.teamFails("me")),
      (this.awards = await i.pages.teams.teamAwards("me")),
      (this.solveCount = this.solves.meta.count),
      (this.failCount = this.fails.meta.count),
      (this.awardCount = this.awards.meta.count),
      u(
        this.$refs.scoregraph,
        c(i.team.id, i.team.name, this.solves.data, this.awards.data)
      );
  },
}));
o.start();
