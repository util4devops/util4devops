import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  C as r,
  D as i,
  E as a,
  F as o,
  H as s,
  I as c,
  L as l,
  M as u,
  N as d,
  P as f,
  R as p,
  S as m,
  T as h,
  V as g,
  _,
  a as v,
  b as y,
  c as b,
  d as x,
  f as S,
  g as C,
  h as w,
  i as T,
  j as E,
  l as D,
  o as O,
  p as k,
  s as ee,
  u as te,
  v as A,
  w as ne,
  y as re,
  z as j,
} from "./react.C8gjTMAM.mjs";
import {
  $ as M,
  A as ie,
  B as ae,
  C as N,
  D as oe,
  E as se,
  F as ce,
  G as le,
  H as ue,
  I as de,
  J as fe,
  K as P,
  L as pe,
  M as me,
  O as he,
  P as ge,
  Q as F,
  S as _e,
  T as I,
  U as ve,
  V as ye,
  W as be,
  X as L,
  Y as xe,
  Z as Se,
  _ as Ce,
  a as we,
  b as Te,
  c as Ee,
  d as De,
  et as Oe,
  f as ke,
  g as Ae,
  h as je,
  i as Me,
  j as Ne,
  k as Pe,
  l as Fe,
  m as Ie,
  n as Le,
  nt as Re,
  o as ze,
  p as Be,
  q as Ve,
  r as He,
  s as Ue,
  tt as We,
  u as Ge,
  v as Ke,
  w as qe,
  x as Je,
  y as Ye,
  z as Xe,
} from "./motion.CzGBN5me.mjs";
function Ze(e) {
  return typeof e == `function`;
}
function Qe(e) {
  return typeof e == `boolean`;
}
function R(e) {
  return typeof e == `string`;
}
function z(e) {
  return Number.isFinite(e);
}
function $e(e) {
  return Array.isArray(e);
}
function B(e) {
  return typeof e == `object` && !!e && !$e(e);
}
function et(e) {
  for (let t in e) return !1;
  return !0;
}
function tt(e) {
  return e === void 0;
}
function nt(e) {
  return e === null;
}
function rt(e) {
  return e == null;
}
function it(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function at(e) {
  return B(e) && Ze(e.return);
}
function ot(e) {
  return B(e) && Ze(e.then);
}
function st(e) {
  return e instanceof Promise;
}
function ct(e) {
  return `url('${lt(e)}')`;
}
function lt(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function ut(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${
    e
      ? `${e}
`
      : ``
  }In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
    n
      ? `:
${n}`
      : `.`
  }`;
}
function dt(e, t, n) {
  if (ug.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (ug.set(e, t), t))
    .catch((t) => {
      throw (ug.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(ng), ug.set(e, r));
}
function ft(e, t) {
  rg && (dg.set(e, t), fg.has(e) && dt(e, t, `registered loader ${e}`));
}
function pt() {
  if (!rg) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(pg),
      i = r ? e.slice(pg.length) : e;
    if (!i) continue;
    fg.add(i);
    let a = dg.get(i);
    a ? dt(i, a, `registered loader ${i}`) : r && dt(i, () => import(n), n);
  }
}
function mt(e) {
  return typeof e == `object` && !!e && !k(e) && hg in e;
}
function ht(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function gt(e, t = `default`, n) {
  n && ft(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !ug.has(n)) return;
      let e = ug.get(n);
      st(e) ? s(() => e) : (i = ht(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = ht(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    l = !1,
    u = A(function (t, r) {
      if (
        (c(() => {
          l = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && mg !== void 0 && mg.add(n), !i)) throw s(e);
      return D(i, { ref: r, ...t });
    });
  return (
    (u.preload = () => (o(), s(e))),
    (u.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: l })),
    u
  );
}
function _t(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function vt(e) {
  return e === null || !(_g in e) ? !1 : typeof e.equals == `function`;
}
function yt(e, t) {
  return e === t || (e !== e && t !== t);
}
function bt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!yt(e[r], t[r])) return !1;
  return !0;
}
function xt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!Dt(e[r], t[r], !0)) return !1;
  return !0;
}
function St(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!yt(r, t.get(n))) return !1;
  return !0;
}
function Ct(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Dt(r, t.get(n), !0)) return !1;
  return !0;
}
function wt(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function Tt(e, t) {
  let n = gg(e);
  if (n.length !== gg(t).length) return !1;
  for (let r of n)
    if (!_t(t, r) || (!(r === `_owner` && _t(e, `$$typeof`) && e.$$typeof) && !yt(e[r], t[r])))
      return !1;
  return !0;
}
function Et(e, t) {
  let n = gg(e);
  if (n.length !== gg(t).length) return !1;
  for (let r of n)
    if (!_t(t, r) || (!(r === `_owner` && _t(e, `$$typeof`) && e.$$typeof) && !Dt(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Dt(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? xt(e, t) : bt(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? Ct(e, t) : St(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return wt(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? vt(e) && vt(t)
        ? e.equals(t)
        : n
          ? Et(e, t)
          : Tt(e, t)
      : !1;
}
function Ot(e, t, n = !0) {
  try {
    return Dt(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function kt(e) {
  return r.useCallback((t) => e[t], [e]);
}
function At({ api: e, children: t }) {
  return D(vg.Provider, { value: e, children: t });
}
function jt() {
  return r.useContext(vg);
}
function Mt({ routes: e, children: t }) {
  let n = kt(e),
    r = f(() => ({ getRoute: n }), [n]);
  return D(vg.Provider, { value: r, children: t });
}
function Nt() {
  let e = jt(),
    t = d(yg),
    n = t?.routeId ?? e.currentRouteId,
    r = t?.routeId ? t.pathVariables : e.currentPathVariables,
    i = n ? e.getRoute?.(n) : void 0;
  return f(() => {
    if (!(!n || !i)) return { ...i, id: n, pathVariables: r };
  }, [n, r, i]);
}
function Pt() {
  let e = Nt();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Ft(e) {
  let t = Nt(),
    n = r.useRef(t);
  Ot(n.current, t) || !t || ((n.current = t), e(t));
}
function It(e) {
  let t = jt();
  if (e) return t.getRoute?.(e);
}
function Lt(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Rt(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function zt(e, t) {
  let n = Nt(),
    i = It(t) ?? n;
  return r.useMemo(() => (i ? Lt(i, e) : e), [e, i]);
}
function V(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function H(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t)
      );
}
function Bt(e) {
  return e === null || (typeof e != `object` && typeof e != `function`);
}
function Vt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === Pg
  );
}
function Ht(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Ut(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function Wt(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Ut(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Gt(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function Kt(e) {
  return Fg.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function qt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > Mg);
}
function Jt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > jg);
}
function Yt(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return qt(+e);
}
function Xt(e) {
  let t = Object.keys(e);
  for (var n = t.length - 1; n >= 0 && !Yt(t[n]); n--);
  return ((t.length = n + 1), t);
}
function Zt(e) {
  return new Uint8Array(e).toBase64();
}
function Qt(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function $t(e) {
  return Buffer.from(e).toString(`base64`);
}
function en(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function tn(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function nn(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function rn(e, t) {
  return an(JSON.parse(e), t);
}
function an(e, t) {
  if (typeof e == `number`) return a(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let n = e,
    r = Array(n.length),
    i = null;
  function a(e, o = !1) {
    if (e === wg) return;
    if (e === Eg) return NaN;
    if (e === Dg) return 1 / 0;
    if (e === Og) return -1 / 0;
    if (e === kg) return -0;
    if (o || typeof e != `number`) throw Error(`Invalid input`);
    if (e in r) return r[e];
    let s = n[e];
    if (!s || typeof s != `object`) r[e] = s;
    else if (Array.isArray(s))
      if (typeof s[0] == `string`) {
        let o = s[0],
          c = t && Object.hasOwn(t, o) ? t[o] : void 0;
        if (c) {
          let t = s[1];
          if ((typeof t != `number` && (t = n.push(s[1]) - 1), (i ??= new Set()), i.has(t)))
            throw Error(`Invalid circular reference`);
          return (i.add(t), (r[e] = c(a(t))), i.delete(t), r[e]);
        }
        switch (o) {
          case `Date`:
            r[e] = new Date(s[1]);
            break;
          case `Set`:
            let t = new Set();
            r[e] = t;
            for (let e = 1; e < s.length; e += 1) t.add(a(s[e]));
            break;
          case `Map`:
            let i = new Map();
            r[e] = i;
            for (let e = 1; e < s.length; e += 2) i.set(a(s[e]), a(s[e + 1]));
            break;
          case `RegExp`:
            r[e] = new RegExp(s[1], s[2]);
            break;
          case `Object`: {
            let t = s[1];
            if (typeof n[t] == `object` && n[t][0] !== `BigInt`) throw Error(`Invalid input`);
            r[e] = Object(a(t));
            break;
          }
          case `BigInt`:
            r[e] = BigInt(s[1]);
            break;
          case `null`:
            let c = Object.create(null);
            r[e] = c;
            for (let e = 1; e < s.length; e += 2) {
              if (s[e] === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              c[s[e]] = a(s[e + 1]);
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (n[s[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = globalThis[o],
              i = a(s[1]);
            r[e] = s[2] === void 0 ? new t(i) : new t(i, s[2], s[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = s[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            let n = zg(t);
            r[e] = n;
            break;
          }
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`: {
            let t = o.slice(9);
            r[e] = Temporal[t].from(s[1]);
            break;
          }
          case `URL`: {
            let t = new URL(s[1]);
            r[e] = t;
            break;
          }
          case `URLSearchParams`: {
            let t = new URLSearchParams(s[1]);
            r[e] = t;
            break;
          }
          default:
            throw Error(`Unknown type ${o}`);
        }
      } else if (s[0] === Ag) {
        let t = s[1];
        if (!Jt(t)) throw Error(`Invalid input`);
        let n = [];
        ((r[e] = n), (n[Mg] = void 0), delete n[Mg]);
        for (let e = 2; e < s.length; e += 2) {
          let r = s[e];
          if (!qt(r) || r >= t) throw Error(`Invalid input`);
          n[r] = a(s[e + 1]);
        }
        n.length = t;
      } else {
        let t = Array(s.length);
        r[e] = t;
        for (let e = 0; e < s.length; e += 1) {
          let n = s[e];
          n !== Tg && (t[e] = a(n));
        }
      }
    else {
      let t = {};
      r[e] = t;
      for (let e of Object.keys(s)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        let n = s[e];
        t[e] = a(n);
      }
    }
    return r[e];
  }
  return a(0);
}
function on(e, t) {
  let n = sn(!1, e, t);
  return typeof n == `string` ? n : `[${n.join(`,`)}]`;
}
function sn(e, t, n) {
  let r = [],
    i = new Map(),
    a = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) a.push({ key: e, fn: n[e] });
  let o = [],
    s = 0;
  function c(n, l) {
    if (n === void 0) return wg;
    if (Number.isNaN(n)) return Eg;
    if (n === 1 / 0) return Dg;
    if (n === -1 / 0) return Og;
    if (n === 0 && 1 / n < 0) return kg;
    if (i.has(n)) return i.get(n);
    ((l ??= s++), i.set(n, l));
    for (let { key: e, fn: t } of a) {
      let i = t(n);
      if (i) return ((r[l] = `["${e}",${c(i)}]`), l);
    }
    if (typeof n == `function`) throw new Ng(`Cannot stringify a function`, o, n, t);
    if (typeof n == `symbol`) throw new Ng(`Cannot stringify a Symbol primitive`, o, n, t);
    let u = ``;
    if (Bt(n)) u = cn(n);
    else if (typeof n.then == `function`) {
      if (!e)
        throw new Ng(
          `Cannot stringify a Promise or thenable — use stringifyAsync instead`,
          o,
          n,
          t
        );
      u = Promise.resolve(n).then((e) => {
        let t = c(e, l);
        t < 0 && (r[l] = t);
      });
    } else {
      let e = Ht(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          u = `["Object",${c(n.valueOf())}]`;
          break;
        case `Date`:
          u = `["Date","${isNaN(n.getDate()) ? `` : n.toISOString()}"]`;
          break;
        case `URL`:
          u = `["URL",${Wt(n.toString())}]`;
          break;
        case `URLSearchParams`:
          u = `["URLSearchParams",${Wt(n.toString())}]`;
          break;
        case `RegExp`:
          let { source: r, flags: i } = n;
          u = i ? `["RegExp",${Wt(r)},"${i}"]` : `["RegExp",${Wt(r)}]`;
          break;
        case `Array`: {
          let e = !1;
          u = `[`;
          for (let t = 0; t < n.length; t += 1)
            if ((t > 0 && (u += `,`), Object.hasOwn(n, t)))
              (o.push(`[${t}]`), (u += c(n[t])), o.pop());
            else if (e) u += Tg;
            else {
              let t = Xt(n),
                r = t.length,
                i = String(n.length).length;
              if ((n.length - r) * 3 > 4 + i + r * (i + 1)) {
                u = `[` + Ag + `,` + n.length;
                for (let e = 0; e < t.length; e++) {
                  let r = t[e];
                  (o.push(`[${r}]`), (u += `,` + r + `,` + c(n[r])), o.pop());
                }
                break;
              } else ((e = !0), (u += Tg));
            }
          u += `]`;
          break;
        }
        case `Set`:
          u = `["Set"`;
          for (let e of n) u += `,${c(e)}`;
          u += `]`;
          break;
        case `Map`:
          u = `["Map"`;
          for (let [e, t] of n)
            (o.push(`.get(${Bt(e) ? cn(e) : `...`})`), (u += `,${c(e)},${c(t)}`), o.pop());
          u += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Float16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`:
        case `DataView`: {
          let t = n;
          ((u = `["` + e + `",` + c(t.buffer)),
            t.byteLength !== t.buffer.byteLength && (u += `,${t.byteOffset},${t.length}`),
            (u += `]`));
          break;
        }
        case `ArrayBuffer`:
          u = `["ArrayBuffer","${Rg(n)}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          u = `["${e}",${Wt(n.toString())}]`;
          break;
        default:
          if (!Vt(n)) throw new Ng(`Cannot stringify arbitrary non-POJOs`, o, n, t);
          if (Gt(n).length > 0) throw new Ng(`Cannot stringify POJOs with symbolic keys`, o, n, t);
          if (Object.getPrototypeOf(n) === null) {
            u = `["null"`;
            for (let e of Object.keys(n)) {
              if (e === `__proto__`)
                throw new Ng(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (o.push(Kt(e)), (u += `,${Wt(e)},${c(n[e])}`), o.pop());
            }
            u += `]`;
          } else {
            u = `{`;
            let e = !1;
            for (let r of Object.keys(n)) {
              if (r === `__proto__`)
                throw new Ng(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (e && (u += `,`), (e = !0), o.push(Kt(r)), (u += `${Wt(r)}:${c(n[r])}`), o.pop());
            }
            u += `}`;
          }
      }
    }
    return ((r[l] = u), l);
  }
  let l = c(t);
  return l < 0 ? `${l}` : r;
}
function cn(e) {
  let t = typeof e;
  return t === `string`
    ? Wt(e)
    : e === void 0
      ? wg.toString()
      : e === 0 && 1 / e < 0
        ? kg.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function ln(e, t, n = `lazy`) {
  switch ((q.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function un(e) {
  return R(e) && (e === `` || Vg.test(e));
}
function dn() {
  return { [Hg.QueryCache]: new Map(), [Hg.CollectionUtilsCache]: new Map() };
}
function fn() {
  if (!rg) return;
  if (Ug !== void 0) return Ug;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      Ug = rn(e.text) ?? dn();
    } catch (e) {
      ((Ug = dn()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      og(() => {
        (e?.remove(), (e = null));
      }),
      Ug
    );
  }
}
function pn(e, t) {
  let n = fn();
  return n ? n[e].has(t) : !1;
}
function mn(e, t) {
  let n = fn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function hn(e) {
  return e?.id ?? xg;
}
function gn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function _n(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (qg.has(n)) return qg.get(n);
    let r = new Yg(n, t);
    return (qg.set(n, r), r);
  };
}
function vn({ children: e, collectionUtils: t }) {
  let n = f(() => ({ get: _n(t) }), [t]);
  return D(Jg.Provider, { value: n, children: e });
}
function yn() {
  return d(Jg);
}
function bn() {
  for (let e of Qg) e();
  Qg.clear();
}
function xn(e) {
  return new Promise((t) => {
    if ((Qg.add(t), document.hidden)) {
      bn();
      return;
    }
    (document.addEventListener(`visibilitychange`, bn),
      document.addEventListener(`pagehide`, bn),
      je.read(() => {
        Cn(e).then(() => {
          (Qg.delete(t), !e?.signal?.aborted && t());
        });
      }));
  });
}
function Sn(e) {
  return new Promise((t) => {
    (setTimeout(t, 100),
      je.read(
        () => {
          Cn(e).then(t);
        },
        !1,
        !0
      ));
  });
}
function Cn(e) {
  let t = e?.priority,
    n = q.scheduler;
  return t === `background`
    ? wn(1)
    : Xg && n
      ? n.yield(e).catch(ng)
      : Zg && n
        ? n.postTask(() => {}, e).catch(ng)
        : t === `user-blocking`
          ? Promise.resolve()
          : wn(0);
}
function wn(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Tn(e) {
  let { continueAfter: t, ensureContinueBeforeUnload: n, ...r } = e ?? {};
  return n ? xn(r) : t === `paint` ? Sn(r) : Cn(r);
}
function En() {
  let e = yn(),
    { getRoute: t } = jt();
  return o(
    (n, r, i = !0, a = !0) => {
      if (!n || !t) return;
      let o = t(n),
        { pathVariables: s, locale: c } = r;
      return On(o, { routeId: n, pathVariables: s, locale: c, collectionUtils: e }, i, a);
    },
    [t, e]
  );
}
function Dn(e, t = !0) {
  let n = En();
  c(() => {
    if (!(!t || !$g)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function On(e, t, n = !0, r = !0) {
  if (!$g || !e) return;
  let i = e.page;
  if (!(!i || !mt(i))) {
    n && (await Tn());
    try {
      let e = await i.preload();
      r && t && e && (await kn(e, t));
    } catch {}
  }
}
async function kn(e, t) {
  let n = e.loader;
  if (!n?.load) return;
  let r = {
    signal: t.signal ?? new AbortController().signal,
    pathVariables: t.pathVariables ?? {},
    routeId: t.routeId,
    locale: t.locale,
    collectionUtils: t.collectionUtils,
  };
  try {
    await n.load({}, r);
  } catch {}
}
function An() {
  return g === void 0 ? void 0 : g;
}
function jn() {
  let e = An();
  return e ? e_.test(e.platform) : !1;
}
function Mn() {
  let e = An();
  return e
    ? t_.test(e.platform)
      ? !0
      : n_.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function Nn() {
  return jn() || Mn();
}
function Pn() {
  let e = An();
  return e ? r_.test(e.userAgent) : !1;
}
function Fn() {
  let e = An();
  return e ? i_.test(e.userAgent) && a_.test(e.vendor) && !Pn() : !1;
}
function In() {
  let e = An();
  return e ? o_.test(e.userAgent) && s_.test(e.vendor) : !1;
}
function Ln() {
  let e = An();
  return e ? c_.test(e.userAgent) : !1;
}
function Rn() {
  return typeof document == `object`;
}
function zn() {
  let e = An();
  return e ? l_.test(e.userAgent) : !1;
}
function Bn() {
  return !1;
}
function Vn() {
  let e = An();
  return e && u_.test(e.userAgent) ? `tablet` : e && d_.test(e.userAgent) ? `phone` : `desktop`;
}
function Hn() {
  return Vn() === `desktop`;
}
function Un(e) {
  return Nn() ? e.metaKey : e.ctrlKey;
}
function Wn(e, t) {
  return e.replace(h_, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function Gn(e, t = !1) {
  let n = ``;
  if (s !== void 0)
    if (t) n = s.location.search;
    else {
      let e = s.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? s.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? Kn(n, e) : e;
}
function Kn(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== g_ && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function qn(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(h_)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !R(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = st(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = st(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = st(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    !t ||
      !n ||
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
async function Jn({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await qn(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (t.slug && (u.path = `/` + t.slug + u.path), o && u.path && (u.path = Gn(u.path, !0)), u);
}
function Yn(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = Xn(e),
    [r, i] = Xn(t),
    a = Zn(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function Xn(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function Zn(e, t) {
  if (e === t || ((e = `/` + Qn(e)), (t = `/` + Qn(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = y_(e, 1 + s);
    if (n !== y_(t, 1 + s)) break;
    n === v_ && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (y_(t, 1 + s) === v_) return x_(t, 1 + s + 1);
      if (s === 0) return x_(t, 1 + s);
    } else r > a && (y_(e, 1 + s) === v_ ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || y_(e, s) === v_) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${x_(t, 1 + o)}`;
}
function Qn(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = y_(e, o);
    else if (w_(a)) break;
    else a = v_;
    if (w_(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || y_(t, t.length - 1) !== __ || y_(t, t.length - 2) !== __) {
            if (t.length > 2) {
              let e = b_(t, C_);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = x_(t, 0, e)), (n = t.length - 1 - b_(t, C_))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          S_ && ((t += t.length > 0 ? `${C_}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${C_}${x_(e, r + 1, o)}`) : (t = x_(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === __ && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function $n(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || s.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function er(e, t, n) {
  let r = Lt(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(h_, (e, t) => i[t] ?? e);
}
function tr(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: c = !0,
    preserveQueryParams: l,
    onlyHash: u = !1,
    siteCanonicalURL: d,
    localeId: f,
  }
) {
  let p = er(i, e, o);
  if (u) return p ?? ``;
  let m = t ?? `/`;
  (n && f && (m = n[f] ?? m), r && (m = m.replace(h_, (e, t) => String(r[t] || e))));
  let h = (f ? e?.pathLocalized?.[f] : void 0) ?? e?.path ?? `/`;
  a && (h = h.replace(h_, (e, t) => String(a[t] || e)));
  let g = !!(m === h && p),
    _ = !g && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && m !== h;
  if (c)
    if (T_.has(m) && s !== void 0) {
      let e = $n(d);
      h = Yn(s.location.pathname, e + h);
    } else h = Yn(m, h);
  let v = g || _;
  return ((l || v) && (h = Gn(h, v)), p && (h = `${h}#${p}`), h);
}
function nr() {
  if (E_) return;
  E_ = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (s.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((s.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), ln(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function rr({ children: e, value: t }) {
  return D(D_.Provider, { value: t, children: e });
}
function ir() {
  return r.useContext(D_);
}
function ar(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function or(e) {
  let t = O_,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < k_; ) ((n = e.next(t)), r.push(n.value), (t += O_));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - O_ }
  );
}
function sr(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function cr(e) {
  let { innerWidth: t, innerHeight: n } = s,
    [r, i] = sr(e.x),
    [a, o] = sr(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function lr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function ur(e) {
  return e ? j_[e] : void 0;
}
function dr(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (fr(t)) {
    let { easing: e, duration: n } = or(
      oe({ keyframes: [0, 1], ...pr(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = ur(n?.mask?.type),
    o = lr(n, `start`, e, a),
    s = lr({ ...M_, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function fr(e) {
  return e.type === `spring`;
}
function pr(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function mr({ exit: e = P_, enter: t }) {
  let n = document.createElement(`style`);
  n.id = N_;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += dr(`exit`, e)),
    (r += dr(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function hr() {
  og(() => {
    je.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(N_);
      e && document.head.removeChild(e);
    });
  });
}
function gr() {
  return !!document.startViewTransition;
}
function _r(e) {
  return new Promise((t) => {
    je.render(() => {
      (performance.mark(`framer-vt-style`), mr(e), t());
    });
  });
}
async function vr(e, t, n) {
  if (!gr()) {
    e();
    return;
  }
  if ((await _r(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(F_),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), hr());
      })
      .catch(F_),
    r
  );
}
function yr() {
  let e = ir(),
    t = E(void 0);
  return (
    c(() => {
      t.current &&= (t.current(), void 0);
    }),
    o(
      (n, r, i, a) => {
        let o = ar(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return vr(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function br(e, t) {
  og(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function xr(e, t, n, r = ne) {
  r(() => {
    let t = async (e) => (await Tn({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function Sr(e) {
  let t = E(void 0);
  return (
    xr(
      () => {
        t.current &&= (t.current(), void 0);
      },
      void 0,
      { priority: `user-blocking` }
    ),
    o(
      (n) => {
        let r = new Promise((e) => {
          t.current = e;
        });
        if (!e) return { promise: r, measureDetail: n, ignore: null };
        let i = `${e}-start`,
          a = `${e}-end`,
          o = !1;
        return (
          performance.mark(i),
          r
            .finally(() => {
              o || (performance.mark(a), performance.measure(e, { start: i, end: a, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: r,
            measureDetail: n,
            ignore: () => {
              ((o = !0), t.current?.(), (t.current = void 0));
            },
          }
        );
      },
      [e]
    )
  );
}
function Cr(
  e,
  t,
  {
    currentRoutePath: n,
    currentRoutePathLocalized: r,
    currentPathVariables: i,
    hash: a,
    pathVariables: o,
    localeId: c,
    preserveQueryParams: l,
    siteCanonicalURL: u,
  }
) {
  let { path: d } = t;
  if (!d) return;
  let f = tr(t, {
      currentRoutePath: n,
      currentRoutePathLocalized: r,
      currentPathVariables: i,
      hash: a,
      pathVariables: o,
      preserveQueryParams: l,
      siteCanonicalURL: u,
      localeId: c,
    }),
    p = n !== void 0 && n === d,
    m = wr(s.history.state) ? s.history.state : void 0,
    h = p ? m?.queryParamBackAnchorSearch : void 0;
  try {
    Er({ routeId: e, hash: a, pathVariables: o, localeId: c, queryParamBackAnchorSearch: h }, f);
  } catch {}
}
function wr(e) {
  return B(e) && R(e.routeId);
}
function Tr(e, t, n = !1) {
  (performance.mark(`framer-history-replace`),
    t && br(t, s.location.href),
    p_().privateRouterReplaceState
      ? (!t || t === s.location.href
          ? s.History.prototype.replaceState.bind(s.history)
          : s.history.replaceState.bind(s.history))(e, ``, t)
      : (n ? s.history.__proto__.replaceState : s.history.replaceState).call(s.history, e, ``, t));
}
function Er(e, t) {
  (performance.mark(`framer-history-push`),
    br(t, s.location.href),
    nr(),
    s.history.pushState(e, ``, t));
}
function Dr({ disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: r }) {
  ne(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let i = B(s.history.state) ? s.history.state : {},
      a = s.location.hash ? s.location.hash.slice(1) : void 0;
    Tr({ ...i, routeId: t, hash: a, pathVariables: n, localeId: r }, void 0, !0);
  }, []);
}
function Or(e, t) {
  let n = yr(),
    r = Sr(`framer-route-change`),
    i = E(void 0),
    a = o(
      async ({ state: a }) => {
        if (!B(a)) return;
        let { routeId: o, hash: c, pathVariables: l, localeId: u } = a;
        if (!R(o)) return;
        let d = r({ popstate: !0 }),
          f = Rt();
        d.promise.finally(f);
        let p = await n(e.current, o, () => {
            t(
              o,
              R(u) ? u : void 0,
              R(c) ? c : void 0,
              s.location.pathname + s.location.search + s.location.hash,
              B(l) ? l : void 0,
              !0,
              d,
              !1
            );
          }),
          m = R_ ? s.navigation?.transition : void 0;
        (await (p?.updateCallbackDone ?? Promise.resolve())
          .then(i.current?.resolve)
          .catch(i.current?.reject),
          await d.promise);
        try {
          await m?.finished;
        } catch (e) {
          console.warn(`Popstate transition failed`, e);
        }
        (L_(), br(s.location.href));
      },
      [e, r, t, n]
    ),
    l = o((e) => {
      e.navigationType !== `traverse` ||
        !e.canIntercept ||
        e.intercept({
          async handler() {
            (await new Promise((e, t) => {
              i.current = { resolve: e, reject: t };
            }),
              (i.current = void 0));
          },
          scroll: `after-transition`,
        });
    }, []);
  c(
    () => (
      s.addEventListener(`popstate`, a),
      R_ && s.navigation.addEventListener(`navigate`, l),
      () => {
        (s.removeEventListener(`popstate`, a),
          R_ && s.navigation.removeEventListener(`navigate`, l));
      }
    ),
    [a, l]
  );
}
async function kr(e, t, n) {
  if (!e.path || !t) return !1;
  let r = `${n.slug ? `/${n.slug}` : ``}${Wn(e.path, t)}`;
  return (await fetch(r, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((s.location.href = s.location.origin + r), !0)
    : !1;
}
function Ar() {
  let e = yn();
  return o((t) => jr({ ...t, collectionUtils: e }), [e]);
}
async function jr(e) {
  let t = await Jn(e);
  if (t) {
    try {
      localStorage.preferredLocale = e.nextLocale.code;
    } catch {}
    try {
      if (!R(t.path)) throw Error(`Expected result.path to be a string`);
      if (t.isMissingInLocale && (await kr(e.route, t.pathVariables, e.nextLocale))) return;
    } catch {}
    return t;
  }
}
function Mr() {
  let e = E(Promise.resolve()),
    t = E(),
    n = o((n) => {
      if (n.navigationType === `traverse` || !n.canIntercept) return;
      let r = t.current;
      (r?.signal.addEventListener(`abort`, () => {
        r.abort(`user aborted`);
      }),
        n.intercept({ handler: () => e.current }));
    }, []);
  return o(
    (r, i, a) => {
      if (!R_) {
        i();
        return;
      }
      ((e.current = r),
        (t.current = a),
        s.navigation.addEventListener(`navigate`, n),
        i(),
        r.finally(() => {
          s.navigation.removeEventListener(`navigate`, n);
        }));
    },
    [n]
  );
}
function Nr(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`; ) t++;
  for (; n > t && e[n - 1] === `-`; ) n--;
  return e.slice(t, n);
}
function Pr(e) {
  return Nr(e.trim().toLowerCase().replace(z_, `-`));
}
function Fr({ children: e, value: t }) {
  return D(V_.Provider, { value: t, children: e });
}
function Ir() {
  return d(V_);
}
function Lr(e, t) {
  let n = p(() => ({ inputs: t, result: e() }))[0],
    r = E(!0),
    i = E(n),
    a =
      r.current || (t && i.current.inputs && Ot(t, i.current.inputs, !1))
        ? i.current
        : { inputs: t, result: e() };
  return (
    c(() => {
      ((r.current = !1), (i.current = a));
    }, [a]),
    a.result
  );
}
function Rr(e, t) {
  return Lr(() => e, t);
}
function zr() {
  return r.useContext(W_);
}
function Br() {
  return s.location.search;
}
function Vr() {
  return ``;
}
function Hr(e) {
  return (
    K_.add(e),
    s.addEventListener(`popstate`, e),
    () => {
      (K_.delete(e), s.removeEventListener(`popstate`, e));
    }
  );
}
function Ur() {
  for (let e of K_) e();
}
function Wr({ children: e }) {
  let n = Ir() === `preview`,
    [r, i] = p(``),
    a = t(m(Hr, Br, Vr));
  jt();
  let c = n ? r : a,
    l = o(
      async (e) => {
        if (n) {
          re(() => {
            i((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        await Tn({ continueAfter: `paint` });
        let t = s.history.state,
          r = new URL(s.location.href),
          a = e(r.searchParams).toString();
        r.search = a;
        let o = t?.queryParamBackAnchorSearch,
          c = s.location.search.slice(1),
          l = o === void 0 && a !== c,
          u = o !== void 0 && a === o,
          d = { ...t, queryParamBackAnchorSearch: u ? void 0 : (o ?? (l ? c : void 0)) },
          f = r.toString();
        (l || u ? await Er(d, f) : Tr(d, f), Ur());
      },
      [n]
    ),
    u = Lr(() => ({ urlSearchParams: new URLSearchParams(c), replaceSearchParams: l }), [c, l]);
  return D(q_.Provider, { value: u, children: e });
}
function Gr(e) {
  return J_ in e && e[J_] === 1;
}
function Kr() {
  if (!Y_) return;
  ((Z_ = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  Y_.forEach((n) => t.addEventListener(n, X_, e));
}
function qr() {
  return (
    c(() => {
      if (!Z_ || !Y_) return;
      let e = { capture: !0 },
        t = document.body;
      (Y_.forEach((n) => t.removeEventListener(n, X_, e)),
        (Y_ = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function Jr(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function Yr(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function Xr() {
  ((_v = new gv()), _v.render.markStart());
}
function Zr() {
  (h(() => {
    _v?.useInsertionEffects.markRouterStart();
  }, []),
    ne(() => {
      _v?.useLayoutEffects.markRouterStart();
    }, []),
    c(() => {
      _v?.useEffects.markRouterStart();
    }, []));
}
function Qr() {
  (h(() => {
    (_v?.render.markEnd(), _v?.useInsertionEffects.markStart());
  }, []),
    ne(() => {
      if ((_v?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        vv = !0;
        return;
      }
      je.read(() => {
        (_v?.browserRendering.requestAnimationFrame.markStart(),
          _v?.unattributedHydrationOverhead.measure());
      });
    }, []),
    c(() => {
      (_v?.useEffects.markStart(),
        _v?.browserRendering.hasStarted ||
          (_v?.mutationEffects.measure(), _v?.useEffects.markAreSynchronous()));
    }, []));
}
function $r() {
  (h(() => {
    _v?.useInsertionEffects.markEnd();
  }, []),
    ne(() => {
      (_v?.useLayoutEffects.markEnd(),
        !(vv || document.visibilityState !== `visible`) &&
          je.read(() => {
            (_v?.browserRendering.requestAnimationFrame.markEnd(),
              Tn().then(() => {
                _v?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    c(() => {
      _v?.useEffects.markEnd();
    }, []));
}
function ei() {
  return (Qr(), null);
}
function ti() {
  return ($r(), null);
}
function ni(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return r.isValidElement(e) ? r.cloneElement(e, n) : D(e, { ...n });
}
function ri() {
  return Sv;
}
function ii(e) {
  if (Cv?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      V(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: si(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          V(t, `localizedPath must be defined`);
          let i = si(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    Cv = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: Cv.pathRoutes,
    paths: Cv.paths,
    pathRoutesLocalized: Cv.pathRoutesLocalized,
    pathsLocalized: Cv.pathsLocalized,
  };
}
function ai(e, t, n = !0, r = ri()) {
  return oi(e, t, r, n);
}
function oi(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = ii(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = ci(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = ci(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = ci(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = ci(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function si(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function ci(e, t) {
  let n = [],
    r = li(t).replace(h_, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
      continue;
    }
    if (r === void 0) throw Error(`Path variable values cannot be undefined`);
    o[t] = r;
  }
  return { isMatch: !0, pathVariables: o };
}
function li(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function ui() {
  if (`PerformanceServerTiming` in s) {
    let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
    if (!e || e.length === 0) return new URLSearchParams();
    let t = e.find((e) => e.name === `abtests`);
    return t ? new URLSearchParams(t.description) : new URLSearchParams();
  }
  return new URLSearchParams();
}
function di(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n;
  if (!e[i]) return;
  let { abTestingParentId: a, ...o } = r,
    s = e[i].elements || r.elements ? { ...e[i].elements, ...r.elements } : void 0;
  e[i] = { ...o, elements: s, abTestingVariantId: n, abTestId: t };
}
function fi(e, t) {
  for (let [n, r] of t) di(e, n, r);
}
function pi(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function mi(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    { abTestingParentId: r, ...i } = e[t],
    a = e[n]?.elements || i.elements ? { ...e[n]?.elements, ...i.elements } : void 0;
  e[n] = { ...i, elements: a, abTestingVariantId: t };
}
function hi(e, t) {
  if (s === void 0) return t;
  let n = t;
  if (t) {
    mi(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (fi(e, ui()), pi(e), n);
}
function gi(e) {
  (c(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    h(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function _i(e, ...t) {
  wv.has(e) || (wv.add(e), console.warn(e, ...t));
}
function vi(e, t, n) {
  _i(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function yi(e) {
  return (
    typeof e == `object` &&
    !!e &&
    Dv in e &&
    e[Dv] instanceof Function &&
    Ov in e &&
    e[Ov] instanceof Function
  );
}
function bi(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = Ev(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function xi(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Si(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Ci(e) {
  return Math.round(e * 2) / 2;
}
function wi(e, t) {
  return { x: e, y: t };
}
function Ti(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0)
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  return u;
}
function Ei(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Di(e) {
  let t = Oi(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function Oi(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function ki(e, t, n) {
  return (
    (jv.rgb_r = e / 255),
    (jv.rgb_g = t / 255),
    (jv.rgb_b = n / 255),
    jv.rgbToHsluv(),
    { h: jv.hsluv_h, s: jv.hsluv_s, l: jv.hsluv_l }
  );
}
function Ai(e, t, n, r = 1) {
  return (
    (jv.hsluv_h = e),
    (jv.hsluv_s = t),
    (jv.hsluv_l = n),
    jv.hsluvToRgb(),
    { r: jv.rgb_r * 255, g: jv.rgb_g * 255, b: jv.rgb_b * 255, a: r }
  );
}
function ji(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function Mi(e, t, n) {
  return {
    r: Ei(e) ? zi(e, 255) * 255 : 0,
    g: Ei(t) ? zi(t, 255) * 255 : 0,
    b: Ei(n) ? zi(n, 255) * 255 : 0,
  };
}
function Ni(e, t, n, r) {
  let i = [
    Hi(Math.round(e).toString(16)),
    Hi(Math.round(t).toString(16)),
    Hi(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function Pi(e, t, n) {
  let r,
    i,
    a = zi(e, 255),
    o = zi(t, 255),
    s = zi(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function Fi(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function Ii(e, t, n) {
  let r, i, a;
  if (((e = zi(e, 360)), (t = zi(t * 100, 100)), (n = zi(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = Fi(s, o, e + 1 / 3)), (i = Fi(s, o, e)), (a = Fi(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function Li(e, t, n) {
  ((e = zi(e, 255)), (t = zi(t, 255)), (n = zi(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function Ri(e, t, n) {
  ((e = zi(e, 360) * 6), (t = zi(t * 100, 100)), (n = zi(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function zi(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    Bi(e) && (e = `100%`);
    let t = Vi(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function Bi(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function Vi(e) {
  return typeof e == `string` && e.includes(`%`);
}
function Hi(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function Ui(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = Av[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = Mv.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = Mv.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = Mv.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: Di(r[2] ?? ``), l: Di(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = Mv.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: Di(r[2] ?? ``),
              l: Di(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = Mv.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: Di(r[2] ?? ``), v: Di(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = Mv.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: Di(r[2] ?? ``),
                  v: Di(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = Mv.hex8.exec(t))
                ? {
                    r: Wi(r[1] ?? ``),
                    g: Wi(r[2] ?? ``),
                    b: Wi(r[3] ?? ``),
                    a: Gi(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = Mv.hex6.exec(t))
                  ? {
                      r: Wi(r[1] ?? ``),
                      g: Wi(r[2] ?? ``),
                      b: Wi(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = Mv.hex4.exec(t))
                    ? {
                        r: Wi(`${r[1]}${r[1]}`),
                        g: Wi(`${r[2]}${r[2]}`),
                        b: Wi(`${r[3]}${r[3]}`),
                        a: Gi(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = Mv.hex3.exec(t))
                      ? {
                          r: Wi(`${r[1]}${r[1]}`),
                          g: Wi(`${r[2]}${r[2]}`),
                          b: Wi(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function Wi(e) {
  return parseInt(e, 16);
}
function Gi(e) {
  return Wi(e) / 255;
}
function Ki(e) {
  let t = Nv.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function qi(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function Ji({ r: e, g: t, b: n, a: r }) {
  return { r: qi(e), g: qi(t), b: qi(n), a: r };
}
function Yi(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function Xi({ r: e, g: t, b: n, a: r }) {
  return { r: Yi(e), g: Yi(t), b: Yi(n), a: r };
}
function Zi({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function Qi(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function $i({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = Qi(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function ea(e) {
  return Lv(Iv(e));
}
function ta(e) {
  return Fv(Pv(e));
}
function na(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = aa({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = ra(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? aa(e)
              : oa(e)),
    i
  );
}
function ra(e) {
  let t = Ui(e);
  if (t) return t.format === `hsl` ? oa(t) : t.format === `hsv` ? ia(t) : aa(t);
}
function ia(e) {
  let t = Ri(e.h, e.s, e.v);
  return { ...Pi(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : sa(e.a) };
}
function aa(e) {
  let t = Mi(e.r, e.g, e.b);
  return { ...Pi(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : sa(e.a) };
}
function oa(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = Ei(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Ei(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = Oi(e.s)),
    (r = Ei(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = Oi(e.l)),
    (i = Ii(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function sa(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function ca() {
  return q.location.origin === `https://screenshot.framer.invalid`;
}
function la({ children: e }) {
  if (d(Zv).top) return D(b, { children: e });
  let t = E({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    n = E({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    r = E(new Set()).current,
    i = E({
      getLayoutId: o(({ id: e, name: i, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = i ? `byName` : `byId`,
          s = t.current[o][e];
        if (s) return s;
        let c = i || e;
        if (!a && !r.has(c) && (!t.current.byLayoutId[c] || t.current.byLayoutId[c] === c))
          return (
            t.current.count[o][c] === void 0 &&
              ((t.current.count[o][c] = 0), (t.current.byLayoutId[c] = c), (n.current[o][e] = c)),
            r.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            V(!!c, `duplicatedId must be defined`);
            let u = t.current[o][c],
              d = t.current.byLastId[c];
            if (d && !l) {
              let e = t.current.byLayoutId[d],
                n = !e || e === i;
              d && !r.has(d) && (!i || n) && (l = [d, c]);
            }
            let f = u ? t.current.byLayoutId[u] : void 0,
              p = !f || f === i;
            if (u && !r.has(u) && (!i || p))
              return ((n.current[o][e] = u), (n.current.byLastId[c] = u), r.add(u), u);
          }
        let u = t.current.byLastId[e];
        if (u && !r.has(u)) return (r.add(u), (n.current.byId[e] = u), u);
        if (l) {
          let [t, i] = l;
          return ((n.current[o][e] = t), (n.current.byLastId[i] = t), r.add(t), t);
        }
        let d = t.current.byPossibleId[e];
        if (d && !r.has(d)) return (r.add(d), (n.current.byId[e] = d), d);
        let f = a?.[0],
          p = i || f || e,
          { layoutId: m, value: h } = ua(p, (t.current.count[o][p] ?? -1) + 1, r);
        if (((t.current.count[o][p] = h), (n.current[o][e] = m), a?.length && !i)) {
          let e = a[a.length - 1];
          if ((e && (n.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 && (n.current.byPossibleId[t] || (n.current.byPossibleId[t] = m));
            }
        }
        return ((n.current.byLayoutId[m] = c), r.add(m), m);
      }, []),
      persistLayoutIdCache: o(() => {
        ((t.current = {
          byId: { ...t.current.byId, ...n.current.byId },
          byLastId: { ...t.current.byLastId, ...n.current.byLastId },
          byPossibleId: { ...t.current.byPossibleId, ...n.current.byPossibleId },
          byName: { ...t.current.byName, ...n.current.byName },
          byLastName: { ...t.current.byLastName, ...n.current.byLastName },
          byLayoutId: { ...t.current.byLayoutId, ...n.current.byLayoutId },
          count: { ...t.current.count, byName: {} },
        }),
          (n.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          r.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return D(Zv.Provider, { value: i, children: e });
}
function ua(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function da({ enabled: e = !0, ...t }) {
  let n = d(Zv),
    r = f(() => ({ ...n, enabled: e }), [e]);
  return D(Zv.Provider, { ...t, value: r });
}
function fa(e) {
  let t = E(null);
  return (t.current === null && (t.current = e()), t.current);
}
function pa(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${ma(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return te(`div`, {
    style: $v,
    children: [
      D(`div`, { className: `text`, style: ty, children: r }),
      i && D(`div`, { className: `text`, style: ny, children: i }),
    ],
  });
}
function ma(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function U(e) {
  return Number.isFinite(e);
}
function ha(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function ga(e) {
  return typeof e != `string` && typeof e != `number`;
}
function _a(e) {
  return e != null && typeof e != `boolean` && !ha(e);
}
function va(e) {
  return (Math.PI / 180) * e;
}
function ya(e) {
  return tt(e) ? !1 : e === 2 || e === 5;
}
function ba(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function xa(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return Sa(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function Sa(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      H(e, `unknown constraint key`);
  }
}
function Ca(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(xa(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(xa(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function wa(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(xa(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(xa(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function Ta(e, t, n, r, i) {
  let a = wa(U(e) ? e : sy, n, r, i),
    o = Ca(U(t) ? t : cy, n, r, i);
  return (
    U(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (U(n.left) && U(n.right)
        ? (o = a / n.aspectRatio)
        : (U(n.top) && U(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function Ea(e, t) {
  return !U(e) || !U(t) ? null : e + t;
}
function Da(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function Oa(e) {
  return !e._constraints || Da(e) ? !1 : e._constraints.enabled;
}
function ka(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    U(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    U(n) && U(r) ? { width: n, height: r } : null
  );
}
function Aa(e) {
  let t = ka(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return U(n) && U(r) ? { x: n, y: r, ...t } : null;
}
function ja(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Oa(e) || r) return Aa(e);
  let i = Ma(e),
    a = Na(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return oy.toRect(i, o, null, n, null);
}
function Ma(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = ay.quickfix({
      left: U(t),
      right: U(n),
      top: U(r),
      bottom: U(i),
      widthType: ba(c),
      heightType: ba(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function Na(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Pa() {
  return r.useContext(ly).parentSize;
}
function Fa(e) {
  return typeof e == `object`;
}
function Ia(e) {
  return Fa(e) ? e.width : e;
}
function La(e) {
  return Fa(e) ? e.height : e;
}
function Ra(e, t) {
  return D(uy, { parentSize: t, children: e });
}
function za(e) {
  return ja(e, Pa(), !0);
}
function Ba({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function Va(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function Ha(e, t, n = py) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!my) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) my = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = my;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function Ua() {
  return ca() ? Y.preview : Y.current();
}
function Wa(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? wy.variable(e) : e === `` ? `""` : e;
}
function Ga(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return Ka(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return qa(r);
    case `lower-roman`:
    case `upper-roman`:
      return Ya(r);
    default:
      return Ka(r);
  }
}
function Ka(e) {
  return String(e).length;
}
function qa(e) {
  let t = 1;
  for (; Ja(t) < e; ) t++;
  return t;
}
function Ja(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function Ya(e) {
  let t = 0;
  for (let n of Dy) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function Xa(e, t) {
  return wy.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function Za(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function Qa() {
  return Y.current() === Y.preview ? Ky.value : Gy.value;
}
function $a(e) {
  return vy(e, Qa, `framer-lib-combinedCSSRules`);
}
function eo(e) {
  return B(e) || Ze(e);
}
function to(e) {
  return !!e && qy in e && e[qy] === !0;
}
function no(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return Qe(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return tt(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return $e(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return $e(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = B(e.defaultValue) ? e.defaultValue : {};
        return (B(e.controls) && ro(t, e.controls), t);
      }
      case `array`:
        return $e(e.defaultValue) ? e.defaultValue : void 0;
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function ro(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!tt(i) || to(r)) continue;
    let a = no(r);
    tt(a) || (e[n] = a);
  }
}
function io(e) {
  if (B(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function ao(e, t) {
  eo(e) && ro(io(e), t);
}
function oo(e, t) {
  (Object.assign(e, { propertyControls: t }), ao(e, t));
}
function so(e) {
  return e.propertyControls;
}
function co() {
  let e = Y.current();
  return e === Y.canvas || e === Y.export;
}
function lo() {
  let [e] = p(() => co());
  return e;
}
function uo(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function fo(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of ib) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function po(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function mo(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < ab) continue;
    let n = po(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${po(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function ho(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of rb) {
    let n = po(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function go(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = ho(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: mo(n, t, fo(t.pixelWidth, t.pixelHeight)) };
}
function _o() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: ct(tb.imagePlaceholderSvg),
  };
}
function vo(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function yo(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function bo(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...nb,
    objectPosition: yo(e.positionX, e.positionY),
    objectFit: vo(e.fit),
  };
}
function xo(e) {
  let t = r.useRef(e ? `auto` : `async`),
    n = o((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    i = o(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    a = o(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: i, onImageMount: a };
}
function So({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = tb.useImageSource(e, t, n),
    s = bo(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = xo(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : go(e.nodeFixedSize, e, o);
  return D(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function Co({ image: e, containerSize: t, nodeId: n }) {
  let i = r.useRef(null),
    a = tb.useImageElement(e, t, n),
    o = bo(e);
  return (
    r.useLayoutEffect(() => {
      let e = i.current;
      if (e !== null)
        return (
          e.appendChild(a),
          () => {
            e.removeChild(a);
          }
        );
    }, [a]),
    Object.assign(a.style, o),
    D(`div`, { ref: i, style: { display: `contents`, ...nb } })
  );
}
function wo({ nodeId: e, image: t, containerSize: n }) {
  let i = r.useRef(null),
    a = tb.useImageSource(t, n, e);
  return (
    r.useLayoutEffect(() => {
      let n = i.current;
      if (n === null) return;
      let r = bo(t);
      tb.renderOptimizedCanvasImage(n, a, r, e);
    }, [e, t, a]),
    D(`div`, { ref: i, style: { display: `contents`, ...nb } })
  );
}
function To({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (R(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = z(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Ci(e * (t.pixelWidth / 2)),
        s = tb.useImageSource(t, n);
      ((r = {
        ...ob,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: yo(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        Y.current() === Y.canvas
          ? tb.canRenderOptimizedCanvasImage(tb.useImageSource(t))
            ? D(wo, { image: t, ...n })
            : D(Co, { image: t, ...n })
          : D(So, { image: t, avoidAsyncDecoding: Y.current() === Y.export, ...n });
  let o = a ? ob : (r ?? { ...ob, ..._o() });
  return i
    ? D(_e.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : D(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function Eo(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  if (
    (typeof r == `number`
      ? (o = s = c = l = r)
      : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    !(o === 0 && s === 0 && c === 0 && l === 0))
  ) {
    if (n && o === s && o === c && o === l) {
      t.border = `${o}px ${i} ${a}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${o}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${c}px`),
      (t.borderRightWidth = `${l}px`));
  }
}
function Do(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...nb,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), D(_e.div, { style: n }))
    : (Eo(e, n, !1), D(_e.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function Oo(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function ko(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !cb.isImageObject(t)) return;
  let r = null;
  if (((r = R(n) ? { alt: ``, src: n } : Ev.get(t, null)), cb.isImageObject(r))) return Oo(r, e);
}
function Ao(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function jo(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? _e[e] : _e.div;
}
function Mo(e, t) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0));
}
function No(e) {
  let t = {};
  return (!e || !lb || Y.current() !== Y.canvas || Mo(t, e), t);
}
function Po(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function Fo(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = r.Children.map(t, (e) =>
        r.isValidElement(e) ? r.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function Io(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function Lo(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: o = !1, drag: s } = e,
    { getLayoutId: c, enabled: l } = d(Zv);
  return f(() => {
    if (!l) return e.layoutId;
    let u = t || e.layoutId;
    if (!u && (s || !i || o)) return;
    let d = u || c({ id: i, name: r, duplicatedFrom: a });
    if (d) return n ? `${d}-${n}` : d;
  }, [l]);
}
function Ro() {
  let [e, t] = r.useState(0);
  return r.useCallback(() => t((e) => e + 1), []);
}
function zo(e) {
  let t = Ro();
  c(() => {
    let n = e?.current;
    if (n)
      return (
        pb?.observeElementWithCallback(e.current, t),
        () => {
          pb?.unobserve(n);
        }
      );
  }, [e, t]);
}
function Bo(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(mb)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Vo)
    .map(Ho);
}
function Vo(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function Ho(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(Vo);
  return t ? Ho(t) : e;
}
function Uo(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = d(db),
    l = Y.current() === Y.canvas;
  ub(() => {
    !l ||
      c ||
      s ||
      (t.current && i && a && o && tb.queueMeasureRequest(Po(i), t.current, n(t.current)));
  });
}
function Wo(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && tb.queueMeasureRequest(Po(t.id), t, Bo(t));
}
function Go(e) {
  e.willChange = `transform`;
  let t = Y.current() === Y.canvas;
  _b && t && (e.translateZ = hb);
}
function Ko(e) {
  ((e.willChange = `transform`), qo(e, !0));
}
function qo(e, t) {
  let n = Y.current() === Y.canvas;
  if (!_b || !n) return;
  let r = (R(e.transform) && e.transform) || ``;
  t ? r.includes(gb) || (e.transform = r + gb) : (e.transform = r.replace(gb, ``));
}
function Jo(e, t, n, r = !0) {
  if (!e) return;
  let i = Jy(e.style),
    a = n || i[t],
    o = () => {
      Yo(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function Yo(e) {
  return R(e) || z(e) || nt(e);
}
function Xo(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function Zo(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  Xo(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function Qo(e, t) {
  let n = [e, t];
  return xb.test(e) ? e : Zo(1e3, Sb, n, () => bb.multiplyAlpha(e, t));
}
function $o(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: Qo(e.value, t) }))
  );
}
function es(e, t) {
  let n = 0;
  return (
    $o(e, t).forEach((e) => {
      n ^= yb(e.value) ^ e.position;
    }),
    n
  );
}
function ts(e) {
  return e && Cb.every((t) => t in e);
}
function ns(e) {
  return e && wb.every((t) => t in e);
}
function rs({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || Bv(t)
      ? (n.backgroundColor = t)
      : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e))
    : e &&
      ((e = Ev.get(e, null)),
      typeof e == `string` || Bv(e)
        ? (n.background = e)
        : Eb.isLinearGradient(e)
          ? (n.background = Eb.toCSS(e))
          : Ob.isRadialGradient(e)
            ? (n.background = Ob.toCSS(e))
            : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e)));
}
function W(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function is(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function as(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function os(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    Te(n)
      ? (t.cornerShape = ie(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    W(e, `size`, t),
    W(e, `width`, t),
    W(e, `height`, t),
    W(e, `minWidth`, t),
    W(e, `minHeight`, t),
    W(e, `top`, t),
    W(e, `right`, t),
    W(e, `bottom`, t),
    W(e, `left`, t),
    W(e, `position`, t),
    W(e, `overflow`, t),
    W(e, `opacity`, t),
    (!e._border || !e._border.borderWidth) && W(e, `border`, t),
    W(e, `borderRadius`, t),
    W(e, `radius`, t, `borderRadius`),
    W(e, `color`, t),
    W(e, `shadow`, t, `boxShadow`),
    W(e, `x`, t),
    W(e, `y`, t),
    W(e, `z`, t),
    W(e, `rotate`, t),
    W(e, `rotateX`, t),
    W(e, `rotateY`, t),
    W(e, `rotateZ`, t),
    W(e, `scale`, t),
    W(e, `scaleX`, t),
    W(e, `scaleY`, t),
    W(e, `skew`, t),
    W(e, `skewX`, t),
    W(e, `skewY`, t),
    W(e, `originX`, t),
    W(e, `originY`, t),
    W(e, `originZ`, t),
    rs(e, t),
    t
  );
}
function ss(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof Jy(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function cs(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (Ab.has(t)) return `pointer`;
}
function ls(e) {
  return us(e) ? !0 : e.style ? !!us(e.style) : !1;
}
function us(e) {
  return jb in e && (e[jb] === `scroll` || e[jb] === `auto`);
}
function ds(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = I(e.minWidth),
    h = I(e.minHeight),
    g = I(e.maxWidth),
    _ = I(e.maxHeight);
  return {
    top: I(n),
    left: I(t),
    bottom: I(r),
    right: I(i),
    width: I(a),
    height: I(o),
    size: I(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function fs(e) {
  let t = d(db),
    { style: n, _initialStyle: i, __fromCanvasComponent: a, size: o } = e,
    s = ds(e),
    c = za(s),
    l = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: Y.current() === Y.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let u = !ss(e) && !e.__fromCanvasComponent && !ls(e),
    f = !e.style || !(`pointerEvents` in e.style);
  u && f && (l.pointerEvents = `none`);
  let p = r.Children.count(e.children) > 0 &&
      r.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    m = os(e);
  (o === void 0 && !a && (is(m) || (l.width = Mb.width), as(m) || (l.height = Mb.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight));
  let h = {};
  (Oa(s) &&
    c &&
    !Ba(e) &&
    (h = { left: c.x, top: c.y, width: c.width, height: c.height, right: void 0, bottom: void 0 }),
    Object.assign(l, p, i, m, h, n),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    vb.applyWillChange(e, l, !0));
  let g = l;
  l.transform || (g = { x: 0, y: 0, ...l });
  let _ = co();
  return (
    e.positionSticky
      ? (!_ || tb.isOnPageCanvas || t) &&
        ((g.position = `sticky`),
        (g.willChange = `transform`),
        (g.top = e.positionStickyTop),
        (g.right = e.positionStickyRight),
        (g.bottom = e.positionStickyBottom),
        (g.left = e.positionStickyLeft))
      : _ &&
        (e.positionFixed
          ? (g.position = tb.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (g.position = `absolute`)),
    `rotate` in g && g.rotate === void 0 && delete g.rotate,
    [g, c]
  );
}
function ps(e) {
  let t = {};
  for (let n in e)
    (Je(n) || Xy(n)) && !Nb.has(n)
      ? (t[n] = Jy(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof Jy(e)[n] != `boolean` && !e.transition && (t.transition = Jy(e)[n]));
  return t;
}
function ms(e) {
  return `data-framer-name` in e;
}
function hs(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function gs(e) {
  return D(_e.div, { layoutId: Ib, style: zb, children: e.children });
}
function _s(e, t) {
  Ze(e) ? e(t) : vs(e) && (e.current = t);
}
function vs(e) {
  return B(e) && `current` in e;
}
function ys(e) {
  return vs(e) && e.current !== null;
}
function bs() {
  let e = fa(() => new Set()),
    t = fa(() => new Map());
  return fa(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      if (i !== n.current) {
        if (
          ((n.current = i),
          r && r(i),
          t.forEach((e, t) => {
            e ? e() : t(null);
          }),
          i === null)
        ) {
          (t.clear(), e.clear());
          return;
        }
        e.forEach((e) => {
          let n = e(i);
          t.set(e, n);
        });
      }
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function xs(e) {
  let t = E(null),
    n = bs();
  return fa(() => (vs(e) ? n(e) : Ze(e) ? n(t, e) : n(t)));
}
function Ss(e, t, n) {
  let r = E(),
    i = E();
  (Lr(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function Cs(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new Bb({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function ws(e, t, n) {
  let r = fa(() => `${n.rootMargin}`),
    i = d(Vb),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  Ss(
    e,
    (e) => {
      if (a && e !== null) return Cs(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c]
  );
}
function Ts(e, t, n) {
  let i = r.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: a, animateOnce: o, threshold: s, rootMargin: c = `0px 0px 0px 0px` } = n;
  Hb(
    e,
    r.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: r } = i.current,
          a = Ds(e, s?.y ?? 0);
        if (a && !n) {
          if (o && r) return;
          ((i.current.hasAnimatedOnce = !0), (i.current.isInView = !0), t(!0));
          return;
        }
        if (!a && n) {
          if (((i.current.isInView = !1), o)) return;
          t(!1);
          return;
        }
      },
      [o, s?.y, t]
    ),
    { threshold: Ub, rootMargin: c, enabled: a ?? !0 }
  );
}
function Es(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, q.innerHeight);
}
function Ds({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && Es(t, e) >= r;
}
function Os() {
  return new Map();
}
function ks() {
  return fa(Os);
}
function As(e, t = []) {
  let { register: n, deregister: r } = d(Jb);
  c(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function js(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function Ms(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (U(t.originX) && (r.originX = t.originX),
      U(t.originY) && (r.originY = t.originY),
      U(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (U(n.originX) && (r.originX = n.originX),
      U(n.originY) && (r.originY = n.originY),
      U(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function Ns(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function Ps(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return ex.PushLeft;
    case `left`:
      return ex.PushRight;
    case `bottom`:
      return ex.PushUp;
    case `top`:
      return ex.PushDown;
  }
}
function Fs(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return ex.OverlayLeft;
    case `left`:
      return ex.OverlayRight;
    case `bottom`:
      return ex.OverlayUp;
    case `top`:
      return ex.OverlayDown;
  }
}
function Is(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return ex.FlipLeft;
    case `left`:
      return ex.FlipRight;
    case `bottom`:
      return ex.FlipUp;
    case `top`:
      return ex.FlipDown;
  }
}
function Ls(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return zs(e, t.transition, t.component);
    case `removeOverlay`:
      return Bs(e);
    case `add`:
      return Vs(e, t.key, t.transition, t.component);
    case `remove`:
      return Ws(e);
    case `update`:
      return Rs(e, t.key, t.component);
    case `back`:
      return Hs(e);
    case `forward`:
      return Us(e);
    default:
      return;
  }
}
function Rs(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function zs(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function Bs(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function Vs(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i && i.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? Ys(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = qs(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = Gs(e, t, c),
    p = Js(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function Hs(e) {
  let t = { ...e.containers },
    n = Ws(e);
  if (n) return ((n.containers = t), n);
}
function Us(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = Vs(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function Ws(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (V(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = Ks(e, r, n),
    u = Js(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function Gs(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function Ks(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function qs(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function Js(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = Xs(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function Ys(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1 ||
        !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function Xs(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return Zs(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return Zs(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return Zs(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return Zs(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function Zs(e, t, n) {
  let r = {},
    i = {};
  return (
    nx.forEach((e) => {
      ((r[e] = Zb[e]), (i[e] = { ...n, from: Zb[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${Jy(Zb)[a]}%` : Jy(Zb)[a];
        ((Jy(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function Qs(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function $s({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function ec({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
      ? t.transition.animation
      : ox;
}
function tc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function nc(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function rc(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  } else if (e < n) {
    let t = r[e + 1];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  } else {
    let t = r[e];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  }
}
function ic(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function ac(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function oc(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t && t.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t && t.transition) return t.transition.enter;
    }
}
function sc(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t && t.transition.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t && t.transition.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return ox;
}
function cc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function lc(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function uc(e) {
  return r.Children.map(e.component, (t) => {
    if (!_a(t) || !ga(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      i = e?.transition?.position,
      a = !i || (i.left !== void 0 && i.right !== void 0),
      o = !i || (i.top !== void 0 && i.bottom !== void 0),
      s = `style` in t.props ? B(t.props.style) : !0;
    return (
      a && (`width` in t.props && (n.width = `100%`), s && (n.style.width = `100%`)),
      o && (`height` in t.props && (n.height = `100%`), s && (n.style.height = `100%`)),
      r.cloneElement(t, n)
    );
  });
}
function dc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function fc(e, t) {
  let n = ae(),
    r = ge();
  return D(ax, {
    ref: (e) => {
      if (t) {
        if (typeof t == `function`) {
          t(e);
          return;
        }
        t.current = e;
      }
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
function pc(e) {
  return px in e;
}
function mc(e, t) {
  if (!pc(e)) return;
  let n = Ev.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function hc(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function gc(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function _c(e, t) {
  let n = [];
  (U(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    U(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    U(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    U(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    U(e.invert) && n.push(`invert(${e.invert / 100})`),
    U(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    U(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    U(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...hc(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function vc(e, t) {
  U(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function yc(e, t) {
  (vc(e, t), _c(e, t));
}
function bc(e, t) {
  let n,
    r = (...r) => {
      (q.clearTimeout(n), (n = q.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      q.clearTimeout(n);
    }),
    r
  );
}
function xc(...e) {
  return e.filter(Boolean).join(` `);
}
function Sc(e, t) {
  let n = {},
    r = {};
  for (let i in e) {
    let a = Cc(i);
    if (a && t.has(a)) {
      n[a] = e[i];
      continue;
    }
    r[i] = e[i];
  }
  return [n, r];
}
function Cc(e) {
  if (e.startsWith(vx)) return e.substr(yx);
}
function wc(e, t, n) {
  let r = i.map(e, (e) => (k(e) ? u(e, t) : e));
  return n ? r : D(b, { children: r });
}
function Tc(e) {
  let t = fa(() => Ec(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function Ec(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = Dc(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = Dc(t)));
    },
    r = !1;
  function a(a, o) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      i.count(a) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      i.map(a, (e) => {
        if (k(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = Ze(o) ? o(e.props) : o;
          return u(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let o = function (e, t) {
    return D(b, { children: a(e, t) });
  };
  return (
    (o.cloneAsArray = a),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: o,
    }
  );
}
function Dc(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (_s(n, e), _s(t, e));
  };
}
function Oc(e, t, n, i, a, o, s, c) {
  let l = r.Children.toArray(t),
    u = l[0];
  if (l.length !== 1 || !r.isValidElement(u))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      s(t, n)
    );
  let d = [],
    f = [];
  for (let [t] of Object.entries(i)) {
    if (t === a) continue;
    let n = e[t];
    if (!n || !Mc(u.props, n)) {
      f.push(t);
      continue;
    }
    let r = jc([t], o);
    r.length && d.push({ variants: r, propOverrides: n });
  }
  if (d.length === 0) return s(u, n);
  let p = jc([a, ...f], o);
  p.length && d.unshift({ variants: p });
  let m = [];
  for (let { variants: e, propOverrides: t } of d) {
    if (c && !e.includes(c)) continue;
    let r = c ? `active-branch` : e.join(`+`),
      l = D(
        xx.Provider,
        {
          value: { primaryVariantId: a, variants: new Set(e) },
          children: s(u, t ? { ...n, ...t } : n),
        },
        r
      ),
      f = Ac(e, o, i);
    (f.length
      ? (V(d.length > 1, `Must branch out when there are hiddenClassNames`),
        (l = D(
          `div`,
          { className: `${Sx} ${f.join(` `)}`, suppressHydrationWarning: !0, children: l },
          r
        )))
      : V(d.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      m.push(l));
  }
  return (
    V(!c || m.length === 1, `Must render exactly one branch when activeVariantId is given`),
    c ? m : [...m, D(`div`, { className: Cx }, `property-overrides-separator`)]
  );
}
function kc(e) {
  return e.split(`-`)[2];
}
function Ac(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${kc(a)}`);
  }
  return r;
}
function jc(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function Mc(e, t) {
  for (let n of Object.keys(t)) if (!Ot(e[n], t[n], !0)) return !0;
  return !1;
}
function Nc(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function Pc(e) {
  return r.forwardRef(({ optimized: t, ...n }, i) => {
    let a = r.useContext(bx),
      o = r.useContext(xx)?.variants,
      s = n[Mx];
    s && !Rn() && Ax.setAll(s, o, t ? n : null, a);
    let c = Px(n);
    return D(e, { ref: i, ...n, ...c });
  });
}
function Fc(e) {
  return R(e) || Array.isArray(e);
}
function Ic(e) {
  return e in Lx;
}
function Lc(e, t) {
  let n = fa(() => ({ values: Ix(t ? e : void 0) }));
  return (
    r.useEffect(() => {
      if (!t)
        for (let e of Fx) {
          let t = Lx[e];
          tt(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function Rc(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: i,
    loopPauseOffscreen: a,
  },
  s
) {
  let l = Xe(),
    u = fa(Ix),
    d = E(!1),
    m = Vx(),
    h = E(null),
    g = o(async () => {
      if (!i) return;
      let e = n || void 0,
        t = d.current && r === `mirror`,
        a = t ? Lx : i,
        o = t ? i : Lx;
      return (
        (d.current = !d.current),
        (h.current = Promise.all(
          Fx.map((t) => {
            if (!(l && t !== `opacity`))
              return (
                u[t].jump(o[t] ?? Lx[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    i = a[t] ?? o[t];
                  typeof i == `number` && ke(u[t], i, r);
                })
              );
          })
        )),
        h.current
      );
    }, [i, r, n, l]),
    [_, v] = p(!1),
    y = E(!1),
    b = o(async () => {
      !e || !y.current || (await g(), await m(t ?? 0), b());
    }, [g, m, e, t]),
    x = o(() => {
      y.current || ((y.current = !0), re(() => v(!0)), b());
    }, [b]),
    S = o((e = !0) => {
      (Fx.forEach((e) => {
        u[e].stop();
      }),
        Fx.forEach((e) => {
          u[e].set(Lx[e]);
        }),
        (d.current = !1),
        e && ((y.current = !1), re(() => v(!1))));
    }, []),
    C = e && i,
    w = o(() => {
      document.hidden ? S(!1) : y.current && ((y.current = !1), x());
    }, [x, S]);
  (c(() => {
    if (C)
      return (
        document.addEventListener(`visibilitychange`, w),
        () => {
          document.removeEventListener(`visibilitychange`, w);
        }
      );
  }, [C, w]),
    c(() => {
      (C && a) || (C ? x() : S());
    }, [x, S, a, C]),
    c(() => () => S(), [S]));
  let T = E(!1),
    D = o(async () => {
      h.current && (await h.current, !T.current && S());
    }, [S]);
  Hb(
    s,
    o(
      (e) => {
        e.isIntersecting ? ((T.current = !0), x()) : ((T.current = !1), D());
      },
      [x, D]
    ),
    { enabled: C && a }
  );
  let O = _ || !a;
  return f(() => ({ values: u, style: C && O ? Rx : zx }), [C, O]);
}
function zc(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function Bc(e, t, n) {
  let { speed: i = 100, offset: a = 0, adjustPosition: o = !1, parallaxTransformEnabled: s } = e,
    c = r.useRef(null),
    l = Xe(),
    u = r.useCallback(
      (e) => (c.current === null || i === 100 ? 0 : zc(e, c.current, i, a, o)),
      [i, a, o]
    ),
    { scrollY: f } = ye(),
    p = ve(f, u),
    m = de(o && c.current === null ? `hidden` : n),
    h = de(0),
    g = d(Vb);
  return (
    Ss(
      t,
      (e) => {
        if (e === null || !s) return;
        let t = Cs(g, `undefined`, e, null, (e) => {
          ((c.current = e.boundingClientRect.top),
            je.update(() => {
              (p.set(u(f.get())), o && m.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [o, s]
    ),
    Ft(() => {
      s && p.set(0);
    }),
    { values: { y: l || !s ? h : p }, style: s ? { ...Rx, visibility: m } : zx }
  );
}
function Vc(e) {
  return typeof e == `object` && !!e;
}
function Hc(e) {
  if (Vc(e)) return e?.transition;
}
function Uc(e, t, n, r, i, a) {
  let o = Hc(e);
  return Promise.all(
    Fx.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = Vc(e) ? (e?.[s] ?? Lx[s]) : Lx[s];
          if ((Te(u) && (u = u.get()), !z(u))) return c();
          let d = be.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (R(i) && !l?.hasAnimated && q.MotionHandoffAnimation) {
            let e = q.MotionHandoffAnimation(i, s, je);
            e && (f = e);
          }
          a ? l.set(u) : ke(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function Wc(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  s,
  c,
  l
) {
  let u = r ?? e,
    d = i ?? t,
    p = a ?? n,
    [m, h] = pe(),
    g = E({ lastPresence: !1, lastAnimate: d, hasMounted: !1, running: !1 }),
    _ = fa(() => {
      let e = u ?? c;
      if (!B(e)) return { values: Ix() };
      let t = {};
      for (let n in e) {
        let r = B(e) ? e[n] : void 0;
        z(r) && (t[n] = r);
      }
      return { values: Ix(t) };
    });
  Ss(
    o,
    (e) => {
      let { hasMounted: t } = g.current;
      if (t && d) return;
      let n = be.get(e);
      if (n) {
        Object.assign(g.current, { hasMounted: !0 });
        for (let e in _.values) {
          if (!Ic(e)) continue;
          let t = c?.[e];
          n.setBaseTarget(e, z(t) ? t : Lx[e]);
        }
      }
    },
    [d]
  );
  let v = Xe();
  Ss(o, (e) => {
    if (!s) {
      h?.();
      return;
    }
    if (e === null) return;
    if (m !== g.current.lastPresence) {
      (Object.assign(g.current, { lastPresence: m }),
        m
          ? u &&
            d &&
            (Object.assign(g.current, { running: !0 }),
            Uc(d, _, v, o, l).then(() => Object.assign(g.current, { running: !1 })))
          : p
            ? (Object.assign(g.current, { running: !0 }),
              Uc(p, _, v, o, l)
                .then(() => Object.assign(g.current, { running: !1 }))
                .then(() => h()))
            : h());
      return;
    }
    let { lastAnimate: t, running: n } = g.current;
    Ot(d, t) ||
      !d ||
      (Object.assign(g.current, { lastAnimate: d }),
      Uc(d, _, v, o, l, !n).then(() => Object.assign(g.current, { running: !1 })));
  });
  let y = s && d;
  return f(() => ({ values: _.values, style: y ? Rx : zx }), [y]);
}
function Gc(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; ) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function Kc(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o || !o.current) continue;
    let c = Gc(o.current, document.documentElement) - Wx - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function qc(e, t = 0) {
  return e < t ? `up` : `down`;
}
function Jc(e, t, n = {}) {
  let { direction: i, target: a } = e ?? {},
    { repeat: o = !0, enabled: s = !0 } = n,
    c = Pt();
  r.useEffect(() => {
    if (!i || !s) return;
    let e,
      n = 0,
      r,
      c;
    return se((s, { y: l }) => {
      if ((!o && c === a) || l.current > l.scrollLength || l.current < 0) return;
      let u = qc(l.current, e);
      e = l.current;
      let d = u !== r;
      if (((r = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < Gx) return;
        let e = u === i ? a : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [c, i, o, a, s, t]);
}
function Yc(e, t, n) {
  let r = Kc(e, t),
    i = [...qx],
    a = r[0];
  if (!z(a)) return Jx;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!z(e)) return Jx;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function Xc(e) {
  return {
    x: e?.x ?? Lx.x,
    y: e?.y ?? Lx.y,
    scale: e?.scale ?? Lx.scale,
    opacity: e?.opacity ?? Lx.opacity,
    transformPerspective: e?.transformPerspective ?? Lx.transformPerspective,
    rotate: e?.rotate ?? Lx.rotate,
    rotateX: e?.rotateX ?? Lx.rotateX,
    rotateY: e?.rotateY ?? Lx.rotateY,
    skewX: e?.skewX ?? Lx.skewX,
    skewY: e?.skewY ?? Lx.skewY,
    transition: e?.transition ?? void 0,
  };
}
function Zc({ opacity: e, targetOpacity: t, perspective: n, enter: i, exit: a, animate: o, ...s }) {
  return r.useMemo(
    () => ({
      initial: i ?? Xc({ ...s, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: o ?? Xc({ opacity: t }),
      exit: a ?? Xc(),
    }),
    [o, s, i, a, e, t, n]
  );
}
function Qc(e, t) {
  let n = Xe(),
    i = Zc(e),
    a = e.styleAppearEffectEnabled,
    o = Lc(a ? i.initial : i.animate, a),
    s = r.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    c = Pt(),
    l = r.useRef(),
    u = r.useCallback(async ({ transition: r, ...a }, s) => {
      let c = r ?? i.animate.transition ?? e.transition;
      await l.current;
      let u = be.get(t.current);
      l.current = Promise.all(
        Fx.map((e) => {
          s && o.values[e].set(i.initial[e] ?? Lx[e]);
          let t = a[e] ?? Lx[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (z(t) && o.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...c, onComplete: () => r() };
                typeof t == `number` && ke(o.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    d = e.animateOnce && s.current.lastAppearState === !0;
  Ts(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = s.current;
      if (t) {
        s.current.scheduledAppearState = e;
        return;
      }
      ((s.current.scheduledAppearState = void 0),
        (s.current.lastAppearState = e),
        n !== e && u(e ? i.animate : i.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !d,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let p = e.targets && a && !e.scrollDirection;
  return (
    r.useEffect(() => {
      if (!p) return;
      let t = { initial: !0 },
        n = `initial`;
      return se((r, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = Yc(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let l = Pe(a.current, s, c);
        if ((e.animateOnce && t[l]) || ((t[l] = !0), n === l)) return;
        n = l;
        let d = Jy(i)[l];
        d && u(d);
      });
    }, [c, p]),
    Jc(e.scrollDirection, (e) => void u(e ?? i.animate), { enabled: a, repeat: !e.animateOnce }),
    Ft(() => {
      if (a && !(!e.targets && !e.scrollDirection))
        for (let e of Fx) o.values[e].set(i.initial?.[e] ?? Lx[e]);
    }),
    f(() => ({ values: o.values, style: a ? Rx : zx }), [a])
  );
}
function $c(e, t) {
  let n = r.useRef({});
  r.useEffect(() => {
    if (t !== void 0)
      for (let r of gg(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = Be({
                keyframes: [a.get(), s],
                velocity: a.getVelocity(),
                ...t,
                restDelta: 0.001,
                onUpdate: o,
              })));
          },
          a = e[r],
          o,
          s;
        a.attach((e, t) => ((s = e), (o = t), je.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function el(e, t) {
  let n = Zx();
  return {
    inputRange: Kc(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of Fx) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function tl(e) {
  let t = Zx();
  for (let { target: n } of e) for (let e of Fx) t[e]?.push(n[e]);
  return t;
}
function nl(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: i,
    transformViewportThreshold: a = 0,
  },
  o
) {
  let s = Xe(),
    c = Lc(Xx(n, s), t),
    l = !t || !n,
    u = e === `onScrollTarget`,
    d = Pt();
  return (
    ne(() => {
      if (!(l || !u))
        return se((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: i } = el(n, a * t.containerLength);
          if (r.length !== 0)
            for (let e of Fx)
              (s && e !== `opacity`) ||
                (r.length === i[e].length &&
                  i[e][0] !== void 0 &&
                  c.values[e].set(Pe(t.current, r, i[e])));
        });
    }, [s, u, a, n, l]),
    Ss(
      o,
      (t) => {
        if (l || u || t === null) return;
        let r = tl(n);
        return se(
          (e, { y: t }) => {
            for (let e of Fx)
              (s && e !== `opacity`) ||
                (Qx.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  c.values[e].set(Pe(t.progress, Qx, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [d, s, e, u, n, l]
    ),
    $c(c.values, i),
    Ft(() => {
      if (l) return;
      let e = Xx(n, s);
      for (let t of Fx) c.values[t].set(e?.[t] ?? Lx[t]);
    }),
    r.useMemo(() => ({ values: c.values, style: t ? Rx : zx }), [t])
  );
}
function rl(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function il(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = Cc(n);
    if (r) {
      for (let i of eS)
        if ($x[i]?.has(r)) {
          t[i][r] = Jy(e)[n];
          break;
        }
    } else t.forwardedProps[n] = Jy(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = rl(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = rl(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function al(e) {
  return B(e) && rS in e;
}
function ol(e, t) {
  if (!e || !B(e)) return t;
  for (let n in e) {
    let r = e[n];
    !Te(r) || !Ic(n) || (z(r.get()) && t[n].push(r));
  }
}
function sl(e) {
  return R(e) || Array.isArray(e);
}
function cl() {
  return r.useContext(aS);
}
function ll(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function ul() {
  if (s === void 0 || cS)
    return D(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw uS;
}
function dl({ children: e }) {
  return d(fS) ? D(b, { children: e }) : D(w, { fallback: dS, children: e });
}
function fl() {
  return D(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function pl(e, t) {
  if (!rg || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  ln(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function ml(...e) {
  console.error(...e);
}
function hl() {
  return Y.current() !== Y.canvas;
}
function gl({ getErrorMessage: e, fallback: t, children: n }) {
  return hl()
    ? D(_l, { fallback: t, children: D(mS, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function _l({ children: e, fallback: t = pS }) {
  return s === void 0 ? D(w, { fallback: t, children: e }) : D(dl, { children: e });
}
function vl() {
  return r.useContext(gS);
}
function yl() {
  let e = vl();
  return r.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0; ) t = t.parent;
    return t;
  }, [e]);
}
function bl({ children: e, scopeId: t, nodeId: n }) {
  let i = vl(),
    a = r.useMemo(
      () => ({ level: (i?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: i }),
      [t, n, i]
    );
  return D(gS.Provider, { value: a, children: e });
}
function xl(e, t) {
  return `${_S}${e}:${t}`;
}
function Sl(e, t) {
  return wl(`component`, e, t);
}
function Cl(e, t) {
  return wl(`override`, e, t);
}
function wl(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${xl(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function Tl(e, t, n, r, i, a) {
  let o = Dl(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function El(e, t, n, r) {
  return Dl(e, t, n, r);
}
function Dl(e, t, n, r) {
  return !!(tt(n) || (n === 1 && r && e === t));
}
function Ol(e, t, n, r, i, a) {
  let o = vl();
  if (tt(t) || tt(n)) return D(hS, { children: e });
  let { disableCustomCode: s } = p_();
  return s && r
    ? D(`div`, {
        style: {
          padding: `12px 16px`,
          borderWidth: 1,
          borderRadius: 6,
          borderStyle: `solid`,
          borderColor: `rgba(149, 149, 149, 0.15)`,
          backgroundColor: `rgba(149, 149, 149, 0.1)`,
          fontSize: 12,
          color: `#a5a5a5`,
        },
        children: `Code component disabled`,
      })
    : (Tl(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = D(gl, { getErrorMessage: Sl.bind(null, t, n), fallback: null, children: e })),
      i && (e = D(bl, { scopeId: t, nodeId: n, children: e })),
      e);
}
function kl(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function Al(e) {
  return !(!e || e.placement || e.alignment);
}
function jl(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      H(e);
  }
}
function Ml(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${jl(t)}, -100%`;
    case `right`:
      return `0%, ${jl(t)}`;
    case `bottom`:
      return `${jl(t)}, 0%`;
    case `left`:
      return `-100%, ${jl(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function Nl(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(ES)) {
      let e = n.getAttribute(ES);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function Pl(e) {
  let { registerCursors: t } = d(bS),
    n = fa(() => e),
    r = y();
  ne(() => t(n, r), [t, r]);
}
function Fl(e) {
  return !!(e && typeof e == `object` && OS in e);
}
function Il(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function Ll() {
  return Y.current() === Y.canvas;
}
function Rl(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function zl(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function Bl(e, t, n, r) {
  if (R(e)) {
    let i = Rl(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    let { routeId: s } = ai(t.routes, o, void 0, r);
    return t.getRoute(s);
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function Vl(e) {
  return R(e) && e.startsWith(`data:${FS}`);
}
function Hl(e) {
  if (Vl(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(FS.length),
        r = t.searchParams,
        i = r.has(jS) ? r.get(jS) : void 0,
        a,
        o = r.get(MS),
        s = r.get(NS),
        c = r.get(PS);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function Ul(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = Hl(e);
    if (!n || !n.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function Wl(e) {
  if (!Vl(e)) return e;
  let t = Hl(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: Gl(i) };
}
function Gl(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function Kl({ children: e }) {
  return D(IS.Provider, { value: void 0, children: e });
}
function ql(e, t, n, r, a, s) {
  let c = d(IS),
    l = yl(),
    u = f(() => ({ scopeId: t, nodeId: n, furthestExternalComponent: l }), [t, n, l]),
    p = jt(),
    m = Nt(),
    { locales: h } = zr(),
    g = f(() => {
      let e = Fl(r) ? r : Wl(r);
      if (e) return Bl(e, p, m, h);
    }, [m, r, p, h]),
    _ = !!(!Ll() && c?.nodeId && u.nodeId),
    v = o(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), Un(e))) {
            Xl(a.href, ``, `_blank`);
            return;
          }
          g ? a.navigate?.() : Xl(a.href, a.rel, a.target);
        }
      },
      [a, g]
    ),
    y = o(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), Xl(a.href, ``, `_blank`));
      },
      [a]
    ),
    b = o(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          g ? a.navigate?.() : Xl(a.href, a.rel, a.target));
      },
      [a, g]
    );
  Ss(
    s,
    (e) => {
      e !== null && _ && (e.dataset.hydrated = `true`);
    },
    [_]
  );
  let S = e;
  return (
    _ &&
      (i.forEach(e, (e) => {
        Yl(e) &&
          (V(
            Jl(c),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          V(
            Jl(u),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          AS.collectNestedLink(c, u));
      }),
      (S = i.map(e, (e) => {
        if (!Yl(e)) return e;
        let t = Zl(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: v,
            onAuxClick: y,
            onKeyDown: b,
            as: r.as && Zl(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return x(t, { ...i, ref: a }, n);
      }))),
    D(IS.Provider, { value: u, children: S })
  );
}
function Jl(e) {
  return !tt(e?.nodeId);
}
function Yl(e) {
  return k(e) && (Zl(e.type) !== e.type || Zl(e.props.as) !== e.props.as);
}
function Xl(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function Zl(e) {
  return e === `a` ? `span` : Ye(e) && Ne(e) === `a` ? _e.span : e;
}
function Ql(e) {
  e &&
    je.read(() => {
      let t = document.getElementById(e);
      if (!t) return;
      let n = getComputedStyle(t),
        r = n.getPropertyValue(`--selection-color`).trim(),
        i = n.getPropertyValue(`--selection-background-color`).trim();
      je.render(() => {
        let t = document.querySelectorAll(`[data-framer-portal-id="${e}"]`);
        t.length !== 0 &&
          (r && t.forEach((e) => e.style.setProperty(LS, r)),
          i && t.forEach((e) => e.style.setProperty(RS, i)));
      });
    });
}
function $l(e) {
  return [
    `[data-framer-portal-id="${e}"] * ::selection {
    color: var(${LS});
    background-color: var(${RS});
}`,
  ];
}
function eu({ triggerId: e, children: t }) {
  return (
    r.useLayoutEffect(() => {
      e && Ql(e);
    }, [e]),
    t
  );
}
function tu(e) {
  return `${e?.x}-${e?.y}`;
}
function nu(e) {
  switch (e) {
    case `top`:
      return `bottom`;
    case `right`:
      return `left`;
    case `bottom`:
      return `top`;
    case `left`:
      return `right`;
    default:
      H(e);
  }
}
function ru(e, t, n, r = 0) {
  let i = Math.max(e, r);
  if (e < i) return i;
  let a = t + r;
  return i + a > n ? n - a : i;
}
function iu(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return t.y < 0 || t.y + t.height > n.height ? `y` : void 0;
    case `left`:
    case `right`:
      return t.x < 0 || t.x + t.width > n.width ? `x` : void 0;
    default:
      H(e);
  }
}
function au(e, t, n, r) {
  switch (iu(t, e, r)) {
    case `x`:
      return { placement: nu(t), x: n.x * -1, y: n.y };
    case `y`:
      return { placement: nu(t), x: n.x, y: n.y * -1 };
    default:
      return { placement: t, x: n.x, y: n.y };
  }
}
function ou(e, t, n, r, i, a, o) {
  let s = X.rebaseRectOnto(t, e, n, r),
    c = { x: s.x + i.x, y: s.y + i.y, width: t.width, height: t.height };
  if (!a) return [n, c];
  let { x: l, y: u, placement: d } = au(c, n, i, a),
    f = X.rebaseRectOnto(t, e, d, r);
  return [
    d,
    {
      x: ru(f.x + l, t.width, a.width, o),
      y: ru(f.y + u, t.height, a.height, o),
      width: t.width,
      height: t.height,
    },
  ];
}
function su(e, t, n) {
  return BS.containsPoint([t, ...n], e) ? t : e;
}
function cu(e) {
  return {
    constrainX: (t) => Math.min(Math.max(t, e.x + VS), e.x + e.width - VS),
    constrainY: (t) => Math.min(Math.max(t, e.y + VS), e.y + e.height - VS),
  };
}
function lu({ x: e, y: t }, n, r, { constrainX: i, constrainY: a }) {
  let [o, s, c, l] = X.points(r);
  switch (n) {
    case `left`: {
      let n = { x: i(e - HS), y: t };
      return [n, su(l, s, [n, c]), su(c, o, [n, l])];
    }
    case `right`: {
      let n = { x: i(e + HS), y: t };
      return [n, su(s, l, [n, o]), su(o, c, [n, s])];
    }
    case `top`: {
      let n = { x: e, y: a(t - HS) };
      return [n, su(s, o, [n, l]), su(l, c, [n, s])];
    }
    case `bottom`: {
      let n = { x: e, y: a(t + HS) };
      return [n, su(o, s, [n, c]), su(c, l, [n, o])];
    }
    default:
      H(n);
  }
}
function uu(e, t) {
  switch (e) {
    case `left`:
      return `${Math.min(t.y, 0)}px auto auto 0px`;
    case `right`:
      return `${Math.min(t.y, 0)}px 0px auto auto`;
    case `top`:
      return `0px auto auto ${Math.min(t.x, 0)}px`;
    case `bottom`:
      return `auto auto 0px ${Math.min(t.x, 0)}px`;
    default:
      H(e);
  }
}
function du(e, t, n, r, i) {
  let a = Math.min(i.x, r.x),
    o = Math.min(i.y, r.y),
    s = X.merge(r, i),
    c = lu({ x: e, y: t }, n, i, cu(r))
      .map((e) => `${e.x - a}px ${e.y - o}px`)
      .join(`, `);
  return {
    height: `${s.height}px`,
    width: `${s.width}px`,
    clipPath: `polygon(${c})`,
    inset: uu(n, X.delta(r, i)),
  };
}
function fu(e) {
  switch (e) {
    case `start`:
      return 0;
    case `center`:
      return 0.5;
    case `end`:
      return 1;
    default:
      H(e);
  }
}
function pu(e = `bottom`, t = `center`) {
  switch (e) {
    case `top`:
      return { originX: fu(t), originY: 1 };
    case `right`:
      return { originX: 0, originY: fu(t) };
    case `bottom`:
      return { originX: fu(t), originY: 0 };
    case `left`:
      return { originX: 1, originY: fu(t) };
    default:
      H(e);
  }
}
function mu(e) {
  let t = e.current,
    n = { position: `absolute`, scrolls: !1 };
  for (; t; ) {
    if (
      t?.tagName === `BODY` ||
      (getComputedStyle(t)?.position === `fixed` && (n.position = `fixed`),
      (t.scrollWidth > t.clientWidth || t.scrollHeight > t.clientHeight) && (n.scrolls = !0),
      n.scrolls && n.position === `fixed`)
    )
      return n;
    t = t.parentElement;
  }
  return n;
}
function hu(e) {
  return (je.read(e, !0), () => Ie(e));
}
function gu(e) {
  let t = 0,
    n = 0;
  return (r, i, a, o) => {
    e.current?.style &&
      ((t = o?.clientX ?? t),
      (n = o?.clientY ?? n),
      Object.assign(e.current.style, du(t, n, a, r, i)));
  };
}
function _u(e, t, n, r, i) {
  e.current &&
    Object.assign(e.current.style, {
      position: t,
      visibility: `visible`,
      left: (n?.x ?? 0) + r + `px`,
      top: (n?.y ?? 0) + i + `px`,
    });
}
function vu(e, t, n, { safeArea: i, onDismiss: a }) {
  let o = fa(() => new Set()),
    s = r.useContext(US),
    [c, l] = pe();
  return (
    r.useEffect(() => {
      if (c) {
        if (!t.current) return;
        ((t.current.style.pointerEvents = ``), s.add(t.current));
      } else {
        if (!t.current) return;
        ((t.current.style.pointerEvents = `none`), s.delete(t.current), l());
      }
    }, [c, l, t, s]),
    r.useEffect(() => {
      if (!i) {
        let e = (e) => {
          e.key === `Escape` && a();
        };
        return (q.addEventListener(`keyup`, e), () => q.removeEventListener(`keyup`, e));
      }
      let r;
      function s() {
        if (!(!r || o.size !== 0)) {
          for (let i of document.elementsFromPoint(r.x, r.y))
            if (i === e.current || i === t.current || i === n.current) return;
          a();
        }
      }
      function c(e) {
        ((r = e), je.read(s));
      }
      return (
        q.addEventListener(`mousemove`, c),
        () => {
          q.removeEventListener(`mousemove`, c);
        }
      );
    }, [a, i, e, n, t]),
    o
  );
}
function yu({
  placement: e,
  alignment: t,
  offset: n,
  collisionDetectionSize: r,
  collisionDetectionPadding: i,
}) {
  return (a, o) => ou(a, o, e, t, n, r, i);
}
function bu(e, t) {
  return fa(() => {
    let { originX: n, originY: r } = pu(e, t),
      i = { x: N(n), y: N(r) };
    return [
      i,
      (e) => {
        let n = pu(e, t);
        (i.x.set(n.originX), i.y.set(n.originY));
      },
    ];
  });
}
function xu(e, { x: t, y: n }) {
  if (!e || !_a(e) || !ga(e) || (!B(e.props.style) && !tt(e.props.style))) return null;
  let i = { ...e.props.style, originX: t, originY: n };
  return r.cloneElement(e, { style: i });
}
function Su(e, t) {
  if (t || tt(e)) {
    let e = document.querySelector(`#${GS}`) ?? document.querySelector(`#${WS}`);
    if (e) return e;
  }
  return (R(e) ? document.querySelector(e) : void 0) || document.body;
}
function Cu({
  alignment: e,
  placement: t,
  safeArea: n,
  offsetX: i,
  offsetY: a,
  anchorRef: o,
  className: s,
  children: c,
  portalSelector: l,
  zIndex: u,
  collisionDetection: f = !1,
  collisionDetectionPadding: p,
  onDismiss: m,
  ...h
}) {
  let g = r.useRef(null),
    _ = r.useRef(null),
    y = r.useRef(null),
    [b, x] = bu(t, e);
  r.useLayoutEffect(() => {
    if (!ys(o) || !y.current || !t || !e) return;
    let r = { x: i ?? 0, y: a ?? 0 },
      s,
      c = !1,
      l = !1,
      u,
      d,
      m,
      h,
      v,
      b = 0,
      S = 0,
      C = mu(o),
      w = C.position,
      T = y.current.getBoundingClientRect(),
      E = yu({
        placement: t,
        alignment: e,
        offset: r,
        collisionDetectionSize: f ? { width: q.innerWidth, height: q.innerHeight } : void 0,
        collisionDetectionPadding: p,
      }),
      D = () => {
        c || (_u(g, w, m, b, S), n && v(u, m, d, h), (h = void 0));
      },
      O = () => {
        ((v = gu(_)), h ? D() : _u(g, w, m, b, S), (l = !0));
      },
      k = () => {
        c || x(d);
      },
      ee = () => {
        if (!E || c) return;
        (w === `fixed` ? ((b = 0), (S = 0)) : ((b = q.scrollX), (S = q.scrollY)),
          (u = o.current.getBoundingClientRect()));
        let e = E(u, T);
        ((d = e[0]), (m = e[1]));
      };
    if ((ee(), k(), O(), C.scrolls && (s = hu(ee)), !n))
      return () => {
        (s?.(), (c = !0));
      };
    let te = (e) => {
        ((h = e), l && (je.read(ee, !1, !0), je.update(k, !1, !0), je.render(D, !1, !0)));
      },
      A = o.current;
    return (
      A.addEventListener(`mousemove`, te),
      () => {
        (A.removeEventListener(`mousemove`, te), s?.(), (c = !0));
      }
    );
  }, [n, t, e, i, a, o, f, p, x]);
  let S = vu(o, g, _, { safeArea: n, onDismiss: m }),
    C = d(db);
  return v.createPortal(
    te(_e.div, {
      ref: g,
      className: s,
      style: {
        top: 0,
        left: 0,
        visibility: `hidden`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,
        zIndex: u,
      },
      ...h,
      children: [
        n
          ? D(`div`, { ref: _, style: { position: `absolute` }, "data-safearea": !0 })
          : D(`div`, { style: { position: `fixed`, inset: 0 }, "aria-hidden": !0, onClick: m }),
        D(US.Provider, {
          value: S,
          children: D(Kl, {
            children: D(zS, {
              triggerId: o.current?.id ?? void 0,
              children: D(`div`, { ref: y, children: xu(c, b) }),
            }),
          }),
        }),
      ],
    }),
    Su(l, C)
  );
}
function wu(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : wu(e.parentElement, t)
      : null;
}
function Tu({ children: e }) {
  return D(dl, { children: e });
}
function Eu(e) {
  return A(function (t, n) {
    return D(Tu, { children: D(e, { ...t, ref: n }) });
  });
}
function Du(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return ku(e, t, o, s, a, c, l, i, r);
}
function Ou(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && Rl(t))
    try {
      let [i, a] = t.split(`#`, 2);
      V(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      V(o !== void 0, `A href must have a defined pathname.`);
      let { routeId: s, pathVariables: c, localeId: l } = ai(e.routes, o, void 0, r),
        u = e.getRoute(s);
      if (u)
        return {
          routeId: s,
          route: u,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, c),
          locale: l ? r?.find(({ id: e }) => e === l) : void 0,
        };
    } catch {}
}
function ku(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = tr(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function Au() {
  let e = d(YS),
    t = Nt()?.pathVariables;
  return e || t;
}
function ju(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(JS)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Mu() {
  let e = g.connection || g.mozConnection || g.webkitConnection || {},
    t = g.deviceMemory && g.deviceMemory > QS,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? $S : eC));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: ZS }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    let { id: n, preload: i } = e,
      a = rC.get(n);
    if (!a?.size || nC.has(n)) return;
    (++s, nC.add(n));
    let c = i()?.catch(() => {});
    (o.unobserve(t), tC.delete(t));
    for (let e of a) (o.unobserve(e), tC.delete(e));
    (a.clear(), rC.delete(n), await c, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = tC.get(e);
      if (!n || nC.has(n.id)) {
        (o.unobserve(e), tC.delete(e));
        continue;
      }
      let r = n.id,
        a = rC.get(r),
        l = rC.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (s >= i) continue;
        (a ? a.add(e) : rC.set(r, new Set([e])), setTimeout(c, XS, n, e));
      } else (a && a.delete(e), l <= 1 && rC.delete(r));
    }
  }
  return (e, t, n) => {
    if (!nC.has(n))
      return (
        tC.set(e, { id: n, preload: t }),
        o.observe(e),
        () => {
          (tC.delete(e), o.unobserve(e));
        }
      );
  };
}
function Nu(e, t) {
  let n = Rl(e),
    r = {
      href: e === `` || zl(e, n) ? e : `https://${e}`,
      target: Pu(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = Gn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function Pu(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Fu(e, t) {
  console.warn(
    ut(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function Iu(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return Fu(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return st(i) ? i.catch(Fu) : i;
  } catch (e) {
    Fu(e);
  }
}
function Lu(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Iu(o, r, n);
      st(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function Ru() {
  let e = yn();
  return o((t, n, r, i = []) => Lu(t, n, r, e, i), [e]);
}
function zu({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = yn();
  return o(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = Fl(r) ? r : Wl(r);
      if (!Fl(c))
        return ln(
          `published_site_click`,
          {
            ...s,
            href: o ? Bu(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (R(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (st(n) ? await n : n) ?? null;
        }
      }
      return ln(
        `published_site_click`,
        {
          ...s,
          href: o ? Bu(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, r, i, a]
  );
}
function Bu(e) {
  try {
    let t = new URL(e, q.document.baseURI);
    return t.origin === q.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function Vu(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function Hu(e, t, n) {
  return async (r) => {
    let i = Un(r),
      a = wu(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await Tn({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        c());
      return;
    }
    (r.preventDefault(), n(c));
  };
}
function Uu(e, t, n, r, i, a, o, s) {
  if (!n) return Nu(e, r);
  let c = Ou(t, e, s, o);
  if (!c) return Nu(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return Nu(e, r);
  let m = tr(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !ig,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = Pu(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = { pathVariables: f, locale: p },
    v = (e) => Vu(t, l, () => i(l, _, !1, !g), d, f, r.smoothScroll, e);
  return {
    href: m,
    target: h,
    onClick: Hu(m, r.trackLinkClick, v),
    navigate: v,
    "data-framer-page-link-current":
      (n && ju(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () => i(l, _, !0, !g),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
  };
}
function Wu(e, t, n) {
  let r = Gu(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (Ze(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (Ze(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function Gu(e, t) {
  let n = B(e) ? e : void 0,
    r = n && !et(n),
    i = t && !et(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function Ku(e, t, n) {
  if (!(t && Mn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: qu } : { ...i, onTap: r }) : e;
}
function qu(e) {
  let t = wu(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function Ju(e, t, n, r, i, a) {
  let o = Fl(e) ? e : Wl(e);
  if (!Fl(o)) return R(e) ? Nu(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (st(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash),
    v = tr(m, {
      currentRoutePath: s?.path,
      currentRoutePathLocalized: s?.pathLocalized,
      currentPathVariables: t.currentPathVariables,
      hash: l,
      pathVariables: g,
      hashVariables: _,
      relative: !1,
      preserveQueryParams: t.preserveQueryParams,
      onlyHash: r,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: i?.id,
    });
  return r ? v : (i?.slug ? `/${i.slug}` : ``) + v;
}
function Yu({ EditorBar: e, fast: t = !1 }) {
  let n = d(oC),
    r = m(sg, t ? lC : uC, lg),
    i = p_(),
    a = f(() => {
      let e = {},
        t;
      for (t in i)
        i.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = i[t]);
      return e;
    }, [i]);
  return !e || !n || !r
    ? null
    : D(cC, { children: D(w, { children: D(e, { framerSiteId: n, features: a }) }) });
}
function Xu({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = E(),
    i = E(),
    a = E(t),
    o = E(null);
  ((a.current = t),
    c(() => {
      e && ((r.current ??= new Set()), r.current.add(e), i.current?.(e));
    }, [e]));
  let [s] = p(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? new Set(),
      getCurrentRoutePath: () =>
        a.current ? Qu(a.current, a.current.currentRouteId, a.current.currentPathVariables) : ``,
      resolveRoute: (e) => (a.current ? Qu(a.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        i.current = e;
      },
      sendTrackingEvent: async (e) => {
        a.current && Zu(a.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: o,
  }));
  return D(dC.Provider, { value: s, children: n });
}
async function Zu(e, t) {
  if (!un(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    ln(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Qu(e, t, n) {
  let r = e.getRoute(t);
  return !r || !r.path ? `` : n ? Wn(r.path, n) : r.path;
}
function $u({ children: e, loadSnippetsModule: t }) {
  return D(SC.Provider, { value: t, children: e });
}
function ed() {
  return r.useContext(SC);
}
function td(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function nd(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (V(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (V(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      H(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await rd(a.createContextualFragment(e), r, i));
}
async function rd(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = id(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await rd(r, e, null)));
  }
}
function id(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return ad(r, t, n);
}
function ad(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function od(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = vC), (n = yC));
      break;
    case `bodyEnd`:
      ((t = bC), (n = xC));
      break;
    case `headStart`:
      ((t = mC), (n = hC));
      break;
    case `headEnd`:
      ((t = gC), (n = _C));
      break;
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function sd(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = td(e),
    s = t.nextSibling;
  for (; s && s !== n; ) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function cd(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = od(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = sd(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((ld(t, o), s)) {
      await nd(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = td(e.id),
      u = `${c}
${e.code}
${l}`,
      d = dd(e.id, n, r, i);
    d ? await nd(u, d, `afterend`) : await nd(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function ld(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t; ) {
    let e = n.nextSibling;
    (ud(n) && n.remove(), (n = e));
  }
}
function ud(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function dd(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = sd(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function fd() {
  let e = ed();
  return o(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(fC),
        o = a && a.dataset[pC] !== void 0;
      if (i && o) return;
      let { getSnippets: s, snippetsSorting: c } = await e.readMaybeAsync(),
        l = await s(t, n, r);
      for (let e in l) {
        let t = e,
          n = l[t],
          r = c[t];
        await cd(t, n, r);
      }
    },
    [e]
  );
}
function pd(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function md() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((CC = e.timeZone), (wC = e.locale));
}
function hd() {
  let [e, t] = r.useState(0);
  return [e, r.useCallback(() => t((e) => e + 1), [])];
}
function gd(e, t, n) {
  let r = e && document.getElementById(e);
  if (r) {
    Sd(r, t);
    return;
  }
  n || s.scrollTo(0, 0);
}
function _d(e) {
  let t = E([]);
  return (
    ne(() => {
      t.current?.length && (t.current.forEach((e) => e()), (t.current = []));
    }, [e]),
    o((e) => {
      t.current.push(e);
    }, [])
  );
}
function vd(e) {
  if (!e) return ng;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function yd() {
  let e = Mr(),
    t = E(void 0);
  return o(
    async (n, r, i, a = !0) => {
      let o = i !== void 0;
      t.current?.abort();
      let c = a ? new AbortController() : void 0;
      t.current = c;
      let l = c?.signal,
        u = Rt(l);
      if ((r.promise.finally(u), !o)) return ((t.current = void 0), n(l), r.promise);
      n(l);
      let d,
        f = new Promise((e, t) => {
          ((d = e), l?.addEventListener(`abort`, t));
        }).catch(ng);
      if ((e(f, i, c), await r.promise, l?.aborted)) return;
      let p = s.navigation?.transition;
      d();
      try {
        await p?.finished;
      } catch (e) {
        console.error(`Navigation transition failed`, e);
      }
      l?.aborted || L_();
    },
    [e]
  );
}
function bd({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: i,
  collectionUtils: a,
  routes: u,
  initialLocaleId: d,
  initialCollectionItemId: p,
  locales: m = bg,
  preserveQueryParams: h = !1,
  LayoutTemplate: g,
  EditorBar: _,
  siteCanonicalURL: v,
  adaptLayoutToTextDirection: y,
}) {
  (Zr(), Dr({ disabled: t, routeId: r, initialPathVariables: n, initialLocaleId: d }));
  let b = yr(),
    [x, S] = hd(),
    C = _d(x),
    w = yd(),
    T = Sr(`framer-route-change`),
    O = f(() => (!p_().synchronousNavigationOnDesktop || !Hn() ? re : (e) => e()), []),
    k = fd(),
    ee = E(!0),
    A = E(),
    j = E(r),
    M = E(n),
    ie = E(d),
    ae = ie.current,
    N = f(() => m.find(({ id: e }) => (ae ? e === ae : e === xg)) ?? null, [ae, m]),
    oe = N?.textDirection ?? `ltr`,
    se = y ? oe : `ltr`;
  ne(() => {
    y && document.documentElement.setAttribute(`dir`, oe);
  }, [oe, y]);
  let ce = Ar(),
    le = f(
      () => ({
        activeLocale: N,
        locales: m,
        setLocale: async (e) => {
          let t = T({ localized: !0 });
          await Tn({ priority: `user-blocking`, continueAfter: `paint` });
          let n;
          R(e) ? (n = e) : B(e) && (n = e.id);
          let r = m.find(({ id: e }) => e === xg),
            i = m.find(({ id: e }) => e === n);
          if (!i) return;
          let a = j.current,
            o = u[a];
          if (o)
            try {
              let e = await ce({
                currentLocale: N,
                nextLocale: i,
                route: o,
                routeId: a,
                defaultLocale: r,
                pathVariables: M.current,
                preserveQueryParams: h,
              });
              if (!e) return;
              let n = wr(s.history.state) ? s.history.state.paginationInfo : void 0,
                c = e.path;
              ((ee.current = !1),
                (M.current = e.pathVariables),
                (ie.current = i.id),
                w(
                  () => {
                    b(a, a, () => O(S));
                  },
                  t,
                  () => {
                    c &&
                      Er(
                        {
                          routeId: a,
                          pathVariables: e.pathVariables,
                          localeId: i.id,
                          paginationInfo: n,
                        },
                        c
                      );
                  },
                  !1
                ));
            } catch {}
        },
      }),
      [N, S, m, h, u, w, b, T, O, ce]
    ),
    ue = o(
      (e, t, n, r, i, a, o, s = !1, c) => {
        ee.current = !1;
        let l = j.current;
        if (
          ((j.current = e),
          (M.current = i),
          (ie.current = t),
          (A.current = r),
          C(() => {
            gd(n, s, a);
          }),
          a)
        ) {
          O(S);
          return;
        }
        w(
          (t) => {
            b(l, e, () => O(S), t);
          },
          o,
          c,
          !0
        );
      },
      [S, C, w, b, O]
    );
  Or(j, ue);
  let de = o(
      async (e, n, r, i, a) => {
        let o = u[e],
          c = mt(o?.page) ? o.page.getStatus() : void 0,
          l = c?.hasRendered,
          d = T({ cached: l, preloaded: l ? void 0 : c?.hasLoaded }),
          f = vd(a);
        if (
          (Tn({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(f),
          await Tn({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(h_)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let p = Lt(o, n),
          m = M.current,
          g = ie.current;
        if (pd({ routeId: j.current, pathVariables: m }, { routeId: e, pathVariables: r })) {
          d.ignore?.();
          let a = u[e];
          (s.history.state?.hash !== n &&
            !t &&
            a &&
            (f(),
            await Cr(e, a, {
              currentRoutePath: a.path,
              currentPathVariables: m,
              pathVariables: r,
              hash: n,
              localeId: g,
              preserveQueryParams: h,
              siteCanonicalURL: v,
              currentRoutePathLocalized: a.pathLocalized,
            })),
            gd(p, i, !1));
          return;
        }
        if (!o) return;
        let _ = u[j.current],
          y = () => {
            (f(),
              Cr(e, o, {
                currentRoutePath: _?.path,
                currentPathVariables: m,
                currentRoutePathLocalized: _?.pathLocalized,
                hash: n,
                pathVariables: r,
                localeId: g,
                preserveQueryParams: h,
                siteCanonicalURL: v,
              }));
          },
          b =
            $n(v) +
            tr(o, {
              currentRoutePath: _?.path,
              currentRoutePathLocalized: _?.pathLocalized,
              currentPathVariables: m,
              hash: n,
              pathVariables: r,
              localeId: g,
              preserveQueryParams: h,
              siteCanonicalURL: v,
              relative: !1,
            });
        ue(e, g, p, b, r, !1, d, i, t ? void 0 : y);
      },
      [u, ue, t, h, v, T]
    ),
    fe = kt(u),
    P = j.current,
    pe = A.current,
    me = M.current,
    he = u[P],
    ge = he?.path,
    F = TC(he, P, pe, me, N, p),
    _e = ee.current;
  c(() => {
    k(P, me ?? {}, le.activeLocale, _e);
  }, [k, P, me, le, _e]);
  let I = f(
    () => ({
      navigate: de,
      getRoute: fe,
      currentRouteId: P,
      currentPathVariables: me,
      routes: u,
      collectionUtils: a,
      preserveQueryParams: h,
      pageviewEventData: F,
      siteCanonicalURL: v,
      isInitialNavigation: _e,
    }),
    [de, fe, P, me, u, a, h, v, F, _e]
  );
  if (!he) throw Error(`Router cannot find route for ${P}`);
  let ve = !N || !he.includedLocales || he.includedLocales.includes(N.id),
    ye = ge && me ? Wn(ge, me) : ge,
    be = String(ae) + ye,
    L = fa(() => ({ ...e, display: `contents` }));
  return D(At, {
    api: I,
    children: D(W_.Provider, {
      value: le,
      children: D(G_.Provider, {
        value: se,
        children: D(wS, {
          children: D(Wr, {
            children: te(Xu, {
              currentRoutePath: ye,
              routerAPI: I,
              children: [
                _ && D(Yu, { EditorBar: _, fast: !0 }),
                D(lS, {
                  children: te(dl, {
                    children: [
                      te(xv, {
                        notFoundPage: i,
                        defaultPageStyle: e,
                        forceUpdateKey: x,
                        children: [
                          D(yv.Start, {}),
                          D(xd, {
                            LayoutTemplate: g,
                            webPageId: he?.abTestingVariantId ?? P,
                            style: e,
                            children: (t) =>
                              D(l, { children: ve ? ni(he.page, t ? L : e) : i && ni(i, e) }, be),
                          }),
                        ],
                      }),
                      _ && D(Yu, { EditorBar: _ }),
                      D(qr, {}),
                      D(yv.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function xd({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? D(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function Sd(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function Cd(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function wd(e) {
  return typeof e == `object` && !!e;
}
function Td(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!wd(r)) return;
    r = r[e];
  }
  return r;
}
function Ed(e) {
  return `${e.credentials}:${e.url}`;
}
function Dd(e) {
  return R(e) && !Number.isNaN(Number(e));
}
function Od(e, t) {
  switch (e) {
    case `string`:
      return R(t) || z(t);
    case `color`:
      return R(t);
    case `boolean`:
      return Qe(t);
    case `number`:
      return z(t) || Dd(t);
    case `link`:
    case `image`:
      return R(t) && zl(t, !1);
    default:
      return !1;
  }
}
function kd(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = Td(e.data, t.resultKeyPath);
  if (tt(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!Od(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function Ad(e, t) {
  if (Y.current() === Y.canvas) return !1;
  let n = Math.max(t * 1e3, DC);
  return Date.now() >= e + n;
}
function jd(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: i,
    routeId: a,
    framerSiteId: o,
    pathVariables: s,
    routes: c,
    collectionUtils: l,
    notFoundPage: u,
    isReducedMotion: d = !1,
    skipAnimations: f = !1,
    includeDataObserver: p = !1,
    localeId: m,
    locales: h,
    preserveQueryParams: g,
    EditorBar: _,
    defaultPageStyle: v,
    disableHistory: y,
    LayoutTemplate: b,
    siteCanonicalURL: x,
    adaptLayoutToTextDirection: S,
    loadSnippetsModule: C,
    initialCollectionItemId: w,
  } = e;
  return (
    r.useEffect(() => {
      n || Jv.start();
    }, []),
    n
      ? D(Fr, {
          value: i ?? `preview`,
          children: D(Me, {
            reducedMotion: f ? `always` : d ? `user` : `never`,
            skipAnimations: f,
            children: D(vn, {
              collectionUtils: l,
              children: D(zC, {
                children: D(oC.Provider, {
                  value: o,
                  children: D($u, {
                    loadSnippetsModule: C,
                    children: D(bd, {
                      initialRoute: a,
                      initialPathVariables: s,
                      initialLocaleId: m,
                      initialCollectionItemId: w,
                      routes: c,
                      collectionUtils: l,
                      notFoundPage: u,
                      locales: h,
                      defaultPageStyle: v ?? { minHeight: `100vh`, width: `auto` },
                      preserveQueryParams: g,
                      EditorBar: _,
                      disableHistory: y,
                      LayoutTemplate: b,
                      siteCanonicalURL: x,
                      adaptLayoutToTextDirection: S,
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : D(p ? _x : r.Fragment, {
          children: D(Mt, {
            routes: c,
            children: D(sx, { children: r.isValidElement(t) ? t : r.createElement(t, { key: a }) }),
          }),
        })
  );
}
function Md(e) {
  return {
    trace(...t) {
      return tb.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return tb.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return tb.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return tb.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return tb.getLogger(e)?.error(...t);
    },
    get enabled() {
      return tb.getLogger(e) !== void 0;
    },
  };
}
function Nd(e) {
  let t = e.next();
  return (V(t.done, `Generator must not yield`), t.value);
}
async function Pd(e, t = e.next()) {
  for (; !t.done; ) {
    let n = await t.value;
    t = e.next(n);
  }
  return t.value;
}
function Fd(e) {
  let t = e.next();
  return t.done ? t.value : Pd(e, t);
}
function* G(e) {
  let t = {},
    n = Object.keys(e),
    r = [];
  for (let i of n) {
    let n = e[i];
    if (at(n)) {
      let e = n.next();
      e.done
        ? (t[i] = e.value)
        : r.push(
            Pd(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function* Id(e) {
  let t = [],
    n = e.keys(),
    r = [];
  for (let i of n) {
    let n = e[i];
    if (at(n)) {
      let e = n.next();
      e.done
        ? (t[i] = e.value)
        : r.push(
            Pd(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function Ld(e) {
  return Bd(e) || Ud(e);
}
function Rd(e) {
  return $e(e) && e.every(B);
}
function zd(e) {
  return B(e) && Ze(e.read) && Ze(e.preload);
}
function Bd(e) {
  return Rd(e) || zd(e);
}
function Vd(e) {
  return B(e) && B(e.schema);
}
function Hd(e) {
  return B(e) && B(e.collectionByLocaleId);
}
function Ud(e) {
  return Vd(e) || Hd(e);
}
function Wd(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = bf(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Gd(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => Z.cast(e, t.definition)) };
  }
  return null;
}
function Kd(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function qd(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function Jd(e) {
  return qd(e)?.value ?? !1;
}
function Yd(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Xd(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function Zd(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Qd(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return it(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function $d(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ef(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function tf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function nf(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function rf(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function af(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function of(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function sf(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function cf(e) {
  return sf(e)?.value ?? null;
}
function lf(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = bf(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function uf(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = Z.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function df(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function ff(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function pf(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function mf(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function hf(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function gf(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function _f(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function vf(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function yf(e) {
  return vf(e)?.value ?? null;
}
function bf(e, t, n) {
  if (nt(e) || nt(t)) return (V(e === t), 0);
  switch (e.type) {
    case `array`:
      return (V(e.type === t.type), Wd(e, t, n));
    case `boolean`:
      return (V(e.type === t.type), Kd(e, t));
    case `color`:
      return (V(e.type === t.type), Yd(e, t));
    case `date`:
      return (V(e.type === t.type), Zd(e, t));
    case `enum`:
      return (V(e.type === t.type), $d(e, t));
    case `file`:
      return (V(e.type === t.type), tf(e, t));
    case `link`:
      return (V(e.type === t.type), rf(e, t));
    case `number`:
      return (V(e.type === t.type), of(e, t));
    case `object`:
      return (V(e.type === t.type), lf(e, t, n));
    case `responsiveimage`:
      return (V(e.type === t.type), df(e, t));
    case `richtext`:
      return (V(e.type === t.type), pf(e, t));
    case `vectorsetitem`:
      return (V(e.type === t.type), hf(e, t));
    case `string`:
      return (V(e.type === t.type), _f(e, t, n));
    default:
      H(e);
  }
}
async function xf(e, t) {
  return zd(e) ? (await e.preload(t), e.read(t)) : e;
}
function Sf(e) {
  if (!Ud(e) || !e.id) return;
  let t = UC.get(e.id);
  if (!t) return (UC.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function Cf(e) {
  let t = Sf(e);
  if (t) return t;
  let n = WC.get(e);
  if (n) return n;
  let r = `${GC}${Math.random().toString(16).slice(2)}`;
  return (WC.set(e, r), r);
}
function wf(e, t) {
  if (Bd(e)) {
    let n = Cf(e) + (t?.id ?? xg),
      r = KC.get(n);
    if (r) return r;
    let i = new HC(e, t);
    return (KC.set(n, i), i);
  }
  if (Vd(e)) return e;
  if (Hd(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  H(e, `Unsupported collection type`);
}
function Tf() {
  return 25;
}
function Ef() {
  return 12500;
}
function Df(e) {
  return e;
}
function Of(e) {
  return e;
}
function kf(e) {
  return B(e) && Ze(e.getHash);
}
function K(e, ...t) {
  return Of(
    `${e}(${t.map((e) => (V(!(e instanceof tw), `Pass CollectionMetadata.id instead`), V(!(e instanceof iw), `Pass FieldMetadata.id instead`), V(!(e instanceof nw), `Pass IndexMetadata.id instead`), V(!(e instanceof ZC), `Pass RelationalNode.group.id instead`), V(!(e instanceof JC), `Pass Group.id instead`), kf(e) ? e.getHash() : JSON.stringify(e))).join(`, `)})`
  );
}
function Af(e, t) {
  return { collectionId: Cf(e), pointer: t };
}
function jf(e) {
  return B(e) && R(e.collectionId);
}
function Mf(e, t) {
  return { collectionId: Cf(e), pointer: t };
}
function Nf(e) {
  return B(e) && R(e.collectionId);
}
function Pf(e, t) {
  let n = new Map();
  function r(e) {
    if (B(e))
      if (e.type === `Collection` && Ld(e.data)) {
        let r = wf(e.data, t),
          i = Cf(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if ($e(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function Ff(e) {
  return e;
}
function If(e) {
  return e;
}
function Lf(e) {
  return e;
}
function Rf(e) {
  return Array(e).fill({ type: `All` });
}
function zf(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function Bf(e) {
  let t = new Set();
  if (!e) return t;
  zf(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (zf(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function Vf(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) Vf(n, t);
      return;
    case `object`:
      for (let n in e.value) Vf(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function Hf(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function Uf(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Wf(e) {
  return `${e.functionName}(${e.arguments.map((e) => Yf(e)).join(`, `)})`;
}
function Gf(e) {
  let t = `CASE`;
  e.value && (t += ` ${Yf(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Yf(n.when)} THEN ${Yf(n.then)}`;
  return (e.else && (t += ` ELSE ${Yf(e.else)}`), (t += ` END`), t);
}
function Kf(e) {
  let t = Yf(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function qf(e) {
  let t = Yf(e.left),
    n = Yf(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function Jf(e) {
  return `CAST(${Yf(e.value)} as ${e.dataType})`;
}
function Yf(e) {
  switch (e.type) {
    case `Identifier`:
      return Hf(e);
    case `LiteralValue`:
      return Uf(e);
    case `FunctionCall`:
      return Wf(e);
    case `Case`:
      return Gf(e);
    case `UnaryOperation`:
      return Kf(e);
    case `BinaryOperation`:
      return qf(e);
    case `TypeCast`:
      return Jf(e);
    case `Select`:
      return `${ep(e)}`;
    default:
      H(e);
  }
}
function Xf(e) {
  return Vd(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function Zf(e) {
  let t = `${Qf(e.left)} LEFT JOIN ${Qf(e.right)}`;
  return (e.constraint && (t += ` ON ${Yf(e.constraint)}`), t);
}
function Qf(e) {
  switch (e.type) {
    case `Collection`:
      return Xf(e);
    case `LeftJoin`:
      return Zf(e);
    default:
      H(e);
  }
}
function $f(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `
${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `
	${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function ep(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = Yf(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${Qf(e.from)}`),
    e.where && (t += ` WHERE ${Yf(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${Yf(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Yf(e.limit)}`),
    e.offset && (t += ` OFFSET ${Yf(e.offset)}`),
    $f(t)
  );
}
function tp(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(tt(e) || B(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function np(e) {
  let t = E(e);
  return (
    h(() => {
      t.current = e;
    }, [e]),
    Rr((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function rp(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function ip() {
  return new Set();
}
function ap(e) {
  let t = fa(ip),
    n = fa(ip);
  return (
    As(() => () => rp(n, t)),
    c(() => () => rp(n, t), []),
    c(() => {
      rp(n, t);
    }, [e]),
    E({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function op(e, t, n) {
  return r.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function sp(e) {
  for (let [t, n] of Object.entries(e)) if (q.matchMedia(n).matches) return t;
}
function cp(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && q.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function lp(e, t, n = !0) {
  let r = d(ix),
    i = lo(),
    a = ca(),
    s = Rn() && (!i || a),
    l = E(s ? (sp(t) ?? e) : e),
    u = E(n && r ? e : l.current),
    f = Ro(),
    p = ce(),
    m = o(
      (e) => {
        if (e !== l.current || e !== u.current) {
          let t = function () {
            ((l.current = u.current = e),
              re(() => {
                f();
              }));
          };
          i
            ? t()
            : p(() => {
                t();
              });
        }
      },
      [p, f, i]
    );
  return (
    ub(() => {
      if (i) {
        if (a) {
          m(sp(t) ?? e);
          return;
        }
        m(e);
      }
    }, [e, a, i, t, m]),
    ub(() => {
      !n || r !== !0 || m(l.current);
    }, []),
    c(() => {
      if (!s || a) return;
      let e = [];
      for (let [n, r] of Object.entries(t)) {
        let t = q.matchMedia(r),
          i = (e) => {
            e.matches && m(n);
          };
        (up(t, i), e.push([t, i]));
      }
      return () => e.forEach(([e, t]) => dp(e, t));
    }, [a, t, m, s]),
    [l.current, u.current]
  );
}
function up(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function dp(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function fp(e) {
  setTimeout(e, 1);
}
function pp(e) {
  let t = new Set(),
    n = cp(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (mp(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (ag ? q.requestIdleCallback : fp)(() => {
    document.querySelector(pT)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (mp(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    hp(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function mp(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function hp(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function gp() {
  let e = Nt(),
    { activeLocale: t } = zr(),
    n = f(
      () =>
        tr(e, {
          currentRoutePath: e?.path,
          currentRoutePathLocalized: e?.pathLocalized,
          currentPathVariables: e?.pathVariables,
          preserveQueryParams: !1,
          relative: !1,
          siteCanonicalURL: void 0,
          localeId: t?.id,
        }),
      [e, t?.id]
    );
  return r.useCallback(
    (e) => {
      if (!e) return;
      let t = `${n}-${e}`,
        r = mT.get(t);
      if (r) return r;
      let i = C();
      return (mT.set(t, i), i);
    },
    [n]
  );
}
function _p(e, t) {
  e !== !1 &&
    je.render(() => {
      let e = document.documentElement.style;
      t ? e.setProperty(`overflow`, `hidden`) : e.removeProperty(`overflow`);
    });
}
function vp({ blockDocumentScrolling: e = !0, dismissWithEsc: t = !1 } = {}) {
  let [n, i] = r.useState(!1),
    a = r.useCallback(
      async (t) => {
        (await Tn({ priority: `user-blocking`, continueAfter: `paint` }), re(() => i(t)), _p(e, t));
      },
      [e]
    );
  return (
    r.useEffect(
      () => () => {
        Tn({ priority: `user-blocking`, continueAfter: `paint` }).then(() => {
          _p(e, !1);
        });
      },
      [e]
    ),
    r.useEffect(() => {
      if (!t) return;
      let e = (e) => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), a(!1));
      };
      return (q.addEventListener(`keydown`, e), () => q.removeEventListener(`keydown`, e));
    }, [t, a]),
    [n, a]
  );
}
function yp(e) {
  return B(e) && hT in e && e.page !== void 0;
}
function bp(e, t) {
  return `${e}-${t}`;
}
function xp(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (V(r !== void 0, `nextVariant should be defined`), r);
}
function Sp(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function Cp(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function wp(e, t) {
  return t[e] || `framer-v-${e}`;
}
function Tp(e, t, n) {
  return e && n.has(e) ? e : t;
}
function Ep() {
  let e = E(),
    t = E(),
    n = o(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    c(
      () => () => {
        n();
      },
      [n]
    ),
    o(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function Dp() {
  let e = E(),
    t = E(!1),
    n = E(),
    r = d(Vb);
  return (
    c(
      () => () => {
        (e.current?.(), (n.current = void 0), (e.current = void 0));
      },
      []
    ),
    o(
      (i, a) => {
        if (!a?.current || t.current) {
          i();
          return;
        }
        if (((n.current = i), e.current)) return;
        let o = !1;
        e.current = Cs(r, `undefined`, a.current, null, (e) => {
          ((t.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), t.current && n.current?.());
              })));
        });
      },
      [r]
    )
  );
}
function Op(e) {
  let t = Ep(),
    n = Dp();
  return o(
    (r, i = !1) => {
      if (ig) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function kp() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (vT = () => {
        (e(), (t = void 0));
      }));
  });
}
function Ap(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (_T = kp()));
}
function jp() {
  (performance.mark(`click-received-listener`), (_T = void 0), vT?.(), (vT = void 0));
}
function Mp(e = !1) {
  c(() => {
    e &&
      (document.addEventListener(`pointerup`, Ap, !0),
      document.__proto__.addEventListener.call(document, `click`, jp, !0));
  }, [e]);
}
function Np({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: s = {},
  ref: c,
}) {
  let l = Ro(),
    u = Ll(),
    d = fa(() => new Set(i));
  Mp(p_().yieldOnTap);
  let p = Op(c),
    m = E({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: Tp(e, t, d),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    h = o((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = m.current,
        o = Tp(e, a, d),
        s = Cp(i?.[o], t, n, !1, r);
      return [o, s ? bp(o, s) : void 0];
    }, []),
    g = o(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = h(r);
        if (o === e && s === t) return;
        (a && (m.current.isError = !1),
          (m.current.baseVariant = o || n),
          (m.current.gestureVariant = s));
        let c = p_().yieldOnTap && m.current.isPressedHasUpdated;
        (c &&
          _T &&
          (performance.mark(`wait-for-tap-start`),
          await _T,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await Tn({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: u,
          isPressed: d,
          isHoveredHasUpdated: f,
          isPressedHasUpdated: g,
        } = m.current;
        if (u || f || d || g) {
          re(l);
          return;
        }
        p(() => re(l), i);
      },
      [h, l, p]
    ),
    _ = o(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        let r = t !== m.current.isPressed,
          i = e !== m.current.isHovered;
        (e !== void 0 && (m.current.isHovered = e),
          t !== void 0 && (m.current.isPressed = t),
          n !== void 0 && (m.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = m.current;
        ((m.current.isPressedHasUpdated = r),
          (m.current.isHoveredHasUpdated = i),
          g(a, o, s, a, !1));
      },
      [g]
    ),
    v = o(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = m.current,
          o = e === gT ? xp(r || [], i || n) : e;
        g(i, a, n, o, t, !0);
      },
      [g]
    ),
    y = o(() => {
      let { baseVariant: e } = m.current;
      ((m.current.loadedBaseVariant[e] = !0), p(() => re(l), !0));
    }, [l, p]);
  if (e !== m.current.lastVariant) {
    let [t, n] = h(e);
    ((m.current.lastVariant = t),
      (t !== m.current.baseVariant || n !== m.current.gestureVariant) &&
        ((m.current.baseVariant = t), (m.current.gestureVariant = n)));
  }
  let {
      baseVariant: b,
      gestureVariant: x,
      defaultVariant: S,
      enabledGestures: C,
      isHovered: w,
      isPressed: T,
      isError: D,
      loadedBaseVariant: O,
    } = m.current,
    k = op(m.current.baseVariant, m.current.gestureVariant, a);
  return f(() => {
    let e = [];
    b !== S && e.push(b);
    let t = C?.[b]?.loading,
      n = !D && !u && !!t && !O[b],
      r = n ? bp(b, `loading`) : x;
    r && e.push(r);
    let i = C?.[b],
      a = { onMouseEnter: () => _({ isHovered: !0 }), onMouseLeave: () => _({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => _({ isPressed: !0 }),
          onTapCancel: () => _({ isPressed: !1 }),
          onTap: () => _({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: b,
        gestureVariant: r,
        isLoading: n,
        transition: Sp(m.current.transitions, b),
        setVariant: v,
        setGestureState: _,
        clearLoadingGesture: y,
        addVariantProps: k,
        gestureHandlers: a,
        classNames: xc(wp(b, s), Cp(i, w, T, n, D)),
      }
    );
  }, [b, x, w, T, O, k, v, S, C, _, y, s]);
}
function Pp(e, { scopeId: t, nodeId: n, override: i, inComponentSlot: a }) {
  if (!hl()) return i(e);
  let o = Fp(e, i),
    s = !1;
  function c(r, i) {
    let c = vl(),
      { disableCustomCode: l } = p_();
    if (l) return D(e, { ...r, ref: i });
    if (El(t, c?.scopeId, c?.level, a ?? !1))
      return o.status === `success`
        ? D(B_.Provider, {
            value: n,
            children: D(gl, {
              getErrorMessage: Cl.bind(null, t, n),
              fallback: D(e, { ...r, ref: i }),
              children: D(o.Component, { ...r, ref: i }),
            }),
          })
        : ((s ||= (ml(o.error), ml(Cl(t, n)), pl(o.error), !0)), D(e, { ...r, ref: i }));
    if (o.status === `success`)
      return D(B_.Provider, { value: n, children: D(o.Component, { ...r, ref: i }) });
    throw o.error;
  }
  return r.forwardRef(c);
}
function Fp(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function Ip(e, t, n) {
  let r = [],
    i = Kc(e, t, (e) => r.unshift(e, e));
  if (n) {
    let e = i[i.length - 1];
    if (!z(e)) return xT;
    (i.push(e + 1), r.push(-1));
  }
  let a = i[0];
  return z(a)
    ? a <= 1
      ? { inputRange: i, outputRange: r }
      : { inputRange: [0, Math.max(a - 1, 0), ...i], outputRange: [-1, -1, ...r] }
    : xT;
}
function Lp(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
function Rp(e, t) {
  let n = t === `normal` ? `Regular` : `Italic`;
  return e === 400 ? n : t === `normal` ? `${AT[e]}` : `${AT[e]} ${n}`;
}
function zp() {
  return s === void 0 ? {} : MT || ((MT = Bp()), MT);
}
function Bp() {
  let e = s.location,
    t = s?.bootstrap?.services;
  if (t) return t;
  let n;
  try {
    if (((n = s.top.location.origin), (t = s.top?.bootstrap?.services), t)) return t;
  } catch {}
  if (n && n !== e.origin) throw Error(`Unexpectedly embedded by ${n} (expected ${e.origin})`);
  if (e.origin.endsWith(`framer.com`) || e.origin.endsWith(`framer.dev`))
    throw Error(`ServiceMap data was not provided in document`);
  try {
    let n =
      new URLSearchParams(e.search).get(`services`) ||
      new URLSearchParams(e.hash.substring(1)).get(`services`);
    n && (t = JSON.parse(n));
  } catch {}
  if (t && typeof t == `object` && t.api) return t;
  throw Error(`ServiceMap requested but not available`);
}
function Vp(e) {
  return e.key + e.extension;
}
function Hp(e) {
  return `${zp().userContent}/assets/${e}`;
}
function Up(e) {
  return Hp(Vp(e));
}
function Wp(e, t) {
  return t ? `${e} ${NT}` : e;
}
function Gp(e, t) {
  switch (t) {
    case `custom`:
      throw Error(`Custom fonts are not supported`);
    default:
      return Wp(e.name, e.isVariable);
  }
}
function Kp(e) {
  return !!(e && Array.isArray(e));
}
function qp(e) {
  if (!e || !Array.isArray(e)) return;
  let t = [];
  for (let n of e)
    Yp(n) &&
      t.push({
        tag: n.tag,
        name: n.name,
        minValue: n.minValue,
        maxValue: n.maxValue,
        defaultValue: n.defaultValue,
      });
  return t;
}
function Jp(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
  );
}
function Yp(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`name` in e && typeof e.name != `string`) ||
    !(`minValue` in e) ||
    typeof e.minValue != `number` ||
    !(`maxValue` in e) ||
    typeof e.maxValue != `number` ||
    !(`defaultValue` in e) ||
    typeof e.defaultValue != `number`
  );
}
function Xp(e) {
  return IT[Qp(e)];
}
function Zp(e, t) {
  let n = e?.find((e) => e.tag === `wght`)?.defaultValue;
  return n !== void 0 && n >= 1 && n <= 1e3 ? n : (t ?? Xp(`variable`) ?? 500);
}
function Qp(e) {
  return e.toLowerCase().replace(/\s+/gu, `-`);
}
function $p(e) {
  return (
    (e = e.toLowerCase()),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
  );
}
function em(e, t) {
  return { ...tm(e, t), ...nm(e, t) };
}
function tm(e, t) {
  if (t.length === 0)
    return { variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0 };
  let { weight: n, style: r } = e,
    i = new Map(),
    a = new Map();
  for (let r of t)
    r.isVariable === e.isVariable &&
      (i.set(`${r.weight}-${r.style}`, r),
      !(r.weight <= n) && (a.has(r.style) || a.set(r.style, r)));
  let o = a.get(r),
    s = a.get(`italic`),
    c = e.weight;
  c <= 300
    ? ((o = i.get(`400-${r}`) ?? o), (s = i.get(`400-italic`) ?? s))
    : c <= 500
      ? ((o = i.get(`700-${r}`) ?? o), (s = i.get(`700-italic`) ?? s))
      : ((o = i.get(`900-${r}`) ?? o), (s = i.get(`900-italic`) ?? s));
  let l = i.get(`${n}-italic`);
  return { variantBold: o, variantItalic: l, variantBoldItalic: s };
}
function nm(e, t) {
  if (t.length === 0) return { variantVariable: void 0, variantVariableItalic: void 0 };
  let n, r, i, a;
  for (let o of t) {
    if (!o.isVariable) continue;
    let t = o.weight === e.weight,
      s = o.weight === 400;
    o.style === `normal`
      ? t
        ? (n = o)
        : s
          ? (i = o)
          : (i ||= o)
      : o.style === `italic` && (t ? (r = o) : s ? (a = o) : (a ||= o));
  }
  return { variantVariable: n ?? i, variantVariableItalic: r ?? a };
}
function rm(e) {
  return !!e.variationAxes;
}
function im(e) {
  return am(e) || om(e);
}
function am(e) {
  return e.startsWith(zT);
}
function om(e) {
  return e.startsWith(RT);
}
function sm(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r) {
      if (r.owner !== t.owner && r.file === t.file)
        return { existingFont: r, index: n, projectDuplicate: !0 };
      if (r && r.selector === t.selector)
        return { existingFont: r, index: n, projectDuplicate: !1 };
    }
  }
}
function cm(e) {
  let { font: t } = e,
    n = t.fontFamily,
    r = Array.isArray(t.variationAxes);
  if (r && n.toLowerCase().includes(`variable`)) return n;
  let i = r ? NT : t.fontSubFamily.trim();
  return i === `` ? n : `${n} ${i}`;
}
function lm({ fontFamily: e, fontSubFamily: t, variationAxes: n, faceDescriptors: r }) {
  let i = t.trim() || `Regular`,
    a = i.toLocaleLowerCase().includes(`variable`),
    o = qp(n) && !a ? `Variable ${i}` : i,
    s = `normal`,
    c = 400;
  return (
    r && ((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
    { family: e, variant: o, weight: c, style: s }
  );
}
function um(e) {
  if (!(!e.weight || !e.style))
    return { weight: e.weight, style: e.style, isVariable: rm(e), selector: e.selector };
}
function dm(e) {
  let t = e.fonts.map((e) => um(e)).filter((e) => e !== void 0);
  for (let n of e.fonts) {
    let e = um(n);
    if (!e) continue;
    let r = em(e, t);
    ((n.selectorVariable = r.variantVariable?.selector),
      (n.selectorVariableItalic = r.variantVariableItalic?.selector),
      (n.selectorBold = r.variantBold?.selector),
      (n.selectorBoldItalic = r.variantBoldItalic?.selector),
      (n.selectorItalic = r.variantItalic?.selector));
  }
}
function fm(e) {
  return e.ownerTypes.includes(`team`) ? `team` : `project`;
}
function pm(e, t, n) {
  let r = e.get(t);
  r || ((r = new Map()), e.set(t, r));
  let i = r.get(n);
  return (i || ((i = { fonts: [] }), r.set(n, i)), i);
}
function mm(e, t) {
  return Array.from(e.entries())
    .sort(([e], [t]) => e.localeCompare(t))
    .map(([e, n]) => ({
      family: e,
      variants: Array.from(n.entries())
        .sort(([e], [t]) => e.localeCompare(t))
        .map(([, e]) => ({
          fonts: e.fonts.map((e) => ({
            ...e,
            selected:
              e.font.assetKey && e.font.owner ? t.has(`${e.font.assetKey}:${e.font.owner}`) : !1,
          })),
        })),
    }));
}
async function hm(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-FGWL63I4.CgGyHVDp.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-NODQXKXY.CjCmvCKY.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
async function gm(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-H6ASLDWC.C2Ym7oQj.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-N6VWZXGT.CuFl42Lb.mjs`)).default;
    case `framer`:
      return (await import(`./framer-font-6VJIZ2IU.BV4yRwNx.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
function _m(e) {
  return e
    .split(`,`)
    .map((e) => e.trim().toLowerCase())
    .filter(vm);
}
function vm(e) {
  return VT.includes(e);
}
function ym(e) {
  let t = {
      serif: `serif`,
      sans: `sans-serif`,
      slab: `slab`,
      display: `display`,
      handwritten: `handwriting`,
      script: `handwriting`,
    },
    n = _m(e)[0];
  return n && t[n];
}
function bm(e) {
  let t = {
    serif: `serif`,
    "sans-serif": `sans-serif`,
    display: `display`,
    handwriting: `handwriting`,
    monospace: `monospace`,
  };
  if (e) return t[e];
}
function xm(e, t) {
  return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
function Sm(e, t, n, r) {
  return `${e}-${t}-${n}-${r}`;
}
function Cm(e, t, n) {
  return `${e}-${t}-${n}`;
}
async function wm(e, t, n = 0) {
  let { family: r, url: i, stretch: a, unicodeRange: o } = e,
    s = e.weight,
    c = e.style || `normal`,
    l = Sm(r, c, s, i);
  if (!rE.has(l) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: R(s) ? s : s?.toString(),
        style: c,
        stretch: a,
        unicodeRange: o,
      }),
      d = u
        .load()
        .then(() => (t.fonts.add(u), aE.set(l, { fontFace: u, doc: t }), Tm(r, c, s)))
        .catch((l) => {
          if (l.name !== `NetworkError`) throw l;
          if (n < tE) return wm(e, t, n + 1);
          throw new nE(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: s, url: i, stretch: a, unicodeRange: o })}`
          );
        });
    rE.set(l, d);
  }
  await rE.get(l);
}
async function Tm(e, t, n) {
  let r = Cm(e, t, n);
  if (!iE.has(r)) {
    let i = new $T.default(e, { style: t, weight: n }).load(null, eE);
    iE.set(r, i);
  }
  try {
    await iE.get(r);
  } catch {
    throw new nE(
      `Failed to check if font is ready (${eE}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`
    );
  }
}
function Em(e) {
  let t = e.style || `normal`,
    { family: n, url: r, weight: i } = e,
    a = Sm(n, t, i, r),
    o = aE.get(a);
  (o && (o.doc.fonts.delete(o.fontFace), aE.delete(a)), rE.delete(a), iE.delete(Cm(n, t, i)));
}
function Dm(e) {
  try {
    if (e === `framer`) return Om(sE) ? sE : void 0;
    {
      let t = (async () => {
        switch (e) {
          case `google`:
            return (await import(`./google-NDSGZUS3.dOlWbCKa.mjs`)).default;
          case `fontshare`:
            return (await import(`./fontshare-32OC4HMY.DwUZJPwH.mjs`)).default;
          default:
            H(e);
        }
      })();
      return Om(t) ? t : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function Om(e) {
  return B(e) && Object.values(e).every(Am);
}
function km(e) {
  return B(e) && R(e.tag);
}
function Am(e) {
  return Array.isArray(e) && e.every(km);
}
function jm(e, t) {
  c(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (s.addEventListener(`keyup`, n), () => s.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function Mm(e, t, n, r) {
  let i = s.innerHeight - r,
    a = Math.min(s.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function Nm(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new s.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function Pm() {
  return document.getElementById(GS) ?? document.getElementById(WS) ?? document.body;
}
function Fm(e, t) {
  return z(e) ? e : (t ?? 0);
}
function Im(e) {
  return Fm(e?.paddingTop, e?.padding) + Fm(e?.paddingBottom, e?.padding);
}
function Lm(e) {
  return Fm(e?.paddingLeft, e?.padding) + Fm(e?.paddingRight, e?.padding);
}
function Rm(e, t) {
  if (!e || !t || !t.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - Lm(e)}px)`,
      srcSet: go(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function zm(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in uE)) continue;
    let n = uE[t],
      r = e[t];
    if (!(!z(n) || !z(r)) && n !== r) return !0;
  }
  return !1;
}
function Bm(e) {
  let t = be.get(e.current);
  if (!t) return !1;
  if (zm(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (zm(e.latestValues)) return !0;
  return !1;
}
function Vm(e) {
  return A(function ({ lightbox: t, lightboxClassName: n, onClick: r, ...i }, a) {
    let s = d(we),
      u = d(yT),
      m = !!u,
      h = E(null),
      g = a ?? h,
      _ = E(),
      v = f(() => Rm(t, i.background), [t, i.background]),
      [x, S] = p(!1),
      [C, w] = p(),
      O = o(() => {
        if (t) {
          if (x) {
            re(() => {
              S(!0);
            });
            return;
          }
          je.read(() => {
            if (!g.current) return;
            let e = getComputedStyle(g.current),
              n =
                g.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(g.current, `::after`)
                  : void 0,
              r = g.current.offsetWidth ?? 1,
              i = g.current.offsetHeight ?? 1,
              a = Bm(g) || m ? { duration: 0 } : t.transition;
            re(() => {
              (w({
                borderRadius: e.borderRadius,
                aspectRatio: r / (i || 1),
                borderTop: n?.borderTopWidth,
                borderRight: n?.borderRightWidth,
                borderBottom: n?.borderBottomWidth,
                borderLeft: n?.borderLeftWidth,
                borderStyle: n?.borderStyle,
                borderColor: n?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                S(!0),
                u?.stop());
            });
          });
        }
      }, [t, x, g, u?.stop, m]),
      k = C?.aspectRatio ?? 1,
      ee = np(() => {
        if (!t || !v || !v.src) return;
        let e = _.current?.[v.src];
        if (e) return e;
        let n = Mm(k, t.maxWidth, Lm(t), Im(t)),
          r = Nm(v, { width: n, height: n * k });
        return ((_.current = { [v.src]: r }), r);
      }),
      A = o(
        async (e) => {
          (r?.(e), !(x || !t || !v) && (await ee(), O()));
        },
        [r, O, x, v, t, ee]
      ),
      ne = o((e) => {
        (e?.stopPropagation(),
          re(() => {
            S(!1);
          }));
      }, []);
    (jm(x, ne),
      c(() => {
        if (!t) return;
        let e;
        function n() {
          e = setTimeout(() => {
            ee();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = g.current;
        return (
          i?.addEventListener(`mouseenter`, n),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, ee),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, n),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, ee));
          }
        );
      }, [ee, g, t]));
    let j = y(),
      M = C?.transition ?? i.transition ?? s.transition,
      ie = C?.borderRadius,
      ae = C?.imageRendering,
      N = C?.filter,
      oe = C?.borderTop,
      se = C?.borderRight,
      ce = C?.borderBottom,
      le = C?.borderLeft,
      ue = C?.borderStyle,
      de = C?.borderColor,
      fe = !!(oe || se || ce || le || ue || de),
      P = fe
        ? {
            "--border-top-width": oe,
            "--border-right-width": se,
            "--border-bottom-width": ce,
            "--border-left-width": le,
            "--border-style": ue,
            "--border-color": de,
          }
        : void 0,
      pe = { [ES]: i.id },
      me = Fm(t?.paddingTop, t?.padding),
      he = Fm(t?.paddingBottom, t?.padding),
      ge = Fm(t?.paddingLeft, t?.padding),
      F = Fm(t?.paddingRight, t?.padding),
      I = C?.borderRadius ? { ...i.style, borderRadius: C.borderRadius } : i.style,
      ve = x ? (i.layoutDependency ? `${i.layoutDependency}-open` : `open`) : i.layoutDependency,
      ye = m && x ? void 0 : (i.layoutId ?? (t ? j : void 0));
    return te(b, {
      children: [
        D(e, {
          ...i,
          style: I,
          onClick: A,
          layoutId: ye,
          ref: g,
          layoutDependency: ve,
          transition: M,
        }),
        D(Le, {
          onExitComplete: () => {
            re(() => {
              (w(void 0), u?.start());
            });
          },
          children:
            x &&
            t &&
            v &&
            D(
              l,
              {
                children: T(
                  te(b, {
                    children: [
                      D(_e.div, {
                        ...pe,
                        className: n,
                        onClick: ne,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: t.zIndex,
                          backgroundColor: t.backdrop ?? `transparent`,
                        },
                        transition: M,
                        initial: dE,
                        animate: fE,
                        exit: dE,
                      }),
                      D(_e.div, {
                        ...pe,
                        className: n,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${me}px ${F}px ${he}px ${ge}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: t.zIndex,
                        },
                        children: D(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: k,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: t.maxWidth,
                          },
                          children: D(_e.div, {
                            layoutId: ye,
                            transition: M,
                            onClick: O,
                            className: `framer-lightbox-container`,
                            "data-border": fe,
                            style: {
                              aspectRatio: k,
                              borderRadius: ie,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: ae,
                              filter: N,
                              ...P,
                            },
                            children: D(To, { image: v, alt: v.alt, draggable: i.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  Pm()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function Hm(e, t) {
  return hE && !t
    ? Document.parseHTMLUnsafe(e)
    : ((mE ??= new DOMParser()), mE.parseFromString(e, t ?? `text/html`));
}
function Um(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function Wm(e, t, n, r) {
  return e.replace(gE, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = Hl(u.replace(/&amp;/gu, `&`));
    if (!d || !d.target) return e;
    let f = t(d.target);
    if (!yp(f) || !yp(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Lt(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = Wl(u);
    if (!_ || R(_)) return e;
    ju(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(JS, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = Yn(m, v)), i + o + `"${Um(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function Gm(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Km(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function qm(e, t, n) {
  let r = E([]);
  Gm(r.current, e) ||
    ((r.current = e),
    lE.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || Y.current() !== Y.canvas || (e > 0 && Wo(n.current));
    }));
}
function Jm() {
  return { current: null };
}
async function Ym(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(e) {
        if (((n = e), e === null)) {
          t.abort();
          return;
        }
        r(e);
      },
      configurable: !0,
    }),
    i
  );
}
function Xm(e) {
  return e in bE;
}
function Zm(e, t) {
  let n = {};
  for (let r in e) {
    if (!Xm(r)) continue;
    let i = e[r],
      a = bE[r];
    tt(i) || tt(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function Qm(e, t = `character`, n, r, i) {
  if (r) {
    let t = Jm();
    return (n.add(t), D(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r;
        return te(
          l,
          {
            children: [
              D(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(xE)?.map((e, t) => {
                  let r = Jm();
                  return (n.add(r), D(`span`, { ref: r, style: i, children: e }, e + t));
                }),
              }),
              a ? null : ` `,
            ],
          },
          e + t + a
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r,
          o = Jm();
        return (
          n.add(o),
          te(
            l,
            { children: [D(`span`, { ref: o, style: i, children: e }), a ? null : ` `] },
            e + t + a
          )
        );
      });
    }
    default:
      return e;
  }
}
function $m(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      H(t);
  }
}
function eh(e) {
  let t = [];
  return (
    z(e.x) && t.push(`translateX(${e.x}px)`),
    z(e.y) && t.push(`translateY(${e.y}px)`),
    z(e.scale) && t.push(`scale(${e.scale})`),
    z(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    z(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    z(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    z(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    z(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function th(e, t, n, r) {
  if (!n || !n.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : eh(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : eh(n.effect),
              };
      }
    default:
      H(i);
  }
}
function nh(e, t, n) {
  let r = fa(() => new Set()),
    i = co(),
    a = n || !i,
    o = Xe(),
    s = E({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  s.current.effect = e;
  let l = e?.trigger ?? `onMount`,
    u = e?.target,
    d = e?.threshold;
  c(() => {
    if (!a || n) return;
    s.current.hasMounted = !0;
    function e() {
      let { effect: e } = s.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && s.current.hasAnimatedOnce) ||
        (e?.type === `appear` && s.current.isAnimating)
      )
        return;
      Object.assign(s.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            c = { current: void 0 };
          return (
            ih(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              o,
              () => {
                Object.assign(s.current, { isAnimating: !1 });
              },
              c
            ),
            () => c.current?.()
          );
        }
        default:
          H(t);
      }
    }
    switch (l) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? Ae(n, e, { amount: d ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = u?.ref?.current;
        return t
          ? Ae(t, e, {
              amount: d ?? 0,
              root: document,
              margin: u?.offset ? `${u.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        H(l);
    }
  }, [a, r, n, t, u, d, l]);
  let p = !!e,
    m = e ? $m(e) : void 0;
  return f(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !p)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = s.current,
          c = th(a, n || rh(e, t, i), s.current.effect, o);
        return {
          text: (e) => Qm(e, m, r, o, c),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = Jm();
            return (r.add(t), { ref: t, style: { ...e, ...c } });
          },
        };
      },
      play: () => {
        let { effect: e } = s.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            ih(m, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            H(t);
        }
      },
    }),
    [a, p, r, n, m]
  );
}
function rh(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function ih(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = Zm(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await ah(n, u);
      if (
        e === null ||
        (ke(e, l, { ...r, restDelta: 0.001, delay: he(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        ke(e, n, { ...r, restDelta: 0.001, delay: he(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await Ym(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (je.read(() => {
          ((e = oh(n)),
            e.length !== 0 &&
              je.update(() => {
                let t = e.map((e, t) =>
                  ke(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          ke(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      H(e);
  }
}
async function ah(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await Ym(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function oh(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function sh(e) {
  let t = {};
  for (let n in e) (Je(n) || Xy(n)) && (t[n] = e[n]);
  return t;
}
function ch(e) {
  return e.type === l;
}
function lh(e) {
  return e.type === `br`;
}
function uh(e, t, n, r, a = {}, o, s = ch(e) ? -1 : 0) {
  let c = i.toArray(e.props.children);
  tt(n) || (c = c.slice(0, 1));
  let l = !0;
  c = c.map((e) => {
    if (((!k(e) || !lh(e)) && (l = !1), k(e))) return uh(e, t, n, r, a, o, s + 1);
    let i = tt(n) ? e : n;
    return R(i) && o ? o.text(i) : i;
  });
  let { "data-preset-tag": d, ...f } = e.props;
  if (R(e.type) || Ye(e.type)) {
    let n = Ne(e.type) || e.type,
      u = d || n,
      p = R(u) ? t?.[u] : void 0;
    ((f.className = xc(`framer-text`, f.className, p)),
      o && s === 0 && !l && Object.assign(f, o.props(f.style)));
    let m = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      h = t?.anchor;
    if (m && h) {
      let e = dh(c, a);
      f.id = e;
      let t = xc(`framer-text`, h),
        n = D(`a`, { href: `#${e}`, className: t, children: c });
      ((f.style = { ...(f.style ?? {}), scrollMarginTop: r }), (c = [n]));
    }
    u === `ol` &&
      (f.style = {
        ...(f.style ?? {}),
        [Ey]: ph(f.start ?? 1, i.count(f.children), f.style?.[Ty] ?? ``),
      });
  }
  return u(e, f, ...c);
}
function dh(e, t) {
  let n = Pr(e.map(fh).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function fh(e) {
  return R(e) || z(e)
    ? e.toString()
    : k(e)
      ? fh(e.props.children)
      : Array.isArray(e)
        ? e.map(fh).join(``)
        : ``;
}
function ph(e, t, n) {
  return Ga(Number(e) || 1, t, n);
}
function mh(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = wi(n.x, n.y),
    i = ry(wi(0.5, 0.5), r),
    a = X.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: wi.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  V(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !wi.isEqual(e, s) && !wi.isEqual(e, c));
  V(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = ry.intersection(i, ry(s, c)),
    f = ry.intersection(i, ry(l, u));
  return (V(d && f, `linearGradientLine: Must have a start and end point.`), ry(d, f));
}
function hh(e, t) {
  let n = mh(e.angle),
    r = $o(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = ry.pointAtPercentDistance(n, i),
    s = ry.pointAtPercentDistance(n, a),
    c = Ke([i, a], [0, 1]);
  return {
    id: `id${t}g${Eb.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: bb.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function gh(e, t) {
  return {
    id: `id${t}g${Ob.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: $o(e).map((t) => ({
      color: t.value,
      alpha: bb.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function _h(e) {
  if (!R(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return z(parseFloat(t));
}
function vh(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return z(n) ? n : 50;
}
function yh(e) {
  return _h(e) ? vh(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function bh(e) {
  return _h(e) ? vh(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function xh(e, t, n, r) {
  if (((e = Ev.get(e, `#09F`)), !cb.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
  let i = e.pixelWidth,
    a = e.pixelHeight,
    o,
    { fit: s } = e,
    c = 1,
    l = 1,
    u = 0,
    d = 0;
  if (s === `fill` || s === `fit` || s === `tile` || !s) {
    let n = 1,
      f = 1,
      p = i / a,
      m = t.height * p,
      h = t.width / p,
      g = m / t.width,
      _ = h / t.height;
    if (s === `tile`) {
      ((e.backgroundSize ??= 1),
        (c = Math.round(e.backgroundSize * (i / 2))),
        (l = Math.round(e.backgroundSize * (a / 2))));
      let n = t.x ?? 0,
        s = t.y ?? 0,
        f = 0,
        p = 0;
      (r && ((f = n), (p = s)),
        (u = (t.width - c) * yh(e.positionX) + f),
        (d = (t.height - l) * bh(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * bh(e.positionY)))
        : ((n = g), (u = (1 - g) * yh(e.positionX))),
        (o = `translate(${u}, ${d}) scale(${n}, ${f})`));
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? ``,
    transform: o,
    width: c,
    height: l,
    offsetX: u,
    offsetY: d,
  };
}
function Sh(e) {
  return e.startsWith(`data:${kE}`);
}
function Ch(e, t) {
  if (/^\w+:/u.test(e) && !Sh(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = Y.current() === Y.export;
  return tb.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function wh(e, t) {
  return (c(() => FE.subscribeToTemplate(e), [e]), FE.template(e, t));
}
function Th(e) {
  try {
    let t = Hm(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function Eh(e, t) {
  Oh(e, Dh(t));
}
function Dh(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function Oh(e, t) {
  (kh(e, t),
    Array.from(e.children).forEach((e) => {
      Oh(e, t);
    }));
}
function kh(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function Ah(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (IE[t[2]] || 1));
}
function jh(e) {
  let t = Ah(e.getAttribute(`width`)),
    n = Ah(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function Mh(e) {
  return e.indexOf(`image`) >= 0;
}
function Nh(e) {
  return e.indexOf(`var(--`) >= 0;
}
function Ph(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function Fh(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? q,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = FE.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && Oa(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    U(s) &&
    U(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l && l.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function Ih(e) {
  return e > VE ? `lazy` : void 0;
}
function Lh(e, t, n) {
  let r = Bh(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function Rh(e) {
  return e ? (e.fonts ?? ri()) : ri();
}
function zh(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : Bh(e);
}
function Bh(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    Vh(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(Hh) })
      : t.fonts.push(Hh(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function Vh(e) {
  return HE in e;
}
function Hh(e) {
  let t = Uh(e) || Wh(e) ? e : Gh(e);
  return Wh(t) ? t : Kh(t);
}
function Uh(e) {
  return `source` in e;
}
function Wh(e) {
  return `cssFamilyName` in e;
}
function Gh(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function Kh(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${NT}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function qh(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function Jh(e) {
  return e.loader;
}
function Yh(e, t, n) {
  let r = Jh(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var Xh,
  Zh,
  Qh,
  $h,
  eg,
  tg,
  ng,
  rg,
  ig,
  ag,
  og,
  sg,
  cg,
  lg,
  ug,
  dg,
  fg,
  pg,
  mg,
  hg,
  gg,
  _g,
  vg,
  yg,
  bg,
  xg,
  Sg,
  Cg,
  wg,
  Tg,
  Eg,
  Dg,
  Og,
  kg,
  Ag,
  jg,
  Mg,
  Ng,
  Pg,
  Fg,
  Ig,
  Lg,
  Rg,
  zg,
  q,
  Bg,
  Vg,
  Hg,
  Ug,
  Wg,
  Gg,
  Kg,
  qg,
  Jg,
  Yg,
  Xg,
  Zg,
  Qg,
  $g,
  e_,
  t_,
  n_,
  r_,
  i_,
  a_,
  o_,
  s_,
  c_,
  l_,
  u_,
  d_,
  f_,
  p_,
  m_,
  h_,
  g_,
  __,
  v_,
  y_,
  b_,
  x_,
  S_,
  C_,
  w_,
  T_,
  E_,
  D_,
  O_,
  k_,
  A_,
  j_,
  M_,
  N_,
  P_,
  F_,
  I_,
  L_,
  R_,
  z_,
  B_,
  V_,
  H_,
  U_,
  W_,
  G_,
  K_,
  q_,
  J_,
  Y_,
  X_,
  Z_,
  Q_,
  $_,
  ev,
  tv,
  nv,
  rv,
  iv,
  av,
  ov,
  sv,
  cv,
  lv,
  uv,
  dv,
  fv,
  pv,
  mv,
  hv,
  gv,
  _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  J,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Y,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  X,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  Z,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  Q,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  $,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  OE,
  kE,
  AE,
  jE,
  ME,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE = e(() => {
    (n(),
      Ce(),
      Re(),
      a(),
      ee(),
      O(),
      (Xh = le({
        "../../../node_modules/hsluv/dist/hsluv.cjs"(e) {
          (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Hsluv = void 0));
          var t = class e {
            constructor() {
              ((this.hex = `#000000`),
                (this.rgb_r = 0),
                (this.rgb_g = 0),
                (this.rgb_b = 0),
                (this.xyz_x = 0),
                (this.xyz_y = 0),
                (this.xyz_z = 0),
                (this.luv_l = 0),
                (this.luv_u = 0),
                (this.luv_v = 0),
                (this.lch_l = 0),
                (this.lch_c = 0),
                (this.lch_h = 0),
                (this.hsluv_h = 0),
                (this.hsluv_s = 0),
                (this.hsluv_l = 0),
                (this.hpluv_h = 0),
                (this.hpluv_p = 0),
                (this.hpluv_l = 0),
                (this.r0s = 0),
                (this.r0i = 0),
                (this.r1s = 0),
                (this.r1i = 0),
                (this.g0s = 0),
                (this.g0i = 0),
                (this.g1s = 0),
                (this.g1i = 0),
                (this.b0s = 0),
                (this.b0i = 0),
                (this.b1s = 0),
                (this.b1i = 0));
            }
            static fromLinear(e) {
              return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
            }
            static toLinear(e) {
              return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
            }
            static yToL(t) {
              return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
            }
            static lToY(t) {
              return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
            }
            static rgbChannelToHex(t) {
              let n = Math.round(t * 255),
                r = n % 16,
                i = ((n - r) / 16) | 0;
              return e.hexChars.charAt(i) + e.hexChars.charAt(r);
            }
            static hexToRgbChannel(t, n) {
              let r = e.hexChars.indexOf(t.charAt(n)),
                i = e.hexChars.indexOf(t.charAt(n + 1));
              return (r * 16 + i) / 255;
            }
            static distanceFromOriginAngle(e, t, n) {
              let r = t / (Math.sin(n) - e * Math.cos(n));
              return r < 0 ? 1 / 0 : r;
            }
            static distanceFromOrigin(e, t) {
              return Math.abs(t) / Math.sqrt(e ** 2 + 1);
            }
            static min6(e, t, n, r, i, a) {
              return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
            }
            rgbToHex() {
              ((this.hex = `#`),
                (this.hex += e.rgbChannelToHex(this.rgb_r)),
                (this.hex += e.rgbChannelToHex(this.rgb_g)),
                (this.hex += e.rgbChannelToHex(this.rgb_b)));
            }
            hexToRgb() {
              ((this.hex = this.hex.toLowerCase()),
                (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
                (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
                (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
            }
            xyzToRgb() {
              ((this.rgb_r = e.fromLinear(
                e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
              )),
                (this.rgb_g = e.fromLinear(
                  e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
                )),
                (this.rgb_b = e.fromLinear(
                  e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
                )));
            }
            rgbToXyz() {
              let t = e.toLinear(this.rgb_r),
                n = e.toLinear(this.rgb_g),
                r = e.toLinear(this.rgb_b);
              ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
                (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
                (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
            }
            xyzToLuv() {
              let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
                n = 4 * this.xyz_x,
                r = 9 * this.xyz_y;
              (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
                (this.luv_l = e.yToL(this.xyz_y)),
                this.luv_l === 0
                  ? ((this.luv_u = 0), (this.luv_v = 0))
                  : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                    (this.luv_v = 13 * this.luv_l * (r - e.refV))));
            }
            luvToXyz() {
              if (this.luv_l === 0) {
                ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
                return;
              }
              let t = this.luv_u / (13 * this.luv_l) + e.refU,
                n = this.luv_v / (13 * this.luv_l) + e.refV;
              ((this.xyz_y = e.lToY(this.luv_l)),
                (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
                (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
            }
            luvToLch() {
              if (
                ((this.lch_l = this.luv_l),
                (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
                this.lch_c < 1e-8)
              )
                this.lch_h = 0;
              else {
                let e = Math.atan2(this.luv_v, this.luv_u);
                ((this.lch_h = (e * 180) / Math.PI),
                  this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
              }
            }
            lchToLuv() {
              let e = (this.lch_h / 180) * Math.PI;
              ((this.luv_l = this.lch_l),
                (this.luv_u = Math.cos(e) * this.lch_c),
                (this.luv_v = Math.sin(e) * this.lch_c));
            }
            calculateBoundingLines(t) {
              let n = (t + 16) ** 3 / 1560896,
                r = n > e.epsilon ? n : t / e.kappa,
                i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
                a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
                o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
                s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
                c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
                l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
                u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
                d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
                f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
              ((this.r0s = i / o),
                (this.r0i = (a * t) / o),
                (this.r1s = i / (o + 126452)),
                (this.r1i = ((a - 769860) * t) / (o + 126452)),
                (this.g0s = s / l),
                (this.g0i = (c * t) / l),
                (this.g1s = s / (l + 126452)),
                (this.g1i = ((c - 769860) * t) / (l + 126452)),
                (this.b0s = u / f),
                (this.b0i = (d * t) / f),
                (this.b1s = u / (f + 126452)),
                (this.b1i = ((d - 769860) * t) / (f + 126452)));
            }
            calcMaxChromaHpluv() {
              let t = e.distanceFromOrigin(this.r0s, this.r0i),
                n = e.distanceFromOrigin(this.r1s, this.r1i),
                r = e.distanceFromOrigin(this.g0s, this.g0i),
                i = e.distanceFromOrigin(this.g1s, this.g1i),
                a = e.distanceFromOrigin(this.b0s, this.b0i),
                o = e.distanceFromOrigin(this.b1s, this.b1i);
              return e.min6(t, n, r, i, a, o);
            }
            calcMaxChromaHsluv(t) {
              let n = (t / 360) * Math.PI * 2,
                r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
                i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
                a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
                o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
                s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
                c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
              return e.min6(r, i, a, o, s, c);
            }
            hsluvToLch() {
              if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
              else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
              else {
                ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
                let e = this.calcMaxChromaHsluv(this.hsluv_h);
                this.lch_c = (e / 100) * this.hsluv_s;
              }
              this.lch_h = this.hsluv_h;
            }
            lchToHsluv() {
              if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
              else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHsluv(this.lch_h);
                ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
              }
              this.hsluv_h = this.lch_h;
            }
            hpluvToLch() {
              if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
              else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
              else {
                ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
                let e = this.calcMaxChromaHpluv();
                this.lch_c = (e / 100) * this.hpluv_p;
              }
              this.lch_h = this.hpluv_h;
            }
            lchToHpluv() {
              if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
              else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHpluv();
                ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
              }
              this.hpluv_h = this.lch_h;
            }
            hsluvToRgb() {
              (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
            }
            hpluvToRgb() {
              (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
            }
            hsluvToHex() {
              (this.hsluvToRgb(), this.rgbToHex());
            }
            hpluvToHex() {
              (this.hpluvToRgb(), this.rgbToHex());
            }
            rgbToHsluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHsluv());
            }
            rgbToHpluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHpluv());
            }
            hexToHsluv() {
              (this.hexToRgb(), this.rgbToHsluv());
            }
            hexToHpluv() {
              (this.hexToRgb(), this.rgbToHpluv());
            }
          };
          ((e.Hsluv = t),
            (t.hexChars = `0123456789abcdef`),
            (t.refY = 1),
            (t.refU = 0.19783000664283),
            (t.refV = 0.46831999493879),
            (t.kappa = 903.2962962),
            (t.epsilon = 0.0088564516),
            (t.m_r0 = 3.240969941904521),
            (t.m_r1 = -1.537383177570093),
            (t.m_r2 = -0.498610760293),
            (t.m_g0 = -0.96924363628087),
            (t.m_g1 = 1.87596750150772),
            (t.m_g2 = 0.041555057407175),
            (t.m_b0 = 0.055630079696993),
            (t.m_b1 = -0.20397695888897),
            (t.m_b2 = 1.056971514242878));
        },
      })),
      (Zh = le({
        "../../../node_modules/eventemitter3/index.js"(e, t) {
          var n = Object.prototype.hasOwnProperty,
            r = `~`;
          function i() {}
          Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
          function a(e, t, n) {
            ((this.fn = e), (this.context = t), (this.once = n || !1));
          }
          function o(e, t, n, i, o) {
            if (typeof n != `function`) throw TypeError(`The listener must be a function`);
            var s = new a(n, i || e, o),
              c = r ? r + t : t;
            return (
              e._events[c]
                ? e._events[c].fn
                  ? (e._events[c] = [e._events[c], s])
                  : e._events[c].push(s)
                : ((e._events[c] = s), e._eventsCount++),
              e
            );
          }
          function s(e, t) {
            --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
          }
          function c() {
            ((this._events = new i()), (this._eventsCount = 0));
          }
          ((c.prototype.eventNames = function () {
            var e = [],
              t,
              i;
            if (this._eventsCount === 0) return e;
            for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
          }),
            (c.prototype.listeners = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
              return o;
            }),
            (c.prototype.listenerCount = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (c.prototype.emit = function (e, t, n, i, a, o) {
              var s = r ? r + e : e;
              if (!this._events[s]) return !1;
              var c = this._events[s],
                l = arguments.length,
                u,
                d;
              if (c.fn) {
                switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                  case 1:
                    return (c.fn.call(c.context), !0);
                  case 2:
                    return (c.fn.call(c.context, t), !0);
                  case 3:
                    return (c.fn.call(c.context, t, n), !0);
                  case 4:
                    return (c.fn.call(c.context, t, n, i), !0);
                  case 5:
                    return (c.fn.call(c.context, t, n, i, a), !0);
                  case 6:
                    return (c.fn.call(c.context, t, n, i, a, o), !0);
                }
                for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
                c.fn.apply(c.context, u);
              } else {
                var f = c.length,
                  p;
                for (d = 0; d < f; d++)
                  switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                    case 1:
                      c[d].fn.call(c[d].context);
                      break;
                    case 2:
                      c[d].fn.call(c[d].context, t);
                      break;
                    case 3:
                      c[d].fn.call(c[d].context, t, n);
                      break;
                    case 4:
                      c[d].fn.call(c[d].context, t, n, i);
                      break;
                    default:
                      if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                      c[d].fn.apply(c[d].context, u);
                  }
              }
              return !0;
            }),
            (c.prototype.on = function (e, t, n) {
              return o(this, e, t, n, !1);
            }),
            (c.prototype.once = function (e, t, n) {
              return o(this, e, t, n, !0);
            }),
            (c.prototype.removeListener = function (e, t, n, i) {
              var a = r ? r + e : e;
              if (!this._events[a]) return this;
              if (!t) return (s(this, a), this);
              var o = this._events[a];
              if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
              else {
                for (var c = 0, l = [], u = o.length; c < u; c++)
                  (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
                l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
              }
              return this;
            }),
            (c.prototype.removeAllListeners = function (e) {
              var t;
              return (
                e
                  ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                  : ((this._events = new i()), (this._eventsCount = 0)),
                this
              );
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.addListener = c.prototype.on),
            (c.prefixed = r),
            (c.EventEmitter = c),
            t !== void 0 && (t.exports = c));
        },
      })),
      (Qh = le({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
          e
        ) {
          var t = typeof Symbol == `function` && Symbol.for,
            n = t ? Symbol.for(`react.element`) : 60103,
            r = t ? Symbol.for(`react.portal`) : 60106,
            i = t ? Symbol.for(`react.fragment`) : 60107,
            a = t ? Symbol.for(`react.strict_mode`) : 60108,
            o = t ? Symbol.for(`react.profiler`) : 60114,
            s = t ? Symbol.for(`react.provider`) : 60109,
            c = t ? Symbol.for(`react.context`) : 60110,
            l = t ? Symbol.for(`react.async_mode`) : 60111,
            u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
            d = t ? Symbol.for(`react.forward_ref`) : 60112,
            f = t ? Symbol.for(`react.suspense`) : 60113,
            p = t ? Symbol.for(`react.suspense_list`) : 60120,
            m = t ? Symbol.for(`react.memo`) : 60115,
            h = t ? Symbol.for(`react.lazy`) : 60116,
            g = t ? Symbol.for(`react.block`) : 60121,
            _ = t ? Symbol.for(`react.fundamental`) : 60117,
            v = t ? Symbol.for(`react.responder`) : 60118,
            y = t ? Symbol.for(`react.scope`) : 60119;
          function b(e) {
            if (typeof e == `object` && e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch (((e = e.type), e)) {
                    case l:
                    case u:
                    case i:
                    case o:
                    case a:
                    case f:
                      return e;
                    default:
                      switch (((e &&= e.$$typeof), e)) {
                        case c:
                        case d:
                        case h:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case r:
                  return t;
              }
            }
          }
          function x(e) {
            return b(e) === u;
          }
          ((e.AsyncMode = l),
            (e.ConcurrentMode = u),
            (e.ContextConsumer = c),
            (e.ContextProvider = s),
            (e.Element = n),
            (e.ForwardRef = d),
            (e.Fragment = i),
            (e.Lazy = h),
            (e.Memo = m),
            (e.Portal = r),
            (e.Profiler = o),
            (e.StrictMode = a),
            (e.Suspense = f),
            (e.isAsyncMode = function (e) {
              return x(e) || b(e) === l;
            }),
            (e.isConcurrentMode = x),
            (e.isContextConsumer = function (e) {
              return b(e) === c;
            }),
            (e.isContextProvider = function (e) {
              return b(e) === s;
            }),
            (e.isElement = function (e) {
              return typeof e == `object` && !!e && e.$$typeof === n;
            }),
            (e.isForwardRef = function (e) {
              return b(e) === d;
            }),
            (e.isFragment = function (e) {
              return b(e) === i;
            }),
            (e.isLazy = function (e) {
              return b(e) === h;
            }),
            (e.isMemo = function (e) {
              return b(e) === m;
            }),
            (e.isPortal = function (e) {
              return b(e) === r;
            }),
            (e.isProfiler = function (e) {
              return b(e) === o;
            }),
            (e.isStrictMode = function (e) {
              return b(e) === a;
            }),
            (e.isSuspense = function (e) {
              return b(e) === f;
            }),
            (e.isValidElementType = function (e) {
              return (
                typeof e == `string` ||
                typeof e == `function` ||
                e === i ||
                e === u ||
                e === o ||
                e === a ||
                e === f ||
                e === p ||
                (typeof e == `object` &&
                  !!e &&
                  (e.$$typeof === h ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === _ ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === g))
              );
            }),
            (e.typeOf = b));
        },
      })),
      ($h = le({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = Qh();
        },
      })),
      (eg = le({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = $h(),
            r = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
            o = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          ((s[n.ForwardRef] = a), (s[n.Memo] = o));
          function c(e) {
            return n.isMemo(e) ? o : s[e.$$typeof] || r;
          }
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          function h(e, t, n) {
            if (typeof t != `string`) {
              if (m) {
                var r = p(t);
                r && r !== m && h(e, r, n);
              }
              var a = u(t);
              d && (a = a.concat(d(t)));
              for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                var _ = a[g];
                if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                  var v = f(t, _);
                  try {
                    l(e, _, v);
                  } catch {}
                }
              }
            }
            return e;
          }
          t.exports = h;
        },
      })),
      (tg = le({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function n(e) {
              document.body
                ? e()
                : document.addEventListener
                  ? document.addEventListener(`DOMContentLoaded`, function t() {
                      (document.removeEventListener(`DOMContentLoaded`, t), e());
                    })
                  : document.attachEvent(`onreadystatechange`, function t() {
                      (document.readyState == `interactive` || document.readyState == `complete`) &&
                        (document.detachEvent(`onreadystatechange`, t), e());
                    });
            }
            function r(e) {
              ((this.g = document.createElement(`div`)),
                this.g.setAttribute(`aria-hidden`, `true`),
                this.g.appendChild(document.createTextNode(e)),
                (this.h = document.createElement(`span`)),
                (this.i = document.createElement(`span`)),
                (this.m = document.createElement(`span`)),
                (this.j = document.createElement(`span`)),
                (this.l = -1),
                (this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i));
            }
            function i(e, t) {
              e.g.style.cssText =
                `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
                t +
                `;`;
            }
            function a(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function o(t, n) {
              function r() {
                var e = i;
                a(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              (e(t.h, r), e(t.i, r), a(t));
            }
            function c(e, t, n) {
              ((t ||= {}),
                (n ||= s),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = n));
            }
            var l = null,
              u = null,
              d = null,
              f = null;
            function p(e) {
              return (
                u === null &&
                  (m(e) && /Apple/.test(s.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        s.navigator.userAgent
                      )),
                      (u = !!e && 603 > parseInt(e[1], 10)))
                    : (u = !1)),
                u
              );
            }
            function m(e) {
              return (f === null && (f = !!e.document.fonts), f);
            }
            function h(e, t) {
              var n = e.style,
                r = e.weight;
              if (d === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                d = i.style.font !== ``;
              }
              return [n, r, d ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((c.prototype.load = function (e, t) {
              var a = this,
                c = e || `BESbswy`,
                u = 0,
                d = t || 3e3,
                f = new Date().getTime();
              return new Promise(function (e, t) {
                if (m(a.context) && !p(a.context)) {
                  var g = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - f >= d
                          ? t(Error(`` + d + `ms timeout exceeded`))
                          : a.context.document.fonts
                              .load(h(a, `"` + a.family + `"`), c)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    _ = new Promise(function (e, t) {
                      u = setTimeout(function () {
                        t(Error(`` + d + `ms timeout exceeded`));
                      }, d);
                    });
                  Promise.race([_, g]).then(function () {
                    (clearTimeout(u), e(a));
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      ((t = (v != -1 && y != -1) || (v != -1 && b != -1) || (y != -1 && b != -1)) &&
                        ((t = v != y && v != b && y != b) ||
                          (l === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              s.navigator.userAgent
                            )),
                            (l =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))))),
                          (t =
                            l &&
                            ((v == x && y == x && b == x) ||
                              (v == S && y == S && b == S) ||
                              (v == C && y == C && b == C)))),
                        (t = !t)),
                        t &&
                          (w.parentNode !== null && w.parentNode.removeChild(w),
                          clearTimeout(u),
                          e(a)));
                    }
                    function p() {
                      if (new Date().getTime() - f >= d)
                        (w.parentNode !== null && w.parentNode.removeChild(w),
                          t(Error(`` + d + `ms timeout exceeded`)));
                      else {
                        var e = a.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((v = m.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          (b = _.g.offsetWidth),
                          n()),
                          (u = setTimeout(p, 50)));
                      }
                    }
                    var m = new r(c),
                      g = new r(c),
                      _ = new r(c),
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = -1,
                      w = document.createElement(`div`);
                    ((w.dir = `ltr`),
                      i(m, h(a, `sans-serif`)),
                      i(g, h(a, `serif`)),
                      i(_, h(a, `monospace`)),
                      w.appendChild(m.g),
                      w.appendChild(g.g),
                      w.appendChild(_.g),
                      a.context.document.body.appendChild(w),
                      (x = m.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      (C = _.g.offsetWidth),
                      p(),
                      o(m, function (e) {
                        ((v = e), n());
                      }),
                      i(m, h(a, `"` + a.family + `",sans-serif`)),
                      o(g, function (e) {
                        ((y = e), n());
                      }),
                      i(g, h(a, `"` + a.family + `",serif`)),
                      o(_, function (e) {
                        ((b = e), n());
                      }),
                      i(_, h(a, `"` + a.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = c)
                : ((s.FontFaceObserver = c),
                  (s.FontFaceObserver.prototype.load = c.prototype.load)));
          })();
        },
      })),
      (ng = () => {}),
      (rg = s !== void 0),
      (ig =
        rg &&
        (g.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(g.userAgent))),
      (ag = rg && typeof s.requestIdleCallback == `function`),
      (og = ag ? s.requestIdleCallback : setTimeout),
      (sg = () => () => {}),
      (cg = () => !0),
      (lg = () => !1),
      (ug = new Map()),
      (dg = new Map()),
      (fg = new Set()),
      (pg = `:`),
      (mg = rg ? void 0 : new Set()),
      (hg = `preload`),
      (gg = Object.keys),
      (_g = `equals`),
      (vg = r.createContext({})),
      (yg = r.createContext({})),
      (bg = []),
      (xg = `default`),
      (Sg = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (Cg = class e {
        constructor(e, t) {
          (M(this, `resolver`, e),
            M(this, `cacheHash`, t),
            M(this, `promiseState`, Sg.Pending),
            M(this, `preloadPromise`),
            M(this, `value`),
            M(this, `reason`),
            M(this, `read`, () => {
              if (this.promiseState === Sg.Fulfilled) return this.value;
              throw this.promiseState === Sg.Rejected
                ? this.reason
                : Error(`Need to call preload() before read()`);
            }),
            t !== void 0 && ft(t, e));
        }
        static is(t) {
          return t instanceof e;
        }
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        then(e, t) {
          return this.promiseState === Sg.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === Sg.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== Sg.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && mg !== void 0 && mg.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = Sg.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = Sg.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && ug.has(this.cacheHash) ? ug.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!st(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (wg = -1),
      (Tg = -2),
      (Eg = -3),
      (Dg = -4),
      (Og = -5),
      (kg = -6),
      (Ag = -7),
      (jg = 2 ** 32 - 1),
      (Mg = jg - 1),
      (Ng = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (Pg = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (Fg = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (Ig = typeof Uint8Array.fromBase64 == `function`),
      (Lg = typeof process == `object` && process.versions?.node !== void 0),
      (Rg = Ig ? Zt : Lg ? $t : tn),
      (zg = Ig ? Qt : Lg ? en : nn),
      (q = rg
        ? s
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (Bg = 2),
      (Vg = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (Hg = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (Wg = class {
        constructor() {
          (M(this, `payload`, dn()), M(this, `isEmpty`, !0));
        }
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return on(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (Gg = rg ? void 0 : new Wg()),
      (Kg = Hg.CollectionUtilsCache),
      (qg = new WeakMap()),
      (Jg = j(void 0)),
      (Yg = class {
        constructor(e, t) {
          (M(this, `collectionId`, t),
            M(this, `module`),
            M(this, `cacheMap`, new Map()),
            (this.module = new Cg(async () => {
              try {
                let t = await e();
                return (V(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(ut(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        callUtilsMethod(e, t, n) {
          let r = hn(n),
            i = gn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (Gg !== void 0) {
              if (st(e)) return e.then((e) => (Gg.set(Kg, i, e), e));
              Gg.set(Kg, i, e);
            }
            return e;
          }
          if (pn(Kg, i)) {
            let e = mn(Kg, i);
            return (this.cacheMap.set(i, new Cg(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = st(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e](t, n)) : a?.[e](t, n);
          } catch (e) {
            (console.error(ut(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (Gg !== void 0 && Gg.set(Kg, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new Cg(() =>
            s
              .then((e) => (Gg !== void 0 && Gg.set(Kg, i, e), e))
              .catch((e) => {
                console.error(ut(`Failed to call CollectionUtils method.`, e));
              })
          );
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
      }),
      (Xg = q.scheduler && `yield` in q.scheduler),
      (Zg = q.scheduler && `postTask` in q.scheduler),
      (Qg = new Set()),
      ($g = !ig),
      (e_ = /Mac/u),
      (t_ = /iPhone|iPod|iPad/iu),
      (n_ = /MacIntel/iu),
      (r_ = /Edg\//u),
      (i_ = /Chrome/u),
      (a_ = /Google Inc/u),
      (o_ = /Safari/u),
      (s_ = /Apple Computer/u),
      (c_ = /Firefox\/\d+\.\d+$/u),
      (l_ = /FramerX/u),
      (u_ = /tablet|iPad|Nexus 9/iu),
      (d_ = /mobi/iu),
      (f_ = {}),
      (p_ = () => f_),
      (m_ = (e) => {
        f_ = e;
      }),
      (h_ = RegExp(`:([a-z]\\w*)`, `gi`)),
      (g_ = `framer_variant`),
      (__ = 46),
      (v_ = 47),
      (y_ = (e, t) => e.charCodeAt(t)),
      (b_ = (e, t) => e.lastIndexOf(t)),
      (x_ = (e, t, n) => e.slice(t, n)),
      (S_ = !1),
      (C_ = `/`),
      (w_ = (e) => e === v_),
      (T_ = new Set([`/404.html`, `/404`, `/404/`])),
      (E_ = !1),
      (D_ = r.createContext({ global: void 0, routes: {} })),
      (O_ = 10),
      (k_ = 1e4),
      (A_ = (e) => `--view-transition-${e}`),
      (j_ = {
        circle: {
          makeKeyframe: (e, t) => {
            let { x: n, y: r } = cr(e);
            return t === `start`
              ? `clip-path: circle(0 at ${n}px ${r}px);`
              : `clip-path: circle(${Math.hypot(Math.max(n, s.innerWidth - n), Math.max(r, s.innerHeight - r))}px at ${n}px ${r}px);`;
          },
        },
        conic: {
          makeKeyframe: (e, t, n) => {
            let r = 0;
            return (
              ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
                (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
                (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
                (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
                (r = (e.sweepAngle / 360) * 100),
              `${A_(`conic-offset`)}: ${r}%;`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${A_(`conic-offset`)})`,
              r =
                (t === `exit` && e.angularDirection === `clockwise`) ||
                (t === `enter` && e.angularDirection === `counter-clockwise`),
              i = r ? `transparent` : `black`,
              a = r ? `black` : `transparent`,
              o = `conic-gradient(from `;
            return (
              (o += `${e.angle}deg at ${e.x} ${e.y}, `),
              (o += `${i} 0%, ${i} ${n}, `),
              (o += `${a} ${n}, ${a} 100%)`),
              `mask-image: ${o}; -webkit-mask-image: ${o};`
            );
          },
          makePropertyRules: () => `
        @property ${A_(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
        },
        inset: {
          makeKeyframe: (e, t) => {
            let { x: n, y: r } = cr(e),
              i = s.innerHeight - r,
              a = s.innerWidth - n;
            return t === `start`
              ? `clip-path: inset(${r}px ${a}px ${i}px ${n}px round ${e.round}px);`
              : `clip-path: inset(0 round 0);`;
          },
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = sr(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${A_(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${A_(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${A_(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${A_(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${A_(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${A_(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (M_ = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (N_ = `view-transition-styles`),
      (P_ = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (F_ = () => {}),
      (L_ = () => {
        (I_ ||
          ((I_ = document.createElement(`div`)),
          I_.setAttribute(`aria-live`, `assertive`),
          I_.setAttribute(`aria-atomic`, `true`),
          (I_.style.position = `absolute`),
          (I_.style.transform = `scale(0)`),
          document.body.append(I_)),
          setTimeout(() => {
            I_.textContent = document.title;
          }, 60));
      }),
      (R_ =
        rg &&
        typeof s.navigation?.back == `function` &&
        !(() => {
          if (g === void 0) return !1;
          let e = g.userAgent,
            t = e.indexOf(`Chrome/`),
            n = +e.slice(t + 7, e.indexOf(`.`, t));
          return n > 101 && n < 128;
        })() &&
        !In()),
      (z_ = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (B_ = r.createContext(null)),
      (V_ = (() => {
        let e = j(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (H_ = async () => {}),
      (U_ = { activeLocale: null, locales: [], setLocale: H_ }),
      (W_ = (() => {
        let e = r.createContext(U_);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (G_ = (() => {
        let e = r.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (K_ = new Set()),
      (q_ = (() => {
        let e = j({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (J_ = `__f_replay`),
      (Y_ =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (X_ = (e) => {
        e.target?.closest?.(`#main`) &&
          (Gr(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (Z_ = !1),
      (mv = [Jr]),
      (pv = [Jr]),
      (fv = [Jr]),
      (dv = [Jr]),
      (uv = [Jr]),
      (lv = [Jr]),
      (cv = [Jr]),
      (sv = [Jr]),
      (ov = [Jr]),
      (av = [Jr]),
      (iv = [Jr]),
      (rv = [Jr]),
      (nv = [Jr]),
      (tv = [Jr]),
      (ev = [Jr]),
      ($_ = [Jr]),
      (Q_ = [Jr]),
      (gv = class {
        constructor() {
          (Oe(hv, 5, this),
            M(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            M(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            M(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            M(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            M(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            M(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            M(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            Yr(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            Yr(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        }
        markUseLayoutEffectsStart() {
          performance.mark(`framer-hydration-layout-effects-start`);
        }
        markRouterUseLayoutEffectStart() {
          performance.mark(`framer-hydration-router-layout-effect`);
        }
        markUseLayoutEffectsEnd() {
          (performance.mark(`framer-hydration-layout-effects-end`),
            Yr(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        }
        markUseEffectsStart() {
          performance.mark(`framer-hydration-effects-start`);
        }
        markUseEffectsRouterStart() {
          performance.mark(`framer-hydration-router-effect`);
        }
        markUseEffectsAreSynchronous() {
          performance.mark(`framer-hydration-effects-sync`);
        }
        markUseEffectsEnd() {
          (performance.mark(`framer-hydration-effects-end`),
            Yr(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        }
        markRafStart() {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        }
        markRafEnd() {
          (performance.mark(`framer-hydration-browser-raf-end`),
            Yr(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            Yr(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            Yr(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          Yr(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          Yr(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (hv = fe(null)),
      P(hv, 1, `markRenderStart`, mv, gv),
      P(hv, 1, `markRenderEnd`, pv, gv),
      P(hv, 1, `markUseInsertionEffectsStart`, fv, gv),
      P(hv, 1, `markUseInsertionEffectRouterStart`, dv, gv),
      P(hv, 1, `markUseInsertionEffectsEnd`, uv, gv),
      P(hv, 1, `markUseLayoutEffectsStart`, lv, gv),
      P(hv, 1, `markRouterUseLayoutEffectStart`, cv, gv),
      P(hv, 1, `markUseLayoutEffectsEnd`, sv, gv),
      P(hv, 1, `markUseEffectsStart`, ov, gv),
      P(hv, 1, `markUseEffectsRouterStart`, av, gv),
      P(hv, 1, `markUseEffectsAreSynchronous`, iv, gv),
      P(hv, 1, `markUseEffectsEnd`, rv, gv),
      P(hv, 1, `markRafStart`, nv, gv),
      P(hv, 1, `markRafEnd`, tv, gv),
      P(hv, 1, `markLayoutStylePaintEnd`, ev, gv),
      P(hv, 1, `measureMutationEffects`, $_, gv),
      P(hv, 1, `measureUnattributedHydrationOverhead`, Q_, gv),
      Ve(hv, gv),
      (vv = !1),
      (yv = { Start: ei, End: ti }),
      (bv = class extends Error {}),
      (xv = class extends S {
        constructor(e) {
          (super(e), (this.state = { error: void 0, forceUpdateKey: e.forceUpdateKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.forceUpdateKey !== t.forceUpdateKey) {
            let n = { forceUpdateKey: e.forceUpdateKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof bv)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return ni(e, t);
        }
      }),
      (Sv = Object.freeze([])),
      (wv = new Set()),
      (Tv = class {
        constructor() {
          (M(this, `observers`, new Set()), M(this, `transactions`, {}));
        }
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (Ev = (() => {
        function e(e) {
          return (
            vi(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            yi(e) ? e : new kv(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : yi(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              yi(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (Dv = `onUpdate`),
      (Ov = `finishTransaction`),
      (kv = class {
        constructor(e) {
          (M(this, `value`, e), M(this, `observers`, new Tv()));
        }
        static interpolationFor(e, t) {
          if (yi(e)) return bi(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (yi(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      ((e) => {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Si(e.x, t.x), y: Si(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(t) {
          let n = e.centroid(t),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
          }
          return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((wi ||= {})),
      (Av = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (jv = new (Xh().Hsluv)()),
      (Mv = {
        rgb: RegExp(
          `rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        rgba: RegExp(
          `rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsl: RegExp(
          `hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsla: RegExp(
          `hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsv: RegExp(
          `hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsva: RegExp(
          `hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
        hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
        hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
      }),
      (Nv =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (Pv = (e) => {
        let { r: t, g: n, b: r, a: i } = Ji(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (Fv = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Xi({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (Iv = (e) => {
        let { r: t, g: n, b: r, a: i } = Ji(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (Lv = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Xi({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (Rv = class e {
        constructor(e) {
          (M(this, `format`, `p3`),
            M(this, `r`),
            M(this, `g`),
            M(this, `b`),
            M(this, `a`),
            (this.r = e.r ?? 0),
            (this.g = e.g ?? 0),
            (this.b = e.b ?? 0),
            (this.a = e.a ?? 1));
        }
        hsv() {
          return Zi(this);
        }
        rgb() {
          return ta(this);
        }
        hsl() {
          return Pi(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e($i(t));
            case `srgb`:
              return new e(ea($i(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            ea({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = J(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = Ki(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!R(t) || !J.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (zv = new Map()),
      (J = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = zv.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (zv.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = na(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          } else return;
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => typeof e == `string` && Ui(e) !== !1),
          (e.isColorObject = (e) =>
            B(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => Ni(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && Rv.isP3String(e)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...ki(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = Li(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = Li(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = Ni(e.r, e.g, e.b, !0);
            for (let e of Object.keys(Av)) if (Av[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: Ti(i, [0, 1], [t.r, r.r], a),
                g: Ti(i, [0, 1], [t.g, r.g], a),
                b: Ti(i, [0, 1], [t.b, r.b], a),
                a: Ti(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: Ti(i, [0, 1], [u, u + f], a),
                s: Ti(i, [0, 1], [c.s, l.s], a),
                l: Ti(i, [0, 1], [c.l, l.l], a),
                a: Ti(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(Ai(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => Pi(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !!(
              (t.toLowerCase().slice(-5) === `color` || t === `fill` || t === `stroke`) &&
              typeof n == `string` &&
              e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        let r = Ke([0, 255], [0, 1]);
        function i(e) {
          e = r(e);
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: r, b: a } = e.toRgb(t);
            return 0.2126 * i(n) + 0.7152 * i(r) + 0.0722 * i(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (Bv = (e) => e instanceof Ue),
      (Vv = Zh().EventEmitter),
      (Hv = class {
        constructor() {
          M(this, `_emitter`, new Vv());
        }
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (Uv = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (Wv = q.requestAnimationFrame || Uv),
      (Gv = (e) => Wv(e)),
      (Kv = 1 / 60),
      (qv = class extends Hv {
        constructor(e = !1) {
          (super(),
            M(this, `_started`, !1),
            M(this, `_frame`, 0),
            M(this, `_frameTasks`, []),
            M(this, `tick`, () => {
              this._started &&
                (Gv(this.tick),
                this.emit(`update`, this._frame, Kv),
                this.emit(`render`, this._frame, Kv),
                this._processFrameTasks(),
                this._frame++);
            }),
            e && this.start());
        }
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          Kv = e;
        }
        static get TimeStep() {
          return Kv;
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), Gv(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * Kv;
        }
      }),
      (Jv = new qv()),
      (Yv = { target: ca() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (Y = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => Yv.target,
        hasRestrictions: () => {
          let e = Yv.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (Xv = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      De({
        borderTopWidth: Xv(`y`),
        borderLeftWidth: Xv(`x`),
        borderRightWidth: Xv(`x`),
        borderBottomWidth: Xv(`y`),
      }),
      (Zv = r.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (Qv = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      ($v = {
        ...Qv,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (ey = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (ty = { ...ey, fontWeight: 500 }),
      (ny = {
        ...ey,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (ry = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = va(wi.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(wi(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => wi.distance(e.a, e.b)),
          e
        );
      })()),
      (X = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => X.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: xi(e.x, t),
          y: xi(e.y, t),
          width: xi(e.width, t),
          height: xi(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: X.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: X.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: wi.distance(t, n), height: wi.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(X.minX)), y: Math.min(...e.map(X.minY)) },
            n = { x: Math.max(...e.map(X.maxX)), y: Math.max(...e.map(X.maxY)) };
          return X.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: X.minX(e), y: X.minY(e) },
          { x: X.minX(e), y: X.maxY(e) },
          { x: X.maxX(e), y: X.minY(e) },
          { x: X.maxX(e), y: X.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < X.minX(e) ||
            t.x > X.maxX(e) ||
            t.y < X.minY(e) ||
            t.y > X.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of X.points(t)) if (!X.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= X.maxX(e) || X.maxX(t) <= e.x || t.y >= X.maxY(e) || X.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = X.maxX(e),
            r = X.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = X.maxY(e),
            r = X.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => t.find((t) => X.intersects(t, e)) === void 0,
        isEqual: (e, t) => X.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > X.maxX(e) && (n = t.x - X.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > X.maxY(e) && (r = t.y - X.maxY(e)),
            wi.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: X.minX(e), y: X.minY(e) },
            r = { x: X.minX(t), y: X.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = X.minX(e),
            r = X.minY(e),
            i = X.maxX(e),
            a = X.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = X.cornerPoints(e);
          return [ry(t, n), ry(n, r), ry(r, i), ry(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  H(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              H(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  H(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              H(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = ry(t, X.center(e)),
            r = X.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && ry.intersection(n, t, !0)) {
              let n = iy[e];
              return (V(n, () => `Invalid edge name: ${JSON.stringify(iy)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          V(r, `Rect array is empty`);
          let i = X.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            V(o);
            let s = X.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (iy = [`top`, `right`, `bottom`, `left`]),
      (ay = {
        quickfix: (e) => (
          (ya(e.widthType) || ya(e.heightType)) && (e.aspectRatio = null),
          U(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || ya(e.widthType) || U(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || ya(e.heightType) || U(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (oy = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = ay.quickfix({
              left: U(t) || yi(t),
              right: U(n) || yi(n),
              top: U(r) || yi(r),
              bottom: U(i) || yi(i),
              widthType: ba(a),
              heightType: ba(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = Ev.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = Ev.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? Ev.getNumber(t) : null,
              right: d.right ? Ev.getNumber(n) : null,
              top: d.top ? Ev.getNumber(r) : null,
              bottom: d.bottom ? Ev.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? Ev.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? Ev.getNumber(t?.sizing.height) : null,
            c = Ea(e.left, e.right);
          if (o && U(c)) i = o - c;
          else if (n && ya(e.widthType)) i = n.width;
          else if (U(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                H(e.widthType);
            }
          let l = Ea(e.top, e.bottom);
          if (s && U(l)) a = s - l;
          else if (n && ya(e.heightType)) a = n.height;
          else if (U(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                H(e.heightType);
            }
          return Ta(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = oy.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? Ev.getNumber(l.width) : null,
            d = l ? Ev.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? X.pixelAligned(f) : f;
        },
      }),
      (sy = 200),
      (cy = 200),
      (ly = r.createContext({ parentSize: 0 })),
      (uy = (e) => {
        let t = Pa(),
          { parentSize: n, children: i } = e,
          a = r.useMemo(() => ({ parentSize: n }), [Ia(n), La(n)]);
        return t === 1
          ? i
            ? D(b, { children: i })
            : null
          : D(ly.Provider, { value: a, children: i });
      }),
      (dy = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.String = `string`),
        (e.RichText = `richtext`),
        (e.FusedNumber = `fusednumber`),
        (e.Enum = `enum`),
        (e.SegmentedEnum = `segmentedenum`),
        (e.Color = `color`),
        (e.Image = `image`),
        (e.ResponsiveImage = `responsiveimage`),
        (e.File = `file`),
        (e.ComponentInstance = `componentinstance`),
        (e.Slot = `slot`),
        (e.Array = `array`),
        (e.EventHandler = `eventhandler`),
        (e.ChangeHandler = `changehandler`),
        (e.Transition = `transition`),
        (e.BoxShadow = `boxshadow`),
        (e.Link = `link`),
        (e.Date = `date`),
        (e.Object = `object`),
        (e.Font = `font`),
        (e.PageScope = `pagescope`),
        (e.ScrollSectionRef = `scrollsectionref`),
        (e.CustomCursor = `customcursor`),
        (e.Border = `border`),
        (e.Cursor = `cursor`),
        (e.Padding = `padding`),
        (e.BorderRadius = `borderradius`),
        (e.Gap = `gap`),
        (e.CollectionReference = `collectionreference`),
        (e.MultiCollectionReference = `multicollectionreference`),
        (e.TrackingId = `trackingid`),
        (e.VectorSetItem = `vectorsetitem`),
        (e.LinkRelValues = `linkrelvalues`),
        (e.Location = `location`),
        e
      ))(dy || {})),
      (fy = r.createContext(void 0)),
      (py = new Set()),
      (hy = `style[data-framer-css-ssr-minified]`),
      (gy = (() => {
        if (!Rn()) return new Set();
        let e = document.querySelector(hy)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (_y = `data-framer-css-ssr`),
      (vy = (e, t, n) =>
        r.forwardRef((i, a) => {
          let { sheet: o, cache: s } = r.useContext(fy) ?? {},
            c = n;
          if (!Rn()) {
            Ze(t) && (t = t(Ua(), i));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            by.add(e, c);
          }
          return (
            h(() => {
              (c && gy.has(c)) ||
                (Ze(t)
                  ? t(Ua(), i)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && Ha(e, o, s));
            }, []),
            D(e, { ...i, ref: a })
          );
        })),
      (yy = class {
        constructor() {
          (M(this, `styles`, new Set()), M(this, `componentIds`, new Set()));
        }
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (by = new yy()),
      (xy = [
        `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
        `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
      ]),
      (Sy = ((e) => (
        (e.Padding = `--framer-input-padding`),
        (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
        (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
        (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
        (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
        (e.CornerShape = `--framer-input-corner-shape`),
        (e.BorderColor = `--framer-input-border-color`),
        (e.BorderTopWidth = `--framer-input-border-top-width`),
        (e.BorderRightWidth = `--framer-input-border-right-width`),
        (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
        (e.BorderLeftWidth = `--framer-input-border-left-width`),
        (e.BorderStyle = `--framer-input-border-style`),
        (e.Background = `--framer-input-background`),
        (e.FontFamily = `--framer-input-font-family`),
        (e.FontWeight = `--framer-input-font-weight`),
        (e.FontSize = `--framer-input-font-size`),
        (e.FontColor = `--framer-input-font-color`),
        (e.FontStyle = `--framer-input-font-style`),
        (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
        (e.FontTextAlignment = `--framer-input-font-text-alignment`),
        (e.FontLineHeight = `--framer-input-font-line-height`),
        (e.FontOpenType = `--framer-input-font-open-type-features`),
        (e.FontVariationAxes = `--framer-input-font-variation-axes`),
        (e.PlaceholderColor = `--framer-input-placeholder-color`),
        (e.BoxShadow = `--framer-input-box-shadow`),
        (e.FocusedBorderColor = `--framer-input-focused-border-color`),
        (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
        (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
        (e.FocusedBackground = `--framer-input-focused-background`),
        (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
        (e.FocusedTransition = `--framer-input-focused-transition`),
        (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
        (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
        (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
        (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
        (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
        (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
        (e.InvalidTextColor = `--framer-input-invalid-text-color`),
        (e.IconBackgroundImage = `--framer-input-icon-image`),
        (e.IconMaskImage = `--framer-input-icon-mask-image`),
        (e.IconColor = `--framer-input-icon-color`),
        (e.IconContent = `--framer-input-icon-content`),
        (e.WrapperHeight = `--framer-input-wrapper-height`),
        e
      ))(Sy || {})),
      (Cy = Sy),
      (wy = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (V(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${Wa(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            V(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      `${Cy.BorderTopWidth}${Cy.BorderRightWidth}${Cy.BorderBottomWidth}${Cy.BorderLeftWidth}`,
      (Ty = `--list-style-type`),
      (Ey = `--max-list-digits`),
      (Dy = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (Oy = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (ky = { display: `inline-block` }),
      (Ay = { display: `block` }),
      (jy = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${Oy.display};
            flex-direction: ${Oy.flexDirection};
            justify-content: ${Oy.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${Xa([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${Xa([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${Xa([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${ky.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${Xa([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${Xa([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Xa([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Xa([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${Xa([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${Xa([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${Xa([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${Xa([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${Xa([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${Xa([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Xa([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${Xa([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${Xa([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Xa([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${Xa([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Xa([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Xa([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${Xa([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Xa([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${Ay.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: none;
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${Ey}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${Za(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (My = `--text-truncation-display-inline-for-safari-16`),
      (Ny = `--text-truncation-display-none-for-safari-16`),
      (Py = `--text-truncation-line-break-for-safari-16`),
      (Fy = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (Iy = `(background: -webkit-named-image(i))`),
      (Ly = `(contain-intrinsic-size: inherit)`),
      (Ry = [
        `@supports ${Iy} and (not ${Ly}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${Fy.join(`, `)} { display: var(${My}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${Fy.map((e) => `${e}::after`).join(`, `)} { content: var(${Py}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${Ny}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${My}, ${ky.display}) }
    }`,
      ]),
      (zy = `--framer-will-change-override`),
      (By = `--framer-will-change-effect-override`),
      (Vy = `--framer-will-change-filter-override`),
      (Hy = `--overflow-clip-fallback`),
      (Uy = `--one-if-corner-shape-supported`),
      (Wy = (e) => {
        let t = [
            `[data-framer-component-type="Text"] { cursor: inherit; }`,
            `[data-framer-component-text-autosized] * { white-space: pre; }`,
            `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
            `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
            `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
            `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
            `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
            `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
          ],
          n = [
            `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
            `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
          ],
          r = [
            `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
            `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
            `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
          ],
          i = [
            `[data-framer-cursor="pointer"] { cursor: pointer; }`,
            `[data-framer-cursor="grab"] { cursor: grab; }`,
            `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
          ],
          a = [
            `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
            `[data-framer-generated] * { pointer-events: unset }`,
          ],
          o = [
            `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
            `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
            `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
          ],
          s = `(background: -webkit-named-image(i))`,
          c = (e) =>
            e
              ? [
                  `body { ${zy}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${zy}: transform; } }`,
                ]
              : [`body { ${zy}: none; ${By}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${Vy}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${Vy}: filter; } }`,
                ]
              : [`body { ${Vy}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${Hy}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${Uy}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...jy,
          ...xy,
          `
[data-framer-component-type="Stack"]:not([data-framer-generated]) > *,
[data-framer-component-type="Stack"]:not([data-framer-generated]) > [data-framer-component-type] {
    position: relative;
}`,
          `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
          ...n,
          ...r,
          `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
          `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
          `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
          ...i,
          ...u(e),
          `.svgContainer svg { display: block; }`,
          `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
          ...o,
          d,
          `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
          ...Ry,
          f,
        ];
      }),
      (Gy = Va(() => Wy(!1))),
      (Ky = Va(() => Wy(!0))),
      (qy = `optional`),
      (Jy = (e) => e),
      (Yy =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (Xy = uo(
        (e) =>
          Yy.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (Zy = (e) => () => {
        _i(e);
      }),
      (Qy = () => () => {}),
      ($y = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = tb.useImageSource(e, t, n);
          return f(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        isOnPageCanvas: !1,
      }),
      (eb = !1),
      (tb = new Proxy($y, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? Qy()
              : Zy(
                  eb
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (nb = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (rb = [1, 2, 2.2]),
      (ib = [512, 1024, 2048, 4096]),
      (ab = 512),
      (ob = { position: `absolute`, ...nb, top: 0, right: 0, bottom: 0, left: 0 }),
      (sb = `src`),
      (cb = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && sb in e;
        },
      }),
      (lb = Fn()),
      (ub = typeof document < `u` ? ne : c),
      (db = r.createContext(!1)),
      (fb = class {
        constructor() {
          (M(this, `sharedResizeObserver`),
            M(this, `callbacks`, new WeakMap()),
            (this.sharedResizeObserver = new ResizeObserver(
              this.updateResizedElements.bind(this)
            )));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (pb = Rn() ? new fb() : void 0),
      (mb = `data-framer-size-compatibility-wrapper`),
      (hb = `0.000001px`),
      (gb = ` translateZ(${hb})`),
      (_b = zn() || In() || Bn()),
      (vb = (() => {
        class e extends S {
          constructor() {
            (super(...arguments),
              M(this, `layerElement`, null),
              M(this, `setLayerElement`, (e) => {
                this.layerElement = e;
              }));
          }
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? Go(t) : Ko(t));
          }
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Ot(this.props, e);
          }
          componentDidUpdate(e) {
            Jy(this.props).clip &&
              Jy(this.props).radius === 0 &&
              Jy(e).radius !== 0 &&
              Jo(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return (M(e, `defaultProps`, {}), e);
      })()),
      (yb = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (bb = {
        hueRotate: (e, t) => J.toHslString(J.hueRotate(J(e), t)),
        setAlpha: (e, t) => J.toRgbString(J.alpha(J(e), t)),
        getAlpha: (e) => {
          let t = Ui(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => J.toRgbString(J.multiplyAlpha(J(e), t)),
        toHexValue: (e) => J.toHex(J(e)).toUpperCase(),
        toHex: (e) => J.toHexString(J(e)).toUpperCase(),
        toRgb: (e) => J.toRgb(J(e)),
        toRgbString: (e) => J.toRgbString(J(e)),
        toHSV: (e) => J.toHsv(J(e)),
        toHSL: (e) => J.toHsl(J(e)),
        toHslString: (e) => J.toHslString(J(e)),
        toHsvString: (e) => J.toHsvString(J(e)),
        hsvToHSLString: (e) => J.toHslString(J(ji(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => J.toHex(J(ji(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => J.toHexString(J(ji(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => J.toRgbString(J(ji(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => ji(e.h, e.s, e.v),
        rgbaToString: (e) => J.toRgbString(J(e)),
        rgbToHexValue: (e) => J.toHex(J(e)),
        rgbToHexString: (e) => J.toHexString(J(e)),
        hslToString: (e) => J.toHslString(J(e)),
        hslToRgbString: (e) => J.toRgbString(J(e)),
        toColorPickerSquare: (e) => J.toRgbString(J({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => J(e).isValid !== !1,
        equals: (e, t) =>
          J.isP3String(e) || J.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = J(e)),
              typeof t == `string` && (t = J(t)),
              J.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = J(e);
          return t.a === 1 ? J.toHexString(t) : J.toRgbString(t);
        },
        toFormatString: (e) => (J.isP3String(e) ? e : J.toRgbString(J(e))),
      }),
      (xb = /var\(.+\)/u),
      (Sb = new Map()),
      (Cb = [`stops`]),
      (wb = [`start`, `end`]),
      (Tb = [`angle`, `alpha`]),
      (Eb = {
        isLinearGradient: (e) => B(e) && Tb.every((t) => t in e) && (ns(e) || ts(e)),
        hash: (e) => e.angle ^ es(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = $o(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (Db = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (Ob = {
        isRadialGradient: (e) => B(e) && Db.every((t) => t in e) && (ns(e) || ts(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ es(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = $o(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (kb = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (Ab = new Set([...kb, ...kb.map((e) => `${e}Capture`)])),
      (jb = `overflow`),
      (Mb = { x: 0, y: 0, width: 200, height: 200 }),
      (Nb = new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (Pb = A(function (e, t) {
        let { name: n, center: r, border: i, _border: a, __portal: o } = e,
          { props: s, children: c } = Fo(e),
          l = ps(s),
          u = Lo(e),
          f = cs(e),
          p = E(null),
          m = t ?? p,
          h = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": f,
            "data-framer-highlight": f === `pointer` || void 0,
            "data-layoutid": u,
            "data-framer-offset-parent-id": Jy(e)[`data-framer-offset-parent-id`],
          };
        !ms(e) && n && (Jy(h)[`data-framer-name`] = n);
        let [g, _] = fs(s),
          v = ds(s),
          y = Ba(v);
        (r && !(_ && !y && Oa(v))
          ? ((l.transformTemplate ||= Io(r)), Object.assign(h, No(r)))
          : (l.transformTemplate ||= void 0),
          Uo(e, m));
        let x = ko(e),
          S = hs(s, v, _, d(db)),
          C = Ra(
            te(b, {
              children: [
                x
                  ? D(To, {
                      alt: e.alt ?? ``,
                      image: x,
                      containerSize: _ ?? void 0,
                      nodeId: e.id && Po(e.id),
                      layoutId: u,
                    })
                  : null,
                c,
                D(Do, { ...a, border: i, layoutId: u }),
              ],
            }),
            S
          ),
          w = jo(e.as),
          T = Ao(x);
        return (
          e.fitImageDimension &&
            T &&
            ((g[e.fitImageDimension] = `auto`), (g.aspectRatio = T.width / T.height)),
          te(w, { ...h, ...l, layoutId: u, style: g, ref: m, children: [C, o] })
        );
      })),
      (Fb = $a(
        A(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? D(Pb, { ...e, ref: t }) : null;
        })
      )),
      (Ib = `__LAYOUT_TREE_ROOT`),
      (Lb = r.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (Rb = class extends S {
        constructor() {
          (super(...arguments),
            M(this, `shouldAnimate`, !1),
            M(this, `transition`),
            M(this, `lead`),
            M(this, `follow`),
            M(this, `scheduledPromotion`, !1),
            M(this, `scheduledDidUpdate`, !1),
            M(this, `scheduleProjectionDidUpdate`, () => {
              this.scheduledDidUpdate = !0;
            }),
            M(this, `schedulePromoteTree`, (e, t, n) => {
              ((this.follow = this.lead),
                (this.shouldAnimate = n),
                (this.lead = e),
                (this.transition = t),
                (this.scheduledPromotion = !0));
            }),
            M(this, `initLead`, (e, t) => {
              ((this.follow = this.lead),
                (this.lead = e),
                this.follow && t && (this.follow.layoutMaybeMutated = !0));
            }),
            M(this, `sharedLayoutContext`, {
              schedulePromoteTree: this.schedulePromoteTree,
              scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
              initLead: this.initLead,
            }));
        }
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: t.options.layoutId === Ib && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        render() {
          return D(Lb.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (zb = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (Bb = class {
        constructor(e) {
          (M(this, `sharedIntersectionObserver`),
            M(this, `callbacks`, new WeakMap()),
            (this.sharedIntersectionObserver = new IntersectionObserver(
              this.intersectionObserverCallback.bind(this),
              e
            )));
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (Vb = j(new Map())),
      (Hb = typeof IntersectionObserver > `u` ? ng : ws),
      (Ub = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (Wb = r.createContext(null)),
      (Gb = class extends S {
        constructor() {
          (super(...arguments),
            M(this, `layoutMaybeMutated`, !1),
            M(this, `projectionNodes`, new Map()),
            M(this, `rootProjectionNode`),
            M(this, `isExiting`),
            M(
              this,
              `shouldPreserveFollowOpacity`,
              (e) => e.options.layoutId === Ib && !this.props.isExiting
            ),
            M(this, `switchLayoutGroupContext`, {
              register: (e) => this.addChild(e),
              deregister: (e) => this.removeChild(e),
              transition:
                this.props.isLead !== void 0 && this.props.animatesLayout
                  ? this.props.transition
                  : void 0,
              shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
            }));
        }
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return D(Fe.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (Kb = (e) => {
        let t = r.useContext(Lb);
        return D(Gb, { ...e, sharedLayoutContext: t });
      }),
      (qb = r.createContext(!0)),
      (Jb = j({ register: () => {}, deregister: () => {} })),
      (Yb = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = ks(),
          i = E({
            register: o(
              (e) => {
                if (r.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                r.set(e, void 0);
              },
              [r]
            ),
            deregister: o(
              (e) => {
                (r.get(e)?.(), r.delete(e));
              },
              [r]
            ),
          }).current;
        return (
          c(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, Ze(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          D(Jb.Provider, { value: i, children: n })
        );
      }),
      (Xb = r.memo(function ({
        isLayeredContainer: e,
        isCurrent: t,
        isPrevious: n,
        isOverlayed: r = !1,
        visible: i,
        transitionProps: a,
        children: o,
        backdropColor: s,
        onTapBackdrop: l,
        backfaceVisible: u,
        exitBackfaceVisible: f,
        animation: p,
        exitAnimation: m,
        instant: h,
        initialProps: g,
        exitProps: _,
        position: v = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: y,
        index: b,
        areMagicMotionLayersPresent: x,
        id: S,
        isInitial: C,
      }) {
        let w = me(),
          T = d(Ee),
          { persistLayoutIdCache: O } = d(Zv),
          k = E({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: Ms({}, g, a),
          }),
          ee = E(null),
          A = T !== null && !T.isPresent;
        (t && k.current.wasCurrent === void 0 && O(),
          c(() => {
            if (e || !w) return;
            if (A) {
              k.current = { ...k.current, wasBeingRemoved: A };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = k.current,
              o = (t && !i) || (!A && k.current.wasBeingRemoved && t),
              s = n && !r,
              c = Ms(k.current.origins, g, a),
              l = k.current.wasReset;
            (o || s
              ? (w.stop(), w.start({ zIndex: b, ...c, ...a }), (l = !1))
              : l === !1 && (w.stop(), w.set({ zIndex: b, ...Zb, opacity: 0 }), (l = !0)),
              (k.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [t, n, A]));
        let ne = h ? { type: !1 } : `velocity` in p ? { ...p, velocity: 0 } : p,
          re = h ? { type: !1 } : m || p,
          j = { ...v };
        ((j.left === void 0 || j.right === void 0) && (j.width = `auto`),
          (j.top === void 0 || j.bottom === void 0) && (j.height = `auto`));
        let M = (Ns(a) || Ns(g)) && (e || t || n) ? 1200 : void 0,
          ie = { ...Zb, ...k.current.origins },
          ae = e
            ? {
                initial: { ...ie, ...g },
                animate: { ...ie, ...a, transition: ne },
                exit: { ...ie, ..._, transition: p },
              }
            : { animate: w, exit: { ...ie, ..._, transition: re } },
          N = !(A || x === !1),
          oe = !!t && N,
          se = t && C;
        return te(Fb, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || A || (t && y) ? b : void 0,
            pointerEvents: void 0,
            visibility: i ? `visible` : `hidden`,
            perspective: M,
          },
          children: [
            e &&
              D(Fb, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: p,
                initial: { opacity: h && i ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: s || `transparent`,
                onTap: A ? void 0 : l,
              }),
            D(Fb, {
              ...j,
              ...ae,
              transition: {
                default: ne,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: A ? f : u,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!t,
              style: { pointerEvents: void 0, opacity: se || e || (t && y) ? 1 : 0 },
              "data-is-present": N ? void 0 : !1,
              ref: ee,
              children: D(Wb.Provider, {
                value: ee,
                children: D(qb.Provider, {
                  value: oe,
                  children: D(Yb, {
                    isCurrent: oe,
                    isOverlayed: r,
                    children: D(Kb, {
                      isLead: t,
                      animatesLayout: !!y,
                      transition: ne,
                      isExiting: !N,
                      isOverlayed: r,
                      id: S,
                      children: o,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, js)),
      (Zb = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (Qb = class {
        constructor() {
          (M(this, `warning`, () => {
            _i(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
          }),
            M(this, `goBack`, () => this.warning()),
            M(this, `instant`, () => this.warning()),
            M(this, `fade`, () => this.warning()),
            M(this, `push`, () => this.warning()),
            M(this, `modal`, () => this.warning()),
            M(this, `overlay`, () => this.warning()),
            M(this, `flip`, () => this.warning()),
            M(this, `customTransition`, () => this.warning()),
            M(this, `magicMotion`, () => this.warning()));
        }
      }),
      ($b = j(new Qb())),
      (ex = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (tx = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (nx = gg(Zb)),
      (rx = r.createContext(void 0)),
      (ix = r.createContext(void 0)),
      (ax = (() => {
        var e, t, n, r, i, a;
        class o extends S {
          constructor(n) {
            (super(n),
              xe(this, t),
              xe(this, e, null),
              M(this, `state`, tx()),
              xe(this, i, (e) => {
                if (!this.props.enabled && this.state.history.length > 0) return;
                let t = Ls(this.state, e);
                if (!t) return;
                let { skipLayoutAnimation: n } = this.props,
                  r = t.history[t.current],
                  i =
                    (e.type === `add` && e.transition.withMagicMotion) ||
                    (e.type === `forward` && r?.transition.withMagicMotion) ||
                    (e.type === `remove` && !!t.previousTransition),
                  a = () => {
                    (this.setState(t), r?.key && this.context?.(r.key));
                  };
                n && !i ? n(a) : a();
              }),
              M(this, `goBack`, () => {
                if (!Se(this, t, r).call(this))
                  return (
                    F(this, e, globalThis.event?.timeStamp || null),
                    this.state.currentOverlay === -1
                      ? L(this, i).call(this, { type: `remove` })
                      : L(this, i).call(this, { type: `removeOverlay` })
                  );
              }));
            let a = this.props.children;
            if (!a || !_a(a) || !ga(a)) return;
            let o = { ...ex.Instant },
              s = {
                type: `add`,
                key: a.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: o,
                component: a,
              },
              c = Ls(this.state, s);
            c && (this.state = c);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let n = e.children;
            if (!_a(n) || !ga(n)) return;
            let r = n.key?.toString();
            r &&
              (this.state.history.length === 0
                ? Se(this, t, a).call(this, n, ex.Instant)
                : L(this, i).call(this, { type: `update`, key: r, component: n }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          instant(e) {
            Se(this, t, a).call(this, e, ex.Instant, void 0);
          }
          fade(e, n) {
            Se(this, t, a).call(this, e, ex.Fade, n);
          }
          push(e, n) {
            Se(this, t, a).call(this, e, Ps(n), n);
          }
          modal(e, n) {
            Se(this, t, a).call(this, e, ex.Modal, n);
          }
          overlay(e, n) {
            Se(this, t, a).call(this, e, Fs(n), n);
          }
          flip(e, n) {
            Se(this, t, a).call(this, e, Is(n), n);
          }
          magicMotion(e, n) {
            Se(this, t, a).call(this, e, ex.MagicMotion, n);
          }
          customTransition(e, n) {
            Se(this, t, a).call(this, e, n);
          }
          render() {
            let e = Se(this, t, n).call(this, { overCurrentContext: !1 }),
              r = Se(this, t, n).call(this, { overCurrentContext: !0 }),
              i = Qs(r),
              a = r.current > -1,
              o = this.state.history.length === 1,
              s = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let r = this.state.containerIndex[t];
              V(r !== void 0, `Container's index must be registered`);
              let i = this.state.containerVisualIndex[t];
              V(i !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[r],
                u = this.state.transitionForContainer[t],
                d = r === this.state.current,
                f = r === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              s.push(
                D(
                  Xb,
                  {
                    id: t,
                    index: i,
                    isInitial: o,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: a,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: cc(r, e),
                    transitionProps: u,
                    animation: sc(r, e),
                    backfaceVisible: ac(r, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: D(gs, { children: uc({ component: n, transition: l?.transition }) }),
                  },
                  t
                )
              );
            }
            let c = this.state.overlayStack.map((e, t) =>
              D(
                Xb,
                {
                  isLayeredContainer: !0,
                  isCurrent: t === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: ic(t, r),
                  transitionProps: oc(t, r),
                  instant: cc(t, r, !0),
                  animation: sc(t, r),
                  exitProps: e.transition.enter,
                  visible: lc(t, r),
                  backdropColor: nc(e.transition),
                  backfaceVisible: rc(t, r),
                  onTapBackdrop: dc(e.transition, this.goBack),
                  index: this.state.current + 1 + t,
                  children: uc({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return D(Fb, {
              "data-framer-component-type": `NavigationRoot`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              position: `relative`,
              style: {
                overflow: `hidden`,
                backgroundColor: `unset`,
                pointerEvents: void 0,
                ...this.props.style,
              },
              children: D($b.Provider, {
                value: this,
                children: te(ix.Provider, {
                  value: o,
                  children: [
                    D(Xb, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: $s(i),
                      animation: ec(i),
                      backfaceVisible: tc(i),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: D(la, {
                        children: D(Rb, {
                          children: D(Le, { presenceAffectsLayout: !1, children: s }),
                        }),
                      }),
                    }),
                    D(Le, { children: c }),
                  ],
                }),
              }),
            });
          }
        }
        return (
          (e = new WeakMap()),
          (t = new WeakSet()),
          (n = function (e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }),
          (r = function () {
            return globalThis.event ? L(this, e) === globalThis.event.timeStamp : !1;
          }),
          (i = new WeakMap()),
          (a = function (n, a, o) {
            if (
              Se(this, t, r).call(this) ||
              (F(this, e, globalThis.event?.timeStamp || null), !n || !_a(n) || !ga(n))
            )
              return;
            let s = { ...a, ...o };
            if (s.overCurrentContext)
              return L(this, i).call(this, { type: `addOverlay`, transition: s, component: n });
            let c = n.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            L(this, i).call(this, { type: `add`, key: c, transition: s, component: n });
          }),
          M(o, `defaultProps`, { enabled: !0 }),
          M(o, `contextType`, rx),
          o
        );
      })()),
      (ox = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (sx = $a(r.forwardRef(fc))),
      We(eg(), 1),
      We(eg(), 1),
      We(eg(), 1),
      (cx = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (lx = Symbol(`private`)),
      (ux = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [lx]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new Tv(),
                reset() {
                  for (let t in i)
                    if (cx(i, t)) {
                      let n = cx(e, t) ? Jy(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, fx);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[lx].reset()),
          (e.addObserver = (e, t) => e[lx].observers.add(t)),
          e
        );
      })()),
      (dx = class {
        constructor() {
          (M(this, `set`, (e, t, n, r) => {
            if (t === lx) return !1;
            let i = e[lx],
              a,
              o;
            if (
              (yi(n) ? ((a = n), (o = a.get())) : (o = n),
              i.makeAnimatables &&
                typeof n != `function` &&
                typeof n != `object` &&
                !a &&
                (a = Ev(n)),
              i.observeAnimatables && a)
            ) {
              let e = i.transactions;
              a.onUpdate({
                update: (t, n) => {
                  (n && e.add(n), i.observers.notify({ value: r }, n));
                },
                finish: (t) => {
                  e.delete(t) && i.observers.finishTransaction(t);
                },
              });
            }
            let s = !1,
              c = !0,
              l = Jy(e)[t];
            if (l !== void 0) {
              yi(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (Jy(e)[t] = o));
              let n = typeof o == `object` && !!o;
              ((Array.isArray(o) || n) && (c = !0), (s = !0));
            } else (a && (n = a), (s = Reflect.set(e, t, n)));
            return (c && i.observers.notify({ value: r }), s);
          }),
            M(this, `get`, (e, t, n) => {
              if (t === lx) return Jy(e)[t];
              let r = Reflect.get(e, t, n);
              return typeof r == `function` ? r.bind(n) : r;
            }));
        }
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[lx].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(lx);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== lx) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (fx = new dx()),
      (px = `opacity`),
      (mx = (() => {
        function e(t = {}) {
          let n = ux(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => ux.resetObject(e));
          }),
          (e.addObserver = (e, t) => ux.addObserver(e, t)),
          e
        );
      })()),
      (hx = { update: 0 }),
      (gx = r.createContext({ update: NaN })),
      (_x = class extends S {
        constructor() {
          (super(...arguments),
            M(this, `observers`, []),
            M(this, `state`, hx),
            M(this, `taskAdded`, !1),
            M(this, `frameTask`, () => {
              (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
            }),
            M(this, `observer`, () => {
              this.taskAdded || ((this.taskAdded = !0), Jv.addFrameTask(this.frameTask));
            }));
        }
        componentWillUnmount() {
          (this.observers.map((e) => e()), mx.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            mx._stores.forEach((e) => {
              let t = mx.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            D(gx.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      We(eg(), 1),
      (vx = `__framer__`),
      (yx = vx.length),
      (bx = r.createContext(void 0)),
      (xx = r.createContext(void 0)),
      (Sx = `ssr-variant`),
      (Cx = `ssr-variant-group-separator`),
      (wx = r.forwardRef(function (e, t) {
        let n = Tc(t),
          i = r.useContext(xx),
          a = r.useSyncExternalStore(sg, lg, cg),
          o = fa(() => (a ? (Rn() ? 1 : 2) : 0)),
          s = r.useContext(bx);
        return Lr(() => {
          let { breakpoint: t, overrides: r, children: a, ...c } = e;
          if (!s)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(a, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = s,
            d = i?.primaryVariantId === l ? i?.variants : void 0;
          switch (o) {
            case 0:
              return n(a, Nc(t, c, r));
            case 1:
              return Oc(r, a, c, u, l, d, n, t);
            case 2:
              return Oc(r, a, c, u, l, d, wc, void 0);
            default:
              H(o);
          }
        }, [s, i, n, e]);
      })),
      (Tx = vy(wx, `.${Sx} { display: contents }`, `PropertyOverrides`)),
      (Ex = `default`),
      (Dx = new Set([Ex])),
      (kx = class {
        constructor() {
          (M(this, `entries`, new Map()), xe(this, Ox, {}));
        }
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (V(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (V(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = Ex, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return Ex;
          let n = L(this, Ox)[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (L(this, Ox)[e] = kc(r)) : Ex;
        }
        setAll(e, t = Dx, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = Ze(n.transformTemplate) ? n.transformTemplate?.({}, jx) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: B(a) ? a : void 0,
              animate: B(o) ? o : void 0,
              transformTemplate: R(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (Ox = new WeakMap()),
      (Ax = new kx()),
      (jx = `__Appear_Animation_Transform__`),
      (Mx = `data-framer-appear-id`),
      (Nx = `data-framer-appear-animation`),
      (Px = (e) => {
        if (co())
          return {
            animate: Fc(e.animate) ? e.animate : void 0,
            initial: Fc(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (Fx = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (Ix = (e) => ({
        x: N(e?.x ?? 0),
        y: N(e?.y ?? 0),
        opacity: N(e?.opacity ?? 1),
        scale: N(e?.scale ?? 1),
        rotate: N(e?.rotate ?? 0),
        rotateX: N(e?.rotateX ?? 0),
        rotateY: N(e?.rotateY ?? 0),
        skewX: N(e?.skewX ?? 0),
        skewY: N(e?.skewY ?? 0),
        transformPerspective: N(e?.transformPerspective ?? 0),
      })),
      (Lx = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (Rx = { willChange: `transform` }),
      Object.freeze(Rx),
      (zx = {}),
      Object.freeze(zx),
      (Bx = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (Vx = () => {
        let e = E();
        return (
          c(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (Hx = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (Ux = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (Wx = 1),
      (Gx = 4),
      (Kx = new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (qx = [`animate`, `animate`]),
      (Jx = { inputRange: [], outputRange: [] }),
      (Yx = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (Xx = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (Zx = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (Qx = [0, 1]),
      ($x = { parallax: Hx, styleAppear: Kx, styleTransform: Yx, loop: Bx, presence: Ux }),
      (eS = gg($x)),
      (tS = (e) => e.reduce((e, t) => (e += t), 0)),
      (nS = (e) => e.reduce((e, t) => (e *= t), 1)),
      (rS = `current`),
      (iS = (e) =>
        r.forwardRef((t, n) => {
          if (t.__withFX)
            return D(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let i = Px(t);
          if (i) return D(e, { ...t, ...i, ref: n });
          let {
              parallax: a = {},
              styleAppear: o = {},
              styleTransform: s = {},
              presence: c = {},
              loop: l = {},
              forwardedProps: u,
              targetOpacityValue: d,
              withPerspective: f,
              inSmartComponent: p = !1,
            } = il(t),
            m = xs(n),
            { values: h, style: g } = Wc(c, m, p, t.style, t[qe]),
            { values: _, style: v } = Bc(a, m, t.style?.visibility),
            { values: y, style: b } = nl(s, m),
            { values: x, style: S } = Qc(o, m),
            { values: C, style: w } = Rc(l, m),
            T = r.useMemo(() => {
              let e = new Ue(d ?? 1);
              return {
                scale: [x.scale, C.scale, h.scale, y.scale],
                opacity: [x.opacity, C.opacity, h.opacity, e, y.opacity],
                x: [x.x, C.x, h.x, y.x],
                y: [x.y, C.y, _.y, h.y, y.y],
                rotate: [x.rotate, C.rotate, h.rotate, y.rotate],
                rotateX: [x.rotateX, C.rotateX, h.rotateX, y.rotateX],
                rotateY: [x.rotateY, C.rotateY, h.rotateY, y.rotateY],
                skewX: [x.skewX, C.skewX, h.skewX, y.skewX],
                skewY: [x.skewY, C.skewY, h.skewY, y.skewY],
                transformPerspective: [y.transformPerspective, x.transformPerspective],
              };
            }, [d, y, _, x, C, h]);
          ol(t.style, T);
          let E = ve(T.scale, nS),
            O = ve(T.opacity, nS),
            k = ve(T.x, tS),
            ee = ve(T.y, tS),
            te = ve(T.rotate, tS),
            A = ve(T.rotateX, tS),
            ne = ve(T.rotateY, tS),
            re = ve(T.skewX, tS),
            j = ve(T.skewY, tS),
            M = ve(T.transformPerspective, tS),
            { drag: ie, dragConstraints: ae } = u;
          zo(ie && al(ae) ? ae : void 0);
          let N = {
            opacity: O,
            scale: E,
            x: k,
            y: ee,
            rotate: te,
            rotateX: A,
            rotateY: ne,
            skewX: re,
            skewY: j,
          };
          tt(f) && (N.transformPerspective = M);
          let oe = sl(t.animate) ? t.animate : void 0,
            se = sl(t.initial) ? t.initial : void 0,
            ce = sl(t.exit) ? t.exit : void 0,
            le = p && !c.presenceInitial ? { initial: se, animate: oe, exit: ce } : {};
          return D(e, {
            ...u,
            ...le,
            __withFX: !0,
            style: { ...t.style, ...v, ...b, ...w, ...N, ...S, ...g },
            values: h,
            ref: m,
          });
        })),
      (aS = r.createContext({})),
      (oS = r.forwardRef(function ({ width: e, height: t, y: n, children: i, ...a }, o) {
        let s = r.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          c = Tc(o);
        return D(aS.Provider, { value: s, children: c(i, a) });
      })),
      (sS = (e) =>
        r.forwardRef((t, n) =>
          D(e, { layoutId: Lo(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (cS = !1),
      (lS = class extends S {
        constructor() {
          (super(...arguments), M(this, `state`, { error: void 0 }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!ll(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              ut(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          ln(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!ll(e)) throw e;
          return ((cS = !0), this.props.children);
        }
      }),
      (uS = s === void 0 ? null : new Promise(() => {})),
      (dS = D(ul, {})),
      (fS = j(!1)),
      (fS.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (pS = D(fl, {})),
      (mS = class extends S {
        constructor() {
          (super(...arguments), M(this, `state`, { hasError: !1 }));
        }
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (ml(this.props.getErrorMessage(), t?.componentStack), pl(e, t));
        }
        render() {
          let { children: e, fallback: t = pS } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (hS = class extends S {
        constructor() {
          (super(...arguments), M(this, `state`, { hasError: !1 }));
        }
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            pl(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (gS = r.createContext(void 0)),
      (_S = `code-crash:`),
      (vS = sS(
        r.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            isModuleExternal: s,
            inComponentSlot: c,
            ...l
          },
          u
        ) {
          let d = fa(() => (t ? `${t}-container` : void 0)),
            f = jo(n),
            p = Ol(
              r.Children.map(e, (e) =>
                r.isValidElement(e) ? r.cloneElement(e, { layoutId: t }) : e
              ),
              i,
              a,
              o,
              s,
              c
            );
          return D(f, {
            layoutId: d,
            ...l,
            ref: u,
            children: D(db.Provider, {
              value: !0,
              children: D(B_.Provider, {
                value: a ?? null,
                children: D(da, {
                  enabled: !1,
                  children: D(He, { id: t ?? ``, inherit: l.layout ? !0 : `id`, children: p }),
                }),
              }),
            }),
          });
        })
      )),
      (yS = r.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = Ol(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = jo(f);
          return D(B_.Provider, {
            value: a ?? null,
            children: D(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return D(B_.Provider, {
            value: a ?? null,
            children: D(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (bS = j({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (xS = `framer-cursor-none`),
      (SS = `framer-pointer-events-none`),
      (CS = _(function ({ children: e }) {
        let t = fa(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = kl(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = Xe();
        return te(bS.Provider, { value: t, children: [e, !n && D(DS, {})] });
      })),
      (wS = vy(
        CS,
        [
          `.${xS}, .${xS} * { cursor: none !important; }`,
          `.${SS}, .${SS} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (TS = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (ES = `data-framer-portal-id`),
      (DS = _(function () {
        let { onRegisterCursors: e } = d(bS),
          [t, n] = p(!1),
          r = de(0),
          i = de(0),
          a = de(0),
          s = E(null),
          l = E({ cursors: {}, cursorHash: void 0 }),
          u = Ro();
        (ne(() => {
          let e = q.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? re(() => n(!1)) : n(!0);
          }
          return (
            e.addEventListener(`change`, t),
            e.matches || n(!0),
            () => {
              e.removeEventListener(`change`, t);
            }
          );
        }, []),
          c(() => {
            if (!t) return;
            let e = 0,
              n = 0;
            function o() {
              (r.set(e), i.set(n), ke(a, 1, { type: `tween`, duration: 0.2 }));
            }
            let c = () => {
              if (et(l.current.cursors)) return;
              let t = Nl(e, n);
              t !== l.current.cursorHash && ((l.current.cursorHash = t), je.update(() => u()));
            };
            function d(t) {
              if (t.pointerType === `touch`) {
                Ie(c);
                return;
              }
              (je.read(c, !0), (e = t.clientX), (n = t.clientY), je.update(o));
            }
            function f(e) {
              if (e.target === s.current || !s.current) return;
              let t = new PointerEvent(e.type, {
                bubbles: !0,
                cancelable: e.cancelable,
                pointerType: e.pointerType,
                pointerId: e.pointerId,
                composed: e.composed,
                isPrimary: e.isPrimary,
                buttons: e.buttons,
                button: e.button,
              });
              je.update(() => {
                s.current?.dispatchEvent(t);
              });
            }
            return (
              q.addEventListener(`pointermove`, d),
              document.addEventListener(`pointerdown`, f),
              document.addEventListener(`pointerup`, f),
              je.read(c, !0),
              () => {
                (q.removeEventListener(`pointermove`, d),
                  document.removeEventListener(`pointerdown`, f),
                  document.removeEventListener(`pointerup`, f),
                  Ie(c));
              }
            );
          }, [a, r, i, u, t]),
          c(() => {
            if (!t) return;
            function e() {
              ke(a, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              q.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), q.removeEventListener(`blur`, e));
              }
            );
          }, [a, t]),
          ne(() => {
            function t(e) {
              ((l.current.cursors = e),
                (l.current.cursorHash = et(e) ? null : Nl(r.get(), i.get())),
                u());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(xS, !1));
            };
          }, [r, i, e, u]));
        let { cursors: f, cursorHash: m } = l.current,
          h = m ? f[m] : null,
          g = Al(h);
        ne(() => {
          t && document.body.classList.toggle(xS, g);
        }, [g, t]);
        let _ = h?.component,
          v = h?.transition ?? { duration: 0 },
          y = v.duration === void 0 ? v : { ...v, duration: v.duration * 1e3 },
          b = ue(r, y),
          x = ue(i, y),
          S = ve(() => b.get() + (h?.offset?.x ?? 0)),
          C = ve(() => x.get() + (h?.offset?.y ?? 0)),
          T = h?.alignment,
          O = h?.placement,
          k = o((e, t) => `translate(${Ml(O, T)}) ${t}`, [T, O]);
        return !t || !h || !_
          ? null
          : D(w, {
              children: D(_, {
                transformTemplate: k,
                style: { ...TS, x: S, y: C, opacity: a },
                globalTapTarget: !0,
                variant: h?.variant,
                ref: s,
                className: SS,
              }),
            });
      })),
      (OS = `webPageId`),
      (kS = class {
        constructor() {
          (M(this, `collectedLinks`, new Map()), M(this, `nestingInfo`, new Map()));
        }
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            V(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (V(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((rg && !Bn()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(Il(e), e), this.collectedLinks.set(Il(t), t));
          let n = this.nestingInfo.get(Il(e)) ?? new Set();
          (n.add(Il(t)), this.nestingInfo.set(Il(e), n));
        }
      }),
      (AS = new kS()),
      (jS = `element`),
      (MS = `collection`),
      (NS = `collectionItemId`),
      (PS = `pathVariables`),
      (FS = `framer/page-link,`),
      (IS = j(void 0)),
      (LS = `--text-selection-color`),
      (RS = `--text-selection-background-color`),
      (zS = vy(eu, (e, t) => $l(t?.triggerId), `InjectSelectionStyle`)),
      (BS = {
        isClockwise: (e) => BS.signedArea(e) <= 0,
        signedArea: (e) => {
          let t = 0,
            n = e.length;
          for (let r = 0; r < n; r++) {
            let i = e[r],
              a = e[(r + 1) % n];
            !i || !a || (t += i.x * -a.y - a.x * -i.y);
          }
          return (1 / 2) * t;
        },
        containsPoint: (e, t) => {
          let n;
          for (let r = 0; r < e.length; r++) {
            if (wi.isEqual(e[r], t)) return !0;
            let i = e[r]?.x ?? 0,
              a = e[r]?.y ?? 0,
              o = (r + 1) % e.length;
            if (wi.isEqual(e[o], t)) return !0;
            let s = e[o]?.x ?? 0,
              c = e[o]?.y ?? 0,
              l = (t.x - i) * (c - a) - (t.y - a) * (s - i);
            if (l === 0) continue;
            let u = l > 0;
            if (((n ??= u), n !== u)) return !1;
          }
          return !0;
        },
        intersects: (e, t) => {
          if (e.length < 1 || t.length < 1) return !1;
          let n = X.boundingRectFromPoints(e),
            r = X.boundingRectFromPoints(t);
          if (!X.intersects(n, r)) return !1;
          let i = [],
            a = e.length;
          e.forEach((t, n) => {
            let r = e[(n + 1) % a];
            r && i.push(ry(t, r));
          });
          let o = [],
            s = t.length;
          t.forEach((e, n) => {
            let r = t[(n + 1) % s];
            r && o.push(ry(e, r));
          });
          for (let e of i) for (let t of o) if (ry.intersection(e, t, !0)) return !0;
          return !!(BS.containsPoint(t, e[0]) || BS.containsPoint(e, t[0]));
        },
        contains: (e, t) => {
          for (let n = 0; n < t.length; n++) if (!BS.containsPoint(e, t[n])) return !1;
          return !0;
        },
        clipToRect: (e, t) => {
          let n = X.edges(t),
            r = new Set(),
            i = e.length,
            a = [],
            o = [];
          for (let s = 0; s < i; s++) {
            let c = e[s],
              l = e[(s + 1) % i];
            if (X.containsPoint(t, c)) {
              let e = tu(c);
              if ((r.add(e), o.push(c), X.containsPoint(t, l))) continue;
            }
            let u = ry(c, l);
            n.forEach((e) => {
              let t = ry.intersection(u, e, !0);
              if (!t) return;
              let n = tu(t);
              r.has(n) || (r.add(n), a.push(t));
            });
          }
          return a.length === 0
            ? o
            : (X.points(t).forEach((t) => {
                BS.containsPoint(e, t) && (r.add(tu(t)), a.push(t));
              }),
              wi.sortClockwise([...o, ...a]));
        },
      }),
      (VS = 5),
      (HS = 4),
      (US = (() => {
        let e = r.createContext(new Set());
        return ((e.displayName = `FloatingStackingContext`), e);
      })()),
      (WS = `overlay`),
      (GS = `template-overlay`),
      (KS = r.forwardRef(function ({ Component: e, ...t }, n) {
        return e ? D(e, { ...t, ref: n }) : null;
      })),
      (qS = class extends S {
        constructor() {
          (super(...arguments),
            M(this, `state`, { error: void 0 }),
            M(this, `message`, `Made UI non-interactive due to an error.`),
            M(this, `messageFatal`, `Fatal error.`));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((s.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(ut(ig ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          ln(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (ig && document.getElementById(`main`)?.innerHTML) || ``;
          return D(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${ut()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (JS = /:([a-z]\w*)/gi),
      (YS = j(void 0)),
      (XS = 500),
      (ZS = 0.9),
      (QS = 1.7),
      ($S = 4),
      (eC = 1 / 0),
      (tC = new WeakMap()),
      (nC = new Set()),
      (rC = new Map()),
      (iC = !$g || typeof IntersectionObserver > `u` ? null : Mu()),
      (aC = Eu(
        A(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: s,
            scopeId: c,
            motionChild: l,
            ...u
          },
          d
        ) {
          let p = jt(),
            m = Nt(),
            h = Au(),
            { activeLocale: g, locales: _ } = zr(),
            v = Ru(),
            y = En(),
            b = Ll(),
            x = zu({ nodeId: s, clickTrackingId: i, router: p, href: t, activeLocale: g }),
            S = f(() => {
              if (!t) return {};
              let e = Fl(t) ? t : Wl(t);
              if (!e) return {};
              if (R(e))
                return Uu(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: n,
                    trackLinkClick: x,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  y,
                  g?.id,
                  _,
                  h
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = v(i, s, g);
              if (st(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: b,
                } = Du(p, m, e, g, c, h),
                S = Pu(n, !0),
                C = S === `_blank`,
                w = { pathVariables: f, locale: b },
                T = (e) => Vu(p, l, () => y(l, w, !1, !C), d, f, r, e);
              return {
                href: u,
                target: S,
                onClick: Hu(u, x, T),
                "data-framer-page-link-current": (m && ju(m, e, h)) || void 0,
                navigate: T,
                preload: () => y(l, w, !0, !C),
                _routeId: l,
                _pathVariables: f,
                _locale: b,
              };
            }, [t, p, g, h, n, m, r, x, a, _, o, v, y]),
            C = xs(k(e) && `ref` in e ? e.ref : void 0),
            { navigate: w, preload: T, _routeId: E, _pathVariables: D, _locale: O, ...ee } = S;
          Ss(
            C,
            (e) => {
              if (!(e === null || !E || !T || b))
                return iC?.(e, T, `${E}:${O?.id}:${JSON.stringify(D)}`);
            },
            [T, E, D, O]
          );
          let te = !!w;
          return ql(
            Tc(d).cloneAsArray(e, (e) => Wu(e, { ...u, ...Ku(ee, l, te) }, C)),
            c,
            s,
            t,
            S,
            C
          );
        })
      )),
      (oC = r.createContext(void 0)),
      (sC = `__framer_force_showing_editorbar_since`),
      (cC = class extends S {
        constructor() {
          (super(...arguments), M(this, `state`, { error: void 0 }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (lC = () => {
        try {
          return !!localStorage[sC];
        } catch {
          return !1;
        }
      }),
      (uC = () => !lC()),
      (dC = (() => {
        let e = j(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (fC = `main`),
      (pC = `framerGeneratedPage`),
      (mC = `<!-- Start of headStart -->`),
      (hC = `<!-- End of headStart -->`),
      (gC = `<!-- Start of headEnd -->`),
      (_C = `<!-- End of headEnd -->`),
      (vC = `<!-- Start of bodyStart -->`),
      (yC = `<!-- End of bodyStart -->`),
      (bC = `<!-- Start of bodyEnd -->`),
      (xC = `<!-- End of bodyEnd -->`),
      (SC = r.createContext(void 0)),
      (CC = null),
      (wC = null),
      og(md),
      (TC = (e, t, n, r, i, a) => {
        let o = d(oC),
          l = E(),
          u = yn(),
          f = E(!0);
        return (
          c(() => {
            function c() {
              (!CC || !wC) && md();
              let s = n ? new URL(q.location.origin + n) : q.location,
                c = {
                  version: Bg,
                  abTestId: e?.abTestId,
                  framerSiteId: o ?? null,
                  webPageId: e?.abTestingVariantId ?? t,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: i?.code || null,
                  referrer: null,
                  url: s.href,
                  hostname: s.hostname,
                  pathname: s.pathname,
                  search: s.search || null,
                  hash: s.hash || null,
                  timezone: CC,
                  locale: wC,
                },
                l = f.current && a !== void 0 ? a : void 0;
              return e?.collectionId && r
                ? (async () => {
                    let t = l ?? null;
                    if (l === void 0) {
                      let n = e.collectionId && u?.get(e.collectionId),
                        [a] = Object.values(r);
                      if (n && R(a)) {
                        let e = n.getRecordIdBySlug(a, i || void 0);
                        t = (st(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (l.current = c()),
                t = e instanceof Promise ? await e : e;
              ((l.current = t),
                f.current ? (f.current = !1) : ln(`published_site_pageview`, t, `eager`));
            })();
            let d = async (e) => {
              if (e.persisted) {
                let e = (l.current = c()),
                  t = e instanceof Promise ? await e : e;
                ((l.current = t), ln(`published_site_pageview`, t, `eager`));
              }
            };
            return (
              s.addEventListener(`pageshow`, d),
              () => {
                s.removeEventListener(`pageshow`, d);
              }
            );
          }, [e, t, n, r, i, o, u, a]),
          l
        );
      }),
      (EC = { status: `loading`, data: void 0 }),
      (DC = 5e3),
      (OC = () => {}),
      (FC = class e {
        constructor() {
          (M(this, `responseValues`, new Map()),
            xe(this, kC, new Map()),
            xe(this, AC, new Set()),
            xe(this, jC, new Map()),
            xe(this, MC, new Map()),
            xe(this, NC, new Map()),
            xe(this, PC, new Map()),
            M(
              this,
              `persistCache`,
              bc(() => {
                let t = {};
                for (let [e, n] of this.responseValues) {
                  if (!n || n.status !== `success`) continue;
                  let r = L(this, jC).get(e);
                  if (!r || r === 0) continue;
                  let i = L(this, MC).get(e);
                  i && ((i && Ad(i, r)) || (t[e] = [i, r, n.data]));
                }
                try {
                  localStorage.setItem(e.cacheKey, JSON.stringify(t));
                } catch {}
              }, 500)
            ));
        }
        unmount() {
          for (let [e, t] of L(this, PC)) (clearInterval(t), L(this, PC).delete(e));
        }
        stopQueryRefetching(e) {
          let t = Ed(e),
            n = L(this, PC).get(t);
          n && (clearInterval(n), L(this, PC).delete(t));
        }
        startQueryRefetching(e) {
          let t = Ed(e),
            n = L(this, PC).get(t),
            r = L(this, jC).get(t);
          if (n || !r) return;
          let i = q.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = L(this, MC).get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          L(this, PC).set(t, i);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              Ad(r, i) ||
                (L(this, MC).set(e, r),
                L(this, jC).set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = L(this, kC).get(e);
          if (n) for (let e of n) e();
        }
        async prefetch(e) {
          if (!Rn() || !zl(e.url, !1)) return;
          let t = Ed(e);
          (L(this, AC).add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = L(this, kC).get(t);
          for (let e of r ?? []) e();
          let i = kd(n, e);
          return (e.resultOutputType === `image` && R(i) && (await Cd(i).catch(OC)), i);
        }
        async fetchWithCache(e) {
          if (!Rn()) return;
          let t = Ed(e),
            n = L(this, NC).get(t);
          if (n) return n;
          let r = L(this, MC).get(t),
            i = r && Ad(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, EC);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                L(this, MC).set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            L(this, NC).set(t, a),
            a.finally(() => {
              L(this, NC).delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !L(this, AC).has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!zl(r, !1)) return OC;
          let a = Ed(e),
            o = L(this, jC).get(a);
          ((!o || i < o) && L(this, jC).set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = L(this, kC).get(a) ?? new Set();
          return (
            s.add(t),
            L(this, kC).set(a, s),
            () => {
              let n = L(this, kC).get(a);
              n &&
                (n.delete(t),
                n.size === 0 && L(this, kC).delete(a),
                L(this, kC).size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (kC = new WeakMap()),
      (AC = new WeakMap()),
      (jC = new WeakMap()),
      (MC = new WeakMap()),
      (NC = new WeakMap()),
      (PC = new WeakMap()),
      M(FC, `cacheKey`, `framer-fetch-client-cache`),
      (IC = FC),
      (LC = j(void 0)),
      (RC = j(!0)),
      (zC = ({ children: e, client: t }) => {
        let [n] = p(() => t ?? new IC()),
          [r, i] = p(!0);
        return (
          c(
            () => (
              n.hydrateCache(),
              re(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          D(RC.Provider, { value: r, children: D(LC.Provider, { value: n, children: e }) })
        );
      }),
      (ze.WillChange = Ge),
      (BC = Eu(
        A(function ({ links: e, children: t, ...n }, r) {
          let i = jt(),
            { activeLocale: a } = zr(),
            o = Tc(r),
            s = Ru(),
            c = [],
            l = e.map((e) => {
              if (e)
                return R(e)
                  ? Ju(e, i, void 0, void 0, a)
                  : Ju(e.href, i, e.implicitPathVariables, e.refKey, a, (e, t) => s(e, t, a, c));
            });
          if (c.length > 0) throw Promise.allSettled(c);
          return o(t(l), n);
        })
      )),
      (Z = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return Gd(e, t);
            case `boolean`:
              return qd(e);
            case `color`:
              return Xd(e);
            case `date`:
              return Qd(e);
            case `enum`:
              return ef(e);
            case `file`:
              return nf(e);
            case `link`:
              return af(e);
            case `number`:
              return sf(e);
            case `object`:
              return uf(e, t);
            case `responsiveimage`:
              return ff(e);
            case `richtext`:
              return mf(e);
            case `string`:
              return vf(e);
            case `vectorsetitem`:
              return gf(e);
            case `unknown`:
              return e;
            default:
              H(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Qe(e)
            ? { type: `boolean`, value: e }
            : it(e)
              ? { type: `date`, value: e.toISOString() }
              : z(e)
                ? { type: `number`, value: e }
                : R(e)
                  ? { type: `string`, value: e }
                  : $e(e)
                    ? { type: `array`, value: e.map(Z.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && bf(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && bf(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && bf(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && bf(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && bf(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => Z.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => Z.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = yf(e),
            i = yf(t);
          return nt(r) || nt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = yf(e),
            i = yf(t);
          return nt(r) || nt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = yf(e),
            i = yf(t);
          return nt(r) || nt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          switch (e?.type) {
            case `array`:
              return e.value.length;
          }
          return 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(Z.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return R(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              H(e);
          }
        },
      }),
      (VC = { type: `unknown`, isNullable: !0 }),
      (HC = class {
        constructor(e, t) {
          (M(this, `collection`, e),
            M(this, `locale`, t),
            M(this, `schema`),
            M(this, `indexes`, []));
          let n = so(e);
          V(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (V(n !== `array`, `Array properties are not supported`),
              V(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (rt(i)) continue;
            let a = this.schema[t];
            if (!tt(a)) {
              if ((V(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
                n[t] = { type: a.type, value: { itemIndex: r, key: t } };
                continue;
              }
              n[t] = { type: a.type, value: i };
            }
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await xf(this.collection, this.locale))[t]?.[n];
          return Cg.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems() {
          return (await xf(this.collection, this.locale)).map((e, t) => {
            let n = String(t);
            return this.getDatabaseItem(e, n);
          });
        }
        async resolveItems(e) {
          let t = await xf(this.collection, this.locale);
          return e.map((e) => {
            let n = Number(e),
              r = t[n];
            return (V(r, `Can't find collection item`), this.getDatabaseItem(r, e));
          });
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (UC = new Map()),
      (WC = new WeakMap()),
      (GC = `$r_`),
      (KC = new Map()),
      (qC = 1e3),
      (Q = class e {
        constructor(e) {
          M(this, `network`, e);
        }
        static estimate(t, n) {
          let r = Tf(),
            i = Ef(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (JC = class {
        constructor(e, t) {
          (M(this, `id`, e),
            M(this, `relational`, t),
            M(this, `nodes`, []),
            M(this, `winners`, new Map()));
        }
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new YC();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          V(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (YC = class {
        constructor() {
          (M(this, `node`), M(this, `cost`, new Q(1 / 0)), M(this, `nodes`, []));
        }
        update(e, t) {
          (this.nodes.push(e), Q.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (XC = class {
        constructor(e) {
          M(this, `isSynchronous`, e);
        }
      }),
      (ZC = class extends XC {
        constructor() {
          (super(...arguments), M(this, `group`));
        }
        getGroup() {
          return (V(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (V(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return Nd(this.evaluate(void 0));
        }
        evaluateAsync() {
          return Pd(this.evaluate(void 0));
        }
      }),
      (QC = class {
        constructor(e, t, n = {}) {
          (M(this, `options`, n),
            M(this, `collections`),
            M(this, `richTextCache`, new WeakMap()),
            M(this, `vectorSetItemCache`, new WeakMap()),
            (this.collections = Pf(e, t)));
        }
        *resolveArrayValue(e) {
          return yield* Id(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* G(t);
        }
        loadRichTextValue(e) {
          let t = e.value;
          V(jf(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          V(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = this.options.richTextMode === `raw` ? t.pointer : n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return ot(t) ? yield t : t;
        }
        loadVectorSetItemValue(e) {
          let t = e.value;
          V(Nf(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (V(n, `Can't find collection for vector set item pointer`),
            V(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return ot(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      ($C = `index`),
      (ew = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), K(this.name, ...e));
        }
      }),
      (tw = class {
        constructor(e, t, n) {
          (M(this, `id`, e),
            M(this, `name`, t),
            M(this, `data`, n),
            M(this, `indexes`, new rw()),
            M(this, `fields`, new $()));
        }
      }),
      (nw = class {
        constructor(e, t, n, r, i, a) {
          (M(this, `id`, e),
            M(this, `data`, t),
            M(this, `collection`, n),
            M(this, `lookupNodes`, r),
            M(this, `constraint`, i),
            M(this, `ordering`, a),
            M(this, `resolvedFields`, new $()));
          for (let e in t.schema)
            for (let t of n.fields) t.name === e && this.resolvedFields.add(t);
        }
      }),
      (rw = class extends ew {
        constructor() {
          (super(...arguments), M(this, `name`, `Indexes`));
        }
      }),
      (iw = class {
        constructor(e, t, n, r) {
          (M(this, `id`, e),
            M(this, `name`, t),
            M(this, `definition`, n),
            M(this, `collection`, r));
        }
        getValue(e) {
          V(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return { type: `array`, value: e.value.map((e) => this.wrapPointers(e)) };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                V(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: Af(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                V(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: Mf(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      ($ = class extends ew {
        constructor() {
          (super(...arguments), M(this, `name`, `Fields`));
        }
      }),
      (aw = class {
        constructor(e, t = `asc`) {
          (M(this, `field`, e), M(this, `direction`, t));
        }
        getHash() {
          return K(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (ow = class {
        constructor(e) {
          (M(this, `fields`, []), e && this.merge(e));
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return K(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e || (this.length === e.length && this.getHash() === e.getHash());
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== $C) return !1;
          return !0;
        }
      }),
      (sw = class {
        constructor(e, t) {
          (M(this, `ordering`, e), M(this, `resolvedFields`, t));
        }
        getHash() {
          return K(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 || e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0 || e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (cw = class e {
        constructor(e) {
          (M(this, `parent`, e), M(this, `node`), M(this, `ordering`), M(this, `fields`, []));
        }
        takeNode() {
          let e = this.node;
          return (V(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (V(!this.node, `Node already set`), (this.node = e));
        }
        setOrdering(e) {
          this.ordering = e;
        }
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.addField(t);
        }
        resolveField(e, t) {
          let n = [];
          for (let r of this.fields) r.name === e && ((t && r.collectionName !== t) || n.push(r));
          if (n.length === 1) return n[0];
          if (n.length > 1) throw Error(`Ambiguous fields`);
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fields.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new ow();
        }
        getRequiredResolvedFields() {
          let e = new $();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new sw(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          V(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (V(e, `Field must exist`), e.field);
        }
      }),
      (lw = class {
        constructor() {
          (M(this, `pointers`, new Map()), M(this, `values`, new Map()));
        }
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (uw = class e {
        constructor(e, t = []) {
          (M(this, `fields`, e), M(this, `tuples`, t));
        }
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new $();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new $();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (dw = class {
        constructor(e, t) {
          (M(this, `input`, e), M(this, `field`, t));
        }
        getHash() {
          return K(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (fw = class e extends ZC {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            M(this, `input`, e),
            M(this, `projections`, t),
            M(this, `passthrough`, n),
            M(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return K(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new $();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new $();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new sw(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new Q(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = Q.max(i, n);
          }
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new dw(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Id(
              n.tuples.map((t) =>
                Id(
                  this.projections.map((n) => G({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new lw();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            V(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (pw = { type: 0 }),
      (mw = class extends XC {
        constructor(e, t, n) {
          (super(n),
            M(this, `referencedFields`, e),
            M(this, `referencedOuterFields`, t),
            M(this, `isSynchronous`, n));
        }
        evaluateSync() {
          return Nd(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return Pd(this.evaluate(void 0, void 0));
        }
      }),
      (hw = { type: 0 }),
      (gw = class {
        constructor(e, t) {
          (M(this, `when`, e), M(this, `then`, t));
        }
        getHash() {
          return K(`CaseCondition`, this.when, this.then);
        }
      }),
      (_w = class e extends mw {
        constructor(e, t, n) {
          let r = new $(),
            i = new $(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            M(this, `input`, e),
            M(this, `conditions`, t),
            M(this, `otherwise`, n),
            M(this, `definition`, { type: `unknown`, isNullable: !0 }));
        }
        getHash() {
          return K(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new Q(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new gw(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* G({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Id(
              this.conditions.map((n) =>
                G({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (Z.equal(n, e, hw)) return t;
          } else for (let { when: e, then: t } of r) if (Jd(e)) return t;
          return i;
        }
      }),
      (vw = class {
        constructor(e, t, n) {
          (M(this, `normalizer`, e),
            M(this, `query`, t),
            M(this, `locale`, n),
            M(this, `collectionId`, 0),
            M(this, `indexId`, 0),
            M(this, `fieldId`, 0),
            M(this, `subqueries`, []));
        }
        build() {
          let e = new cw();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new $(),
            o;
          if (t.orderBy) {
            o = new ow();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (tt(t)) continue;
                a.add(t.field);
                let r = new aw(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new iw(Lf(this.fieldId++), void 0, t.definition, void 0),
                  a = new dw(t, r);
                i.push(a);
                let s = new aw(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new $(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (tt(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              V(n.alias, `Subqueries should have an alias`);
              let r = Lf(this.fieldId++),
                a = n.alias,
                s = new iw(r, a, t.definition, void 0),
                c = new dw(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              H(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = wf(t.data, this.locale),
            i = t.alias,
            a = new tw(Ff(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new iw(Lf(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.fields.add(r));
          }
          {
            let e = new iw(Lf(this.fieldId++), $C, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: $C, collectionName: i });
            let t = new ow(),
              r = new aw(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new ow(),
              o = new nw(If(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new ow(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              H(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              H(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(VC, null);
        }
        buildLiteralValue(e) {
          let t = Z.parse(e.value);
          return this.normalizer.newScalarConstant(VC, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (V(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                V(n, `Missing argument`),
                V(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                V(n, `Missing argument`),
                V(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              H(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new yw(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new yw(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new gw(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              H(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              H(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (yw = class {
        constructor(e) {
          (M(this, `inScope`, e),
            M(this, `referencedFields`, new $()),
            M(this, `referencedOuterFields`, new $()));
        }
      }),
      (bw = class e extends ZC {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            M(this, `input`, e),
            M(this, `predicate`, t),
            M(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return K(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new sw(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* Id(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => Jd(n[t] ?? null));
        }
      }),
      (xw = class e extends ZC {
        constructor(e, t) {
          (super(!1), M(this, `index`, e), M(this, `query`, t));
        }
        getHash() {
          return K(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return Q.estimate(1, e ? 100 * qC : 50 * qC);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection;
          return new uw(
            this.getOutputFields(),
            (yield e.data.lookupItems(this.query)).map((n) => {
              let r = new lw();
              for (let i of e.resolvedFields) {
                let e = i.getValue(n);
                (r.addPointer(t, n.pointer), r.addValue(i, e));
              }
              return r;
            })
          );
        }
      }),
      (Sw = class e extends ZC {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            M(this, `left`, e),
            M(this, `right`, t),
            M(this, `leftGroup`),
            M(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return K(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new $(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new sw(new ow(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* G({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (Cw = class e extends ZC {
        constructor(e) {
          (super(!1), M(this, `collection`, e));
        }
        getHash() {
          return K(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return Q.estimate(1, 200 * qC);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields();
          return new uw(
            t,
            (yield e.data.scanItems()).map((n) => {
              let r = new lw();
              for (let i of t) {
                let t = i.getValue(n);
                (r.addPointer(e, n.pointer), r.addValue(i, t));
              }
              return r;
            })
          );
        }
      }),
      (ww = class e extends ZC {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            M(this, `left`, e),
            M(this, `right`, t),
            M(this, `leftGroup`),
            M(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return K(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new $(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new sw(new ow(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* G({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (Tw = class e extends mw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            M(this, `left`, e),
            M(this, `right`, t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* G({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Jd(n) && Jd(r) };
        }
      }),
      (Ew = class extends mw {
        constructor(e, t) {
          let n = new $(),
            r = new $();
          (super(n, r, !0), M(this, `definition`, e), M(this, `value`, t));
        }
        getHash() {
          return K(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (Dw = { type: 0 }),
      (Ow = class e extends mw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            M(this, `source`, e),
            M(this, `target`, t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* G({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.contains(n, r, Dw) };
        }
      }),
      (kw = { type: 0 }),
      (Aw = class e extends mw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            M(this, `source`, e),
            M(this, `target`, t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* G({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.endsWith(n, r, kw) };
        }
      }),
      (jw = class e extends mw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            M(this, `left`, e),
            M(this, `right`, t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* G({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.equal(n, r, pw) };
        }
      }),
      (Mw = class e extends mw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            M(this, `left`, e),
            M(this, `right`, t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* G({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.greaterThan(n, r, pw) };
        }
      }),
      (Nw = class e extends mw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            M(this, `left`, e),
            M(this, `right`, t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* G({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.greaterThanOrEqual(n, r, pw) };
        }
      }),
      (Pw = class e extends mw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            M(this, `left`, e),
            M(this, `right`, t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* G({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.lessThan(n, r, pw) };
        }
      }),
      (Fw = class e extends mw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            M(this, `left`, e),
            M(this, `right`, t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* G({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.lessThanOrEqual(n, r, pw) };
        }
      }),
      (Iw = class e extends mw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            M(this, `left`, e),
            M(this, `right`, t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* G({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Z.equal(n, r, pw) };
        }
      }),
      (Lw = class e extends mw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            M(this, `left`, e),
            M(this, `right`, t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* G({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Jd(n) || Jd(r) };
        }
      }),
      (Rw = { type: 0 }),
      (zw = class e extends mw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            M(this, `source`, e),
            M(this, `target`, t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* G({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.startsWith(n, r, Rw) };
        }
      }),
      (Bw = class {
        constructor(e) {
          (M(this, `normalizer`, e), M(this, `memo`), (this.memo = e.memo));
        }
        explore(e) {
          let t = e.getGroup();
          if (e instanceof bw) {
            if (e.predicate instanceof Tw) {
              let n = new Sw(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof Lw) {
              let n = new ww(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof Cw)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new xw(n, Rf(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof bw) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof Cw)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof jw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Ew &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new xw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Iw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Ew &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new xw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Pw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Ew &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new xw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Fw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Ew &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new xw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Mw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Ew &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new xw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Nw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof Ew &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new xw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Ow &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof Ew &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new xw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof zw &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof Ew &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new xw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Aw &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof Ew &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = Rf(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new xw(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (Vw = class {
        constructor(e) {
          M(this, `outputFields`, e);
        }
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (Hw = class {
        constructor() {
          (M(this, `nodes`, new Map()), M(this, `groups`, []));
        }
        addGroup(e) {
          let t = new JC(Df(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new Vw(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            V(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (Uw = class e extends ZC {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            M(this, `left`, e),
            M(this, `right`, t),
            M(this, `constraint`, n),
            M(this, `leftGroup`),
            M(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return K(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new $();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new $(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new sw(new ow(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return Q.max(Q.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new uw(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new lw();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* G({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof jw) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new uw(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new lw();
              (n.merge(i),
                n.merge(a),
                Jd(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (Ww = class e extends ZC {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            M(this, `input`, e),
            M(this, `limit`, t),
            M(this, `ordering`, n),
            M(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return K(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new sw(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* G({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = cf(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (Gw = class e extends ZC {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            M(this, `input`, e),
            M(this, `offset`, t),
            M(this, `ordering`, n),
            M(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return K(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new sw(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* G({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = cf(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (Kw = class e extends mw {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            M(this, `input`, e),
            M(this, `namedFields`, t),
            M(this, `ordering`, n),
            M(this, `referencedFields`, r),
            M(this, `referencedOuterFields`, i),
            M(this, `inputGroup`),
            M(this, `definition`),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return K(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new $(),
            t = Object.values(this.namedFields);
          for (let n of t) tt(n.collection) || e.add(n);
          return new sw(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new lw();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (qw = class e extends mw {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            M(this, `input`, e),
            M(this, `definition`, t),
            V(t.isNullable, `Unsupported non-nullable cast`));
        }
        getHash() {
          return K(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return Z.cast(n, this.definition);
        }
      }),
      (Jw = class e extends mw {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            M(this, `input`, e),
            M(this, `field`, t),
            M(this, `ordering`, n),
            M(this, `referencedFields`, r),
            M(this, `referencedOuterFields`, i),
            M(this, `inputGroup`),
            M(this, `definition`),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        getHash() {
          return K(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new $();
          return (tt(this.field.collection) || e.add(this.field), new sw(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new lw();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (Yw = { type: 0 }),
      (Xw = class e extends mw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            M(this, `left`, e),
            M(this, `right`, t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* G({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.in(n, r, Yw) };
        }
      }),
      (Zw = { type: 1 }),
      (Qw = class e extends mw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            M(this, `source`, e),
            M(this, `target`, t),
            M(this, `definition`, { type: `number`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* G({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: Z.indexOf(n, r, Zw) };
        }
      }),
      ($w = class e extends mw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            M(this, `left`, e),
            M(this, `right`, t),
            M(this, `definition`, {
              type: `array`,
              definition: { type: `string`, isNullable: !1 },
              isNullable: !1,
            }));
        }
        getHash() {
          return K(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* G({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = Bf(n),
            a = Bf(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (eT = class e extends mw {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            M(this, `input`, e),
            M(this, `definition`, { type: `number`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: Z.length(n) };
        }
      }),
      (tT = class e extends mw {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            M(this, `input`, e),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !Jd(yield* this.input.evaluate(e, t)) };
        }
      }),
      (nT = { type: 0 }),
      (rT = class e extends mw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            M(this, `left`, e),
            M(this, `right`, t),
            M(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return K(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* G({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Z.in(n, r, nT) };
        }
      }),
      (iT = class extends mw {
        constructor(e, t) {
          V(e.name !== $C, `Invalid field name`);
          let n = new $(),
            r = new $();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            M(this, `field`, e),
            M(this, `isOuterField`, t),
            M(this, `definition`),
            (this.definition = e.definition));
        }
        getHash() {
          return K(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (V(e, `Context must exist`), e.getValue(this.field))
            : (V(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (aT = class {
        constructor(e) {
          M(this, `memo`, e);
        }
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new Cw(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new xw(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new Uw(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof Ew && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof Uw && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new bw(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new fw(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof fw &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new Ww(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new Gw(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof Ew) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new iT(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new Ew(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof tT)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof jw) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof Iw) return this.newScalarEquals(e.left, e.right);
          if (e instanceof Pw) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof Fw) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof Mw) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof Nw) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof Tw) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof Lw) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new tT(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof Ew && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof Ew && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof Ew && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof Ew && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new Tw(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof Ew && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof Ew && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof Ew && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof Ew && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new Lw(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof iT;
          if (t instanceof iT && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new jw(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof iT;
          if (t instanceof iT && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Iw(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof iT;
          if (t instanceof iT && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Pw(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof iT;
          if (t instanceof iT && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Fw(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof iT;
          if (t instanceof iT && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Mw(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof iT;
          if (t instanceof iT && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Nw(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new Xw(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new rT(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new gw(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new _w(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new Ow(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new zw(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new Aw(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new eT(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new Qw(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new Kw(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new Jw(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new $w(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new qw(e, t);
          return this.finishScalar(n);
        }
      }),
      (oT = class extends ZC {}),
      (sT = class e extends oT {
        constructor(e, t, n) {
          (super(!1),
            M(this, `input`, e),
            M(this, `fields`, t),
            M(this, `resolver`, n),
            M(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return K(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new $();
          return new sw(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return Q.estimate(0, 100 * qC).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          V(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Set();
          for (let e of this.fields)
            (V(e.collection, `Collection required to resolve field`), n.add(e.collection));
          for (let e of t.tuples) for (let t of this.fields) Vf(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async (e) => {
              let n = [];
              for (let r of t.tuples) {
                let t = r.getPointer(e);
                t && n.push(t);
              }
              let r = await e.data.resolveItems(n);
              return (V(r.length === n.length, `Invalid number of items`), [e, r]);
            })
          );
          return t.map(t.fields, (e) => {
            let t = new lw();
            t.merge(e);
            for (let [n, i] of r) {
              let r = e.getPointer(n);
              if (!r) continue;
              let a = i.shift();
              (V(a, `Item not found`), V(a.pointer === r, `Pointer mismatch`));
              for (let e of n.fields) {
                let n = e.getValue(a);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (cT = { type: 0 }),
      (lT = class e extends oT {
        constructor(e, t) {
          (super(e.isSynchronous),
            M(this, `input`, e),
            M(this, `ordering`, t),
            M(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return K(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== $C && (tt(e.collection) || t.add(e));
          return new sw(new ow(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new Q(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === $C) {
                let r = n.collection;
                V(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                V(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                V(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!Z.equal(a, o, cT)) {
                if (nt(a) || Z.lessThan(a, o, cT)) return i ? -1 : 1;
                if (nt(o) || Z.greaterThan(a, o, cT)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (uT = class {
        constructor(e, t, n) {
          (M(this, `query`, e),
            M(this, `locale`, t),
            M(this, `resolver`, n),
            M(this, `memo`, new Hw()),
            M(this, `normalizer`, new aT(this.memo)),
            M(this, `explorer`, new Bw(this.normalizer)));
        }
        optimize() {
          let e = new vw(this.normalizer, this.query, this.locale).build(),
            t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (V(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new sT(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new lT(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (dT = Md(`query-engine`)),
      (fT = class {
        async evalQuery(e, t, n, r = {}) {
          dT.enabled &&
            dT.debug(`Query:
${ep(e)}`);
          let i = new QC(e, t, r),
            [a, o] = new uT(e, t, i).optimize(),
            s = await a.evaluateAsync(),
            c = Object.entries(o),
            l = [],
            u = Fd(
              Id(
                s.tuples.map((e) => {
                  let t = {},
                    r = {};
                  for (let [a, o] of c) {
                    let s = e.getValue(o);
                    ((t[a] = i.resolveValue(s)), n && (r[a] = s));
                  }
                  return (n && l.push(r), G(t));
                })
              )
            );
          return n ? [st(u) ? await u : u, l] : u;
        }
        async serializeableQuery(e, t) {
          return this.evalQuery(e, t, !0);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n) {
          let r = new QC(t, n);
          return Fd(
            Id(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let i = e[n];
                  t[n] = r.resolveValue(i);
                }
                return G(t);
              })
            )
          );
        }
      }),
      (pT = `style[data-framer-breakpoint-css]`),
      (mT = new Map()),
      (hT = `page`),
      (gT = Symbol(`cycle`)),
      (yT = (() => {
        let e = j(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (bT = new Set([
        `visibleVariantId`,
        `obscuredVariantId`,
        `threshold`,
        `animateOnce`,
        `variantAppearEffectEnabled`,
        `targets`,
        `exitTarget`,
        `scrollDirection`,
      ])),
      (xT = { inputRange: [], outputRange: [] }),
      (ST = (e) =>
        r.forwardRef((t, n) => {
          if (Y.current() === Y.canvas) return D(e, { ...t, ref: n });
          let [i, a] = Sc(t, bT),
            {
              visibleVariantId: o,
              obscuredVariantId: s,
              animateOnce: c,
              threshold: l,
              variantAppearEffectEnabled: u,
              targets: d,
              exitTarget: f,
              scrollDirection: p,
            } = i,
            [m, h] = r.useState(s),
            g = r.useRef(!1),
            _ = xs(n);
          Ts(
            _,
            (e) => {
              i.targets ||
                i.scrollDirection ||
                (c && g.current === !0) ||
                (g.current !== e &&
                  ((g.current = e),
                  r.startTransition(() => {
                    h(e ? o : s);
                  })));
            },
            { enabled: u, animateOnce: c, threshold: { y: l } }
          );
          let v = Pt(),
            y = r.useRef(v);
          return (
            r.useEffect(() => {
              if (p || !d) return;
              y.current !== v && ((y.current = v), r.startTransition(() => h(s)));
              let e = {},
                t;
              return se((n, { y: i }) => {
                if (!d[0] || (d[0].ref && !d[0].ref.current)) return;
                let { inputRange: a, outputRange: o } = Ip(d, (l ?? 0) * i.containerLength, f);
                if (a.length === 0 || a.length !== o.length) return;
                let s = Math.floor(Pe(i.current, a, o));
                if (c && e[s]) return;
                e[s] = !0;
                let u = d[s]?.target ?? void 0;
                u !== t &&
                  ((t = u),
                  r.startTransition(() => {
                    h(u);
                  }));
              });
            }, [v, c, l, d, t.variant, p, f]),
            Jc(p, (e) => r.startTransition(() => h(e)), { enabled: u, repeat: !c }),
            Ft(() => {
              if (!u) return;
              let e = !i.targets && !i.scrollDirection ? i.obscuredVariantId : void 0;
              r.startTransition(() => h(e));
            }),
            !(`variantAppearEffectEnabled` in i) || u === !0
              ? D(e, { ...a, variant: m ?? t.variant, ref: _ })
              : D(e, { ...a })
          );
        })),
      (CT = r.createContext(void 0)),
      (wT = () => r.useContext(CT)),
      (TT = {
        Arial: {
          Regular: { selector: `Arial`, weight: void 0 },
          Black: { selector: `Arial-Black`, weight: void 0 },
          Narrow: { selector: `Arial Narrow`, weight: void 0 },
          "Rounded Bold": { selector: `Arial Rounded MT Bold`, weight: void 0 },
        },
        Avenir: {
          Book: { selector: `Avenir`, weight: void 0 },
          Light: { selector: `Avenir-Light`, weight: void 0 },
          Medium: { selector: `Avenir-Medium`, weight: void 0 },
          Heavy: { selector: `Avenir-Heavy`, weight: void 0 },
          Black: { selector: `Avenir-Black`, weight: void 0 },
        },
        "Avenir Next": {
          Regular: { selector: `Avenir Next`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNext-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNext-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNext-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNext-Heavy`, weight: void 0 },
        },
        "Avenir Next Condensed": {
          Regular: { selector: `Avenir Next Condensed`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNextCondensed-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNextCondensed-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNextCondensed-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNextCondensed-Heavy`, weight: void 0 },
        },
        Baskerville: {
          Regular: { selector: `Baskerville`, weight: void 0 },
          "Semi Bold": { selector: `Baskerville-SemiBold`, weight: void 0 },
        },
        "Bodoni 72": {
          Book: { selector: `Bodoni 72`, weight: void 0 },
          Oldstyle: { selector: `Bodoni 72 Oldstyle`, weight: void 0 },
          Smallcaps: { selector: `Bodoni 72 Smallcaps`, weight: void 0 },
        },
        Courier: { Regular: { selector: `Courier`, weight: void 0 } },
        "Courier New": { Regular: { selector: `Courier New`, weight: void 0 } },
        Futura: {
          Medium: { selector: `Futura`, weight: void 0 },
          Condensed: { selector: `Futura-CondensedMedium`, weight: void 0 },
          "Condensed ExtraBold": { selector: `Futura-CondensedExtraBold`, weight: void 0 },
        },
        Georgia: { Regular: { selector: `Georgia`, weight: void 0 } },
        "Gill Sans": {
          Regular: { selector: `Gill Sans`, weight: void 0 },
          Light: { selector: `GillSans-Light`, weight: void 0 },
          SemiBold: { selector: `GillSans-SemiBold`, weight: void 0 },
          UltraBold: { selector: `GillSans-UltraBold`, weight: void 0 },
        },
        Helvetica: {
          Regular: { selector: `Helvetica`, weight: void 0 },
          Light: { selector: `Helvetica-Light`, weight: void 0 },
          Bold: { selector: `Helvetica-Bold`, weight: void 0 },
          Oblique: { selector: `Helvetica-Oblique`, weight: void 0 },
          "Light Oblique": { selector: `Helvetica-LightOblique`, weight: void 0 },
          "Bold Oblique": { selector: `Helvetica-BoldOblique`, weight: void 0 },
        },
        "Helvetica Neue": {
          Regular: { selector: `Helvetica Neue`, weight: void 0 },
          UltraLight: { selector: `HelveticaNeue-UltraLight`, weight: void 0 },
          Thin: { selector: `HelveticaNeue-Thin`, weight: void 0 },
          Light: { selector: `HelveticaNeue-Light`, weight: void 0 },
          Medium: { selector: `HelveticaNeue-Medium`, weight: void 0 },
          Bold: { selector: `HelveticaNeue-Bold`, weight: void 0 },
          Italic: { selector: `HelveticaNeue-Italic`, weight: void 0 },
          "UltraLight Italic": { selector: `HelveticaNeue-UltraLightItalic`, weight: void 0 },
          "Thin Italic": { selector: `HelveticaNeue-ThinItalic`, weight: void 0 },
          "Light Italic": { selector: `HelveticaNeue-LightItalic`, weight: void 0 },
          "Medium Italic": { selector: `HelveticaNeue-MediumItalic`, weight: void 0 },
          "Bold Italic": { selector: `HelveticaNeue-BoldItalic`, weight: void 0 },
          "Condensed Bold": { selector: `HelveticaNeue-CondensedBold`, weight: void 0 },
          "Condensed Black": { selector: `HelveticaNeue-CondensedBlack`, weight: void 0 },
        },
        "Hoefler Text": { Regular: { selector: `Hoefler Text`, weight: void 0 } },
        Impact: { Regular: { selector: `Impact`, weight: void 0 } },
        "Lucida Grande": { Regular: { selector: `Lucida Grande`, weight: void 0 } },
        Menlo: { Regular: { selector: `Menlo`, weight: void 0 } },
        Monaco: { Regular: { selector: `Monaco`, weight: void 0 } },
        Optima: {
          Regular: { selector: `Optima`, weight: void 0 },
          ExtraBlack: { selector: `Optima-ExtraBlack`, weight: void 0 },
        },
        Palatino: { Regular: { selector: `Palatino`, weight: void 0 } },
        "SF Pro Display": {
          Regular: { selector: `__SF-UI-Display-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Black__`, weight: 900 },
          Italic: { selector: `__SF-UI-Display-Italic__`, weight: 400 },
          "Ultralight Italic": { selector: `__SF-UI-Display-Ultralight-Italic__`, weight: 100 },
          "Thin Italic": { selector: `__SF-UI-Display-Thin-Italic__`, weight: 200 },
          "Light Italic": { selector: `__SF-UI-Display-Light-Italic__`, weight: 300 },
          "Medium Italic": { selector: `__SF-UI-Display-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Display-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Display-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Display-Heavy-Italic__`, weight: 800 },
          "Black Italic": { selector: `__SF-UI-Display-Black-Italic__`, weight: 900 },
        },
        "SF Pro Display Condensed": {
          Regular: { selector: `__SF-UI-Display-Condensed-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Condensed-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Condensed-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Condensed-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Condensed-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Condensed-Black__`, weight: 900 },
        },
        "SF Pro Text": {
          Regular: { selector: `__SF-UI-Text-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Heavy__`, weight: 800 },
          Italic: { selector: `__SF-UI-Text-Italic__`, weight: 400 },
          "Light Italic": { selector: `__SF-UI-Text-Light-Italic__`, weight: 200 },
          "Medium Italic": { selector: `__SF-UI-Text-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Text-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Text-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Text-Heavy-Italic__`, weight: 800 },
        },
        "SF Pro Text Condensed": {
          Regular: { selector: `__SF-UI-Text-Condensed-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Condensed-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Condensed-Heavy__`, weight: 800 },
        },
        Tahoma: { Regular: { selector: `Tahoma`, weight: void 0 } },
        Times: { Regular: { selector: `Times`, weight: void 0 } },
        "Times New Roman": { Regular: { selector: `Times New Roman`, weight: void 0 } },
        Trebuchet: { Regular: { selector: `Trebuchet MS`, weight: void 0 } },
        Verdana: { Regular: { selector: `Verdana`, weight: void 0 } },
      }),
      (ET = {
        "__SF-Compact-Display-Regular__": `SFCompactDisplay-Regular|.SFCompactDisplay-Regular`,
        "__SF-Compact-Display-Ultralight__": `SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight`,
        "__SF-Compact-Display-Thin__": `SFCompactDisplay-Thin|.SFCompactDisplay-Thin`,
        "__SF-Compact-Display-Light__": `SFCompactDisplay-Light|.SFCompactDisplay-Light`,
        "__SF-Compact-Display-Medium__": `SFCompactDisplay-Medium|.SFCompactDisplay-Medium`,
        "__SF-Compact-Display-Semibold__": `SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold`,
        "__SF-Compact-Display-Heavy__": `SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy`,
        "__SF-Compact-Display-Black__": `SFCompactDisplay-Black|.SFCompactDisplay-Black`,
        "__SF-Compact-Display-Bold__": `SFCompactDisplay-Bold|.SFCompactDisplay-Bold`,
        "__SF-UI-Text-Regular__": `.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText`,
        "__SF-UI-Text-Light__": `.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light`,
        "__SF-UI-Text-Medium__": `.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium`,
        "__SF-UI-Text-Semibold__": `.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold`,
        "__SF-UI-Text-Bold__": `.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold`,
        "__SF-UI-Text-Heavy__": `.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy`,
        "__SF-UI-Text-Italic__": `.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic`,
        "__SF-UI-Text-Light-Italic__": `.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic`,
        "__SF-UI-Text-Medium-Italic__": `.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic`,
        "__SF-UI-Text-Semibold-Italic__": `.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic`,
        "__SF-UI-Text-Bold-Italic__": `.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic`,
        "__SF-UI-Text-Heavy-Italic__": `.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic`,
        "__SF-Compact-Text-Regular__": `SFCompactText-Regular|.SFCompactText-Regular`,
        "__SF-Compact-Text-Light__": `SFCompactText-Light|.SFCompactText-Light`,
        "__SF-Compact-Text-Medium__": `SFCompactText-Medium|.SFCompactText-Medium`,
        "__SF-Compact-Text-Semibold__": `SFCompactText-Semibold|.SFCompactText-Semibold`,
        "__SF-Compact-Text-Bold__": `SFCompactText-Bold|.SFCompactText-Bold`,
        "__SF-Compact-Text-Heavy__": `SFCompactText-Heavy|.SFCompactText-Heavy`,
        "__SF-Compact-Text-Italic__": `SFCompactText-Italic|.SFCompactText-Italic`,
        "__SF-Compact-Text-Light-Italic__": `SFCompactText-LightItalic|.SFCompactText-LightItalic`,
        "__SF-Compact-Text-Medium-Italic__": `SFCompactText-MediumItalic|.SFCompactText-MediumItalic`,
        "__SF-Compact-Text-Semibold-Italic__": `SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic`,
        "__SF-Compact-Text-Bold-Italic__": `SFCompactText-BoldItalic|.SFCompactText-BoldItalic`,
        "__SF-Compact-Text-Heavy-Italic__": `SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic`,
        "__SF-UI-Display-Condensed-Regular__": `.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular`,
        "__SF-UI-Display-Condensed-Ultralight__": `.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight`,
        "__SF-UI-Display-Condensed-Thin__": `.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin`,
        "__SF-UI-Display-Condensed-Light__": `.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light`,
        "__SF-UI-Display-Condensed-Medium__": `.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium`,
        "__SF-UI-Display-Condensed-Semibold__": `.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold`,
        "__SF-UI-Display-Condensed-Bold__": `.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold`,
        "__SF-UI-Display-Condensed-Heavy__": `.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy`,
        "__SF-UI-Display-Condensed-Black__": `.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black`,
        "__SF-UI-Display-Regular__": `.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay`,
        "__SF-UI-Display-Ultralight__": `.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight`,
        "__SF-UI-Display-Thin__": `.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin`,
        "__SF-UI-Display-Light__": `.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light`,
        "__SF-UI-Display-Medium__": `.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium`,
        "__SF-UI-Display-Semibold__": `.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold`,
        "__SF-UI-Display-Bold__": `.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold`,
        "__SF-UI-Display-Heavy__": `.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy`,
        "__SF-UI-Display-Black__": `.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black`,
        "__SF-UI-Display-Italic__": `.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic`,
        "__SF-UI-Display-Ultralight-Italic__": `.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic`,
        "__SF-UI-Display-Thin-Italic__": `.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic`,
        "__SF-UI-Display-Light-Italic__": `.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic`,
        "__SF-UI-Display-Medium-Italic__": `.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic`,
        "__SF-UI-Display-Semibold-Italic__": `.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic`,
        "__SF-UI-Display-Bold-Italic__": `.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic`,
        "__SF-UI-Display-Heavy-Italic__": `.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic`,
        "__SF-UI-Display-Black-Italic__": `.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic`,
        "__SF-UI-Text-Condensed-Regular__": `.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular`,
        "__SF-UI-Text-Condensed-Light__": `.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light`,
        "__SF-UI-Text-Condensed-Medium__": `.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium`,
        "__SF-UI-Text-Condensed-Semibold__": `.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold`,
        "__SF-UI-Text-Condensed-Bold__": `.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold`,
        "__SF-UI-Text-Condensed-Heavy__": `.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy`,
        "__SF-Compact-Rounded-Regular__": `SFCompactRounded-Regular|.SFCompactRounded-Regular`,
        "__SF-Compact-Rounded-Ultralight__": `SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight`,
        "__SF-Compact-Rounded-Thin__": `SFCompactRounded-Thin|.SFCompactRounded-Thin`,
        "__SF-Compact-Rounded-Light__": `SFCompactRounded-Light|.SFCompactRounded-Light`,
        "__SF-Compact-Rounded-Medium__": `SFCompactRounded-Medium|.SFCompactRounded-Medium`,
        "__SF-Compact-Rounded-Semibold__": `SFCompactRounded-Semibold|.SFCompactRounded-Semibold`,
        "__SF-Compact-Rounded-Bold__": `SFCompactRounded-Bold|.SFCompactRounded-Bold`,
        "__SF-Compact-Rounded-Heavy__": `SFCompactRounded-Heavy|.SFCompactRounded-Heavy`,
        "__SF-Compact-Rounded-Black__": `SFCompactRounded-Black|.SFCompactRounded-Black`,
      }),
      (DT = TT),
      (OT = `System Default`),
      (kT = class {
        constructor() {
          (M(this, `name`, `local`),
            M(this, `fontFamilies`, []),
            M(this, `byFamilyName`, new Map()),
            M(this, `fontAliasBySelector`, new Map()),
            M(this, `fontAliases`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.addFontFamily(t), t);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        importFonts() {
          let e = [];
          for (let t of Object.keys(DT)) {
            let n = DT[t];
            if (!n) continue;
            let r = this.createFontFamily(t);
            for (let e of Object.keys(n)) {
              let t = n[e];
              if (!t) continue;
              let { selector: i, weight: a } = t,
                o = { variant: e, selector: i, weight: a, family: r, cssFamilyName: r.name };
              r.fonts.push(o);
            }
            e.push(...r.fonts);
          }
          for (let [e, t] of Object.entries(ET)) this.addFontAlias(e, t);
          let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
          this.addFontFamily(t);
          for (let [e, t] of n) this.addFontAlias(e, t);
          return (e.push(...t.fonts), e);
        }
        addFontAlias(e, t) {
          (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
        }
        getSystemFontFamily() {
          let e = { name: OT, fonts: [], source: this.name },
            t = new Map(),
            n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
          for (let r of [`normal`, `italic`])
            for (let i of n) {
              let n = Rp(i, r),
                a = `__SystemDefault-${i}-${r}__`,
                o = {
                  variant: n,
                  selector: a,
                  style: r,
                  weight: i,
                  family: e,
                  cssFamilyName: e.name,
                };
              (e.fonts.push(o),
                t.set(
                  a,
                  `system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif`
                ));
            }
          return { fontFamily: e, aliases: t };
        }
        getFontAliasBySelector(e) {
          return this.fontAliasBySelector.get(e) || null;
        }
        getFontSelectorByAlias(e) {
          return this.fontAliases.get(e) || null;
        }
        isFontFamilyAlias(e) {
          return !!(e && /^__.*__$/u.exec(e));
        }
      }),
      (AT = {
        100: `Thin`,
        200: `Extra Light`,
        300: `Light`,
        400: `Normal`,
        500: `Medium`,
        600: `Semi Bold`,
        700: `Bold`,
        800: `Extra Bold`,
        900: `Black`,
      }),
      (jT = class extends Map {
        constructor() {
          (super(...arguments), M(this, `_hash`, 0));
        }
        get hash() {
          return this._hash;
        }
        set(e, t) {
          return (this._hash++, super.set(e, t));
        }
        delete(e) {
          return (this._hash++, super.delete(e));
        }
        clear() {
          return (this._hash++, super.clear());
        }
      }),
      (NT = `Variable`),
      (PT = `BI;`),
      (FT = class {
        constructor() {
          (M(this, `name`, `builtIn`),
            M(this, `fontFamilies`, []),
            M(this, `byFamilyName`, new Map()),
            M(this, `assetByKey`, new Map()));
        }
        importFonts(e) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetByKey.clear());
          let t = [];
          for (let n of e) {
            if (!this.isValidBuiltInFont(n)) continue;
            let { properties: e } = n,
              r = e.font.fontFamily,
              i = this.createFontFamily(r, e.font.foundryName, e.font.fontVersion),
              a = e.font.openTypeData,
              o = e.font.variationAxes,
              s = Array.isArray(o),
              c = s ? `variable` : e.font.fontSubFamily || `regular`,
              l = Up(n),
              u = qp(o),
              d = {
                assetKey: n.key,
                family: i,
                selector: this.createSelector(r, c, e.font.fontVersion),
                variant: c,
                file: l,
                hasOpenTypeFeatures: Kp(a),
                variationAxes: u,
                category: e.font.fontCategory,
                weight: s ? Zp(u, e.font.faceDescriptors?.weight) : Xp(c),
                style: $p(c),
                cssFamilyName: Wp(r, s),
              };
            (i.fonts.push(d), this.assetByKey.set(n.key, n), t.push(d));
          }
          for (let e of this.fontFamilies)
            e.fonts.sort((e, t) => {
              let n = Xp(e.variant),
                r = Xp(t.variant);
              return !n || !r ? 1 : n - r;
            });
          return t;
        }
        static parseVariant(e) {
          let t = Qp(e);
          return {
            weight: t === `variable` || t === `variable-italic` ? 400 : IT[t],
            style: $p(e),
          };
        }
        getFontBySelector(e) {
          let t = this.parseSelector(e);
          if (!t) return;
          let n = this.getFontFamilyByName(t.name);
          if (n) return n.fonts.find((t) => t.selector === e);
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e, t, n) {
          let r = this.byFamilyName.get(e);
          if (r && r.version === n) return r;
          let i = { source: this.name, name: e, fonts: [], foundryName: t, version: n };
          return (this.addFontFamily(i), i);
        }
        getOpenTypeFeatures(e) {
          V(e.assetKey, `Font must have an asset key`);
          let t = this.assetByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return Kp(t)
            ? t?.map((e) => {
                if (Jp(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        isValidBuiltInFont(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font ||
            !e.properties.font.fontVersion ||
            !e.properties.font.fontFamily
            ? !1
            : `fontFamily` in e.properties.font;
        }
        createSelector(e, t, n) {
          return `${PT}${e}/${t}/${n}`;
        }
        parseSelector(e) {
          if (!e.startsWith(PT)) return null;
          let [t, n] = e.split(PT);
          if (n === void 0) return null;
          let [r, i, a] = n.split(`/`);
          return !r || !i || !a
            ? null
            : {
                name: r,
                variant: i,
                source: this.name,
                isVariable: i.toLowerCase().includes(`variable`),
              };
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
      }),
      (IT = {
        ultralight: 100,
        "ultralight-italic": 100,
        thin: 200,
        "thin-italic": 200,
        demi: 200,
        light: 300,
        "light-italic": 300,
        normal: 350,
        base: 400,
        regular: 400,
        classic: 400,
        "regular-slanted": 400,
        italic: 400,
        oblique: 400,
        dense: 400,
        brukt: 300,
        book: 400,
        "book-italic": 400,
        text: 400,
        "text-italic": 400,
        medium: 500,
        solid: 500,
        "medium-oblique": 500,
        "medium-italic": 500,
        mittel: 500,
        semibold: 600,
        "semibold-italic": 600,
        bold: 700,
        "bold-italic": 700,
        "bold-oblique": 700,
        fett: 700,
        ultrabold: 800,
        "ultrabold-italic": 800,
        extrabold: 800,
        "extrabold-italic": 800,
        black: 900,
        extralight: 100,
        "extralight-italic": 100,
        "black-italic": 900,
        "extra-italic": 900,
        "extra-italic-bold": 900,
        satt: 900,
        heavy: 900,
        "heavy-italic": 900,
        serif: 100,
        school: 200,
        expanded: 300,
        gothique: 500,
        "dense-light": 200,
        "dense-regular": 300,
        "dense-medium": 400,
        "dense-bold": 500,
        "solid-light": 600,
        "solid-regular": 700,
        "solid-medium": 800,
        "solid-bold": 900,
        53: 400,
        55: 600,
        "narrow-regular": 350,
        "narrow-black": 850,
        variable: 1e3,
        "variable-italic": 1e3,
      }),
      (LT = Md(`custom-font-source`)),
      (RT = `CUSTOM;`),
      (zT = `CUSTOMV2;`),
      (BT = class e {
        constructor() {
          (M(this, `name`, `custom`),
            M(this, `fontFamilies`, []),
            M(this, `byFamilyName`, new Map()),
            M(this, `assetsByKey`, new Map()),
            M(this, `debugByFamily`, new Map()),
            M(this, `debugFamilies`));
        }
        importFonts(t) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let n = {},
            r = new Map();
          for (let i of t) {
            if (!this.isValidCustomFontAsset(i)) continue;
            let { family: t, variant: a, weight: o, style: s } = lm(i.properties.font),
              c = i.properties.font.variationAxes,
              l = Array.isArray(c),
              u = i.properties.font.openTypeData,
              d = Up(i),
              f = fm(i),
              p = cm(i.properties),
              m = e.createLegacySelector(p),
              h = this.createFontFamily(t),
              g = e.createSelector(h.name, a),
              _ = {
                assetKey: i.key,
                family: h,
                selector: g,
                variant: a,
                weight: o,
                style: s,
                file: d,
                hasOpenTypeFeatures: Kp(u),
                variationAxes: qp(c),
                owner: f,
                alternativeSelectors: {
                  [m]: {
                    variant: l ? `variable` : this.inferVariantName(p),
                    cssFamilyName: e.cssFontFamilyFromSelector(m),
                  },
                },
                cssFamilyName: e.cssFontFamilyFromSelector(g),
              },
              v = sm(h.fonts, _);
            if (v?.projectDuplicate) _.owner === `team` && ((h.fonts[v.index] = _), (n[g] = _));
            else if (v) {
              LT.debug(`Duplicate font found for:`, _, `with existing font:`, v.existingFont);
              let e = v.existingFont,
                t = _.file?.endsWith(`.woff2`) ?? !1,
                r = e.file?.endsWith(`.woff2`) ?? !1,
                i = t && !r,
                a = t === r,
                o = _.owner === `team` || e.owner !== `team`;
              (i || (a && o)) && ((h.fonts[v.index] = _), (n[g] = _));
            } else (h.fonts.push(_), (n[g] = _));
            (this.assetsByKey.set(i.key, i),
              pm(r, t, a).fonts.push({ font: _, asset: i, selected: !1 }));
          }
          for (let e of this.fontFamilies) e.fonts.length > 0 && dm(e);
          return ((this.debugByFamily = r), (this.debugFamilies = void 0), Object.values(n));
        }
        getDebugFamilies() {
          if (this.debugFamilies) return this.debugFamilies;
          let e = new Set();
          for (let t of this.fontFamilies)
            for (let n of t.fonts) n.assetKey && n.owner && e.add(`${n.assetKey}:${n.owner}`);
          return ((this.debugFamilies = mm(this.debugByFamily, e)), this.debugFamilies);
        }
        static createSelector(e, t) {
          return `${zT}${e}${t ? ` ${t}` : ``}`;
        }
        static createLegacySelector(e) {
          return `${RT}${e}`;
        }
        static cssFontFamilyFromSelector(e) {
          return (
            V(im(e), `Selector must be a custom font selector`),
            om(e) ? e.slice(RT.length) : e.slice(zT.length)
          );
        }
        isValidCustomFontAsset(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font
            ? !1
            : `fontFamily` in e.properties.font;
        }
        getOpenTypeFeatures(e) {
          V(e.assetKey, `Font must have an asset key`);
          let t = this.assetsByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return Kp(t)
            ? t?.map((e) => {
                if (Jp(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        inferVariantName(e) {
          let t = [
              `thin`,
              `ultra light`,
              `extra light`,
              `light`,
              `normal`,
              `medium`,
              `semi bold`,
              `bold`,
              `extra bold`,
              `black`,
            ],
            n = [...t.map((e) => `${e} italic`), ...t],
            r = e.toLowerCase(),
            i = [...r.split(` `), ...r.split(`-`), ...r.split(`_`)],
            a = n.find((e) => i.includes(e) || i.includes(e.replace(/\s+/gu, ``)));
          return a ? a.replace(/^\w|\s\w/gu, (e) => e.toUpperCase()) : `Regular`;
        }
        createFontFamily(e) {
          let t = this.byFamilyName.get(e);
          if (t) return t;
          let n = { source: this.name, name: e, fonts: [] };
          return (this.addFontFamily(n), n);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) || null;
        }
      }),
      (VT = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`]),
      (HT = `FS;`),
      (UT = {
        thin: 100,
        hairline: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        ultra: 800,
        black: 900,
        heavy: 900,
      }),
      (WT = Object.keys(UT)),
      (GT = RegExp(`^(?:${[...WT, `italic`, `variable`].join(`|`)})`, `u`)),
      (KT = class e {
        constructor() {
          (M(this, `name`, `fontshare`),
            M(this, `fontFamilies`, []),
            M(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          let t = e.toLowerCase().split(` `),
            n = WT.find((e) => t.includes(e)),
            r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
          return { weight: (n && UT[n]) || 400, style: r === `italic` ? r : `normal` };
        }
        parseSelector(e) {
          if (!e.startsWith(HT)) return null;
          let t = e.split(`-`);
          if (t.length !== 2) return null;
          let [n, r] = t;
          return !n || !r
            ? null
            : {
                name: n.replace(HT, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`),
              };
        }
        static createSelector(e, t) {
          return `${HT}${e}-${t.toLowerCase()}`;
        }
        static createMetadataSelector(e) {
          return `${HT}${e}`;
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        async importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = await hm(`fontshare`),
            i = [];
          for (let a of t) {
            let t = a.font_styles
                .filter((e) => {
                  let t = e.name.toLowerCase();
                  return !(!GT.exec(t) || t.split(` `).includes(`wide`));
                })
                .map((t) => ({
                  ...e.parseVariant(t.name),
                  selector: e.createSelector(a.name, t.name),
                  isVariable: t.is_variable,
                  fontshareVariantName: t.name,
                  file: t.file,
                })),
              o = e.createMetadataSelector(a.name),
              s = n?.[o],
              c = a.name,
              l = this.getFontFamilyByName(c);
            l || ((l = { name: c, fonts: [], source: this.name }), this.addFontFamily(l));
            let u = r[e.createMetadataSelector(a.name)];
            for (let e of t) {
              let {
                  variantBold: n,
                  variantBoldItalic: r,
                  variantItalic: o,
                  variantVariable: c,
                  variantVariableItalic: d,
                } = em(e, t),
                f = {
                  family: l,
                  variant: e.fontshareVariantName.toLowerCase(),
                  selector: e.selector,
                  selectorBold: n?.selector,
                  selectorBoldItalic: r?.selector,
                  selectorItalic: o?.selector,
                  selectorVariable: c?.selector,
                  selectorVariableItalic: d?.selector,
                  weight: e.weight,
                  style: e.style,
                  file: e.file,
                  category: ym(a.category),
                  hasOpenTypeFeatures: u,
                  variationAxes: e.isVariable ? s : void 0,
                  cssFamilyName: Wp(l.name, e.isVariable),
                };
              (l.fonts.push(f), i.push(f));
            }
          }
          return i;
        }
        async getOpenTypeFeatures(t) {
          return (await gm(`fontshare`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (qT = `Inter`),
      (JT = `FR;`),
      (YT = {
        Thin: 100,
        ExtraLight: 200,
        Light: 300,
        "": 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 800,
        Black: 900,
      }),
      (XT = class e {
        constructor() {
          (M(this, `name`, `framer`),
            M(this, `fontFamilies`, []),
            M(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        static getDraftFontPropertiesBySelector(e) {
          if (!e.startsWith(JT) && !e.startsWith(qT)) return null;
          let [t, n = ``] = e.split(`-`);
          if (!t) return null;
          let r = n.includes(`Italic`) ? `italic` : `normal`,
            i = n.replace(`Italic`, ``);
          return {
            cssFamilyName: t,
            style: r,
            weight: (i && YT[i]) || 400,
            source: `framer`,
            variant: void 0,
            category: `sans-serif`,
          };
        }
        static createMetadataSelector(e) {
          return `${JT}${e}`;
        }
        importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = [];
          return (
            t.forEach((t) => {
              let { uiFamilyName: i, ...a } = t,
                o = e.createMetadataSelector(t.uiFamilyName),
                s = n?.[o],
                c = this.getFontFamilyByName(i);
              c ||= this.addFontFamily(i);
              let l = t.selector === t.selectorVariable || t.selector === t.selectorVariableItalic,
                u = { ...a, family: c, variationAxes: l ? s : void 0 };
              (c.fonts.push(u), r.push(u));
            }),
            r
          );
        }
        async getOpenTypeFeatures(t) {
          return (await gm(`framer`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (ZT = `GF;`),
      (QT = class e {
        constructor() {
          (M(this, `name`, `google`),
            M(this, `fontFamilies`, []),
            M(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          if (e === `regular`) return { style: `normal`, weight: 400 };
          let t = /(\d*)(normal|italic)?/u.exec(e);
          return t
            ? { weight: parseInt(t[1] || `400`), style: t[2] === `italic` ? `italic` : `normal` }
            : {};
        }
        parseSelector(e) {
          if (!e.startsWith(ZT)) return null;
          let t = e.includes(`-variable-`),
            n = t ? e.split(`-variable-`) : e.split(`-`);
          if (n.length !== 2) return null;
          let [r, i] = n;
          return !r || !i
            ? null
            : { name: r.replace(ZT, ``), variant: i, source: this.name, isVariable: t };
        }
        static createSelector(e, t, n) {
          return `${ZT}${e}-${n ? `variable-` : ``}${t}`;
        }
        static createMetadataSelector(e) {
          return `${ZT}${e}`;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        async importFonts(t, n, r) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let i = await hm(`google`),
            a = [],
            o = xm(t, (e) => e.family),
            s = xm(n, (e) => e.family);
          for (let t in o) {
            let n = o[t];
            if (!n) continue;
            let c = this.getFontFamilyByName(n.family);
            c ||= this.addFontFamily(n.family);
            let l = n.variants.map((r) => ({
                ...e.parseVariant(r),
                googleFontsVariantName: r,
                selector: e.createSelector(t, r, !1),
                isVariable: !1,
                file: n.files[r],
              })),
              u = s[t],
              d = u?.axes
                ? u.variants.map((n) => ({
                    ...e.parseVariant(n),
                    googleFontsVariantName: n,
                    selector: e.createSelector(t, n, !0),
                    isVariable: !0,
                    file: u.files[n],
                  }))
                : [],
              f = e.createMetadataSelector(n.family),
              p = r?.[f],
              m = [...l, ...d],
              h = m.filter(Lp),
              g = i[e.createMetadataSelector(t)];
            for (let e of m) {
              let { weight: t, style: r, selector: i, googleFontsVariantName: o } = e,
                {
                  variantBold: s,
                  variantItalic: l,
                  variantBoldItalic: u,
                  variantVariable: d,
                  variantVariableItalic: f,
                } = (Lp(e) ? em(e, h) : void 0) ?? {},
                m = {
                  family: c,
                  variant: o,
                  selector: i,
                  selectorBold: s?.selector,
                  selectorBoldItalic: u?.selector,
                  selectorItalic: l?.selector,
                  selectorVariable: d?.selector,
                  selectorVariableItalic: f?.selector,
                  weight: t,
                  style: r,
                  category: bm(n.category),
                  file: e.file?.replace(`http://`, `https://`),
                  variationAxes: e.isVariable ? p : void 0,
                  hasOpenTypeFeatures: g,
                  cssFamilyName: Wp(c.name, e.isVariable),
                };
              (c.fonts.push(m), a.push(m));
            }
          }
          return a;
        }
        async getOpenTypeFeatures(t) {
          return (await gm(`google`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      ($T = We(tg(), 1)),
      (eE = 5e3),
      (tE = 3),
      (nE = class extends Error {
        constructor(e) {
          (super(e), (this.name = `FontLoadingError`));
        }
      }),
      (rE = new Map()),
      (iE = new Map()),
      (aE = new Map()),
      (oE = (e, t) => wm(e, t)),
      (sE = {
        "FR;Inter": [
          { tag: `opsz`, minValue: 14, maxValue: 32, defaultValue: 14, name: `Optical size` },
          { tag: `wght`, minValue: 100, maxValue: 900, defaultValue: 400, name: `Weight` },
        ],
      }),
      (cE = class {
        constructor() {
          (M(this, `enabled`, !1),
            M(this, `bySelector`, new jT()),
            M(this, `loadedSelectors`, new Set()),
            M(this, `getGoogleFontsListPromise`),
            M(this, `getFontshareFontsListPromise`),
            M(this, `getBuiltInFontsListPromise`),
            M(
              this,
              `customFontsImportPromise`,
              new Promise((e) => {
                this.resolveCustomFontsImportPromise = e;
              })
            ),
            M(this, `local`),
            M(this, `google`),
            M(this, `fontshare`),
            M(this, `builtIn`),
            M(this, `framer`),
            M(this, `custom`),
            M(this, `bySelectorValuesCache`),
            M(this, `testing`, { addFont: this.addFont.bind(this) }),
            (this.local = new kT()),
            (this.google = new QT()),
            (this.fontshare = new KT()),
            (this.framer = new XT()),
            (this.custom = new BT()),
            (this.builtIn = new FT()),
            this.importLocalFonts());
        }
        get hash() {
          return this.bySelector.hash;
        }
        addFont(e) {
          if ((this.bySelector.set(e.selector, e), e.alternativeSelectors))
            for (let t of Object.keys(e.alternativeSelectors)) this.bySelector.set(t, e);
        }
        getAvailableFonts() {
          if (
            !this.bySelectorValuesCache ||
            this.bySelectorValuesCache.hash !== this.bySelector.hash
          ) {
            let e = new Map();
            for (let t of this.bySelector.values()) e.set(t, !0);
            this.bySelectorValuesCache = {
              result: Array.from(e.keys()),
              hash: this.bySelector.hash,
            };
          }
          return this.bySelectorValuesCache.result;
        }
        importLocalFonts() {
          for (let e of this.local.importFonts()) (this.addFont(e), this.loadFont(e.selector));
        }
        async importGoogleFonts() {
          return (
            (this.getGoogleFontsListPromise ||= Promise.resolve().then(async () => {
              let { staticFonts: e, variableFonts: t } = await tb.fetchGoogleFontsList(),
                n = await Dm(`google`);
              for (let r of await this.google.importFonts(e, t, n)) this.addFont(r);
              return { staticFonts: e, variableFonts: t };
            })),
            this.getGoogleFontsListPromise
          );
        }
        async importFontshareFonts() {
          if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = tb.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise,
              t = await Dm(`fontshare`);
            for (let n of await this.fontshare.importFonts(e, t)) this.addFont(n);
          }
          return this.getFontshareFontsListPromise;
        }
        async importAllWebFonts() {
          await Promise.all([
            this.importGoogleFonts(),
            this.importFontshareFonts(),
            this.importBuiltInFonts(),
          ]);
        }
        async importBuiltInFonts() {
          if (!this.getBuiltInFontsListPromise) {
            this.getBuiltInFontsListPromise = tb.fetchBuiltInFontsList();
            let e = await this.getBuiltInFontsListPromise;
            for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
          }
          return this.getBuiltInFontsListPromise;
        }
        importFramerFonts(e) {
          let t = Dm(`framer`);
          this.framer.importFonts(e, t).forEach((e) => {
            this.addFont(e);
          });
        }
        importCustomFonts(e) {
          let t = new Map();
          for (let e of this.loadedSelectors) {
            if (!im(e)) continue;
            let n = this.getFontBySelector(e);
            n && t.set(e, n);
          }
          this.bySelector.forEach((e, t) => {
            im(t) && this.bySelector.delete(t);
          });
          let n = this.custom.importFonts(e);
          for (let e of n) this.addFont(e);
          for (let [e, n] of t) {
            let t = this.getFontBySelector(e);
            (t && t.file === n.file) ||
              (this.loadedSelectors.delete(e),
              n.file &&
                Em({ family: n.cssFamilyName, url: n.file, weight: n.weight, style: n.style }));
          }
          this.resolveCustomFontsImportPromise();
        }
        getCustomFontsImportPromise() {
          return this.customFontsImportPromise;
        }
        getCustomFontDebugFamilies() {
          return this.custom.getDebugFamilies();
        }
        getFontFamily(e) {
          return this[e.source].getFontFamilyByName(e.name);
        }
        getFontBySelector(e) {
          if (!e) return;
          let t;
          if (((t = this.bySelector.get(e)), t))
            return t.alternativeSelectors && e in t.alternativeSelectors
              ? { ...t, ...t.alternativeSelectors[e] }
              : t;
        }
        getDraftPropertiesBySelector(e) {
          let t = this.getFontBySelector(e);
          if (t)
            return {
              style: t.style,
              weight: t.weight,
              variant: t.variant,
              cssFamilyName: t.cssFamilyName,
              source: t.family.source,
              category: t.category,
            };
          let n = this.google.parseSelector(e);
          if (n) {
            let e = QT.parseVariant(n.variant);
            if (Lp(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: n.variant,
                cssFamilyName: Gp(n, `google`),
                source: `google`,
                category: void 0,
              };
          }
          let r = this.fontshare.parseSelector(e);
          if (r) {
            let e = KT.parseVariant(r.variant);
            if (Lp(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: r.variant,
                cssFamilyName: Gp(r, `fontshare`),
                source: `fontshare`,
                category: void 0,
              };
          }
          let i = this.builtIn.parseSelector(e);
          if (i) {
            let e = FT.parseVariant(i.variant);
            if (Lp(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: i.variant,
                cssFamilyName: Gp(i, `builtIn`),
                source: `builtIn`,
                category: void 0,
              };
          }
          return XT.getDraftFontPropertiesBySelector(e) || null;
        }
        isSelectorLoaded(e) {
          return this.loadedSelectors.has(e);
        }
        async loadFont(e) {
          let t = this.getFontBySelector(e);
          if (!t) return 2;
          if (this.loadedSelectors.has(e)) return 0;
          let n = t.cssFamilyName,
            r = t.family.source,
            i = rm(t);
          switch (r) {
            case `local`:
              return (this.loadedSelectors.add(e), 1);
            case `framer`:
              if ((Bn() || (await Tm(t.family.name, t.style, t.weight)), i)) {
                if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
                await oE({ family: n, url: t.file, weight: t.weight, style: t.style }, document);
              }
              return (this.loadedSelectors.add(e), 1);
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`: {
              if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
              let r = t.file;
              await oE({ family: n, url: r, weight: t.weight, style: t.style }, document);
              let i = this.getFontBySelector(e);
              return !i || i.file !== r
                ? (Em({ family: n, url: r, weight: t.weight, style: t.style }), 2)
                : (this.loadedSelectors.add(e), 1);
            }
            default:
              H(r);
          }
        }
        async loadFontsFromSelectors(e) {
          if (!this.enabled) return [];
          let t = [];
          (e.some((e) => e.startsWith(HT)) &&
            t.push(
              this.importFontshareFonts().catch((e) => {
                _i(`Failed to load Fontshare fonts:`, e);
              })
            ),
            e.some((e) => e.startsWith(ZT)) &&
              t.push(
                this.importGoogleFonts().catch((e) => {
                  _i(`Failed to load Google fonts:`, e);
                })
              ),
            e.some((e) => e.startsWith(PT)) &&
              t.push(
                this.importBuiltInFonts().catch((e) => {
                  _i(`Failed to load built-in fonts:`, e);
                })
              ),
            e.some(im) &&
              t.push(
                this.customFontsImportPromise.catch((e) => {
                  _i(`Failed to load custom fonts:`, e);
                })
              ),
            t.length > 0 && (await Promise.all(t)));
          let n = [];
          for (let t of e) n.push(this.loadFont(t));
          return Promise.allSettled(n);
        }
        async loadFonts(e) {
          return {
            newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
              (e) => e.status === `fulfilled` && e.value === 1
            ).length,
          };
        }
        async loadMissingFonts(e, t) {
          let n = e.filter((e) => !lE.loadedSelectors.has(e));
          n.length !== 0 &&
            (await lE.loadWebFontsFromSelectors(n),
            n.every((e) => lE.loadedSelectors.has(e)) && t && t());
        }
        async loadWebFontsFromSelectors(e) {
          return this.loadFontsFromSelectors(e);
        }
        get defaultFont() {
          let e = this.getFontBySelector(`Inter`);
          return (V(e, `Can’t find Inter font`), e);
        }
      }),
      (lE = new cE()),
      (uE = {
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }),
      (dE = { opacity: 0 }),
      (fE = { opacity: 1 }),
      (pE = Vm(
        r.forwardRef(function (e, t) {
          let {
              background: n,
              children: i,
              alt: a,
              draggable: o,
              fitImageDimension: s,
              style: c,
              ...l
            } = e,
            u = { ...c },
            d = f(() => Ao(n), [n]),
            [m, h] = p();
          r.useLayoutEffect(() => {
            if (!n?.src || !s || d) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                h({ width: e.naturalWidth, height: e.naturalHeight });
            }),
              (e.src = n.src));
          }, [n?.src, s, d]);
          let g = d ?? m;
          return (
            s && g && ((u[s] = `auto`), (u.aspectRatio = g.width / g.height)),
            n && delete u.background,
            te(jo(e.as), {
              ...l,
              style: u,
              ref: t,
              draggable: o,
              children: [n && D(To, { image: n, alt: a, draggable: o }), i],
            })
          );
        })
      )),
      (hE = !Ln() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (gE =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (_E = `{{ text-placeholder }}`),
      (vE = `rich-text-wrapper`),
      (yE = $a(
        A(function (e, t) {
          let {
              id: n,
              name: r,
              html: i,
              htmlFromDesign: a,
              text: o,
              textFromDesign: s,
              fonts: l = [],
              width: u,
              height: p,
              left: m,
              right: h,
              top: g,
              bottom: _,
              center: v,
              className: y,
              stylesPresetsClassName: b,
              visible: x = !0,
              opacity: S,
              rotation: C = 0,
              verticalAlignment: w = `top`,
              isEditable: T = !1,
              environment: O = Y.current,
              withExternalLayout: k = !1,
              positionSticky: ee,
              positionStickyTop: te,
              positionStickyRight: A,
              positionStickyBottom: ne,
              positionStickyLeft: re,
              __htmlStructure: j,
              __fromCanvasComponent: M = !1,
              _forwardedOverrideId: ie,
              _forwardedOverrides: ae,
              _usesDOMRect: N,
              children: oe,
              ...se
            } = e,
            ce = Pa(),
            le = Lo(e),
            ue = E(null),
            de = t ?? ue,
            { navigate: fe, getRoute: P } = jt(),
            pe = Nt();
          (Dn(e.preload ?? []), Uo(e, de));
          let me = d(db),
            he = Ll(),
            ge = o,
            F = ie ?? n;
          if (F && ae) {
            let e = ae[F];
            typeof e == `string` && (ge = e);
          }
          let I = ``;
          if (ge) {
            let e = Um(ge);
            I = j ? j.replace(_E, e) : `<p>${e}</p>`;
          } else if (i) I = i;
          else if (s) {
            let e = Um(s);
            I = j ? j.replace(_E, e) : `<p>${e}</p>`;
          } else a && (I = a);
          let ve = Au(),
            ye = f(() => (he || !P || !pe ? I : Wm(I, P, pe, ve)), [I, P, pe, ve]);
          if (
            (c(() => {
              let e = de.current;
              if (e === null) return;
              function t(e) {
                let t = wu(e.target, de.current);
                Un(e) ||
                  !fe ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (Ul(fe, t, ve) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [fe, ve]),
            qm(l, M, de),
            !x)
          )
            return null;
          let be = T && O() === Y.canvas,
            L = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: Km(w),
              opacity: be ? 0 : S,
              flexShrink: 0,
            },
            xe = Y.hasRestrictions(),
            Se = ja(e, ce || 0, !1),
            Ce = N && (u === `auto` || p === `auto`),
            we =
              e.transformTemplate || !Se || !xe || M || Ce
                ? (e.transformTemplate ?? Io(v))
                : void 0;
          if (!k) {
            if (Se && xe && !Ce) {
              let e = Ev.getNumber(C).toFixed(4);
              ((L.transform = `translate(${Se.x}px, ${Se.y}px) rotate(${e}deg)`),
                (L.width = Se.width),
                (L.minWidth = Se.width),
                (L.height = Se.height));
            } else
              ((L.left = m),
                (L.right = h),
                (L.top = g),
                (L.bottom = _),
                (L.width = u),
                (L.height = p),
                (L.rotate = C));
            ee
              ? (!he || me) &&
                ((L.position = `sticky`),
                (L.willChange = `transform`),
                (L.top = te),
                (L.right = A),
                (L.bottom = ne),
                (L.left = re))
              : he && (e.positionFixed || e.positionAbsolute) && (L.position = `absolute`);
          }
          return (
            yc(e, L),
            gc(e, L),
            Object.assign(L, e.style),
            D(_e.div, {
              id: n,
              ref: de,
              ...se,
              style: L,
              layoutId: le,
              "data-framer-name": r,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": v,
              className: xc(y, b, vE),
              transformTemplate: we,
              dangerouslySetInnerHTML: { __html: ye },
            })
          );
        })
      )),
      (bE = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (xE = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`
      )),
      (SE = A(function (e, t) {
        return D(`svg`, { ...e, ref: t, children: e.children });
      })),
      (CE = _e.create(SE)),
      (wE = A(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return D(CE, {
          ...r,
          ref: i,
          viewBox: t,
          children: D(_e.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (TE = []),
      (EE = `RichTextContainer`),
      (DE = A(function (e, t) {
        let {
            __fromCanvasComponent: n = !1,
            _forwardedOverrideId: r,
            _forwardedOverrides: i,
            _usesDOMRect: a,
            anchorLinkOffsetY: o,
            as: s,
            bottom: c,
            center: l,
            children: u,
            environment: p = Y.current,
            fonts: m = TE,
            height: h,
            isEditable: g = !1,
            left: _,
            name: v,
            opacity: y,
            positionSticky: b,
            positionStickyBottom: x,
            positionStickyLeft: S,
            positionStickyRight: C,
            positionStickyTop: w,
            right: T,
            rotation: O = 0,
            style: k,
            _initialStyle: ee,
            stylesPresetsClassNames: te,
            text: A,
            top: ne,
            verticalAlignment: re = `top`,
            visible: j = !0,
            width: M,
            withExternalLayout: ie = !1,
            viewBox: ae,
            viewBoxScale: N = 1,
            effect: oe,
            ...se
          } = e,
          ce = Pa(),
          le = p(),
          ue = le === Y.canvas,
          de = ue || le === Y.export,
          fe = d(db),
          P = Lo(e),
          pe = E(null),
          me = t ?? pe;
        (Uo(e, me), qm(m, n, me));
        let he = nh(oe, me),
          ge = f(() => {
            if (u) return uh(u, te, A, o, void 0, he.getTokenizer());
          }, [u, te, A, o, he]);
        if (!j) return null;
        let F = { opacity: g && ue ? 0 : y },
          _e = Km(re);
        _e !== Oy.justifyContent && (F.justifyContent = _e);
        let I = {},
          ve = Y.hasRestrictions(),
          ye = ja(e, ce || 0, !1),
          be = a && (M === `auto` || h === `auto`),
          L =
            e.transformTemplate || !ye || !ve || n || be ? (e.transformTemplate ?? Io(l)) : void 0;
        (ie ||
          (ye && ve && !be
            ? ((I.x = ye.x + (z(k?.x) ? k.x : 0)),
              (I.y = ye.y + (z(k?.y) ? k.y : 0)),
              (I.left = 0),
              (I.top = 0),
              (F.rotate = Ev.getNumber(O)),
              (F.width = ye.width),
              (F.minWidth = ye.width),
              (F.height = ye.height))
            : ((F.left = _),
              (F.right = T),
              (F.top = ne),
              (F.bottom = c),
              (F.width = M),
              (F.height = h),
              (F.rotate = O)),
          b
            ? (!de || fe) &&
              ((F.position = `sticky`),
              (F.willChange = `transform`),
              (F.top = w),
              (F.right = C),
              (F.bottom = x),
              (F.left = S))
            : ue && (e.positionFixed || e.positionAbsolute) && (F.position = `absolute`)),
          yc(e, F),
          gc(e, F),
          Object.assign(F, ee, k, I),
          P && (se.layout = `preserve-aspect`));
        let xe = jo(e.as),
          Se = se[`data-framer-name`] ?? v,
          Ce = ue ? sh(Jy(se)) : se;
        return R(e.viewBox)
          ? e.as === void 0
            ? D(wE, {
                ...Ce,
                ref: me,
                style: F,
                layoutId: P,
                viewBox: ae,
                viewBoxScale: N,
                transformTemplate: L,
                "data-framer-name": Se,
                "data-framer-component-type": EE,
                children: ge,
              })
            : D(xe, {
                ...Ce,
                ref: me,
                style: F,
                layoutId: P,
                transformTemplate: L,
                "data-framer-name": Se,
                "data-framer-component-type": EE,
                children: D(wE, {
                  viewBox: ae,
                  viewBoxScale: N,
                  style: { width: `100%`, height: `100%` },
                  children: ge,
                }),
              })
          : D(xe, {
              ...Ce,
              ref: me,
              style: F,
              layoutId: P,
              transformTemplate: L,
              "data-framer-name": Se,
              "data-framer-component-type": EE,
              children: ge,
            });
      })),
      (OE = $a(
        A(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (R(a)) {
            !r.stylesPresetsClassName &&
              B(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [R(t) ? `html` : `htmlFromDesign`]: a };
            return D(yE, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && R(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return D(DE, { ...r, ref: i, children: k(a) ? a : void 0 });
        })
      )),
      (kE = `framer/asset-reference,`),
      (AE = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = Ch(t);
        return D(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: D(
            `image`,
            {
              width: r ? i : 1,
              height: r ? a : 1,
              href: c,
              preserveAspectRatio: `none`,
              transform: r ? void 0 : n,
              x: r ? 0 : void 0,
              y: r ? 0 : void 0,
            },
            c
          ),
        });
      }),
      (jE = Rn()),
      (ME = class {
        constructor(e, t, n, r, i = 0) {
          (M(this, `id`, e),
            M(this, `svg`, t),
            M(this, `innerHTML`, n),
            M(this, `viewBox`, r),
            M(this, `count`, i));
        }
      }),
      (NE = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (PE = class {
        constructor() {
          (M(this, `entries`, new Map()), M(this, `vectorSetItems`, new Map()));
        }
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(yb(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = Th(e);
            (s &&
              (t && Eh(s, n),
              (s.id = n),
              (o = jh(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (!(!e || e === ``)) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          jE && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = NE),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          jE && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new ME(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !jE) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        jE && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${NE}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (FE = new PE()),
      (IE = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }),
      (LE = A(function (e, t) {
        let n = Pa(),
          i = Lo(e),
          a = r.useRef(null),
          o = t ?? a,
          s = wT();
        return (
          Uo(e, a),
          D(zE, { ...e, innerRef: o, parentSize: n, layoutId: i, providedWindow: s })
        );
      })),
      (RE = 5e4),
      (zE = (() => {
        var e;
        return (
          (e = class extends vb {
            constructor() {
              (super(...arguments),
                M(this, `container`, r.createRef()),
                M(this, `svgElement`, null),
                M(this, `setSVGElement`, (e) => {
                  ((this.svgElement = e), this.setLayerElement(e));
                }),
                M(this, `previouslyRenderedSVG`, ``),
                M(this, `unmountedSVG`, ``));
            }
            static frame(e) {
              return ja(e, e.parentSize || 0);
            }
            get frame() {
              return ja(this.props, this.props.parentSize || 0);
            }
            componentDidMount() {
              if (this.unmountedSVG) {
                let { svgContentId: e } = this.props,
                  t = e ? `svg${e}` : null;
                (FE.subscribe(this.unmountedSVG, !e, t),
                  (this.previouslyRenderedSVG = this.unmountedSVG));
              }
              this.props.svgContentId || Fh(this.container, this.props);
            }
            componentWillUnmount() {
              (FE.unsubscribe(this.previouslyRenderedSVG),
                (this.unmountedSVG = this.previouslyRenderedSVG),
                (this.previouslyRenderedSVG = ``));
            }
            componentDidUpdate(e) {
              if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
              let { fill: t } = this.props;
              (cb.isImageObject(t) &&
                cb.isImageObject(e.fill) &&
                t.src !== e.fill.src &&
                Jo(this.svgElement, `fill`, null, !1),
                Fh(this.container, this.props));
            }
            collectLayout(e, t) {
              if (this.props.withExternalLayout) {
                ((t.width = `100%`), (t.height = `100%`), (t.aspectRatio = `inherit`));
                return;
              }
              let n = this.frame,
                {
                  rotation: r,
                  intrinsicWidth: i,
                  intrinsicHeight: a,
                  width: o,
                  height: s,
                } = this.props,
                c = Ev.getNumber(r);
              if (
                ((e.opacity = U(this.props.opacity) ? this.props.opacity : 1),
                Y.hasRestrictions() && n)
              ) {
                (Object.assign(e, {
                  transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
                  width: `${n.width}px`,
                  height: `${n.height}px`,
                }),
                  Oa(this.props) && (e.position = `absolute`));
                let r = n.width / (i || 1),
                  o = n.height / (a || 1);
                t.transformOrigin = `top left`;
                let { zoom: s, target: l } = Yv;
                if (l === Y.export) {
                  let e = s > 1 ? s : 1;
                  ((t.transform = `scale(${r * e}, ${o * e})`), (t.zoom = 1 / e));
                } else t.transform = `scale(${r}, ${o})`;
                i && a && ((t.width = i), (t.height = a));
                return;
              }
              let { left: l, right: u, top: d, bottom: f } = this.props;
              (Object.assign(e, {
                left: l,
                right: u,
                top: d,
                bottom: f,
                width: o,
                height: s,
                rotate: c,
              }),
                Object.assign(t, { left: 0, top: 0, bottom: 0, right: 0, position: `absolute` }));
            }
            render() {
              let {
                id: e,
                visible: t,
                style: n,
                fill: r,
                svg: i,
                intrinsicHeight: a,
                intrinsicWidth: o,
                title: s,
                description: c,
                layoutId: l,
                className: u,
                variants: d,
                withExternalLayout: f,
                innerRef: p,
                svgContentId: m,
                height: h,
                opacity: g,
                width: _,
                requiresOverflowVisible: v,
                ...y
              } = this.props;
              if (!f && (!t || !e)) return null;
              let x = e ?? l ?? `svg`,
                S = this.frame,
                C = S || { width: o || 100, height: a || 100 },
                w = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
                T = {};
              (this.collectLayout(w, T),
                mc(this.props, w),
                yc(this.props, w),
                vb.applyWillChange(this.props, w, !1));
              let E = null;
              if (typeof r == `string` || J.isColorObject(r)) {
                let e = J.isColorObject(r) ? r.initialValue || J.toRgbString(r) : r;
                ((w.fill = e), (w.color = e));
              } else if (Eb.isLinearGradient(r)) {
                let t = r,
                  n = `${encodeURI(e || ``)}g${Eb.hash(t)}`;
                w.fill = `url(#${n})`;
                let { stops: i, x1: a, x2: o, y1: s, y2: c } = hh(t, x);
                E = D(`svg`, {
                  ref: this.setSVGElement,
                  width: `100%`,
                  height: `100%`,
                  style: { position: `absolute` },
                  role: `presentation`,
                  children: D(`linearGradient`, {
                    id: n,
                    x1: a,
                    x2: o,
                    y1: s,
                    y2: c,
                    children: i.map((e, t) =>
                      D(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                    ),
                  }),
                });
              } else if (Ob.isRadialGradient(r)) {
                let t = r,
                  n = `${encodeURI(e || ``)}g${Ob.hash(t)}`;
                w.fill = `url(#${n})`;
                let i = gh(t, x);
                E = D(`svg`, {
                  ref: this.setSVGElement,
                  width: `100%`,
                  height: `100%`,
                  style: { position: `absolute` },
                  role: `presentation`,
                  children: D(`radialGradient`, {
                    id: n,
                    cy: t.centerAnchorY,
                    cx: t.centerAnchorX,
                    r: t.widthFactor,
                    children: i.stops.map((e, t) =>
                      D(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                    ),
                  }),
                });
              } else if (cb.isImageObject(r)) {
                let e = xh(r, C, x);
                e &&
                  ((w.fill = `url(#${e.id})`),
                  (E = D(`svg`, {
                    ref: this.setSVGElement,
                    width: `100%`,
                    height: `100%`,
                    style: { position: `absolute` },
                    role: `presentation`,
                    children: D(`defs`, { children: D(AE, { ...e }) }),
                  })));
              }
              let O = { "data-framer-component-type": `SVG` },
                k = !S;
              k && Object.assign(O, No(this.props.center));
              let ee =
                  !v &&
                  !E &&
                  !w.fill &&
                  !w.background &&
                  !w.backgroundImage &&
                  i.length < RE &&
                  !Mh(i) &&
                  !Nh(i),
                A = null;
              if (ee)
                ((w.backgroundSize = `100% 100%`),
                  (w.backgroundImage = ct(i)),
                  FE.unsubscribe(this.previouslyRenderedSVG),
                  (this.previouslyRenderedSVG = ``));
              else {
                let e = m ? `svg${m}` : null,
                  t = FE.subscribe(i, !m, e, v);
                (FE.unsubscribe(this.previouslyRenderedSVG),
                  (this.previouslyRenderedSVG = i),
                  Ph(w) && (w.overflow = `hidden`),
                  (A = te(b, {
                    children: [
                      E,
                      D(
                        `div`,
                        {
                          className: `svgContainer`,
                          style: T,
                          ref: this.container,
                          dangerouslySetInnerHTML: { __html: t },
                        },
                        cb.isImageObject(r) ? r.src : ``
                      ),
                    ],
                  })));
              }
              let ne = jo(this.props.as),
                { href: re, target: j, rel: M, onClick: ie, onTap: ae } = this.props,
                N = s || c;
              return D(ne, {
                ...O,
                ...y,
                layoutId: l,
                transformTemplate: k ? Io(this.props.center) : void 0,
                id: e,
                ref: p,
                style: w,
                className: u,
                variants: d,
                tabIndex: this.props.tabIndex,
                role: N ? `img` : void 0,
                "aria-label": s,
                "aria-description": c,
                "aria-hidden": N ? void 0 : `true`,
                onTap: ae,
                onClick: ie,
                href: re,
                target: j,
                rel: M,
                children: A,
              });
            }
          }),
          M(e, `supportsConstraints`, !0),
          M(e, `defaultSVGProps`, {
            left: void 0,
            right: void 0,
            top: void 0,
            bottom: void 0,
            style: void 0,
            _constraints: { enabled: !0, aspectRatio: null },
            parentSize: 0,
            rotation: 0,
            visible: !0,
            svg: ``,
            shadows: [],
          }),
          M(e, `defaultProps`, { ...vb.defaultProps, ...e.defaultSVGProps }),
          e
        );
      })()),
      (BE = $a(LE)),
      (VE = 1e3),
      (HE = `explicitInter`),
      (Ue.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = N(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
//! Credit to Astro | MIT License
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
export {
  Nt as $,
  Mx as A,
  pt as B,
  Ky as C,
  Yh as D,
  lE as E,
  Ih as F,
  AS as G,
  gt as H,
  so as I,
  m_ as J,
  hi as K,
  tp as L,
  _y as M,
  Rh as N,
  Nx as O,
  zh as P,
  cl as Q,
  Gg as R,
  oo as S,
  xc as T,
  mg as U,
  UE as V,
  Xr as W,
  Kr as X,
  FE as Y,
  ap as Z,
  BC as _,
  Tn as _t,
  Cu as a,
  vp as at,
  yS as b,
  pE as c,
  wh as ct,
  aC as d,
  vy as dt,
  Pl as et,
  rr as f,
  Pp as ft,
  Y as g,
  ST as gt,
  fT as h,
  qh as ht,
  pa as i,
  gi as it,
  jx as j,
  Ax as k,
  KS as l,
  gp as lt,
  Tx as m,
  Pc as mt,
  vS as n,
  Ll as nt,
  bx as o,
  zt as ot,
  jd as p,
  iS as pt,
  pp as q,
  dy as r,
  zr as rt,
  qS as s,
  jt as st,
  oS as t,
  lp as tt,
  Cg as u,
  Np as ut,
  OE as v,
  by as w,
  Lh as x,
  BE as y,
  ai as z,
};
//# sourceMappingURL=framer.22F-MT4t.mjs.map
