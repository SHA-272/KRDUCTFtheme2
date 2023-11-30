import { d, c as n } from "./index.8ca336c3.js";
import { c as u } from "./index.156d1918.js";
function x(s, o, c, p) {
  let a = {
    title: { left: "center", text: "Очков за время", textStyle: { color: "rgb(220,180,252)" }, },
    tooltip: { trigger: "axis", axisPointer: { type: "cross" } },
    legend: {
      type: "scroll",
      orient: "horizontal",
      align: "left",
      bottom: 0,
      data: [o],
      textStyle: {
        color: "rgb(220,180,252)",
        inactiveColor: "rgb(113,0,148)",
      },
    },
    toolbox: { feature: { saveAsImage: {} } },
    grid: { containLabel: !0 },
    xAxis: [{ type: "category", boundaryGap: !1, data: [], axisLabel: { color: "rgb(220, 180, 252)" }, }],
    yAxis: [{ type: "value", axisLabel: { color: "rgb(220, 180, 252)" }, }],
    dataZoom: [
      {
        id: "dataZoomX",
        type: "slider",
        xAxisIndex: [0],
        filterMode: "filter",
        height: 20,
        top: 35,
        fillerColor: "rgba(233, 236, 241, 0.4)",
      },
    ],
    series: [],
  };
  const i = [],
    r = [],
    e = c.concat(p);
  e.sort((t, l) => new Date(t.date) - new Date(l.date));
  for (let t = 0; t < e.length; t++) {
    const l = d(e[t].date);
    i.push(l.toDate());
    try {
      r.push(e[t].challenge.value);
    } catch {
      r.push(e[t].value);
    }
  }
  return (
    i.forEach((t) => {
      a.xAxis[0].data.push(t);
    }),
    a.series.push({
      name: o,
      type: "line",
      label: { normal: { show: !0, position: "top" } },
      areaStyle: { normal: { color: n(o + s) } },
      itemStyle: { normal: { color: n(o + s) } },
      data: u(r),
    }),
    a
  );
}
export { x as g };
