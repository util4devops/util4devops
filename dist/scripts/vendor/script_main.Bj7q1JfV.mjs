import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  C as r,
  F as i,
  I as a,
  L as o,
  M as s,
  N as c,
  P as l,
  T as u,
  V as d,
  _ as f,
  a as p,
  c as m,
  g as h,
  i as g,
  l as _,
  m as v,
  n as y,
  o as b,
  p as ee,
  r as x,
  s as S,
  t as C,
  u as w,
  v as T,
  y as E,
  z as te,
} from "./react.B4kFiiQA.mjs";
import { S as D, a as O, r as k, t as A } from "./motion.CYX_XZth.mjs";
import {
  $ as ne,
  B as j,
  E as M,
  G as N,
  K as re,
  M as P,
  N as ie,
  Q as ae,
  R as oe,
  T as se,
  U as ce,
  V as le,
  X as ue,
  Y as de,
  Z as fe,
  _ as pe,
  a as me,
  at as he,
  b as F,
  c as ge,
  ct as _e,
  d as ve,
  et as ye,
  f as be,
  g as I,
  h as xe,
  ht as Se,
  i as Ce,
  l as we,
  lt as L,
  mt as Te,
  n as Ee,
  nt as R,
  o as De,
  ot as Oe,
  p as ke,
  pt as Ae,
  q as je,
  r as z,
  st as Me,
  t as B,
  tt as Ne,
  u as Pe,
  w as V,
  x as H,
  y as U,
  z as Fe,
} from "./framer.D3c-8bqh.mjs";
import {
  C as Ie,
  E as Le,
  S as Re,
  T as ze,
  b as Be,
  m as Ve,
  p as He,
  w as Ue,
  x as We,
  y as Ge,
} from "./shared-lib.WUiyMq6h.mjs";
function Ke(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  W,
  nt = e(() => {
    (b(),
      j(),
      A(),
      u(),
      Le(),
      (qe = [`ElWXHPJjD`, `p1TrTqind`]),
      (Je = `framer-iswKx`),
      (Ye = { ElWXHPJjD: `framer-v-bwvw2j`, p1TrTqind: `framer-v-rv6lfo` }),
      (Xe = { delay: 0, duration: 0.25, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Ze = ({ value: e, children: t }) => {
        let n = s(O),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(O.Provider, { value: i, children: t });
      }),
      (Qe = { Desktop: `ElWXHPJjD`, Mobile: `p1TrTqind` }),
      ($e = D.create(a)),
      (et = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Qe[r.variant] ?? r.variant ?? `ElWXHPJjD`,
      })),
      (tt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = L(
        f(function (e, n) {
          let r = t(null),
            i = n ?? r,
            o = E(),
            { activeLocale: s, setLocale: c } = R();
          fe();
          let { style: l, className: u, layoutId: d, variant: f, ...p } = et(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: ee,
              setGestureState: x,
              setVariant: S,
              variants: C,
            } = _e({
              cycleOrder: qe,
              defaultVariant: `ElWXHPJjD`,
              ref: i,
              variant: f,
              variantClassNames: Ye,
            }),
            w = tt(e, C),
            T = V(Je, Ie);
          return m(k, {
            id: d ?? o,
            children: m($e, {
              animate: C,
              initial: !1,
              children: m(Ze, {
                value: Xe,
                children: m(D.footer, {
                  ...p,
                  ...y,
                  className: V(T, `framer-bwvw2j`, u, g),
                  "data-framer-name": `Desktop`,
                  layoutDependency: w,
                  layoutId: `ElWXHPJjD`,
                  ref: i,
                  style: { ...l },
                  ...Ke({ p1TrTqind: { "data-framer-name": `Mobile` } }, h, b),
                  children: _(D.div, {
                    className: `framer-1dg903l`,
                    "data-framer-name": `Container`,
                    layoutDependency: w,
                    layoutId: `mW0uZaWgU`,
                    children: [
                      m(D.div, {
                        className: `framer-euh8xw`,
                        "data-framer-name": `Container`,
                        layoutDependency: w,
                        layoutId: `DAj2GmyMR`,
                      }),
                      m(D.div, {
                        className: `framer-w8i7a0`,
                        "data-framer-name": `Designed By Faruk Yurtseven`,
                        layoutDependency: w,
                        layoutId: `Jlb081m8z`,
                        children: m(pe, {
                          __fromCanvasComponent: !0,
                          children: m(a, {
                            children: m(D.p, {
                              className: `framer-styles-preset-ke6suj`,
                              "data-styles-preset": `Bv6I6Qd8d`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-52da8dbb-cd94-4ec6-8ec8-f864d65f3fe3, rgb(250, 250, 250)))`,
                              },
                              children: `Copyright © 2026 Util4dev Labs, Inc.`,
                            }),
                          }),
                          className: `framer-uontrz`,
                          fonts: [`Inter`],
                          layoutDependency: w,
                          layoutId: `EhY7S5XlI`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-52da8dbb-cd94-4ec6-8ec8-f864d65f3fe3, rgb(250, 250, 250))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-iswKx.framer-10hvq2f, .framer-iswKx .framer-10hvq2f { display: block; }`,
          `.framer-iswKx.framer-bwvw2j { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 75px 0px 75px 0px; position: relative; width: 1200px; }`,
          `.framer-iswKx .framer-1dg903l { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 0px 25px 0px 25px; position: relative; width: 1px; }`,
          `.framer-iswKx .framer-euh8xw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; max-width: 1200px; min-height: 74px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-iswKx .framer-w8i7a0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-iswKx .framer-uontrz { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-iswKx.framer-v-rv6lfo.framer-bwvw2j { padding: 50px 0px 50px 0px; width: 390px; }`,
          `.framer-iswKx.framer-v-rv6lfo .framer-1dg903l { max-width: 840px; padding: 0px 15px 0px 15px; }`,
          `.framer-iswKx.framer-v-rv6lfo .framer-euh8xw { flex-direction: column; gap: 50px; }`,
          `.framer-iswKx.framer-v-rv6lfo .framer-w8i7a0 { flex-direction: column; gap: 24px; }`,
          ...Ue,
        ],
        `framer-iswKx`
      )),
      (W.displayName = `Footer`),
      (W.defaultProps = { height: 300, width: 1200 }),
      H(W, {
        variant: {
          options: [`ElWXHPJjD`, `p1TrTqind`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: z.Enum,
        },
      }),
      F(
        W,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...ie(ze),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut = e(() => {
    (b(),
      j(),
      u(),
      (rt = `var(--framer-icon-mask)`),
      (it = f(function (e, t) {
        return m(`svg`, { ...e, ref: t, children: e.children });
      })),
      (at = D.create(it)),
      (ot = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? m(at, { ...a, layoutId: r, ref: t, children: i })
          : m(`svg`, { ...a, ref: t, children: i });
      })),
      (st = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 12 L 0 0 L 16.5 0 L 16.5 12 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="12px" id="gwB_ZdJt6" transform="translate(3.75 6)" width="16.5px"/><path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="xGkn4qbwc" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 12)" width="16.5px"/><path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="uQ9bOFKFt" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 6)" width="16.5px"/><path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="hrURkUe9P" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 18)" width="16.5px"/></svg>`),
      (ct = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (lt = L(
        f(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = ct(e),
            u = Oe(`3559153988`, st);
          return m(ot, {
            ...l,
            className: V(`framer-iZmZi`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: m(`use`, { href: u }),
          });
        }),
        [
          `.framer-iZmZi { -webkit-mask: ${rt}; aspect-ratio: 1; display: block; mask: ${rt}; width: 24px; }`,
        ],
        `framer-iZmZi`
      )),
      (lt.displayName = `List`),
      H(lt, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: z.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: z.Number,
        },
      }));
  });
function dt(e) {
  let { toggle: t } = e;
  return t
    ? m(`style`, {
        "data-frameruni-stop-scroll": !0,
        children: `html,body { overflow: hidden !important; }`,
      })
    : m(S, {});
}
var ft = e(() => {
    (b(),
      j(),
      (dt.displayName = `Stop Scroll`),
      H(dt, {
        toggle: {
          type: z.Boolean,
          title: `Block Scroll`,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }),
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt = e(() => {
    (b(),
      j(),
      u(),
      (pt = `var(--framer-icon-mask)`),
      (mt = f(function (e, t) {
        return m(`svg`, { ...e, ref: t, children: e.children });
      })),
      (ht = D.create(mt)),
      (gt = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? m(ht, { ...a, layoutId: r, ref: t, children: i })
          : m(`svg`, { ...a, ref: t, children: i });
      })),
      (_t = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 1.5 16.5 C 0.672 16.5 0 15.828 0 15 L 0 1.5 C 0 0.672 0.672 0 1.5 0 L 15 0 C 15.828 0 16.5 0.672 16.5 1.5 L 16.5 15 C 16.5 15.828 15.828 16.5 15 16.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="LjE0Ycn76" transform="translate(3.75 3.75)" width="16.5px"/><path d="M 13.5 0 L 0 13.5" fill="var(--21h8s6, rgb(0, 0, 0))" height="13.5px" id="oSDwjLCvX" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(5.25 5.25)" width="13.5px"/><path d="M 13.5 13.5 L 0 0" fill="var(--21h8s6, rgb(0, 0, 0))" height="13.5px" id="H9XwXWiXU" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(5.25 5.25)" width="13.5px"/></svg>`),
      (vt = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (yt = L(
        f(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = vt(e),
            u = Oe(`2202960551`, _t);
          return m(gt, {
            ...l,
            className: V(`framer-AhL2C`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: m(`use`, { href: u }),
          });
        }),
        [
          `.framer-AhL2C { -webkit-mask: ${pt}; aspect-ratio: 1; display: block; mask: ${pt}; width: 24px; }`,
        ],
        `framer-AhL2C`
      )),
      (yt.displayName = `X`),
      H(yt, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: z.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: z.Number,
        },
      }));
  });
function xt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  G,
  At = e(() => {
    (b(),
      j(),
      A(),
      u(),
      Le(),
      (St = { mFxxs8sId: { hover: !0 } }),
      (Ct = `framer-2azqR`),
      (wt = { mFxxs8sId: `framer-v-1q3855e` }),
      (Tt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Et = ({ value: e, children: t }) => {
        let n = s(O),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(O.Provider, { value: i, children: t });
      }),
      (Dt = D.create(a)),
      (Ot = ({
        buttonLabel: e,
        buttonLabel1: t,
        height: n,
        id: r,
        link: i,
        newTab: a,
        tap: o,
        width: s,
        ...c
      }) => ({
        ...c,
        AYwwfkaKd: i ?? c.AYwwfkaKd,
        C3iVRYv1r: o ?? c.C3iVRYv1r,
        FPjhikCji: a ?? c.FPjhikCji,
        OlthDMhqu: t ?? c.OlthDMhqu ?? `Button`,
        r7ASsAiJ9: e ?? c.r7ASsAiJ9 ?? !0,
      })),
      (kt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = L(
        f(function (e, n) {
          let r = t(null),
            i = n ?? r,
            o = E(),
            { activeLocale: s, setLocale: c } = R();
          fe();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              r7ASsAiJ9: p,
              OlthDMhqu: h,
              AYwwfkaKd: g,
              FPjhikCji: _,
              C3iVRYv1r: v,
              ...y
            } = Ot(e),
            {
              baseVariant: b,
              classNames: ee,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: te,
              variants: O,
            } = _e({
              defaultVariant: `mFxxs8sId`,
              enabledGestures: St,
              ref: i,
              variant: f,
              variantClassNames: wt,
            }),
            A = kt(e, O),
            { activeVariantCallback: ne, delay: j } = ue(b),
            M = ne(async (...e) => {
              if ((T({ isPressed: !1 }), v && (await v(...e)) === !1)) return !1;
            }),
            N = V(Ct, Ie);
          return m(k, {
            id: d ?? o,
            children: m(Dt, {
              animate: O,
              initial: !1,
              children: m(Et, {
                value: Tt,
                children: m(Pe, {
                  href: g,
                  motionChild: !0,
                  nodeId: `mFxxs8sId`,
                  openInNewTab: _,
                  scopeId: `eywgDRQDd`,
                  children: m(D.a, {
                    ...y,
                    ...S,
                    className: `${V(N, `framer-1q3855e`, u, ee)} framer-d2a2t9`,
                    "data-border": !0,
                    "data-framer-name": `Small Button`,
                    "data-highlight": !0,
                    layoutDependency: A,
                    layoutId: `mFxxs8sId`,
                    onTap: M,
                    ref: i,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-64c13be0-f48f-466a-8d93-d1b8decde1b8, rgba(250, 250, 250, 0.1))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backdropFilter: `blur(10px)`,
                      borderBottomLeftRadius: 24,
                      borderBottomRightRadius: 24,
                      borderTopLeftRadius: 24,
                      borderTopRightRadius: 24,
                      boxShadow: `inset 0px 0px 10px 0px rgba(250, 250, 250, 0.36)`,
                      WebkitBackdropFilter: `blur(10px)`,
                      ...l,
                    },
                    variants: {
                      "mFxxs8sId-hover": {
                        backdropFilter: `none`,
                        boxShadow: `inset 0px 0px 10px 0px rgba(250, 169, 115, 0.37)`,
                        WebkitBackdropFilter: `none`,
                      },
                    },
                    ...xt({ "mFxxs8sId-hover": { "data-framer-name": void 0 } }, b, C),
                    children:
                      p &&
                      m(D.div, {
                        className: `framer-15m53we`,
                        "data-framer-name": `label`,
                        layoutDependency: A,
                        layoutId: `zI2p1NaG7`,
                        children: m(pe, {
                          __fromCanvasComponent: !0,
                          children: m(a, {
                            children: m(D.p, {
                              className: `framer-styles-preset-ke6suj`,
                              "data-styles-preset": `Bv6I6Qd8d`,
                              children: `Button`,
                            }),
                          }),
                          className: `framer-138lvn0`,
                          fonts: [`Inter`],
                          layoutDependency: A,
                          layoutId: `tsuprTeU4`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: h,
                          variants: {
                            "mFxxs8sId-hover": {
                              "--extracted-r6o4lv": `var(--token-70660a9e-f10c-47c6-b288-e9736a966ef3, rgb(212, 212, 212))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...xt(
                            {
                              "mFxxs8sId-hover": {
                                children: m(a, {
                                  children: m(D.p, {
                                    className: `framer-styles-preset-ke6suj`,
                                    "data-styles-preset": `Bv6I6Qd8d`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-70660a9e-f10c-47c6-b288-e9736a966ef3, rgb(212, 212, 212)))`,
                                    },
                                    children: m(D.span, {
                                      "data-text-fill": `true`,
                                      style: {
                                        backgroundImage: `linear-gradient(90deg, var(--token-3e9d2bfb-a296-4760-9040-440220b8c033, rgb(139, 92, 246)) 0%, var(--token-bbe32ace-6422-4ba8-b9fd-132a22b305dd, rgb(251, 113, 133)) 50%, rgb(250, 181, 112) 101.35135135135135%)`,
                                      },
                                      children: `Button`,
                                    }),
                                  }),
                                }),
                              },
                            },
                            b,
                            C
                          ),
                        }),
                      }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-2azqR.framer-d2a2t9, .framer-2azqR .framer-d2a2t9 { display: block; }`,
          `.framer-2azqR.framer-1q3855e { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 6px 15px 6px 15px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-2azqR .framer-15m53we { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 2px 0px 2px; position: relative; width: min-content; }`,
          `.framer-2azqR .framer-138lvn0 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...Ue,
          `.framer-2azqR[data-border="true"]::after, .framer-2azqR [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-2azqR`
      )),
      (G.displayName = `Small Button`),
      (G.defaultProps = { height: 37.5, width: 84 }),
      H(G, {
        r7ASsAiJ9: { defaultValue: !0, title: `Button Label`, type: z.Boolean },
        OlthDMhqu: {
          defaultValue: `Button`,
          displayTextArea: !1,
          title: `Button Label`,
          type: z.String,
        },
        AYwwfkaKd: { title: `Link`, type: z.Link },
        FPjhikCji: { defaultValue: !1, title: `New Tab`, type: z.Boolean },
        C3iVRYv1r: { title: `Tap`, type: z.EventHandler },
      }),
      F(
        G,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...ie(ze),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  jt,
  Mt,
  Nt,
  Pt = e(() => {
    (j(),
      se.loadFonts([`GF;Inter-500`, `GF;Inter-700`, `GF;Inter-700italic`, `GF;Inter-500italic`]),
      (jt = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZ1rib2Bg-4.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZ1rib2Bg-4.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/inter/v19/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTcPtxhiJ-Ek-7MeA.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/inter/v19/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTc69thiJ-Ek-7MeA.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (Mt = [
        `.framer-UIaRd .framer-styles-preset-90posr:not(.rich-text-wrapper), .framer-UIaRd .framer-styles-preset-90posr.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-52da8dbb-cd94-4ec6-8ec8-f864d65f3fe3, #fafafa); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Nt = `framer-UIaRd`));
  });
function Ft(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  K,
  Kt = e(() => {
    (b(),
      j(),
      A(),
      u(),
      Le(),
      Pt(),
      (It = { DzkvMXkdl: { hover: !0 } }),
      (Lt = [`DzkvMXkdl`, `NuOHxCyuX`, `xVhscxT1M`]),
      (Rt = `framer-YNpO5`),
      (zt = {
        DzkvMXkdl: `framer-v-up1y4v`,
        NuOHxCyuX: `framer-v-q4idgs`,
        xVhscxT1M: `framer-v-ldngne`,
      }),
      (Bt = { delay: 0, duration: 0.25, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Vt = ({ value: e, children: t }) => {
        let n = s(O),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(O.Provider, { value: i, children: t });
      }),
      (Ht = { "Nav Active": `xVhscxT1M`, "NAV Item": `DzkvMXkdl`, Mobile: `NuOHxCyuX` }),
      (Ut = D.create(a)),
      (Wt = ({ click: e, height: t, hover: n, id: r, link: i, title: a, width: o, ...s }) => ({
        ...s,
        dKoULZI27: i ?? s.dKoULZI27,
        DxZMbxf49: a ?? s.DxZMbxf49 ?? `Menu`,
        ol3VDiW09: n ?? s.ol3VDiW09,
        tDdyGzS4c: e ?? s.tDdyGzS4c,
        variant: Ht[s.variant] ?? s.variant ?? `DzkvMXkdl`,
      })),
      (Gt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = L(
        f(function (e, n) {
          let r = t(null),
            i = n ?? r,
            o = E(),
            { activeLocale: s, setLocale: c } = R();
          fe();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              DxZMbxf49: p,
              dKoULZI27: h,
              ol3VDiW09: g,
              tDdyGzS4c: _,
              ...v
            } = Wt(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: ee,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: te,
            } = _e({
              cycleOrder: Lt,
              defaultVariant: `DzkvMXkdl`,
              enabledGestures: It,
              ref: i,
              variant: f,
              variantClassNames: zt,
            }),
            O = Gt(e, te),
            { activeVariantCallback: A, delay: ne } = ue(y),
            j = A(async (...e) => {
              if ((w({ isPressed: !1 }), _ && (await _(...e)) === !1)) return !1;
            }),
            M = A(async (...e) => {
              if ((w({ isHovered: !0 }), g && (await g(...e)) === !1)) return !1;
            }),
            N = V(Rt, Ie, Nt);
          return m(k, {
            id: d ?? o,
            children: m(Ut, {
              animate: te,
              initial: !1,
              children: m(Vt, {
                value: Bt,
                children: m(Pe, {
                  href: h,
                  motionChild: !0,
                  nodeId: `DzkvMXkdl`,
                  openInNewTab: !1,
                  scopeId: `KdcrhmmFW`,
                  smoothScroll: !0,
                  children: m(D.a, {
                    ...v,
                    ...x,
                    className: `${V(N, `framer-up1y4v`, u, b)} framer-1103wkx`,
                    "data-framer-name": `NAV Item`,
                    "data-highlight": !0,
                    layoutDependency: O,
                    layoutId: `DzkvMXkdl`,
                    onMouseEnter: M,
                    onTap: j,
                    ref: i,
                    style: {
                      borderBottomLeftRadius: 100,
                      borderBottomRightRadius: 100,
                      borderTopLeftRadius: 100,
                      borderTopRightRadius: 100,
                      ...l,
                    },
                    ...Ft(
                      {
                        "DzkvMXkdl-hover": { "data-framer-name": void 0 },
                        NuOHxCyuX: { "data-framer-name": `Mobile` },
                        xVhscxT1M: { "data-framer-name": `Nav Active` },
                      },
                      y,
                      S
                    ),
                    children: m(D.div, {
                      className: `framer-10c5fmm`,
                      "data-framer-name": `Nav`,
                      layoutDependency: O,
                      layoutId: `vNa9k3s6L`,
                      children: m(pe, {
                        __fromCanvasComponent: !0,
                        children: m(a, {
                          children: m(D.p, {
                            className: `framer-styles-preset-ke6suj`,
                            "data-styles-preset": `Bv6I6Qd8d`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-52da8dbb-cd94-4ec6-8ec8-f864d65f3fe3, rgb(250, 250, 250)))`,
                            },
                            children: `Menu`,
                          }),
                        }),
                        className: `framer-nnuewx`,
                        fonts: [`Inter`],
                        layoutDependency: O,
                        layoutId: `o5I8SRhsF`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-52da8dbb-cd94-4ec6-8ec8-f864d65f3fe3, rgb(250, 250, 250))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: p,
                        variants: {
                          "DzkvMXkdl-hover": {
                            "--extracted-r6o4lv": `var(--token-70660a9e-f10c-47c6-b288-e9736a966ef3, rgb(212, 212, 212))`,
                          },
                          xVhscxT1M: {
                            "--extracted-r6o4lv": `var(--token-70660a9e-f10c-47c6-b288-e9736a966ef3, rgb(212, 212, 212))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Ft(
                          {
                            "DzkvMXkdl-hover": {
                              children: m(a, {
                                children: m(D.p, {
                                  className: `framer-styles-preset-ke6suj`,
                                  "data-styles-preset": `Bv6I6Qd8d`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-70660a9e-f10c-47c6-b288-e9736a966ef3, rgb(212, 212, 212)))`,
                                  },
                                  children: m(D.span, {
                                    "data-text-fill": `true`,
                                    style: {
                                      backgroundImage: `linear-gradient(90deg, var(--token-3e9d2bfb-a296-4760-9040-440220b8c033, rgb(139, 92, 246)) 0%, var(--token-bbe32ace-6422-4ba8-b9fd-132a22b305dd, rgb(251, 113, 133)) 50%, rgb(250, 181, 112) 101.35135135135135%)`,
                                    },
                                    children: `Menu`,
                                  }),
                                }),
                              }),
                            },
                            NuOHxCyuX: {
                              children: m(a, {
                                children: m(D.p, {
                                  className: `framer-styles-preset-90posr`,
                                  "data-styles-preset": `mvEBjNaAc`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-52da8dbb-cd94-4ec6-8ec8-f864d65f3fe3, rgb(250, 250, 250)))`,
                                  },
                                  children: `Menu`,
                                }),
                              }),
                            },
                            xVhscxT1M: {
                              children: m(a, {
                                children: m(D.p, {
                                  className: `framer-styles-preset-ke6suj`,
                                  "data-styles-preset": `Bv6I6Qd8d`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-70660a9e-f10c-47c6-b288-e9736a966ef3, rgb(212, 212, 212)))`,
                                  },
                                  children: m(D.span, {
                                    "data-text-fill": `true`,
                                    style: {
                                      backgroundImage: `linear-gradient(90deg, var(--token-3e9d2bfb-a296-4760-9040-440220b8c033, rgb(139, 92, 246)) 0%, var(--token-bbe32ace-6422-4ba8-b9fd-132a22b305dd, rgb(251, 113, 133)) 50%, rgb(250, 181, 112) 101.35135135135135%)`,
                                    },
                                    children: `Menu`,
                                  }),
                                }),
                              }),
                            },
                          },
                          y,
                          S
                        ),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-YNpO5.framer-1103wkx, .framer-YNpO5 .framer-1103wkx { display: block; }`,
          `.framer-YNpO5.framer-up1y4v { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: 32px; justify-content: flex-start; padding: 10px 14px 10px 14px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-YNpO5 .framer-10c5fmm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-YNpO5 .framer-nnuewx { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-YNpO5.framer-v-q4idgs.framer-up1y4v { height: min-content; justify-content: center; padding: 0px; width: 251px; }`,
          `.framer-YNpO5.framer-v-q4idgs .framer-10c5fmm { flex: 1 0 0px; width: 1px; }`,
          `.framer-YNpO5.framer-v-q4idgs .framer-nnuewx { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          ...Ue,
          ...Mt,
        ],
        `framer-YNpO5`
      )),
      (K.displayName = `Nav Elements`),
      (K.defaultProps = { height: 32, width: 71 }),
      H(K, {
        variant: {
          options: [`DzkvMXkdl`, `NuOHxCyuX`, `xVhscxT1M`],
          optionTitles: [`NAV Item`, `Mobile`, `Nav Active`],
          title: `Variant`,
          type: z.Enum,
        },
        DxZMbxf49: { defaultValue: `Menu`, displayTextArea: !1, title: `Title`, type: z.String },
        onDxZMbxf49Change: { changes: `DxZMbxf49`, type: z.ChangeHandler },
        dKoULZI27: { title: `Link`, type: z.Link },
        ol3VDiW09: { title: `Hover`, type: z.EventHandler },
        tDdyGzS4c: { title: `Click`, type: z.EventHandler },
      }),
      F(
        K,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...ie(ze),
          ...ie(jt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  J,
  $t,
  en,
  tn,
  nn,
  rn,
  Y,
  an = e(() => {
    (b(),
      j(),
      A(),
      u(),
      Kt(),
      (qt = P(K)),
      (Jt = Te(K)),
      (Yt = [`SnNOaglBC`, `zQ0KE9P_v`]),
      (Xt = `framer-gUQWC`),
      (Zt = { SnNOaglBC: `framer-v-1g3sj3s`, zQ0KE9P_v: `framer-v-18iqn74` }),
      (Qt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (J = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      ($t = ({ value: e, children: t }) => {
        let n = s(O),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(O.Provider, { value: i, children: t });
      }),
      (en = { Desktop: `SnNOaglBC`, Mobile: `zQ0KE9P_v` }),
      (tn = D.create(a)),
      (nn = ({
        featuresActive: e,
        featuresPassive: t,
        height: n,
        homeNavPassive: r,
        homeScrollSection: i,
        id: a,
        productActive: o,
        productPassive: s,
        scrollSection: c,
        showCase: l,
        width: u,
        ...d
      }) => ({
        ...d,
        b7zmLqTeR: l ?? d.b7zmLqTeR,
        Ca70t6UaX: i ?? d.Ca70t6UaX,
        dg70DYZf1: r ?? d.dg70DYZf1,
        E1VDnva7s: e ?? d.E1VDnva7s,
        nQAehmuPT: c ?? d.nQAehmuPT,
        PdsmeeeJ6: t ?? d.PdsmeeeJ6,
        PUmeHLtsE: s ?? d.PUmeHLtsE,
        RvgzwmSGY: o ?? d.RvgzwmSGY,
        variant: en[d.variant] ?? d.variant ?? `SnNOaglBC`,
      })),
      (rn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = L(
        f(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = E(),
            { activeLocale: o, setLocale: s } = R(),
            c = fe(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              PdsmeeeJ6: p,
              Ca70t6UaX: h,
              dg70DYZf1: g,
              E1VDnva7s: v,
              RvgzwmSGY: y,
              PUmeHLtsE: b,
              nQAehmuPT: ee,
              b7zmLqTeR: x,
              ...S
            } = nn(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: te,
              gestureVariant: O,
              isLoading: A,
              setGestureState: ne,
              setVariant: j,
              variants: M,
            } = _e({
              cycleOrder: Yt,
              defaultVariant: `SnNOaglBC`,
              ref: i,
              variant: f,
              variantClassNames: Zt,
            }),
            N = rn(e, M),
            re = V(Xt);
          return (
            he(),
            m(k, {
              id: d ?? a,
              children: m(tn, {
                animate: M,
                initial: !1,
                children: m($t, {
                  value: Qt,
                  children: _(D.nav, {
                    ...S,
                    ...te,
                    className: V(re, `framer-1g3sj3s`, u, w),
                    "data-border": !0,
                    "data-framer-name": `Desktop`,
                    layoutDependency: N,
                    layoutId: `SnNOaglBC`,
                    ref: i,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-64c13be0-f48f-466a-8d93-d1b8decde1b8, rgba(250, 250, 250, 0.1))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backdropFilter: `blur(5px)`,
                      borderBottomLeftRadius: 26,
                      borderBottomRightRadius: 26,
                      borderTopLeftRadius: 26,
                      borderTopRightRadius: 26,
                      boxShadow: `inset 0px 0px 10px 0px rgba(255, 255, 255, 0.25), 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)`,
                      WebkitBackdropFilter: `blur(5px)`,
                      ...l,
                    },
                    variants: {
                      zQ0KE9P_v: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backdropFilter: `none`,
                        boxShadow: `none`,
                        WebkitBackdropFilter: `none`,
                      },
                    },
                    ...q({ zQ0KE9P_v: { "data-framer-name": `Mobile` } }, C, O),
                    children: [
                      m(I, {
                        links: [
                          {
                            href: { hash: `:iYUNHqCEb`, webPageId: `augiA20Il` },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: { hash: `:iYUNHqCEb`, webPageId: `augiA20Il` },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (e) =>
                          m(B, {
                            height: 32,
                            y: (c?.y || 0) + (10 + ((c?.height || 52) - 20 - 32) / 2),
                            ...q(
                              {
                                zQ0KE9P_v: {
                                  width: `calc(${c?.width || `100vw`} - 30px)`,
                                  y:
                                    (c?.y || 0) +
                                    15 +
                                    (((c?.height || 443) - 30 - 400) / 2 + 0 + 0),
                                },
                              },
                              C,
                              O
                            ),
                            children: m(U, {
                              className: `framer-faolcd-container`,
                              "data-framer-name": `Nav Element`,
                              layoutDependency: N,
                              layoutId: `UH0PhSnsI-container`,
                              name: `Nav Element`,
                              nodeId: `UH0PhSnsI`,
                              rendersWithMotion: !0,
                              scopeId: `kT8NSluHB`,
                              children: m(Jt, {
                                __framer__animateOnce: !1,
                                __framer__targets: [
                                  { ref: h, target: `xVhscxT1M` },
                                  { ref: g, target: `DzkvMXkdl` },
                                ],
                                __framer__threshold: 0.5,
                                __framer__variantAppearEffectEnabled: !0,
                                dKoULZI27: e[0],
                                DxZMbxf49: `Giới thiệu`,
                                height: `100%`,
                                id: `UH0PhSnsI`,
                                layoutId: `UH0PhSnsI`,
                                name: `Nav Element`,
                                variant: J(`DzkvMXkdl`),
                                width: `100%`,
                                ...q(
                                  {
                                    zQ0KE9P_v: {
                                      dKoULZI27: e[1],
                                      style: { width: `100%` },
                                      variant: J(`NuOHxCyuX`),
                                    },
                                  },
                                  C,
                                  O
                                ),
                              }),
                            }),
                          }),
                      }),
                      m(I, {
                        links: [
                          {
                            href: { hash: `:N2ijbw0rP`, webPageId: `augiA20Il` },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: { hash: `:N2ijbw0rP`, webPageId: `augiA20Il` },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (e) =>
                          m(B, {
                            height: 32,
                            y: (c?.y || 0) + (10 + ((c?.height || 52) - 20 - 32) / 2),
                            ...q(
                              {
                                zQ0KE9P_v: {
                                  width: `calc(${c?.width || `100vw`} - 30px)`,
                                  y:
                                    (c?.y || 0) +
                                    15 +
                                    (((c?.height || 443) - 30 - 400) / 2 + 32 + 60),
                                },
                              },
                              C,
                              O
                            ),
                            children: m(U, {
                              className: `framer-mf37mt-container`,
                              "data-framer-name": `Nav Element`,
                              layoutDependency: N,
                              layoutId: `OijNi1ySH-container`,
                              name: `Nav Element`,
                              nodeId: `OijNi1ySH`,
                              rendersWithMotion: !0,
                              scopeId: `kT8NSluHB`,
                              children: m(Jt, {
                                __framer__animateOnce: !1,
                                __framer__targets: [
                                  { ref: v, target: `xVhscxT1M` },
                                  { ref: p, target: `DzkvMXkdl` },
                                ],
                                __framer__threshold: 0.5,
                                __framer__variantAppearEffectEnabled: !0,
                                dKoULZI27: e[0],
                                DxZMbxf49: `Tính năng`,
                                height: `100%`,
                                id: `OijNi1ySH`,
                                layoutId: `OijNi1ySH`,
                                name: `Nav Element`,
                                variant: J(`DzkvMXkdl`),
                                width: `100%`,
                                ...q(
                                  {
                                    zQ0KE9P_v: {
                                      dKoULZI27: e[1],
                                      style: { width: `100%` },
                                      variant: J(`NuOHxCyuX`),
                                    },
                                  },
                                  C,
                                  O
                                ),
                              }),
                            }),
                          }),
                      }),
                      m(I, {
                        links: [
                          {
                            href: { hash: `:sgmlFhWUG`, webPageId: `augiA20Il` },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: { hash: `:sgmlFhWUG`, webPageId: `augiA20Il` },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (e) =>
                          m(B, {
                            height: 32,
                            y: (c?.y || 0) + (10 + ((c?.height || 52) - 20 - 32) / 2),
                            ...q(
                              {
                                zQ0KE9P_v: {
                                  width: `calc(${c?.width || `100vw`} - 30px)`,
                                  y:
                                    (c?.y || 0) +
                                    15 +
                                    (((c?.height || 443) - 30 - 400) / 2 + 64 + 120),
                                },
                              },
                              C,
                              O
                            ),
                            children: m(U, {
                              className: `framer-1bzr61k-container`,
                              "data-framer-name": `Nav Element`,
                              layoutDependency: N,
                              layoutId: `FqhF_6Tqn-container`,
                              name: `Nav Element`,
                              nodeId: `FqhF_6Tqn`,
                              rendersWithMotion: !0,
                              scopeId: `kT8NSluHB`,
                              children: m(Jt, {
                                __framer__animateOnce: !1,
                                __framer__targets: [
                                  { ref: y, target: `xVhscxT1M` },
                                  { ref: b, target: `DzkvMXkdl` },
                                ],
                                __framer__threshold: 0.5,
                                __framer__variantAppearEffectEnabled: !0,
                                dKoULZI27: e[0],
                                DxZMbxf49: `Sản phẩm`,
                                height: `100%`,
                                id: `FqhF_6Tqn`,
                                layoutId: `FqhF_6Tqn`,
                                name: `Nav Element`,
                                variant: J(`DzkvMXkdl`),
                                width: `100%`,
                                ...q(
                                  {
                                    zQ0KE9P_v: {
                                      dKoULZI27: e[1],
                                      style: { width: `100%` },
                                      variant: J(`NuOHxCyuX`),
                                    },
                                  },
                                  C,
                                  O
                                ),
                              }),
                            }),
                          }),
                      }),
                      m(I, {
                        links: [
                          {
                            href: { hash: `:zKzXmXRGU`, webPageId: `augiA20Il` },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: { hash: `:zKzXmXRGU`, webPageId: `augiA20Il` },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (e) =>
                          m(B, {
                            height: 32,
                            y: (c?.y || 0) + (10 + ((c?.height || 52) - 20 - 32) / 2),
                            ...q(
                              {
                                zQ0KE9P_v: {
                                  width: `calc(${c?.width || `100vw`} - 30px)`,
                                  y:
                                    (c?.y || 0) +
                                    15 +
                                    (((c?.height || 443) - 30 - 400) / 2 + 96 + 180),
                                },
                              },
                              C,
                              O
                            ),
                            children: m(U, {
                              className: `framer-5no09r-container`,
                              "data-framer-name": `Nav Element`,
                              layoutDependency: N,
                              layoutId: `e7FhLBp4y-container`,
                              name: `Nav Element`,
                              nodeId: `e7FhLBp4y`,
                              rendersWithMotion: !0,
                              scopeId: `kT8NSluHB`,
                              children: m(Jt, {
                                __framer__animateOnce: !1,
                                __framer__targets: [
                                  { ref: x, target: `xVhscxT1M` },
                                  { ref: ee, target: `DzkvMXkdl` },
                                ],
                                __framer__threshold: 0.5,
                                __framer__variantAppearEffectEnabled: !0,
                                dKoULZI27: e[0],
                                DxZMbxf49: `Ứng dụng`,
                                height: `100%`,
                                id: `e7FhLBp4y`,
                                layoutId: `e7FhLBp4y`,
                                name: `Nav Element`,
                                variant: J(`DzkvMXkdl`),
                                width: `100%`,
                                ...q(
                                  {
                                    zQ0KE9P_v: {
                                      dKoULZI27: e[1],
                                      style: { width: `100%` },
                                      variant: J(`NuOHxCyuX`),
                                    },
                                  },
                                  C,
                                  O
                                ),
                              }),
                            }),
                          }),
                      }),
                      m(I, {
                        links: [
                          {
                            href: { hash: `:v99AbFhke`, webPageId: `augiA20Il` },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: { hash: `:v99AbFhke`, webPageId: `augiA20Il` },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (e) =>
                          m(B, {
                            height: 32,
                            y: (c?.y || 0) + (10 + ((c?.height || 52) - 20 - 32) / 2),
                            ...q(
                              {
                                zQ0KE9P_v: {
                                  y:
                                    (c?.y || 0) +
                                    15 +
                                    (((c?.height || 443) - 30 - 400) / 2 + 128 + 240),
                                },
                              },
                              C,
                              O
                            ),
                            children: m(U, {
                              className: `framer-1cv8gl2-container`,
                              "data-framer-name": `Nav Element`,
                              layoutDependency: N,
                              layoutId: `OC0O7Ncf0-container`,
                              name: `Nav Element`,
                              nodeId: `OC0O7Ncf0`,
                              rendersWithMotion: !0,
                              scopeId: `kT8NSluHB`,
                              children: m(Jt, {
                                __framer__animateOnce: !1,
                                __framer__targets: [
                                  { ref: x, target: `xVhscxT1M` },
                                  { ref: ee, target: `DzkvMXkdl` },
                                ],
                                __framer__threshold: 0.5,
                                __framer__variantAppearEffectEnabled: !0,
                                dKoULZI27: e[0],
                                DxZMbxf49: `FAQs`,
                                height: `100%`,
                                id: `OC0O7Ncf0`,
                                layoutId: `OC0O7Ncf0`,
                                name: `Nav Element`,
                                variant: J(`DzkvMXkdl`),
                                width: `100%`,
                                ...q({ zQ0KE9P_v: { dKoULZI27: e[1] } }, C, O),
                              }),
                            }),
                          }),
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-gUQWC.framer-lpjxpv, .framer-gUQWC .framer-lpjxpv { display: block; }`,
          `.framer-gUQWC.framer-1g3sj3s { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 10px 15px 10px 15px; position: relative; width: min-content; }`,
          `.framer-gUQWC .framer-faolcd-container, .framer-gUQWC .framer-mf37mt-container, .framer-gUQWC .framer-1bzr61k-container, .framer-gUQWC .framer-5no09r-container, .framer-gUQWC .framer-1cv8gl2-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-gUQWC.framer-v-18iqn74.framer-1g3sj3s { flex-direction: column; gap: 60px; padding: 15px; width: 300px; }`,
          `.framer-gUQWC.framer-v-18iqn74 .framer-faolcd-container, .framer-gUQWC.framer-v-18iqn74 .framer-mf37mt-container, .framer-gUQWC.framer-v-18iqn74 .framer-1bzr61k-container, .framer-gUQWC.framer-v-18iqn74 .framer-5no09r-container { width: 100%; }`,
          `.framer-gUQWC[data-border="true"]::after, .framer-gUQWC [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-gUQWC`
      )),
      (Y.displayName = `NAV MENU`),
      (Y.defaultProps = { height: 52, width: 541 }),
      H(Y, {
        variant: {
          options: [`SnNOaglBC`, `zQ0KE9P_v`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: z.Enum,
        },
        PdsmeeeJ6: { title: `Features Passive`, type: z.ScrollSectionRef },
        Ca70t6UaX: { title: `Home Scroll Section`, type: z.ScrollSectionRef },
        dg70DYZf1: { title: `Home Nav Passive`, type: z.ScrollSectionRef },
        E1VDnva7s: { title: `Features Active`, type: z.ScrollSectionRef },
        RvgzwmSGY: { title: `Product Active`, type: z.ScrollSectionRef },
        PUmeHLtsE: { title: `Product Passive`, type: z.ScrollSectionRef },
        nQAehmuPT: { title: `Scroll Section`, type: z.ScrollSectionRef },
        b7zmLqTeR: { title: `Show case`, type: z.ScrollSectionRef },
      }),
      F(Y, [{ explicitInter: !0, fonts: [] }, ...qt], { supportsExplicitInterCodegen: !0 }),
      (Y.loader = { load: (e, t) => (t.locale, Promise.allSettled([M(K, {}, t)])) }));
  });
function on(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  X,
  Sn = e(() => {
    (b(),
      j(),
      A(),
      u(),
      ut(),
      ft(),
      bt(),
      At(),
      Re(),
      an(),
      (sn = P(We)),
      (cn = P(Y)),
      (ln = P(G)),
      (un = P(dt)),
      (dn = [`BM7tMcazb`, `WYkxKI3Su`, `vUcOkaaJX`]),
      (fn = `framer-aBIAN`),
      (pn = {
        BM7tMcazb: `framer-v-j7lohg`,
        vUcOkaaJX: `framer-v-b488xt`,
        WYkxKI3Su: `framer-v-vwow46`,
      }),
      (mn = void 0),
      (hn = { delay: 0, duration: 0.25, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (gn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (_n = ({ value: e, children: t }) => {
        let n = s(O),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(O.Provider, { value: i, children: t });
      }),
      (vn = { "Mobile Closed": `WYkxKI3Su`, "Mobile Opened": `vUcOkaaJX`, Desktop: `BM7tMcazb` }),
      (yn = D.create(a)),
      (bn = ({
        featuresPassive: e,
        featuresScrollSection: t,
        height: n,
        homeNavPassive: r,
        homeScrollSection: i,
        id: a,
        productActive: o,
        productPassive: s,
        width: c,
        ...l
      }) => ({
        ...l,
        Apee1Bt8u: o ?? l.Apee1Bt8u,
        fALSZKb37: e ?? l.fALSZKb37,
        J0_M0UDdY: s ?? l.J0_M0UDdY,
        rQ8RMEfAF: r ?? l.rQ8RMEfAF,
        T3HPnSxUm: i ?? l.T3HPnSxUm,
        t57Vo4ns5: t ?? l.t57Vo4ns5,
        variant: vn[l.variant] ?? l.variant ?? `BM7tMcazb`,
      })),
      (xn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = L(
        f(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = E(),
            { activeLocale: o, setLocale: s } = R(),
            c = fe(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              T3HPnSxUm: p,
              t57Vo4ns5: h,
              rQ8RMEfAF: g,
              fALSZKb37: v,
              Apee1Bt8u: y,
              J0_M0UDdY: b,
              ...ee
            } = bn(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: te,
              setGestureState: O,
              setVariant: A,
              variants: ne,
            } = _e({
              cycleOrder: dn,
              defaultVariant: `BM7tMcazb`,
              ref: i,
              variant: f,
              variantClassNames: pn,
            }),
            j = xn(e, ne),
            { activeVariantCallback: M, delay: N } = ue(x),
            re = M(async (...e) => {
              A(`vUcOkaaJX`);
            }),
            P = M(async (...e) => {
              A(`WYkxKI3Su`);
            }),
            ie = V(fn);
          he();
          let ae = () => ![`WYkxKI3Su`, `vUcOkaaJX`].includes(x),
            oe = () => !![`WYkxKI3Su`, `vUcOkaaJX`].includes(x),
            se = () => x === `vUcOkaaJX`;
          return m(k, {
            id: d ?? a,
            children: m(yn, {
              animate: ne,
              initial: !1,
              children: m(_n, {
                value: hn,
                children: _(D.header, {
                  ...ee,
                  ...w,
                  className: V(ie, `framer-j7lohg`, u, S),
                  "data-framer-name": `Desktop`,
                  layoutDependency: j,
                  layoutId: `BM7tMcazb`,
                  ref: i,
                  style: {
                    backdropFilter: `none`,
                    background: `rgba(0, 0, 0, 0)`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    WebkitBackdropFilter: `none`,
                    ...l,
                  },
                  variants: {
                    vUcOkaaJX: {
                      backdropFilter: `blur(40px)`,
                      background: `linear-gradient(180deg, rgba(1, 1, 23, 0.2) 0%, rgba(1, 1, 23, 0.2) 100%)`,
                      backgroundColor: `rgba(1, 1, 23, 0.2)`,
                      WebkitBackdropFilter: `blur(40px)`,
                    },
                    WYkxKI3Su: {
                      background: `linear-gradient(180deg, var(--token-129db3aa-c63b-49d4-a9df-4d7f82f7f83f, rgb(1, 1, 23)) 0%, rgba(0, 0, 0, 0) 100%)`,
                    },
                  },
                  ...on(
                    {
                      vUcOkaaJX: { "data-framer-name": `Mobile Opened` },
                      WYkxKI3Su: { "data-framer-name": `Mobile Closed` },
                    },
                    x,
                    T
                  ),
                  children: [
                    m(D.div, {
                      className: `framer-1sfik9i`,
                      "data-framer-name": `Container`,
                      layoutDependency: j,
                      layoutId: `nKVpqDxIZ`,
                      children: _(D.div, {
                        className: `framer-h7mu32`,
                        "data-framer-name": `desktop-menu`,
                        layoutDependency: j,
                        layoutId: `t7Vl92asH`,
                        children: [
                          m(I, {
                            links: [
                              { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              m(B, {
                                height: 48,
                                y: (c?.y || 0) + 25 + 0 + 0 + 0 + 24,
                                ...on(
                                  {
                                    vUcOkaaJX: { y: (c?.y || 0) + 0 + 0 + 0 + 0 + 24 },
                                    WYkxKI3Su: { y: (c?.y || 0) + 0 + 0 + 0 + 0 + 24 },
                                  },
                                  x,
                                  T
                                ),
                                children: m(U, {
                                  className: `framer-b3b1k1-container`,
                                  layoutDependency: j,
                                  layoutId: `QJ03X90eG-container`,
                                  nodeId: `QJ03X90eG`,
                                  rendersWithMotion: !0,
                                  scopeId: `HskjMAcxS`,
                                  children: m(We, {
                                    height: `100%`,
                                    id: `QJ03X90eG`,
                                    irY_XKj0O: e[0],
                                    layoutId: `QJ03X90eG`,
                                    variant: gn(`iC3uXzR0q`),
                                    width: `100%`,
                                    ...on(
                                      {
                                        vUcOkaaJX: { irY_XKj0O: e[2] },
                                        WYkxKI3Su: { irY_XKj0O: e[1] },
                                      },
                                      x,
                                      T
                                    ),
                                  }),
                                }),
                              }),
                          }),
                          ae() &&
                            m(D.nav, {
                              className: `framer-lmh0sm`,
                              "data-border": !0,
                              "data-framer-name": `Navigation`,
                              layoutDependency: j,
                              layoutId: `sKS2WVIVu`,
                              style: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `var(--token-64c13be0-f48f-466a-8d93-d1b8decde1b8, rgba(250, 250, 250, 0.1))`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                                borderBottomLeftRadius: 32,
                                borderBottomRightRadius: 32,
                                borderTopLeftRadius: 32,
                                borderTopRightRadius: 32,
                              },
                              children: m(B, {
                                height: 52,
                                y: (c?.y || 0) + 25 + 0 + 0 + 0 + 96 - 72 + 6,
                                children: m(U, {
                                  className: `framer-bc6jil-container`,
                                  layoutDependency: j,
                                  layoutId: `I3JwG2AY1-container`,
                                  nodeId: `I3JwG2AY1`,
                                  rendersWithMotion: !0,
                                  scopeId: `HskjMAcxS`,
                                  children: m(Y, {
                                    b7zmLqTeR: mn,
                                    Ca70t6UaX: p,
                                    dg70DYZf1: g,
                                    E1VDnva7s: h,
                                    height: `100%`,
                                    id: `I3JwG2AY1`,
                                    layoutId: `I3JwG2AY1`,
                                    PdsmeeeJ6: v,
                                    PUmeHLtsE: b,
                                    RvgzwmSGY: y,
                                    variant: gn(`SnNOaglBC`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          _(D.button, {
                            className: `framer-1quw86t`,
                            "data-framer-name": `Actions`,
                            "data-reset": `button`,
                            layoutDependency: j,
                            layoutId: `yqV3ZivSO`,
                            ...on(
                              {
                                vUcOkaaJX: { "data-highlight": !0, onTap: P },
                                WYkxKI3Su: { "data-highlight": !0, onTap: re },
                              },
                              x,
                              T
                            ),
                            children: [
                              oe() &&
                                m(ge, {
                                  animated: !0,
                                  className: `framer-1u5hbcm`,
                                  Component: lt,
                                  layoutDependency: j,
                                  layoutId: `AUGh10xbQ`,
                                  style: {
                                    "--1m6trwb": 0,
                                    "--21h8s6": `var(--token-f72f35de-6eed-43ee-9e84-9b471b441cf4, rgb(245, 245, 245))`,
                                    "--pgex8v": 1.5,
                                  },
                                  ...on({ vUcOkaaJX: { Component: yt } }, x, T),
                                }),
                              ae() &&
                                m(B, {
                                  height: 37,
                                  y: (c?.y || 0) + 25 + 0 + 0 + 0 + 29.5 + 0,
                                  children: m(U, {
                                    className: `framer-13ja4jg-container`,
                                    layoutDependency: j,
                                    layoutId: `gv_rfcenE-container`,
                                    nodeId: `gv_rfcenE`,
                                    rendersWithMotion: !0,
                                    scopeId: `HskjMAcxS`,
                                    children: m(G, {
                                      AYwwfkaKd: `https://docs.google.com/forms/d/e/1FAIpQLSeQIJhQMzPBFqP9yYTHWXvKw0VAtJ6xwEAuq-Xr2yI8E6VcNA/viewform`,
                                      FPjhikCji: !1,
                                      height: `100%`,
                                      id: `gv_rfcenE`,
                                      layoutId: `gv_rfcenE`,
                                      OlthDMhqu: `Đăng ký dùng thử`,
                                      r7ASsAiJ9: !0,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    se() &&
                      m(B, {
                        ...on(
                          {
                            vUcOkaaJX: {
                              height: 52,
                              width: `calc(${c?.width || `100vw`} - 40px)`,
                              y: (c?.y || 0) + 0 + 146,
                            },
                          },
                          x,
                          T
                        ),
                        children: m(U, {
                          className: `framer-1flstnu-container`,
                          layoutDependency: j,
                          layoutId: `mD9t2qR2t-container`,
                          nodeId: `mD9t2qR2t`,
                          rendersWithMotion: !0,
                          scopeId: `HskjMAcxS`,
                          children: m(Y, {
                            height: `100%`,
                            id: `mD9t2qR2t`,
                            layoutId: `mD9t2qR2t`,
                            style: { width: `100%` },
                            variant: gn(`zQ0KE9P_v`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    se() &&
                      m(B, {
                        children: m(U, {
                          className: `framer-57t2mv-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: j,
                          layoutId: `H8PufP3h9-container`,
                          nodeId: `H8PufP3h9`,
                          rendersWithMotion: !0,
                          scopeId: `HskjMAcxS`,
                          children: m(dt, {
                            height: `100%`,
                            id: `H8PufP3h9`,
                            layoutId: `H8PufP3h9`,
                            toggle: !0,
                            width: `100%`,
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-aBIAN.framer-6bbb4m, .framer-aBIAN .framer-6bbb4m { display: block; }`,
          `.framer-aBIAN.framer-j7lohg { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 25px 0px 0px 0px; position: relative; width: 1280px; }`,
          `.framer-aBIAN .framer-1sfik9i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; z-index: 10; }`,
          `.framer-aBIAN .framer-h7mu32 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 24px 0px 24px 0px; position: relative; width: 100%; }`,
          `.framer-aBIAN .framer-b3b1k1-container, .framer-aBIAN .framer-57t2mv-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-aBIAN .framer-lmh0sm { align-content: center; align-items: center; bottom: 8px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 243px; overflow: visible; padding: 6px; position: absolute; width: min-content; z-index: 1; }`,
          `.framer-aBIAN .framer-bc6jil-container { flex: none; height: auto; position: relative; width: auto; z-index: 10; }`,
          `.framer-aBIAN .framer-1quw86t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-aBIAN .framer-1u5hbcm { flex: none; height: auto; position: relative; width: 24px; }`,
          `.framer-aBIAN .framer-13ja4jg-container { cursor: pointer; flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-aBIAN .framer-1flstnu-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-aBIAN.framer-v-vwow46.framer-j7lohg { overflow: hidden; padding: 0px 20px 0px 20px; width: 390px; }`,
          `.framer-aBIAN.framer-v-vwow46 .framer-1sfik9i, .framer-aBIAN.framer-v-b488xt .framer-1sfik9i { padding: 0px; z-index: 1; }`,
          `.framer-aBIAN.framer-v-vwow46 .framer-1quw86t, .framer-aBIAN.framer-v-b488xt .framer-1quw86t { cursor: pointer; }`,
          `.framer-aBIAN.framer-v-vwow46 .framer-1u5hbcm, .framer-aBIAN.framer-v-b488xt .framer-1u5hbcm { width: 32px; }`,
          `.framer-aBIAN.framer-v-b488xt.framer-j7lohg { gap: 50px; overflow: hidden; padding: 0px 20px 600px 20px; width: 390px; }`,
          `.framer-aBIAN[data-border="true"]::after, .framer-aBIAN [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-aBIAN`
      )),
      (X.displayName = `Header`),
      (X.defaultProps = { height: 121, width: 1280 }),
      H(X, {
        variant: {
          options: [`BM7tMcazb`, `WYkxKI3Su`, `vUcOkaaJX`],
          optionTitles: [`Desktop`, `Mobile Closed`, `Mobile Opened`],
          title: `Variant`,
          type: z.Enum,
        },
        T3HPnSxUm: { title: `Home Scroll Section`, type: z.ScrollSectionRef },
        t57Vo4ns5: { title: `Features Scroll Section`, type: z.ScrollSectionRef },
        rQ8RMEfAF: { title: `Home Nav Passive`, type: z.ScrollSectionRef },
        fALSZKb37: { title: `Features Passive`, type: z.ScrollSectionRef },
        Apee1Bt8u: { title: `Product Active`, type: z.ScrollSectionRef },
        J0_M0UDdY: { title: `Product Passive`, type: z.ScrollSectionRef },
      }),
      F(X, [{ explicitInter: !0, fonts: [] }, ...sn, ...cn, ...ln, ...un], {
        supportsExplicitInterCodegen: !0,
      }),
      (X.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([M(We, {}, t), M(Y, {}, t), M(G, {}, t)])),
      }));
  }),
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An = e(() => {
    (b(),
      j(),
      u(),
      (Cn = `var(--framer-icon-mask)`),
      (wn = f(function (e, t) {
        return m(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Tn = D.create(wn)),
      (En = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? m(Tn, { ...a, layoutId: r, ref: t, children: i })
          : m(`svg`, { ...a, ref: t, children: i });
      })),
      (Dn = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 1.5 16.5 C 0.672 16.5 0 15.828 0 15 L 0 1.5 C 0 0.672 0.672 0 1.5 0 L 15 0 C 15.828 0 16.5 0.672 16.5 1.5 L 16.5 15 C 16.5 15.828 15.828 16.5 15 16.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="qUr6K2nJv" transform="translate(3.75 3.75)" width="16.5px"/><path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="MbfmAbWGf" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 12)" width="16.5px"/><path d="M 0 0 L 0 16.5" fill="transparent" height="16.5px" id="mcA57vhod" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 3.75)" width="1px"/></svg>`),
      (On = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (kn = L(
        f(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = On(e),
            u = Oe(`465907804`, Dn);
          return m(En, {
            ...l,
            className: V(`framer-ohg0r`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: m(`use`, { href: u }),
          });
        }),
        [
          `.framer-ohg0r { -webkit-mask: ${Cn}; aspect-ratio: 1; display: block; mask: ${Cn}; width: 24px; }`,
        ],
        `framer-ohg0r`
      )),
      (kn.displayName = `Plus`),
      H(kn, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: z.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: z.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: z.Number,
        },
      }));
  });
function jn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Z,
  Wn = e(() => {
    (b(),
      j(),
      A(),
      u(),
      Ve(),
      An(),
      (Mn = P(kn)),
      (Nn = P(He)),
      (Pn = [`HnJ8qWVJX`, `AfO65BCMc`, `a0PDxByKJ`, `Q9BqiCKNd`]),
      (Fn = `framer-Ky08N`),
      (In = {
        a0PDxByKJ: `framer-v-67e0op`,
        AfO65BCMc: `framer-v-cp4qys`,
        HnJ8qWVJX: `framer-v-16wermw`,
        Q9BqiCKNd: `framer-v-14viuwh`,
      }),
      (Ln = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Rn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.25, delay: 0, duration: 0.45, type: `spring` },
        y: -5,
      }),
      (zn = ({ value: e, children: t }) => {
        let n = s(O),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(O.Provider, { value: i, children: t });
      }),
      (Bn = { Close: `Q9BqiCKNd`, Desktop: `HnJ8qWVJX`, Phone: `a0PDxByKJ`, Tablet: `AfO65BCMc` }),
      (Vn = D.create(a)),
      (Hn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Bn[r.variant] ?? r.variant ?? `HnJ8qWVJX`,
      })),
      (Un = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = L(
        f(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = E(),
            { activeLocale: o, setLocale: s } = R();
          fe();
          let { style: c, className: l, layoutId: u, variant: d, ...f } = Hn(e),
            {
              baseVariant: p,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: b,
              setGestureState: ee,
              setVariant: x,
              variants: S,
            } = _e({
              cycleOrder: Pn,
              defaultVariant: `HnJ8qWVJX`,
              ref: i,
              variant: d,
              variantClassNames: In,
            }),
            C = Un(e, S),
            { activeVariantCallback: w, delay: T } = ue(p),
            te = w(async (...e) => {
              x(`Q9BqiCKNd`);
            }),
            O = V(Fn),
            A = () => p !== `Q9BqiCKNd`;
          return m(k, {
            id: u ?? a,
            children: m(Vn, {
              animate: S,
              initial: !1,
              children: m(zn, {
                value: Ln,
                children: _(D.div, {
                  ...f,
                  ...v,
                  className: V(O, `framer-16wermw`, l, h),
                  "data-framer-name": `Desktop`,
                  layoutDependency: C,
                  layoutId: `HnJ8qWVJX`,
                  ref: i,
                  style: {
                    backdropFilter: `blur(25px)`,
                    backgroundColor: `rgba(255, 255, 255, 0.16)`,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    WebkitBackdropFilter: `blur(25px)`,
                    ...c,
                  },
                  variants: {
                    Q9BqiCKNd: {
                      backdropFilter: `none`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                      WebkitBackdropFilter: `none`,
                    },
                  },
                  ...jn(
                    {
                      a0PDxByKJ: { "data-framer-name": `Phone` },
                      AfO65BCMc: { "data-framer-name": `Tablet` },
                      Q9BqiCKNd: { "data-framer-name": `Close` },
                    },
                    p,
                    y
                  ),
                  children: [
                    A() &&
                      m(D.div, {
                        className: `framer-1gyno9q`,
                        "data-border": !0,
                        "data-framer-name": `Close`,
                        "data-highlight": !0,
                        layoutDependency: C,
                        layoutId: `VDOu1Hd3e`,
                        onTap: te,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `rgba(250, 250, 250, 0.16)`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `1px`,
                          backdropFilter: `blur(35px)`,
                          borderBottomLeftRadius: 17,
                          borderBottomRightRadius: 17,
                          borderTopLeftRadius: 17,
                          borderTopRightRadius: 17,
                          WebkitBackdropFilter: `blur(35px)`,
                        },
                        whileHover: Rn,
                        children: m(kn, {
                          animated: !0,
                          className: `framer-1imn8oj`,
                          layoutDependency: C,
                          layoutId: `RmT3kzzmV`,
                          style: {
                            "--1m6trwb": 0,
                            "--21h8s6": `var(--token-3dc2a28e-f021-4e48-9a39-ebd2f9557044, rgb(163, 163, 163))`,
                            "--pgex8v": 1.5,
                            rotate: -45,
                          },
                        }),
                      }),
                    A() &&
                      m(B, {
                        children: m(U, {
                          className: `framer-1n9jot8-container`,
                          isModuleExternal: !0,
                          layoutDependency: C,
                          layoutId: `bP6MQtOM6-container`,
                          nodeId: `bP6MQtOM6`,
                          rendersWithMotion: !0,
                          scopeId: `Xx3CQgVjS`,
                          children: m(He, {
                            borderRadius: 12,
                            bottomLeftRadius: 12,
                            bottomRightRadius: 12,
                            height: `100%`,
                            id: `bP6MQtOM6`,
                            isMixedBorderRadius: !1,
                            isRed: !0,
                            layoutId: `bP6MQtOM6`,
                            play: `Off`,
                            shouldMute: !0,
                            style: { height: `100%`, width: `100%` },
                            thumbnail: `Medium Quality`,
                            topLeftRadius: 12,
                            topRightRadius: 12,
                            url: `https://www.youtube.com/watch?v=O2oY68CqWZA`,
                            width: `100%`,
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-Ky08N.framer-1oef5im, .framer-Ky08N .framer-1oef5im { display: block; }`,
          `.framer-Ky08N.framer-16wermw { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 5px; position: relative; width: min-content; }`,
          `.framer-Ky08N .framer-1gyno9q { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 21px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; right: 0px; top: -25px; width: 21px; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
          `.framer-Ky08N .framer-1imn8oj { flex: none; height: auto; position: relative; width: 16px; }`,
          `.framer-Ky08N .framer-1n9jot8-container { flex: none; height: 113px; position: relative; width: 200px; }`,
          `.framer-Ky08N.framer-v-67e0op .framer-1n9jot8-container { height: 89px; width: 158px; }`,
          `.framer-Ky08N.framer-v-14viuwh.framer-16wermw { min-height: 148px; min-width: 255px; }`,
          `.framer-Ky08N[data-border="true"]::after, .framer-Ky08N [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-Ky08N`
      )),
      (Z.displayName = `Delete This`),
      (Z.defaultProps = { height: 123, width: 210 }),
      H(Z, {
        variant: {
          options: [`HnJ8qWVJX`, `AfO65BCMc`, `a0PDxByKJ`, `Q9BqiCKNd`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`, `Close`],
          title: `Variant`,
          type: z.Enum,
        },
      }),
      F(Z, [{ explicitInter: !0, fonts: [] }, ...Mn, ...Nn], { supportsExplicitInterCodegen: !0 }));
  }),
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Q,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  $,
  cr = e(() => {
    (b(),
      j(),
      A(),
      u(),
      nt(),
      Sn(),
      Be(),
      Wn(),
      (Gn = P(X)),
      (Kn = P(Z)),
      (qn = P(Ge)),
      (Jn = P(W)),
      (Yn = {
        I56gUQFGm: `(min-width: 1200px)`,
        pd6ytuzE1: `(min-width: 810px) and (max-width: 1199.98px)`,
        tHCgLbG0e: `(max-width: 809.98px)`,
      }),
      (Xn = `framer-6PaXG`),
      (Zn = {
        I56gUQFGm: `framer-v-140pyj1`,
        pd6ytuzE1: `framer-v-pzk0yl`,
        tHCgLbG0e: `framer-v-pmyeso`,
      }),
      (Q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Qn = {
        tHCgLbG0e: [
          `.framer-6PaXG .framer-lcqu2a-container { left: 50%; position: var(--framer-canvas-fixed-position, fixed); transform: translateX(-50%); }`,
        ],
      }),
      ($n = Object.keys(Qn)),
      (er = { tHCgLbG0e: `.framer-pmyeso-override` }),
      (tr = [
        `.framer-6PaXG.framer-1iygm5, .framer-6PaXG .framer-1iygm5 { display: block; }`,
        `.framer-6PaXG.framer-140pyj1 { --selection-background-color: var(--token-cd267c31-c786-4dde-8352-aa0f2bc35c58, #faca8b) /* {"name":"Creme"} */; --selection-color: var(--token-bca62d06-743e-42b8-943d-3b018b7cf080, #fff4e3) /* {"name":"Creme 100"} */; align-content: center; align-items: center; background-color: var(--token-129db3aa-c63b-49d4-a9df-4d7f82f7f83f, #010117); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6PaXG .framer-lcqu2a-container { flex: none; height: auto; order: -1000; position: sticky; top: 0px; width: 100%; z-index: 10; }`,
        `.framer-6PaXG .framer-o4tdt9 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-6PaXG .framer-ppkyv1 { align-content: flex-end; align-items: flex-end; bottom: calc(calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 70px); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; order: 1002; overflow: visible; padding: 0px 10px 0px 10px; position: var(--framer-canvas-fixed-position, fixed); right: 20px; width: min-content; z-index: 10; }`,
        `.framer-6PaXG .framer-1oiejot-container { flex: none; height: auto; position: relative; width: auto; z-index: 10; }`,
        `.framer-6PaXG .framer-1i19k86-container { flex: none; height: auto; min-width: 100px; position: relative; width: auto; z-index: 10; }`,
        `.framer-6PaXG .framer-obna49-container { flex: none; height: 10px; order: 1003; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
        `.framer-6PaXG[data-selection="true"] * ::selection, .framer-6PaXG [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
      ]),
      (nr = {
        I56gUQFGm: `(min-width: 1200px)`,
        pd6ytuzE1: `(min-width: 810px) and (max-width: 1199.98px)`,
        tHCgLbG0e: `(max-width: 809.98px)`,
      }),
      (rr = { Desktop: `I56gUQFGm`, Phone: `tHCgLbG0e`, Tablet: `pd6ytuzE1` }),
      (ir = ({ value: e }) =>
        Ne()
          ? null
          : m(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (ar = ({
        blog: e,
        features: t,
        featuresPassive: n,
        height: r,
        homeActive: i,
        homePassive: a,
        id: o,
        productActive: s,
        productPassive: c,
        width: l,
        ...u
      }) => ({
        ...u,
        EzSNs9Obl: a ?? u.EzSNs9Obl,
        ijCz8cPdl: t ?? u.ijCz8cPdl,
        JDoUE0Q8I: e ?? u.JDoUE0Q8I,
        KB36F5lyR: n ?? u.KB36F5lyR,
        KnwXTuwwP: c ?? u.KnwXTuwwP,
        Lo3xd9ZUS: i ?? u.Lo3xd9ZUS,
        RbgiRgJS1: s ?? u.RbgiRgJS1,
        variant: rr[u.variant] ?? u.variant ?? `I56gUQFGm`,
      })),
      (or = f(function (e, n) {
        let r = t(null),
          i = n ?? r,
          a = E(),
          { activeLocale: o, setLocale: s } = R(),
          {
            style: c,
            className: l,
            layoutId: u,
            variant: d,
            Lo3xd9ZUS: f,
            EzSNs9Obl: p,
            ijCz8cPdl: h,
            KB36F5lyR: g,
            RbgiRgJS1: v,
            KnwXTuwwP: y,
            JDoUE0Q8I: b,
            children: ee,
            ...x
          } = ar(e),
          [S, C] = ye(d, Yn, !1),
          w = V(Xn);
        return (
          ne({}),
          m(me.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: rr,
              isLayoutTemplate: !0,
              primaryVariantId: `I56gUQFGm`,
              variantClassNames: Zn,
            },
            children: _(k, {
              id: u ?? a,
              children: [
                m(ir, {
                  value: `:root body { background: var(--token-129db3aa-c63b-49d4-a9df-4d7f82f7f83f, rgb(1, 1, 23)); }`,
                }),
                _(D.div, {
                  ...x,
                  className: V(w, `framer-140pyj1`, l),
                  "data-layout-template": !0,
                  "data-selection": !0,
                  ref: i,
                  style: { ...c },
                  children: [
                    m(B, {
                      height: 111,
                      width: `100vw`,
                      y: 0,
                      children: m(ke, {
                        breakpoint: S,
                        overrides: {
                          tHCgLbG0e: { "data-framer-layout-hint-center-x": !0, layoutScroll: !0 },
                        },
                        children: m(Ee, {
                          className: `framer-lcqu2a-container`,
                          nodeId: `Ou8r3MGSV`,
                          scopeId: `Jyr06fner`,
                          children: m(ke, {
                            breakpoint: S,
                            overrides: { tHCgLbG0e: { variant: Q(`WYkxKI3Su`) } },
                            children: m(X, {
                              Apee1Bt8u: v,
                              fALSZKb37: g,
                              height: `100%`,
                              id: `Ou8r3MGSV`,
                              J0_M0UDdY: y,
                              layoutId: `Ou8r3MGSV`,
                              OrPShorLq: b,
                              rQ8RMEfAF: p,
                              style: { width: `100%` },
                              T3HPnSxUm: f,
                              t57Vo4ns5: h,
                              variant: Q(`BM7tMcazb`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    ee,
                    m(`div`, { className: `framer-o4tdt9` }),
                    _(D.div, {
                      className: `framer-ppkyv1`,
                      "data-framer-name": `Delete This`,
                      children: [
                        m(B, {
                          height: 123,
                          y: 749,
                          children: m(Ee, {
                            className: `framer-1oiejot-container`,
                            nodeId: `UCJX1BNum`,
                            scopeId: `Jyr06fner`,
                            children: m(ke, {
                              breakpoint: S,
                              overrides: {
                                pd6ytuzE1: { variant: Q(`AfO65BCMc`) },
                                tHCgLbG0e: { variant: Q(`a0PDxByKJ`) },
                              },
                              children: m(Z, {
                                height: `100%`,
                                id: `UCJX1BNum`,
                                layoutId: `UCJX1BNum`,
                                variant: Q(`HnJ8qWVJX`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        m(B, {
                          height: 48,
                          y: 882,
                          children: m(Ee, {
                            className: `framer-1i19k86-container`,
                            nodeId: `FrbdWMtGW`,
                            scopeId: `Jyr06fner`,
                            children: m(Ge, {
                              AKuoesW74: 14,
                              AYwwfkaKd: `https://www.youtube.com/watch?v=f4voNcwBvTo`,
                              FPjhikCji: !1,
                              height: `100%`,
                              id: `FrbdWMtGW`,
                              layoutId: `FrbdWMtGW`,
                              OlthDMhqu: `Xem demo chi tiết`,
                              r7ASsAiJ9: !0,
                              variant: Q(`uGayw3Tld`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    m(ke, {
                      breakpoint: S,
                      overrides: { tHCgLbG0e: { y: 1e3 } },
                      children: m(B, {
                        height: 10,
                        width: `100vw`,
                        y: 1111,
                        children: m(Ee, {
                          className: `framer-obna49-container`,
                          nodeId: `GKRGkR0nC`,
                          scopeId: `Jyr06fner`,
                          children: m(ke, {
                            breakpoint: S,
                            overrides: {
                              pd6ytuzE1: { variant: Q(`p1TrTqind`) },
                              tHCgLbG0e: { variant: Q(`p1TrTqind`) },
                            },
                            children: m(W, {
                              height: `100%`,
                              id: `GKRGkR0nC`,
                              layoutId: `GKRGkR0nC`,
                              style: { height: `100%`, width: `100%` },
                              variant: Q(`ElWXHPJjD`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                m(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (sr = (e) =>
        e === xe.canvas || e === xe.export
          ? [
              ...tr,
              ...$n.flatMap((e) => {
                let t = er[e];
                return Qn[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...tr, ...$n.map((e) => `@media ${nr[e]} { ${Qn[e].join(` `)} }`)]),
      ($ = L(or, sr, `framer-6PaXG`)),
      ($.displayName = `Header & Footer Template`),
      ($.defaultProps = { height: 1e3, width: 1200 }),
      H($, {
        Lo3xd9ZUS: { title: `Home Active`, type: z.ScrollSectionRef },
        EzSNs9Obl: { title: `Home Passive`, type: z.ScrollSectionRef },
        ijCz8cPdl: { title: `Features`, type: z.ScrollSectionRef },
        KB36F5lyR: { title: `Features Passive`, type: z.ScrollSectionRef },
        RbgiRgJS1: { title: `Product Active`, type: z.ScrollSectionRef },
        KnwXTuwwP: { title: `Product Passive`, type: z.ScrollSectionRef },
        JDoUE0Q8I: { title: `Blog`, type: z.ScrollSectionRef },
      }),
      F($, [{ explicitInter: !0, fonts: [] }, ...Gn, ...Kn, ...qn, ...Jn], {
        supportsExplicitInterCodegen: !0,
      }),
      ($.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([M(X, {}, t), M(Z, {}, t), M(Ge, {}, t), M(W, {}, t)])
        ),
      }));
  });
function lr({ webPageId: e, children: t, style: n, ...r }) {
  let i = {
      EzSNs9Obl: { href: { hash: `:U6VhzUg6a`, webPageId: `augiA20Il` }, refKey: !0 },
      ijCz8cPdl: { href: { hash: `:N2ijbw0rP`, webPageId: `augiA20Il` }, refKey: !0 },
      KB36F5lyR: { href: { hash: `:lCq8UO0dC`, webPageId: `augiA20Il` }, refKey: !0 },
      RbgiRgJS1: { href: { hash: `:lCq8UO0dC`, webPageId: `augiA20Il` }, refKey: !0 },
    },
    a = { ...i, EzSNs9Obl: void 0, ijCz8cPdl: void 0, KB36F5lyR: void 0, RbgiRgJS1: void 0 },
    o = Me(),
    s = { augiA20Il: i, weKLGiygA: a }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `weKLGiygA`:
      return w(I, { links: [s.EzSNs9Obl, s.ijCz8cPdl, s.KB36F5lyR, s.RbgiRgJS1] }, (e) =>
        w(
          $,
          {
            ...s,
            EzSNs9Obl: o(e[0]),
            ijCz8cPdl: o(e[1]),
            KB36F5lyR: o(e[2]),
            key: `HeaderFooterTemplate`,
            RbgiRgJS1: o(e[3]),
            style: n,
          },
          t(!0)
        )
      );
    default:
      return t(!1);
  }
}
function ur(e) {
  switch (e) {
    case `augiA20Il`:
    case `weKLGiygA`:
      return [
        { hash: `pmyeso`, mediaQuery: `(max-width: 809.98px)` },
        { hash: `pzk0yl`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `140pyj1`, mediaQuery: `(min-width: 1200px)` },
      ];
    default:
      return;
  }
}
async function dr({ routeId: e, pathVariables: n, localeId: s, collectionItemId: c }) {
  let u = mr[e].page.preload();
  je({
    disableCustomCode: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !1,
    privateRouterReplaceState: !1,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  });
  let f = w(ve, {
    children: w(De, {
      children: w(be, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: n,
        routes: mr,
        collectionUtils: gr,
        framerSiteId: _r,
        notFoundPage: le(
          () => import(`./aKBF-xKvwF46HuMNzoEi7w-OUPLzNLN0KDmjK4bqmVQ.BDVg7JqV.mjs`)
        ),
        isReducedMotion: void 0,
        localeId: s,
        locales: hr,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://util4dev.framer.website`,
        EditorBar:
          d === void 0
            ? void 0
            : (() => {
                if (yr) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return le(async () => {
                  d.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: ae, useLocaleInfo: R, useRouter: he },
                    react: {
                      createElement: w,
                      Fragment: a,
                      memo: h,
                      useCallback: l,
                      useEffect: i,
                      useRef: t,
                      useState: o,
                      useLayoutEffect: r,
                    },
                    "react-dom": { createPortal: g },
                  };
                  let { createEditorBar: e } = await import(`init.mjs`);
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !1,
        LayoutTemplate: lr,
        loadSnippetsModule: new we(
          () => import(`./DQqSUZsnaRFZh7IOWWHNlhUcW2OuIQoZol3YF9qrJXY.dObCGW41.mjs`)
        ),
        initialCollectionItemId: c,
      }),
    }),
    value: { routes: {} },
  });
  return (await u, f);
}
function fr() {
  vr && d.__framer_events.push(arguments);
}
async function pr(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || d.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    fr(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, o, s;
    if (e)
      ((s = JSON.parse(t.dataset.framerHydrateV2)),
        (r = s.routeId),
        (i = s.localeId),
        (a = s.pathVariables),
        (o = s.breakpoints),
        (r = N(mr, r)));
    else {
      N(mr, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = oe(mr, decodeURIComponent(location.pathname), !0, hr);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let c = dr({
      routeId: r,
      localeId: i,
      pathVariables: a,
      collectionItemId: s?.collectionItemId,
    });
    d !== void 0 &&
      (async () => {
        let e = mr[r],
          t = hr.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = s?.collectionItemId ?? null;
        if (n === null && e?.collectionId && gr) {
          let r = await gr[e.collectionId]?.(),
            [i] = Object.values(a);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          c = o.timeZone,
          l = o.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          d.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: _r,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: d.location.href,
              hostname: d.location.hostname || null,
              pathname: d.location.pathname || null,
              hash: d.location.hash || null,
              search: d.location.search || null,
              timezone: c,
              locale: l,
            },
            `eager`,
          ]),
          await Se({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let l = await c;
    e
      ? (Ae(`framer-rewrite-breakpoints`, () => {
          (re(o), d.__framer_onRewriteBreakpoints?.(o));
        }),
        (yr ? (e) => e() : T)(() => {
          (ce(), de(), C(t, l, { onRecoverableError: n }));
        }))
      : x(t, { onRecoverableError: n }).render(l);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var mr, hr, gr, _r, vr, yr;
e(() => {
  if (
    (te(),
    j(),
    u(),
    p(),
    y(),
    cr(),
    (mr = {
      augiA20Il: {
        elements: {
          IknGWjLgy: `benefits`,
          iYUNHqCEb: `hero`,
          lCq8UO0dC: `image-gen`,
          N2ijbw0rP: `features`,
          sgmlFhWUG: `product`,
          U6VhzUg6a: `richtext`,
          v99AbFhke: `faqs`,
          zKzXmXRGU: `showcases`,
        },
        page: le(() => import(`./b9AnrOqDE7ngOlbAioYs0FAvP8DlR5C9GIBtYeJr6Ro.DhfqFp_1.mjs`)),
        path: `/`,
      },
      weKLGiygA: {
        elements: {},
        page: le(() => import(`./aKBF-xKvwF46HuMNzoEi7w-OUPLzNLN0KDmjK4bqmVQ.BDVg7JqV.mjs`)),
        path: `/404`,
      },
    }),
    (hr = [{ code: `vi-VN`, id: `default`, name: `Vietnamese`, slug: ``, textDirection: `ltr` }]),
    (gr = {}),
    (_r = `be8cad654d7a2fe26d4fe3d5007755fec82f6796fd3f299b911dc7610cf9e1fd`),
    (vr = typeof document < `u`),
    (yr = vr && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(n.userAgent)),
    vr)
  ) {
    ((d.__framer_importFromPackage = (e, t) => () =>
      w(Ce, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (d.__framer_events = d.__framer_events || []),
      Fe());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? pr(!0, e) : pr(!1, e);
  }
  (function () {
    vr &&
      T(() => {
        C(
          document.getElementById(`__framer-badge-container`),
          w(v, {}, w(ee(() => import(`./PX9hIOIVM.DWw84Wuv.mjs`))))
        );
      });
  })();
})();
export { ur as getLayoutTemplateBreakpoints, dr as getPageRoot };
//# sourceMappingURL=script_main.Bj7q1JfV.mjs.map
