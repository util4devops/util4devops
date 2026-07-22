import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  C as r,
  D as i,
  F as a,
  I as o,
  L as s,
  M as c,
  N as l,
  P as u,
  T as d,
  V as f,
  _ as p,
  a as m,
  c as h,
  g,
  i as _,
  l as v,
  m as y,
  n as b,
  o as x,
  p as S,
  r as C,
  s as w,
  t as T,
  u as E,
  v as ee,
  y as D,
  z as O,
} from "./react.B4kFiiQA.mjs";
import { S as k, a as A, r as j, t as M } from "./motion.CYX_XZth.mjs";
import {
  $ as N,
  B as P,
  E as F,
  G as te,
  K as ne,
  M as I,
  N as re,
  Q as ie,
  R as ae,
  T as oe,
  U as se,
  V as ce,
  X as le,
  Y as ue,
  Z as de,
  _ as fe,
  a as pe,
  at as me,
  b as L,
  c as he,
  ct as ge,
  d as _e,
  et as ve,
  f as ye,
  g as be,
  h as xe,
  ht as Se,
  i as Ce,
  l as we,
  lt as R,
  mt as Te,
  n as Ee,
  nt as z,
  o as De,
  ot as Oe,
  p as ke,
  pt as Ae,
  q as je,
  r as B,
  st as Me,
  t as V,
  tt as Ne,
  u as Pe,
  w as H,
  x as U,
  y as W,
  z as Fe,
} from "./framer.D26jh1-v.mjs";
import {
  A as Ie,
  C as Le,
  D as Re,
  E as ze,
  M as Be,
  O as Ve,
  S as He,
  T as Ue,
  b as We,
  j as Ge,
  k as Ke,
  m as qe,
  p as Je,
  v as Ye,
  x as Xe,
} from "./shared-lib.C2dcIIPs.mjs";
function Ze(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  G,
  st = e(() => {
    (x(),
      P(),
      M(),
      d(),
      Be(),
      (Qe = [`ElWXHPJjD`, `p1TrTqind`]),
      ($e = `framer-iswKx`),
      (et = { ElWXHPJjD: `framer-v-bwvw2j`, p1TrTqind: `framer-v-rv6lfo` }),
      (tt = { delay: 0, duration: 0.25, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (nt = ({ value: e, children: t }) => {
        let n = c(A),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(A.Provider, { value: i, children: t });
      }),
      (rt = { Desktop: `ElWXHPJjD`, Mobile: `p1TrTqind` }),
      (it = k.create(o)),
      (at = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: rt[r.variant] ?? r.variant ?? `ElWXHPJjD`,
      })),
      (ot = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = R(
        p(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = D(),
            { activeLocale: s, setLocale: c } = z();
          de();
          let { style: l, className: u, layoutId: d, variant: f, ...p } = at(e),
            {
              baseVariant: m,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: S,
              setVariant: C,
              variants: w,
            } = ge({
              cycleOrder: Qe,
              defaultVariant: `ElWXHPJjD`,
              ref: i,
              variant: f,
              variantClassNames: et,
            }),
            T = ot(e, w),
            E = H($e, Ke);
          return h(j, {
            id: d ?? a,
            children: h(it, {
              animate: w,
              initial: !1,
              children: h(nt, {
                value: tt,
                children: h(k.footer, {
                  ...p,
                  ...y,
                  className: H(E, `framer-bwvw2j`, u, g),
                  "data-framer-name": `Desktop`,
                  layoutDependency: T,
                  layoutId: `ElWXHPJjD`,
                  ref: i,
                  style: { ...l },
                  ...Ze({ p1TrTqind: { "data-framer-name": `Mobile` } }, m, b),
                  children: v(k.div, {
                    className: `framer-1dg903l`,
                    "data-framer-name": `Container`,
                    layoutDependency: T,
                    layoutId: `mW0uZaWgU`,
                    children: [
                      h(k.div, {
                        className: `framer-euh8xw`,
                        "data-framer-name": `Container`,
                        layoutDependency: T,
                        layoutId: `DAj2GmyMR`,
                      }),
                      h(k.div, {
                        className: `framer-w8i7a0`,
                        "data-framer-name": `Designed By Faruk Yurtseven`,
                        layoutDependency: T,
                        layoutId: `Jlb081m8z`,
                        children: h(fe, {
                          __fromCanvasComponent: !0,
                          children: h(o, {
                            children: h(k.p, {
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
                          layoutDependency: T,
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
          ...Ie,
        ],
        `framer-iswKx`
      )),
      (G.displayName = `Footer`),
      (G.defaultProps = { height: 300, width: 1200 }),
      U(G, {
        variant: {
          options: [`ElWXHPJjD`, `p1TrTqind`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      L(
        G,
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
          ...re(Ge),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht = e(() => {
    (x(),
      P(),
      d(),
      (ct = `var(--framer-icon-mask)`),
      (lt = p(function (e, t) {
        return h(`svg`, { ...e, ref: t, children: e.children });
      })),
      (ut = k.create(lt)),
      (dt = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? h(ut, { ...a, layoutId: r, ref: t, children: i })
          : h(`svg`, { ...a, ref: t, children: i });
      })),
      (ft = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 12 L 0 0 L 16.5 0 L 16.5 12 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="12px" id="gwB_ZdJt6" transform="translate(3.75 6)" width="16.5px"/><path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="xGkn4qbwc" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 12)" width="16.5px"/><path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="uQ9bOFKFt" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 6)" width="16.5px"/><path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="hrURkUe9P" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 18)" width="16.5px"/></svg>`),
      (pt = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (mt = R(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = pt(e),
            u = Oe(`3559153988`, ft);
          return h(dt, {
            ...l,
            className: H(`framer-iZmZi`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: h(`use`, { href: u }),
          });
        }),
        [
          `.framer-iZmZi { -webkit-mask: ${ct}; aspect-ratio: 1; display: block; mask: ${ct}; width: 24px; }`,
        ],
        `framer-iZmZi`
      )),
      (mt.displayName = `List`),
      U(mt, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: B.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: B.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: B.Number,
        },
      }));
  });
function gt(e) {
  let { toggle: t } = e;
  return t
    ? h(`style`, {
        "data-frameruni-stop-scroll": !0,
        children: `html,body { overflow: hidden !important; }`,
      })
    : h(w, {});
}
var _t = e(() => {
    (x(),
      P(),
      (gt.displayName = `Stop Scroll`),
      U(gt, {
        toggle: {
          type: B.Boolean,
          title: `Block Scroll`,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }),
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt = e(() => {
    (x(),
      P(),
      d(),
      (vt = `var(--framer-icon-mask)`),
      (yt = p(function (e, t) {
        return h(`svg`, { ...e, ref: t, children: e.children });
      })),
      (bt = k.create(yt)),
      (xt = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? h(bt, { ...a, layoutId: r, ref: t, children: i })
          : h(`svg`, { ...a, ref: t, children: i });
      })),
      (St = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 1.5 16.5 C 0.672 16.5 0 15.828 0 15 L 0 1.5 C 0 0.672 0.672 0 1.5 0 L 15 0 C 15.828 0 16.5 0.672 16.5 1.5 L 16.5 15 C 16.5 15.828 15.828 16.5 15 16.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="LjE0Ycn76" transform="translate(3.75 3.75)" width="16.5px"/><path d="M 13.5 0 L 0 13.5" fill="var(--21h8s6, rgb(0, 0, 0))" height="13.5px" id="oSDwjLCvX" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(5.25 5.25)" width="13.5px"/><path d="M 13.5 13.5 L 0 0" fill="var(--21h8s6, rgb(0, 0, 0))" height="13.5px" id="H9XwXWiXU" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(5.25 5.25)" width="13.5px"/></svg>`),
      (Ct = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (wt = R(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = Ct(e),
            u = Oe(`2202960551`, St);
          return h(xt, {
            ...l,
            className: H(`framer-AhL2C`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: h(`use`, { href: u }),
          });
        }),
        [
          `.framer-AhL2C { -webkit-mask: ${vt}; aspect-ratio: 1; display: block; mask: ${vt}; width: 24px; }`,
        ],
        `framer-AhL2C`
      )),
      (wt.displayName = `X`),
      U(wt, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: B.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: B.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: B.Number,
        },
      }));
  });
function Et(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  K,
  Ft = e(() => {
    (x(),
      P(),
      M(),
      d(),
      Be(),
      (Dt = { mFxxs8sId: { hover: !0 } }),
      (Ot = `framer-2azqR`),
      (kt = { mFxxs8sId: `framer-v-1q3855e` }),
      (At = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (jt = ({ value: e, children: t }) => {
        let n = c(A),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(A.Provider, { value: i, children: t });
      }),
      (Mt = k.create(o)),
      (Nt = ({
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
      (Pt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = R(
        p(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = D(),
            { activeLocale: s, setLocale: c } = z();
          de();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              r7ASsAiJ9: p,
              OlthDMhqu: m,
              AYwwfkaKd: g,
              FPjhikCji: _,
              C3iVRYv1r: v,
              ...y
            } = Nt(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: ee,
              variants: O,
            } = ge({
              defaultVariant: `mFxxs8sId`,
              enabledGestures: Dt,
              ref: i,
              variant: f,
              variantClassNames: kt,
            }),
            A = Pt(e, O),
            { activeVariantCallback: M, delay: N } = le(b),
            P = M(async (...e) => {
              if ((E({ isPressed: !1 }), v && (await v(...e)) === !1)) return !1;
            }),
            F = H(Ot, Ke);
          return h(j, {
            id: d ?? a,
            children: h(Mt, {
              animate: O,
              initial: !1,
              children: h(jt, {
                value: At,
                children: h(Pe, {
                  href: g,
                  motionChild: !0,
                  nodeId: `mFxxs8sId`,
                  openInNewTab: _,
                  scopeId: `eywgDRQDd`,
                  children: h(k.a, {
                    ...y,
                    ...C,
                    className: `${H(F, `framer-1q3855e`, u, x)} framer-d2a2t9`,
                    "data-border": !0,
                    "data-framer-name": `Small Button`,
                    "data-highlight": !0,
                    layoutDependency: A,
                    layoutId: `mFxxs8sId`,
                    onTap: P,
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
                    ...Et({ "mFxxs8sId-hover": { "data-framer-name": void 0 } }, b, w),
                    children:
                      p &&
                      h(k.div, {
                        className: `framer-15m53we`,
                        "data-framer-name": `label`,
                        layoutDependency: A,
                        layoutId: `zI2p1NaG7`,
                        children: h(fe, {
                          __fromCanvasComponent: !0,
                          children: h(o, {
                            children: h(k.p, {
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
                          text: m,
                          variants: {
                            "mFxxs8sId-hover": {
                              "--extracted-r6o4lv": `var(--token-70660a9e-f10c-47c6-b288-e9736a966ef3, rgb(212, 212, 212))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Et(
                            {
                              "mFxxs8sId-hover": {
                                children: h(o, {
                                  children: h(k.p, {
                                    className: `framer-styles-preset-ke6suj`,
                                    "data-styles-preset": `Bv6I6Qd8d`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-70660a9e-f10c-47c6-b288-e9736a966ef3, rgb(212, 212, 212)))`,
                                    },
                                    children: h(k.span, {
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
                            w
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
          ...Ie,
          `.framer-2azqR[data-border="true"]::after, .framer-2azqR [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-2azqR`
      )),
      (K.displayName = `Small Button`),
      (K.defaultProps = { height: 37.5, width: 84 }),
      U(K, {
        r7ASsAiJ9: { defaultValue: !0, title: `Button Label`, type: B.Boolean },
        OlthDMhqu: {
          defaultValue: `Button`,
          displayTextArea: !1,
          title: `Button Label`,
          type: B.String,
        },
        AYwwfkaKd: { title: `Link`, type: B.Link },
        FPjhikCji: { defaultValue: !1, title: `New Tab`, type: B.Boolean },
        C3iVRYv1r: { title: `Tap`, type: B.EventHandler },
      }),
      L(
        K,
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
          ...re(Ge),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  It,
  Lt,
  Rt,
  zt = e(() => {
    (P(),
      oe.loadFonts([`GF;Inter-500`, `GF;Inter-700`, `GF;Inter-700italic`, `GF;Inter-500italic`]),
      (It = [
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
      (Lt = [
        `.framer-UIaRd .framer-styles-preset-90posr:not(.rich-text-wrapper), .framer-UIaRd .framer-styles-preset-90posr.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-52da8dbb-cd94-4ec6-8ec8-f864d65f3fe3, #fafafa); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Rt = `framer-UIaRd`));
  });
function Bt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  q,
  Zt = e(() => {
    (x(),
      P(),
      M(),
      d(),
      Be(),
      zt(),
      (Vt = { DzkvMXkdl: { hover: !0 } }),
      (Ht = [`DzkvMXkdl`, `NuOHxCyuX`, `xVhscxT1M`]),
      (Ut = `framer-YNpO5`),
      (Wt = {
        DzkvMXkdl: `framer-v-up1y4v`,
        NuOHxCyuX: `framer-v-q4idgs`,
        xVhscxT1M: `framer-v-ldngne`,
      }),
      (Gt = { delay: 0, duration: 0.25, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Kt = ({ value: e, children: t }) => {
        let n = c(A),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(A.Provider, { value: i, children: t });
      }),
      (qt = { "Nav Active": `xVhscxT1M`, "NAV Item": `DzkvMXkdl`, Mobile: `NuOHxCyuX` }),
      (Jt = k.create(o)),
      (Yt = ({ click: e, height: t, hover: n, id: r, link: i, title: a, width: o, ...s }) => ({
        ...s,
        dKoULZI27: i ?? s.dKoULZI27,
        DxZMbxf49: a ?? s.DxZMbxf49 ?? `Menu`,
        ol3VDiW09: n ?? s.ol3VDiW09,
        tDdyGzS4c: e ?? s.tDdyGzS4c,
        variant: qt[s.variant] ?? s.variant ?? `DzkvMXkdl`,
      })),
      (Xt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = R(
        p(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = D(),
            { activeLocale: s, setLocale: c } = z();
          de();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              DxZMbxf49: p,
              dKoULZI27: m,
              ol3VDiW09: g,
              tDdyGzS4c: _,
              ...v
            } = Yt(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: ee,
            } = ge({
              cycleOrder: Ht,
              defaultVariant: `DzkvMXkdl`,
              enabledGestures: Vt,
              ref: i,
              variant: f,
              variantClassNames: Wt,
            }),
            O = Xt(e, ee),
            { activeVariantCallback: A, delay: M } = le(y),
            N = A(async (...e) => {
              if ((T({ isPressed: !1 }), _ && (await _(...e)) === !1)) return !1;
            }),
            P = A(async (...e) => {
              if ((T({ isHovered: !0 }), g && (await g(...e)) === !1)) return !1;
            }),
            F = H(Ut, Ke, Rt);
          return h(j, {
            id: d ?? a,
            children: h(Jt, {
              animate: ee,
              initial: !1,
              children: h(Kt, {
                value: Gt,
                children: h(Pe, {
                  href: m,
                  motionChild: !0,
                  nodeId: `DzkvMXkdl`,
                  openInNewTab: !1,
                  scopeId: `KdcrhmmFW`,
                  smoothScroll: !0,
                  children: h(k.a, {
                    ...v,
                    ...S,
                    className: `${H(F, `framer-up1y4v`, u, b)} framer-1103wkx`,
                    "data-framer-name": `NAV Item`,
                    "data-highlight": !0,
                    layoutDependency: O,
                    layoutId: `DzkvMXkdl`,
                    onMouseEnter: P,
                    onTap: N,
                    ref: i,
                    style: {
                      borderBottomLeftRadius: 100,
                      borderBottomRightRadius: 100,
                      borderTopLeftRadius: 100,
                      borderTopRightRadius: 100,
                      ...l,
                    },
                    ...Bt(
                      {
                        "DzkvMXkdl-hover": { "data-framer-name": void 0 },
                        NuOHxCyuX: { "data-framer-name": `Mobile` },
                        xVhscxT1M: { "data-framer-name": `Nav Active` },
                      },
                      y,
                      C
                    ),
                    children: h(k.div, {
                      className: `framer-10c5fmm`,
                      "data-framer-name": `Nav`,
                      layoutDependency: O,
                      layoutId: `vNa9k3s6L`,
                      children: h(fe, {
                        __fromCanvasComponent: !0,
                        children: h(o, {
                          children: h(k.p, {
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
                        ...Bt(
                          {
                            "DzkvMXkdl-hover": {
                              children: h(o, {
                                children: h(k.p, {
                                  className: `framer-styles-preset-ke6suj`,
                                  "data-styles-preset": `Bv6I6Qd8d`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-70660a9e-f10c-47c6-b288-e9736a966ef3, rgb(212, 212, 212)))`,
                                  },
                                  children: h(k.span, {
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
                              children: h(o, {
                                children: h(k.p, {
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
                              children: h(o, {
                                children: h(k.p, {
                                  className: `framer-styles-preset-ke6suj`,
                                  "data-styles-preset": `Bv6I6Qd8d`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-70660a9e-f10c-47c6-b288-e9736a966ef3, rgb(212, 212, 212)))`,
                                  },
                                  children: h(k.span, {
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
          `.framer-YNpO5.framer-1103wkx, .framer-YNpO5 .framer-1103wkx { display: block; }`,
          `.framer-YNpO5.framer-up1y4v { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: 32px; justify-content: flex-start; padding: 10px 14px 10px 14px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-YNpO5 .framer-10c5fmm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-YNpO5 .framer-nnuewx { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-YNpO5.framer-v-q4idgs.framer-up1y4v { height: min-content; justify-content: center; padding: 0px; width: 251px; }`,
          `.framer-YNpO5.framer-v-q4idgs .framer-10c5fmm { flex: 1 0 0px; width: 1px; }`,
          `.framer-YNpO5.framer-v-q4idgs .framer-nnuewx { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          ...Ie,
          ...Lt,
        ],
        `framer-YNpO5`
      )),
      (q.displayName = `Nav Elements`),
      (q.defaultProps = { height: 32, width: 71 }),
      U(q, {
        variant: {
          options: [`DzkvMXkdl`, `NuOHxCyuX`, `xVhscxT1M`],
          optionTitles: [`NAV Item`, `Mobile`, `Nav Active`],
          title: `Variant`,
          type: B.Enum,
        },
        DxZMbxf49: { defaultValue: `Menu`, displayTextArea: !1, title: `Title`, type: B.String },
        onDxZMbxf49Change: { changes: `DxZMbxf49`, type: B.ChangeHandler },
        dKoULZI27: { title: `Link`, type: B.Link },
        ol3VDiW09: { title: `Hover`, type: B.EventHandler },
        tDdyGzS4c: { title: `Click`, type: B.EventHandler },
      }),
      L(
        q,
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
          ...re(Ge),
          ...re(It),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function J(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  Y,
  an,
  on,
  sn,
  cn,
  ln,
  X,
  un = e(() => {
    (x(),
      P(),
      M(),
      d(),
      Zt(),
      (Qt = I(q)),
      ($t = Te(q)),
      (en = [`SnNOaglBC`, `zQ0KE9P_v`]),
      (tn = `framer-gUQWC`),
      (nn = { SnNOaglBC: `framer-v-1g3sj3s`, zQ0KE9P_v: `framer-v-18iqn74` }),
      (rn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Y = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (an = ({ value: e, children: t }) => {
        let n = c(A),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(A.Provider, { value: i, children: t });
      }),
      (on = { Desktop: `SnNOaglBC`, Mobile: `zQ0KE9P_v` }),
      (sn = k.create(o)),
      (cn = ({
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
        variant: on[d.variant] ?? d.variant ?? `SnNOaglBC`,
      })),
      (ln = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = R(
        p(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = D(),
            { activeLocale: o, setLocale: s } = z(),
            c = de(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              PdsmeeeJ6: p,
              Ca70t6UaX: m,
              dg70DYZf1: g,
              E1VDnva7s: _,
              RvgzwmSGY: y,
              PUmeHLtsE: b,
              nQAehmuPT: x,
              b7zmLqTeR: S,
              ...C
            } = cn(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: ee,
              gestureVariant: O,
              isLoading: A,
              setGestureState: M,
              setVariant: N,
              variants: P,
            } = ge({
              cycleOrder: en,
              defaultVariant: `SnNOaglBC`,
              ref: i,
              variant: f,
              variantClassNames: nn,
            }),
            F = ln(e, P),
            te = H(tn);
          return (
            me(),
            h(j, {
              id: d ?? a,
              children: h(sn, {
                animate: P,
                initial: !1,
                children: h(an, {
                  value: rn,
                  children: v(k.nav, {
                    ...C,
                    ...ee,
                    className: H(te, `framer-1g3sj3s`, u, T),
                    "data-border": !0,
                    "data-framer-name": `Desktop`,
                    layoutDependency: F,
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
                    ...J({ zQ0KE9P_v: { "data-framer-name": `Mobile` } }, w, O),
                    children: [
                      h(be, {
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
                          h(V, {
                            height: 32,
                            y: (c?.y || 0) + (10 + ((c?.height || 52) - 20 - 32) / 2),
                            ...J(
                              {
                                zQ0KE9P_v: {
                                  width: `calc(${c?.width || `100vw`} - 30px)`,
                                  y:
                                    (c?.y || 0) +
                                    15 +
                                    (((c?.height || 443) - 30 - 400) / 2 + 0 + 0),
                                },
                              },
                              w,
                              O
                            ),
                            children: h(W, {
                              className: `framer-faolcd-container`,
                              "data-framer-name": `Nav Element`,
                              layoutDependency: F,
                              layoutId: `UH0PhSnsI-container`,
                              name: `Nav Element`,
                              nodeId: `UH0PhSnsI`,
                              rendersWithMotion: !0,
                              scopeId: `kT8NSluHB`,
                              children: h($t, {
                                __framer__animateOnce: !1,
                                __framer__targets: [
                                  { ref: m, target: `xVhscxT1M` },
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
                                variant: Y(`DzkvMXkdl`),
                                width: `100%`,
                                ...J(
                                  {
                                    zQ0KE9P_v: {
                                      dKoULZI27: e[1],
                                      style: { width: `100%` },
                                      variant: Y(`NuOHxCyuX`),
                                    },
                                  },
                                  w,
                                  O
                                ),
                              }),
                            }),
                          }),
                      }),
                      h(be, {
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
                          h(V, {
                            height: 32,
                            y: (c?.y || 0) + (10 + ((c?.height || 52) - 20 - 32) / 2),
                            ...J(
                              {
                                zQ0KE9P_v: {
                                  width: `calc(${c?.width || `100vw`} - 30px)`,
                                  y:
                                    (c?.y || 0) +
                                    15 +
                                    (((c?.height || 443) - 30 - 400) / 2 + 32 + 60),
                                },
                              },
                              w,
                              O
                            ),
                            children: h(W, {
                              className: `framer-mf37mt-container`,
                              "data-framer-name": `Nav Element`,
                              layoutDependency: F,
                              layoutId: `OijNi1ySH-container`,
                              name: `Nav Element`,
                              nodeId: `OijNi1ySH`,
                              rendersWithMotion: !0,
                              scopeId: `kT8NSluHB`,
                              children: h($t, {
                                __framer__animateOnce: !1,
                                __framer__targets: [
                                  { ref: _, target: `xVhscxT1M` },
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
                                variant: Y(`DzkvMXkdl`),
                                width: `100%`,
                                ...J(
                                  {
                                    zQ0KE9P_v: {
                                      dKoULZI27: e[1],
                                      style: { width: `100%` },
                                      variant: Y(`NuOHxCyuX`),
                                    },
                                  },
                                  w,
                                  O
                                ),
                              }),
                            }),
                          }),
                      }),
                      h(be, {
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
                          h(V, {
                            height: 32,
                            y: (c?.y || 0) + (10 + ((c?.height || 52) - 20 - 32) / 2),
                            ...J(
                              {
                                zQ0KE9P_v: {
                                  width: `calc(${c?.width || `100vw`} - 30px)`,
                                  y:
                                    (c?.y || 0) +
                                    15 +
                                    (((c?.height || 443) - 30 - 400) / 2 + 64 + 120),
                                },
                              },
                              w,
                              O
                            ),
                            children: h(W, {
                              className: `framer-1bzr61k-container`,
                              "data-framer-name": `Nav Element`,
                              layoutDependency: F,
                              layoutId: `FqhF_6Tqn-container`,
                              name: `Nav Element`,
                              nodeId: `FqhF_6Tqn`,
                              rendersWithMotion: !0,
                              scopeId: `kT8NSluHB`,
                              children: h($t, {
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
                                variant: Y(`DzkvMXkdl`),
                                width: `100%`,
                                ...J(
                                  {
                                    zQ0KE9P_v: {
                                      dKoULZI27: e[1],
                                      style: { width: `100%` },
                                      variant: Y(`NuOHxCyuX`),
                                    },
                                  },
                                  w,
                                  O
                                ),
                              }),
                            }),
                          }),
                      }),
                      h(be, {
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
                          h(V, {
                            height: 32,
                            y: (c?.y || 0) + (10 + ((c?.height || 52) - 20 - 32) / 2),
                            ...J(
                              {
                                zQ0KE9P_v: {
                                  width: `calc(${c?.width || `100vw`} - 30px)`,
                                  y:
                                    (c?.y || 0) +
                                    15 +
                                    (((c?.height || 443) - 30 - 400) / 2 + 96 + 180),
                                },
                              },
                              w,
                              O
                            ),
                            children: h(W, {
                              className: `framer-5no09r-container`,
                              "data-framer-name": `Nav Element`,
                              layoutDependency: F,
                              layoutId: `e7FhLBp4y-container`,
                              name: `Nav Element`,
                              nodeId: `e7FhLBp4y`,
                              rendersWithMotion: !0,
                              scopeId: `kT8NSluHB`,
                              children: h($t, {
                                __framer__animateOnce: !1,
                                __framer__targets: [
                                  { ref: S, target: `xVhscxT1M` },
                                  { ref: x, target: `DzkvMXkdl` },
                                ],
                                __framer__threshold: 0.5,
                                __framer__variantAppearEffectEnabled: !0,
                                dKoULZI27: e[0],
                                DxZMbxf49: `Ứng dụng`,
                                height: `100%`,
                                id: `e7FhLBp4y`,
                                layoutId: `e7FhLBp4y`,
                                name: `Nav Element`,
                                variant: Y(`DzkvMXkdl`),
                                width: `100%`,
                                ...J(
                                  {
                                    zQ0KE9P_v: {
                                      dKoULZI27: e[1],
                                      style: { width: `100%` },
                                      variant: Y(`NuOHxCyuX`),
                                    },
                                  },
                                  w,
                                  O
                                ),
                              }),
                            }),
                          }),
                      }),
                      h(be, {
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
                          h(V, {
                            height: 32,
                            y: (c?.y || 0) + (10 + ((c?.height || 52) - 20 - 32) / 2),
                            ...J(
                              {
                                zQ0KE9P_v: {
                                  y:
                                    (c?.y || 0) +
                                    15 +
                                    (((c?.height || 443) - 30 - 400) / 2 + 128 + 240),
                                },
                              },
                              w,
                              O
                            ),
                            children: h(W, {
                              className: `framer-1cv8gl2-container`,
                              "data-framer-name": `Nav Element`,
                              layoutDependency: F,
                              layoutId: `OC0O7Ncf0-container`,
                              name: `Nav Element`,
                              nodeId: `OC0O7Ncf0`,
                              rendersWithMotion: !0,
                              scopeId: `kT8NSluHB`,
                              children: h($t, {
                                __framer__animateOnce: !1,
                                __framer__targets: [
                                  { ref: S, target: `xVhscxT1M` },
                                  { ref: x, target: `DzkvMXkdl` },
                                ],
                                __framer__threshold: 0.5,
                                __framer__variantAppearEffectEnabled: !0,
                                dKoULZI27: e[0],
                                DxZMbxf49: `FAQs`,
                                height: `100%`,
                                id: `OC0O7Ncf0`,
                                layoutId: `OC0O7Ncf0`,
                                name: `Nav Element`,
                                variant: Y(`DzkvMXkdl`),
                                width: `100%`,
                                ...J({ zQ0KE9P_v: { dKoULZI27: e[1] } }, w, O),
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
      (X.displayName = `NAV MENU`),
      (X.defaultProps = { height: 52, width: 541 }),
      U(X, {
        variant: {
          options: [`SnNOaglBC`, `zQ0KE9P_v`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: B.Enum,
        },
        PdsmeeeJ6: { title: `Features Passive`, type: B.ScrollSectionRef },
        Ca70t6UaX: { title: `Home Scroll Section`, type: B.ScrollSectionRef },
        dg70DYZf1: { title: `Home Nav Passive`, type: B.ScrollSectionRef },
        E1VDnva7s: { title: `Features Active`, type: B.ScrollSectionRef },
        RvgzwmSGY: { title: `Product Active`, type: B.ScrollSectionRef },
        PUmeHLtsE: { title: `Product Passive`, type: B.ScrollSectionRef },
        nQAehmuPT: { title: `Scroll Section`, type: B.ScrollSectionRef },
        b7zmLqTeR: { title: `Show case`, type: B.ScrollSectionRef },
      }),
      L(X, [{ explicitInter: !0, fonts: [] }, ...Qt], { supportsExplicitInterCodegen: !0 }),
      (X.loader = { load: (e, t) => (t.locale, Promise.allSettled([F(q, {}, t)])) }));
  });
function dn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Z,
  Dn = e(() => {
    (x(),
      P(),
      M(),
      d(),
      ht(),
      _t(),
      Tt(),
      Ft(),
      Ve(),
      un(),
      (fn = I(Re)),
      (pn = I(X)),
      (mn = I(K)),
      (hn = I(gt)),
      (gn = [`BM7tMcazb`, `WYkxKI3Su`, `vUcOkaaJX`]),
      (_n = `framer-aBIAN`),
      (vn = {
        BM7tMcazb: `framer-v-j7lohg`,
        vUcOkaaJX: `framer-v-b488xt`,
        WYkxKI3Su: `framer-v-vwow46`,
      }),
      (yn = void 0),
      (bn = { delay: 0, duration: 0.25, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (xn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Sn = ({ value: e, children: t }) => {
        let n = c(A),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(A.Provider, { value: i, children: t });
      }),
      (Cn = { "Mobile Closed": `WYkxKI3Su`, "Mobile Opened": `vUcOkaaJX`, Desktop: `BM7tMcazb` }),
      (wn = k.create(o)),
      (Tn = ({
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
        variant: Cn[l.variant] ?? l.variant ?? `BM7tMcazb`,
      })),
      (En = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = R(
        p(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = D(),
            { activeLocale: o, setLocale: s } = z(),
            c = de(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              T3HPnSxUm: p,
              t57Vo4ns5: m,
              rQ8RMEfAF: g,
              fALSZKb37: _,
              Apee1Bt8u: y,
              J0_M0UDdY: b,
              ...x
            } = Tn(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: ee,
              setGestureState: O,
              setVariant: A,
              variants: M,
            } = ge({
              cycleOrder: gn,
              defaultVariant: `BM7tMcazb`,
              ref: i,
              variant: f,
              variantClassNames: vn,
            }),
            N = En(e, M),
            { activeVariantCallback: P, delay: F } = le(S),
            te = P(async (...e) => {
              A(`vUcOkaaJX`);
            }),
            ne = P(async (...e) => {
              A(`WYkxKI3Su`);
            }),
            I = H(_n);
          me();
          let re = () => ![`WYkxKI3Su`, `vUcOkaaJX`].includes(S),
            ie = () => !![`WYkxKI3Su`, `vUcOkaaJX`].includes(S),
            ae = () => S === `vUcOkaaJX`;
          return h(j, {
            id: d ?? a,
            children: h(wn, {
              animate: M,
              initial: !1,
              children: h(Sn, {
                value: bn,
                children: v(k.header, {
                  ...x,
                  ...T,
                  className: H(I, `framer-j7lohg`, u, C),
                  "data-framer-name": `Desktop`,
                  layoutDependency: N,
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
                  ...dn(
                    {
                      vUcOkaaJX: { "data-framer-name": `Mobile Opened` },
                      WYkxKI3Su: { "data-framer-name": `Mobile Closed` },
                    },
                    S,
                    E
                  ),
                  children: [
                    h(k.div, {
                      className: `framer-1sfik9i`,
                      "data-framer-name": `Container`,
                      layoutDependency: N,
                      layoutId: `nKVpqDxIZ`,
                      children: v(k.div, {
                        className: `framer-h7mu32`,
                        "data-framer-name": `desktop-menu`,
                        layoutDependency: N,
                        layoutId: `t7Vl92asH`,
                        children: [
                          h(be, {
                            links: [
                              { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              h(V, {
                                height: 48,
                                y: (c?.y || 0) + 25 + 0 + 0 + 0 + 24,
                                ...dn(
                                  {
                                    vUcOkaaJX: { y: (c?.y || 0) + 0 + 0 + 0 + 0 + 24 },
                                    WYkxKI3Su: { y: (c?.y || 0) + 0 + 0 + 0 + 0 + 24 },
                                  },
                                  S,
                                  E
                                ),
                                children: h(W, {
                                  className: `framer-b3b1k1-container`,
                                  layoutDependency: N,
                                  layoutId: `QJ03X90eG-container`,
                                  nodeId: `QJ03X90eG`,
                                  rendersWithMotion: !0,
                                  scopeId: `HskjMAcxS`,
                                  children: h(Re, {
                                    height: `100%`,
                                    id: `QJ03X90eG`,
                                    irY_XKj0O: e[0],
                                    layoutId: `QJ03X90eG`,
                                    variant: xn(`iC3uXzR0q`),
                                    width: `100%`,
                                    ...dn(
                                      {
                                        vUcOkaaJX: { irY_XKj0O: e[2] },
                                        WYkxKI3Su: { irY_XKj0O: e[1] },
                                      },
                                      S,
                                      E
                                    ),
                                  }),
                                }),
                              }),
                          }),
                          re() &&
                            h(k.nav, {
                              className: `framer-lmh0sm`,
                              "data-border": !0,
                              "data-framer-name": `Navigation`,
                              layoutDependency: N,
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
                              children: h(V, {
                                height: 52,
                                y: (c?.y || 0) + 25 + 0 + 0 + 0 + 96 - 72 + 6,
                                children: h(W, {
                                  className: `framer-bc6jil-container`,
                                  layoutDependency: N,
                                  layoutId: `I3JwG2AY1-container`,
                                  nodeId: `I3JwG2AY1`,
                                  rendersWithMotion: !0,
                                  scopeId: `HskjMAcxS`,
                                  children: h(X, {
                                    b7zmLqTeR: yn,
                                    Ca70t6UaX: p,
                                    dg70DYZf1: g,
                                    E1VDnva7s: m,
                                    height: `100%`,
                                    id: `I3JwG2AY1`,
                                    layoutId: `I3JwG2AY1`,
                                    PdsmeeeJ6: _,
                                    PUmeHLtsE: b,
                                    RvgzwmSGY: y,
                                    variant: xn(`SnNOaglBC`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          v(k.button, {
                            className: `framer-1quw86t`,
                            "data-framer-name": `Actions`,
                            "data-reset": `button`,
                            layoutDependency: N,
                            layoutId: `yqV3ZivSO`,
                            ...dn(
                              {
                                vUcOkaaJX: { "data-highlight": !0, onTap: ne },
                                WYkxKI3Su: { "data-highlight": !0, onTap: te },
                              },
                              S,
                              E
                            ),
                            children: [
                              ie() &&
                                h(he, {
                                  animated: !0,
                                  className: `framer-1u5hbcm`,
                                  Component: mt,
                                  layoutDependency: N,
                                  layoutId: `AUGh10xbQ`,
                                  style: {
                                    "--1m6trwb": 0,
                                    "--21h8s6": `var(--token-f72f35de-6eed-43ee-9e84-9b471b441cf4, rgb(245, 245, 245))`,
                                    "--pgex8v": 1.5,
                                  },
                                  ...dn({ vUcOkaaJX: { Component: wt } }, S, E),
                                }),
                              re() &&
                                h(V, {
                                  height: 37,
                                  y: (c?.y || 0) + 25 + 0 + 0 + 0 + 29.5 + 0,
                                  children: h(W, {
                                    className: `framer-13ja4jg-container`,
                                    layoutDependency: N,
                                    layoutId: `gv_rfcenE-container`,
                                    nodeId: `gv_rfcenE`,
                                    rendersWithMotion: !0,
                                    scopeId: `HskjMAcxS`,
                                    children: h(K, {
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
                    ae() &&
                      h(V, {
                        ...dn(
                          {
                            vUcOkaaJX: {
                              height: 52,
                              width: `calc(${c?.width || `100vw`} - 40px)`,
                              y: (c?.y || 0) + 0 + 146,
                            },
                          },
                          S,
                          E
                        ),
                        children: h(W, {
                          className: `framer-1flstnu-container`,
                          layoutDependency: N,
                          layoutId: `mD9t2qR2t-container`,
                          nodeId: `mD9t2qR2t`,
                          rendersWithMotion: !0,
                          scopeId: `HskjMAcxS`,
                          children: h(X, {
                            height: `100%`,
                            id: `mD9t2qR2t`,
                            layoutId: `mD9t2qR2t`,
                            style: { width: `100%` },
                            variant: xn(`zQ0KE9P_v`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    ae() &&
                      h(V, {
                        children: h(W, {
                          className: `framer-57t2mv-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: N,
                          layoutId: `H8PufP3h9-container`,
                          nodeId: `H8PufP3h9`,
                          rendersWithMotion: !0,
                          scopeId: `HskjMAcxS`,
                          children: h(gt, {
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
      (Z.displayName = `Header`),
      (Z.defaultProps = { height: 121, width: 1280 }),
      U(Z, {
        variant: {
          options: [`BM7tMcazb`, `WYkxKI3Su`, `vUcOkaaJX`],
          optionTitles: [`Desktop`, `Mobile Closed`, `Mobile Opened`],
          title: `Variant`,
          type: B.Enum,
        },
        T3HPnSxUm: { title: `Home Scroll Section`, type: B.ScrollSectionRef },
        t57Vo4ns5: { title: `Features Scroll Section`, type: B.ScrollSectionRef },
        rQ8RMEfAF: { title: `Home Nav Passive`, type: B.ScrollSectionRef },
        fALSZKb37: { title: `Features Passive`, type: B.ScrollSectionRef },
        Apee1Bt8u: { title: `Product Active`, type: B.ScrollSectionRef },
        J0_M0UDdY: { title: `Product Passive`, type: B.ScrollSectionRef },
      }),
      L(Z, [{ explicitInter: !0, fonts: [] }, ...fn, ...pn, ...mn, ...hn], {
        supportsExplicitInterCodegen: !0,
      }),
      (Z.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([F(Re, {}, t), F(X, {}, t), F(K, {}, t)])),
      }));
  });
function On({
  url: e,
  play: t,
  shouldMute: n,
  thumbnail: r,
  isRed: a,
  onClick: o,
  onMouseEnter: c,
  onMouseLeave: l,
  onMouseDown: u,
  onMouseUp: d,
  title: f,
  ...p
}) {
  let m = We(),
    g = t !== `Off`,
    _ = m || (r !== `Off` && !g),
    [y, b] = i(() => !0, !1),
    [x, S] = i(() => !0, !_),
    [C, T] = s(!1),
    E = Ye(p),
    ee = E !== `0px 0px 0px 0px` && E !== `0px`;
  if (e === ``) return h(Mn, {});
  let D = kn(e);
  if (D === void 0) return h(Nn, { message: `Invalid Youtube URL.` });
  let [O, k, A] = D,
    j = k.searchParams;
  if (A) for (let [e, t] of A) (j.set(e, t), e === `t` && j.set(`start`, t));
  (j.set(`iv_load_policy`, `3`),
    j.set(`rel`, `0`),
    j.set(`modestbranding`, `1`),
    j.set(`playsinline`, `1`),
    x ? (g || (_ && x)) && j.set(`autoplay`, `1`) : j.set(`autoplay`, `0`),
    g && n && j.set(`mute`, `1`),
    t === `Loop` && (j.set(`loop`, `1`), j.set(`playlist`, O)),
    a || j.set(`color`, `white`));
  let M = {
    title: f || `Youtube Video`,
    allow: `presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture`,
    src: k.href,
    frameBorder: `0`,
    onClick: o,
    onMouseEnter: c,
    onMouseLeave: l,
    onMouseDown: u,
    onMouseUp: d,
  };
  return v(`article`, {
    onPointerEnter: () => T(!0),
    onPointerLeave: () => T(!1),
    onPointerOver: b,
    onKeyDown: S,
    onClick: S,
    style: {
      ...Rn,
      borderRadius: E,
      transform: ee && (x || m) ? `translateZ(0.000001px)` : `unset`,
      cursor: `pointer`,
      overflow: `hidden`,
    },
    role: `presentation`,
    children: [
      y && h(`link`, { rel: `preconnect`, href: `https://www.youtube.com` }),
      y && h(`link`, { rel: `preconnect`, href: `https://www.google.com` }),
      _ &&
        v(w, {
          children: [
            h(`link`, { rel: `preconnect`, href: `https://i.ytimg.com` }),
            h(`img`, { decoding: `async`, src: jn(O, r), style: { ...Bn, objectFit: `cover` } }),
          ],
        }),
      m
        ? null
        : h(`iframe`, {
            loading: x ? void 0 : `lazy`,
            style: x ? Bn : { ...Bn, display: `none` },
            ...M,
          }),
      x ? null : h(Pn, { onClick: S, isHovered: C, isRed: a }),
    ],
  });
}
function kn(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return [e, An(e), null];
  }
  let n = t.searchParams;
  if (
    t.hostname === `youtube.com` ||
    t.hostname === `www.youtube.com` ||
    t.hostname === `youtube-nocookie.com` ||
    t.hostname === `www.youtube-nocookie.com`
  ) {
    let e = t.pathname.slice(1).split(`/`),
      r = e[0];
    if (r === `watch`) {
      let e = t.searchParams.get(`v`);
      return [e, An(e), n];
    }
    if (r === `embed`) return [e[1], t, n];
    if (r === `shorts` || r === `live`) {
      let t = e[1];
      return [t, An(t), n];
    }
  }
  if (t.hostname === `youtu.be`) {
    let e = t.pathname.slice(1);
    return [e, An(e), n];
  }
}
function An(e) {
  return new URL(`https://www.youtube.com/embed/${e}`);
}
function jn(e, t) {
  let n = `https://i.ytimg.com/vi_webp/`,
    r = `webp`;
  switch (t) {
    case `Low Quality`:
      return `${n}${e}/hqdefault.${r}`;
    case `Medium Quality`:
      return `${n}${e}/sddefault.${r}`;
    case `High Quality`:
      return `${n}${e}/maxresdefault.${r}`;
    default:
      return `${n}${e}/0.${r}`;
  }
}
function Mn() {
  return h(`div`, {
    style: { ...Le, overflow: `hidden` },
    children: h(`div`, {
      style: zn,
      children: `To embed a Youtube video, add the URL to the properties\xA0panel.`,
    }),
  });
}
function Nn({ message: e }) {
  return h(`div`, {
    className: `framerInternalUI-errorPlaceholder`,
    style: { ...Xe, overflow: `hidden` },
    children: v(`div`, { style: zn, children: [`Error: `, e] }),
  });
}
function Pn({ onClick: e, isHovered: t, isRed: n }) {
  return h(`button`, {
    onClick: e,
    "aria-label": `Play`,
    style: Ln,
    children: v(`svg`, {
      height: `100%`,
      version: `1.1`,
      viewBox: `0 0 68 48`,
      width: `100%`,
      children: [
        h(`path`, {
          d: `M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z`,
          fill: t ? (n ? `#f00` : `#000`) : `#212121`,
          fillOpacity: t && n ? 1 : 0.8,
          style: {
            transition: `fill .1s cubic-bezier(0.4, 0, 1, 1), fill-opacity .1s cubic-bezier(0.4, 0, 1, 1)`,
          },
        }),
        h(`path`, { d: `M 45,24 27,14 27,34`, fill: `#fff` }),
      ],
    }),
  });
}
var Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn = e(() => {
    (x(),
      d(),
      P(),
      Je(),
      (function (e) {
        ((e.Normal = `Off`), (e.Auto = `On`), (e.Loop = `Loop`));
      })((Fn ||= {})),
      (function (e) {
        ((e.High = `High Quality`),
          (e.Medium = `Medium Quality`),
          (e.Low = `Low Quality`),
          (e.Off = `Off`));
      })((In ||= {})),
      (On.displayName = `YouTube`),
      U(On, {
        url: { type: B.String, title: `Video` },
        play: { type: B.Enum, title: `Autoplay`, options: Object.values(Fn) },
        shouldMute: {
          title: `Mute`,
          type: B.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hidden(e) {
            return e.play === `Off`;
          },
        },
        thumbnail: {
          title: `Thumbnail`,
          description: `Showing a thumbnail improves performance.`,
          type: B.Enum,
          options: Object.values(In),
          hidden(e) {
            return e.play !== `Off`;
          },
        },
        isRed: { title: `Color`, type: B.Boolean, enabledTitle: `Red`, disabledTitle: `White` },
        ...qe,
        ...He,
      }),
      (On.defaultProps = {
        url: `https://youtu.be/8AHPXm9Y6mI`,
        play: `Off`,
        shouldMute: !0,
        thumbnail: `Medium Quality`,
        isRed: !0,
      }),
      (Ln = {
        position: `absolute`,
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        width: 68,
        height: 48,
        padding: 0,
        border: `none`,
        background: `transparent`,
        cursor: `pointer`,
      }),
      (Rn = { position: `relative`, width: `100%`, height: `100%` }),
      (zn = { textAlign: `center`, minWidth: 140 }),
      (Bn = { position: `absolute`, top: 0, left: 0, height: `100%`, width: `100%` }));
  }),
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn = e(() => {
    (x(),
      P(),
      d(),
      (Hn = `var(--framer-icon-mask)`),
      (Un = p(function (e, t) {
        return h(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Wn = k.create(Un)),
      (Gn = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? h(Wn, { ...a, layoutId: r, ref: t, children: i })
          : h(`svg`, { ...a, ref: t, children: i });
      })),
      (Kn = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 1.5 16.5 C 0.672 16.5 0 15.828 0 15 L 0 1.5 C 0 0.672 0.672 0 1.5 0 L 15 0 C 15.828 0 16.5 0.672 16.5 1.5 L 16.5 15 C 16.5 15.828 15.828 16.5 15 16.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="qUr6K2nJv" transform="translate(3.75 3.75)" width="16.5px"/><path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="MbfmAbWGf" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 12)" width="16.5px"/><path d="M 0 0 L 0 16.5" fill="transparent" height="16.5px" id="mcA57vhod" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 3.75)" width="1px"/></svg>`),
      (qn = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (Jn = R(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = qn(e),
            u = Oe(`465907804`, Kn);
          return h(Gn, {
            ...l,
            className: H(`framer-ohg0r`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: h(`use`, { href: u }),
          });
        }),
        [
          `.framer-ohg0r { -webkit-mask: ${Hn}; aspect-ratio: 1; display: block; mask: ${Hn}; width: 24px; }`,
        ],
        `framer-ohg0r`
      )),
      (Jn.displayName = `Plus`),
      U(Jn, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: B.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: B.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: B.Number,
        },
      }));
  });
function Xn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Zn,
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
  cr,
  Q,
  lr = e(() => {
    (x(),
      P(),
      M(),
      d(),
      Vn(),
      Yn(),
      (Zn = I(Jn)),
      (Qn = I(On)),
      ($n = [`HnJ8qWVJX`, `AfO65BCMc`, `a0PDxByKJ`, `Q9BqiCKNd`]),
      (er = `framer-Ky08N`),
      (tr = {
        a0PDxByKJ: `framer-v-67e0op`,
        AfO65BCMc: `framer-v-cp4qys`,
        HnJ8qWVJX: `framer-v-16wermw`,
        Q9BqiCKNd: `framer-v-14viuwh`,
      }),
      (nr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (rr = {
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
      (ir = ({ value: e, children: t }) => {
        let n = c(A),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(A.Provider, { value: i, children: t });
      }),
      (ar = { Close: `Q9BqiCKNd`, Desktop: `HnJ8qWVJX`, Phone: `a0PDxByKJ`, Tablet: `AfO65BCMc` }),
      (or = k.create(o)),
      (sr = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: ar[r.variant] ?? r.variant ?? `HnJ8qWVJX`,
      })),
      (cr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = R(
        p(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = D(),
            { activeLocale: o, setLocale: s } = z();
          de();
          let { style: c, className: l, layoutId: u, variant: d, ...f } = sr(e),
            {
              baseVariant: p,
              classNames: m,
              clearLoadingGesture: g,
              gestureHandlers: _,
              gestureVariant: y,
              isLoading: b,
              setGestureState: x,
              setVariant: S,
              variants: C,
            } = ge({
              cycleOrder: $n,
              defaultVariant: `HnJ8qWVJX`,
              ref: i,
              variant: d,
              variantClassNames: tr,
            }),
            w = cr(e, C),
            { activeVariantCallback: T, delay: E } = le(p),
            ee = T(async (...e) => {
              S(`Q9BqiCKNd`);
            }),
            O = H(er),
            A = () => p !== `Q9BqiCKNd`;
          return h(j, {
            id: u ?? a,
            children: h(or, {
              animate: C,
              initial: !1,
              children: h(ir, {
                value: nr,
                children: v(k.div, {
                  ...f,
                  ..._,
                  className: H(O, `framer-16wermw`, l, m),
                  "data-framer-name": `Desktop`,
                  layoutDependency: w,
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
                  ...Xn(
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
                      h(k.div, {
                        className: `framer-1gyno9q`,
                        "data-border": !0,
                        "data-framer-name": `Close`,
                        "data-highlight": !0,
                        layoutDependency: w,
                        layoutId: `VDOu1Hd3e`,
                        onTap: ee,
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
                        whileHover: rr,
                        children: h(Jn, {
                          animated: !0,
                          className: `framer-1imn8oj`,
                          layoutDependency: w,
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
                      h(V, {
                        children: h(W, {
                          className: `framer-1n9jot8-container`,
                          isModuleExternal: !0,
                          layoutDependency: w,
                          layoutId: `bP6MQtOM6-container`,
                          nodeId: `bP6MQtOM6`,
                          rendersWithMotion: !0,
                          scopeId: `Xx3CQgVjS`,
                          children: h(On, {
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
      (Q.displayName = `Delete This`),
      (Q.defaultProps = { height: 123, width: 210 }),
      U(Q, {
        variant: {
          options: [`HnJ8qWVJX`, `AfO65BCMc`, `a0PDxByKJ`, `Q9BqiCKNd`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`, `Close`],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      L(Q, [{ explicitInter: !0, fonts: [] }, ...Zn, ...Qn], { supportsExplicitInterCodegen: !0 }));
  }),
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  $,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or = e(() => {
    (x(),
      P(),
      M(),
      d(),
      st(),
      Dn(),
      ze(),
      lr(),
      (ur = I(Z)),
      (dr = I(Q)),
      (fr = I(Ue)),
      (pr = I(G)),
      (mr = {
        I56gUQFGm: `(min-width: 1200px)`,
        pd6ytuzE1: `(min-width: 810px) and (max-width: 1199.98px)`,
        tHCgLbG0e: `(max-width: 809.98px)`,
      }),
      (hr = `framer-TY66T`),
      (gr = {
        I56gUQFGm: `framer-v-140pyj1`,
        pd6ytuzE1: `framer-v-pzk0yl`,
        tHCgLbG0e: `framer-v-pmyeso`,
      }),
      ($ = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (_r = {
        tHCgLbG0e: [
          `.framer-TY66T .framer-lcqu2a-container { left: 50%; position: var(--framer-canvas-fixed-position, fixed); transform: translateX(-50%); }`,
        ],
      }),
      (vr = Object.keys(_r)),
      (yr = { tHCgLbG0e: `.framer-pmyeso-override` }),
      (br = [
        `.framer-TY66T.framer-1iygm5, .framer-TY66T .framer-1iygm5 { display: block; }`,
        `.framer-TY66T.framer-140pyj1 { --selection-background-color: var(--token-cd267c31-c786-4dde-8352-aa0f2bc35c58, #faca8b) /* {"name":"Creme"} */; --selection-color: var(--token-bca62d06-743e-42b8-943d-3b018b7cf080, #fff4e3) /* {"name":"Creme 100"} */; align-content: center; align-items: center; background-color: var(--token-129db3aa-c63b-49d4-a9df-4d7f82f7f83f, #010117); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-TY66T .framer-lcqu2a-container { flex: none; height: auto; order: -1000; position: sticky; top: 0px; width: 100%; z-index: 10; }`,
        `.framer-TY66T .framer-o4tdt9 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-TY66T .framer-ppkyv1 { align-content: flex-end; align-items: flex-end; bottom: calc(calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 70px); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; order: 1002; overflow: visible; padding: 0px 10px 0px 10px; position: var(--framer-canvas-fixed-position, fixed); right: 20px; width: min-content; z-index: 10; }`,
        `.framer-TY66T .framer-1oiejot-container { flex: none; height: auto; position: relative; width: auto; z-index: 10; }`,
        `.framer-TY66T .framer-1i19k86-container { flex: none; height: auto; min-width: 100px; position: relative; width: auto; z-index: 10; }`,
        `.framer-TY66T .framer-obna49-container { flex: none; height: 10px; order: 1003; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
        `.framer-TY66T[data-selection="true"] * ::selection, .framer-TY66T [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
      ]),
      (xr = {
        I56gUQFGm: `(min-width: 1200px)`,
        pd6ytuzE1: `(min-width: 810px) and (max-width: 1199.98px)`,
        tHCgLbG0e: `(max-width: 809.98px)`,
      }),
      (Sr = { Desktop: `I56gUQFGm`, Phone: `tHCgLbG0e`, Tablet: `pd6ytuzE1` }),
      (Cr = ({ value: e }) =>
        Ne()
          ? null
          : h(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (wr = ({
        features: e,
        featuresPassive: t,
        height: n,
        homeActive: r,
        homePassive: i,
        id: a,
        productActive: o,
        productPassive: s,
        width: c,
        ...l
      }) => ({
        ...l,
        EzSNs9Obl: i ?? l.EzSNs9Obl,
        ijCz8cPdl: e ?? l.ijCz8cPdl,
        KB36F5lyR: t ?? l.KB36F5lyR,
        KnwXTuwwP: s ?? l.KnwXTuwwP,
        Lo3xd9ZUS: r ?? l.Lo3xd9ZUS,
        RbgiRgJS1: o ?? l.RbgiRgJS1,
        variant: Sr[l.variant] ?? l.variant ?? `I56gUQFGm`,
      })),
      (Tr = p(function (e, n) {
        let r = t(null),
          i = n ?? r,
          a = D(),
          { activeLocale: o, setLocale: s } = z(),
          {
            style: c,
            className: l,
            layoutId: u,
            variant: d,
            Lo3xd9ZUS: f,
            EzSNs9Obl: p,
            ijCz8cPdl: m,
            KB36F5lyR: g,
            RbgiRgJS1: _,
            KnwXTuwwP: y,
            children: b,
            ...x
          } = wr(e),
          [S, C] = ve(d, mr, !1),
          w = H(hr);
        return (
          N({}),
          h(pe.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Sr,
              isLayoutTemplate: !0,
              primaryVariantId: `I56gUQFGm`,
              variantClassNames: gr,
            },
            children: v(j, {
              id: u ?? a,
              children: [
                h(Cr, {
                  value: `:root body { background: var(--token-129db3aa-c63b-49d4-a9df-4d7f82f7f83f, rgb(1, 1, 23)); }`,
                }),
                v(k.div, {
                  ...x,
                  className: H(w, `framer-140pyj1`, l),
                  "data-layout-template": !0,
                  "data-selection": !0,
                  ref: i,
                  style: { ...c },
                  children: [
                    h(V, {
                      height: 121,
                      width: `100vw`,
                      y: 0,
                      children: h(ke, {
                        breakpoint: S,
                        overrides: {
                          tHCgLbG0e: { "data-framer-layout-hint-center-x": !0, layoutScroll: !0 },
                        },
                        children: h(Ee, {
                          className: `framer-lcqu2a-container`,
                          nodeId: `Ou8r3MGSV`,
                          scopeId: `Jyr06fner`,
                          children: h(ke, {
                            breakpoint: S,
                            overrides: { tHCgLbG0e: { variant: $(`WYkxKI3Su`) } },
                            children: h(Z, {
                              Apee1Bt8u: _,
                              fALSZKb37: g,
                              height: `100%`,
                              id: `Ou8r3MGSV`,
                              J0_M0UDdY: y,
                              layoutId: `Ou8r3MGSV`,
                              rQ8RMEfAF: p,
                              style: { width: `100%` },
                              T3HPnSxUm: f,
                              t57Vo4ns5: m,
                              variant: $(`BM7tMcazb`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    b,
                    h(`div`, { className: `framer-o4tdt9` }),
                    v(k.div, {
                      className: `framer-ppkyv1`,
                      "data-framer-name": `Delete This`,
                      children: [
                        h(V, {
                          height: 123,
                          y: 749,
                          children: h(Ee, {
                            className: `framer-1oiejot-container`,
                            nodeId: `UCJX1BNum`,
                            scopeId: `Jyr06fner`,
                            children: h(ke, {
                              breakpoint: S,
                              overrides: {
                                pd6ytuzE1: { variant: $(`AfO65BCMc`) },
                                tHCgLbG0e: { variant: $(`a0PDxByKJ`) },
                              },
                              children: h(Q, {
                                height: `100%`,
                                id: `UCJX1BNum`,
                                layoutId: `UCJX1BNum`,
                                variant: $(`HnJ8qWVJX`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        h(V, {
                          height: 48,
                          y: 882,
                          children: h(Ee, {
                            className: `framer-1i19k86-container`,
                            nodeId: `FrbdWMtGW`,
                            scopeId: `Jyr06fner`,
                            children: h(Ue, {
                              AKuoesW74: 14,
                              AYwwfkaKd: `https://www.youtube.com/watch?v=f4voNcwBvTo`,
                              FPjhikCji: !1,
                              height: `100%`,
                              id: `FrbdWMtGW`,
                              layoutId: `FrbdWMtGW`,
                              OlthDMhqu: `Xem demo chi tiết`,
                              r7ASsAiJ9: !0,
                              variant: $(`uGayw3Tld`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    h(ke, {
                      breakpoint: S,
                      overrides: { tHCgLbG0e: { y: 1e3 } },
                      children: h(V, {
                        height: 10,
                        width: `100vw`,
                        y: 1121,
                        children: h(Ee, {
                          className: `framer-obna49-container`,
                          nodeId: `GKRGkR0nC`,
                          scopeId: `Jyr06fner`,
                          children: h(ke, {
                            breakpoint: S,
                            overrides: {
                              pd6ytuzE1: { variant: $(`p1TrTqind`) },
                              tHCgLbG0e: { variant: $(`p1TrTqind`) },
                            },
                            children: h(G, {
                              height: `100%`,
                              id: `GKRGkR0nC`,
                              layoutId: `GKRGkR0nC`,
                              style: { height: `100%`, width: `100%` },
                              variant: $(`ElWXHPJjD`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                h(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Er = (e) =>
        e === xe.canvas || e === xe.export
          ? [
              ...br,
              ...vr.flatMap((e) => {
                let t = yr[e];
                return _r[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...br, ...vr.map((e) => `@media ${xr[e]} { ${_r[e].join(` `)} }`)]),
      (Dr = R(Tr, Er, `framer-TY66T`)),
      (Dr.displayName = `Header & Footer Template`),
      (Dr.defaultProps = { height: 1e3, width: 1200 }),
      U(Dr, {
        Lo3xd9ZUS: { title: `Home Active`, type: B.ScrollSectionRef },
        EzSNs9Obl: { title: `Home Passive`, type: B.ScrollSectionRef },
        ijCz8cPdl: { title: `Features`, type: B.ScrollSectionRef },
        KB36F5lyR: { title: `Features Passive`, type: B.ScrollSectionRef },
        RbgiRgJS1: { title: `Product Active`, type: B.ScrollSectionRef },
        KnwXTuwwP: { title: `Product Passive`, type: B.ScrollSectionRef },
      }),
      L(Dr, [{ explicitInter: !0, fonts: [] }, ...ur, ...dr, ...fr, ...pr], {
        supportsExplicitInterCodegen: !0,
      }),
      (Dr.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([F(Z, {}, t), F(Q, {}, t), F(Ue, {}, t), F(G, {}, t)])
        ),
      }));
  });
function kr({ webPageId: e, children: t, style: n, ...r }) {
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
      return E(be, { links: [s.EzSNs9Obl, s.ijCz8cPdl, s.KB36F5lyR, s.RbgiRgJS1] }, (e) =>
        E(
          Dr,
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
function Ar(e) {
  switch (e) {
    case `augiA20Il`:
    case `weKLGiygA`:
      return [
        { hash: `140pyj1`, mediaQuery: `(min-width: 1200px)` },
        { hash: `pzk0yl`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `pmyeso`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function jr({ routeId: e, pathVariables: n, localeId: i, collectionItemId: c }) {
  let l = Pr[e].page.preload();
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
  let d = E(_e, {
    children: E(De, {
      children: E(ye, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: n,
        routes: Pr,
        collectionUtils: Ir,
        framerSiteId: Lr,
        notFoundPage: ce(
          () => import(`./hgkQ8iqM_yhyOnWJRdAA58kACw0aGjJAlF2fFG0iuGo.DlS9I4Bx.mjs`)
        ),
        isReducedMotion: void 0,
        localeId: i,
        locales: Fr,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://util4dev.framer.website`,
        EditorBar:
          f === void 0
            ? void 0
            : (() => {
                if (zr) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return ce(async () => {
                  f.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: ie, useLocaleInfo: z, useRouter: me },
                    react: {
                      createElement: E,
                      Fragment: o,
                      memo: g,
                      useCallback: u,
                      useEffect: a,
                      useRef: t,
                      useState: s,
                      useLayoutEffect: r,
                    },
                    "react-dom": { createPortal: _ },
                  };
                  let { createEditorBar: e } = await import(`init.mjs`);
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !1,
        LayoutTemplate: kr,
        loadSnippetsModule: new we(
          () => import(`./DQqSUZsnaRFZh7IOWWHNlhUcW2OuIQoZol3YF9qrJXY.dObCGW41.mjs`)
        ),
        initialCollectionItemId: c,
      }),
    }),
    value: { routes: {} },
  });
  return (await l, d);
}
function Mr() {
  Rr && f.__framer_events.push(arguments);
}
async function Nr(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || f.__framer_hadFatalError) return;
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
    Mr(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
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
        (r = te(Pr, r)));
    else {
      te(Pr, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = ae(Pr, decodeURIComponent(location.pathname), !0, Fr);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let c = jr({
      routeId: r,
      localeId: i,
      pathVariables: a,
      collectionItemId: s?.collectionItemId,
    });
    f !== void 0 &&
      (async () => {
        let e = Pr[r],
          t = Fr.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = s?.collectionItemId ?? null;
        if (n === null && e?.collectionId && Ir) {
          let r = await Ir[e.collectionId]?.(),
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
          f.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Lr,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: f.location.href,
              hostname: f.location.hostname || null,
              pathname: f.location.pathname || null,
              hash: f.location.hash || null,
              search: f.location.search || null,
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
          (ne(o), f.__framer_onRewriteBreakpoints?.(o));
        }),
        (zr ? (e) => e() : ee)(() => {
          (se(), ue(), T(t, l, { onRecoverableError: n }));
        }))
      : C(t, { onRecoverableError: n }).render(l);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var Pr, Fr, Ir, Lr, Rr, zr;
e(() => {
  if (
    (O(),
    P(),
    d(),
    m(),
    b(),
    Or(),
    (Pr = {
      augiA20Il: {
        elements: {
          iYUNHqCEb: `hero`,
          lCq8UO0dC: `image-gen`,
          N2ijbw0rP: `features`,
          sgmlFhWUG: `product`,
          U6VhzUg6a: `richtext`,
          v99AbFhke: `faqs`,
          zKzXmXRGU: `showcases`,
        },
        page: ce(() => import(`./kziG2OQpMxtl0QxA8n0LLJiPXAWrRhJJQEuygY2T07I.BO80duz9.mjs`)),
        path: `/`,
      },
      weKLGiygA: {
        elements: {},
        page: ce(() => import(`./hgkQ8iqM_yhyOnWJRdAA58kACw0aGjJAlF2fFG0iuGo.DlS9I4Bx.mjs`)),
        path: `/404`,
      },
    }),
    (Fr = [{ code: `vi-VN`, id: `default`, name: `Vietnamese`, slug: ``, textDirection: `ltr` }]),
    (Ir = {}),
    (Lr = `be8cad654d7a2fe26d4fe3d5007755fec82f6796fd3f299b911dc7610cf9e1fd`),
    (Rr = typeof document < `u`),
    (zr = Rr && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(n.userAgent)),
    Rr)
  ) {
    ((f.__framer_importFromPackage = (e, t) => () =>
      E(Ce, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (f.__framer_events = f.__framer_events || []),
      Fe());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? Nr(!0, e) : Nr(!1, e);
  }
  (function () {
    Rr &&
      ee(() => {
        T(
          document.getElementById(`__framer-badge-container`),
          E(y, {}, E(S(() => import(`./PX9hIOIVM.DmPKFyZY.mjs`))))
        );
      });
  })();
})();
export { Ar as getLayoutTemplateBreakpoints, jr as getPageRoot };
//# sourceMappingURL=script_main.DHge-8BL.mjs.map
