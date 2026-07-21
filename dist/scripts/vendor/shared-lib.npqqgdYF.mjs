import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  E as n,
  L as r,
  N as i,
  O as a,
  P as o,
  R as s,
  b as c,
  c as l,
  j as u,
  l as d,
  s as f,
  u as p,
  v as m,
} from "./react.C8gjTMAM.mjs";
import { S as h, a as g, r as _, t as v } from "./motion.CzGBN5me.mjs";
import {
  E as y,
  P as b,
  Q as x,
  S,
  T as C,
  V as w,
  d as T,
  dt as E,
  g as D,
  r as O,
  rt as k,
  ut as A,
  v as j,
  x as M,
} from "./framer.22F-MT4t.mjs";
var N,
  P,
  F,
  I = e(() => {
    (w(),
      y.loadFonts([`Inter-Medium`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-MediumItalic`]),
      (N = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/khkJkwSL66WFg8SX6Wa726c.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/0E7IMbDzcGABpBwwqNEt60wU0w.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/NTJ0nQgIF0gcDelS14zQ9NR9Q.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/QrcNhgEPfRl0LS8qz5Ln8olanl8.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/JEXmejW8mXOYMtt0hyRg811kHac.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/ksvR4VsLksjpSwnC2fPgHRNMw.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/uy9s0iWuxiNnVt8EpTI3gzohpwo.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (P = [
        `.framer-mhfY5 .framer-styles-preset-ke6suj:not(.rich-text-wrapper), .framer-mhfY5 .framer-styles-preset-ke6suj.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0px; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-f72f35de-6eed-43ee-9e84-9b471b441cf4, #f5f5f5); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-mhfY5 .framer-styles-preset-ke6suj:not(.rich-text-wrapper), .framer-mhfY5 .framer-styles-preset-ke6suj.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0px; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-f72f35de-6eed-43ee-9e84-9b471b441cf4, #f5f5f5); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-mhfY5 .framer-styles-preset-ke6suj:not(.rich-text-wrapper), .framer-mhfY5 .framer-styles-preset-ke6suj.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0px; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-f72f35de-6eed-43ee-9e84-9b471b441cf4, #f5f5f5); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (F = `framer-mhfY5`));
  }),
  L,
  R,
  z,
  ee = e(() => {
    (w(),
      y.loadFonts([`GF;Inter-500`, `GF;Inter-700`, `GF;Inter-700italic`, `GF;Inter-500italic`]),
      (L = [
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
      (R = [
        `.framer-zCU8Z .framer-styles-preset-im2x0h:not(.rich-text-wrapper), .framer-zCU8Z .framer-styles-preset-im2x0h.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-f72f35de-6eed-43ee-9e84-9b471b441cf4, #f5f5f5); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (z = `framer-zCU8Z`));
  });
function te(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var B,
  ne,
  re,
  ie,
  ae,
  oe,
  se,
  ce,
  le,
  V,
  ue = e(() => {
    (f(),
      w(),
      v(),
      n(),
      ee(),
      (B = [`iC3uXzR0q`, `mmDUgpyjc`]),
      (ne = `framer-e9bci`),
      (re = { iC3uXzR0q: `framer-v-17bnp42`, mmDUgpyjc: `framer-v-1t7i2o5` }),
      (ie = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ae = ({ value: e, children: t }) => {
        let n = i(g),
          r = e ?? n.transition,
          a = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(g.Provider, { value: a, children: t });
      }),
      (oe = { Footer: `mmDUgpyjc`, Logo: `iC3uXzR0q` }),
      (se = h.create(r)),
      (ce = ({ height: e, id: t, link: n, width: r, ...i }) => ({
        ...i,
        irY_XKj0O: n ?? i.irY_XKj0O,
        variant: oe[i.variant] ?? i.variant ?? `iC3uXzR0q`,
      })),
      (le = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (V = E(
        m(function (e, t) {
          let n = u(null),
            i = t ?? n,
            a = c(),
            { activeLocale: o, setLocale: s } = k();
          x();
          let { style: l, className: f, layoutId: m, variant: g, irY_XKj0O: v, ...y } = ce(e),
            {
              baseVariant: b,
              classNames: S,
              clearLoadingGesture: w,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: O,
              setGestureState: M,
              setVariant: N,
              variants: P,
            } = A({
              cycleOrder: B,
              defaultVariant: `iC3uXzR0q`,
              ref: i,
              variant: g,
              variantClassNames: re,
            }),
            F = le(e, P),
            I = C(ne, z),
            L = () => b !== `mmDUgpyjc`;
          return d(_, {
            id: m ?? a,
            children: d(se, {
              animate: P,
              initial: !1,
              children: d(ae, {
                value: ie,
                children: d(T, {
                  href: v,
                  motionChild: !0,
                  nodeId: `iC3uXzR0q`,
                  scopeId: `JTibN7whG`,
                  children: d(h.a, {
                    ...y,
                    ...E,
                    className: `${C(I, `framer-17bnp42`, f, S)} framer-8037fa`,
                    "data-framer-name": `Logo`,
                    layoutDependency: F,
                    layoutId: `iC3uXzR0q`,
                    ref: i,
                    style: { ...l },
                    ...te({ mmDUgpyjc: { "data-framer-name": `Footer` } }, b, D),
                    children: p(h.div, {
                      className: `framer-14xrcyt`,
                      "data-framer-name": `Logo`,
                      layoutDependency: F,
                      layoutId: `W5UNeFaVz`,
                      children: [
                        d(T, {
                          href: { webPageId: `augiA20Il` },
                          motionChild: !0,
                          nodeId: `LavuTHulC`,
                          openInNewTab: !1,
                          scopeId: `JTibN7whG`,
                          children: d(h.a, {
                            className: `framer-gcnmuw framer-8037fa`,
                            "data-framer-name": `Logo`,
                            layoutDependency: F,
                            layoutId: `LavuTHulC`,
                            style: {
                              background: `linear-gradient(128deg, var(--token-fc3ae52e-96b8-4206-b03a-a7c4b682c3c4, rgb(196, 181, 253)) 0%, var(--token-31538414-9035-4880-bae7-d650ac13116b, rgb(225, 29, 72)) 50%, rgb(255, 219, 77) 100%)`,
                              borderBottomLeftRadius: 20,
                              borderBottomRightRadius: 20,
                              borderTopLeftRadius: 20,
                              borderTopRightRadius: 20,
                              boxShadow: `inset 0px 0px 10px 0px rgb(255, 255, 255), inset 0px -2px 0px 0px rgba(255, 255, 255, 0.2)`,
                            },
                            variants: {
                              mmDUgpyjc: {
                                borderBottomLeftRadius: 24,
                                borderBottomRightRadius: 24,
                                borderTopLeftRadius: 24,
                                borderTopRightRadius: 24,
                              },
                            },
                          }),
                        }),
                        L() &&
                          d(j, {
                            __fromCanvasComponent: !0,
                            children: d(r, {
                              children: d(h.p, {
                                className: `framer-styles-preset-im2x0h`,
                                "data-styles-preset": `fhos88JCX`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-52da8dbb-cd94-4ec6-8ec8-f864d65f3fe3, rgb(250, 250, 250)))`,
                                },
                                children: `Util4dev`,
                              }),
                            }),
                            className: `framer-1u5vwwj`,
                            fonts: [`Inter`],
                            layoutDependency: F,
                            layoutId: `aY_Unl2UT`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-52da8dbb-cd94-4ec6-8ec8-f864d65f3fe3, rgb(250, 250, 250))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-e9bci.framer-8037fa, .framer-e9bci .framer-8037fa { display: block; }`,
          `.framer-e9bci.framer-17bnp42 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-e9bci .framer-14xrcyt { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-e9bci .framer-gcnmuw { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: auto; overflow: visible; position: relative; text-decoration: none; width: 32px; }`,
          `.framer-e9bci .framer-1u5vwwj { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-e9bci.framer-v-1t7i2o5.framer-17bnp42 { flex-direction: column; }`,
          `.framer-e9bci.framer-v-1t7i2o5 .framer-14xrcyt { flex-direction: column; gap: 5px; }`,
          `.framer-e9bci.framer-v-1t7i2o5 .framer-gcnmuw { width: 48px; }`,
          ...R,
        ],
        `framer-e9bci`
      )),
      (V.displayName = `Logos`),
      (V.defaultProps = { height: 32, width: 122 }),
      S(V, {
        variant: {
          options: [`iC3uXzR0q`, `mmDUgpyjc`],
          optionTitles: [`Logo`, `Footer`],
          title: `Variant`,
          type: O.Enum,
        },
        irY_XKj0O: { title: `Link`, type: O.Link },
      }),
      M(
        V,
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
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...b(L),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  de,
  H,
  U,
  fe = e(() => {
    (w(),
      y.loadFonts([`GF;Inter-500`, `Inter-Black`, `Inter-BlackItalic`, `Inter-BoldItalic`]),
      (de = [
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
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/X5hj6qzcHUYv7h1390c8Rhm6550.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/cugnVhSraaRyANCaUtI5FV17wk.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/5HcVoGak8k5agFJSaKa4floXVu0.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/rZ5DdENNqIdFTIyQQiP5isO7M.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/P2Bw01CtL0b9wqygO0sSVogWbo.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/3ZmXbBKToJifDV9gwcifVd1tEY.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/gcnfba68tfm7qAyrWRCf9r34jg.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (H = [
        `.framer-NS75P .framer-styles-preset-ko1txu:not(.rich-text-wrapper), .framer-NS75P .framer-styles-preset-ko1txu.rich-text-wrapper h3 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-f72f35de-6eed-43ee-9e84-9b471b441cf4, #f5f5f5); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-NS75P .framer-styles-preset-ko1txu:not(.rich-text-wrapper), .framer-NS75P .framer-styles-preset-ko1txu.rich-text-wrapper h3 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-f72f35de-6eed-43ee-9e84-9b471b441cf4, #f5f5f5); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-NS75P .framer-styles-preset-ko1txu:not(.rich-text-wrapper), .framer-NS75P .framer-styles-preset-ko1txu.rich-text-wrapper h3 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-f72f35de-6eed-43ee-9e84-9b471b441cf4, #f5f5f5); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (U = `framer-NS75P`));
  });
function pe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var me,
  he,
  ge,
  _e,
  ve,
  ye,
  W,
  be,
  G,
  xe,
  Se,
  Ce,
  we,
  Te,
  Ee,
  K,
  De = e(() => {
    (f(),
      w(),
      v(),
      n(),
      I(),
      fe(),
      (me = { H6ztmrCS6: { hover: !0 }, uGayw3Tld: { hover: !0 } }),
      (he = [`uGayw3Tld`, `H6ztmrCS6`]),
      (ge = `framer-ykGMN`),
      (_e = { H6ztmrCS6: `framer-v-1w5meqt`, uGayw3Tld: `framer-v-1m898ms` }),
      (ve = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e.toLowerCase() === t.toLowerCase()
          : e === t),
      (ye = (e, t) => (e ? 20 : 12)),
      (W = (e) => {
        if (typeof e == `number` && Number.isFinite(e)) return e;
        if (typeof e != `string`) return 0;
        let t = parseFloat(e);
        return typeof t == `number` && Number.isFinite(t) ? t : 0;
      }),
      (be = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (G = (e, t) => {
        if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
        if (typeof e != `string` || typeof t != `number`) return;
        let n = e.split(` `);
        return n[t] || n[t - 2] || n[0];
      }),
      (xe = { delay: 0, duration: 0.25, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Se = ({ value: e, children: t }) => {
        let n = i(g),
          r = e ?? n.transition,
          a = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(g.Provider, { value: a, children: t });
      }),
      (Ce = h.create(r)),
      (we = { "Big Button": `H6ztmrCS6`, "Gradient Button": `uGayw3Tld` }),
      (Te = ({
        buttonLabel: e,
        buttonLabel1: t,
        height: n,
        id: r,
        link: i,
        newTab: a,
        radius: o,
        width: s,
        ...c
      }) => ({
        ...c,
        AKuoesW74: o ?? c.AKuoesW74 ?? 8,
        AYwwfkaKd: i ?? c.AYwwfkaKd,
        FPjhikCji: a ?? c.FPjhikCji,
        OlthDMhqu: t ?? c.OlthDMhqu ?? `Button`,
        r7ASsAiJ9: e ?? c.r7ASsAiJ9 ?? !0,
        variant: we[c.variant] ?? c.variant ?? `uGayw3Tld`,
      })),
      (Ee = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = E(
        m(function (e, t) {
          let n = u(null),
            i = t ?? n,
            a = c(),
            { activeLocale: o, setLocale: s } = k();
          x();
          let {
              style: l,
              className: f,
              layoutId: p,
              variant: m,
              AKuoesW74: g,
              r7ASsAiJ9: v,
              OlthDMhqu: y,
              AYwwfkaKd: b,
              FPjhikCji: S,
              ...w
            } = Te(e),
            {
              baseVariant: E,
              classNames: D,
              clearLoadingGesture: O,
              gestureHandlers: M,
              gestureVariant: N,
              isLoading: P,
              setGestureState: I,
              setVariant: L,
              variants: R,
            } = A({
              cycleOrder: he,
              defaultVariant: `uGayw3Tld`,
              enabledGestures: me,
              ref: i,
              variant: m,
              variantClassNames: _e,
            }),
            z = Ee(e, R),
            ee = [F, U],
            te = be(W(ye(ve(v, !0), o))),
            B = C(ge, ...ee);
          return d(_, {
            id: p ?? a,
            children: d(Ce, {
              animate: R,
              initial: !1,
              children: d(Se, {
                value: xe,
                children: d(T, {
                  href: b,
                  motionChild: !0,
                  nodeId: `uGayw3Tld`,
                  openInNewTab: S,
                  scopeId: `sq0qV09H9`,
                  children: d(h.a, {
                    ...w,
                    ...M,
                    className: `${C(B, `framer-1m898ms`, f, D)} framer-xi89o0`,
                    "data-border": !0,
                    "data-framer-name": `Gradient Button`,
                    layoutDependency: z,
                    layoutId: `uGayw3Tld`,
                    ref: i,
                    style: {
                      "--10ocmuz": te,
                      "--border-bottom-width": `1px`,
                      "--border-color": `rgba(255, 255, 255, 0.29)`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      background: `linear-gradient(109deg, rgb(148, 61, 255) -4%, rgb(242, 97, 121) 50.30616554054054%, rgb(252, 208, 147) 107%)`,
                      borderBottomLeftRadius: G(g, 3),
                      borderBottomRightRadius: G(g, 2),
                      borderTopLeftRadius: G(g, 0),
                      borderTopRightRadius: G(g, 1),
                      boxShadow: `inset 0px 1px 0px 0px rgba(255, 255, 255, 0.25), inset 0px -5px 0.5px 0px rgba(255, 255, 255, 0.49), inset 0px 0px 20px 0px rgb(255, 255, 255), inset 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(15, 15, 15, 0.72), inset 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(15, 15, 15, 0.64), inset 0px 10px 10px -3.75px rgba(15, 15, 15, 0.25), 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(255, 255, 255, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(255, 255, 255, 0.16), 0px 10px 10px -3.75px rgba(255, 255, 255, 0.06), 0px 0.6021873017743928px 0.6021873017743928px -1px rgba(255, 255, 255, 0.15), 0px 2.288533303243457px 2.288533303243457px -2px rgba(255, 255, 255, 0.14), 0px 10px 10px -3px rgba(255, 255, 255, 0.1)`,
                      ...l,
                    },
                    variants: {
                      "H6ztmrCS6-hover": {
                        background: `linear-gradient(109deg, rgb(148, 61, 255) -265%, rgb(242, 97, 121) -44%, rgb(252, 208, 147) 107%)`,
                      },
                      "uGayw3Tld-hover": {
                        background: `linear-gradient(109deg, rgb(148, 61, 255) -87%, rgb(242, 97, 121) 0%, rgb(252, 208, 147) 97%)`,
                        boxShadow: `inset 0px 1px 0px 0px rgba(255, 255, 255, 0.25), inset 0px -3px 0.5px 0px rgba(255, 255, 255, 0.25), inset 0px 0px 20px 0px rgb(255, 255, 255), inset 0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(15, 15, 15, 0.72), inset 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(15, 15, 15, 0.64), inset 0px 10px 10px -3.75px rgba(15, 15, 15, 0.25), 0px 0.8398022765904898px 0.7558220489314408px -0.4375px rgba(255, 255, 255, 0.07), 0px 1.9904796838090988px 1.7914317154281887px -0.875px rgba(255, 255, 255, 0.07), 0px 3.6308406896569063px 3.267756620691215px -1.3125px rgba(255, 255, 255, 0.07), 0px 6.036265357761295px 5.432638821985164px -1.75px rgba(255, 255, 255, 0.07), 0px 9.748076360978303px 8.773268724880472px -2.1875px rgba(255, 255, 255, 0.06), 0px 15.956633803711155px 14.360970423340037px -2.625px rgba(255, 255, 255, 0.06), 0px 27.476245881684008px 24.728621293515605px -3.0625px rgba(255, 255, 255, 0.05), 0px 50px 44.99999999999999px -3.5px rgba(255, 255, 255, 0.03)`,
                      },
                    },
                    ...pe(
                      {
                        "H6ztmrCS6-hover": { "data-framer-name": void 0 },
                        "uGayw3Tld-hover": { "data-framer-name": void 0 },
                        H6ztmrCS6: { "data-framer-name": `Big Button` },
                      },
                      E,
                      N
                    ),
                    children:
                      v &&
                      d(h.div, {
                        className: `framer-h4h8vv`,
                        "data-framer-name": `label`,
                        layoutDependency: z,
                        layoutId: `G19FVmU1r`,
                        children: d(j, {
                          __fromCanvasComponent: !0,
                          children: d(r, {
                            children: d(h.p, {
                              className: `framer-styles-preset-ke6suj`,
                              "data-styles-preset": `Bv6I6Qd8d`,
                              style: { "--framer-text-alignment": `center` },
                              children: `Button`,
                            }),
                          }),
                          className: `framer-dyr4eo`,
                          fonts: [`Inter`],
                          layoutDependency: z,
                          layoutId: `aMazJQRJ4`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: y,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...pe(
                            {
                              H6ztmrCS6: {
                                children: d(r, {
                                  children: d(h.h3, {
                                    className: `framer-styles-preset-ko1txu`,
                                    "data-styles-preset": `YSqkrWqww`,
                                    style: { "--framer-text-alignment": `center` },
                                    children: `Button`,
                                  }),
                                }),
                              },
                            },
                            E,
                            N
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
          `.framer-ykGMN.framer-xi89o0, .framer-ykGMN .framer-xi89o0 { display: block; }`,
          `.framer-ykGMN.framer-1m898ms { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: 48px; justify-content: center; padding: var(--10ocmuz); position: relative; text-decoration: none; width: min-content; }`,
          `.framer-ykGMN .framer-h4h8vv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 2px 0px 2px; position: relative; width: min-content; }`,
          `.framer-ykGMN .framer-dyr4eo { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-ykGMN.framer-v-1w5meqt.framer-1m898ms { height: min-content; padding: 30px 40px 30px 40px; }`,
          ...P,
          ...H,
          `.framer-ykGMN[data-border="true"]::after, .framer-ykGMN [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-ykGMN`
      )),
      (K.displayName = `Buttons`),
      (K.defaultProps = { height: 48, width: 94 }),
      S(K, {
        variant: {
          options: [`uGayw3Tld`, `H6ztmrCS6`],
          optionTitles: [`Gradient Button`, `Big Button`],
          title: `Variant`,
          type: O.Enum,
        },
        AKuoesW74: { defaultValue: 8, displayStepper: !0, title: `Radius`, type: O.Number },
        r7ASsAiJ9: { defaultValue: !0, title: `Button Label`, type: O.Boolean },
        OlthDMhqu: {
          defaultValue: `Button`,
          displayTextArea: !1,
          title: `Button Label`,
          type: O.String,
        },
        AYwwfkaKd: { title: `Link`, type: O.Link },
        FPjhikCji: { defaultValue: !1, title: `New Tab`, type: O.Boolean },
      }),
      M(
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
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...b(N),
          ...b(de),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  q,
  Oe,
  ke,
  Ae = e(() => {
    (w(),
      (q = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (Oe = {
        ...q,
        borderRadius: 6,
        background: `rgba(136, 85, 255, 0.3)`,
        color: `#85F`,
        border: `1px dashed #85F`,
        flexDirection: `column`,
      }),
      (ke = {
        onClick: { type: O.EventHandler },
        onMouseEnter: { type: O.EventHandler },
        onMouseLeave: { type: O.EventHandler },
      }),
      O.Number,
      O.Boolean,
      O.String,
      O.Enum);
  }),
  je = e(() => {
    (w(), n());
  }),
  Me = e(() => {
    n();
  }),
  Ne = e(() => {
    w();
  }),
  J = e(() => {
    w();
  }),
  Pe = e(() => {
    n();
  }),
  Fe = e(() => {
    w();
  }),
  Ie = e(() => {
    (t(), n());
  }),
  Le = e(() => {
    (n(), J());
  }),
  Re = e(() => {
    (n(), w(), J(), Me());
  }),
  ze = e(() => {
    (w(), n(), Ae());
  });
function Be() {
  return o(() => D.current() === D.canvas, []);
}
var Ve = e(() => {
    (n(), w());
  }),
  He = e(() => {
    n();
  });
function Ue(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: n,
    topLeftRadius: r,
    topRightRadius: i,
    bottomRightRadius: a,
    bottomLeftRadius: s,
  } = e;
  return o(() => (n ? `${r}px ${i}px ${a}px ${s}px` : `${t}px`), [t, n, r, i, a, s]);
}
function We(e) {
  let {
    padding: t,
    paddingPerSide: n,
    paddingTop: r,
    paddingRight: i,
    paddingBottom: a,
    paddingLeft: s,
  } = e;
  return o(() => (n ? `${r}px ${i}px ${a}px ${s}px` : t), [t, n, r, i, a, s]);
}
var Ge,
  Ke,
  qe = e(() => {
    (n(),
      w(),
      (Ge = {
        borderRadius: {
          title: `Radius`,
          type: O.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      (Ke = {
        padding: {
          type: O.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
          title: `Padding`,
        },
      }));
  }),
  Je = e(() => {
    (Ae(), je(), Me(), Ne(), J(), Pe(), Fe(), Ie(), Le(), Re(), ze(), Ve(), He(), qe());
  }),
  Ye = e(() => {
    Je();
  });
function Y({
  url: e,
  play: t,
  shouldMute: n,
  thumbnail: r,
  isRed: i,
  onClick: o,
  onMouseEnter: c,
  onMouseLeave: u,
  onMouseDown: f,
  onMouseUp: m,
  title: h,
  ...g
}) {
  let _ = Be(),
    v = t !== `Off`,
    y = _ || (r !== `Off` && !v),
    [b, x] = a(() => !0, !1),
    [S, C] = a(() => !0, !y),
    [w, T] = s(!1),
    E = Ue(g),
    D = E !== `0px 0px 0px 0px` && E !== `0px`;
  if (e === ``) return d(Qe, {});
  let O = Xe(e);
  if (O === void 0) return d($e, { message: `Invalid Youtube URL.` });
  let [k, A, j] = O,
    M = A.searchParams;
  if (j) for (let [e, t] of j) (M.set(e, t), e === `t` && M.set(`start`, t));
  (M.set(`iv_load_policy`, `3`),
    M.set(`rel`, `0`),
    M.set(`modestbranding`, `1`),
    M.set(`playsinline`, `1`),
    S ? (v || (y && S)) && M.set(`autoplay`, `1`) : M.set(`autoplay`, `0`),
    v && n && M.set(`mute`, `1`),
    t === `Loop` && (M.set(`loop`, `1`), M.set(`playlist`, k)),
    i || M.set(`color`, `white`));
  let N = {
    title: h || `Youtube Video`,
    allow: `presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture`,
    src: A.href,
    frameBorder: `0`,
    onClick: o,
    onMouseEnter: c,
    onMouseLeave: u,
    onMouseDown: f,
    onMouseUp: m,
  };
  return p(`article`, {
    onPointerEnter: () => T(!0),
    onPointerLeave: () => T(!1),
    onPointerOver: x,
    onKeyDown: C,
    onClick: C,
    style: {
      ...it,
      borderRadius: E,
      transform: D && (S || _) ? `translateZ(0.000001px)` : `unset`,
      cursor: `pointer`,
      overflow: `hidden`,
    },
    role: `presentation`,
    children: [
      b && d(`link`, { rel: `preconnect`, href: `https://www.youtube.com` }),
      b && d(`link`, { rel: `preconnect`, href: `https://www.google.com` }),
      y &&
        p(l, {
          children: [
            d(`link`, { rel: `preconnect`, href: `https://i.ytimg.com` }),
            d(`img`, { decoding: `async`, src: Ze(k, r), style: { ...Q, objectFit: `cover` } }),
          ],
        }),
      _
        ? null
        : d(`iframe`, {
            loading: S ? void 0 : `lazy`,
            style: S ? Q : { ...Q, display: `none` },
            ...N,
          }),
      S ? null : d(et, { onClick: C, isHovered: w, isRed: i }),
    ],
  });
}
function Xe(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return [e, X(e), null];
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
      return [e, X(e), n];
    }
    if (r === `embed`) return [e[1], t, n];
    if (r === `shorts` || r === `live`) {
      let t = e[1];
      return [t, X(t), n];
    }
  }
  if (t.hostname === `youtu.be`) {
    let e = t.pathname.slice(1);
    return [e, X(e), n];
  }
}
function X(e) {
  return new URL(`https://www.youtube.com/embed/${e}`);
}
function Ze(e, t) {
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
function Qe() {
  return d(`div`, {
    style: { ...Oe, overflow: `hidden` },
    children: d(`div`, {
      style: Z,
      children: `To embed a Youtube video, add the URL to the properties\xA0panel.`,
    }),
  });
}
function $e({ message: e }) {
  return d(`div`, {
    className: `framerInternalUI-errorPlaceholder`,
    style: { ...q, overflow: `hidden` },
    children: p(`div`, { style: Z, children: [`Error: `, e] }),
  });
}
function et({ onClick: e, isHovered: t, isRed: n }) {
  return d(`button`, {
    onClick: e,
    "aria-label": `Play`,
    style: rt,
    children: p(`svg`, {
      height: `100%`,
      version: `1.1`,
      viewBox: `0 0 68 48`,
      width: `100%`,
      children: [
        d(`path`, {
          d: `M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z`,
          fill: t ? (n ? `#f00` : `#000`) : `#212121`,
          fillOpacity: t && n ? 1 : 0.8,
          style: {
            transition: `fill .1s cubic-bezier(0.4, 0, 1, 1), fill-opacity .1s cubic-bezier(0.4, 0, 1, 1)`,
          },
        }),
        d(`path`, { d: `M 45,24 27,14 27,34`, fill: `#fff` }),
      ],
    }),
  });
}
var tt,
  nt,
  rt,
  it,
  Z,
  Q,
  at = e(() => {
    (f(),
      n(),
      w(),
      Ye(),
      (function (e) {
        ((e.Normal = `Off`), (e.Auto = `On`), (e.Loop = `Loop`));
      })((tt ||= {})),
      (function (e) {
        ((e.High = `High Quality`),
          (e.Medium = `Medium Quality`),
          (e.Low = `Low Quality`),
          (e.Off = `Off`));
      })((nt ||= {})),
      (Y.displayName = `YouTube`),
      S(Y, {
        url: { type: O.String, title: `Video` },
        play: { type: O.Enum, title: `Autoplay`, options: Object.values(tt) },
        shouldMute: {
          title: `Mute`,
          type: O.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hidden(e) {
            return e.play === `Off`;
          },
        },
        thumbnail: {
          title: `Thumbnail`,
          description: `Showing a thumbnail improves performance.`,
          type: O.Enum,
          options: Object.values(nt),
          hidden(e) {
            return e.play !== `Off`;
          },
        },
        isRed: { title: `Color`, type: O.Boolean, enabledTitle: `Red`, disabledTitle: `White` },
        ...Ge,
        ...ke,
      }),
      (Y.defaultProps = {
        url: `https://youtu.be/8AHPXm9Y6mI`,
        play: `Off`,
        shouldMute: !0,
        thumbnail: `Medium Quality`,
        isRed: !0,
      }),
      (rt = {
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
      (it = { position: `relative`, width: `100%`, height: `100%` }),
      (Z = { textAlign: `center`, minWidth: 140 }),
      (Q = { position: `absolute`, top: 0, left: 0, height: `100%`, width: `100%` }));
  }),
  ot,
  st,
  ct,
  lt = e(() => {
    (w(),
      y.loadFonts([`GF;Inter-600`, `Inter-Black`, `Inter-BlackItalic`, `Inter-BoldItalic`]),
      (ot = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter`,
              openType: !0,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/inter/v19/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZ1rib2Bg-4.woff2`,
              weight: `600`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/X5hj6qzcHUYv7h1390c8Rhm6550.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/cugnVhSraaRyANCaUtI5FV17wk.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/5HcVoGak8k5agFJSaKa4floXVu0.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/jn4BtSPLlS0NDp1KiFAtFKiiY0o.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/P2Bw01CtL0b9wqygO0sSVogWbo.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/3ZmXbBKToJifDV9gwcifVd1tEY.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/g0c8vEViiXNlKAgI4Ymmk3Ig.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2`,
              weight: `900`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (st = [
        `.framer-7wku3 .framer-styles-preset-93ypku:not(.rich-text-wrapper), .framer-7wku3 .framer-styles-preset-93ypku.rich-text-wrapper h1 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 64px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-52da8dbb-cd94-4ec6-8ec8-f864d65f3fe3, #fafafa); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-7wku3 .framer-styles-preset-93ypku:not(.rich-text-wrapper), .framer-7wku3 .framer-styles-preset-93ypku.rich-text-wrapper h1 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 51px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-52da8dbb-cd94-4ec6-8ec8-f864d65f3fe3, #fafafa); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-7wku3 .framer-styles-preset-93ypku:not(.rich-text-wrapper), .framer-7wku3 .framer-styles-preset-93ypku.rich-text-wrapper h1 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-52da8dbb-cd94-4ec6-8ec8-f864d65f3fe3, #fafafa); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; --framer-text-wrap: balance; } }`,
      ]),
      (ct = `framer-7wku3`));
  });
function $(e, t) {
  return {
    description: `Flamer is a sleek, high-converting SaaS landing page template designed for AI-powered startups. With modern design, intuitive layout, and all essential sections, it helps you showcase your product, engage users, and drive conversions effortlessly.`,
    favicon: `https://framerusercontent.com/assets/lbsCM2zkqw7fkfm7k2tIMYBfIWE.png`,
    robots: `max-image-preview:large`,
    socialImage: `https://framerusercontent.com/assets/Z3mNskx1Fxte8WGpIKp7ecpH7JI.png`,
    title: `Flamer – The Ultimate AI SaaS Landing Page Template`,
  };
}
var ut = e(() => {});
function dt(e, t) {
  return {
    breakpoints: [
      { hash: `72rtr7`, mediaQuery: `(min-width: 1200px)` },
      { hash: `1npr79d`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `1bp0152`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: $(e, t).description,
    elements: {
      adTRrxLJn: `showcase`,
      IknGWjLgy: `benefits`,
      iYUNHqCEb: `hero`,
      lCq8UO0dC: `image-gen`,
      N2ijbw0rP: `features`,
      sgmlFhWUG: `product`,
      U6VhzUg6a: `richtext`,
    },
    robots: `max-image-preview:large`,
    serializationId: `framer-Kmxxa`,
    title: $(e, t).title || `Home`,
    viewport: `width=device-width`,
  };
}
var ft,
  pt,
  mt = e(() => {
    (ut(),
      (ft = 1),
      (pt = {
        exports: {
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
function ht(e, t) {
  return {
    breakpoints: [
      { hash: `djrgrx`, mediaQuery: `(min-width: 1200px)` },
      { hash: `1yvhpvj`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `6560ev`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: $(e, t).description,
    elements: {},
    framerSearch: { index: !1 },
    robots: `noindex`,
    serializationId: `framer-YiXIe`,
    title: $(e, t).title || `404`,
    viewport: `width=device-width`,
  };
}
var gt,
  _t,
  vt = e(() => {
    (ut(),
      (gt = 1),
      (_t = {
        exports: {
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export {
  F as C,
  I as E,
  ue as S,
  N as T,
  Ke as _,
  pt as a,
  De as b,
  ft as c,
  ot as d,
  lt as f,
  qe as g,
  Ye as h,
  gt as i,
  ct as l,
  at as m,
  vt as n,
  mt as o,
  Y as p,
  ht as r,
  dt as s,
  _t as t,
  st as u,
  We as v,
  P as w,
  V as x,
  K as y,
};
//# sourceMappingURL=shared-lib.npqqgdYF.mjs.map
