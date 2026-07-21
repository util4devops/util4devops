import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  E as n,
  F as r,
  H as i,
  I as a,
  L as o,
  N as s,
  P as c,
  R as l,
  V as u,
  _ as d,
  b as f,
  c as p,
  d as m,
  h,
  i as ee,
  j as g,
  l as _,
  m as v,
  n as y,
  o as te,
  r as b,
  s as x,
  t as S,
  u as C,
  v as w,
  w as T,
  y as E,
} from "./react.C8gjTMAM.mjs";
import { S as D, a as O, n as k, r as ne, t as A } from "./motion.CzGBN5me.mjs";
import {
  $ as re,
  B as j,
  D as M,
  E as ie,
  H as N,
  J as ae,
  K as oe,
  N as P,
  P as F,
  Q as se,
  S as I,
  T as L,
  V as R,
  W as ce,
  X as le,
  Z as ue,
  _ as de,
  _t as fe,
  a as pe,
  at as me,
  b as z,
  ct as he,
  d as ge,
  dt as B,
  et as _e,
  f as ve,
  g as ye,
  gt as be,
  ht as xe,
  i as Se,
  l as Ce,
  lt as we,
  m as Te,
  n as Ee,
  nt as De,
  o as Oe,
  p as ke,
  pt as Ae,
  q as je,
  r as V,
  rt as H,
  s as Me,
  st as Ne,
  t as U,
  tt as Pe,
  u as Fe,
  ut as Ie,
  v as Le,
  x as W,
  z as Re,
} from "./framer.22F-MT4t.mjs";
import {
  C as ze,
  E as Be,
  S as Ve,
  T as He,
  b as Ue,
  m as We,
  p as Ge,
  w as Ke,
  x as qe,
  y as Je,
} from "./shared-lib.CuE3I6Um.mjs";
function Ye(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  G,
  at = e(() => {
    (x(),
      R(),
      A(),
      n(),
      Be(),
      (Xe = [`ElWXHPJjD`, `p1TrTqind`]),
      (Ze = `framer-iswKx`),
      (Qe = { ElWXHPJjD: `framer-v-bwvw2j`, p1TrTqind: `framer-v-rv6lfo` }),
      ($e = { delay: 0, duration: 0.25, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (et = ({ value: e, children: t }) => {
        let n = s(O),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return _(O.Provider, { value: i, children: t });
      }),
      (tt = { Desktop: `ElWXHPJjD`, Mobile: `p1TrTqind` }),
      (nt = D.create(o)),
      (rt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: tt[r.variant] ?? r.variant ?? `ElWXHPJjD`,
      })),
      (it = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = B(
        w(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = f(),
            { activeLocale: a, setLocale: s } = H();
          se();
          let { style: c, className: l, layoutId: u, variant: d, ...p } = rt(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: ee,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: te,
              setGestureState: b,
              setVariant: x,
              variants: S,
            } = Ie({
              cycleOrder: Xe,
              defaultVariant: `ElWXHPJjD`,
              ref: r,
              variant: d,
              variantClassNames: Qe,
            }),
            w = it(e, S),
            T = L(Ze, ze);
          return _(ne, {
            id: u ?? i,
            children: _(nt, {
              animate: S,
              initial: !1,
              children: _(et, {
                value: $e,
                children: _(D.footer, {
                  ...p,
                  ...v,
                  className: L(T, `framer-bwvw2j`, l, h),
                  "data-framer-name": `Desktop`,
                  layoutDependency: w,
                  layoutId: `ElWXHPJjD`,
                  ref: r,
                  style: { ...c },
                  ...Ye({ p1TrTqind: { "data-framer-name": `Mobile` } }, m, y),
                  children: C(D.div, {
                    className: `framer-1dg903l`,
                    "data-framer-name": `Container`,
                    layoutDependency: w,
                    layoutId: `mW0uZaWgU`,
                    children: [
                      _(D.div, {
                        className: `framer-euh8xw`,
                        "data-framer-name": `Container`,
                        layoutDependency: w,
                        layoutId: `DAj2GmyMR`,
                      }),
                      _(D.div, {
                        className: `framer-w8i7a0`,
                        "data-framer-name": `Designed By Faruk Yurtseven`,
                        layoutDependency: w,
                        layoutId: `Jlb081m8z`,
                        children: _(Le, {
                          __fromCanvasComponent: !0,
                          children: _(o, {
                            children: _(D.p, {
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
          ...Ke,
        ],
        `framer-iswKx`
      )),
      (G.displayName = `Footer`),
      (G.defaultProps = { height: 300, width: 1200 }),
      I(G, {
        variant: {
          options: [`ElWXHPJjD`, `p1TrTqind`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: V.Enum,
        },
      }),
      W(
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
          ...F(He),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt = e(() => {
    (x(),
      R(),
      n(),
      (ot = `var(--framer-icon-mask)`),
      (st = w(function (e, t) {
        return _(`svg`, { ...e, ref: t, children: e.children });
      })),
      (ct = D.create(st)),
      (lt = w((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? _(ct, { ...a, layoutId: r, ref: t, children: i })
          : _(`svg`, { ...a, ref: t, children: i });
      })),
      (ut = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 12 L 0 0 L 16.5 0 L 16.5 12 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="12px" id="gwB_ZdJt6" transform="translate(3.75 6)" width="16.5px"/><path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="xGkn4qbwc" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 12)" width="16.5px"/><path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="uQ9bOFKFt" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 6)" width="16.5px"/><path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="hrURkUe9P" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 18)" width="16.5px"/></svg>`),
      (dt = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (ft = B(
        w(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = dt(e),
            u = he(`3559153988`, ut);
          return _(lt, {
            ...l,
            className: L(`framer-iZmZi`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: _(`use`, { href: u }),
          });
        }),
        [
          `.framer-iZmZi { -webkit-mask: ${ot}; aspect-ratio: 1; display: block; mask: ${ot}; width: 24px; }`,
        ],
        `framer-iZmZi`
      )),
      (ft.displayName = `List`),
      I(ft, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: V.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: V.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: V.Number,
        },
      }));
  });
function mt(e) {
  let { toggle: t } = e;
  return t
    ? _(`style`, {
        "data-frameruni-stop-scroll": !0,
        children: `html,body { overflow: hidden !important; }`,
      })
    : _(p, {});
}
var ht = e(() => {
    (x(),
      R(),
      (mt.displayName = `Stop Scroll`),
      I(mt, {
        toggle: {
          type: V.Boolean,
          title: `Block Scroll`,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }),
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct = e(() => {
    (x(),
      R(),
      n(),
      (gt = `var(--framer-icon-mask)`),
      (_t = w(function (e, t) {
        return _(`svg`, { ...e, ref: t, children: e.children });
      })),
      (vt = D.create(_t)),
      (yt = w((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? _(vt, { ...a, layoutId: r, ref: t, children: i })
          : _(`svg`, { ...a, ref: t, children: i });
      })),
      (bt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 1.5 16.5 C 0.672 16.5 0 15.828 0 15 L 0 1.5 C 0 0.672 0.672 0 1.5 0 L 15 0 C 15.828 0 16.5 0.672 16.5 1.5 L 16.5 15 C 16.5 15.828 15.828 16.5 15 16.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="LjE0Ycn76" transform="translate(3.75 3.75)" width="16.5px"/><path d="M 13.5 0 L 0 13.5" fill="var(--21h8s6, rgb(0, 0, 0))" height="13.5px" id="oSDwjLCvX" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(5.25 5.25)" width="13.5px"/><path d="M 13.5 13.5 L 0 0" fill="var(--21h8s6, rgb(0, 0, 0))" height="13.5px" id="H9XwXWiXU" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(5.25 5.25)" width="13.5px"/></svg>`),
      (xt = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (St = B(
        w(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = xt(e),
            u = he(`2202960551`, bt);
          return _(yt, {
            ...l,
            className: L(`framer-AhL2C`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: _(`use`, { href: u }),
          });
        }),
        [
          `.framer-AhL2C { -webkit-mask: ${gt}; aspect-ratio: 1; display: block; mask: ${gt}; width: 24px; }`,
        ],
        `framer-AhL2C`
      )),
      (St.displayName = `X`),
      I(St, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: V.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: V.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: V.Number,
        },
      }));
  });
function wt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  K,
  Nt = e(() => {
    (x(),
      R(),
      A(),
      n(),
      Be(),
      (Tt = { mFxxs8sId: { hover: !0 } }),
      (Et = `framer-2azqR`),
      (Dt = { mFxxs8sId: `framer-v-1q3855e` }),
      (Ot = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (kt = ({ value: e, children: t }) => {
        let n = s(O),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return _(O.Provider, { value: i, children: t });
      }),
      (At = D.create(o)),
      (jt = ({
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
      (Mt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = B(
        w(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = f(),
            { activeLocale: a, setLocale: s } = H();
          se();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              r7ASsAiJ9: p,
              OlthDMhqu: m,
              AYwwfkaKd: h,
              FPjhikCji: ee,
              C3iVRYv1r: v,
              ...y
            } = jt(e),
            {
              baseVariant: te,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: O,
            } = Ie({
              defaultVariant: `mFxxs8sId`,
              enabledGestures: Tt,
              ref: r,
              variant: d,
              variantClassNames: Dt,
            }),
            k = Mt(e, O),
            { activeVariantCallback: A, delay: re } = ue(te),
            j = A(async (...e) => {
              if ((T({ isPressed: !1 }), v && (await v(...e)) === !1)) return !1;
            }),
            M = L(Et, ze);
          return _(ne, {
            id: u ?? i,
            children: _(At, {
              animate: O,
              initial: !1,
              children: _(kt, {
                value: Ot,
                children: _(ge, {
                  href: h,
                  motionChild: !0,
                  nodeId: `mFxxs8sId`,
                  openInNewTab: ee,
                  scopeId: `eywgDRQDd`,
                  children: _(D.a, {
                    ...y,
                    ...S,
                    className: `${L(M, `framer-1q3855e`, l, b)} framer-d2a2t9`,
                    "data-border": !0,
                    "data-framer-name": `Small Button`,
                    "data-highlight": !0,
                    layoutDependency: k,
                    layoutId: `mFxxs8sId`,
                    onTap: j,
                    ref: r,
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
                      ...c,
                    },
                    variants: {
                      "mFxxs8sId-hover": {
                        backdropFilter: `none`,
                        boxShadow: `inset 0px 0px 10px 0px rgba(250, 169, 115, 0.37)`,
                        WebkitBackdropFilter: `none`,
                      },
                    },
                    ...wt({ "mFxxs8sId-hover": { "data-framer-name": void 0 } }, te, C),
                    children:
                      p &&
                      _(D.div, {
                        className: `framer-15m53we`,
                        "data-framer-name": `label`,
                        layoutDependency: k,
                        layoutId: `zI2p1NaG7`,
                        children: _(Le, {
                          __fromCanvasComponent: !0,
                          children: _(o, {
                            children: _(D.p, {
                              className: `framer-styles-preset-ke6suj`,
                              "data-styles-preset": `Bv6I6Qd8d`,
                              children: `Button`,
                            }),
                          }),
                          className: `framer-138lvn0`,
                          fonts: [`Inter`],
                          layoutDependency: k,
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
                          ...wt(
                            {
                              "mFxxs8sId-hover": {
                                children: _(o, {
                                  children: _(D.p, {
                                    className: `framer-styles-preset-ke6suj`,
                                    "data-styles-preset": `Bv6I6Qd8d`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-70660a9e-f10c-47c6-b288-e9736a966ef3, rgb(212, 212, 212)))`,
                                    },
                                    children: _(D.span, {
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
                            te,
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
          ...Ke,
          `.framer-2azqR[data-border="true"]::after, .framer-2azqR [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-2azqR`
      )),
      (K.displayName = `Small Button`),
      (K.defaultProps = { height: 37.5, width: 84 }),
      I(K, {
        r7ASsAiJ9: { defaultValue: !0, title: `Button Label`, type: V.Boolean },
        OlthDMhqu: {
          defaultValue: `Button`,
          displayTextArea: !1,
          title: `Button Label`,
          type: V.String,
        },
        AYwwfkaKd: { title: `Link`, type: V.Link },
        FPjhikCji: { defaultValue: !1, title: `New Tab`, type: V.Boolean },
        C3iVRYv1r: { title: `Tap`, type: V.EventHandler },
      }),
      W(
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
          ...F(He),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Pt,
  Ft,
  It,
  Lt = e(() => {
    (R(),
      ie.loadFonts([`GF;Inter-500`, `GF;Inter-700`, `GF;Inter-700italic`, `GF;Inter-500italic`]),
      (Pt = [
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
      (Ft = [
        `.framer-UIaRd .framer-styles-preset-90posr:not(.rich-text-wrapper), .framer-UIaRd .framer-styles-preset-90posr.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-52da8dbb-cd94-4ec6-8ec8-f864d65f3fe3, #fafafa); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (It = `framer-UIaRd`));
  });
function Rt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  q,
  Yt = e(() => {
    (x(),
      R(),
      A(),
      n(),
      Be(),
      Lt(),
      (zt = { DzkvMXkdl: { hover: !0 } }),
      (Bt = [`DzkvMXkdl`, `NuOHxCyuX`, `xVhscxT1M`]),
      (Vt = `framer-USrLI`),
      (Ht = {
        DzkvMXkdl: `framer-v-up1y4v`,
        NuOHxCyuX: `framer-v-q4idgs`,
        xVhscxT1M: `framer-v-ldngne`,
      }),
      (Ut = { delay: 0, duration: 0.25, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Wt = ({ value: e, children: t }) => {
        let n = s(O),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return _(O.Provider, { value: i, children: t });
      }),
      (Gt = { "Nav Active": `xVhscxT1M`, "NAV Item": `DzkvMXkdl`, Mobile: `NuOHxCyuX` }),
      (Kt = D.create(o)),
      (qt = ({ height: e, hover: t, id: n, link: r, title: i, width: a, ...o }) => ({
        ...o,
        dKoULZI27: r ?? o.dKoULZI27,
        DxZMbxf49: i ?? o.DxZMbxf49 ?? `Menu`,
        ol3VDiW09: t ?? o.ol3VDiW09,
        variant: Gt[o.variant] ?? o.variant ?? `DzkvMXkdl`,
      })),
      (Jt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = B(
        w(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = f(),
            { activeLocale: a, setLocale: s } = H();
          se();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              DxZMbxf49: p,
              dKoULZI27: m,
              ol3VDiW09: h,
              ...ee
            } = qt(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: te,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: C,
              setVariant: w,
              variants: T,
            } = Ie({
              cycleOrder: Bt,
              defaultVariant: `DzkvMXkdl`,
              enabledGestures: zt,
              ref: r,
              variant: d,
              variantClassNames: Ht,
            }),
            E = Jt(e, T),
            { activeVariantCallback: O, delay: k } = ue(v),
            A = O(async (...e) => {
              if ((C({ isHovered: !0 }), h && (await h(...e)) === !1)) return !1;
            }),
            re = L(Vt, ze, It);
          return _(ne, {
            id: u ?? i,
            children: _(Kt, {
              animate: T,
              initial: !1,
              children: _(Wt, {
                value: Ut,
                children: _(ge, {
                  href: m,
                  motionChild: !0,
                  nodeId: `DzkvMXkdl`,
                  openInNewTab: !1,
                  scopeId: `KdcrhmmFW`,
                  smoothScroll: !0,
                  children: _(D.a, {
                    ...ee,
                    ...b,
                    className: `${L(re, `framer-up1y4v`, l, y)} framer-1103wkx`,
                    "data-framer-name": `NAV Item`,
                    "data-highlight": !0,
                    layoutDependency: E,
                    layoutId: `DzkvMXkdl`,
                    onMouseEnter: A,
                    ref: r,
                    style: {
                      borderBottomLeftRadius: 100,
                      borderBottomRightRadius: 100,
                      borderTopLeftRadius: 100,
                      borderTopRightRadius: 100,
                      ...c,
                    },
                    ...Rt(
                      {
                        "DzkvMXkdl-hover": { "data-framer-name": void 0 },
                        NuOHxCyuX: { "data-framer-name": `Mobile` },
                        xVhscxT1M: { "data-framer-name": `Nav Active` },
                      },
                      v,
                      x
                    ),
                    children: _(D.div, {
                      className: `framer-10c5fmm`,
                      "data-framer-name": `Nav`,
                      layoutDependency: E,
                      layoutId: `vNa9k3s6L`,
                      children: _(Le, {
                        __fromCanvasComponent: !0,
                        children: _(o, {
                          children: _(D.p, {
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
                        layoutDependency: E,
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
                        ...Rt(
                          {
                            "DzkvMXkdl-hover": {
                              children: _(o, {
                                children: _(D.p, {
                                  className: `framer-styles-preset-ke6suj`,
                                  "data-styles-preset": `Bv6I6Qd8d`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-70660a9e-f10c-47c6-b288-e9736a966ef3, rgb(212, 212, 212)))`,
                                  },
                                  children: _(D.span, {
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
                              children: _(o, {
                                children: _(D.p, {
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
                              children: _(o, {
                                children: _(D.p, {
                                  className: `framer-styles-preset-ke6suj`,
                                  "data-styles-preset": `Bv6I6Qd8d`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-70660a9e-f10c-47c6-b288-e9736a966ef3, rgb(212, 212, 212)))`,
                                  },
                                  children: _(D.span, {
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
                          v,
                          x
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
          `.framer-USrLI.framer-1103wkx, .framer-USrLI .framer-1103wkx { display: block; }`,
          `.framer-USrLI.framer-up1y4v { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: 32px; justify-content: flex-start; padding: 10px 14px 10px 14px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-USrLI .framer-10c5fmm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-USrLI .framer-nnuewx { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-USrLI.framer-v-q4idgs.framer-up1y4v { cursor: unset; height: min-content; justify-content: center; padding: 0px; width: 251px; }`,
          `.framer-USrLI.framer-v-q4idgs .framer-10c5fmm { flex: 1 0 0px; width: 1px; }`,
          `.framer-USrLI.framer-v-q4idgs .framer-nnuewx { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-USrLI.framer-v-ldngne.framer-up1y4v { cursor: unset; }`,
          ...Ke,
          ...Ft,
        ],
        `framer-USrLI`
      )),
      (q.displayName = `Nav Elements`),
      (q.defaultProps = { height: 32, width: 71 }),
      I(q, {
        variant: {
          options: [`DzkvMXkdl`, `NuOHxCyuX`, `xVhscxT1M`],
          optionTitles: [`NAV Item`, `Mobile`, `Nav Active`],
          title: `Variant`,
          type: V.Enum,
        },
        DxZMbxf49: { defaultValue: `Menu`, displayTextArea: !1, title: `Title`, type: V.String },
        onDxZMbxf49Change: { changes: `DxZMbxf49`, type: V.ChangeHandler },
        dKoULZI27: { title: `Link`, type: V.Link },
        ol3VDiW09: { title: `Hover`, type: V.EventHandler },
      }),
      W(
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
          ...F(He),
          ...F(Pt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function J(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  Y,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  X,
  pn = e(() => {
    (x(),
      R(),
      A(),
      n(),
      Yt(),
      (Xt = P(q)),
      (Zt = be(q)),
      (Qt = Ae(D.div)),
      ($t = [`SnNOaglBC`, `zQ0KE9P_v`]),
      (en = `framer-UwOqv`),
      (tn = { SnNOaglBC: `framer-v-1g3sj3s`, zQ0KE9P_v: `framer-v-18iqn74` }),
      (nn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Y = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (rn = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: nn,
        x: 0,
        y: 0,
      }),
      (an = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: nn,
        x: 0,
        y: 0,
      }),
      (on = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (sn = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
        let [i, a] = me({ blockDocumentScrolling: t, dismissWithEsc: r && n });
        return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
      }),
      (cn = ({ value: e, children: t }) => {
        let n = s(O),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return _(O.Provider, { value: i, children: t });
      }),
      (ln = { Desktop: `SnNOaglBC`, Mobile: `zQ0KE9P_v` }),
      (un = D.create(o)),
      (dn = ({
        blogActive: e,
        click: t,
        featuresActive: n,
        featuresPassive: r,
        height: i,
        homeNavPassive: a,
        homeScrollSection: o,
        id: s,
        productActive: c,
        productPassive: l,
        width: u,
        ...d
      }) => ({
        ...d,
        Bwax88DQe: t ?? d.Bwax88DQe,
        Ca70t6UaX: o ?? d.Ca70t6UaX,
        dg70DYZf1: a ?? d.dg70DYZf1,
        E1VDnva7s: n ?? d.E1VDnva7s,
        gorWN070w: e ?? d.gorWN070w,
        PdsmeeeJ6: r ?? d.PdsmeeeJ6,
        PUmeHLtsE: l ?? d.PUmeHLtsE,
        RvgzwmSGY: c ?? d.RvgzwmSGY,
        variant: ln[d.variant] ?? d.variant ?? `SnNOaglBC`,
      })),
      (fn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = B(
        w(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = f(),
            { activeLocale: a, setLocale: o } = H(),
            s = se(),
            {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              Bwax88DQe: m,
              PdsmeeeJ6: h,
              Ca70t6UaX: ee,
              dg70DYZf1: v,
              E1VDnva7s: y,
              RvgzwmSGY: te,
              PUmeHLtsE: b,
              gorWN070w: x,
              ...S
            } = dn(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: O,
              gestureVariant: A,
              isLoading: re,
              setGestureState: j,
              setVariant: M,
              variants: ie,
            } = Ie({
              cycleOrder: $t,
              defaultVariant: `SnNOaglBC`,
              ref: r,
              variant: d,
              variantClassNames: tn,
            }),
            N = fn(e, ie),
            { activeVariantCallback: ae, delay: oe } = ue(w),
            P = ae(async (...e) => {
              if ((j({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
            }),
            F = ({ overlay: e }) =>
              ae(async (...t) => {
                e.show();
              }),
            I = L(en);
          Ne();
          let R = g(null),
            ce = g(null),
            le = g(null),
            fe = g(null);
          return _(ne, {
            id: u ?? i,
            children: _(un, {
              animate: ie,
              initial: !1,
              children: _(cn, {
                value: nn,
                children: C(D.nav, {
                  ...S,
                  ...O,
                  className: L(I, `framer-1g3sj3s`, l, T),
                  "data-border": !0,
                  "data-framer-name": `Desktop`,
                  "data-highlight": !0,
                  layoutDependency: N,
                  layoutId: `SnNOaglBC`,
                  onTap: P,
                  ref: r,
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
                    ...c,
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
                  ...J({ zQ0KE9P_v: { "data-framer-name": `Mobile` } }, w, A),
                  children: [
                    _(sn, {
                      blockDocumentScrolling: !1,
                      dismissWithEsc: !1,
                      children: (e) =>
                        _(p, {
                          children: _(de, {
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
                            children: (t) =>
                              _(U, {
                                height: 32,
                                y: (s?.y || 0) + (10 + ((s?.height || 52) - 20 - 32) / 2),
                                ...J(
                                  {
                                    zQ0KE9P_v: {
                                      width: `calc(${s?.width || `100vw`} - 30px)`,
                                      y:
                                        (s?.y || 0) +
                                        15 +
                                        (((s?.height || 351) - 30 - 308) / 2 + 0 + 0),
                                    },
                                  },
                                  w,
                                  A
                                ),
                                children: C(z, {
                                  className: `framer-faolcd-container`,
                                  "data-framer-name": `Nav Element`,
                                  id: `${u}-faolcd`,
                                  layoutDependency: N,
                                  layoutId: `UH0PhSnsI-container`,
                                  name: `Nav Element`,
                                  nodeId: `UH0PhSnsI`,
                                  ref: R,
                                  rendersWithMotion: !0,
                                  scopeId: `kT8NSluHB`,
                                  children: [
                                    _(Zt, {
                                      __framer__animateOnce: !1,
                                      __framer__targets: [
                                        { ref: ee, target: `xVhscxT1M` },
                                        { ref: v, target: `DzkvMXkdl` },
                                      ],
                                      __framer__threshold: 0.5,
                                      __framer__variantAppearEffectEnabled: !0,
                                      dKoULZI27: t[0],
                                      DxZMbxf49: `Giới thiệu`,
                                      height: `100%`,
                                      id: `UH0PhSnsI`,
                                      layoutId: `UH0PhSnsI`,
                                      name: `Nav Element`,
                                      ol3VDiW09: F({ overlay: e }),
                                      variant: Y(`DzkvMXkdl`),
                                      width: `100%`,
                                      ...J(
                                        {
                                          zQ0KE9P_v: {
                                            dKoULZI27: t[1],
                                            style: { width: `100%` },
                                            variant: Y(`NuOHxCyuX`),
                                          },
                                        },
                                        w,
                                        A
                                      ),
                                    }),
                                    _(k, {
                                      children:
                                        e.visible &&
                                        _(pe, {
                                          alignment: `center`,
                                          anchorRef: R,
                                          className: L(I, T),
                                          collisionDetection: !0,
                                          collisionDetectionPadding: 20,
                                          "data-framer-portal-id": `${u}-faolcd`,
                                          offsetX: 0,
                                          offsetY: 10,
                                          onDismiss: e.hide,
                                          placement: `bottom`,
                                          safeArea: !0,
                                          zIndex: 11,
                                          children: _(Qt, {
                                            __perspectiveFX: !1,
                                            __smartComponentFX: !0,
                                            __targetOpacity: 1,
                                            animate: an,
                                            className: `framer-kunilj`,
                                            exit: rn,
                                            initial: on,
                                            layoutDependency: N,
                                            layoutId: `pTRMLYyb7`,
                                            ref: ce,
                                            role: `dialog`,
                                            style: {
                                              backgroundColor: `rgb(255, 255, 255)`,
                                              borderBottomLeftRadius: 10,
                                              borderBottomRightRadius: 10,
                                              borderTopLeftRadius: 10,
                                              borderTopRightRadius: 10,
                                              boxShadow: `0px 10px 20px 0px rgba(0, 0, 0, 0.05)`,
                                            },
                                          }),
                                        }),
                                    }),
                                  ],
                                }),
                              }),
                          }),
                        }),
                    }),
                    _(sn, {
                      blockDocumentScrolling: !1,
                      dismissWithEsc: !1,
                      children: (e) =>
                        _(p, {
                          children: _(de, {
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
                            children: (t) =>
                              _(U, {
                                height: 32,
                                y: (s?.y || 0) + (10 + ((s?.height || 52) - 20 - 32) / 2),
                                ...J(
                                  {
                                    zQ0KE9P_v: {
                                      width: `calc(${s?.width || `100vw`} - 30px)`,
                                      y:
                                        (s?.y || 0) +
                                        15 +
                                        (((s?.height || 351) - 30 - 308) / 2 + 32 + 60),
                                    },
                                  },
                                  w,
                                  A
                                ),
                                children: C(z, {
                                  className: `framer-mf37mt-container`,
                                  "data-framer-name": `Nav Element`,
                                  id: `${u}-mf37mt`,
                                  layoutDependency: N,
                                  layoutId: `OijNi1ySH-container`,
                                  name: `Nav Element`,
                                  nodeId: `OijNi1ySH`,
                                  ref: le,
                                  rendersWithMotion: !0,
                                  scopeId: `kT8NSluHB`,
                                  children: [
                                    _(Zt, {
                                      __framer__animateOnce: !1,
                                      __framer__targets: [
                                        { ref: y, target: `xVhscxT1M` },
                                        { ref: h, target: `DzkvMXkdl` },
                                      ],
                                      __framer__threshold: 0.5,
                                      __framer__variantAppearEffectEnabled: !0,
                                      dKoULZI27: t[0],
                                      DxZMbxf49: `Tính năng`,
                                      height: `100%`,
                                      id: `OijNi1ySH`,
                                      layoutId: `OijNi1ySH`,
                                      name: `Nav Element`,
                                      ol3VDiW09: F({ overlay: e }),
                                      variant: Y(`DzkvMXkdl`),
                                      width: `100%`,
                                      ...J(
                                        {
                                          zQ0KE9P_v: {
                                            dKoULZI27: t[1],
                                            style: { width: `100%` },
                                            variant: Y(`NuOHxCyuX`),
                                          },
                                        },
                                        w,
                                        A
                                      ),
                                    }),
                                    _(k, {
                                      children:
                                        e.visible &&
                                        _(pe, {
                                          alignment: `center`,
                                          anchorRef: le,
                                          className: L(I, T),
                                          collisionDetection: !0,
                                          collisionDetectionPadding: 20,
                                          "data-framer-portal-id": `${u}-mf37mt`,
                                          offsetX: 0,
                                          offsetY: 10,
                                          onDismiss: e.hide,
                                          placement: `bottom`,
                                          safeArea: !0,
                                          zIndex: 11,
                                          children: _(Qt, {
                                            __perspectiveFX: !1,
                                            __smartComponentFX: !0,
                                            __targetOpacity: 1,
                                            animate: an,
                                            className: `framer-wi8uxh`,
                                            exit: rn,
                                            initial: on,
                                            layoutDependency: N,
                                            layoutId: `bOAWFupkb`,
                                            ref: fe,
                                            role: `dialog`,
                                            style: {
                                              backgroundColor: `rgb(255, 255, 255)`,
                                              borderBottomLeftRadius: 10,
                                              borderBottomRightRadius: 10,
                                              borderTopLeftRadius: 10,
                                              borderTopRightRadius: 10,
                                              boxShadow: `0px 10px 20px 0px rgba(0, 0, 0, 0.05)`,
                                            },
                                          }),
                                        }),
                                    }),
                                  ],
                                }),
                              }),
                          }),
                        }),
                    }),
                    _(de, {
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
                        _(U, {
                          height: 32,
                          y: (s?.y || 0) + (10 + ((s?.height || 52) - 20 - 32) / 2),
                          ...J(
                            {
                              zQ0KE9P_v: {
                                width: `calc(${s?.width || `100vw`} - 30px)`,
                                y:
                                  (s?.y || 0) +
                                  15 +
                                  (((s?.height || 351) - 30 - 308) / 2 + 64 + 120),
                              },
                            },
                            w,
                            A
                          ),
                          children: _(z, {
                            className: `framer-1bzr61k-container`,
                            "data-framer-name": `Nav Element`,
                            layoutDependency: N,
                            layoutId: `FqhF_6Tqn-container`,
                            name: `Nav Element`,
                            nodeId: `FqhF_6Tqn`,
                            rendersWithMotion: !0,
                            scopeId: `kT8NSluHB`,
                            children: _(Zt, {
                              __framer__animateOnce: !1,
                              __framer__targets: [
                                { ref: te, target: `xVhscxT1M` },
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
                                A
                              ),
                            }),
                          }),
                        }),
                    }),
                    _(de, {
                      links: [
                        { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                        { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                      ],
                      children: (e) =>
                        _(U, {
                          height: 32,
                          y: (s?.y || 0) + (10 + ((s?.height || 52) - 20 - 32) / 2),
                          ...J(
                            {
                              zQ0KE9P_v: {
                                width: `calc(${s?.width || `100vw`} - 30px)`,
                                y:
                                  (s?.y || 0) +
                                  15 +
                                  (((s?.height || 351) - 30 - 308) / 2 + 96 + 180),
                              },
                            },
                            w,
                            A
                          ),
                          children: _(z, {
                            className: `framer-5no09r-container`,
                            "data-framer-name": `Nav Element`,
                            layoutDependency: N,
                            layoutId: `e7FhLBp4y-container`,
                            name: `Nav Element`,
                            nodeId: `e7FhLBp4y`,
                            rendersWithMotion: !0,
                            scopeId: `kT8NSluHB`,
                            children: _(Zt, {
                              __framer__animateOnce: !1,
                              __framer__targets: [{ ref: x, target: `xVhscxT1M` }],
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
                                A
                              ),
                            }),
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
          `.framer-UwOqv.framer-lpjxpv, .framer-UwOqv .framer-lpjxpv { display: block; }`,
          `.framer-UwOqv.framer-1g3sj3s { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 10px 15px 10px 15px; position: relative; width: min-content; }`,
          `.framer-UwOqv .framer-faolcd-container, .framer-UwOqv .framer-mf37mt-container, .framer-UwOqv .framer-1bzr61k-container, .framer-UwOqv .framer-5no09r-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-UwOqv .framer-kunilj, .framer-UwOqv .framer-wi8uxh { height: 150px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 200px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-UwOqv.framer-v-18iqn74.framer-1g3sj3s { flex-direction: column; gap: 60px; padding: 15px; width: 300px; }`,
          `.framer-UwOqv.framer-v-18iqn74 .framer-faolcd-container, .framer-UwOqv.framer-v-18iqn74 .framer-mf37mt-container, .framer-UwOqv.framer-v-18iqn74 .framer-1bzr61k-container, .framer-UwOqv.framer-v-18iqn74 .framer-5no09r-container { width: 100%; }`,
          `.framer-UwOqv[data-border="true"]::after, .framer-UwOqv [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-UwOqv`
      )),
      (X.displayName = `NAV MENU`),
      (X.defaultProps = { height: 52, width: 465 }),
      I(X, {
        variant: {
          options: [`SnNOaglBC`, `zQ0KE9P_v`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: V.Enum,
        },
        Bwax88DQe: { title: `Click`, type: V.EventHandler },
        PdsmeeeJ6: { title: `Features Passive`, type: V.ScrollSectionRef },
        Ca70t6UaX: { title: `Home Scroll Section`, type: V.ScrollSectionRef },
        dg70DYZf1: { title: `Home Nav Passive`, type: V.ScrollSectionRef },
        E1VDnva7s: { title: `Features Active`, type: V.ScrollSectionRef },
        RvgzwmSGY: { title: `Product Active`, type: V.ScrollSectionRef },
        PUmeHLtsE: { title: `Product Passive`, type: V.ScrollSectionRef },
        gorWN070w: { title: `Blog Active`, type: V.ScrollSectionRef },
      }),
      W(X, [{ explicitInter: !0, fonts: [] }, ...Xt], { supportsExplicitInterCodegen: !0 }),
      (X.loader = { load: (e, t) => (t.locale, Promise.allSettled([M(q, {}, t)])) }));
  });
function mn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var hn,
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
  Dn,
  On,
  kn,
  Z,
  An = e(() => {
    (x(),
      R(),
      A(),
      n(),
      pt(),
      ht(),
      Ct(),
      Nt(),
      Ve(),
      pn(),
      (hn = P(qe)),
      (gn = P(X)),
      (_n = P(K)),
      (vn = P(mt)),
      (yn = [`BM7tMcazb`, `WYkxKI3Su`, `vUcOkaaJX`]),
      (bn = `framer-PGeIh`),
      (xn = {
        BM7tMcazb: `framer-v-j7lohg`,
        vUcOkaaJX: `framer-v-b488xt`,
        WYkxKI3Su: `framer-v-vwow46`,
      }),
      (Sn = { delay: 0, duration: 0.25, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Cn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (wn = (e, t) => `translate(-50%, -50%) ${t}`),
      (Tn = ({ value: e, children: t }) => {
        let n = s(O),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return _(O.Provider, { value: i, children: t });
      }),
      (En = { "Mobile Closed": `WYkxKI3Su`, "Mobile Opened": `vUcOkaaJX`, Desktop: `BM7tMcazb` }),
      (Dn = D.create(o)),
      (On = ({
        blog: e,
        featuresPassive: t,
        featuresScrollSection: n,
        height: r,
        homeNavPassive: i,
        homeScrollSection: a,
        id: o,
        productActive: s,
        productPassive: c,
        width: l,
        ...u
      }) => ({
        ...u,
        Apee1Bt8u: s ?? u.Apee1Bt8u,
        fALSZKb37: t ?? u.fALSZKb37,
        J0_M0UDdY: c ?? u.J0_M0UDdY,
        OrPShorLq: e ?? u.OrPShorLq,
        rQ8RMEfAF: i ?? u.rQ8RMEfAF,
        T3HPnSxUm: a ?? u.T3HPnSxUm,
        t57Vo4ns5: n ?? u.t57Vo4ns5,
        variant: En[u.variant] ?? u.variant ?? `BM7tMcazb`,
      })),
      (kn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = B(
        w(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = f(),
            { activeLocale: a, setLocale: o } = H(),
            s = se(),
            {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              T3HPnSxUm: p,
              t57Vo4ns5: m,
              rQ8RMEfAF: h,
              fALSZKb37: ee,
              Apee1Bt8u: v,
              J0_M0UDdY: y,
              OrPShorLq: te,
              ...b
            } = On(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: w,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: O,
              setGestureState: k,
              setVariant: A,
              variants: re,
            } = Ie({
              cycleOrder: yn,
              defaultVariant: `BM7tMcazb`,
              ref: r,
              variant: d,
              variantClassNames: xn,
            }),
            j = kn(e, re),
            { activeVariantCallback: M, delay: ie } = ue(x),
            N = M(async (...e) => {
              A(`vUcOkaaJX`);
            }),
            ae = M(async (...e) => {
              A(`WYkxKI3Su`);
            }),
            oe = M(async (...e) => {
              await ie(() => A(`WYkxKI3Su`), 400);
            }),
            P = L(bn);
          Ne();
          let F = () => ![`WYkxKI3Su`, `vUcOkaaJX`].includes(x),
            I = () => !![`WYkxKI3Su`, `vUcOkaaJX`].includes(x),
            R = () => x === `vUcOkaaJX`;
          return _(ne, {
            id: u ?? i,
            children: _(Dn, {
              animate: re,
              initial: !1,
              children: _(Tn, {
                value: Sn,
                children: C(D.header, {
                  ...b,
                  ...T,
                  className: L(P, `framer-j7lohg`, l, S),
                  "data-framer-name": `Desktop`,
                  layoutDependency: j,
                  layoutId: `BM7tMcazb`,
                  ref: r,
                  style: {
                    backdropFilter: `none`,
                    background: `rgba(0, 0, 0, 0)`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    WebkitBackdropFilter: `none`,
                    ...c,
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
                  ...mn(
                    {
                      vUcOkaaJX: { "data-framer-name": `Mobile Opened` },
                      WYkxKI3Su: { "data-framer-name": `Mobile Closed` },
                    },
                    x,
                    E
                  ),
                  children: [
                    _(D.div, {
                      className: `framer-1sfik9i`,
                      "data-framer-name": `Container`,
                      layoutDependency: j,
                      layoutId: `nKVpqDxIZ`,
                      children: C(D.div, {
                        className: `framer-h7mu32`,
                        "data-framer-name": `desktop-menu`,
                        layoutDependency: j,
                        layoutId: `t7Vl92asH`,
                        children: [
                          _(de, {
                            links: [
                              { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              _(U, {
                                height: 32,
                                y: (s?.y || 0) + 25 + 0 + 0 + 0 + 26.5,
                                ...mn(
                                  {
                                    vUcOkaaJX: { y: (s?.y || 0) + 0 + 0 + 0 + 0 + 24 },
                                    WYkxKI3Su: { y: (s?.y || 0) + 0 + 0 + 0 + 0 + 24 },
                                  },
                                  x,
                                  E
                                ),
                                children: _(z, {
                                  className: `framer-b3b1k1-container`,
                                  layoutDependency: j,
                                  layoutId: `QJ03X90eG-container`,
                                  nodeId: `QJ03X90eG`,
                                  rendersWithMotion: !0,
                                  scopeId: `HskjMAcxS`,
                                  children: _(qe, {
                                    height: `100%`,
                                    id: `QJ03X90eG`,
                                    irY_XKj0O: e[0],
                                    layoutId: `QJ03X90eG`,
                                    variant: Cn(`iC3uXzR0q`),
                                    width: `100%`,
                                    ...mn(
                                      {
                                        vUcOkaaJX: { irY_XKj0O: e[2] },
                                        WYkxKI3Su: { irY_XKj0O: e[1] },
                                      },
                                      x,
                                      E
                                    ),
                                  }),
                                }),
                              }),
                          }),
                          F() &&
                            _(D.nav, {
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
                              transformTemplate: wn,
                              children: _(U, {
                                height: 52,
                                y: (s?.y || 0) + 25 + 0 + 0 + 0 + 10.7485 + 6,
                                children: _(z, {
                                  className: `framer-bc6jil-container`,
                                  layoutDependency: j,
                                  layoutId: `I3JwG2AY1-container`,
                                  nodeId: `I3JwG2AY1`,
                                  rendersWithMotion: !0,
                                  scopeId: `HskjMAcxS`,
                                  children: _(X, {
                                    Ca70t6UaX: p,
                                    dg70DYZf1: h,
                                    E1VDnva7s: m,
                                    gorWN070w: te,
                                    height: `100%`,
                                    id: `I3JwG2AY1`,
                                    layoutId: `I3JwG2AY1`,
                                    PdsmeeeJ6: ee,
                                    PUmeHLtsE: y,
                                    RvgzwmSGY: v,
                                    variant: Cn(`SnNOaglBC`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          C(D.button, {
                            className: `framer-1quw86t`,
                            "data-framer-name": `Actions`,
                            "data-reset": `button`,
                            layoutDependency: j,
                            layoutId: `yqV3ZivSO`,
                            ...mn(
                              {
                                vUcOkaaJX: { "data-highlight": !0, onTap: ae },
                                WYkxKI3Su: { "data-highlight": !0, onTap: N },
                              },
                              x,
                              E
                            ),
                            children: [
                              I() &&
                                _(Ce, {
                                  animated: !0,
                                  className: `framer-1u5hbcm`,
                                  Component: ft,
                                  layoutDependency: j,
                                  layoutId: `AUGh10xbQ`,
                                  style: {
                                    "--1m6trwb": 0,
                                    "--21h8s6": `var(--token-f72f35de-6eed-43ee-9e84-9b471b441cf4, rgb(245, 245, 245))`,
                                    "--pgex8v": 1.5,
                                  },
                                  ...mn({ vUcOkaaJX: { Component: St } }, x, E),
                                }),
                              F() &&
                                _(U, {
                                  height: 37,
                                  y: (s?.y || 0) + 25 + 0 + 0 + 0 + 24 + 0,
                                  children: _(z, {
                                    className: `framer-13ja4jg-container`,
                                    layoutDependency: j,
                                    layoutId: `gv_rfcenE-container`,
                                    nodeId: `gv_rfcenE`,
                                    rendersWithMotion: !0,
                                    scopeId: `HskjMAcxS`,
                                    children: _(K, {
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
                    R() &&
                      _(U, {
                        ...mn(
                          {
                            vUcOkaaJX: {
                              height: 52,
                              width: `calc(${s?.width || `100vw`} - 40px)`,
                              y: (s?.y || 0) + 0 + 130,
                            },
                          },
                          x,
                          E
                        ),
                        children: _(z, {
                          className: `framer-1flstnu-container`,
                          layoutDependency: j,
                          layoutId: `mD9t2qR2t-container`,
                          nodeId: `mD9t2qR2t`,
                          rendersWithMotion: !0,
                          scopeId: `HskjMAcxS`,
                          children: _(X, {
                            Bwax88DQe: oe,
                            height: `100%`,
                            id: `mD9t2qR2t`,
                            layoutId: `mD9t2qR2t`,
                            style: { width: `100%` },
                            variant: Cn(`zQ0KE9P_v`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    R() &&
                      _(U, {
                        children: _(z, {
                          className: `framer-57t2mv-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: j,
                          layoutId: `H8PufP3h9-container`,
                          nodeId: `H8PufP3h9`,
                          rendersWithMotion: !0,
                          scopeId: `HskjMAcxS`,
                          children: _(mt, {
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
          `.framer-PGeIh.framer-6bbb4m, .framer-PGeIh .framer-6bbb4m { display: block; }`,
          `.framer-PGeIh.framer-j7lohg { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 25px 0px 0px 0px; position: relative; width: 1280px; }`,
          `.framer-PGeIh .framer-1sfik9i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; z-index: 10; }`,
          `.framer-PGeIh .framer-h7mu32 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 24px 0px 24px 0px; position: relative; width: 100%; }`,
          `.framer-PGeIh .framer-b3b1k1-container, .framer-PGeIh .framer-57t2mv-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-PGeIh .framer-lmh0sm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 6px; position: absolute; top: 50%; width: min-content; z-index: 1; }`,
          `.framer-PGeIh .framer-bc6jil-container { flex: none; height: auto; position: relative; width: auto; z-index: 10; }`,
          `.framer-PGeIh .framer-1quw86t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-PGeIh .framer-1u5hbcm { flex: none; height: auto; position: relative; width: 24px; }`,
          `.framer-PGeIh .framer-13ja4jg-container { cursor: pointer; flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-PGeIh .framer-1flstnu-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-PGeIh.framer-v-vwow46.framer-j7lohg { overflow: hidden; padding: 0px 20px 0px 20px; width: 390px; }`,
          `.framer-PGeIh.framer-v-vwow46 .framer-1sfik9i, .framer-PGeIh.framer-v-b488xt .framer-1sfik9i { padding: 0px; z-index: 1; }`,
          `.framer-PGeIh.framer-v-vwow46 .framer-1quw86t, .framer-PGeIh.framer-v-b488xt .framer-1quw86t { cursor: pointer; }`,
          `.framer-PGeIh.framer-v-vwow46 .framer-1u5hbcm, .framer-PGeIh.framer-v-b488xt .framer-1u5hbcm { width: 32px; }`,
          `.framer-PGeIh.framer-v-b488xt.framer-j7lohg { gap: 50px; overflow: hidden; padding: 0px 20px 600px 20px; width: 390px; }`,
          `.framer-PGeIh[data-border="true"]::after, .framer-PGeIh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-PGeIh`
      )),
      (Z.displayName = `Header`),
      (Z.defaultProps = { height: 111, width: 1280 }),
      I(Z, {
        variant: {
          options: [`BM7tMcazb`, `WYkxKI3Su`, `vUcOkaaJX`],
          optionTitles: [`Desktop`, `Mobile Closed`, `Mobile Opened`],
          title: `Variant`,
          type: V.Enum,
        },
        T3HPnSxUm: { title: `Home Scroll Section`, type: V.ScrollSectionRef },
        t57Vo4ns5: { title: `Features Scroll Section`, type: V.ScrollSectionRef },
        rQ8RMEfAF: { title: `Home Nav Passive`, type: V.ScrollSectionRef },
        fALSZKb37: { title: `Features Passive`, type: V.ScrollSectionRef },
        Apee1Bt8u: { title: `Product Active`, type: V.ScrollSectionRef },
        J0_M0UDdY: { title: `Product Passive`, type: V.ScrollSectionRef },
        OrPShorLq: { title: `Blog`, type: V.ScrollSectionRef },
      }),
      W(Z, [{ explicitInter: !0, fonts: [] }, ...hn, ...gn, ..._n, ...vn], {
        supportsExplicitInterCodegen: !0,
      }),
      (Z.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([M(qe, {}, t), M(X, {}, t), M(K, {}, t)])),
      }));
  }),
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn = e(() => {
    (x(),
      R(),
      n(),
      (jn = `var(--framer-icon-mask)`),
      (Mn = w(function (e, t) {
        return _(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Nn = D.create(Mn)),
      (Pn = w((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? _(Nn, { ...a, layoutId: r, ref: t, children: i })
          : _(`svg`, { ...a, ref: t, children: i });
      })),
      (Fn = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 1.5 16.5 C 0.672 16.5 0 15.828 0 15 L 0 1.5 C 0 0.672 0.672 0 1.5 0 L 15 0 C 15.828 0 16.5 0.672 16.5 1.5 L 16.5 15 C 16.5 15.828 15.828 16.5 15 16.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="qUr6K2nJv" transform="translate(3.75 3.75)" width="16.5px"/><path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="MbfmAbWGf" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 12)" width="16.5px"/><path d="M 0 0 L 0 16.5" fill="transparent" height="16.5px" id="mcA57vhod" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 3.75)" width="1px"/></svg>`),
      (In = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (Ln = B(
        w(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = In(e),
            u = he(`465907804`, Fn);
          return _(Pn, {
            ...l,
            className: L(`framer-ohg0r`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: _(`use`, { href: u }),
          });
        }),
        [
          `.framer-ohg0r { -webkit-mask: ${jn}; aspect-ratio: 1; display: block; mask: ${jn}; width: 24px; }`,
        ],
        `framer-ohg0r`
      )),
      (Ln.displayName = `Plus`),
      I(Ln, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: V.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: V.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: V.Number,
        },
      }));
  });
function zn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Q,
  Qn = e(() => {
    (x(),
      R(),
      A(),
      n(),
      We(),
      Rn(),
      (Bn = P(Ln)),
      (Vn = P(Ge)),
      (Hn = [`HnJ8qWVJX`, `AfO65BCMc`, `a0PDxByKJ`, `Q9BqiCKNd`]),
      (Un = `framer-Ky08N`),
      (Wn = {
        a0PDxByKJ: `framer-v-67e0op`,
        AfO65BCMc: `framer-v-cp4qys`,
        HnJ8qWVJX: `framer-v-16wermw`,
        Q9BqiCKNd: `framer-v-14viuwh`,
      }),
      (Gn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Kn = {
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
      (qn = ({ value: e, children: t }) => {
        let n = s(O),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return _(O.Provider, { value: i, children: t });
      }),
      (Jn = { Close: `Q9BqiCKNd`, Desktop: `HnJ8qWVJX`, Phone: `a0PDxByKJ`, Tablet: `AfO65BCMc` }),
      (Yn = D.create(o)),
      (Xn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Jn[r.variant] ?? r.variant ?? `HnJ8qWVJX`,
      })),
      (Zn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = B(
        w(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = f(),
            { activeLocale: a, setLocale: o } = H();
          se();
          let { style: s, className: c, layoutId: l, variant: u, ...d } = Xn(e),
            {
              baseVariant: p,
              classNames: m,
              clearLoadingGesture: h,
              gestureHandlers: ee,
              gestureVariant: v,
              isLoading: y,
              setGestureState: te,
              setVariant: b,
              variants: x,
            } = Ie({
              cycleOrder: Hn,
              defaultVariant: `HnJ8qWVJX`,
              ref: r,
              variant: u,
              variantClassNames: Wn,
            }),
            S = Zn(e, x),
            { activeVariantCallback: w, delay: T } = ue(p),
            E = w(async (...e) => {
              b(`Q9BqiCKNd`);
            }),
            O = L(Un),
            k = () => p !== `Q9BqiCKNd`;
          return _(ne, {
            id: l ?? i,
            children: _(Yn, {
              animate: x,
              initial: !1,
              children: _(qn, {
                value: Gn,
                children: C(D.div, {
                  ...d,
                  ...ee,
                  className: L(O, `framer-16wermw`, c, m),
                  "data-framer-name": `Desktop`,
                  layoutDependency: S,
                  layoutId: `HnJ8qWVJX`,
                  ref: r,
                  style: {
                    backdropFilter: `blur(25px)`,
                    backgroundColor: `rgba(255, 255, 255, 0.16)`,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    WebkitBackdropFilter: `blur(25px)`,
                    ...s,
                  },
                  variants: {
                    Q9BqiCKNd: {
                      backdropFilter: `none`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                      WebkitBackdropFilter: `none`,
                    },
                  },
                  ...zn(
                    {
                      a0PDxByKJ: { "data-framer-name": `Phone` },
                      AfO65BCMc: { "data-framer-name": `Tablet` },
                      Q9BqiCKNd: { "data-framer-name": `Close` },
                    },
                    p,
                    v
                  ),
                  children: [
                    k() &&
                      _(D.div, {
                        className: `framer-1gyno9q`,
                        "data-border": !0,
                        "data-framer-name": `Close`,
                        "data-highlight": !0,
                        layoutDependency: S,
                        layoutId: `VDOu1Hd3e`,
                        onTap: E,
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
                        whileHover: Kn,
                        children: _(Ln, {
                          animated: !0,
                          className: `framer-1imn8oj`,
                          layoutDependency: S,
                          layoutId: `RmT3kzzmV`,
                          style: {
                            "--1m6trwb": 0,
                            "--21h8s6": `var(--token-3dc2a28e-f021-4e48-9a39-ebd2f9557044, rgb(163, 163, 163))`,
                            "--pgex8v": 1.5,
                            rotate: -45,
                          },
                        }),
                      }),
                    k() &&
                      _(U, {
                        children: _(z, {
                          className: `framer-1n9jot8-container`,
                          isModuleExternal: !0,
                          layoutDependency: S,
                          layoutId: `bP6MQtOM6-container`,
                          nodeId: `bP6MQtOM6`,
                          rendersWithMotion: !0,
                          scopeId: `Xx3CQgVjS`,
                          children: _(Ge, {
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
      I(Q, {
        variant: {
          options: [`HnJ8qWVJX`, `AfO65BCMc`, `a0PDxByKJ`, `Q9BqiCKNd`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`, `Close`],
          title: `Variant`,
          type: V.Enum,
        },
      }),
      W(Q, [{ explicitInter: !0, fonts: [] }, ...Bn, ...Vn], { supportsExplicitInterCodegen: !0 }));
  }),
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  $,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r = e(() => {
    (x(),
      R(),
      A(),
      n(),
      at(),
      An(),
      Ue(),
      Qn(),
      ($n = P(Z)),
      (er = P(Q)),
      (tr = P(Je)),
      (nr = P(G)),
      (rr = {
        I56gUQFGm: `(min-width: 1200px)`,
        pd6ytuzE1: `(min-width: 810px) and (max-width: 1199.98px)`,
        tHCgLbG0e: `(max-width: 809.98px)`,
      }),
      (ir = `framer-6PaXG`),
      (ar = {
        I56gUQFGm: `framer-v-140pyj1`,
        pd6ytuzE1: `framer-v-pzk0yl`,
        tHCgLbG0e: `framer-v-pmyeso`,
      }),
      ($ = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (or = {
        tHCgLbG0e: [
          `.framer-6PaXG .framer-lcqu2a-container { left: 50%; position: var(--framer-canvas-fixed-position, fixed); transform: translateX(-50%); }`,
        ],
      }),
      (sr = Object.keys(or)),
      (cr = { tHCgLbG0e: `.framer-pmyeso-override` }),
      (lr = [
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
      (ur = {
        I56gUQFGm: `(min-width: 1200px)`,
        pd6ytuzE1: `(min-width: 810px) and (max-width: 1199.98px)`,
        tHCgLbG0e: `(max-width: 809.98px)`,
      }),
      (dr = { Desktop: `I56gUQFGm`, Phone: `tHCgLbG0e`, Tablet: `pd6ytuzE1` }),
      (fr = ({ value: e }) =>
        De()
          ? null
          : _(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (pr = ({
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
        variant: dr[u.variant] ?? u.variant ?? `I56gUQFGm`,
      })),
      (mr = w(function (e, t) {
        let n = g(null),
          r = t ?? n,
          i = f(),
          { activeLocale: a, setLocale: o } = H(),
          {
            style: s,
            className: c,
            layoutId: l,
            variant: u,
            Lo3xd9ZUS: d,
            EzSNs9Obl: p,
            ijCz8cPdl: m,
            KB36F5lyR: h,
            RbgiRgJS1: ee,
            KnwXTuwwP: v,
            JDoUE0Q8I: y,
            children: te,
            ...b
          } = pr(e),
          [x, S] = Pe(u, rr, !1),
          w = L(ir);
        return (
          _e({}),
          _(Oe.Provider, {
            value: {
              activeVariantId: x,
              humanReadableVariantMap: dr,
              isLayoutTemplate: !0,
              primaryVariantId: `I56gUQFGm`,
              variantClassNames: ar,
            },
            children: C(ne, {
              id: l ?? i,
              children: [
                _(fr, {
                  value: `:root body { background: var(--token-129db3aa-c63b-49d4-a9df-4d7f82f7f83f, rgb(1, 1, 23)); }`,
                }),
                C(D.div, {
                  ...b,
                  className: L(w, `framer-140pyj1`, c),
                  "data-layout-template": !0,
                  "data-selection": !0,
                  ref: r,
                  style: { ...s },
                  children: [
                    _(U, {
                      height: 111,
                      width: `100vw`,
                      y: 0,
                      children: _(Te, {
                        breakpoint: x,
                        overrides: {
                          tHCgLbG0e: { "data-framer-layout-hint-center-x": !0, layoutScroll: !0 },
                        },
                        children: _(Ee, {
                          className: `framer-lcqu2a-container`,
                          nodeId: `Ou8r3MGSV`,
                          scopeId: `Jyr06fner`,
                          children: _(Te, {
                            breakpoint: x,
                            overrides: { tHCgLbG0e: { variant: $(`WYkxKI3Su`) } },
                            children: _(Z, {
                              Apee1Bt8u: ee,
                              fALSZKb37: h,
                              height: `100%`,
                              id: `Ou8r3MGSV`,
                              J0_M0UDdY: v,
                              layoutId: `Ou8r3MGSV`,
                              OrPShorLq: y,
                              rQ8RMEfAF: p,
                              style: { width: `100%` },
                              T3HPnSxUm: d,
                              t57Vo4ns5: m,
                              variant: $(`BM7tMcazb`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    te,
                    _(`div`, { className: `framer-o4tdt9` }),
                    C(D.div, {
                      className: `framer-ppkyv1`,
                      "data-framer-name": `Delete This`,
                      children: [
                        _(U, {
                          height: 123,
                          y: 749,
                          children: _(Ee, {
                            className: `framer-1oiejot-container`,
                            nodeId: `UCJX1BNum`,
                            scopeId: `Jyr06fner`,
                            children: _(Te, {
                              breakpoint: x,
                              overrides: {
                                pd6ytuzE1: { variant: $(`AfO65BCMc`) },
                                tHCgLbG0e: { variant: $(`a0PDxByKJ`) },
                              },
                              children: _(Q, {
                                height: `100%`,
                                id: `UCJX1BNum`,
                                layoutId: `UCJX1BNum`,
                                variant: $(`HnJ8qWVJX`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        _(U, {
                          height: 48,
                          y: 882,
                          children: _(Ee, {
                            className: `framer-1i19k86-container`,
                            nodeId: `FrbdWMtGW`,
                            scopeId: `Jyr06fner`,
                            children: _(Je, {
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
                    _(Te, {
                      breakpoint: x,
                      overrides: { tHCgLbG0e: { y: 1e3 } },
                      children: _(U, {
                        height: 10,
                        width: `100vw`,
                        y: 1111,
                        children: _(Ee, {
                          className: `framer-obna49-container`,
                          nodeId: `GKRGkR0nC`,
                          scopeId: `Jyr06fner`,
                          children: _(Te, {
                            breakpoint: x,
                            overrides: {
                              pd6ytuzE1: { variant: $(`p1TrTqind`) },
                              tHCgLbG0e: { variant: $(`p1TrTqind`) },
                            },
                            children: _(G, {
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
                _(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (hr = (e) =>
        e === ye.canvas || e === ye.export
          ? [
              ...lr,
              ...sr.flatMap((e) => {
                let t = cr[e];
                return or[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...lr, ...sr.map((e) => `@media ${ur[e]} { ${or[e].join(` `)} }`)]),
      (gr = B(mr, hr, `framer-6PaXG`)),
      (gr.displayName = `Header & Footer Template`),
      (gr.defaultProps = { height: 1e3, width: 1200 }),
      I(gr, {
        Lo3xd9ZUS: { title: `Home Active`, type: V.ScrollSectionRef },
        EzSNs9Obl: { title: `Home Passive`, type: V.ScrollSectionRef },
        ijCz8cPdl: { title: `Features`, type: V.ScrollSectionRef },
        KB36F5lyR: { title: `Features Passive`, type: V.ScrollSectionRef },
        RbgiRgJS1: { title: `Product Active`, type: V.ScrollSectionRef },
        KnwXTuwwP: { title: `Product Passive`, type: V.ScrollSectionRef },
        JDoUE0Q8I: { title: `Blog`, type: V.ScrollSectionRef },
      }),
      W(gr, [{ explicitInter: !0, fonts: [] }, ...$n, ...er, ...tr, ...nr], {
        supportsExplicitInterCodegen: !0,
      }),
      (gr.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([M(Z, {}, t), M(Q, {}, t), M(Je, {}, t), M(G, {}, t)])
        ),
      }));
  });
function vr({ webPageId: e, children: t, style: n, ...r }) {
  let i = {
      EzSNs9Obl: { href: { hash: `:U6VhzUg6a`, webPageId: `augiA20Il` }, refKey: !0 },
      ijCz8cPdl: { href: { hash: `:N2ijbw0rP`, webPageId: `augiA20Il` }, refKey: !0 },
      KB36F5lyR: { href: { hash: `:lCq8UO0dC`, webPageId: `augiA20Il` }, refKey: !0 },
      Lo3xd9ZUS: { href: { hash: `:iYUNHqCEb`, webPageId: `augiA20Il` }, refKey: !0 },
      RbgiRgJS1: { href: { hash: `:lCq8UO0dC`, webPageId: `augiA20Il` }, refKey: !0 },
    },
    a = {
      ...i,
      EzSNs9Obl: void 0,
      ijCz8cPdl: void 0,
      KB36F5lyR: void 0,
      Lo3xd9ZUS: void 0,
      RbgiRgJS1: void 0,
    },
    o = we(),
    s = { augiA20Il: i, weKLGiygA: a }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `weKLGiygA`:
      return m(
        de,
        { links: [s.Lo3xd9ZUS, s.EzSNs9Obl, s.ijCz8cPdl, s.KB36F5lyR, s.RbgiRgJS1] },
        (e) =>
          m(
            gr,
            {
              ...s,
              EzSNs9Obl: o(e[1]),
              ijCz8cPdl: o(e[2]),
              KB36F5lyR: o(e[3]),
              key: `HeaderFooterTemplate`,
              Lo3xd9ZUS: o(e[0]),
              RbgiRgJS1: o(e[4]),
              style: n,
            },
            t(!0)
          )
      );
    default:
      return t(!1);
  }
}
function yr(e) {
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
async function br({ routeId: e, pathVariables: t, localeId: n, collectionItemId: s }) {
  let c = Cr[e].page.preload();
  ae({
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
  let u = m(ve, {
    children: m(Me, {
      children: m(ke, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        routes: Cr,
        collectionUtils: Tr,
        framerSiteId: Er,
        notFoundPage: N(() => import(`./nRxv-n6GPKu6tCvTEypd8R7MZxe9GPx8o7xSQZrD048.DCbp7I4K.mjs`)),
        isReducedMotion: void 0,
        localeId: n,
        locales: wr,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://util4dev.framer.website`,
        EditorBar:
          i === void 0
            ? void 0
            : (() => {
                if (Or) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return N(async () => {
                  i.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: re, useLocaleInfo: H, useRouter: Ne },
                    react: {
                      createElement: m,
                      Fragment: o,
                      memo: d,
                      useCallback: r,
                      useEffect: a,
                      useRef: g,
                      useState: l,
                      useLayoutEffect: T,
                    },
                    "react-dom": { createPortal: ee },
                  };
                  let { createEditorBar: e } = await import(`init.mjs`);
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !1,
        LayoutTemplate: vr,
        loadSnippetsModule: new Fe(
          () => import(`./DQqSUZsnaRFZh7IOWWHNlhUcW2OuIQoZol3YF9qrJXY.dObCGW41.mjs`)
        ),
        initialCollectionItemId: s,
      }),
    }),
    value: { routes: {} },
  });
  return (await c, u);
}
function xr() {
  Dr && i.__framer_events.push(arguments);
}
async function Sr(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || i.__framer_hadFatalError) return;
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
    xr(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, a, o, s, c;
    if (e)
      ((c = JSON.parse(t.dataset.framerHydrateV2)),
        (r = c.routeId),
        (a = c.localeId),
        (o = c.pathVariables),
        (s = c.breakpoints),
        (r = oe(Cr, r)));
    else {
      oe(Cr, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (a = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((o ??= {}), (o[e.slice(4)] = n));
      }
      if (!r || !a) {
        let e = Re(Cr, decodeURIComponent(location.pathname), !0, wr);
        ((r = e.routeId), (a = e.localeId), (o = e.pathVariables));
      }
    }
    let l = br({
      routeId: r,
      localeId: a,
      pathVariables: o,
      collectionItemId: c?.collectionItemId,
    });
    i !== void 0 &&
      (async () => {
        let e = Cr[r],
          t = wr.find(({ id: e }) => (a ? e === a : e === "default")).code,
          n = c?.collectionItemId ?? null;
        if (n === null && e?.collectionId && Tr) {
          let r = await Tr[e.collectionId]?.(),
            [i] = Object.values(o);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let s = Intl.DateTimeFormat().resolvedOptions(),
          l = s.timeZone,
          u = s.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          i.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Er,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: i.location.href,
              hostname: i.location.hostname || null,
              pathname: i.location.pathname || null,
              hash: i.location.hash || null,
              search: i.location.search || null,
              timezone: l,
              locale: u,
            },
            `eager`,
          ]),
          await fe({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let u = await l;
    e
      ? (xe(`framer-rewrite-breakpoints`, () => {
          (je(s), i.__framer_onRewriteBreakpoints?.(s));
        }),
        (Or ? (e) => e() : E)(() => {
          (ce(), le(), S(t, u, { onRecoverableError: n }));
        }))
      : b(t, { onRecoverableError: n }).render(u);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var Cr, wr, Tr, Er, Dr, Or;
e(() => {
  if (
    (t(),
    R(),
    n(),
    te(),
    y(),
    _r(),
    (Cr = {
      augiA20Il: {
        elements: {
          adTRrxLJn: `showcase`,
          IknGWjLgy: `benefits`,
          iYUNHqCEb: `hero`,
          lCq8UO0dC: `image-gen`,
          N2ijbw0rP: `features`,
          sgmlFhWUG: `product`,
          U6VhzUg6a: `richtext`,
        },
        page: N(() => import(`./_aS7UdC3vs_F3zLdrwSnJ7yJTHJvc56gxXquEc41Ce0.TWita4CM.mjs`)),
        path: `/`,
      },
      weKLGiygA: {
        elements: {},
        page: N(() => import(`./nRxv-n6GPKu6tCvTEypd8R7MZxe9GPx8o7xSQZrD048.DCbp7I4K.mjs`)),
        path: `/404`,
      },
    }),
    (wr = [{ code: `vi-VN`, id: `default`, name: `Vietnamese`, slug: ``, textDirection: `ltr` }]),
    (Tr = {}),
    (Er = `be8cad654d7a2fe26d4fe3d5007755fec82f6796fd3f299b911dc7610cf9e1fd`),
    (Dr = typeof document < `u`),
    (Or = Dr && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(u.userAgent)),
    Dr)
  ) {
    ((i.__framer_importFromPackage = (e, t) => () =>
      m(Se, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (i.__framer_events = i.__framer_events || []),
      j());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? Sr(!0, e) : Sr(!1, e);
  }
  (function () {
    Dr &&
      E(() => {
        S(
          document.getElementById(`__framer-badge-container`),
          m(h, {}, m(v(() => import(`./PX9hIOIVM.tqnUDBPR.mjs`))))
        );
      });
  })();
})();
export { yr as getLayoutTemplateBreakpoints, br as getPageRoot };
//# sourceMappingURL=script_main.Cy3_6SL5.mjs.map
