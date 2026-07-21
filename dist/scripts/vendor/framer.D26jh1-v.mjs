import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  C as r,
  E as i,
  F as a,
  I as o,
  L as s,
  M as c,
  N as l,
  P as u,
  R as d,
  S as f,
  T as p,
  V as m,
  _ as h,
  a as g,
  c as _,
  d as v,
  f as y,
  g as b,
  h as x,
  i as S,
  j as C,
  k as w,
  l as T,
  m as E,
  o as D,
  s as O,
  u as k,
  v as A,
  w as j,
  x as ee,
  y as te,
  z as ne,
} from "./react.B4kFiiQA.mjs";
import {
  $ as M,
  A as re,
  B as ie,
  C as ae,
  D as oe,
  E as se,
  F as ce,
  G as le,
  H as ue,
  I as de,
  J as fe,
  K as N,
  L as pe,
  M as me,
  O as he,
  P as ge,
  Q as _e,
  S as P,
  T as ve,
  U as F,
  V as ye,
  W as be,
  X as I,
  Y as L,
  Z as xe,
  _ as Se,
  a as Ce,
  b as we,
  c as Te,
  d as Ee,
  et as De,
  f as Oe,
  g as ke,
  h as Ae,
  i as je,
  j as Me,
  k as Ne,
  l as Pe,
  m as Fe,
  n as Ie,
  nt as Le,
  o as Re,
  p as ze,
  q as Be,
  r as Ve,
  s as He,
  tt as Ue,
  u as We,
  v as Ge,
  w as Ke,
  x as qe,
  y as Je,
  z as Ye,
} from "./motion.CYX_XZth.mjs";
function Xe(e) {
  return typeof e == `function`;
}
function Ze(e) {
  return typeof e == `boolean`;
}
function R(e) {
  return typeof e == `string`;
}
function z(e) {
  return Number.isFinite(e);
}
function Qe(e) {
  return Array.isArray(e);
}
function B(e) {
  return typeof e == `object` && !!e && !Qe(e);
}
function $e(e) {
  for (let t in e) return !1;
  return !0;
}
function et(e) {
  return e === void 0;
}
function tt(e) {
  return e === null;
}
function nt(e) {
  return e == null;
}
function rt(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function it(e) {
  return B(e) && Xe(e.return);
}
function at(e) {
  return B(e) && Xe(e.then);
}
function ot(e) {
  return e instanceof Promise;
}
function st(e) {
  return `url('${ct(e)}')`;
}
function ct(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function lt(e, t) {
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
function ut(e, t, n) {
  if (Nh.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (Nh.set(e, t), t))
    .catch((t) => {
      throw (Nh.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(Th), Nh.set(e, r));
}
function dt(e, t) {
  Eh && (Ph.set(e, t), Fh.has(e) && ut(e, t, `registered loader ${e}`));
}
function ft() {
  if (!Eh) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(Ih),
      i = r ? e.slice(Ih.length) : e;
    if (!i) continue;
    Fh.add(i);
    let a = Ph.get(i);
    a ? ut(i, a, `registered loader ${i}`) : r && ut(i, () => import(n), n);
  }
}
function pt(e) {
  return typeof e == `object` && !!e && !y(e) && Rh in e;
}
function mt(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function ht(e, t = `default`, n) {
  n && dt(n, e);
  let r,
    i,
    o,
    s = () => {
      if (i || !n || !Nh.has(n)) return;
      let e = Nh.get(n);
      ot(e) ? c(() => e) : (i = mt(e, t));
    },
    c = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = mt(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              o = e;
            })),
          r),
    l = !1,
    u = h(function (t, r) {
      if (
        (a(() => {
          l = !0;
        }, []),
        o)
      )
        throw o;
      if ((s(), n !== void 0 && Lh !== void 0 && Lh.add(n), !i)) throw c(e);
      return _(i, { ref: r, ...t });
    });
  return (
    (u.preload = () => (s(), c(e))),
    (u.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: l })),
    u
  );
}
function gt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function _t(e) {
  return e === null || !(Bh in e) ? !1 : typeof e.equals == `function`;
}
function vt(e, t) {
  return e === t || (e !== e && t !== t);
}
function yt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!vt(e[r], t[r])) return !1;
  return !0;
}
function bt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!Et(e[r], t[r], !0)) return !1;
  return !0;
}
function xt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!vt(r, t.get(n))) return !1;
  return !0;
}
function St(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Et(r, t.get(n), !0)) return !1;
  return !0;
}
function Ct(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function wt(e, t) {
  let n = zh(e);
  if (n.length !== zh(t).length) return !1;
  for (let r of n)
    if (!gt(t, r) || (!(r === `_owner` && gt(e, `$$typeof`) && e.$$typeof) && !vt(e[r], t[r])))
      return !1;
  return !0;
}
function Tt(e, t) {
  let n = zh(e);
  if (n.length !== zh(t).length) return !1;
  for (let r of n)
    if (!gt(t, r) || (!(r === `_owner` && gt(e, `$$typeof`) && e.$$typeof) && !Et(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Et(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? bt(e, t) : yt(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? St(e, t) : xt(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return Ct(e, t);
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
      ? _t(e) && _t(t)
        ? e.equals(t)
        : n
          ? Tt(e, t)
          : wt(e, t)
      : !1;
}
function Dt(e, t, n = !0) {
  try {
    return Et(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function Ot(e) {
  return f.useCallback((t) => e[t], [e]);
}
function kt({ api: e, children: t }) {
  return _(Vh.Provider, { value: e, children: t });
}
function At() {
  return f.useContext(Vh);
}
function jt({ routes: e, children: t }) {
  let n = Ot(e),
    r = l(() => ({ getRoute: n }), [n]);
  return _(Vh.Provider, { value: r, children: t });
}
function Mt() {
  let e = At(),
    t = c(Hh),
    n = t?.routeId ?? e.currentRouteId,
    r = t?.routeId ? t.pathVariables : e.currentPathVariables,
    i = n ? e.getRoute?.(n) : void 0;
  return l(() => {
    if (!(!n || !i)) return { ...i, id: n, pathVariables: r };
  }, [n, r, i]);
}
function Nt() {
  let e = Mt();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Pt(e) {
  let t = Mt(),
    n = f.useRef(t);
  Dt(n.current, t) || !t || ((n.current = t), e(t));
}
function Ft(e) {
  let t = At();
  if (e) return t.getRoute?.(e);
}
function It(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Lt(e) {
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
function Rt(e, t) {
  let n = Mt(),
    r = Ft(t) ?? n;
  return f.useMemo(() => (r ? It(r, e) : e), [e, r]);
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
function zt(e) {
  return e === null || (typeof e != `object` && typeof e != `function`);
}
function Bt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === rg
  );
}
function Vt(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Ht(e) {
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
function Ut(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Ht(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Wt(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function Gt(e) {
  return ig.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function Kt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > tg);
}
function qt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > eg);
}
function Jt(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return Kt(+e);
}
function Yt(e) {
  let t = Object.keys(e);
  for (var n = t.length - 1; n >= 0 && !Jt(t[n]); n--);
  return ((t.length = n + 1), t);
}
function Xt(e) {
  return new Uint8Array(e).toBase64();
}
function Zt(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function Qt(e) {
  return Buffer.from(e).toString(`base64`);
}
function $t(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function en(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function tn(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function nn(e, t) {
  return rn(JSON.parse(e), t);
}
function rn(e, t) {
  if (typeof e == `number`) return a(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let n = e,
    r = Array(n.length),
    i = null;
  function a(e, o = !1) {
    if (e === qh) return;
    if (e === Yh) return NaN;
    if (e === Xh) return 1 / 0;
    if (e === Zh) return -1 / 0;
    if (e === Qh) return -0;
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
            let n = cg(t);
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
      } else if (s[0] === $h) {
        let t = s[1];
        if (!qt(t)) throw Error(`Invalid input`);
        let n = [];
        ((r[e] = n), (n[tg] = void 0), delete n[tg]);
        for (let e = 2; e < s.length; e += 2) {
          let r = s[e];
          if (!Kt(r) || r >= t) throw Error(`Invalid input`);
          n[r] = a(s[e + 1]);
        }
        n.length = t;
      } else {
        let t = Array(s.length);
        r[e] = t;
        for (let e = 0; e < s.length; e += 1) {
          let n = s[e];
          n !== Jh && (t[e] = a(n));
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
function an(e, t) {
  let n = on(!1, e, t);
  return typeof n == `string` ? n : `[${n.join(`,`)}]`;
}
function on(e, t, n) {
  let r = [],
    i = new Map(),
    a = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) a.push({ key: e, fn: n[e] });
  let o = [],
    s = 0;
  function c(n, l) {
    if (n === void 0) return qh;
    if (Number.isNaN(n)) return Yh;
    if (n === 1 / 0) return Xh;
    if (n === -1 / 0) return Zh;
    if (n === 0 && 1 / n < 0) return Qh;
    if (i.has(n)) return i.get(n);
    ((l ??= s++), i.set(n, l));
    for (let { key: e, fn: t } of a) {
      let i = t(n);
      if (i) return ((r[l] = `["${e}",${c(i)}]`), l);
    }
    if (typeof n == `function`) throw new ng(`Cannot stringify a function`, o, n, t);
    if (typeof n == `symbol`) throw new ng(`Cannot stringify a Symbol primitive`, o, n, t);
    let u = ``;
    if (zt(n)) u = sn(n);
    else if (typeof n.then == `function`) {
      if (!e)
        throw new ng(
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
      let e = Vt(n);
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
          u = `["URL",${Ut(n.toString())}]`;
          break;
        case `URLSearchParams`:
          u = `["URLSearchParams",${Ut(n.toString())}]`;
          break;
        case `RegExp`:
          let { source: r, flags: i } = n;
          u = i ? `["RegExp",${Ut(r)},"${i}"]` : `["RegExp",${Ut(r)}]`;
          break;
        case `Array`: {
          let e = !1;
          u = `[`;
          for (let t = 0; t < n.length; t += 1)
            if ((t > 0 && (u += `,`), Object.hasOwn(n, t)))
              (o.push(`[${t}]`), (u += c(n[t])), o.pop());
            else if (e) u += Jh;
            else {
              let t = Yt(n),
                r = t.length,
                i = String(n.length).length;
              if ((n.length - r) * 3 > 4 + i + r * (i + 1)) {
                u = `[` + $h + `,` + n.length;
                for (let e = 0; e < t.length; e++) {
                  let r = t[e];
                  (o.push(`[${r}]`), (u += `,` + r + `,` + c(n[r])), o.pop());
                }
                break;
              } else ((e = !0), (u += Jh));
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
            (o.push(`.get(${zt(e) ? sn(e) : `...`})`), (u += `,${c(e)},${c(t)}`), o.pop());
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
          u = `["ArrayBuffer","${sg(n)}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          u = `["${e}",${Ut(n.toString())}]`;
          break;
        default:
          if (!Bt(n)) throw new ng(`Cannot stringify arbitrary non-POJOs`, o, n, t);
          if (Wt(n).length > 0) throw new ng(`Cannot stringify POJOs with symbolic keys`, o, n, t);
          if (Object.getPrototypeOf(n) === null) {
            u = `["null"`;
            for (let e of Object.keys(n)) {
              if (e === `__proto__`)
                throw new ng(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (o.push(Gt(e)), (u += `,${Ut(e)},${c(n[e])}`), o.pop());
            }
            u += `]`;
          } else {
            u = `{`;
            let e = !1;
            for (let r of Object.keys(n)) {
              if (r === `__proto__`)
                throw new ng(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (e && (u += `,`), (e = !0), o.push(Gt(r)), (u += `${Ut(r)}:${c(n[r])}`), o.pop());
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
function sn(e) {
  let t = typeof e;
  return t === `string`
    ? Ut(e)
    : e === void 0
      ? qh.toString()
      : e === 0 && 1 / e < 0
        ? Qh.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function cn(e, t, n = `lazy`) {
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
function ln(e) {
  return R(e) && (e === `` || ug.test(e));
}
function un() {
  return { [dg.QueryCache]: new Map(), [dg.CollectionUtilsCache]: new Map() };
}
function dn() {
  if (!Eh) return;
  if (fg !== void 0) return fg;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      fg = nn(e.text) ?? un();
    } catch (e) {
      ((fg = un()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      kh(() => {
        (e?.remove(), (e = null));
      }),
      fg
    );
  }
}
function fn(e, t) {
  let n = dn();
  return n ? n[e].has(t) : !1;
}
function pn(e, t) {
  let n = dn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function mn(e) {
  return e?.id ?? Wh;
}
function hn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function gn(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (gg.has(n)) return gg.get(n);
    let r = new vg(n, t);
    return (gg.set(n, r), r);
  };
}
function _n({ children: e, collectionUtils: t }) {
  let n = l(() => ({ get: gn(t) }), [t]);
  return _(_g.Provider, { value: n, children: e });
}
function vn() {
  return c(_g);
}
function yn() {
  for (let e of xg) e();
  xg.clear();
}
function bn(e) {
  return new Promise((t) => {
    if ((xg.add(t), document.hidden)) {
      yn();
      return;
    }
    (document.addEventListener(`visibilitychange`, yn),
      document.addEventListener(`pagehide`, yn),
      Ae.read(() => {
        Sn(e).then(() => {
          (xg.delete(t), !e?.signal?.aborted && t());
        });
      }));
  });
}
function xn(e) {
  return new Promise((t) => {
    (setTimeout(t, 100),
      Ae.read(
        () => {
          Sn(e).then(t);
        },
        !1,
        !0
      ));
  });
}
function Sn(e) {
  let t = e?.priority,
    n = q.scheduler;
  return t === `background`
    ? Cn(1)
    : yg && n
      ? n.yield(e).catch(Th)
      : bg && n
        ? n.postTask(() => {}, e).catch(Th)
        : t === `user-blocking`
          ? Promise.resolve()
          : Cn(0);
}
function Cn(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function wn(e) {
  let { continueAfter: t, ensureContinueBeforeUnload: n, ...r } = e ?? {};
  return n ? bn(r) : t === `paint` ? xn(r) : Sn(r);
}
function Tn() {
  let e = vn(),
    { getRoute: t } = At();
  return u(
    (n, r, i = !0, a = !0) => {
      if (!n || !t) return;
      let o = t(n),
        { pathVariables: s, locale: c } = r;
      return Dn(o, { routeId: n, pathVariables: s, locale: c, collectionUtils: e }, i, a);
    },
    [t, e]
  );
}
function En(e, t = !0) {
  let n = Tn();
  a(() => {
    if (!(!t || !Sg)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function Dn(e, t, n = !0, r = !0) {
  if (!Sg || !e) return;
  let i = e.page;
  if (!(!i || !pt(i))) {
    n && (await wn());
    try {
      let e = await i.preload();
      r && t && e && (await On(e, t));
    } catch {}
  }
}
async function On(e, t) {
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
function kn() {
  return n === void 0 ? void 0 : n;
}
function An() {
  let e = kn();
  return e ? Cg.test(e.platform) : !1;
}
function jn() {
  let e = kn();
  return e
    ? wg.test(e.platform)
      ? !0
      : Tg.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function Mn() {
  return An() || jn();
}
function Nn() {
  let e = kn();
  return e ? Eg.test(e.userAgent) : !1;
}
function Pn() {
  let e = kn();
  return e ? Dg.test(e.userAgent) && Og.test(e.vendor) && !Nn() : !1;
}
function Fn() {
  let e = kn();
  return e ? kg.test(e.userAgent) && Ag.test(e.vendor) : !1;
}
function In() {
  let e = kn();
  return e ? jg.test(e.userAgent) : !1;
}
function Ln() {
  return typeof document == `object`;
}
function Rn() {
  let e = kn();
  return e ? Mg.test(e.userAgent) : !1;
}
function zn() {
  return !1;
}
function Bn() {
  let e = kn();
  return e && Ng.test(e.userAgent) ? `tablet` : e && Pg.test(e.userAgent) ? `phone` : `desktop`;
}
function Vn() {
  return Bn() === `desktop`;
}
function Hn(e) {
  return Mn() ? e.metaKey : e.ctrlKey;
}
function Un(e, t) {
  return e.replace(Rg, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function Wn(e, t = !1) {
  let n = ``;
  if (m !== void 0)
    if (t) n = m.location.search;
    else {
      let e = m.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? m.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? Gn(n, e) : e;
}
function Gn(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== zg && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function Kn(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(Rg)),
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
          m = ot(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = ot(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = ot(e) ? await e : e;
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
async function qn({
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
      u = await Kn(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (t.slug && (u.path = `/` + t.slug + u.path), o && u.path && (u.path = Wn(u.path, !0)), u);
}
function Jn(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = Yn(e),
    [r, i] = Yn(t),
    a = Xn(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function Yn(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function Xn(e, t) {
  if (e === t || ((e = `/` + Zn(e)), (t = `/` + Zn(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Hg(e, 1 + s);
    if (n !== Hg(t, 1 + s)) break;
    n === Vg && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (Hg(t, 1 + s) === Vg) return Wg(t, 1 + s + 1);
      if (s === 0) return Wg(t, 1 + s);
    } else r > a && (Hg(e, 1 + s) === Vg ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Hg(e, s) === Vg) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${Wg(t, 1 + o)}`;
}
function Zn(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Hg(e, o);
    else if (qg(a)) break;
    else a = Vg;
    if (qg(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || Hg(t, t.length - 1) !== Bg || Hg(t, t.length - 2) !== Bg) {
            if (t.length > 2) {
              let e = Ug(t, Kg);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = Wg(t, 0, e)), (n = t.length - 1 - Ug(t, Kg))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          Gg && ((t += t.length > 0 ? `${Kg}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${Kg}${Wg(e, r + 1, o)}`) : (t = Wg(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === Bg && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function Qn(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || m.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function $n(e, t, n) {
  let r = It(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(Rg, (e, t) => i[t] ?? e);
}
function er(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: c,
    onlyHash: l = !1,
    siteCanonicalURL: u,
    localeId: d,
  }
) {
  let f = $n(i, e, o);
  if (l) return f ?? ``;
  let p = t ?? `/`;
  (n && d && (p = n[d] ?? p), r && (p = p.replace(Rg, (e, t) => String(r[t] || e))));
  let h = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (h = h.replace(Rg, (e, t) => String(a[t] || e)));
  let g = !!(p === h && f),
    _ = !g && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && p !== h;
  if (s)
    if (Jg.has(p) && m !== void 0) {
      let e = Qn(u);
      h = Jn(m.location.pathname, e + h);
    } else h = Jn(p, h);
  let v = g || _;
  return ((c || v) && (h = Wn(h, v)), f && (h = `${h}#${f}`), h);
}
function tr() {
  if (Yg) return;
  Yg = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (m.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((m.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), cn(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function nr({ children: e, value: t }) {
  return _(Xg.Provider, { value: t, children: e });
}
function rr() {
  return f.useContext(Xg);
}
function ir(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function ar(e) {
  let t = Zg,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < Qg; ) ((n = e.next(t)), r.push(n.value), (t += Zg));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - Zg }
  );
}
function or(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function sr(e) {
  let { innerWidth: t, innerHeight: n } = m,
    [r, i] = or(e.x),
    [a, o] = or(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function cr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function lr(e) {
  return e ? e_[e] : void 0;
}
function ur(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (dr(t)) {
    let { easing: e, duration: n } = ar(
      oe({ keyframes: [0, 1], ...fr(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = lr(n?.mask?.type),
    o = cr(n, `start`, e, a),
    s = cr({ ...t_, mask: n.mask }, `end`, e, a);
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
function dr(e) {
  return e.type === `spring`;
}
function fr(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function pr({ exit: e = r_, enter: t }) {
  let n = document.createElement(`style`);
  n.id = n_;
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
    (r += ur(`exit`, e)),
    (r += ur(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function mr() {
  kh(() => {
    Ae.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(n_);
      e && document.head.removeChild(e);
    });
  });
}
function hr() {
  return !!document.startViewTransition;
}
function gr(e) {
  return new Promise((t) => {
    Ae.render(() => {
      (performance.mark(`framer-vt-style`), pr(e), t());
    });
  });
}
async function _r(e, t, n) {
  if (!hr()) {
    e();
    return;
  }
  if ((await gr(t), n?.aborted)) return;
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
      .catch(i_),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), mr());
      })
      .catch(i_),
    r
  );
}
function vr() {
  let e = rr(),
    n = t(void 0);
  return (
    a(() => {
      n.current &&= (n.current(), void 0);
    }),
    u(
      (t, r, i, a) => {
        let o = ir(t, r, e);
        if (o) {
          let e = new Promise((e) => {
            n.current = e;
          });
          return _r(
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
function yr(e, t) {
  kh(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function br(e, t, n, i = r) {
  i(() => {
    let t = async (e) => (await wn({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function xr(e) {
  let n = t(void 0);
  return (
    br(
      () => {
        n.current &&= (n.current(), void 0);
      },
      void 0,
      { priority: `user-blocking` }
    ),
    u(
      (t) => {
        let r = new Promise((e) => {
          n.current = e;
        });
        if (!e) return { promise: r, measureDetail: t, ignore: null };
        let i = `${e}-start`,
          a = `${e}-end`,
          o = !1;
        return (
          performance.mark(i),
          r
            .finally(() => {
              o || (performance.mark(a), performance.measure(e, { start: i, end: a, detail: t }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: r,
            measureDetail: t,
            ignore: () => {
              ((o = !0), n.current?.(), (n.current = void 0));
            },
          }
        );
      },
      [e]
    )
  );
}
function Sr(
  e,
  t,
  {
    currentRoutePath: n,
    currentRoutePathLocalized: r,
    currentPathVariables: i,
    hash: a,
    pathVariables: o,
    localeId: s,
    preserveQueryParams: c,
    siteCanonicalURL: l,
  }
) {
  let { path: u } = t;
  if (!u) return;
  let d = er(t, {
      currentRoutePath: n,
      currentRoutePathLocalized: r,
      currentPathVariables: i,
      hash: a,
      pathVariables: o,
      preserveQueryParams: c,
      siteCanonicalURL: l,
      localeId: s,
    }),
    f = n !== void 0 && n === u,
    p = Cr(m.history.state) ? m.history.state : void 0,
    h = f ? p?.queryParamBackAnchorSearch : void 0;
  try {
    Tr({ routeId: e, hash: a, pathVariables: o, localeId: s, queryParamBackAnchorSearch: h }, d);
  } catch {}
}
function Cr(e) {
  return B(e) && R(e.routeId);
}
function wr(e, t, n = !1) {
  (performance.mark(`framer-history-replace`),
    t && yr(t, m.location.href),
    Ig().privateRouterReplaceState
      ? (!t || t === m.location.href
          ? m.History.prototype.replaceState.bind(m.history)
          : m.history.replaceState.bind(m.history))(e, ``, t)
      : (n ? m.history.__proto__.replaceState : m.history.replaceState).call(m.history, e, ``, t));
}
function Tr(e, t) {
  (performance.mark(`framer-history-push`),
    yr(t, m.location.href),
    tr(),
    m.history.pushState(e, ``, t));
}
function Er({ disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: i }) {
  r(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let r = B(m.history.state) ? m.history.state : {},
      a = m.location.hash ? m.location.hash.slice(1) : void 0;
    wr({ ...r, routeId: t, hash: a, pathVariables: n, localeId: i }, void 0, !0);
  }, []);
}
function Dr(e, n) {
  let r = vr(),
    i = xr(`framer-route-change`),
    o = t(void 0),
    s = u(
      async ({ state: t }) => {
        if (!B(t)) return;
        let { routeId: a, hash: s, pathVariables: c, localeId: l } = t;
        if (!R(a)) return;
        let u = i({ popstate: !0 }),
          d = Lt();
        u.promise.finally(d);
        let f = await r(e.current, a, () => {
            n(
              a,
              R(l) ? l : void 0,
              R(s) ? s : void 0,
              m.location.pathname + m.location.search + m.location.hash,
              B(c) ? c : void 0,
              !0,
              u,
              !1
            );
          }),
          p = s_ ? m.navigation?.transition : void 0;
        (await (f?.updateCallbackDone ?? Promise.resolve())
          .then(o.current?.resolve)
          .catch(o.current?.reject),
          await u.promise);
        try {
          await p?.finished;
        } catch (e) {
          console.warn(`Popstate transition failed`, e);
        }
        (o_(), yr(m.location.href));
      },
      [e, i, n, r]
    ),
    c = u((e) => {
      e.navigationType !== `traverse` ||
        !e.canIntercept ||
        e.intercept({
          async handler() {
            (await new Promise((e, t) => {
              o.current = { resolve: e, reject: t };
            }),
              (o.current = void 0));
          },
          scroll: `after-transition`,
        });
    }, []);
  a(
    () => (
      m.addEventListener(`popstate`, s),
      s_ && m.navigation.addEventListener(`navigate`, c),
      () => {
        (m.removeEventListener(`popstate`, s),
          s_ && m.navigation.removeEventListener(`navigate`, c));
      }
    ),
    [s, c]
  );
}
async function Or(e, t, n) {
  if (!e.path || !t) return !1;
  let r = `${n.slug ? `/${n.slug}` : ``}${Un(e.path, t)}`;
  return (await fetch(r, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((m.location.href = m.location.origin + r), !0)
    : !1;
}
function kr() {
  let e = vn();
  return u((t) => Ar({ ...t, collectionUtils: e }), [e]);
}
async function Ar(e) {
  let t = await qn(e);
  if (t) {
    try {
      localStorage.preferredLocale = e.nextLocale.code;
    } catch {}
    try {
      if (!R(t.path)) throw Error(`Expected result.path to be a string`);
      if (t.isMissingInLocale && (await Or(e.route, t.pathVariables, e.nextLocale))) return;
    } catch {}
    return t;
  }
}
function jr() {
  let e = t(Promise.resolve()),
    n = t(),
    r = u((t) => {
      if (t.navigationType === `traverse` || !t.canIntercept) return;
      let r = n.current;
      (r?.signal.addEventListener(`abort`, () => {
        r.abort(`user aborted`);
      }),
        t.intercept({ handler: () => e.current }));
    }, []);
  return u(
    (t, i, a) => {
      if (!s_) {
        i();
        return;
      }
      ((e.current = t),
        (n.current = a),
        m.navigation.addEventListener(`navigate`, r),
        i(),
        t.finally(() => {
          m.navigation.removeEventListener(`navigate`, r);
        }));
    },
    [r]
  );
}
function Mr(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`; ) t++;
  for (; n > t && e[n - 1] === `-`; ) n--;
  return e.slice(t, n);
}
function Nr(e) {
  return Mr(e.trim().toLowerCase().replace(c_, `-`));
}
function Pr({ children: e, value: t }) {
  return _(u_.Provider, { value: t, children: e });
}
function Fr() {
  return c(u_);
}
function Ir(e, n) {
  let r = s(() => ({ inputs: n, result: e() }))[0],
    i = t(!0),
    o = t(r),
    c =
      i.current || (n && o.current.inputs && Dt(n, o.current.inputs, !1))
        ? o.current
        : { inputs: n, result: e() };
  return (
    a(() => {
      ((i.current = !1), (o.current = c));
    }, [c]),
    c.result
  );
}
function Lr(e, t) {
  return Ir(() => e, t);
}
function Rr() {
  return f.useContext(p_);
}
function zr() {
  return m.location.search;
}
function Br() {
  return ``;
}
function Vr(e) {
  return (
    h_.add(e),
    m.addEventListener(`popstate`, e),
    () => {
      (h_.delete(e), m.removeEventListener(`popstate`, e));
    }
  );
}
function Hr() {
  for (let e of h_) e();
}
function Ur({ children: e }) {
  let t = Fr() === `preview`,
    [n, r] = s(``),
    i = w(ee(Vr, zr, Br));
  At();
  let a = t ? n : i,
    o = u(
      async (e) => {
        if (t) {
          A(() => {
            r((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        await wn({ continueAfter: `paint` });
        let n = m.history.state,
          i = new URL(m.location.href),
          a = e(i.searchParams).toString();
        i.search = a;
        let o = n?.queryParamBackAnchorSearch,
          s = m.location.search.slice(1),
          c = o === void 0 && a !== s,
          l = o !== void 0 && a === o,
          u = { ...n, queryParamBackAnchorSearch: l ? void 0 : (o ?? (c ? s : void 0)) },
          d = i.toString();
        (c || l ? await Tr(u, d) : wr(u, d), Hr());
      },
      [t]
    ),
    c = Ir(() => ({ urlSearchParams: new URLSearchParams(a), replaceSearchParams: o }), [a, o]);
  return _(g_.Provider, { value: c, children: e });
}
function Wr(e) {
  return __ in e && e[__] === 1;
}
function Gr() {
  if (!v_) return;
  ((b_ = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  v_.forEach((n) => t.addEventListener(n, y_, e));
}
function Kr() {
  return (
    a(() => {
      if (!b_ || !v_) return;
      let e = { capture: !0 },
        t = document.body;
      (v_.forEach((n) => t.removeEventListener(n, y_, e)),
        (v_ = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function qr(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function Jr(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function Yr() {
  ((B_ = new z_()), B_.render.markStart());
}
function Xr() {
  (j(() => {
    B_?.useInsertionEffects.markRouterStart();
  }, []),
    r(() => {
      B_?.useLayoutEffects.markRouterStart();
    }, []),
    a(() => {
      B_?.useEffects.markRouterStart();
    }, []));
}
function Zr() {
  (j(() => {
    (B_?.render.markEnd(), B_?.useInsertionEffects.markStart());
  }, []),
    r(() => {
      if ((B_?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        V_ = !0;
        return;
      }
      Ae.read(() => {
        (B_?.browserRendering.requestAnimationFrame.markStart(),
          B_?.unattributedHydrationOverhead.measure());
      });
    }, []),
    a(() => {
      (B_?.useEffects.markStart(),
        B_?.browserRendering.hasStarted ||
          (B_?.mutationEffects.measure(), B_?.useEffects.markAreSynchronous()));
    }, []));
}
function Qr() {
  (j(() => {
    B_?.useInsertionEffects.markEnd();
  }, []),
    r(() => {
      (B_?.useLayoutEffects.markEnd(),
        !(V_ || document.visibilityState !== `visible`) &&
          Ae.read(() => {
            (B_?.browserRendering.requestAnimationFrame.markEnd(),
              wn().then(() => {
                B_?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    a(() => {
      B_?.useEffects.markEnd();
    }, []));
}
function $r() {
  return (Zr(), null);
}
function ei() {
  return (Qr(), null);
}
function ti(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return f.isValidElement(e) ? f.cloneElement(e, n) : _(e, { ...n });
}
function ni() {
  return G_;
}
function ri(e) {
  if (K_?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      V(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: oi(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          V(t, `localizedPath must be defined`);
          let i = oi(t),
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
    K_ = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: K_.pathRoutes,
    paths: K_.paths,
    pathRoutesLocalized: K_.pathRoutesLocalized,
    pathsLocalized: K_.pathsLocalized,
  };
}
function ii(e, t, n = !0, r = ni()) {
  return ai(e, t, r, n);
}
function ai(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = ri(e),
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
      let e = si(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = si(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = si(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = si(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function oi(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function si(e, t) {
  let n = [],
    r = ci(t).replace(Rg, (e, t) => (n.push(t), `([^/]+)`)),
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
function ci(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function li() {
  if (`PerformanceServerTiming` in m) {
    let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
    if (!e || e.length === 0) return new URLSearchParams();
    let t = e.find((e) => e.name === `abtests`);
    return t ? new URLSearchParams(t.description) : new URLSearchParams();
  }
  return new URLSearchParams();
}
function ui(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n;
  if (!e[i]) return;
  let { abTestingParentId: a, ...o } = r,
    s = e[i].elements || r.elements ? { ...e[i].elements, ...r.elements } : void 0;
  e[i] = { ...o, elements: s, abTestingVariantId: n, abTestId: t };
}
function di(e, t) {
  for (let [n, r] of t) ui(e, n, r);
}
function fi(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function pi(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    { abTestingParentId: r, ...i } = e[t],
    a = e[n]?.elements || i.elements ? { ...e[n]?.elements, ...i.elements } : void 0;
  e[n] = { ...i, elements: a, abTestingVariantId: t };
}
function mi(e, t) {
  if (m === void 0) return t;
  let n = t;
  if (t) {
    pi(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (di(e, li()), fi(e), n);
}
function hi(e) {
  (a(() => {
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
    j(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function gi(e, ...t) {
  q_.has(e) || (q_.add(e), console.warn(e, ...t));
}
function _i(e, t, n) {
  gi(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function vi(e) {
  return (
    typeof e == `object` &&
    !!e &&
    X_ in e &&
    e[X_] instanceof Function &&
    Z_ in e &&
    e[Z_] instanceof Function
  );
}
function yi(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = Y_(r);
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
function bi(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function xi(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Si(e) {
  return Math.round(e * 2) / 2;
}
function Ci(e, t) {
  return { x: e, y: t };
}
function wi(e, t, n, r = !1) {
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
function Ti(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Ei(e) {
  let t = Di(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function Di(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function Oi(e, t, n) {
  return (
    (ev.rgb_r = e / 255),
    (ev.rgb_g = t / 255),
    (ev.rgb_b = n / 255),
    ev.rgbToHsluv(),
    { h: ev.hsluv_h, s: ev.hsluv_s, l: ev.hsluv_l }
  );
}
function ki(e, t, n, r = 1) {
  return (
    (ev.hsluv_h = e),
    (ev.hsluv_s = t),
    (ev.hsluv_l = n),
    ev.hsluvToRgb(),
    { r: ev.rgb_r * 255, g: ev.rgb_g * 255, b: ev.rgb_b * 255, a: r }
  );
}
function Ai(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function ji(e, t, n) {
  return {
    r: Ti(e) ? Ri(e, 255) * 255 : 0,
    g: Ti(t) ? Ri(t, 255) * 255 : 0,
    b: Ti(n) ? Ri(n, 255) * 255 : 0,
  };
}
function Mi(e, t, n, r) {
  let i = [
    Vi(Math.round(e).toString(16)),
    Vi(Math.round(t).toString(16)),
    Vi(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function Ni(e, t, n) {
  let r,
    i,
    a = Ri(e, 255),
    o = Ri(t, 255),
    s = Ri(n, 255),
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
function Pi(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function Fi(e, t, n) {
  let r, i, a;
  if (((e = Ri(e, 360)), (t = Ri(t * 100, 100)), (n = Ri(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = Pi(s, o, e + 1 / 3)), (i = Pi(s, o, e)), (a = Pi(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function Ii(e, t, n) {
  ((e = Ri(e, 255)), (t = Ri(t, 255)), (n = Ri(n, 255)));
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
function Li(e, t, n) {
  ((e = Ri(e, 360) * 6), (t = Ri(t * 100, 100)), (n = Ri(n * 100, 100)));
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
function Ri(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    zi(e) && (e = `100%`);
    let t = Bi(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function zi(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function Bi(e) {
  return typeof e == `string` && e.includes(`%`);
}
function Vi(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function Hi(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = $_[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = tv.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = tv.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = tv.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: Ei(r[2] ?? ``), l: Ei(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = tv.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: Ei(r[2] ?? ``),
              l: Ei(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = tv.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: Ei(r[2] ?? ``), v: Ei(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = tv.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: Ei(r[2] ?? ``),
                  v: Ei(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = tv.hex8.exec(t))
                ? {
                    r: Ui(r[1] ?? ``),
                    g: Ui(r[2] ?? ``),
                    b: Ui(r[3] ?? ``),
                    a: Wi(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = tv.hex6.exec(t))
                  ? {
                      r: Ui(r[1] ?? ``),
                      g: Ui(r[2] ?? ``),
                      b: Ui(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = tv.hex4.exec(t))
                    ? {
                        r: Ui(`${r[1]}${r[1]}`),
                        g: Ui(`${r[2]}${r[2]}`),
                        b: Ui(`${r[3]}${r[3]}`),
                        a: Wi(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = tv.hex3.exec(t))
                      ? {
                          r: Ui(`${r[1]}${r[1]}`),
                          g: Ui(`${r[2]}${r[2]}`),
                          b: Ui(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function Ui(e) {
  return parseInt(e, 16);
}
function Wi(e) {
  return Ui(e) / 255;
}
function Gi(e) {
  let t = nv.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function Ki(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function qi({ r: e, g: t, b: n, a: r }) {
  return { r: Ki(e), g: Ki(t), b: Ki(n), a: r };
}
function Ji(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function Yi({ r: e, g: t, b: n, a: r }) {
  return { r: Ji(e), g: Ji(t), b: Ji(n), a: r };
}
function Xi({ r: e, g: t, b: n, a: r }) {
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
function Zi(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function Qi({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = Zi(e),
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
function $i(e) {
  return ov(av(e));
}
function ea(e) {
  return iv(rv(e));
}
function ta(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = ia({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = na(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? ia(e)
              : aa(e)),
    i
  );
}
function na(e) {
  let t = Hi(e);
  if (t) return t.format === `hsl` ? aa(t) : t.format === `hsv` ? ra(t) : ia(t);
}
function ra(e) {
  let t = Li(e.h, e.s, e.v);
  return { ...Ni(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : oa(e.a) };
}
function ia(e) {
  let t = ji(e.r, e.g, e.b);
  return { ...Ni(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : oa(e.a) };
}
function aa(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = Ti(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Ti(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = Di(e.s)),
    (r = Ti(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = Di(e.l)),
    (i = Fi(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function oa(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function sa() {
  return q.location.origin === `https://screenshot.framer.invalid`;
}
function ca({ children: e }) {
  if (c(bv).top) return _(O, { children: e });
  let n = t({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = t({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    i = t(new Set()).current,
    a = t({
      getLayoutId: u(({ id: e, name: t, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = t ? `byName` : `byId`,
          s = n.current[o][e];
        if (s) return s;
        let c = t || e;
        if (!a && !i.has(c) && (!n.current.byLayoutId[c] || n.current.byLayoutId[c] === c))
          return (
            n.current.count[o][c] === void 0 &&
              ((n.current.count[o][c] = 0), (n.current.byLayoutId[c] = c), (r.current[o][e] = c)),
            i.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            V(!!c, `duplicatedId must be defined`);
            let u = n.current[o][c],
              d = n.current.byLastId[c];
            if (d && !l) {
              let e = n.current.byLayoutId[d],
                r = !e || e === t;
              d && !i.has(d) && (!t || r) && (l = [d, c]);
            }
            let f = u ? n.current.byLayoutId[u] : void 0,
              p = !f || f === t;
            if (u && !i.has(u) && (!t || p))
              return ((r.current[o][e] = u), (r.current.byLastId[c] = u), i.add(u), u);
          }
        let u = n.current.byLastId[e];
        if (u && !i.has(u)) return (i.add(u), (r.current.byId[e] = u), u);
        if (l) {
          let [t, n] = l;
          return ((r.current[o][e] = t), (r.current.byLastId[n] = t), i.add(t), t);
        }
        let d = n.current.byPossibleId[e];
        if (d && !i.has(d)) return (i.add(d), (r.current.byId[e] = d), d);
        let f = a?.[0],
          p = t || f || e,
          { layoutId: m, value: h } = la(p, (n.current.count[o][p] ?? -1) + 1, i);
        if (((n.current.count[o][p] = h), (r.current[o][e] = m), a?.length && !t)) {
          let e = a[a.length - 1];
          if ((e && (r.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 && (r.current.byPossibleId[t] || (r.current.byPossibleId[t] = m));
            }
        }
        return ((r.current.byLayoutId[m] = c), i.add(m), m);
      }, []),
      persistLayoutIdCache: u(() => {
        ((n.current = {
          byId: { ...n.current.byId, ...r.current.byId },
          byLastId: { ...n.current.byLastId, ...r.current.byLastId },
          byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
          byName: { ...n.current.byName, ...r.current.byName },
          byLastName: { ...n.current.byLastName, ...r.current.byLastName },
          byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
          count: { ...n.current.count, byName: {} },
        }),
          (r.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          i.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return _(bv.Provider, { value: a, children: e });
}
function la(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function ua({ enabled: e = !0, ...t }) {
  let n = c(bv),
    r = l(() => ({ ...n, enabled: e }), [e]);
  return _(bv.Provider, { ...t, value: r });
}
function da(e) {
  let n = t(null);
  return (n.current === null && (n.current = e()), n.current);
}
function fa(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${pa(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return T(`div`, {
    style: Sv,
    children: [
      _(`div`, { className: `text`, style: wv, children: r }),
      i && _(`div`, { className: `text`, style: Tv, children: i }),
    ],
  });
}
function pa(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function U(e) {
  return Number.isFinite(e);
}
function ma(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function ha(e) {
  return typeof e != `string` && typeof e != `number`;
}
function ga(e) {
  return e != null && typeof e != `boolean` && !ma(e);
}
function _a(e) {
  return (Math.PI / 180) * e;
}
function va(e) {
  return et(e) ? !1 : e === 2 || e === 5;
}
function ya(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function ba(e, t, n, r) {
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
      if (!r) return xa(e);
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
function xa(e) {
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
function Sa(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(ba(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(ba(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function Ca(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(ba(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(ba(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function wa(e, t, n, r, i) {
  let a = Ca(U(e) ? e : Av, n, r, i),
    o = Sa(U(t) ? t : jv, n, r, i);
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
function Ta(e, t) {
  return !U(e) || !U(t) ? null : e + t;
}
function Ea(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function Da(e) {
  return !e._constraints || Ea(e) ? !1 : e._constraints.enabled;
}
function Oa(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    U(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    U(n) && U(r) ? { width: n, height: r } : null
  );
}
function ka(e) {
  let t = Oa(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return U(n) && U(r) ? { x: n, y: r, ...t } : null;
}
function Aa(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Da(e) || r) return ka(e);
  let i = ja(e),
    a = Ma(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return kv.toRect(i, o, null, n, null);
}
function ja(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = Ov.quickfix({
      left: U(t),
      right: U(n),
      top: U(r),
      bottom: U(i),
      widthType: ya(c),
      heightType: ya(l),
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
function Ma(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Na() {
  return f.useContext(Mv).parentSize;
}
function Pa(e) {
  return typeof e == `object`;
}
function Fa(e) {
  return Pa(e) ? e.width : e;
}
function Ia(e) {
  return Pa(e) ? e.height : e;
}
function La(e, t) {
  return _(Nv, { parentSize: t, children: e });
}
function Ra(e) {
  return Aa(e, Na(), !0);
}
function za({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function Ba(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function Va(e, t, n = Iv) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!Lv) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) Lv = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = Lv;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function Ha() {
  return sa() ? Y.preview : Y.current();
}
function Ua(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? qv.variable(e) : e === `` ? `""` : e;
}
function Wa(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return Ga(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return Ka(r);
    case `lower-roman`:
    case `upper-roman`:
      return Ja(r);
    default:
      return Ga(r);
  }
}
function Ga(e) {
  return String(e).length;
}
function Ka(e) {
  let t = 1;
  for (; qa(t) < e; ) t++;
  return t;
}
function qa(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function Ja(e) {
  let t = 0;
  for (let n of Xv) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function Ya(e, t) {
  return qv.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function Xa(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function Za() {
  return Y.current() === Y.preview ? hy.value : my.value;
}
function Qa(e) {
  return Vv(e, Za, `framer-lib-combinedCSSRules`);
}
function $a(e) {
  return B(e) || Xe(e);
}
function eo(e) {
  return !!e && gy in e && e[gy] === !0;
}
function to(e) {
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
        return Ze(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return et(e.defaultValue)
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
        return Qe(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return Qe(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = B(e.defaultValue) ? e.defaultValue : {};
        return (B(e.controls) && no(t, e.controls), t);
      }
      case `array`:
        return Qe(e.defaultValue) ? e.defaultValue : void 0;
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
function no(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!et(i) || eo(r)) continue;
    let a = to(r);
    et(a) || (e[n] = a);
  }
}
function ro(e) {
  if (B(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function io(e, t) {
  $a(e) && no(ro(e), t);
}
function ao(e, t) {
  (Object.assign(e, { propertyControls: t }), io(e, t));
}
function oo(e) {
  return e.propertyControls;
}
function so() {
  let e = Y.current();
  return e === Y.canvas || e === Y.export;
}
function co() {
  let [e] = s(() => so());
  return e;
}
function lo(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function uo(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of Dy) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function fo(e, t) {
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
function po(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < Oy) continue;
    let n = fo(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${fo(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function mo(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of Ey) {
    let n = fo(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function ho(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = mo(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: po(n, t, uo(t.pixelWidth, t.pixelHeight)) };
}
function go() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: st(wy.imagePlaceholderSvg),
  };
}
function _o(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function vo(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function yo(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...Ty,
    objectPosition: vo(e.positionX, e.positionY),
    objectFit: _o(e.fit),
  };
}
function bo(e) {
  let t = f.useRef(e ? `auto` : `async`),
    n = u((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = u(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    i = u(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function xo({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = wy.useImageSource(e, t, n),
    s = yo(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = bo(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : ho(e.nodeFixedSize, e, o);
  return _(`img`, {
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
function So({ image: e, containerSize: t, nodeId: n }) {
  let r = f.useRef(null),
    i = wy.useImageElement(e, t, n),
    a = yo(e);
  return (
    f.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    _(`div`, { ref: r, style: { display: `contents`, ...Ty } })
  );
}
function Co({ nodeId: e, image: t, containerSize: n }) {
  let r = f.useRef(null),
    i = wy.useImageSource(t, n, e);
  return (
    f.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = yo(t);
      wy.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    _(`div`, { ref: r, style: { display: `contents`, ...Ty } })
  );
}
function wo({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (R(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = z(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Si(e * (t.pixelWidth / 2)),
        s = wy.useImageSource(t, n);
      ((r = {
        ...ky,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: vo(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        Y.current() === Y.canvas
          ? wy.canRenderOptimizedCanvasImage(wy.useImageSource(t))
            ? _(Co, { image: t, ...n })
            : _(So, { image: t, ...n })
          : _(xo, { image: t, avoidAsyncDecoding: Y.current() === Y.export, ...n });
  let o = a ? ky : (r ?? { ...ky, ...go() });
  return i
    ? _(P.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : _(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function To(e, t, n = !0) {
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
function Eo(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...Ty,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), _(P.div, { style: n }))
    : (To(e, n, !1), _(P.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function Do(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function Oo(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !jy.isImageObject(t)) return;
  let r = null;
  if (((r = R(n) ? { alt: ``, src: n } : Y_.get(t, null)), jy.isImageObject(r))) return Do(r, e);
}
function ko(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Ao(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? P[e] : P.div;
}
function jo(e, t) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0));
}
function Mo(e) {
  let t = {};
  return (!e || !My || Y.current() !== Y.canvas || jo(t, e), t);
}
function No(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function Po(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = f.Children.map(t, (e) =>
        f.isValidElement(e) ? f.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function Fo(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function Io(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: o = !1, drag: s } = e,
    { getLayoutId: u, enabled: d } = c(bv);
  return l(() => {
    if (!d) return e.layoutId;
    let c = t || e.layoutId;
    if (!c && (s || !i || o)) return;
    let l = c || u({ id: i, name: r, duplicatedFrom: a });
    if (l) return n ? `${l}-${n}` : l;
  }, [d]);
}
function Lo() {
  let [e, t] = f.useState(0);
  return f.useCallback(() => t((e) => e + 1), []);
}
function Ro(e) {
  let t = Lo();
  a(() => {
    let n = e?.current;
    if (n)
      return (
        Iy?.observeElementWithCallback(e.current, t),
        () => {
          Iy?.unobserve(n);
        }
      );
  }, [e, t]);
}
function zo(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(Ly)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Bo)
    .map(Vo);
}
function Bo(e) {
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
function Vo(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(Bo);
  return t ? Vo(t) : e;
}
function Ho(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    l = c(Py),
    u = Y.current() === Y.canvas;
  Ny(() => {
    !u ||
      l ||
      s ||
      (t.current && i && a && o && wy.queueMeasureRequest(No(i), t.current, n(t.current)));
  });
}
function Uo(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && wy.queueMeasureRequest(No(t.id), t, zo(t));
}
function Wo(e) {
  e.willChange = `transform`;
  let t = Y.current() === Y.canvas;
  By && t && (e.translateZ = Ry);
}
function Go(e) {
  ((e.willChange = `transform`), Ko(e, !0));
}
function Ko(e, t) {
  let n = Y.current() === Y.canvas;
  if (!By || !n) return;
  let r = (R(e.transform) && e.transform) || ``;
  t ? r.includes(zy) || (e.transform = r + zy) : (e.transform = r.replace(zy, ``));
}
function qo(e, t, n, r = !0) {
  if (!e) return;
  let i = _y(e.style),
    a = n || i[t],
    o = () => {
      Jo(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function Jo(e) {
  return R(e) || z(e) || tt(e);
}
function Yo(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function Xo(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  Yo(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function Zo(e, t) {
  let n = [e, t];
  return Wy.test(e) ? e : Xo(1e3, Gy, n, () => Uy.multiplyAlpha(e, t));
}
function Qo(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: Zo(e.value, t) }))
  );
}
function $o(e, t) {
  let n = 0;
  return (
    Qo(e, t).forEach((e) => {
      n ^= Hy(e.value) ^ e.position;
    }),
    n
  );
}
function es(e) {
  return e && Ky.every((t) => t in e);
}
function ts(e) {
  return e && qy.every((t) => t in e);
}
function ns({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || lv(t)
      ? (n.backgroundColor = t)
      : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e))
    : e &&
      ((e = Y_.get(e, null)),
      typeof e == `string` || lv(e)
        ? (n.background = e)
        : Yy.isLinearGradient(e)
          ? (n.background = Yy.toCSS(e))
          : Zy.isRadialGradient(e)
            ? (n.background = Zy.toCSS(e))
            : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e)));
}
function W(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function rs(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function is(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function as(e) {
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
    we(n)
      ? (t.cornerShape = re(() => `superellipse(${n.get()})`))
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
    ns(e, t),
    t
  );
}
function os(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof _y(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function ss(e) {
  if (e.drag) return `grab`;
  for (let t in e) if ($y.has(t)) return `pointer`;
}
function cs(e) {
  return ls(e) ? !0 : e.style ? !!ls(e.style) : !1;
}
function ls(e) {
  return eb in e && (e[eb] === `scroll` || e[eb] === `auto`);
}
function us(e) {
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
    m = ve(e.minWidth),
    h = ve(e.minHeight),
    g = ve(e.maxWidth),
    _ = ve(e.maxHeight);
  return {
    top: ve(n),
    left: ve(t),
    bottom: ve(r),
    right: ve(i),
    width: ve(a),
    height: ve(o),
    size: ve(l),
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
function ds(e) {
  let t = c(Py),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = us(e),
    s = Ra(o),
    l = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: Y.current() === Y.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let u = !os(e) && !e.__fromCanvasComponent && !cs(e),
    d = !e.style || !(`pointerEvents` in e.style);
  u && d && (l.pointerEvents = `none`);
  let p = f.Children.count(e.children) > 0 &&
      f.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    m = as(e);
  (a === void 0 && !i && (rs(m) || (l.width = tb.width), is(m) || (l.height = tb.height)),
    o.minWidth !== void 0 && (l.minWidth = o.minWidth),
    o.minHeight !== void 0 && (l.minHeight = o.minHeight));
  let h = {};
  (Da(o) &&
    s &&
    !za(e) &&
    (h = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(l, p, r, m, h, n),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    Vy.applyWillChange(e, l, !0));
  let g = l;
  l.transform || (g = { x: 0, y: 0, ...l });
  let _ = so();
  return (
    e.positionSticky
      ? (!_ || wy.isOnPageCanvas || t) &&
        ((g.position = `sticky`),
        (g.willChange = `transform`),
        (g.top = e.positionStickyTop),
        (g.right = e.positionStickyRight),
        (g.bottom = e.positionStickyBottom),
        (g.left = e.positionStickyLeft))
      : _ &&
        (e.positionFixed
          ? (g.position = wy.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (g.position = `absolute`)),
    `rotate` in g && g.rotate === void 0 && delete g.rotate,
    [g, s]
  );
}
function fs(e) {
  let t = {};
  for (let n in e)
    (qe(n) || yy(n)) && !nb.has(n)
      ? (t[n] = _y(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof _y(e)[n] != `boolean` && !e.transition && (t.transition = _y(e)[n]));
  return t;
}
function ps(e) {
  return `data-framer-name` in e;
}
function ms(e, t, n, r) {
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
function hs(e) {
  return _(P.div, { layoutId: ab, style: cb, children: e.children });
}
function gs(e, t) {
  Xe(e) ? e(t) : _s(e) && (e.current = t);
}
function _s(e) {
  return B(e) && `current` in e;
}
function vs() {
  let e = da(() => new Set()),
    t = da(() => new Map());
  return da(() => (n, r) => ({
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
function ys(e) {
  let n = t(null),
    r = vs();
  return da(() => (_s(e) ? r(e) : Xe(e) ? r(n, e) : r(n)));
}
function bs(e, n, r) {
  let i = t(),
    a = t();
  (Ir(
    () => {
      a.current !== void 0 && (a.current = !0);
    },
    r ?? [{}]
  ),
    e &&
      a.current !== !1 &&
      ((a.current = !1), e.unobserve(i.current), e.observe(n), (i.current = n)));
}
function xs(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new lb({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Ss(e, t, n) {
  let r = da(() => `${n.rootMargin}`),
    i = c(ub),
    { enabled: a, root: o, rootMargin: s, threshold: l } = n;
  bs(
    e,
    (e) => {
      if (a && e !== null) return xs(i, r, e, o, t, s, l);
    },
    [a, t, o, s, l]
  );
}
function Cs(e, t, n) {
  let r = f.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  db(
    e,
    f.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = Ts(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
          return;
        }
        if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
          return;
        }
      },
      [a, o?.y, t]
    ),
    { threshold: fb, rootMargin: s, enabled: i ?? !0 }
  );
}
function ws(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, q.innerHeight);
}
function Ts({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && ws(t, e) >= r;
}
function Es() {
  return new Map();
}
function Ds() {
  return da(Es);
}
function Os(e, t = []) {
  let { register: n, deregister: r } = c(_b);
  a(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function ks(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function As(e, t, n) {
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
function js(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function Ms(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return Cb.PushLeft;
    case `left`:
      return Cb.PushRight;
    case `bottom`:
      return Cb.PushUp;
    case `top`:
      return Cb.PushDown;
  }
}
function Ns(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return Cb.OverlayLeft;
    case `left`:
      return Cb.OverlayRight;
    case `bottom`:
      return Cb.OverlayUp;
    case `top`:
      return Cb.OverlayDown;
  }
}
function Ps(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return Cb.FlipLeft;
    case `left`:
      return Cb.FlipRight;
    case `bottom`:
      return Cb.FlipUp;
    case `top`:
      return Cb.FlipDown;
  }
}
function Fs(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return Ls(e, t.transition, t.component);
    case `removeOverlay`:
      return Rs(e);
    case `add`:
      return zs(e, t.key, t.transition, t.component);
    case `remove`:
      return Hs(e);
    case `update`:
      return Is(e, t.key, t.component);
    case `back`:
      return Bs(e);
    case `forward`:
      return Vs(e);
    default:
      return;
  }
}
function Is(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function Ls(e, t, n) {
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
function Rs(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function zs(e, t, n, r) {
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
    c = i?.key && n.withMagicMotion ? qs(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = Gs(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = Us(e, t, c),
    p = Ks(l, u, e.history, e.containerIndex, e.transitionForContainer);
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
function Bs(e) {
  let t = { ...e.containers },
    n = Hs(e);
  if (n) return ((n.containers = t), n);
}
function Vs(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = zs(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function Hs(e) {
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
    } = Ws(e, r, n),
    u = Ks(i, a, e.history, e.containerIndex, e.transitionForContainer);
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
function Us(e, t, n) {
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
function Ws(e, t, n) {
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
function Gs(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function Ks(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = Js(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function qs(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1 ||
        !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function Js(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return Ys(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return Ys(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return Ys(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return Ys(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function Ys(e, t, n) {
  let r = {},
    i = {};
  return (
    Tb.forEach((e) => {
      ((r[e] = bb[e]), (i[e] = { ...n, from: bb[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${_y(bb)[a]}%` : _y(bb)[a];
        ((_y(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function Xs(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function Zs({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function Qs({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
      ? t.transition.animation
      : kb;
}
function $s({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function ec(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function tc(e, t) {
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
function nc(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function rc(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function ic(e, t) {
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
function ac(e, t) {
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
  return kb;
}
function oc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function sc(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function cc(e) {
  return f.Children.map(e.component, (t) => {
    if (!ga(t) || !ha(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? B(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      f.cloneElement(t, n)
    );
  });
}
function lc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function uc(e, t) {
  let n = ie(),
    r = ge();
  return _(Ob, {
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
function dc(e) {
  return Ib in e;
}
function fc(e, t) {
  if (!dc(e)) return;
  let n = Y_.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function pc(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function mc(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function hc(e, t) {
  let n = [];
  (U(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    U(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    U(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    U(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    U(e.invert) && n.push(`invert(${e.invert / 100})`),
    U(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    U(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    U(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...pc(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function gc(e, t) {
  U(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function _c(e, t) {
  (gc(e, t), hc(e, t));
}
function vc(e, t) {
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
function yc(...e) {
  return e.filter(Boolean).join(` `);
}
function bc(e, t) {
  let n = {},
    r = {};
  for (let i in e) {
    let a = xc(i);
    if (a && t.has(a)) {
      n[a] = e[i];
      continue;
    }
    r[i] = e[i];
  }
  return [n, r];
}
function xc(e) {
  if (e.startsWith(Vb)) return e.substr(Hb);
}
function Sc(e, t, n) {
  let r = i.map(e, (e) => (y(e) ? C(e, t) : e));
  return n ? r : _(O, { children: r });
}
function Cc(e) {
  let t = da(() => wc(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function wc(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = Tc(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = Tc(t)));
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
        if (y(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = Xe(o) ? o(e.props) : o;
          return C(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let o = function (e, t) {
    return _(O, { children: a(e, t) });
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
function Tc(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (gs(n, e), gs(t, e));
  };
}
function Ec(e, t, n, r, i, a, o, s) {
  let c = f.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !f.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !Ac(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = kc([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let p = kc([i, ...d], a);
  p.length && u.unshift({ variants: p });
  let m = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = _(
        Wb.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = Oc(e, a, r);
    (f.length
      ? (V(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = _(
          `div`,
          { className: `${Gb} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : V(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      m.push(d));
  }
  return (
    V(!s || m.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? m : [...m, _(`div`, { className: Kb }, `property-overrides-separator`)]
  );
}
function Dc(e) {
  return e.split(`-`)[2];
}
function Oc(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${Dc(a)}`);
  }
  return r;
}
function kc(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function Ac(e, t) {
  for (let n of Object.keys(t)) if (!Dt(e[n], t[n], !0)) return !0;
  return !1;
}
function jc(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function Mc(e) {
  return f.forwardRef(({ optimized: t, ...n }, r) => {
    let i = f.useContext(Ub),
      a = f.useContext(Wb)?.variants,
      o = n[tx];
    o && !Ln() && $b.setAll(o, a, t ? n : null, i);
    let s = rx(n);
    return _(e, { ref: r, ...n, ...s });
  });
}
function Nc(e) {
  return R(e) || Array.isArray(e);
}
function Pc(e) {
  return e in ox;
}
function Fc(e, t) {
  let n = da(() => ({ values: ax(t ? e : void 0) }));
  return (
    f.useEffect(() => {
      if (!t)
        for (let e of ix) {
          let t = ox[e];
          et(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function Ic(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: n,
    loopTransition: r,
    loopRepeatType: i,
    loop: o,
    loopPauseOffscreen: c,
  },
  d
) {
  let f = Ye(),
    p = da(ax),
    m = t(!1),
    h = ux(),
    g = t(null),
    _ = u(async () => {
      if (!o) return;
      let e = r || void 0,
        t = m.current && i === `mirror`,
        n = t ? ox : o,
        a = t ? o : ox;
      return (
        (m.current = !m.current),
        (g.current = Promise.all(
          ix.map((t) => {
            if (!(f && t !== `opacity`))
              return (
                p[t].jump(a[t] ?? ox[t]),
                new Promise((r) => {
                  let i = { ...e, onComplete: () => r() },
                    o = n[t] ?? a[t];
                  typeof o == `number` && Oe(p[t], o, i);
                })
              );
          })
        )),
        g.current
      );
    }, [o, i, r, f]),
    [v, y] = s(!1),
    b = t(!1),
    x = u(async () => {
      !e || !b.current || (await _(), await h(n ?? 0), x());
    }, [_, h, e, n]),
    S = u(() => {
      b.current || ((b.current = !0), A(() => y(!0)), x());
    }, [x]),
    C = u((e = !0) => {
      (ix.forEach((e) => {
        p[e].stop();
      }),
        ix.forEach((e) => {
          p[e].set(ox[e]);
        }),
        (m.current = !1),
        e && ((b.current = !1), A(() => y(!1))));
    }, []),
    w = e && o,
    T = u(() => {
      document.hidden ? C(!1) : b.current && ((b.current = !1), S());
    }, [S, C]);
  (a(() => {
    if (w)
      return (
        document.addEventListener(`visibilitychange`, T),
        () => {
          document.removeEventListener(`visibilitychange`, T);
        }
      );
  }, [w, T]),
    a(() => {
      (w && c) || (w ? S() : C());
    }, [S, C, c, w]),
    a(() => () => C(), [C]));
  let E = t(!1),
    D = u(async () => {
      g.current && (await g.current, !E.current && C());
    }, [C]);
  db(
    d,
    u(
      (e) => {
        e.isIntersecting ? ((E.current = !0), S()) : ((E.current = !1), D());
      },
      [S, D]
    ),
    { enabled: w && c }
  );
  let O = v || !c;
  return l(() => ({ values: p, style: w && O ? sx : cx }), [w, O]);
}
function Lc(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function Rc(e, t, n) {
  let { speed: r = 100, offset: i = 0, adjustPosition: a = !1, parallaxTransformEnabled: o } = e,
    s = f.useRef(null),
    l = Ye(),
    u = f.useCallback(
      (e) => (s.current === null || r === 100 ? 0 : Lc(e, s.current, r, i, a)),
      [r, i, a]
    ),
    { scrollY: d } = ye(),
    p = F(d, u),
    m = de(a && s.current === null ? `hidden` : n),
    h = de(0),
    g = c(ub);
  return (
    bs(
      t,
      (e) => {
        if (e === null || !o) return;
        let t = xs(g, `undefined`, e, null, (e) => {
          ((s.current = e.boundingClientRect.top),
            Ae.update(() => {
              (p.set(u(d.get())), a && m.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [a, o]
    ),
    Pt(() => {
      o && p.set(0);
    }),
    { values: { y: l || !o ? h : p }, style: o ? { ...sx, visibility: m } : cx }
  );
}
function zc(e) {
  return typeof e == `object` && !!e;
}
function Bc(e) {
  if (zc(e)) return e?.transition;
}
function Vc(e, t, n, r, i, a) {
  let o = Bc(e);
  return Promise.all(
    ix.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = zc(e) ? (e?.[s] ?? ox[s]) : ox[s];
          if ((we(u) && (u = u.get()), !z(u))) return c();
          let d = be.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (R(i) && !l?.hasAnimated && q.MotionHandoffAnimation) {
            let e = q.MotionHandoffAnimation(i, s, Ae);
            e && (f = e);
          }
          a ? l.set(u) : Oe(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function Hc(
  { initial: e, animate: n, exit: r, presenceInitial: i, presenceAnimate: a, presenceExit: o },
  s,
  c,
  u,
  d
) {
  let f = i ?? e,
    p = a ?? n,
    m = o ?? r,
    [h, g] = pe(),
    _ = t({ lastPresence: !1, lastAnimate: p, hasMounted: !1, running: !1 }),
    v = da(() => {
      let e = f ?? u;
      if (!B(e)) return { values: ax() };
      let t = {};
      for (let n in e) {
        let r = B(e) ? e[n] : void 0;
        z(r) && (t[n] = r);
      }
      return { values: ax(t) };
    });
  bs(
    s,
    (e) => {
      let { hasMounted: t } = _.current;
      if (t && p) return;
      let n = be.get(e);
      if (n) {
        Object.assign(_.current, { hasMounted: !0 });
        for (let e in v.values) {
          if (!Pc(e)) continue;
          let t = u?.[e];
          n.setBaseTarget(e, z(t) ? t : ox[e]);
        }
      }
    },
    [p]
  );
  let y = Ye();
  bs(s, (e) => {
    if (!c) {
      g?.();
      return;
    }
    if (e === null) return;
    if (h !== _.current.lastPresence) {
      (Object.assign(_.current, { lastPresence: h }),
        h
          ? f &&
            p &&
            (Object.assign(_.current, { running: !0 }),
            Vc(p, v, y, s, d).then(() => Object.assign(_.current, { running: !1 })))
          : m
            ? (Object.assign(_.current, { running: !0 }),
              Vc(m, v, y, s, d)
                .then(() => Object.assign(_.current, { running: !1 }))
                .then(() => g()))
            : g());
      return;
    }
    let { lastAnimate: t, running: n } = _.current;
    Dt(p, t) ||
      !p ||
      (Object.assign(_.current, { lastAnimate: p }),
      Vc(p, v, y, s, d, !n).then(() => Object.assign(_.current, { running: !1 })));
  });
  let b = c && p;
  return l(() => ({ values: v.values, style: b ? sx : cx }), [b]);
}
function Uc(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; ) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function Wc(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o || !o.current) continue;
    let c = Uc(o.current, document.documentElement) - px - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function Gc(e, t = 0) {
  return e < t ? `up` : `down`;
}
function Kc(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Nt();
  f.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return se((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = Gc(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < mx) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function qc(e, t, n) {
  let r = Wc(e, t),
    i = [...gx],
    a = r[0];
  if (!z(a)) return _x;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!z(e)) return _x;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function Jc(e) {
  return {
    x: e?.x ?? ox.x,
    y: e?.y ?? ox.y,
    scale: e?.scale ?? ox.scale,
    opacity: e?.opacity ?? ox.opacity,
    transformPerspective: e?.transformPerspective ?? ox.transformPerspective,
    rotate: e?.rotate ?? ox.rotate,
    rotateX: e?.rotateX ?? ox.rotateX,
    rotateY: e?.rotateY ?? ox.rotateY,
    skewX: e?.skewX ?? ox.skewX,
    skewY: e?.skewY ?? ox.skewY,
    transition: e?.transition ?? void 0,
  };
}
function Yc({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return f.useMemo(
    () => ({
      initial: r ?? Jc({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? Jc({ opacity: t }),
      exit: i ?? Jc(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function Xc(e, t) {
  let n = Ye(),
    r = Yc(e),
    i = e.styleAppearEffectEnabled,
    a = Fc(i ? r.initial : r.animate, i),
    o = f.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = Nt(),
    c = f.useRef(),
    u = f.useCallback(async ({ transition: i, ...o }, s) => {
      let l = i ?? r.animate.transition ?? e.transition;
      await c.current;
      let u = be.get(t.current);
      c.current = Promise.all(
        ix.map((e) => {
          s && a.values[e].set(r.initial[e] ?? ox[e]);
          let t = o[e] ?? ox[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (z(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...l, onComplete: () => r() };
                typeof t == `number` && Oe(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    d = e.animateOnce && o.current.lastAppearState === !0;
  Cs(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      if (t) {
        o.current.scheduledAppearState = e;
        return;
      }
      ((o.current.scheduledAppearState = void 0),
        (o.current.lastAppearState = e),
        n !== e && u(e ? r.animate : r.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !d,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let p = e.targets && i && !e.scrollDirection;
  return (
    f.useEffect(() => {
      if (!p) return;
      let t = { initial: !0 },
        n = `initial`;
      return se((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = qc(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let l = Ne(a.current, s, c);
        if ((e.animateOnce && t[l]) || ((t[l] = !0), n === l)) return;
        n = l;
        let d = _y(r)[l];
        d && u(d);
      });
    }, [s, p]),
    Kc(e.scrollDirection, (e) => void u(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    Pt(() => {
      if (i && !(!e.targets && !e.scrollDirection))
        for (let e of ix) a.values[e].set(r.initial?.[e] ?? ox[e]);
    }),
    l(() => ({ values: a.values, style: i ? sx : cx }), [i])
  );
}
function Zc(e, t) {
  let n = f.useRef({});
  f.useEffect(() => {
    if (t !== void 0)
      for (let r of zh(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = ze({
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
        a.attach((e, t) => ((s = e), (o = t), Ae.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function Qc(e, t) {
  let n = bx();
  return {
    inputRange: Wc(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of ix) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function $c(e) {
  let t = bx();
  for (let { target: n } of e) for (let e of ix) t[e]?.push(n[e]);
  return t;
}
function el(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: i,
    transformViewportThreshold: a = 0,
  },
  o
) {
  let s = Ye(),
    c = Fc(yx(n, s), t),
    l = !t || !n,
    u = e === `onScrollTarget`,
    d = Nt();
  return (
    r(() => {
      if (!(l || !u))
        return se((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: i } = Qc(n, a * t.containerLength);
          if (r.length !== 0)
            for (let e of ix)
              (s && e !== `opacity`) ||
                (r.length === i[e].length &&
                  i[e][0] !== void 0 &&
                  c.values[e].set(Ne(t.current, r, i[e])));
        });
    }, [s, u, a, n, l]),
    bs(
      o,
      (t) => {
        if (l || u || t === null) return;
        let r = $c(n);
        return se(
          (e, { y: t }) => {
            for (let e of ix)
              (s && e !== `opacity`) ||
                (xx.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  c.values[e].set(Ne(t.progress, xx, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [d, s, e, u, n, l]
    ),
    Zc(c.values, i),
    Pt(() => {
      if (l) return;
      let e = yx(n, s);
      for (let t of ix) c.values[t].set(e?.[t] ?? ox[t]);
    }),
    f.useMemo(() => ({ values: c.values, style: t ? sx : cx }), [t])
  );
}
function tl(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function nl(e) {
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
    let r = xc(n);
    if (r) {
      for (let i of Cx)
        if (Sx[i]?.has(r)) {
          t[i][r] = _y(e)[n];
          break;
        }
    } else t.forwardedProps[n] = _y(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = tl(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = tl(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function rl(e) {
  return B(e) && Ex in e;
}
function il(e, t) {
  if (!e || !B(e)) return t;
  for (let n in e) {
    let r = e[n];
    !we(r) || !Pc(n) || (z(r.get()) && t[n].push(r));
  }
}
function al(e) {
  return R(e) || Array.isArray(e);
}
function ol() {
  return f.useContext(Ox);
}
function sl(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function cl() {
  if (m === void 0 || jx)
    return _(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw Nx;
}
function ll({ children: e }) {
  return c(Fx) ? _(O, { children: e }) : _(E, { fallback: Px, children: e });
}
function ul() {
  return _(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function dl(e, t) {
  if (!Eh || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  cn(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function fl(...e) {
  console.error(...e);
}
function pl() {
  return Y.current() !== Y.canvas;
}
function ml({ getErrorMessage: e, fallback: t, children: n }) {
  return pl()
    ? _(hl, { fallback: t, children: _(Lx, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function hl({ children: e, fallback: t = Ix }) {
  return m === void 0 ? _(E, { fallback: t, children: e }) : _(ll, { children: e });
}
function gl() {
  return f.useContext(zx);
}
function _l() {
  let e = gl();
  return f.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0; ) t = t.parent;
    return t;
  }, [e]);
}
function vl({ children: e, scopeId: t, nodeId: n }) {
  let r = gl(),
    i = f.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return _(zx.Provider, { value: i, children: e });
}
function yl(e, t) {
  return `${Bx}${e}:${t}`;
}
function bl(e, t) {
  return Sl(`component`, e, t);
}
function xl(e, t) {
  return Sl(`override`, e, t);
}
function Sl(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${yl(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function Cl(e, t, n, r, i, a) {
  let o = Tl(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function wl(e, t, n, r) {
  return Tl(e, t, n, r);
}
function Tl(e, t, n, r) {
  return !!(et(n) || (n === 1 && r && e === t));
}
function El(e, t, n, r, i, a) {
  let o = gl();
  if (et(t) || et(n)) return _(Rx, { children: e });
  let { disableCustomCode: s } = Ig();
  return s && r
    ? _(`div`, {
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
    : (Cl(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = _(ml, { getErrorMessage: bl.bind(null, t, n), fallback: null, children: e })),
      i && (e = _(vl, { scopeId: t, nodeId: n, children: e })),
      e);
}
function Dl(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function Ol(e) {
  return !(!e || e.placement || e.alignment);
}
function kl(e) {
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
function Al(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${kl(t)}, -100%`;
    case `right`:
      return `0%, ${kl(t)}`;
    case `bottom`:
      return `${kl(t)}, 0%`;
    case `left`:
      return `-100%, ${kl(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function jl(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(Yx)) {
      let e = n.getAttribute(Yx);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function Ml(e) {
  let { registerCursors: t } = c(Ux),
    n = da(() => e),
    i = te();
  r(() => t(n, i), [t, i]);
}
function Nl(e) {
  return !!(e && typeof e == `object` && Zx in e);
}
function Pl(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function Fl() {
  return Y.current() === Y.canvas;
}
function Il(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function Ll(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function Rl(e, t, n, r) {
  if (R(e)) {
    let i = Il(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    let { routeId: s } = ii(t.routes, o, void 0, r);
    return t.getRoute(s);
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function zl(e) {
  return R(e) && e.startsWith(`data:${iS}`);
}
function Bl(e) {
  if (zl(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(iS.length),
        r = t.searchParams,
        i = r.has(eS) ? r.get(eS) : void 0,
        a,
        o = r.get(tS),
        s = r.get(nS),
        c = r.get(rS);
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
function Vl(e, t, n) {
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
    let n = Bl(e);
    if (!n || !n.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function Hl(e) {
  if (!zl(e)) return e;
  let t = Bl(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: Ul(i) };
}
function Ul(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function Wl(e, t, n, r, a, o) {
  let s = c(aS),
    d = _l(),
    f = l(() => ({ scopeId: t, nodeId: n, furthestExternalComponent: d }), [t, n, d]),
    p = At(),
    m = Mt(),
    { locales: h } = Rr(),
    g = l(() => {
      let e = Nl(r) ? r : Hl(r);
      if (e) return Rl(e, p, m, h);
    }, [m, r, p, h]),
    v = !!(!Fl() && s?.nodeId && f.nodeId),
    y = u(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), Hn(e))) {
            ql(a.href, ``, `_blank`);
            return;
          }
          g ? a.navigate?.() : ql(a.href, a.rel, a.target);
        }
      },
      [a, g]
    ),
    b = u(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), ql(a.href, ``, `_blank`));
      },
      [a]
    ),
    x = u(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          g ? a.navigate?.() : ql(a.href, a.rel, a.target));
      },
      [a, g]
    );
  bs(
    o,
    (e) => {
      e !== null && v && (e.dataset.hydrated = `true`);
    },
    [v]
  );
  let S = e;
  return (
    v &&
      (i.forEach(e, (e) => {
        Kl(e) &&
          (V(
            Gl(s),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          V(
            Gl(f),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          $x.collectNestedLink(s, f));
      }),
      (S = i.map(e, (e) => {
        if (!Kl(e)) return e;
        let t = Jl(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: y,
            onAuxClick: b,
            onKeyDown: x,
            as: r.as && Jl(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return k(t, { ...i, ref: a }, n);
      }))),
    _(aS.Provider, { value: f, children: S })
  );
}
function Gl(e) {
  return !et(e?.nodeId);
}
function Kl(e) {
  return y(e) && (Jl(e.type) !== e.type || Jl(e.props.as) !== e.props.as);
}
function ql(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function Jl(e) {
  return e === `a` ? `span` : Je(e) && Me(e) === `a` ? P.span : e;
}
function Yl(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : Yl(e.parentElement, t)
      : null;
}
function Xl({ children: e }) {
  return _(ll, { children: e });
}
function Zl(e) {
  return h(function (t, n) {
    return _(Xl, { children: _(e, { ...t, ref: n }) });
  });
}
function Ql(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return eu(e, t, o, s, a, c, l, i, r);
}
function $l(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && Il(t))
    try {
      let [i, a] = t.split(`#`, 2);
      V(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      V(o !== void 0, `A href must have a defined pathname.`);
      let { routeId: s, pathVariables: c, localeId: l } = ii(e.routes, o, void 0, r),
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
function eu(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = er(d, {
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
function tu() {
  let e = c(dS),
    t = Mt()?.pathVariables;
  return e || t;
}
function nu(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(uS)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function ru() {
  let e = n.connection || n.mozConnection || n.webkitConnection || {},
    t = n.deviceMemory && n.deviceMemory > mS,
    r,
    i,
    a;
  function o() {
    ((r = e.effectiveType || ``),
      (i = e.saveData || r.includes(`2g`)),
      (a = r === `3g` || t ? hS : gS));
  }
  (e.addEventListener?.(`change`, o), o());
  let s = new IntersectionObserver(u, { threshold: pS }),
    c = 0;
  async function l(e, t) {
    if (i) return;
    let { id: n, preload: r } = e,
      a = yS.get(n);
    if (!a?.size || vS.has(n)) return;
    (++c, vS.add(n));
    let o = r()?.catch(() => {});
    (s.unobserve(t), _S.delete(t));
    for (let e of a) (s.unobserve(e), _S.delete(e));
    (a.clear(), yS.delete(n), await o, --c);
  }
  function u(e) {
    for (let t of e) {
      let e = t.target,
        n = _S.get(e);
      if (!n || vS.has(n.id)) {
        (s.unobserve(e), _S.delete(e));
        continue;
      }
      let r = n.id,
        i = yS.get(r),
        o = yS.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (c >= a) continue;
        (i ? i.add(e) : yS.set(r, new Set([e])), setTimeout(l, fS, n, e));
      } else (i && i.delete(e), o <= 1 && yS.delete(r));
    }
  }
  return (e, t, n) => {
    if (!vS.has(n))
      return (
        _S.set(e, { id: n, preload: t }),
        s.observe(e),
        () => {
          (_S.delete(e), s.unobserve(e));
        }
      );
  };
}
function iu(e, t) {
  let n = Il(e),
    r = {
      href: e === `` || Ll(e, n) ? e : `https://${e}`,
      target: au(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = Wn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function au(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function ou(e, t) {
  console.warn(
    lt(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function su(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return ou(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return ot(i) ? i.catch(ou) : i;
  } catch (e) {
    ou(e);
  }
}
function cu(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = su(o, r, n);
      ot(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function lu() {
  let e = vn();
  return u((t, n, r, i = []) => cu(t, n, r, e, i), [e]);
}
function uu({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = vn();
  return u(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = Nl(r) ? r : Hl(r);
      if (!Nl(c))
        return cn(
          `published_site_click`,
          {
            ...s,
            href: o ? du(o) : null,
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
          f = (ot(n) ? await n : n) ?? null;
        }
      }
      return cn(
        `published_site_click`,
        {
          ...s,
          href: o ? du(o) : null,
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
function du(e) {
  try {
    let t = new URL(e, q.document.baseURI);
    return t.origin === q.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function fu(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function pu(e, t, n) {
  return async (r) => {
    let i = Hn(r),
      a = Yl(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await wn({
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
function mu(e, t, n, r, i, a, o, s) {
  if (!n) return iu(e, r);
  let c = $l(t, e, s, o);
  if (!c) return iu(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return iu(e, r);
  let m = er(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !Dh,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = au(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = { pathVariables: f, locale: p },
    v = (e) => fu(t, l, () => i(l, _, !1, !g), d, f, r.smoothScroll, e);
  return {
    href: m,
    target: h,
    onClick: pu(m, r.trackLinkClick, v),
    navigate: v,
    "data-framer-page-link-current":
      (n && nu(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () => i(l, _, !0, !g),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
  };
}
function hu(e, t, n) {
  let r = gu(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (Xe(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (Xe(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function gu(e, t) {
  let n = B(e) ? e : void 0,
    r = n && !$e(n),
    i = t && !$e(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function _u(e, t, n) {
  if (!(t && jn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: vu } : { ...i, onTap: r }) : e;
}
function vu(e) {
  let t = Yl(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function yu(e, t, n, r, i, a) {
  let o = Nl(e) ? e : Hl(e);
  if (!Nl(o)) return R(e) ? iu(e).href : void 0;
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
  if (ot(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash),
    v = er(m, {
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
function bu({ EditorBar: e, fast: t = !1 }) {
  let n = c(SS),
    r = ee(Ah, t ? TS : ES, Mh),
    i = Ig(),
    a = l(() => {
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
    : _(wS, { children: _(E, { children: _(e, { framerSiteId: n, features: a }) }) });
}
function xu({ currentRoutePath: e, routerAPI: n, children: r }) {
  let i = t(),
    o = t(),
    c = t(n),
    l = t(null);
  ((c.current = n),
    a(() => {
      e && ((i.current ??= new Set()), i.current.add(e), o.current?.(e));
    }, [e]));
  let [u] = s(() => ({
    getInitialState: () => ({
      visitedPages: i.current ?? new Set(),
      getCurrentRoutePath: () =>
        c.current ? Cu(c.current, c.current.currentRouteId, c.current.currentPathVariables) : ``,
      resolveRoute: (e) => (c.current ? Cu(c.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        o.current = e;
      },
      sendTrackingEvent: async (e) => {
        c.current && Su(c.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: l,
  }));
  return _(DS.Provider, { value: u, children: r });
}
async function Su(e, t) {
  if (!ln(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    cn(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Cu(e, t, n) {
  let r = e.getRoute(t);
  return !r || !r.path ? `` : n ? Un(r.path, n) : r.path;
}
function wu({ children: e, loadSnippetsModule: t }) {
  return _(RS.Provider, { value: t, children: e });
}
function Tu() {
  return f.useContext(RS);
}
function Eu(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function Du(e, t, n = `beforeend`) {
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
  (a.selectNodeContents(r), await Ou(a.createContextualFragment(e), r, i));
}
async function Ou(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = ku(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await Ou(r, e, null)));
  }
}
function ku(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return Au(r, t, n);
}
function Au(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function ju(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = PS), (n = FS));
      break;
    case `bodyEnd`:
      ((t = IS), (n = LS));
      break;
    case `headStart`:
      ((t = AS), (n = jS));
      break;
    case `headEnd`:
      ((t = MS), (n = NS));
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
function Mu(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = Eu(e),
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
async function Nu(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = ju(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = Mu(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((Pu(t, o), s)) {
      await Du(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = Eu(e.id),
      u = `${c}
${e.code}
${l}`,
      d = Iu(e.id, n, r, i);
    d ? await Du(u, d, `afterend`) : await Du(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function Pu(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t; ) {
    let e = n.nextSibling;
    (Fu(n) && n.remove(), (n = e));
  }
}
function Fu(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function Iu(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = Mu(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function Lu() {
  let e = Tu();
  return u(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(OS),
        o = a && a.dataset[kS] !== void 0;
      if (i && o) return;
      let { getSnippets: s, snippetsSorting: c } = await e.readMaybeAsync(),
        l = await s(t, n, r);
      for (let e in l) {
        let t = e,
          n = l[t],
          r = c[t];
        await Nu(t, n, r);
      }
    },
    [e]
  );
}
function Ru(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function zu() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((zS = e.timeZone), (BS = e.locale));
}
function Bu() {
  let [e, t] = f.useState(0);
  return [e, f.useCallback(() => t((e) => e + 1), [])];
}
function Vu(e, t, n) {
  let r = e && document.getElementById(e);
  if (r) {
    qu(r, t);
    return;
  }
  n || m.scrollTo(0, 0);
}
function Hu(e) {
  let n = t([]);
  return (
    r(() => {
      n.current?.length && (n.current.forEach((e) => e()), (n.current = []));
    }, [e]),
    u((e) => {
      n.current.push(e);
    }, [])
  );
}
function Uu(e) {
  if (!e) return Th;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function Wu() {
  let e = jr(),
    n = t(void 0);
  return u(
    async (t, r, i, a = !0) => {
      let o = i !== void 0;
      n.current?.abort();
      let s = a ? new AbortController() : void 0;
      n.current = s;
      let c = s?.signal,
        l = Lt(c);
      if ((r.promise.finally(l), !o)) return ((n.current = void 0), t(c), r.promise);
      t(c);
      let u,
        d = new Promise((e, t) => {
          ((u = e), c?.addEventListener(`abort`, t));
        }).catch(Th);
      if ((e(d, i, s), await r.promise, c?.aborted)) return;
      let f = m.navigation?.transition;
      u();
      try {
        await f?.finished;
      } catch (e) {
        console.error(`Navigation transition failed`, e);
      }
      c?.aborted || o_();
    },
    [e]
  );
}
function Gu({
  defaultPageStyle: e,
  disableHistory: n,
  initialPathVariables: i,
  initialRoute: s,
  notFoundPage: c,
  collectionUtils: d,
  routes: f,
  initialLocaleId: p,
  initialCollectionItemId: h,
  locales: g = Uh,
  preserveQueryParams: v = !1,
  LayoutTemplate: y,
  EditorBar: b,
  siteCanonicalURL: x,
  adaptLayoutToTextDirection: S,
}) {
  (Xr(), Er({ disabled: n, routeId: s, initialPathVariables: i, initialLocaleId: p }));
  let C = vr(),
    [w, E] = Bu(),
    D = Hu(w),
    O = Wu(),
    k = xr(`framer-route-change`),
    j = l(() => (!Ig().synchronousNavigationOnDesktop || !Vn() ? A : (e) => e()), []),
    ee = Lu(),
    te = t(!0),
    ne = t(),
    M = t(s),
    re = t(i),
    ie = t(p),
    ae = ie.current,
    oe = l(() => g.find(({ id: e }) => (ae ? e === ae : e === Wh)) ?? null, [ae, g]),
    se = oe?.textDirection ?? `ltr`,
    ce = S ? se : `ltr`;
  r(() => {
    S && document.documentElement.setAttribute(`dir`, se);
  }, [se, S]);
  let le = kr(),
    ue = l(
      () => ({
        activeLocale: oe,
        locales: g,
        setLocale: async (e) => {
          let t = k({ localized: !0 });
          await wn({ priority: `user-blocking`, continueAfter: `paint` });
          let n;
          R(e) ? (n = e) : B(e) && (n = e.id);
          let r = g.find(({ id: e }) => e === Wh),
            i = g.find(({ id: e }) => e === n);
          if (!i) return;
          let a = M.current,
            o = f[a];
          if (o)
            try {
              let e = await le({
                currentLocale: oe,
                nextLocale: i,
                route: o,
                routeId: a,
                defaultLocale: r,
                pathVariables: re.current,
                preserveQueryParams: v,
              });
              if (!e) return;
              let n = Cr(m.history.state) ? m.history.state.paginationInfo : void 0,
                s = e.path;
              ((te.current = !1),
                (re.current = e.pathVariables),
                (ie.current = i.id),
                O(
                  () => {
                    C(a, a, () => j(E));
                  },
                  t,
                  () => {
                    s &&
                      Tr(
                        {
                          routeId: a,
                          pathVariables: e.pathVariables,
                          localeId: i.id,
                          paginationInfo: n,
                        },
                        s
                      );
                  },
                  !1
                ));
            } catch {}
        },
      }),
      [oe, E, g, v, f, O, C, k, j, le]
    ),
    de = u(
      (e, t, n, r, i, a, o, s = !1, c) => {
        te.current = !1;
        let l = M.current;
        if (
          ((M.current = e),
          (re.current = i),
          (ie.current = t),
          (ne.current = r),
          D(() => {
            Vu(n, s, a);
          }),
          a)
        ) {
          j(E);
          return;
        }
        O(
          (t) => {
            C(l, e, () => j(E), t);
          },
          o,
          c,
          !0
        );
      },
      [E, D, O, C, j]
    );
  Dr(M, de);
  let fe = u(
      async (e, t, r, i, a) => {
        let o = f[e],
          s = pt(o?.page) ? o.page.getStatus() : void 0,
          c = s?.hasRendered,
          l = k({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
          u = Uu(a);
        if (
          (wn({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(u),
          await wn({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(Rg)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let d = It(o, t),
          p = re.current,
          h = ie.current;
        if (Ru({ routeId: M.current, pathVariables: p }, { routeId: e, pathVariables: r })) {
          l.ignore?.();
          let a = f[e];
          (m.history.state?.hash !== t &&
            !n &&
            a &&
            (u(),
            await Sr(e, a, {
              currentRoutePath: a.path,
              currentPathVariables: p,
              pathVariables: r,
              hash: t,
              localeId: h,
              preserveQueryParams: v,
              siteCanonicalURL: x,
              currentRoutePathLocalized: a.pathLocalized,
            })),
            Vu(d, i, !1));
          return;
        }
        if (!o) return;
        let g = f[M.current],
          _ = () => {
            (u(),
              Sr(e, o, {
                currentRoutePath: g?.path,
                currentPathVariables: p,
                currentRoutePathLocalized: g?.pathLocalized,
                hash: t,
                pathVariables: r,
                localeId: h,
                preserveQueryParams: v,
                siteCanonicalURL: x,
              }));
          },
          y =
            Qn(x) +
            er(o, {
              currentRoutePath: g?.path,
              currentRoutePathLocalized: g?.pathLocalized,
              currentPathVariables: p,
              hash: t,
              pathVariables: r,
              localeId: h,
              preserveQueryParams: v,
              siteCanonicalURL: x,
              relative: !1,
            });
        de(e, h, d, y, r, !1, l, i, n ? void 0 : _);
      },
      [f, de, n, v, x, k]
    ),
    N = Ot(f),
    pe = M.current,
    me = ne.current,
    he = re.current,
    ge = f[pe],
    _e = ge?.path,
    P = VS(ge, pe, me, he, oe, h),
    ve = te.current;
  a(() => {
    ee(pe, he ?? {}, ue.activeLocale, ve);
  }, [ee, pe, he, ue, ve]);
  let F = l(
    () => ({
      navigate: fe,
      getRoute: N,
      currentRouteId: pe,
      currentPathVariables: he,
      routes: f,
      collectionUtils: d,
      preserveQueryParams: v,
      pageviewEventData: P,
      siteCanonicalURL: x,
      isInitialNavigation: ve,
    }),
    [fe, N, pe, he, f, d, v, x, P, ve]
  );
  if (!ge) throw Error(`Router cannot find route for ${pe}`);
  let ye = !oe || !ge.includedLocales || ge.includedLocales.includes(oe.id),
    be = _e && he ? Un(_e, he) : _e,
    I = String(ae) + be,
    L = da(() => ({ ...e, display: `contents` }));
  return _(kt, {
    api: F,
    children: _(p_.Provider, {
      value: ue,
      children: _(m_.Provider, {
        value: ce,
        children: _(qx, {
          children: _(Ur, {
            children: T(xu, {
              currentRoutePath: be,
              routerAPI: F,
              children: [
                b && _(bu, { EditorBar: b, fast: !0 }),
                _(Mx, {
                  children: T(ll, {
                    children: [
                      T(W_, {
                        notFoundPage: c,
                        defaultPageStyle: e,
                        forceUpdateKey: w,
                        children: [
                          _(H_.Start, {}),
                          _(Ku, {
                            LayoutTemplate: y,
                            webPageId: ge?.abTestingVariantId ?? pe,
                            style: e,
                            children: (t) =>
                              _(o, { children: ye ? ti(ge.page, t ? L : e) : c && ti(c, e) }, I),
                          }),
                        ],
                      }),
                      b && _(bu, { EditorBar: b }),
                      _(Kr, {}),
                      _(H_.End, {}),
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
function Ku({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? _(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function qu(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function Ju(e) {
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
function Yu(e) {
  return typeof e == `object` && !!e;
}
function Xu(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!Yu(r)) return;
    r = r[e];
  }
  return r;
}
function Zu(e) {
  return `${e.credentials}:${e.url}`;
}
function Qu(e) {
  return R(e) && !Number.isNaN(Number(e));
}
function $u(e, t) {
  switch (e) {
    case `string`:
      return R(t) || z(t);
    case `color`:
      return R(t);
    case `boolean`:
      return Ze(t);
    case `number`:
      return z(t) || Qu(t);
    case `link`:
    case `image`:
      return R(t) && Ll(t, !1);
    default:
      return !1;
  }
}
function ed(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = Xu(e.data, t.resultKeyPath);
  if (et(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!$u(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function td(e, t) {
  if (Y.current() === Y.canvas) return !1;
  let n = Math.max(t * 1e3, US);
  return Date.now() >= e + n;
}
function nd(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    routes: s,
    collectionUtils: c,
    notFoundPage: l,
    isReducedMotion: u = !1,
    skipAnimations: d = !1,
    includeDataObserver: p = !1,
    localeId: m,
    locales: h,
    preserveQueryParams: g,
    EditorBar: v,
    defaultPageStyle: y,
    disableHistory: b,
    LayoutTemplate: x,
    siteCanonicalURL: S,
    adaptLayoutToTextDirection: C,
    loadSnippetsModule: w,
    initialCollectionItemId: T,
  } = e;
  return (
    f.useEffect(() => {
      n || _v.start();
    }, []),
    n
      ? _(Pr, {
          value: r ?? `preview`,
          children: _(je, {
            reducedMotion: d ? `always` : u ? `user` : `never`,
            skipAnimations: d,
            children: _(_n, {
              collectionUtils: c,
              children: _(tC, {
                children: _(SS.Provider, {
                  value: a,
                  children: _(wu, {
                    loadSnippetsModule: w,
                    children: _(Gu, {
                      initialRoute: i,
                      initialPathVariables: o,
                      initialLocaleId: m,
                      initialCollectionItemId: T,
                      routes: s,
                      collectionUtils: c,
                      notFoundPage: l,
                      locales: h,
                      defaultPageStyle: y ?? { minHeight: `100vh`, width: `auto` },
                      preserveQueryParams: g,
                      EditorBar: v,
                      disableHistory: b,
                      LayoutTemplate: x,
                      siteCanonicalURL: S,
                      adaptLayoutToTextDirection: C,
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : _(p ? Bb : f.Fragment, {
          children: _(jt, {
            routes: s,
            children: _(Ab, { children: f.isValidElement(t) ? t : f.createElement(t, { key: i }) }),
          }),
        })
  );
}
function rd(e) {
  return {
    trace(...t) {
      return wy.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return wy.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return wy.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return wy.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return wy.getLogger(e)?.error(...t);
    },
    get enabled() {
      return wy.getLogger(e) !== void 0;
    },
  };
}
function id(e) {
  let t = e.next();
  return (V(t.done, `Generator must not yield`), t.value);
}
async function ad(e, t = e.next()) {
  for (; !t.done; ) {
    let n = await t.value;
    t = e.next(n);
  }
  return t.value;
}
function od(e) {
  let t = e.next();
  return t.done ? t.value : ad(e, t);
}
function* G(e) {
  let t = {},
    n = Object.keys(e),
    r = [];
  for (let i of n) {
    let n = e[i];
    if (it(n)) {
      let e = n.next();
      e.done
        ? (t[i] = e.value)
        : r.push(
            ad(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function* sd(e) {
  let t = [],
    n = e.keys(),
    r = [];
  for (let i of n) {
    let n = e[i];
    if (it(n)) {
      let e = n.next();
      e.done
        ? (t[i] = e.value)
        : r.push(
            ad(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function cd(e) {
  return dd(e) || md(e);
}
function ld(e) {
  return Qe(e) && e.every(B);
}
function ud(e) {
  return B(e) && Xe(e.read) && Xe(e.preload);
}
function dd(e) {
  return ld(e) || ud(e);
}
function fd(e) {
  return B(e) && B(e.schema);
}
function pd(e) {
  return B(e) && B(e.collectionByLocaleId);
}
function md(e) {
  return fd(e) || pd(e);
}
function hd(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = Wd(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function gd(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => Z.cast(e, t.definition)) };
  }
  return null;
}
function _d(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function vd(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function yd(e) {
  return vd(e)?.value ?? !1;
}
function bd(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function xd(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function Sd(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Cd(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return rt(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function wd(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Td(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function Ed(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Dd(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function Od(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function kd(e) {
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
function Ad(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function jd(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function Md(e) {
  return jd(e)?.value ?? null;
}
function Nd(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = Wd(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function Pd(e, t) {
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
function Fd(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Id(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function Ld(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Rd(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function zd(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Bd(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function Vd(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Hd(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function Ud(e) {
  return Hd(e)?.value ?? null;
}
function Wd(e, t, n) {
  if (tt(e) || tt(t)) return (V(e === t), 0);
  switch (e.type) {
    case `array`:
      return (V(e.type === t.type), hd(e, t, n));
    case `boolean`:
      return (V(e.type === t.type), _d(e, t));
    case `color`:
      return (V(e.type === t.type), bd(e, t));
    case `date`:
      return (V(e.type === t.type), Sd(e, t));
    case `enum`:
      return (V(e.type === t.type), wd(e, t));
    case `file`:
      return (V(e.type === t.type), Ed(e, t));
    case `link`:
      return (V(e.type === t.type), Od(e, t));
    case `number`:
      return (V(e.type === t.type), Ad(e, t));
    case `object`:
      return (V(e.type === t.type), Nd(e, t, n));
    case `responsiveimage`:
      return (V(e.type === t.type), Fd(e, t));
    case `richtext`:
      return (V(e.type === t.type), Ld(e, t));
    case `vectorsetitem`:
      return (V(e.type === t.type), zd(e, t));
    case `string`:
      return (V(e.type === t.type), Vd(e, t, n));
    default:
      H(e);
  }
}
async function Gd(e, t) {
  return ud(e) ? (await e.preload(t), e.read(t)) : e;
}
function Kd(e) {
  if (!md(e) || !e.id) return;
  let t = aC.get(e.id);
  if (!t) return (aC.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function qd(e) {
  let t = Kd(e);
  if (t) return t;
  let n = oC.get(e);
  if (n) return n;
  let r = `${sC}${Math.random().toString(16).slice(2)}`;
  return (oC.set(e, r), r);
}
function Jd(e, t) {
  if (dd(e)) {
    let n = qd(e) + (t?.id ?? Wh),
      r = cC.get(n);
    if (r) return r;
    let i = new iC(e, t);
    return (cC.set(n, i), i);
  }
  if (fd(e)) return e;
  if (pd(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  H(e, `Unsupported collection type`);
}
function Yd() {
  return 25;
}
function Xd() {
  return 12500;
}
function Zd(e) {
  return e;
}
function Qd(e) {
  return e;
}
function $d(e) {
  return B(e) && Xe(e.getHash);
}
function K(e, ...t) {
  return Qd(
    `${e}(${t.map((e) => (V(!(e instanceof _C), `Pass CollectionMetadata.id instead`), V(!(e instanceof bC), `Pass FieldMetadata.id instead`), V(!(e instanceof vC), `Pass IndexMetadata.id instead`), V(!(e instanceof pC), `Pass RelationalNode.group.id instead`), V(!(e instanceof uC), `Pass Group.id instead`), $d(e) ? e.getHash() : JSON.stringify(e))).join(`, `)})`
  );
}
function ef(e, t) {
  return { collectionId: qd(e), pointer: t };
}
function tf(e) {
  return B(e) && R(e.collectionId);
}
function nf(e, t) {
  return { collectionId: qd(e), pointer: t };
}
function rf(e) {
  return B(e) && R(e.collectionId);
}
function af(e, t) {
  let n = new Map();
  function r(e) {
    if (B(e))
      if (e.type === `Collection` && cd(e.data)) {
        let r = Jd(e.data, t),
          i = qd(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (Qe(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function of(e) {
  return e;
}
function sf(e) {
  return e;
}
function cf(e) {
  return e;
}
function lf(e) {
  return Array(e).fill({ type: `All` });
}
function uf(e, t) {
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
function df(e) {
  let t = new Set();
  if (!e) return t;
  uf(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (uf(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function ff(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) ff(n, t);
      return;
    case `object`:
      for (let n in e.value) ff(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function pf(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function mf(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function hf(e) {
  return `${e.functionName}(${e.arguments.map((e) => bf(e)).join(`, `)})`;
}
function gf(e) {
  let t = `CASE`;
  e.value && (t += ` ${bf(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${bf(n.when)} THEN ${bf(n.then)}`;
  return (e.else && (t += ` ELSE ${bf(e.else)}`), (t += ` END`), t);
}
function _f(e) {
  let t = bf(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function vf(e) {
  let t = bf(e.left),
    n = bf(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function yf(e) {
  return `CAST(${bf(e.value)} as ${e.dataType})`;
}
function bf(e) {
  switch (e.type) {
    case `Identifier`:
      return pf(e);
    case `LiteralValue`:
      return mf(e);
    case `FunctionCall`:
      return hf(e);
    case `Case`:
      return gf(e);
    case `UnaryOperation`:
      return _f(e);
    case `BinaryOperation`:
      return vf(e);
    case `TypeCast`:
      return yf(e);
    case `Select`:
      return `${Tf(e)}`;
    default:
      H(e);
  }
}
function xf(e) {
  return fd(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function Sf(e) {
  let t = `${Cf(e.left)} LEFT JOIN ${Cf(e.right)}`;
  return (e.constraint && (t += ` ON ${bf(e.constraint)}`), t);
}
function Cf(e) {
  switch (e.type) {
    case `Collection`:
      return xf(e);
    case `LeftJoin`:
      return Sf(e);
    default:
      H(e);
  }
}
function wf(e) {
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
function Tf(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = bf(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${Cf(e.from)}`),
    e.where && (t += ` WHERE ${bf(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${bf(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${bf(e.limit)}`),
    e.offset && (t += ` OFFSET ${bf(e.offset)}`),
    wf(t)
  );
}
function Ef(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(et(e) || B(e)))
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
function Df(e) {
  let n = t(e);
  return (
    j(() => {
      n.current = e;
    }, [e]),
    Lr((...e) => {
      let t = n.current;
      return t(...e);
    }, [])
  );
}
function Of(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function kf() {
  return new Set();
}
function Af(e) {
  let n = da(kf),
    r = da(kf);
  return (
    Os(() => () => Of(r, n)),
    a(() => () => Of(r, n), []),
    a(() => {
      Of(r, n);
    }, [e]),
    t({
      activeVariantCallback:
        (e) =>
        async (...t) =>
          new Promise((r, i) => {
            (n.add(i), e(...t).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          r.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function jf(e, t, n) {
  return f.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function Mf(e) {
  for (let [t, n] of Object.entries(e)) if (q.matchMedia(n).matches) return t;
}
function Nf(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && q.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function Pf(e, n, r = !0) {
  let i = c(Db),
    o = co(),
    s = sa(),
    l = Ln() && (!o || s),
    d = t(l ? (Mf(n) ?? e) : e),
    f = t(r && i ? e : d.current),
    p = Lo(),
    m = ce(),
    h = u(
      (e) => {
        if (e !== d.current || e !== f.current) {
          let t = function () {
            ((d.current = f.current = e),
              A(() => {
                p();
              }));
          };
          o
            ? t()
            : m(() => {
                t();
              });
        }
      },
      [m, p, o]
    );
  return (
    Ny(() => {
      if (o) {
        if (s) {
          h(Mf(n) ?? e);
          return;
        }
        h(e);
      }
    }, [e, s, o, n, h]),
    Ny(() => {
      !r || i !== !0 || h(d.current);
    }, []),
    a(() => {
      if (!l || s) return;
      let e = [];
      for (let [t, r] of Object.entries(n)) {
        let n = q.matchMedia(r),
          i = (e) => {
            e.matches && h(t);
          };
        (Ff(n, i), e.push([n, i]));
      }
      return () => e.forEach(([e, t]) => If(e, t));
    }, [s, n, h, l]),
    [d.current, f.current]
  );
}
function Ff(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function If(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function Lf(e) {
  setTimeout(e, 1);
}
function Rf(e) {
  let t = new Set(),
    n = Nf(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (zf(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (Oh ? q.requestIdleCallback : Lf)(() => {
    document.querySelector(kw)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (zf(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    Bf(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function zf(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function Bf(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function Vf() {
  let e = Mt(),
    { activeLocale: t } = Rr(),
    n = l(
      () =>
        er(e, {
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
  return f.useCallback(
    (e) => {
      if (!e) return;
      let t = `${n}-${e}`,
        r = Aw.get(t);
      if (r) return r;
      let i = x();
      return (Aw.set(t, i), i);
    },
    [n]
  );
}
function Hf(e) {
  return B(e) && jw in e && e.page !== void 0;
}
function Uf(e, t) {
  return `${e}-${t}`;
}
function Wf(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (V(r !== void 0, `nextVariant should be defined`), r);
}
function Gf(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function Kf(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function qf(e, t) {
  return t[e] || `framer-v-${e}`;
}
function Jf(e, t, n) {
  return e && n.has(e) ? e : t;
}
function Yf() {
  let e = t(),
    n = t(),
    r = u(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (n.current = void 0));
    }, []);
  return (
    a(
      () => () => {
        r();
      },
      [r]
    ),
    u(
      (t) => {
        if (!document.hidden) {
          (t(), r());
          return;
        }
        if (((n.current = t), e.current)) return;
        let i = () => {
          document.hidden || (n.current?.(), r());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [r]
    )
  );
}
function Xf() {
  let e = t(),
    n = t(!1),
    r = t(),
    i = c(ub);
  return (
    a(
      () => () => {
        (e.current?.(), (r.current = void 0), (e.current = void 0));
      },
      []
    ),
    u(
      (t, a) => {
        if (!a?.current || n.current) {
          t();
          return;
        }
        if (((r.current = t), e.current)) return;
        let o = !1;
        e.current = xs(i, `undefined`, a.current, null, (e) => {
          ((n.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), n.current && r.current?.());
              })));
        });
      },
      [i]
    )
  );
}
function Zf(e) {
  let t = Yf(),
    n = Xf();
  return u(
    (r, i = !1) => {
      if (Dh) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function Qf() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (Pw = () => {
        (e(), (t = void 0));
      }));
  });
}
function $f(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (Nw = Qf()));
}
function ep() {
  (performance.mark(`click-received-listener`), (Nw = void 0), Pw?.(), (Pw = void 0));
}
function tp(e = !1) {
  a(() => {
    e &&
      (document.addEventListener(`pointerup`, $f, !0),
      document.__proto__.addEventListener.call(document, `click`, ep, !0));
  }, [e]);
}
function np({
  variant: e,
  defaultVariant: n,
  transitions: r,
  enabledGestures: i,
  cycleOrder: a = [],
  variantProps: o = {},
  variantClassNames: s = {},
  ref: c,
}) {
  let d = Lo(),
    f = Fl(),
    p = da(() => new Set(a));
  tp(Ig().yieldOnTap);
  let m = Zf(c),
    h = t({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: Jf(e, n, p),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: n,
      enabledGestures: i,
      cycleOrder: a,
      transitions: r,
    }),
    g = u((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = h.current,
        o = Jf(e, a, p),
        s = Kf(i?.[o], t, n, !1, r);
      return [o, s ? Uf(o, s) : void 0];
    }, []),
    _ = u(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = g(r);
        if (o === e && s === t) return;
        (a && (h.current.isError = !1),
          (h.current.baseVariant = o || n),
          (h.current.gestureVariant = s));
        let c = Ig().yieldOnTap && h.current.isPressedHasUpdated;
        (c &&
          Nw &&
          (performance.mark(`wait-for-tap-start`),
          await Nw,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await wn({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: l,
          isPressed: u,
          isHoveredHasUpdated: f,
          isPressedHasUpdated: p,
        } = h.current;
        if (l || f || u || p) {
          A(d);
          return;
        }
        m(() => A(d), i);
      },
      [g, d, m]
    ),
    v = u(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        let r = t !== h.current.isPressed,
          i = e !== h.current.isHovered;
        (e !== void 0 && (h.current.isHovered = e),
          t !== void 0 && (h.current.isPressed = t),
          n !== void 0 && (h.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = h.current;
        ((h.current.isPressedHasUpdated = r),
          (h.current.isHoveredHasUpdated = i),
          _(a, o, s, a, !1));
      },
      [_]
    ),
    y = u(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = h.current,
          o = e === Mw ? Wf(r || [], i || n) : e;
        _(i, a, n, o, t, !0);
      },
      [_]
    ),
    b = u(() => {
      let { baseVariant: e } = h.current;
      ((h.current.loadedBaseVariant[e] = !0), m(() => A(d), !0));
    }, [d, m]);
  if (e !== h.current.lastVariant) {
    let [t, n] = g(e);
    ((h.current.lastVariant = t),
      (t !== h.current.baseVariant || n !== h.current.gestureVariant) &&
        ((h.current.baseVariant = t), (h.current.gestureVariant = n)));
  }
  let {
      baseVariant: x,
      gestureVariant: S,
      defaultVariant: C,
      enabledGestures: w,
      isHovered: T,
      isPressed: E,
      isError: D,
      loadedBaseVariant: O,
    } = h.current,
    k = jf(h.current.baseVariant, h.current.gestureVariant, o);
  return l(() => {
    let e = [];
    x !== C && e.push(x);
    let t = w?.[x]?.loading,
      n = !D && !f && !!t && !O[x],
      r = n ? Uf(x, `loading`) : S;
    r && e.push(r);
    let i = w?.[x],
      a = { onMouseEnter: () => v({ isHovered: !0 }), onMouseLeave: () => v({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => v({ isPressed: !0 }),
          onTapCancel: () => v({ isPressed: !1 }),
          onTap: () => v({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: x,
        gestureVariant: r,
        isLoading: n,
        transition: Gf(h.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: k,
        gestureHandlers: a,
        classNames: yc(qf(x, s), Kf(i, T, E, n, D)),
      }
    );
  }, [x, S, T, E, O, k, y, C, w, v, b, s]);
}
function rp(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!pl()) return r(e);
  let a = ip(e, r),
    o = !1;
  function s(r, s) {
    let c = gl(),
      { disableCustomCode: l } = Ig();
    if (l) return _(e, { ...r, ref: s });
    if (wl(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? _(l_.Provider, {
            value: n,
            children: _(ml, {
              getErrorMessage: xl.bind(null, t, n),
              fallback: _(e, { ...r, ref: s }),
              children: _(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (fl(a.error), fl(xl(t, n)), dl(a.error), !0)), _(e, { ...r, ref: s }));
    if (a.status === `success`)
      return _(l_.Provider, { value: n, children: _(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return f.forwardRef(s);
}
function ip(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function ap(e, t, n) {
  let r = [],
    i = Wc(e, t, (e) => r.unshift(e, e));
  if (n) {
    let e = i[i.length - 1];
    if (!z(e)) return Lw;
    (i.push(e + 1), r.push(-1));
  }
  let a = i[0];
  return z(a)
    ? a <= 1
      ? { inputRange: i, outputRange: r }
      : { inputRange: [0, Math.max(a - 1, 0), ...i], outputRange: [-1, -1, ...r] }
    : Lw;
}
function op(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
function sp(e, t) {
  let n = t === `normal` ? `Regular` : `Italic`;
  return e === 400 ? n : t === `normal` ? `${Kw[e]}` : `${Kw[e]} ${n}`;
}
function cp() {
  return m === void 0 ? {} : Jw || ((Jw = lp()), Jw);
}
function lp() {
  let e = m.location,
    t = m?.bootstrap?.services;
  if (t) return t;
  let n;
  try {
    if (((n = m.top.location.origin), (t = m.top?.bootstrap?.services), t)) return t;
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
function up(e) {
  return e.key + e.extension;
}
function dp(e) {
  return `${cp().userContent}/assets/${e}`;
}
function fp(e) {
  return dp(up(e));
}
function pp(e, t) {
  return t ? `${e} ${Yw}` : e;
}
function mp(e, t) {
  switch (t) {
    case `custom`:
      throw Error(`Custom fonts are not supported`);
    default:
      return pp(e.name, e.isVariable);
  }
}
function hp(e) {
  return !!(e && Array.isArray(e));
}
function gp(e) {
  if (!e || !Array.isArray(e)) return;
  let t = [];
  for (let n of e)
    vp(n) &&
      t.push({
        tag: n.tag,
        name: n.name,
        minValue: n.minValue,
        maxValue: n.maxValue,
        defaultValue: n.defaultValue,
      });
  return t;
}
function _p(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
  );
}
function vp(e) {
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
function yp(e) {
  return Qw[xp(e)];
}
function bp(e, t) {
  let n = e?.find((e) => e.tag === `wght`)?.defaultValue;
  return n !== void 0 && n >= 1 && n <= 1e3 ? n : (t ?? yp(`variable`) ?? 500);
}
function xp(e) {
  return e.toLowerCase().replace(/\s+/gu, `-`);
}
function Sp(e) {
  return (
    (e = e.toLowerCase()),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
  );
}
function Cp(e, t) {
  return { ...wp(e, t), ...Tp(e, t) };
}
function wp(e, t) {
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
function Tp(e, t) {
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
function Ep(e) {
  return !!e.variationAxes;
}
function Dp(e) {
  return Op(e) || kp(e);
}
function Op(e) {
  return e.startsWith(tT);
}
function kp(e) {
  return e.startsWith(eT);
}
function Ap(e, t) {
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
function jp(e) {
  let { font: t } = e,
    n = t.fontFamily,
    r = Array.isArray(t.variationAxes);
  if (r && n.toLowerCase().includes(`variable`)) return n;
  let i = r ? Yw : t.fontSubFamily.trim();
  return i === `` ? n : `${n} ${i}`;
}
function Mp({ fontFamily: e, fontSubFamily: t, variationAxes: n, faceDescriptors: r }) {
  let i = t.trim() || `Regular`,
    a = i.toLocaleLowerCase().includes(`variable`),
    o = gp(n) && !a ? `Variable ${i}` : i,
    s = `normal`,
    c = 400;
  return (
    r && ((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
    { family: e, variant: o, weight: c, style: s }
  );
}
function Np(e) {
  if (!(!e.weight || !e.style))
    return { weight: e.weight, style: e.style, isVariable: Ep(e), selector: e.selector };
}
function Pp(e) {
  let t = e.fonts.map((e) => Np(e)).filter((e) => e !== void 0);
  for (let n of e.fonts) {
    let e = Np(n);
    if (!e) continue;
    let r = Cp(e, t);
    ((n.selectorVariable = r.variantVariable?.selector),
      (n.selectorVariableItalic = r.variantVariableItalic?.selector),
      (n.selectorBold = r.variantBold?.selector),
      (n.selectorBoldItalic = r.variantBoldItalic?.selector),
      (n.selectorItalic = r.variantItalic?.selector));
  }
}
function Fp(e) {
  return e.ownerTypes.includes(`team`) ? `team` : `project`;
}
function Ip(e, t, n) {
  let r = e.get(t);
  r || ((r = new Map()), e.set(t, r));
  let i = r.get(n);
  return (i || ((i = { fonts: [] }), r.set(n, i)), i);
}
function Lp(e, t) {
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
async function Rp(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-FGWL63I4.CgGyHVDp.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-NODQXKXY.CjCmvCKY.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
async function zp(e) {
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
function Bp(e) {
  return e
    .split(`,`)
    .map((e) => e.trim().toLowerCase())
    .filter(Vp);
}
function Vp(e) {
  return rT.includes(e);
}
function Hp(e) {
  let t = {
      serif: `serif`,
      sans: `sans-serif`,
      slab: `slab`,
      display: `display`,
      handwritten: `handwriting`,
      script: `handwriting`,
    },
    n = Bp(e)[0];
  return n && t[n];
}
function Up(e) {
  let t = {
    serif: `serif`,
    "sans-serif": `sans-serif`,
    display: `display`,
    handwriting: `handwriting`,
    monospace: `monospace`,
  };
  if (e) return t[e];
}
function Wp(e, t) {
  return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
function Gp(e, t, n, r) {
  return `${e}-${t}-${n}-${r}`;
}
function Kp(e, t, n) {
  return `${e}-${t}-${n}`;
}
async function qp(e, t, n = 0) {
  let { family: r, url: i, stretch: a, unicodeRange: o } = e,
    s = e.weight,
    c = e.style || `normal`,
    l = Gp(r, c, s, i);
  if (!yT.has(l) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: R(s) ? s : s?.toString(),
        style: c,
        stretch: a,
        unicodeRange: o,
      }),
      d = u
        .load()
        .then(() => (t.fonts.add(u), xT.set(l, { fontFace: u, doc: t }), Jp(r, c, s)))
        .catch((l) => {
          if (l.name !== `NetworkError`) throw l;
          if (n < _T) return qp(e, t, n + 1);
          throw new vT(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: s, url: i, stretch: a, unicodeRange: o })}`
          );
        });
    yT.set(l, d);
  }
  await yT.get(l);
}
async function Jp(e, t, n) {
  let r = Kp(e, t, n);
  if (!bT.has(r)) {
    let i = new hT.default(e, { style: t, weight: n }).load(null, gT);
    bT.set(r, i);
  }
  try {
    await bT.get(r);
  } catch {
    throw new vT(
      `Failed to check if font is ready (${gT}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`
    );
  }
}
function Yp(e) {
  let t = e.style || `normal`,
    { family: n, url: r, weight: i } = e,
    a = Gp(n, t, i, r),
    o = xT.get(a);
  (o && (o.doc.fonts.delete(o.fontFace), xT.delete(a)), yT.delete(a), bT.delete(Kp(n, t, i)));
}
function Xp(e) {
  try {
    if (e === `framer`) return Zp(CT) ? CT : void 0;
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
      return Zp(t) ? t : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function Zp(e) {
  return B(e) && Object.values(e).every($p);
}
function Qp(e) {
  return B(e) && R(e.tag);
}
function $p(e) {
  return Array.isArray(e) && e.every(Qp);
}
function em(e, t) {
  a(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (m.addEventListener(`keyup`, n), () => m.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function tm(e, t, n, r) {
  let i = m.innerHeight - r,
    a = Math.min(m.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function nm(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new m.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function rm() {
  return document.getElementById(sS) ?? document.getElementById(oS) ?? document.body;
}
function im(e, t) {
  return z(e) ? e : (t ?? 0);
}
function am(e) {
  return im(e?.paddingTop, e?.padding) + im(e?.paddingBottom, e?.padding);
}
function om(e) {
  return im(e?.paddingLeft, e?.padding) + im(e?.paddingRight, e?.padding);
}
function sm(e, t) {
  if (!e || !t || !t.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - om(e)}px)`,
      srcSet: ho(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function cm(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in ET)) continue;
    let n = ET[t],
      r = e[t];
    if (!(!z(n) || !z(r)) && n !== r) return !0;
  }
  return !1;
}
function lm(e) {
  let t = be.get(e.current);
  if (!t) return !1;
  if (cm(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (cm(e.latestValues)) return !0;
  return !1;
}
function um(e) {
  return h(function ({ lightbox: n, lightboxClassName: r, onClick: i, ...d }, f) {
    let p = c(Ce),
      m = c(Fw),
      h = !!m,
      g = t(null),
      v = f ?? g,
      y = t(),
      b = l(() => sm(n, d.background), [n, d.background]),
      [x, C] = s(!1),
      [w, E] = s(),
      D = u(() => {
        if (n) {
          if (x) {
            A(() => {
              C(!0);
            });
            return;
          }
          Ae.read(() => {
            if (!v.current) return;
            let e = getComputedStyle(v.current),
              t =
                v.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(v.current, `::after`)
                  : void 0,
              r = v.current.offsetWidth ?? 1,
              i = v.current.offsetHeight ?? 1,
              a = lm(v) || h ? { duration: 0 } : n.transition;
            A(() => {
              (E({
                borderRadius: e.borderRadius,
                aspectRatio: r / (i || 1),
                borderTop: t?.borderTopWidth,
                borderRight: t?.borderRightWidth,
                borderBottom: t?.borderBottomWidth,
                borderLeft: t?.borderLeftWidth,
                borderStyle: t?.borderStyle,
                borderColor: t?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                C(!0),
                m?.stop());
            });
          });
        }
      }, [n, x, v, m?.stop, h]),
      k = w?.aspectRatio ?? 1,
      j = Df(() => {
        if (!n || !b || !b.src) return;
        let e = y.current?.[b.src];
        if (e) return e;
        let t = tm(k, n.maxWidth, om(n), am(n)),
          r = nm(b, { width: t, height: t * k });
        return ((y.current = { [b.src]: r }), r);
      }),
      ee = u(
        async (e) => {
          (i?.(e), !(x || !n || !b) && (await j(), D()));
        },
        [i, D, x, b, n, j]
      ),
      ne = u((e) => {
        (e?.stopPropagation(),
          A(() => {
            C(!1);
          }));
      }, []);
    (em(x, ne),
      a(() => {
        if (!n) return;
        let e;
        function t() {
          e = setTimeout(() => {
            j();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = v.current;
        return (
          i?.addEventListener(`mouseenter`, t),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, j),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, t),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, j));
          }
        );
      }, [j, v, n]));
    let M = te(),
      re = w?.transition ?? d.transition ?? p.transition,
      ie = w?.borderRadius,
      ae = w?.imageRendering,
      oe = w?.filter,
      se = w?.borderTop,
      ce = w?.borderRight,
      le = w?.borderBottom,
      ue = w?.borderLeft,
      de = w?.borderStyle,
      fe = w?.borderColor,
      N = !!(se || ce || le || ue || de || fe),
      pe = N
        ? {
            "--border-top-width": se,
            "--border-right-width": ce,
            "--border-bottom-width": le,
            "--border-left-width": ue,
            "--border-style": de,
            "--border-color": fe,
          }
        : void 0,
      me = { [Yx]: d.id },
      he = im(n?.paddingTop, n?.padding),
      ge = im(n?.paddingBottom, n?.padding),
      _e = im(n?.paddingLeft, n?.padding),
      ve = im(n?.paddingRight, n?.padding),
      F = w?.borderRadius ? { ...d.style, borderRadius: w.borderRadius } : d.style,
      ye = x ? (d.layoutDependency ? `${d.layoutDependency}-open` : `open`) : d.layoutDependency,
      be = h && x ? void 0 : (d.layoutId ?? (n ? M : void 0));
    return T(O, {
      children: [
        _(e, {
          ...d,
          style: F,
          onClick: ee,
          layoutId: be,
          ref: v,
          layoutDependency: ye,
          transition: re,
        }),
        _(Ie, {
          onExitComplete: () => {
            A(() => {
              (E(void 0), m?.start());
            });
          },
          children:
            x &&
            n &&
            b &&
            _(
              o,
              {
                children: S(
                  T(O, {
                    children: [
                      _(P.div, {
                        ...me,
                        className: r,
                        onClick: ne,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: n.zIndex,
                          backgroundColor: n.backdrop ?? `transparent`,
                        },
                        transition: re,
                        initial: DT,
                        animate: OT,
                        exit: DT,
                      }),
                      _(P.div, {
                        ...me,
                        className: r,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${he}px ${ve}px ${ge}px ${_e}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: n.zIndex,
                        },
                        children: _(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: k,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: n.maxWidth,
                          },
                          children: _(P.div, {
                            layoutId: be,
                            transition: re,
                            onClick: D,
                            className: `framer-lightbox-container`,
                            "data-border": N,
                            style: {
                              aspectRatio: k,
                              borderRadius: ie,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: ae,
                              filter: oe,
                              ...pe,
                            },
                            children: _(wo, { image: b, alt: b.alt, draggable: d.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  rm()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function dm(e, t) {
  return jT && !t
    ? Document.parseHTMLUnsafe(e)
    : ((AT ??= new DOMParser()), AT.parseFromString(e, t ?? `text/html`));
}
function fm(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function pm(e, t, n, r) {
  return e.replace(MT, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = Bl(u.replace(/&amp;/gu, `&`));
    if (!d || !d.target) return e;
    let f = t(d.target);
    if (!Hf(f) || !Hf(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = It(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = Hl(u);
    if (!_ || R(_)) return e;
    nu(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(uS, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = Jn(m, v)), i + o + `"${fm(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function mm(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function hm(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function gm(e, n, r) {
  let i = t([]);
  mm(i.current, e) ||
    ((i.current = e),
    TT.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !n || !r.current || Y.current() !== Y.canvas || (e > 0 && Uo(r.current));
    }));
}
function _m() {
  return { current: null };
}
async function vm(e, t) {
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
function ym(e) {
  return e in IT;
}
function bm(e, t) {
  let n = {};
  for (let r in e) {
    if (!ym(r)) continue;
    let i = e[r],
      a = IT[r];
    et(i) || et(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function xm(e, t = `character`, n, r, i) {
  if (r) {
    let t = _m();
    return (n.add(t), _(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r;
        return T(
          o,
          {
            children: [
              _(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(LT)?.map((e, t) => {
                  let r = _m();
                  return (n.add(r), _(`span`, { ref: r, style: i, children: e }, e + t));
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
          s = _m();
        return (
          n.add(s),
          T(
            o,
            { children: [_(`span`, { ref: s, style: i, children: e }), a ? null : ` `] },
            e + t + a
          )
        );
      });
    }
    default:
      return e;
  }
}
function Sm(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      H(t);
  }
}
function Cm(e) {
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
function wm(e, t, n, r) {
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
                transform: r ? void 0 : Cm(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Cm(n.effect),
              };
      }
    default:
      H(i);
  }
}
function Tm(e, n, r) {
  let i = da(() => new Set()),
    o = so(),
    s = r || !o,
    c = Ye(),
    u = t({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  u.current.effect = e;
  let d = e?.trigger ?? `onMount`,
    f = e?.target,
    p = e?.threshold;
  a(() => {
    if (!s || r) return;
    u.current.hasMounted = !0;
    function e() {
      let { effect: e } = u.current;
      if (
        !s ||
        !e ||
        (e?.repeat !== !0 && u.current.hasAnimatedOnce) ||
        (e?.type === `appear` && u.current.isAnimating)
      )
        return;
      Object.assign(u.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: r, tokenization: a } = e,
            o = { current: void 0 };
          return (
            Dm(
              a,
              e.effect,
              i,
              t,
              n,
              r,
              c,
              () => {
                Object.assign(u.current, { isAnimating: !1 });
              },
              o
            ),
            () => o.current?.()
          );
        }
        default:
          H(t);
      }
    }
    switch (d) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let t = n?.current;
        return t ? ke(t, e, { amount: p ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = f?.ref?.current;
        return t
          ? ke(t, e, {
              amount: p ?? 0,
              root: document,
              margin: f?.offset ? `${f.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        H(d);
    }
  }, [s, i, r, n, f, p, d]);
  let m = !!e,
    h = e ? Sm(e) : void 0;
  return l(
    () => ({
      getTokenizer: () => {
        if ((i.clear(), !m)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: n } = u.current,
          a = wm(s, r || Em(e, t, n), u.current.effect, c);
        return {
          text: (e) => xm(e, h, i, c, a),
          props: (e) => {
            if (n?.tokenization !== `element`) return;
            let t = _m();
            return (i.add(t), { ref: t, style: { ...e, ...a } });
          },
        };
      },
      play: () => {
        let { effect: e } = u.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            Dm(h, e.effect, i, t, n, !1, c);
            break;
          }
          default:
            H(t);
        }
      },
    }),
    [s, m, i, r, h]
  );
}
function Em(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function Dm(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = bm(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await Om(n, u);
      if (
        e === null ||
        (Oe(e, l, { ...r, restDelta: 0.001, delay: he(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        Oe(e, n, { ...r, restDelta: 0.001, delay: he(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await vm(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (Ae.read(() => {
          ((e = km(n)),
            e.length !== 0 &&
              Ae.update(() => {
                let t = e.map((e, t) =>
                  Oe(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
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
          Oe(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      H(e);
  }
}
async function Om(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await vm(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function km(e) {
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
function Am(e) {
  let t = {};
  for (let n in e) (qe(n) || yy(n)) && (t[n] = e[n]);
  return t;
}
function jm(e) {
  return e.type === o;
}
function Mm(e) {
  return e.type === `br`;
}
function Nm(e, t, n, r, a = {}, o, s = jm(e) ? -1 : 0) {
  let c = i.toArray(e.props.children);
  et(n) || (c = c.slice(0, 1));
  let l = !0;
  c = c.map((e) => {
    if (((!y(e) || !Mm(e)) && (l = !1), y(e))) return Nm(e, t, n, r, a, o, s + 1);
    let i = et(n) ? e : n;
    return R(i) && o ? o.text(i) : i;
  });
  let { "data-preset-tag": u, ...d } = e.props;
  if (R(e.type) || Je(e.type)) {
    let n = Me(e.type) || e.type,
      f = u || n,
      p = R(f) ? t?.[f] : void 0;
    ((d.className = yc(`framer-text`, d.className, p)),
      o && s === 0 && !l && Object.assign(d, o.props(d.style)));
    let m = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      h = t?.anchor;
    if (m && h) {
      let e = Pm(c, a);
      d.id = e;
      let t = yc(`framer-text`, h),
        n = _(`a`, { href: `#${e}`, className: t, children: c });
      ((d.style = { ...(d.style ?? {}), scrollMarginTop: r }), (c = [n]));
    }
    f === `ol` &&
      (d.style = {
        ...(d.style ?? {}),
        [Yv]: Im(d.start ?? 1, i.count(d.children), d.style?.[Jv] ?? ``),
      });
  }
  return C(e, d, ...c);
}
function Pm(e, t) {
  let n = Nr(e.map(Fm).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function Fm(e) {
  return R(e) || z(e)
    ? e.toString()
    : y(e)
      ? Fm(e.props.children)
      : Array.isArray(e)
        ? e.map(Fm).join(``)
        : ``;
}
function Im(e, t, n) {
  return Wa(Number(e) || 1, t, n);
}
function Lm(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = Ci(n.x, n.y),
    i = Ev(Ci(0.5, 0.5), r),
    a = X.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: Ci.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  V(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !Ci.isEqual(e, s) && !Ci.isEqual(e, c));
  V(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = Ev.intersection(i, Ev(s, c)),
    f = Ev.intersection(i, Ev(l, u));
  return (V(d && f, `linearGradientLine: Must have a start and end point.`), Ev(d, f));
}
function Rm(e, t) {
  let n = Lm(e.angle),
    r = Qo(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = Ev.pointAtPercentDistance(n, i),
    s = Ev.pointAtPercentDistance(n, a),
    c = Ge([i, a], [0, 1]);
  return {
    id: `id${t}g${Yy.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: Uy.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function zm(e, t) {
  return {
    id: `id${t}g${Zy.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Qo(e).map((t) => ({
      color: t.value,
      alpha: Uy.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function Bm(e) {
  if (!R(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return z(parseFloat(t));
}
function Vm(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return z(n) ? n : 50;
}
function Hm(e) {
  return Bm(e) ? Vm(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function Um(e) {
  return Bm(e) ? Vm(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function Wm(e, t, n, r) {
  if (((e = Y_.get(e, `#09F`)), !jy.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
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
        (u = (t.width - c) * Hm(e.positionX) + f),
        (d = (t.height - l) * Um(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * Um(e.positionY)))
        : ((n = g), (u = (1 - g) * Hm(e.positionX))),
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
function Gm(e) {
  return e.startsWith(`data:${GT}`);
}
function Km(e, t) {
  if (/^\w+:/u.test(e) && !Gm(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = Y.current() === Y.export;
  return wy.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function qm(e, t) {
  return (a(() => ZT.subscribeToTemplate(e), [e]), ZT.template(e, t));
}
function Jm(e) {
  try {
    let t = dm(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function Ym(e, t) {
  Zm(e, Xm(t));
}
function Xm(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function Zm(e, t) {
  (Qm(e, t),
    Array.from(e.children).forEach((e) => {
      Zm(e, t);
    }));
}
function Qm(e, t) {
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
function $m(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (QT[t[2]] || 1));
}
function eh(e) {
  let t = $m(e.getAttribute(`width`)),
    n = $m(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function th(e) {
  return e.indexOf(`image`) >= 0;
}
function nh(e) {
  return e.indexOf(`var(--`) >= 0;
}
function rh(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function ih(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? q,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = ZT.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && Da(t) && o !== 1 && o !== 2) return;
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
function ah(e) {
  return e > rE ? `lazy` : void 0;
}
function oh(e, t, n) {
  let r = lh(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function sh(e) {
  return e ? (e.fonts ?? ni()) : ni();
}
function ch(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : lh(e);
}
function lh(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    uh(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(dh) })
      : t.fonts.push(dh(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function uh(e) {
  return iE in e;
}
function dh(e) {
  let t = fh(e) || ph(e) ? e : mh(e);
  return ph(t) ? t : hh(t);
}
function fh(e) {
  return `source` in e;
}
function ph(e) {
  return `cssFamilyName` in e;
}
function mh(e) {
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
function hh(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${Yw}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function gh(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function _h(e) {
  return e.loader;
}
function vh(e, t, n) {
  let r = _h(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var yh,
  bh,
  xh,
  Sh,
  Ch,
  wh,
  Th,
  Eh,
  Dh,
  Oh,
  kh,
  Ah,
  jh,
  Mh,
  Nh,
  Ph,
  Fh,
  Ih,
  Lh,
  Rh,
  zh,
  Bh,
  Vh,
  Hh,
  Uh,
  Wh,
  Gh,
  Kh,
  qh,
  Jh,
  Yh,
  Xh,
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
  q,
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
  J,
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
  Y,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  X,
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
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
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
  Z,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  Q,
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
  $,
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
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
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
  aE = e(() => {
    (ne(),
      Se(),
      Le(),
      p(),
      D(),
      g(),
      (yh = le({
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
      (bh = le({
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
      (xh = le({
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
      (Sh = le({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = xh();
        },
      })),
      (Ch = le({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = Sh(),
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
      (wh = le({
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
            function s(e, t, n) {
              ((t ||= {}),
                (n ||= m),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = n));
            }
            var c = null,
              l = null,
              u = null,
              d = null;
            function f(e) {
              return (
                l === null &&
                  (p(e) && /Apple/.test(m.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        m.navigator.userAgent
                      )),
                      (l = !!e && 603 > parseInt(e[1], 10)))
                    : (l = !1)),
                l
              );
            }
            function p(e) {
              return (d === null && (d = !!e.document.fonts), d);
            }
            function h(e, t) {
              var n = e.style,
                r = e.weight;
              if (u === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                u = i.style.font !== ``;
              }
              return [n, r, u ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((s.prototype.load = function (e, t) {
              var a = this,
                s = e || `BESbswy`,
                l = 0,
                u = t || 3e3,
                d = new Date().getTime();
              return new Promise(function (e, t) {
                if (p(a.context) && !f(a.context)) {
                  var g = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - d >= u
                          ? t(Error(`` + u + `ms timeout exceeded`))
                          : a.context.document.fonts
                              .load(h(a, `"` + a.family + `"`), s)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    _ = new Promise(function (e, t) {
                      l = setTimeout(function () {
                        t(Error(`` + u + `ms timeout exceeded`));
                      }, u);
                    });
                  Promise.race([_, g]).then(function () {
                    (clearTimeout(l), e(a));
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      ((t = (v != -1 && y != -1) || (v != -1 && b != -1) || (y != -1 && b != -1)) &&
                        ((t = v != y && v != b && y != b) ||
                          (c === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              m.navigator.userAgent
                            )),
                            (c =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))))),
                          (t =
                            c &&
                            ((v == x && y == x && b == x) ||
                              (v == S && y == S && b == S) ||
                              (v == C && y == C && b == C)))),
                        (t = !t)),
                        t &&
                          (w.parentNode !== null && w.parentNode.removeChild(w),
                          clearTimeout(l),
                          e(a)));
                    }
                    function f() {
                      if (new Date().getTime() - d >= u)
                        (w.parentNode !== null && w.parentNode.removeChild(w),
                          t(Error(`` + u + `ms timeout exceeded`)));
                      else {
                        var e = a.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((v = p.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          (b = _.g.offsetWidth),
                          n()),
                          (l = setTimeout(f, 50)));
                      }
                    }
                    var p = new r(s),
                      g = new r(s),
                      _ = new r(s),
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = -1,
                      w = document.createElement(`div`);
                    ((w.dir = `ltr`),
                      i(p, h(a, `sans-serif`)),
                      i(g, h(a, `serif`)),
                      i(_, h(a, `monospace`)),
                      w.appendChild(p.g),
                      w.appendChild(g.g),
                      w.appendChild(_.g),
                      a.context.document.body.appendChild(w),
                      (x = p.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      (C = _.g.offsetWidth),
                      f(),
                      o(p, function (e) {
                        ((v = e), n());
                      }),
                      i(p, h(a, `"` + a.family + `",sans-serif`)),
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
                ? (t.exports = s)
                : ((m.FontFaceObserver = s),
                  (m.FontFaceObserver.prototype.load = s.prototype.load)));
          })();
        },
      })),
      (Th = () => {}),
      (Eh = m !== void 0),
      (Dh =
        Eh &&
        (n.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(n.userAgent))),
      (Oh = Eh && typeof m.requestIdleCallback == `function`),
      (kh = Oh ? m.requestIdleCallback : setTimeout),
      (Ah = () => () => {}),
      (jh = () => !0),
      (Mh = () => !1),
      (Nh = new Map()),
      (Ph = new Map()),
      (Fh = new Set()),
      (Ih = `:`),
      (Lh = Eh ? void 0 : new Set()),
      (Rh = `preload`),
      (zh = Object.keys),
      (Bh = `equals`),
      (Vh = f.createContext({})),
      (Hh = f.createContext({})),
      (Uh = []),
      (Wh = `default`),
      (Gh = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (Kh = class e {
        constructor(e, t) {
          (M(this, `resolver`, e),
            M(this, `cacheHash`, t),
            M(this, `promiseState`, Gh.Pending),
            M(this, `preloadPromise`),
            M(this, `value`),
            M(this, `reason`),
            M(this, `read`, () => {
              if (this.promiseState === Gh.Fulfilled) return this.value;
              throw this.promiseState === Gh.Rejected
                ? this.reason
                : Error(`Need to call preload() before read()`);
            }),
            t !== void 0 && dt(t, e));
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
          return this.promiseState === Gh.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === Gh.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== Gh.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && Lh !== void 0 && Lh.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = Gh.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = Gh.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && Nh.has(this.cacheHash) ? Nh.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!ot(n)) {
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
      (qh = -1),
      (Jh = -2),
      (Yh = -3),
      (Xh = -4),
      (Zh = -5),
      (Qh = -6),
      ($h = -7),
      (eg = 2 ** 32 - 1),
      (tg = eg - 1),
      (ng = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (rg = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (ig = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (ag = typeof Uint8Array.fromBase64 == `function`),
      (og = typeof process == `object` && process.versions?.node !== void 0),
      (sg = ag ? Xt : og ? Qt : en),
      (cg = ag ? Zt : og ? $t : tn),
      (q = Eh
        ? m
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
      (lg = 2),
      (ug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (dg = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (pg = class {
        constructor() {
          (M(this, `payload`, un()), M(this, `isEmpty`, !0));
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
              return an(this.payload);
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
      (mg = Eh ? void 0 : new pg()),
      (hg = dg.CollectionUtilsCache),
      (gg = new WeakMap()),
      (_g = d(void 0)),
      (vg = class {
        constructor(e, t) {
          (M(this, `collectionId`, t),
            M(this, `module`),
            M(this, `cacheMap`, new Map()),
            (this.module = new Kh(async () => {
              try {
                let t = await e();
                return (V(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(lt(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        callUtilsMethod(e, t, n) {
          let r = mn(n),
            i = hn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (mg !== void 0) {
              if (ot(e)) return e.then((e) => (mg.set(hg, i, e), e));
              mg.set(hg, i, e);
            }
            return e;
          }
          if (fn(hg, i)) {
            let e = pn(hg, i);
            return (this.cacheMap.set(i, new Kh(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = ot(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e](t, n)) : a?.[e](t, n);
          } catch (e) {
            (console.error(lt(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (mg !== void 0 && mg.set(hg, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new Kh(() =>
            s
              .then((e) => (mg !== void 0 && mg.set(hg, i, e), e))
              .catch((e) => {
                console.error(lt(`Failed to call CollectionUtils method.`, e));
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
      (yg = q.scheduler && `yield` in q.scheduler),
      (bg = q.scheduler && `postTask` in q.scheduler),
      (xg = new Set()),
      (Sg = !Dh),
      (Cg = /Mac/u),
      (wg = /iPhone|iPod|iPad/iu),
      (Tg = /MacIntel/iu),
      (Eg = /Edg\//u),
      (Dg = /Chrome/u),
      (Og = /Google Inc/u),
      (kg = /Safari/u),
      (Ag = /Apple Computer/u),
      (jg = /Firefox\/\d+\.\d+$/u),
      (Mg = /FramerX/u),
      (Ng = /tablet|iPad|Nexus 9/iu),
      (Pg = /mobi/iu),
      (Fg = {}),
      (Ig = () => Fg),
      (Lg = (e) => {
        Fg = e;
      }),
      (Rg = RegExp(`:([a-z]\\w*)`, `gi`)),
      (zg = `framer_variant`),
      (Bg = 46),
      (Vg = 47),
      (Hg = (e, t) => e.charCodeAt(t)),
      (Ug = (e, t) => e.lastIndexOf(t)),
      (Wg = (e, t, n) => e.slice(t, n)),
      (Gg = !1),
      (Kg = `/`),
      (qg = (e) => e === Vg),
      (Jg = new Set([`/404.html`, `/404`, `/404/`])),
      (Yg = !1),
      (Xg = f.createContext({ global: void 0, routes: {} })),
      (Zg = 10),
      (Qg = 1e4),
      ($g = (e) => `--view-transition-${e}`),
      (e_ = {
        circle: {
          makeKeyframe: (e, t) => {
            let { x: n, y: r } = sr(e);
            return t === `start`
              ? `clip-path: circle(0 at ${n}px ${r}px);`
              : `clip-path: circle(${Math.hypot(Math.max(n, m.innerWidth - n), Math.max(r, m.innerHeight - r))}px at ${n}px ${r}px);`;
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
              `${$g(`conic-offset`)}: ${r}%;`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${$g(`conic-offset`)})`,
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
        @property ${$g(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
        },
        inset: {
          makeKeyframe: (e, t) => {
            let { x: n, y: r } = sr(e),
              i = m.innerHeight - r,
              a = m.innerWidth - n;
            return t === `start`
              ? `clip-path: inset(${r}px ${a}px ${i}px ${n}px round ${e.round}px);`
              : `clip-path: inset(0 round 0);`;
          },
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = or(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${$g(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${$g(`blinds-width`)})`,
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
            @property ${$g(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${$g(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${$g(`wipe-offset`)})`,
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
            @property ${$g(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (t_ = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (n_ = `view-transition-styles`),
      (r_ = {
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
      (i_ = () => {}),
      (o_ = () => {
        (a_ ||
          ((a_ = document.createElement(`div`)),
          a_.setAttribute(`aria-live`, `assertive`),
          a_.setAttribute(`aria-atomic`, `true`),
          (a_.style.position = `absolute`),
          (a_.style.transform = `scale(0)`),
          document.body.append(a_)),
          setTimeout(() => {
            a_.textContent = document.title;
          }, 60));
      }),
      (s_ =
        Eh &&
        typeof m.navigation?.back == `function` &&
        !(() => {
          if (n === void 0) return !1;
          let e = n.userAgent,
            t = e.indexOf(`Chrome/`),
            r = +e.slice(t + 7, e.indexOf(`.`, t));
          return r > 101 && r < 128;
        })() &&
        !Fn()),
      (c_ = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (l_ = f.createContext(null)),
      (u_ = (() => {
        let e = d(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (d_ = async () => {}),
      (f_ = { activeLocale: null, locales: [], setLocale: d_ }),
      (p_ = (() => {
        let e = f.createContext(f_);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (m_ = (() => {
        let e = f.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (h_ = new Set()),
      (g_ = (() => {
        let e = d({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (__ = `__f_replay`),
      (v_ =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (y_ = (e) => {
        e.target?.closest?.(`#main`) &&
          (Wr(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (b_ = !1),
      (L_ = [qr]),
      (I_ = [qr]),
      (F_ = [qr]),
      (P_ = [qr]),
      (N_ = [qr]),
      (M_ = [qr]),
      (j_ = [qr]),
      (A_ = [qr]),
      (k_ = [qr]),
      (O_ = [qr]),
      (D_ = [qr]),
      (E_ = [qr]),
      (T_ = [qr]),
      (w_ = [qr]),
      (C_ = [qr]),
      (S_ = [qr]),
      (x_ = [qr]),
      (z_ = class {
        constructor() {
          (De(R_, 5, this),
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
            Jr(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            Jr(
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
            Jr(
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
            Jr(
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
            Jr(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            Jr(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            Jr(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          Jr(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          Jr(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (R_ = fe(null)),
      N(R_, 1, `markRenderStart`, L_, z_),
      N(R_, 1, `markRenderEnd`, I_, z_),
      N(R_, 1, `markUseInsertionEffectsStart`, F_, z_),
      N(R_, 1, `markUseInsertionEffectRouterStart`, P_, z_),
      N(R_, 1, `markUseInsertionEffectsEnd`, N_, z_),
      N(R_, 1, `markUseLayoutEffectsStart`, M_, z_),
      N(R_, 1, `markRouterUseLayoutEffectStart`, j_, z_),
      N(R_, 1, `markUseLayoutEffectsEnd`, A_, z_),
      N(R_, 1, `markUseEffectsStart`, k_, z_),
      N(R_, 1, `markUseEffectsRouterStart`, O_, z_),
      N(R_, 1, `markUseEffectsAreSynchronous`, D_, z_),
      N(R_, 1, `markUseEffectsEnd`, E_, z_),
      N(R_, 1, `markRafStart`, T_, z_),
      N(R_, 1, `markRafEnd`, w_, z_),
      N(R_, 1, `markLayoutStylePaintEnd`, C_, z_),
      N(R_, 1, `measureMutationEffects`, S_, z_),
      N(R_, 1, `measureUnattributedHydrationOverhead`, x_, z_),
      Be(R_, z_),
      (V_ = !1),
      (H_ = { Start: $r, End: ei }),
      (U_ = class extends Error {}),
      (W_ = class extends v {
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
          if (!(this.state.error instanceof U_)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return ti(e, t);
        }
      }),
      (G_ = Object.freeze([])),
      (q_ = new Set()),
      (J_ = class {
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
      (Y_ = (() => {
        function e(e) {
          return (
            _i(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            vi(e) ? e : new Q_(e)
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
          (e.get = (e, t) => (e == null ? t : vi(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              vi(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (X_ = `onUpdate`),
      (Z_ = `finishTransaction`),
      (Q_ = class {
        constructor(e) {
          (M(this, `value`, e), M(this, `observers`, new J_()));
        }
        static interpolationFor(e, t) {
          if (vi(e)) return yi(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (vi(e) && (e = e.get()), (this.value = e));
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
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: xi(e.x, t.x), y: xi(e.y, t.y) })),
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
      })((Ci ||= {})),
      ($_ = {
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
      (ev = new (yh().Hsluv)()),
      (tv = {
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
      (nv =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (rv = (e) => {
        let { r: t, g: n, b: r, a: i } = qi(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (iv = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Yi({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (av = (e) => {
        let { r: t, g: n, b: r, a: i } = qi(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (ov = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Yi({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (sv = class e {
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
          return Xi(this);
        }
        rgb() {
          return ea(this);
        }
        hsl() {
          return Ni(this.r, this.g, this.b);
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
              return new e(Qi(t));
            case `srgb`:
              return new e($i(Qi(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            $i({
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
          let n = Gi(t);
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
      (cv = new Map()),
      (J = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = cv.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (cv.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = ta(t, n, r, i);
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
          (e.isColorString = (e) => typeof e == `string` && Hi(e) !== !1),
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
          (e.toHex = (e, t = !1) => Mi(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && sv.isP3String(e)),
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
          (e.toHusl = (e) => ({ ...Oi(e.r, e.g, e.b), a: e.roundA })),
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
            let t = Ii(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = Ii(e.r, e.g, e.b),
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
            let t = Mi(e.r, e.g, e.b, !0);
            for (let e of Object.keys($_)) if ($_[e] === t) return e;
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
                r: wi(i, [0, 1], [t.r, r.r], a),
                g: wi(i, [0, 1], [t.g, r.g], a),
                b: wi(i, [0, 1], [t.b, r.b], a),
                a: wi(i, [0, 1], [t.a, r.a], a),
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
                h: wi(i, [0, 1], [u, u + f], a),
                s: wi(i, [0, 1], [c.s, l.s], a),
                l: wi(i, [0, 1], [c.l, l.l], a),
                a: wi(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(ki(p.h, p.s, p.l, p.a));
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
          (e.rgbToHsl = (e, t, n) => Ni(e, t, n)),
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
        let r = Ge([0, 255], [0, 1]);
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
      (lv = (e) => e instanceof He),
      (uv = bh().EventEmitter),
      (dv = class {
        constructor() {
          M(this, `_emitter`, new uv());
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
      (fv = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (pv = q.requestAnimationFrame || fv),
      (mv = (e) => pv(e)),
      (hv = 1 / 60),
      (gv = class extends dv {
        constructor(e = !1) {
          (super(),
            M(this, `_started`, !1),
            M(this, `_frame`, 0),
            M(this, `_frameTasks`, []),
            M(this, `tick`, () => {
              this._started &&
                (mv(this.tick),
                this.emit(`update`, this._frame, hv),
                this.emit(`render`, this._frame, hv),
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
          hv = e;
        }
        static get TimeStep() {
          return hv;
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), mv(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * hv;
        }
      }),
      (_v = new gv()),
      (vv = { target: sa() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (Y = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => vv.target,
        hasRestrictions: () => {
          let e = vv.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (yv = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      Ee({
        borderTopWidth: yv(`y`),
        borderLeftWidth: yv(`x`),
        borderRightWidth: yv(`x`),
        borderBottomWidth: yv(`y`),
      }),
      (bv = f.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (xv = {
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
      (Sv = {
        ...xv,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (Cv = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (wv = { ...Cv, fontWeight: 500 }),
      (Tv = {
        ...Cv,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (Ev = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = _a(Ci.angleFromX(t.a, t.b)),
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
            return e(Ci(n.x - i, n.y + r), n);
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
          (e.distance = (e) => Ci.distance(e.a, e.b)),
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
          x: bi(e.x, t),
          y: bi(e.y, t),
          width: bi(e.width, t),
          height: bi(e.height, t),
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
          return { x: a, y: o, width: Ci.distance(t, n), height: Ci.distance(t, i) };
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
            Ci.distance({ x: n, y: r }, { x: 0, y: 0 })
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
          return [Ev(t, n), Ev(n, r), Ev(r, i), Ev(i, t)];
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
          let n = Ev(t, X.center(e)),
            r = X.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && Ev.intersection(n, t, !0)) {
              let n = Dv[e];
              return (V(n, () => `Invalid edge name: ${JSON.stringify(Dv)}`), { edge: t, name: n });
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
      (Dv = [`top`, `right`, `bottom`, `left`]),
      (Ov = {
        quickfix: (e) => (
          (va(e.widthType) || va(e.heightType)) && (e.aspectRatio = null),
          U(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || va(e.widthType) || U(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || va(e.heightType) || U(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (kv = {
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
            d = Ov.quickfix({
              left: U(t) || vi(t),
              right: U(n) || vi(n),
              top: U(r) || vi(r),
              bottom: U(i) || vi(i),
              widthType: ya(a),
              heightType: ya(o),
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
          } else a !== void 0 && typeof a != `string` && (f = Y_.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = Y_.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? Y_.getNumber(t) : null,
              right: d.right ? Y_.getNumber(n) : null,
              top: d.top ? Y_.getNumber(r) : null,
              bottom: d.bottom ? Y_.getNumber(i) : null,
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
            o = t?.sizing ? Y_.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? Y_.getNumber(t?.sizing.height) : null,
            c = Ta(e.left, e.right);
          if (o && U(c)) i = o - c;
          else if (n && va(e.widthType)) i = n.width;
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
          let l = Ta(e.top, e.bottom);
          if (s && U(l)) a = s - l;
          else if (n && va(e.heightType)) a = n.height;
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
          return wa(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = kv.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? Y_.getNumber(l.width) : null,
            d = l ? Y_.getNumber(l.height) : null;
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
      (Av = 200),
      (jv = 200),
      (Mv = f.createContext({ parentSize: 0 })),
      (Nv = (e) => {
        let t = Na(),
          { parentSize: n, children: r } = e,
          i = f.useMemo(() => ({ parentSize: n }), [Fa(n), Ia(n)]);
        return t === 1
          ? r
            ? _(O, { children: r })
            : null
          : _(Mv.Provider, { value: i, children: r });
      }),
      (Pv = ((e) => (
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
      ))(Pv || {})),
      (Fv = f.createContext(void 0)),
      (Iv = new Set()),
      (Rv = `style[data-framer-css-ssr-minified]`),
      (zv = (() => {
        if (!Ln()) return new Set();
        let e = document.querySelector(Rv)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (Bv = `data-framer-css-ssr`),
      (Vv = (e, t, n) =>
        f.forwardRef((r, i) => {
          let { sheet: a, cache: o } = f.useContext(Fv) ?? {},
            s = n;
          if (!Ln()) {
            Xe(t) && (t = t(Ha(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            Uv.add(e, s);
          }
          return (
            j(() => {
              (s && zv.has(s)) ||
                (Xe(t)
                  ? t(Ha(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && Va(e, a, o));
            }, []),
            _(e, { ...r, ref: i })
          );
        })),
      (Hv = class {
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
      (Uv = new Hv()),
      (Wv = [
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
      (Gv = ((e) => (
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
      ))(Gv || {})),
      (Kv = Gv),
      (qv = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (V(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${Ua(r)}; `));
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
      `${Kv.BorderTopWidth}${Kv.BorderRightWidth}${Kv.BorderBottomWidth}${Kv.BorderLeftWidth}`,
      (Jv = `--list-style-type`),
      (Yv = `--max-list-digits`),
      (Xv = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (Zv = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (Qv = { display: `inline-block` }),
      ($v = { display: `block` }),
      (ey = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${Zv.display};
            flex-direction: ${Zv.flexDirection};
            justify-content: ${Zv.justifyContent};
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
                color: ${Ya([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${Ya([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${Ya([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
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
            display: ${Qv.display};
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
                color: ${Ya([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
                color: ${Ya([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ya([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Ya([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
            color: ${Ya([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
            color: ${Ya([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${Ya([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${Ya([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
            color: ${Ya([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
                color: ${Ya([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ya([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${Ya([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
                color: ${Ya([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ya([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
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
                color: ${Ya([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ya([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Ya([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
                color: ${Ya([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ya([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${$v.display};
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
            padding-inline-start: calc(calc(var(${Yv}, 1) + 1) * 1ch);
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
        ${Xa(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (ty = `--text-truncation-display-inline-for-safari-16`),
      (ny = `--text-truncation-display-none-for-safari-16`),
      (ry = `--text-truncation-line-break-for-safari-16`),
      (iy = [
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
      (ay = `(background: -webkit-named-image(i))`),
      (oy = `(contain-intrinsic-size: inherit)`),
      (sy = [
        `@supports ${ay} and (not ${oy}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${iy.join(`, `)} { display: var(${ty}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${iy.map((e) => `${e}::after`).join(`, `)} { content: var(${ry}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${ny}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${ty}, ${Qv.display}) }
    }`,
      ]),
      (cy = `--framer-will-change-override`),
      (ly = `--framer-will-change-effect-override`),
      (uy = `--framer-will-change-filter-override`),
      (dy = `--overflow-clip-fallback`),
      (fy = `--one-if-corner-shape-supported`),
      (py = (e) => {
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
                  `body { ${cy}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${cy}: transform; } }`,
                ]
              : [`body { ${cy}: none; ${ly}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${uy}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${uy}: filter; } }`,
                ]
              : [`body { ${uy}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${dy}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${fy}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...ey,
          ...Wv,
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
          ...sy,
          f,
        ];
      }),
      (my = Ba(() => py(!1))),
      (hy = Ba(() => py(!0))),
      (gy = `optional`),
      (_y = (e) => e),
      (vy =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (yy = lo(
        (e) =>
          vy.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (by = (e) => () => {
        gi(e);
      }),
      (xy = () => () => {}),
      (Sy = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = wy.useImageSource(e, t, n);
          return l(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        isOnPageCanvas: !1,
      }),
      (Cy = !1),
      (wy = new Proxy(Sy, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? xy()
              : by(
                  Cy
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (Ty = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (Ey = [1, 2, 2.2]),
      (Dy = [512, 1024, 2048, 4096]),
      (Oy = 512),
      (ky = { position: `absolute`, ...Ty, top: 0, right: 0, bottom: 0, left: 0 }),
      (Ay = `src`),
      (jy = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && Ay in e;
        },
      }),
      (My = Pn()),
      (Ny = typeof document < `u` ? r : a),
      (Py = f.createContext(!1)),
      (Fy = class {
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
      (Iy = Ln() ? new Fy() : void 0),
      (Ly = `data-framer-size-compatibility-wrapper`),
      (Ry = `0.000001px`),
      (zy = ` translateZ(${Ry})`),
      (By = Rn() || Fn() || zn()),
      (Vy = (() => {
        class e extends v {
          constructor() {
            (super(...arguments),
              M(this, `layerElement`, null),
              M(this, `setLayerElement`, (e) => {
                this.layerElement = e;
              }));
          }
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? Wo(t) : Go(t));
          }
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Dt(this.props, e);
          }
          componentDidUpdate(e) {
            _y(this.props).clip &&
              _y(this.props).radius === 0 &&
              _y(e).radius !== 0 &&
              qo(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return (M(e, `defaultProps`, {}), e);
      })()),
      (Hy = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (Uy = {
        hueRotate: (e, t) => J.toHslString(J.hueRotate(J(e), t)),
        setAlpha: (e, t) => J.toRgbString(J.alpha(J(e), t)),
        getAlpha: (e) => {
          let t = Hi(e);
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
        hsvToHSLString: (e) => J.toHslString(J(Ai(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => J.toHex(J(Ai(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => J.toHexString(J(Ai(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => J.toRgbString(J(Ai(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => Ai(e.h, e.s, e.v),
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
      (Wy = /var\(.+\)/u),
      (Gy = new Map()),
      (Ky = [`stops`]),
      (qy = [`start`, `end`]),
      (Jy = [`angle`, `alpha`]),
      (Yy = {
        isLinearGradient: (e) => B(e) && Jy.every((t) => t in e) && (ts(e) || es(e)),
        hash: (e) => e.angle ^ $o(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = Qo(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (Xy = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (Zy = {
        isRadialGradient: (e) => B(e) && Xy.every((t) => t in e) && (ts(e) || es(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ $o(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = Qo(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (Qy = [
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
      ($y = new Set([...Qy, ...Qy.map((e) => `${e}Capture`)])),
      (eb = `overflow`),
      (tb = { x: 0, y: 0, width: 200, height: 200 }),
      (nb = new Set([
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
      (rb = h(function (e, n) {
        let { name: r, center: i, border: a, _border: o, __portal: s } = e,
          { props: l, children: u } = Po(e),
          d = fs(l),
          f = Io(e),
          p = ss(e),
          m = t(null),
          h = n ?? m,
          g = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": p,
            "data-framer-highlight": p === `pointer` || void 0,
            "data-layoutid": f,
            "data-framer-offset-parent-id": _y(e)[`data-framer-offset-parent-id`],
          };
        !ps(e) && r && (_y(g)[`data-framer-name`] = r);
        let [v, y] = ds(l),
          b = us(l),
          x = za(b);
        (i && !(y && !x && Da(b))
          ? ((d.transformTemplate ||= Fo(i)), Object.assign(g, Mo(i)))
          : (d.transformTemplate ||= void 0),
          Ho(e, h));
        let S = Oo(e),
          C = ms(l, b, y, c(Py)),
          w = La(
            T(O, {
              children: [
                S
                  ? _(wo, {
                      alt: e.alt ?? ``,
                      image: S,
                      containerSize: y ?? void 0,
                      nodeId: e.id && No(e.id),
                      layoutId: f,
                    })
                  : null,
                u,
                _(Eo, { ...o, border: a, layoutId: f }),
              ],
            }),
            C
          ),
          E = Ao(e.as),
          D = ko(S);
        return (
          e.fitImageDimension &&
            D &&
            ((v[e.fitImageDimension] = `auto`), (v.aspectRatio = D.width / D.height)),
          T(E, { ...g, ...d, layoutId: f, style: v, ref: h, children: [w, s] })
        );
      })),
      (ib = Qa(
        h(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? _(rb, { ...e, ref: t }) : null;
        })
      )),
      (ab = `__LAYOUT_TREE_ROOT`),
      (ob = f.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (sb = class extends v {
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
                preserveFollowOpacity: t.options.layoutId === ab && !this.follow?.isExiting,
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
          return _(ob.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (cb = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (lb = class {
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
      (ub = d(new Map())),
      (db = typeof IntersectionObserver > `u` ? Th : Ss),
      (fb = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (pb = f.createContext(null)),
      (mb = class extends v {
        constructor() {
          (super(...arguments),
            M(this, `layoutMaybeMutated`, !1),
            M(this, `projectionNodes`, new Map()),
            M(this, `rootProjectionNode`),
            M(this, `isExiting`),
            M(
              this,
              `shouldPreserveFollowOpacity`,
              (e) => e.options.layoutId === ab && !this.props.isExiting
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
          return _(Pe.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (hb = (e) => {
        let t = f.useContext(ob);
        return _(mb, { ...e, sharedLayoutContext: t });
      }),
      (gb = f.createContext(!0)),
      (_b = d({ register: () => {}, deregister: () => {} })),
      (vb = ({ isCurrent: e, isOverlayed: n, children: r }) => {
        let i = Ds(),
          o = t({
            register: u(
              (e) => {
                if (i.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                i.set(e, void 0);
              },
              [i]
            ),
            deregister: u(
              (e) => {
                (i.get(e)?.(), i.delete(e));
              },
              [i]
            ),
          }).current;
        return (
          a(
            () => (
              i.forEach((t, r) => {
                let a = r(e, n);
                i.set(r, Xe(a) ? a : void 0);
              }),
              () => {
                i.forEach((e, t) => {
                  e && (e(), i.set(t, void 0));
                });
              }
            ),
            [e, n, i]
          ),
          _(_b.Provider, { value: o, children: r })
        );
      }),
      (yb = f.memo(function ({
        isLayeredContainer: e,
        isCurrent: n,
        isPrevious: r,
        isOverlayed: i = !1,
        visible: o,
        transitionProps: s,
        children: l,
        backdropColor: u,
        onTapBackdrop: d,
        backfaceVisible: f,
        exitBackfaceVisible: p,
        animation: m,
        exitAnimation: h,
        instant: g,
        initialProps: v,
        exitProps: y,
        position: b = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: x,
        index: S,
        areMagicMotionLayersPresent: C,
        id: w,
        isInitial: E,
      }) {
        let D = me(),
          O = c(Te),
          { persistLayoutIdCache: k } = c(bv),
          A = t({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: As({}, v, s),
          }),
          j = t(null),
          ee = O !== null && !O.isPresent;
        (n && A.current.wasCurrent === void 0 && k(),
          a(() => {
            if (e || !D) return;
            if (ee) {
              A.current = { ...A.current, wasBeingRemoved: ee };
              return;
            }
            let { wasPrevious: t, wasCurrent: i } = A.current,
              a = (n && !i) || (!ee && A.current.wasBeingRemoved && n),
              o = r && !t,
              c = As(A.current.origins, v, s),
              l = A.current.wasReset;
            (a || o
              ? (D.stop(), D.start({ zIndex: S, ...c, ...s }), (l = !1))
              : l === !1 && (D.stop(), D.set({ zIndex: S, ...bb, opacity: 0 }), (l = !0)),
              (A.current = {
                wasCurrent: !!n,
                wasPrevious: !!r,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [n, r, ee]));
        let te = g ? { type: !1 } : `velocity` in m ? { ...m, velocity: 0 } : m,
          ne = g ? { type: !1 } : h || m,
          M = { ...b };
        ((M.left === void 0 || M.right === void 0) && (M.width = `auto`),
          (M.top === void 0 || M.bottom === void 0) && (M.height = `auto`));
        let re = (js(s) || js(v)) && (e || n || r) ? 1200 : void 0,
          ie = { ...bb, ...A.current.origins },
          ae = e
            ? {
                initial: { ...ie, ...v },
                animate: { ...ie, ...s, transition: te },
                exit: { ...ie, ...y, transition: m },
              }
            : { animate: D, exit: { ...ie, ...y, transition: ne } },
          oe = !(ee || C === !1),
          se = !!n && oe,
          ce = n && E;
        return T(ib, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || ee || (n && x) ? S : void 0,
            pointerEvents: void 0,
            visibility: o ? `visible` : `hidden`,
            perspective: re,
          },
          children: [
            e &&
              _(ib, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: m,
                initial: { opacity: g && o ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: u || `transparent`,
                onTap: ee ? void 0 : d,
              }),
            _(ib, {
              ...M,
              ...ae,
              transition: {
                default: te,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: ee ? p : f,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!n,
              style: { pointerEvents: void 0, opacity: ce || e || (n && x) ? 1 : 0 },
              "data-is-present": oe ? void 0 : !1,
              ref: j,
              children: _(pb.Provider, {
                value: j,
                children: _(gb.Provider, {
                  value: se,
                  children: _(vb, {
                    isCurrent: se,
                    isOverlayed: i,
                    children: _(hb, {
                      isLead: n,
                      animatesLayout: !!x,
                      transition: te,
                      isExiting: !oe,
                      isOverlayed: i,
                      id: w,
                      children: l,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, ks)),
      (bb = {
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
      (xb = class {
        constructor() {
          (M(this, `warning`, () => {
            gi(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
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
      (Sb = d(new xb())),
      (Cb = {
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
      (wb = () => ({
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
      (Tb = zh(bb)),
      (Eb = f.createContext(void 0)),
      (Db = f.createContext(void 0)),
      (Ob = (() => {
        var e, t, n, r, i, a;
        class o extends v {
          constructor(n) {
            (super(n),
              L(this, t),
              L(this, e, null),
              M(this, `state`, wb()),
              L(this, i, (e) => {
                if (!this.props.enabled && this.state.history.length > 0) return;
                let t = Fs(this.state, e);
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
                if (!xe(this, t, r).call(this))
                  return (
                    _e(this, e, globalThis.event?.timeStamp || null),
                    this.state.currentOverlay === -1
                      ? I(this, i).call(this, { type: `remove` })
                      : I(this, i).call(this, { type: `removeOverlay` })
                  );
              }));
            let a = this.props.children;
            if (!a || !ga(a) || !ha(a)) return;
            let o = { ...Cb.Instant },
              s = {
                type: `add`,
                key: a.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: o,
                component: a,
              },
              c = Fs(this.state, s);
            c && (this.state = c);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let n = e.children;
            if (!ga(n) || !ha(n)) return;
            let r = n.key?.toString();
            r &&
              (this.state.history.length === 0
                ? xe(this, t, a).call(this, n, Cb.Instant)
                : I(this, i).call(this, { type: `update`, key: r, component: n }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          instant(e) {
            xe(this, t, a).call(this, e, Cb.Instant, void 0);
          }
          fade(e, n) {
            xe(this, t, a).call(this, e, Cb.Fade, n);
          }
          push(e, n) {
            xe(this, t, a).call(this, e, Ms(n), n);
          }
          modal(e, n) {
            xe(this, t, a).call(this, e, Cb.Modal, n);
          }
          overlay(e, n) {
            xe(this, t, a).call(this, e, Ns(n), n);
          }
          flip(e, n) {
            xe(this, t, a).call(this, e, Ps(n), n);
          }
          magicMotion(e, n) {
            xe(this, t, a).call(this, e, Cb.MagicMotion, n);
          }
          customTransition(e, n) {
            xe(this, t, a).call(this, e, n);
          }
          render() {
            let e = xe(this, t, n).call(this, { overCurrentContext: !1 }),
              r = xe(this, t, n).call(this, { overCurrentContext: !0 }),
              i = Xs(r),
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
                _(
                  yb,
                  {
                    id: t,
                    index: i,
                    isInitial: o,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: a,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: oc(r, e),
                    transitionProps: u,
                    animation: ac(r, e),
                    backfaceVisible: rc(r, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: _(hs, { children: cc({ component: n, transition: l?.transition }) }),
                  },
                  t
                )
              );
            }
            let c = this.state.overlayStack.map((e, t) =>
              _(
                yb,
                {
                  isLayeredContainer: !0,
                  isCurrent: t === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: nc(t, r),
                  transitionProps: ic(t, r),
                  instant: oc(t, r, !0),
                  animation: ac(t, r),
                  exitProps: e.transition.enter,
                  visible: sc(t, r),
                  backdropColor: ec(e.transition),
                  backfaceVisible: tc(t, r),
                  onTapBackdrop: lc(e.transition, this.goBack),
                  index: this.state.current + 1 + t,
                  children: cc({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return _(ib, {
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
              children: _(Sb.Provider, {
                value: this,
                children: T(Db.Provider, {
                  value: o,
                  children: [
                    _(yb, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: Zs(i),
                      animation: Qs(i),
                      backfaceVisible: $s(i),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: _(ca, {
                        children: _(sb, {
                          children: _(Ie, { presenceAffectsLayout: !1, children: s }),
                        }),
                      }),
                    }),
                    _(Ie, { children: c }),
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
            return globalThis.event ? I(this, e) === globalThis.event.timeStamp : !1;
          }),
          (i = new WeakMap()),
          (a = function (n, a, o) {
            if (
              xe(this, t, r).call(this) ||
              (_e(this, e, globalThis.event?.timeStamp || null), !n || !ga(n) || !ha(n))
            )
              return;
            let s = { ...a, ...o };
            if (s.overCurrentContext)
              return I(this, i).call(this, { type: `addOverlay`, transition: s, component: n });
            let c = n.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            I(this, i).call(this, { type: `add`, key: c, transition: s, component: n });
          }),
          M(o, `defaultProps`, { enabled: !0 }),
          M(o, `contextType`, Eb),
          o
        );
      })()),
      (kb = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (Ab = Qa(f.forwardRef(uc))),
      Ue(Ch(), 1),
      Ue(Ch(), 1),
      Ue(Ch(), 1),
      (jb = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (Mb = Symbol(`private`)),
      (Nb = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [Mb]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new J_(),
                reset() {
                  for (let t in i)
                    if (jb(i, t)) {
                      let n = jb(e, t) ? _y(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, Fb);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[Mb].reset()),
          (e.addObserver = (e, t) => e[Mb].observers.add(t)),
          e
        );
      })()),
      (Pb = class {
        constructor() {
          (M(this, `set`, (e, t, n, r) => {
            if (t === Mb) return !1;
            let i = e[Mb],
              a,
              o;
            if (
              (vi(n) ? ((a = n), (o = a.get())) : (o = n),
              i.makeAnimatables &&
                typeof n != `function` &&
                typeof n != `object` &&
                !a &&
                (a = Y_(n)),
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
              l = _y(e)[t];
            if (l !== void 0) {
              vi(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (_y(e)[t] = o));
              let n = typeof o == `object` && !!o;
              ((Array.isArray(o) || n) && (c = !0), (s = !0));
            } else (a && (n = a), (s = Reflect.set(e, t, n)));
            return (c && i.observers.notify({ value: r }), s);
          }),
            M(this, `get`, (e, t, n) => {
              if (t === Mb) return _y(e)[t];
              let r = Reflect.get(e, t, n);
              return typeof r == `function` ? r.bind(n) : r;
            }));
        }
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[Mb].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(Mb);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== Mb) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (Fb = new Pb()),
      (Ib = `opacity`),
      (Lb = (() => {
        function e(t = {}) {
          let n = Nb(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => Nb.resetObject(e));
          }),
          (e.addObserver = (e, t) => Nb.addObserver(e, t)),
          e
        );
      })()),
      (Rb = { update: 0 }),
      (zb = f.createContext({ update: NaN })),
      (Bb = class extends v {
        constructor() {
          (super(...arguments),
            M(this, `observers`, []),
            M(this, `state`, Rb),
            M(this, `taskAdded`, !1),
            M(this, `frameTask`, () => {
              (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
            }),
            M(this, `observer`, () => {
              this.taskAdded || ((this.taskAdded = !0), _v.addFrameTask(this.frameTask));
            }));
        }
        componentWillUnmount() {
          (this.observers.map((e) => e()), Lb.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            Lb._stores.forEach((e) => {
              let t = Lb.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            _(zb.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      Ue(Ch(), 1),
      (Vb = `__framer__`),
      (Hb = Vb.length),
      (Ub = f.createContext(void 0)),
      (Wb = f.createContext(void 0)),
      (Gb = `ssr-variant`),
      (Kb = `ssr-variant-group-separator`),
      (qb = f.forwardRef(function (e, t) {
        let n = Cc(t),
          r = f.useContext(Wb),
          i = f.useSyncExternalStore(Ah, Mh, jh),
          a = da(() => (i ? (Ln() ? 1 : 2) : 0)),
          o = f.useContext(Ub);
        return Ir(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, jc(t, c, i));
            case 1:
              return Ec(i, s, c, u, l, d, n, t);
            case 2:
              return Ec(i, s, c, u, l, d, Sc, void 0);
            default:
              H(a);
          }
        }, [o, r, n, e]);
      })),
      (Jb = Vv(qb, `.${Gb} { display: contents }`, `PropertyOverrides`)),
      (Yb = `default`),
      (Xb = new Set([Yb])),
      (Qb = class {
        constructor() {
          (M(this, `entries`, new Map()), L(this, Zb, {}));
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
        setHash(e, t = Yb, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return Yb;
          let n = I(this, Zb)[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (I(this, Zb)[e] = Dc(r)) : Yb;
        }
        setAll(e, t = Xb, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = Xe(n.transformTemplate) ? n.transformTemplate?.({}, ex) : void 0,
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
      (Zb = new WeakMap()),
      ($b = new Qb()),
      (ex = `__Appear_Animation_Transform__`),
      (tx = `data-framer-appear-id`),
      (nx = `data-framer-appear-animation`),
      (rx = (e) => {
        if (so())
          return {
            animate: Nc(e.animate) ? e.animate : void 0,
            initial: Nc(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (ix = [
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
      (ax = (e) => ({
        x: ae(e?.x ?? 0),
        y: ae(e?.y ?? 0),
        opacity: ae(e?.opacity ?? 1),
        scale: ae(e?.scale ?? 1),
        rotate: ae(e?.rotate ?? 0),
        rotateX: ae(e?.rotateX ?? 0),
        rotateY: ae(e?.rotateY ?? 0),
        skewX: ae(e?.skewX ?? 0),
        skewY: ae(e?.skewY ?? 0),
        transformPerspective: ae(e?.transformPerspective ?? 0),
      })),
      (ox = {
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
      (sx = { willChange: `transform` }),
      Object.freeze(sx),
      (cx = {}),
      Object.freeze(cx),
      (lx = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (ux = () => {
        let e = t();
        return (
          a(
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
      (dx = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (fx = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (px = 1),
      (mx = 4),
      (hx = new Set([
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
      (gx = [`animate`, `animate`]),
      (_x = { inputRange: [], outputRange: [] }),
      (vx = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (yx = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (bx = () => ({
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
      (xx = [0, 1]),
      (Sx = { parallax: dx, styleAppear: hx, styleTransform: vx, loop: lx, presence: fx }),
      (Cx = zh(Sx)),
      (wx = (e) => e.reduce((e, t) => (e += t), 0)),
      (Tx = (e) => e.reduce((e, t) => (e *= t), 1)),
      (Ex = `current`),
      (Dx = (e) =>
        f.forwardRef((t, n) => {
          if (t.__withFX)
            return _(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let r = rx(t);
          if (r) return _(e, { ...t, ...r, ref: n });
          let {
              parallax: i = {},
              styleAppear: a = {},
              styleTransform: o = {},
              presence: s = {},
              loop: c = {},
              forwardedProps: l,
              targetOpacityValue: u,
              withPerspective: d,
              inSmartComponent: p = !1,
            } = nl(t),
            m = ys(n),
            { values: h, style: g } = Hc(s, m, p, t.style, t[Ke]),
            { values: v, style: y } = Rc(i, m, t.style?.visibility),
            { values: b, style: x } = el(o, m),
            { values: S, style: C } = Xc(a, m),
            { values: w, style: T } = Ic(c, m),
            E = f.useMemo(() => {
              let e = new He(u ?? 1);
              return {
                scale: [S.scale, w.scale, h.scale, b.scale],
                opacity: [S.opacity, w.opacity, h.opacity, e, b.opacity],
                x: [S.x, w.x, h.x, b.x],
                y: [S.y, w.y, v.y, h.y, b.y],
                rotate: [S.rotate, w.rotate, h.rotate, b.rotate],
                rotateX: [S.rotateX, w.rotateX, h.rotateX, b.rotateX],
                rotateY: [S.rotateY, w.rotateY, h.rotateY, b.rotateY],
                skewX: [S.skewX, w.skewX, h.skewX, b.skewX],
                skewY: [S.skewY, w.skewY, h.skewY, b.skewY],
                transformPerspective: [b.transformPerspective, S.transformPerspective],
              };
            }, [u, b, v, S, w, h]);
          il(t.style, E);
          let D = F(E.scale, Tx),
            O = F(E.opacity, Tx),
            k = F(E.x, wx),
            A = F(E.y, wx),
            j = F(E.rotate, wx),
            ee = F(E.rotateX, wx),
            te = F(E.rotateY, wx),
            ne = F(E.skewX, wx),
            M = F(E.skewY, wx),
            re = F(E.transformPerspective, wx),
            { drag: ie, dragConstraints: ae } = l;
          Ro(ie && rl(ae) ? ae : void 0);
          let oe = {
            opacity: O,
            scale: D,
            x: k,
            y: A,
            rotate: j,
            rotateX: ee,
            rotateY: te,
            skewX: ne,
            skewY: M,
          };
          et(d) && (oe.transformPerspective = re);
          let se = al(t.animate) ? t.animate : void 0,
            ce = al(t.initial) ? t.initial : void 0,
            le = al(t.exit) ? t.exit : void 0,
            ue = p && !s.presenceInitial ? { initial: ce, animate: se, exit: le } : {};
          return _(e, {
            ...l,
            ...ue,
            __withFX: !0,
            style: { ...t.style, ...y, ...x, ...T, ...oe, ...C, ...g },
            values: h,
            ref: m,
          });
        })),
      (Ox = f.createContext({})),
      (kx = f.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = f.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = Cc(a);
        return _(Ox.Provider, { value: o, children: s(r, i) });
      })),
      (Ax = (e) =>
        f.forwardRef((t, n) =>
          _(e, { layoutId: Io(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (jx = !1),
      (Mx = class extends v {
        constructor() {
          (super(...arguments), M(this, `state`, { error: void 0 }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!sl(e)) return;
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
              lt(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          cn(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!sl(e)) throw e;
          return ((jx = !0), this.props.children);
        }
      }),
      (Nx = m === void 0 ? null : new Promise(() => {})),
      (Px = _(cl, {})),
      (Fx = d(!1)),
      (Fx.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (Ix = _(ul, {})),
      (Lx = class extends v {
        constructor() {
          (super(...arguments), M(this, `state`, { hasError: !1 }));
        }
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (fl(this.props.getErrorMessage(), t?.componentStack), dl(e, t));
        }
        render() {
          let { children: e, fallback: t = Ix } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (Rx = class extends v {
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
            dl(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (zx = f.createContext(void 0)),
      (Bx = `code-crash:`),
      (Vx = Ax(
        f.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            ...c
          },
          l
        ) {
          let u = da(() => (t ? `${t}-container` : void 0)),
            d = Ao(n),
            p = El(
              f.Children.map(e, (e) =>
                f.isValidElement(e) ? f.cloneElement(e, { layoutId: t }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return _(d, {
            layoutId: u,
            ...c,
            ref: l,
            children: _(Py.Provider, {
              value: !0,
              children: _(l_.Provider, {
                value: i ?? null,
                children: _(ua, {
                  enabled: !1,
                  children: _(Ve, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: p }),
                }),
              }),
            }),
          });
        })
      )),
      (Hx = f.forwardRef(function (e, t) {
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
          d = El(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = Ao(f);
          return _(l_.Provider, {
            value: a ?? null,
            children: _(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return _(l_.Provider, {
            value: a ?? null,
            children: _(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (Ux = d({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (Wx = `framer-cursor-none`),
      (Gx = `framer-pointer-events-none`),
      (Kx = b(function ({ children: e }) {
        let t = da(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = Dl(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = Ye();
        return T(Ux.Provider, { value: t, children: [e, !n && _(Xx, {})] });
      })),
      (qx = Vv(
        Kx,
        [
          `.${Wx}, .${Wx} * { cursor: none !important; }`,
          `.${Gx}, .${Gx} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (Jx = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (Yx = `data-framer-portal-id`),
      (Xx = b(function () {
        let { onRegisterCursors: e } = c(Ux),
          [n, i] = s(!1),
          o = de(0),
          l = de(0),
          d = de(0),
          f = t(null),
          p = t({ cursors: {}, cursorHash: void 0 }),
          m = Lo();
        (r(() => {
          let e = q.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? A(() => i(!1)) : i(!0);
          }
          return (
            e.addEventListener(`change`, t),
            e.matches || i(!0),
            () => {
              e.removeEventListener(`change`, t);
            }
          );
        }, []),
          a(() => {
            if (!n) return;
            let e = 0,
              t = 0;
            function r() {
              (o.set(e), l.set(t), Oe(d, 1, { type: `tween`, duration: 0.2 }));
            }
            let i = () => {
              if ($e(p.current.cursors)) return;
              let n = jl(e, t);
              n !== p.current.cursorHash && ((p.current.cursorHash = n), Ae.update(() => m()));
            };
            function a(n) {
              if (n.pointerType === `touch`) {
                Fe(i);
                return;
              }
              (Ae.read(i, !0), (e = n.clientX), (t = n.clientY), Ae.update(r));
            }
            function s(e) {
              if (e.target === f.current || !f.current) return;
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
              Ae.update(() => {
                f.current?.dispatchEvent(t);
              });
            }
            return (
              q.addEventListener(`pointermove`, a),
              document.addEventListener(`pointerdown`, s),
              document.addEventListener(`pointerup`, s),
              Ae.read(i, !0),
              () => {
                (q.removeEventListener(`pointermove`, a),
                  document.removeEventListener(`pointerdown`, s),
                  document.removeEventListener(`pointerup`, s),
                  Fe(i));
              }
            );
          }, [d, o, l, m, n]),
          a(() => {
            if (!n) return;
            function e() {
              Oe(d, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              q.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), q.removeEventListener(`blur`, e));
              }
            );
          }, [d, n]),
          r(() => {
            function t(e) {
              ((p.current.cursors = e),
                (p.current.cursorHash = $e(e) ? null : jl(o.get(), l.get())),
                m());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(Wx, !1));
            };
          }, [o, l, e, m]));
        let { cursors: h, cursorHash: g } = p.current,
          v = g ? h[g] : null,
          y = Ol(v);
        r(() => {
          n && document.body.classList.toggle(Wx, y);
        }, [y, n]);
        let b = v?.component,
          x = v?.transition ?? { duration: 0 },
          S = x.duration === void 0 ? x : { ...x, duration: x.duration * 1e3 },
          C = ue(o, S),
          w = ue(l, S),
          T = F(() => C.get() + (v?.offset?.x ?? 0)),
          D = F(() => w.get() + (v?.offset?.y ?? 0)),
          O = v?.alignment,
          k = v?.placement,
          j = u((e, t) => `translate(${Al(k, O)}) ${t}`, [O, k]);
        return !n || !v || !b
          ? null
          : _(E, {
              children: _(b, {
                transformTemplate: j,
                style: { ...Jx, x: T, y: D, opacity: d },
                globalTapTarget: !0,
                variant: v?.variant,
                ref: f,
                className: Gx,
              }),
            });
      })),
      (Zx = `webPageId`),
      (Qx = class {
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
          if ((Eh && !zn()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(Pl(e), e), this.collectedLinks.set(Pl(t), t));
          let n = this.nestingInfo.get(Pl(e)) ?? new Set();
          (n.add(Pl(t)), this.nestingInfo.set(Pl(e), n));
        }
      }),
      ($x = new Qx()),
      (eS = `element`),
      (tS = `collection`),
      (nS = `collectionItemId`),
      (rS = `pathVariables`),
      (iS = `framer/page-link,`),
      (aS = d(void 0)),
      (oS = `overlay`),
      (sS = `template-overlay`),
      (cS = f.forwardRef(function ({ Component: e, ...t }, n) {
        return e ? _(e, { ...t, ref: n }) : null;
      })),
      (lS = class extends v {
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
            ((m.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(lt(Dh ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          cn(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (Dh && document.getElementById(`main`)?.innerHTML) || ``;
          return _(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${lt()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (uS = /:([a-z]\w*)/gi),
      (dS = d(void 0)),
      (fS = 500),
      (pS = 0.9),
      (mS = 1.7),
      (hS = 4),
      (gS = 1 / 0),
      (_S = new WeakMap()),
      (vS = new Set()),
      (yS = new Map()),
      (bS = !Sg || typeof IntersectionObserver > `u` ? null : ru()),
      (xS = Zl(
        h(function (
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
            motionChild: u,
            ...d
          },
          f
        ) {
          let p = At(),
            m = Mt(),
            h = tu(),
            { activeLocale: g, locales: _ } = Rr(),
            v = lu(),
            b = Tn(),
            x = Fl(),
            S = uu({ nodeId: s, clickTrackingId: i, router: p, href: t, activeLocale: g }),
            C = l(() => {
              if (!t) return {};
              let e = Nl(t) ? t : Hl(t);
              if (!e) return {};
              if (R(e))
                return mu(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: n,
                    trackLinkClick: S,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  b,
                  g?.id,
                  _,
                  h
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = v(i, s, g);
              if (ot(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: y,
                } = Ql(p, m, e, g, c, h),
                x = au(n, !0),
                C = x === `_blank`,
                w = { pathVariables: f, locale: y },
                T = (e) => fu(p, l, () => b(l, w, !1, !C), d, f, r, e);
              return {
                href: u,
                target: x,
                onClick: pu(u, S, T),
                "data-framer-page-link-current": (m && nu(m, e, h)) || void 0,
                navigate: T,
                preload: () => b(l, w, !0, !C),
                _routeId: l,
                _pathVariables: f,
                _locale: y,
              };
            }, [t, p, g, h, n, m, r, S, a, _, o, v, b]),
            w = ys(y(e) && `ref` in e ? e.ref : void 0),
            { navigate: T, preload: E, _routeId: D, _pathVariables: O, _locale: k, ...A } = C;
          bs(
            w,
            (e) => {
              if (!(e === null || !D || !E || x))
                return bS?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`);
            },
            [E, D, O, k]
          );
          let j = !!T;
          return Wl(
            Cc(f).cloneAsArray(e, (e) => hu(e, { ...d, ..._u(A, u, j) }, w)),
            c,
            s,
            t,
            C,
            w
          );
        })
      )),
      (SS = f.createContext(void 0)),
      (CS = `__framer_force_showing_editorbar_since`),
      (wS = class extends v {
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
      (TS = () => {
        try {
          return !!localStorage[CS];
        } catch {
          return !1;
        }
      }),
      (ES = () => !TS()),
      (DS = (() => {
        let e = d(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (OS = `main`),
      (kS = `framerGeneratedPage`),
      (AS = `<!-- Start of headStart -->`),
      (jS = `<!-- End of headStart -->`),
      (MS = `<!-- Start of headEnd -->`),
      (NS = `<!-- End of headEnd -->`),
      (PS = `<!-- Start of bodyStart -->`),
      (FS = `<!-- End of bodyStart -->`),
      (IS = `<!-- Start of bodyEnd -->`),
      (LS = `<!-- End of bodyEnd -->`),
      (RS = f.createContext(void 0)),
      (zS = null),
      (BS = null),
      kh(zu),
      (VS = (e, n, r, i, o, s) => {
        let l = c(SS),
          u = t(),
          d = vn(),
          f = t(!0);
        return (
          a(() => {
            function t() {
              (!zS || !BS) && zu();
              let t = r ? new URL(q.location.origin + r) : q.location,
                a = {
                  version: lg,
                  abTestId: e?.abTestId,
                  framerSiteId: l ?? null,
                  webPageId: e?.abTestingVariantId ?? n,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: o?.code || null,
                  referrer: null,
                  url: t.href,
                  hostname: t.hostname,
                  pathname: t.pathname,
                  search: t.search || null,
                  hash: t.hash || null,
                  timezone: zS,
                  locale: BS,
                },
                c = f.current && s !== void 0 ? s : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = c ?? null;
                    if (c === void 0) {
                      let n = e.collectionId && d?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && R(r)) {
                        let e = n.getRecordIdBySlug(r, o || void 0);
                        t = (ot(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...a, collectionItemId: t };
                  })()
                : a;
            }
            (async () => {
              let e = (u.current = t()),
                n = e instanceof Promise ? await e : e;
              ((u.current = n),
                f.current ? (f.current = !1) : cn(`published_site_pageview`, n, `eager`));
            })();
            let a = async (e) => {
              if (e.persisted) {
                let e = (u.current = t()),
                  n = e instanceof Promise ? await e : e;
                ((u.current = n), cn(`published_site_pageview`, n, `eager`));
              }
            };
            return (
              m.addEventListener(`pageshow`, a),
              () => {
                m.removeEventListener(`pageshow`, a);
              }
            );
          }, [e, n, r, i, o, l, d, s]),
          u
        );
      }),
      (HS = { status: `loading`, data: void 0 }),
      (US = 5e3),
      (WS = () => {}),
      (ZS = class e {
        constructor() {
          (M(this, `responseValues`, new Map()),
            L(this, GS, new Map()),
            L(this, KS, new Set()),
            L(this, qS, new Map()),
            L(this, JS, new Map()),
            L(this, YS, new Map()),
            L(this, XS, new Map()),
            M(
              this,
              `persistCache`,
              vc(() => {
                let t = {};
                for (let [e, n] of this.responseValues) {
                  if (!n || n.status !== `success`) continue;
                  let r = I(this, qS).get(e);
                  if (!r || r === 0) continue;
                  let i = I(this, JS).get(e);
                  i && ((i && td(i, r)) || (t[e] = [i, r, n.data]));
                }
                try {
                  localStorage.setItem(e.cacheKey, JSON.stringify(t));
                } catch {}
              }, 500)
            ));
        }
        unmount() {
          for (let [e, t] of I(this, XS)) (clearInterval(t), I(this, XS).delete(e));
        }
        stopQueryRefetching(e) {
          let t = Zu(e),
            n = I(this, XS).get(t);
          n && (clearInterval(n), I(this, XS).delete(t));
        }
        startQueryRefetching(e) {
          let t = Zu(e),
            n = I(this, XS).get(t),
            r = I(this, qS).get(t);
          if (n || !r) return;
          let i = q.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = I(this, JS).get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          I(this, XS).set(t, i);
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
              td(r, i) ||
                (I(this, JS).set(e, r),
                I(this, qS).set(e, i),
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
          let n = I(this, GS).get(e);
          if (n) for (let e of n) e();
        }
        async prefetch(e) {
          if (!Ln() || !Ll(e.url, !1)) return;
          let t = Zu(e);
          (I(this, KS).add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = I(this, GS).get(t);
          for (let e of r ?? []) e();
          let i = ed(n, e);
          return (e.resultOutputType === `image` && R(i) && (await Ju(i).catch(WS)), i);
        }
        async fetchWithCache(e) {
          if (!Ln()) return;
          let t = Zu(e),
            n = I(this, YS).get(t);
          if (n) return n;
          let r = I(this, JS).get(t),
            i = r && td(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, HS);
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
                I(this, JS).set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            I(this, YS).set(t, a),
            a.finally(() => {
              I(this, YS).delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !I(this, KS).has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!Ll(r, !1)) return WS;
          let a = Zu(e),
            o = I(this, qS).get(a);
          ((!o || i < o) && I(this, qS).set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = I(this, GS).get(a) ?? new Set();
          return (
            s.add(t),
            I(this, GS).set(a, s),
            () => {
              let n = I(this, GS).get(a);
              n &&
                (n.delete(t),
                n.size === 0 && I(this, GS).delete(a),
                I(this, GS).size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (GS = new WeakMap()),
      (KS = new WeakMap()),
      (qS = new WeakMap()),
      (JS = new WeakMap()),
      (YS = new WeakMap()),
      (XS = new WeakMap()),
      M(ZS, `cacheKey`, `framer-fetch-client-cache`),
      (QS = ZS),
      ($S = d(void 0)),
      (eC = d(!0)),
      (tC = ({ children: e, client: t }) => {
        let [n] = s(() => t ?? new QS()),
          [r, i] = s(!0);
        return (
          a(
            () => (
              n.hydrateCache(),
              A(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          _(eC.Provider, { value: r, children: _($S.Provider, { value: n, children: e }) })
        );
      }),
      (Re.WillChange = We),
      (nC = Zl(
        h(function ({ links: e, children: t, ...n }, r) {
          let i = At(),
            { activeLocale: a } = Rr(),
            o = Cc(r),
            s = lu(),
            c = [],
            l = e.map((e) => {
              if (e)
                return R(e)
                  ? yu(e, i, void 0, void 0, a)
                  : yu(e.href, i, e.implicitPathVariables, e.refKey, a, (e, t) => s(e, t, a, c));
            });
          if (c.length > 0) throw Promise.allSettled(c);
          return o(t(l), n);
        })
      )),
      (Z = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return gd(e, t);
            case `boolean`:
              return vd(e);
            case `color`:
              return xd(e);
            case `date`:
              return Cd(e);
            case `enum`:
              return Td(e);
            case `file`:
              return Dd(e);
            case `link`:
              return kd(e);
            case `number`:
              return jd(e);
            case `object`:
              return Pd(e, t);
            case `responsiveimage`:
              return Id(e);
            case `richtext`:
              return Rd(e);
            case `string`:
              return Hd(e);
            case `vectorsetitem`:
              return Bd(e);
            case `unknown`:
              return e;
            default:
              H(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Ze(e)
            ? { type: `boolean`, value: e }
            : rt(e)
              ? { type: `date`, value: e.toISOString() }
              : z(e)
                ? { type: `number`, value: e }
                : R(e)
                  ? { type: `string`, value: e }
                  : Qe(e)
                    ? { type: `array`, value: e.map(Z.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && Wd(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && Wd(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && Wd(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && Wd(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && Wd(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => Z.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => Z.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = Ud(e),
            i = Ud(t);
          return tt(r) || tt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = Ud(e),
            i = Ud(t);
          return tt(r) || tt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = Ud(e),
            i = Ud(t);
          return tt(r) || tt(i)
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
      (rC = { type: `unknown`, isNullable: !0 }),
      (iC = class {
        constructor(e, t) {
          (M(this, `collection`, e),
            M(this, `locale`, t),
            M(this, `schema`),
            M(this, `indexes`, []));
          let n = oo(e);
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
            if (nt(i)) continue;
            let a = this.schema[t];
            if (!et(a)) {
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
            r = (await Gd(this.collection, this.locale))[t]?.[n];
          return Kh.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems() {
          return (await Gd(this.collection, this.locale)).map((e, t) => {
            let n = String(t);
            return this.getDatabaseItem(e, n);
          });
        }
        async resolveItems(e) {
          let t = await Gd(this.collection, this.locale);
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
      (aC = new Map()),
      (oC = new WeakMap()),
      (sC = `$r_`),
      (cC = new Map()),
      (lC = 1e3),
      (Q = class e {
        constructor(e) {
          M(this, `network`, e);
        }
        static estimate(t, n) {
          let r = Yd(),
            i = Xd(),
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
      (uC = class {
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
          let r = new dC();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          V(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (dC = class {
        constructor() {
          (M(this, `node`), M(this, `cost`, new Q(1 / 0)), M(this, `nodes`, []));
        }
        update(e, t) {
          (this.nodes.push(e), Q.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (fC = class {
        constructor(e) {
          M(this, `isSynchronous`, e);
        }
      }),
      (pC = class extends fC {
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
          return id(this.evaluate(void 0));
        }
        evaluateAsync() {
          return ad(this.evaluate(void 0));
        }
      }),
      (mC = class {
        constructor(e, t, n = {}) {
          (M(this, `options`, n),
            M(this, `collections`),
            M(this, `richTextCache`, new WeakMap()),
            M(this, `vectorSetItemCache`, new WeakMap()),
            (this.collections = af(e, t)));
        }
        *resolveArrayValue(e) {
          return yield* sd(e.value.map((e) => this.resolveValue(e)));
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
          V(tf(t), `Rich text pointer must be wrapped`);
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
          return at(t) ? yield t : t;
        }
        loadVectorSetItemValue(e) {
          let t = e.value;
          V(rf(t), `Vector set item pointer must be wrapped`);
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
          return at(t) ? yield t : t;
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
      (hC = `index`),
      (gC = class extends Set {
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
      (_C = class {
        constructor(e, t, n) {
          (M(this, `id`, e),
            M(this, `name`, t),
            M(this, `data`, n),
            M(this, `indexes`, new yC()),
            M(this, `fields`, new $()));
        }
      }),
      (vC = class {
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
      (yC = class extends gC {
        constructor() {
          (super(...arguments), M(this, `name`, `Indexes`));
        }
      }),
      (bC = class {
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
                { type: `richtext`, value: ef(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                V(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: nf(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      ($ = class extends gC {
        constructor() {
          (super(...arguments), M(this, `name`, `Fields`));
        }
      }),
      (xC = class {
        constructor(e, t = `asc`) {
          (M(this, `field`, e), M(this, `direction`, t));
        }
        getHash() {
          return K(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (SC = class {
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
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== hC) return !1;
          return !0;
        }
      }),
      (CC = class {
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
      (wC = class e {
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
          return this.ordering ?? new SC();
        }
        getRequiredResolvedFields() {
          let e = new $();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new CC(this.getRequiredOrdering(), this.getRequiredResolvedFields());
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
      (TC = class {
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
      (EC = class e {
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
      (DC = class {
        constructor(e, t) {
          (M(this, `input`, e), M(this, `field`, t));
        }
        getHash() {
          return K(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (OC = class e extends pC {
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
          return new CC(e.ordering, t);
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
            i = this.projections.map((e) => new DC(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* sd(
              n.tuples.map((t) =>
                sd(
                  this.projections.map((n) => G({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new TC();
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
      (kC = { type: 0 }),
      (AC = class extends fC {
        constructor(e, t, n) {
          (super(n),
            M(this, `referencedFields`, e),
            M(this, `referencedOuterFields`, t),
            M(this, `isSynchronous`, n));
        }
        evaluateSync() {
          return id(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return ad(this.evaluate(void 0, void 0));
        }
      }),
      (jC = { type: 0 }),
      (MC = class {
        constructor(e, t) {
          (M(this, `when`, e), M(this, `then`, t));
        }
        getHash() {
          return K(`CaseCondition`, this.when, this.then);
        }
      }),
      (NC = class e extends AC {
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
            n = this.conditions.map((e) => new MC(e.when.getOptimized(), e.then.getOptimized())),
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
            conditions: sd(
              this.conditions.map((n) =>
                G({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (Z.equal(n, e, jC)) return t;
          } else for (let { when: e, then: t } of r) if (yd(e)) return t;
          return i;
        }
      }),
      (PC = class {
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
          let e = new wC();
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
            o = new SC();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (et(t)) continue;
                a.add(t.field);
                let r = new xC(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new bC(cf(this.fieldId++), void 0, t.definition, void 0),
                  a = new DC(t, r);
                i.push(a);
                let s = new xC(r, e.direction);
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
              if (et(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              V(n.alias, `Subqueries should have an alias`);
              let r = cf(this.fieldId++),
                a = n.alias,
                s = new bC(r, a, t.definition, void 0),
                c = new DC(t, s);
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
            r = Jd(t.data, this.locale),
            i = t.alias,
            a = new _C(of(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new bC(cf(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.fields.add(r));
          }
          {
            let e = new bC(cf(this.fieldId++), hC, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: hC, collectionName: i });
            let t = new SC(),
              r = new xC(e);
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
            let i = new SC(),
              o = new vC(sf(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new SC(),
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
          return this.normalizer.newScalarConstant(rC, null);
        }
        buildLiteralValue(e) {
          let t = Z.parse(e.value);
          return this.normalizer.newScalarConstant(rC, t);
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
            let n = new FC(e);
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
            let n = new FC(e);
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
              (t) => new MC(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
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
      (FC = class {
        constructor(e) {
          (M(this, `inScope`, e),
            M(this, `referencedFields`, new $()),
            M(this, `referencedOuterFields`, new $()));
        }
      }),
      (IC = class e extends pC {
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
          return (t.merge(this.predicate.referencedFields), new CC(e.ordering, t));
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
            n = yield* sd(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => yd(n[t] ?? null));
        }
      }),
      (LC = class e extends pC {
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
          return Q.estimate(1, e ? 100 * lC : 50 * lC);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection;
          return new EC(
            this.getOutputFields(),
            (yield e.data.lookupItems(this.query)).map((n) => {
              let r = new TC();
              for (let i of e.resolvedFields) {
                let e = i.getValue(n);
                (r.addPointer(t, n.pointer), r.addValue(i, e));
              }
              return r;
            })
          );
        }
      }),
      (RC = class e extends pC {
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
          return new CC(new SC(), e.resolvedFields);
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
      (zC = class e extends pC {
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
          return Q.estimate(1, 200 * lC);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields();
          return new EC(
            t,
            (yield e.data.scanItems()).map((n) => {
              let r = new TC();
              for (let i of t) {
                let t = i.getValue(n);
                (r.addPointer(e, n.pointer), r.addValue(i, t));
              }
              return r;
            })
          );
        }
      }),
      (BC = class e extends pC {
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
          return new CC(new SC(), e.resolvedFields);
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
      (VC = class e extends AC {
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
          return { type: `boolean`, value: yd(n) && yd(r) };
        }
      }),
      (HC = class extends AC {
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
      (UC = { type: 0 }),
      (WC = class e extends AC {
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
          return { type: `boolean`, value: Z.contains(n, r, UC) };
        }
      }),
      (GC = { type: 0 }),
      (KC = class e extends AC {
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
          return { type: `boolean`, value: Z.endsWith(n, r, GC) };
        }
      }),
      (qC = class e extends AC {
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
          return { type: `boolean`, value: Z.equal(n, r, kC) };
        }
      }),
      (JC = class e extends AC {
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
          return { type: `boolean`, value: Z.greaterThan(n, r, kC) };
        }
      }),
      (YC = class e extends AC {
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
          return { type: `boolean`, value: Z.greaterThanOrEqual(n, r, kC) };
        }
      }),
      (XC = class e extends AC {
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
          return { type: `boolean`, value: Z.lessThan(n, r, kC) };
        }
      }),
      (ZC = class e extends AC {
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
          return { type: `boolean`, value: Z.lessThanOrEqual(n, r, kC) };
        }
      }),
      (QC = class e extends AC {
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
          return { type: `boolean`, value: !Z.equal(n, r, kC) };
        }
      }),
      ($C = class e extends AC {
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
          return { type: `boolean`, value: yd(n) || yd(r) };
        }
      }),
      (ew = { type: 0 }),
      (tw = class e extends AC {
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
          return { type: `boolean`, value: Z.startsWith(n, r, ew) };
        }
      }),
      (nw = class {
        constructor(e) {
          (M(this, `normalizer`, e), M(this, `memo`), (this.memo = e.memo));
        }
        explore(e) {
          let t = e.getGroup();
          if (e instanceof IC) {
            if (e.predicate instanceof VC) {
              let n = new RC(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof $C) {
              let n = new BC(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof zC)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new LC(n, lf(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof IC) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof zC)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof qC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof HC &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = lf(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new LC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof QC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof HC &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = lf(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new LC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof XC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof HC &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = lf(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new LC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ZC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof HC &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = lf(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new LC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof JC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof HC &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = lf(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new LC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof YC &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof HC &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = lf(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new LC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof WC &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof HC &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = lf(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new LC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof tw &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof HC &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = lf(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new LC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof KC &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof HC &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = lf(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new LC(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (rw = class {
        constructor(e) {
          M(this, `outputFields`, e);
        }
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (iw = class {
        constructor() {
          (M(this, `nodes`, new Map()), M(this, `groups`, []));
        }
        addGroup(e) {
          let t = new uC(Zd(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new rw(e.getOutputFields());
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
      (aw = class e extends pC {
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
          return new CC(new SC(), n);
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
          let o = new EC(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new TC();
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
          if (this.constraint instanceof qC) {
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
          let r = new EC(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new TC();
              (n.merge(i),
                n.merge(a),
                yd(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (ow = class e extends pC {
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
          return (t.merge(this.limit.referencedFields), new CC(this.ordering, t));
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
            r = Md(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (sw = class e extends pC {
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
          return (t.merge(this.offset.referencedFields), new CC(this.ordering, t));
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
            r = Md(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (cw = class e extends AC {
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
          for (let n of t) et(n.collection) || e.add(n);
          return new CC(this.ordering, e);
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
          let n = new TC();
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
      (lw = class e extends AC {
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
      (uw = class e extends AC {
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
          return (et(this.field.collection) || e.add(this.field), new CC(this.ordering, e));
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
          let n = new TC();
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
      (dw = { type: 0 }),
      (fw = class e extends AC {
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
          return { type: `boolean`, value: Z.in(n, r, dw) };
        }
      }),
      (pw = { type: 1 }),
      (mw = class e extends AC {
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
          return { type: `number`, value: Z.indexOf(n, r, pw) };
        }
      }),
      (hw = class e extends AC {
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
            i = df(n),
            a = df(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (gw = class e extends AC {
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
      (_w = class e extends AC {
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
          return { type: `boolean`, value: !yd(yield* this.input.evaluate(e, t)) };
        }
      }),
      (vw = { type: 0 }),
      (yw = class e extends AC {
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
          return { type: `boolean`, value: !Z.in(n, r, vw) };
        }
      }),
      (bw = class extends AC {
        constructor(e, t) {
          V(e.name !== hC, `Invalid field name`);
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
      (xw = class {
        constructor(e) {
          M(this, `memo`, e);
        }
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new zC(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new LC(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new aw(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof HC && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof aw && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new IC(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new OC(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof OC &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new ow(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new sw(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof HC) &&
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
          let n = new bw(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new HC(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof _w)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof qC) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof QC) return this.newScalarEquals(e.left, e.right);
          if (e instanceof XC) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof ZC) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof JC) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof YC) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof VC) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof $C) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new _w(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof HC && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof HC && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof HC && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof HC && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new VC(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof HC && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof HC && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof HC && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof HC && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new $C(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof bw;
          if (t instanceof bw && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new qC(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof bw;
          if (t instanceof bw && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new QC(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof bw;
          if (t instanceof bw && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new XC(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof bw;
          if (t instanceof bw && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new ZC(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof bw;
          if (t instanceof bw && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new JC(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof bw;
          if (t instanceof bw && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new YC(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new fw(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new yw(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new MC(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new NC(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new WC(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new tw(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new KC(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new gw(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new mw(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new cw(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new uw(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new hw(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new lw(e, t);
          return this.finishScalar(n);
        }
      }),
      (Sw = class extends pC {}),
      (Cw = class e extends Sw {
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
          return new CC(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return Q.estimate(0, 100 * lC).add(r);
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
          for (let e of t.tuples) for (let t of this.fields) ff(e.getValue(t), this.resolver);
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
            let t = new TC();
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
      (ww = { type: 0 }),
      (Tw = class e extends Sw {
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
            e.name !== hC && (et(e.collection) || t.add(e));
          return new CC(new SC(), t);
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
              if (n.name === hC) {
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
              if (!Z.equal(a, o, ww)) {
                if (tt(a) || Z.lessThan(a, o, ww)) return i ? -1 : 1;
                if (tt(o) || Z.greaterThan(a, o, ww)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (Ew = class {
        constructor(e, t, n) {
          (M(this, `query`, e),
            M(this, `locale`, t),
            M(this, `resolver`, n),
            M(this, `memo`, new iw()),
            M(this, `normalizer`, new xw(this.memo)),
            M(this, `explorer`, new nw(this.normalizer)));
        }
        optimize() {
          let e = new PC(this.normalizer, this.query, this.locale).build(),
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
            let r = new Cw(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new Tw(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (Dw = rd(`query-engine`)),
      (Ow = class {
        async evalQuery(e, t, n, r = {}) {
          Dw.enabled &&
            Dw.debug(`Query:
${Tf(e)}`);
          let i = new mC(e, t, r),
            [a, o] = new Ew(e, t, i).optimize(),
            s = await a.evaluateAsync(),
            c = Object.entries(o),
            l = [],
            u = od(
              sd(
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
          return n ? [ot(u) ? await u : u, l] : u;
        }
        async serializeableQuery(e, t) {
          return this.evalQuery(e, t, !0);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n) {
          let r = new mC(t, n);
          return od(
            sd(
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
      (kw = `style[data-framer-breakpoint-css]`),
      (Aw = new Map()),
      (jw = `page`),
      (Mw = Symbol(`cycle`)),
      (Fw = (() => {
        let e = d(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (Iw = new Set([
        `visibleVariantId`,
        `obscuredVariantId`,
        `threshold`,
        `animateOnce`,
        `variantAppearEffectEnabled`,
        `targets`,
        `exitTarget`,
        `scrollDirection`,
      ])),
      (Lw = { inputRange: [], outputRange: [] }),
      (Rw = (e) =>
        f.forwardRef((t, n) => {
          if (Y.current() === Y.canvas) return _(e, { ...t, ref: n });
          let [r, i] = bc(t, Iw),
            {
              visibleVariantId: a,
              obscuredVariantId: o,
              animateOnce: s,
              threshold: c,
              variantAppearEffectEnabled: l,
              targets: u,
              exitTarget: d,
              scrollDirection: p,
            } = r,
            [m, h] = f.useState(o),
            g = f.useRef(!1),
            v = ys(n);
          Cs(
            v,
            (e) => {
              r.targets ||
                r.scrollDirection ||
                (s && g.current === !0) ||
                (g.current !== e &&
                  ((g.current = e),
                  f.startTransition(() => {
                    h(e ? a : o);
                  })));
            },
            { enabled: l, animateOnce: s, threshold: { y: c } }
          );
          let y = Nt(),
            b = f.useRef(y);
          return (
            f.useEffect(() => {
              if (p || !u) return;
              b.current !== y && ((b.current = y), f.startTransition(() => h(o)));
              let e = {},
                t;
              return se((n, { y: r }) => {
                if (!u[0] || (u[0].ref && !u[0].ref.current)) return;
                let { inputRange: i, outputRange: a } = ap(u, (c ?? 0) * r.containerLength, d);
                if (i.length === 0 || i.length !== a.length) return;
                let o = Math.floor(Ne(r.current, i, a));
                if (s && e[o]) return;
                e[o] = !0;
                let l = u[o]?.target ?? void 0;
                l !== t &&
                  ((t = l),
                  f.startTransition(() => {
                    h(l);
                  }));
              });
            }, [y, s, c, u, t.variant, p, d]),
            Kc(p, (e) => f.startTransition(() => h(e)), { enabled: l, repeat: !s }),
            Pt(() => {
              if (!l) return;
              let e = !r.targets && !r.scrollDirection ? r.obscuredVariantId : void 0;
              f.startTransition(() => h(e));
            }),
            !(`variantAppearEffectEnabled` in r) || l === !0
              ? _(e, { ...i, variant: m ?? t.variant, ref: v })
              : _(e, { ...i })
          );
        })),
      (zw = f.createContext(void 0)),
      (Bw = () => f.useContext(zw)),
      (Vw = {
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
      (Hw = {
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
      (Uw = Vw),
      (Ww = `System Default`),
      (Gw = class {
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
          for (let t of Object.keys(Uw)) {
            let n = Uw[t];
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
          for (let [e, t] of Object.entries(Hw)) this.addFontAlias(e, t);
          let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
          this.addFontFamily(t);
          for (let [e, t] of n) this.addFontAlias(e, t);
          return (e.push(...t.fonts), e);
        }
        addFontAlias(e, t) {
          (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
        }
        getSystemFontFamily() {
          let e = { name: Ww, fonts: [], source: this.name },
            t = new Map(),
            n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
          for (let r of [`normal`, `italic`])
            for (let i of n) {
              let n = sp(i, r),
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
      (Kw = {
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
      (qw = class extends Map {
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
      (Yw = `Variable`),
      (Xw = `BI;`),
      (Zw = class {
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
              l = fp(n),
              u = gp(o),
              d = {
                assetKey: n.key,
                family: i,
                selector: this.createSelector(r, c, e.font.fontVersion),
                variant: c,
                file: l,
                hasOpenTypeFeatures: hp(a),
                variationAxes: u,
                category: e.font.fontCategory,
                weight: s ? bp(u, e.font.faceDescriptors?.weight) : yp(c),
                style: Sp(c),
                cssFamilyName: pp(r, s),
              };
            (i.fonts.push(d), this.assetByKey.set(n.key, n), t.push(d));
          }
          for (let e of this.fontFamilies)
            e.fonts.sort((e, t) => {
              let n = yp(e.variant),
                r = yp(t.variant);
              return !n || !r ? 1 : n - r;
            });
          return t;
        }
        static parseVariant(e) {
          let t = xp(e);
          return {
            weight: t === `variable` || t === `variable-italic` ? 400 : Qw[t],
            style: Sp(e),
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
          return hp(t)
            ? t?.map((e) => {
                if (_p(e)) return { tag: e.tag, coverage: e.coverage };
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
          return `${Xw}${e}/${t}/${n}`;
        }
        parseSelector(e) {
          if (!e.startsWith(Xw)) return null;
          let [t, n] = e.split(Xw);
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
      (Qw = {
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
      ($w = rd(`custom-font-source`)),
      (eT = `CUSTOM;`),
      (tT = `CUSTOMV2;`),
      (nT = class e {
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
            let { family: t, variant: a, weight: o, style: s } = Mp(i.properties.font),
              c = i.properties.font.variationAxes,
              l = Array.isArray(c),
              u = i.properties.font.openTypeData,
              d = fp(i),
              f = Fp(i),
              p = jp(i.properties),
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
                hasOpenTypeFeatures: hp(u),
                variationAxes: gp(c),
                owner: f,
                alternativeSelectors: {
                  [m]: {
                    variant: l ? `variable` : this.inferVariantName(p),
                    cssFamilyName: e.cssFontFamilyFromSelector(m),
                  },
                },
                cssFamilyName: e.cssFontFamilyFromSelector(g),
              },
              v = Ap(h.fonts, _);
            if (v?.projectDuplicate) _.owner === `team` && ((h.fonts[v.index] = _), (n[g] = _));
            else if (v) {
              $w.debug(`Duplicate font found for:`, _, `with existing font:`, v.existingFont);
              let e = v.existingFont,
                t = _.file?.endsWith(`.woff2`) ?? !1,
                r = e.file?.endsWith(`.woff2`) ?? !1,
                i = t && !r,
                a = t === r,
                o = _.owner === `team` || e.owner !== `team`;
              (i || (a && o)) && ((h.fonts[v.index] = _), (n[g] = _));
            } else (h.fonts.push(_), (n[g] = _));
            (this.assetsByKey.set(i.key, i),
              Ip(r, t, a).fonts.push({ font: _, asset: i, selected: !1 }));
          }
          for (let e of this.fontFamilies) e.fonts.length > 0 && Pp(e);
          return ((this.debugByFamily = r), (this.debugFamilies = void 0), Object.values(n));
        }
        getDebugFamilies() {
          if (this.debugFamilies) return this.debugFamilies;
          let e = new Set();
          for (let t of this.fontFamilies)
            for (let n of t.fonts) n.assetKey && n.owner && e.add(`${n.assetKey}:${n.owner}`);
          return ((this.debugFamilies = Lp(this.debugByFamily, e)), this.debugFamilies);
        }
        static createSelector(e, t) {
          return `${tT}${e}${t ? ` ${t}` : ``}`;
        }
        static createLegacySelector(e) {
          return `${eT}${e}`;
        }
        static cssFontFamilyFromSelector(e) {
          return (
            V(Dp(e), `Selector must be a custom font selector`),
            kp(e) ? e.slice(eT.length) : e.slice(tT.length)
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
          return hp(t)
            ? t?.map((e) => {
                if (_p(e)) return { tag: e.tag, coverage: e.coverage };
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
      (rT = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`]),
      (iT = `FS;`),
      (aT = {
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
      (oT = Object.keys(aT)),
      (sT = RegExp(`^(?:${[...oT, `italic`, `variable`].join(`|`)})`, `u`)),
      (cT = class e {
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
            n = oT.find((e) => t.includes(e)),
            r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
          return { weight: (n && aT[n]) || 400, style: r === `italic` ? r : `normal` };
        }
        parseSelector(e) {
          if (!e.startsWith(iT)) return null;
          let t = e.split(`-`);
          if (t.length !== 2) return null;
          let [n, r] = t;
          return !n || !r
            ? null
            : {
                name: n.replace(iT, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`),
              };
        }
        static createSelector(e, t) {
          return `${iT}${e}-${t.toLowerCase()}`;
        }
        static createMetadataSelector(e) {
          return `${iT}${e}`;
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        async importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = await Rp(`fontshare`),
            i = [];
          for (let a of t) {
            let t = a.font_styles
                .filter((e) => {
                  let t = e.name.toLowerCase();
                  return !(!sT.exec(t) || t.split(` `).includes(`wide`));
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
                } = Cp(e, t),
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
                  category: Hp(a.category),
                  hasOpenTypeFeatures: u,
                  variationAxes: e.isVariable ? s : void 0,
                  cssFamilyName: pp(l.name, e.isVariable),
                };
              (l.fonts.push(f), i.push(f));
            }
          }
          return i;
        }
        async getOpenTypeFeatures(t) {
          return (await zp(`fontshare`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (lT = `Inter`),
      (uT = `FR;`),
      (dT = {
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
      (fT = class e {
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
          if (!e.startsWith(uT) && !e.startsWith(lT)) return null;
          let [t, n = ``] = e.split(`-`);
          if (!t) return null;
          let r = n.includes(`Italic`) ? `italic` : `normal`,
            i = n.replace(`Italic`, ``);
          return {
            cssFamilyName: t,
            style: r,
            weight: (i && dT[i]) || 400,
            source: `framer`,
            variant: void 0,
            category: `sans-serif`,
          };
        }
        static createMetadataSelector(e) {
          return `${uT}${e}`;
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
          return (await zp(`framer`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (pT = `GF;`),
      (mT = class e {
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
          if (!e.startsWith(pT)) return null;
          let t = e.includes(`-variable-`),
            n = t ? e.split(`-variable-`) : e.split(`-`);
          if (n.length !== 2) return null;
          let [r, i] = n;
          return !r || !i
            ? null
            : { name: r.replace(pT, ``), variant: i, source: this.name, isVariable: t };
        }
        static createSelector(e, t, n) {
          return `${pT}${e}-${n ? `variable-` : ``}${t}`;
        }
        static createMetadataSelector(e) {
          return `${pT}${e}`;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        async importFonts(t, n, r) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let i = await Rp(`google`),
            a = [],
            o = Wp(t, (e) => e.family),
            s = Wp(n, (e) => e.family);
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
              h = m.filter(op),
              g = i[e.createMetadataSelector(t)];
            for (let e of m) {
              let { weight: t, style: r, selector: i, googleFontsVariantName: o } = e,
                {
                  variantBold: s,
                  variantItalic: l,
                  variantBoldItalic: u,
                  variantVariable: d,
                  variantVariableItalic: f,
                } = (op(e) ? Cp(e, h) : void 0) ?? {},
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
                  category: Up(n.category),
                  file: e.file?.replace(`http://`, `https://`),
                  variationAxes: e.isVariable ? p : void 0,
                  hasOpenTypeFeatures: g,
                  cssFamilyName: pp(c.name, e.isVariable),
                };
              (c.fonts.push(m), a.push(m));
            }
          }
          return a;
        }
        async getOpenTypeFeatures(t) {
          return (await zp(`google`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (hT = Ue(wh(), 1)),
      (gT = 5e3),
      (_T = 3),
      (vT = class extends Error {
        constructor(e) {
          (super(e), (this.name = `FontLoadingError`));
        }
      }),
      (yT = new Map()),
      (bT = new Map()),
      (xT = new Map()),
      (ST = (e, t) => qp(e, t)),
      (CT = {
        "FR;Inter": [
          { tag: `opsz`, minValue: 14, maxValue: 32, defaultValue: 14, name: `Optical size` },
          { tag: `wght`, minValue: 100, maxValue: 900, defaultValue: 400, name: `Weight` },
        ],
      }),
      (wT = class {
        constructor() {
          (M(this, `enabled`, !1),
            M(this, `bySelector`, new qw()),
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
            (this.local = new Gw()),
            (this.google = new mT()),
            (this.fontshare = new cT()),
            (this.framer = new fT()),
            (this.custom = new nT()),
            (this.builtIn = new Zw()),
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
              let { staticFonts: e, variableFonts: t } = await wy.fetchGoogleFontsList(),
                n = await Xp(`google`);
              for (let r of await this.google.importFonts(e, t, n)) this.addFont(r);
              return { staticFonts: e, variableFonts: t };
            })),
            this.getGoogleFontsListPromise
          );
        }
        async importFontshareFonts() {
          if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = wy.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise,
              t = await Xp(`fontshare`);
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
            this.getBuiltInFontsListPromise = wy.fetchBuiltInFontsList();
            let e = await this.getBuiltInFontsListPromise;
            for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
          }
          return this.getBuiltInFontsListPromise;
        }
        importFramerFonts(e) {
          let t = Xp(`framer`);
          this.framer.importFonts(e, t).forEach((e) => {
            this.addFont(e);
          });
        }
        importCustomFonts(e) {
          let t = new Map();
          for (let e of this.loadedSelectors) {
            if (!Dp(e)) continue;
            let n = this.getFontBySelector(e);
            n && t.set(e, n);
          }
          this.bySelector.forEach((e, t) => {
            Dp(t) && this.bySelector.delete(t);
          });
          let n = this.custom.importFonts(e);
          for (let e of n) this.addFont(e);
          for (let [e, n] of t) {
            let t = this.getFontBySelector(e);
            (t && t.file === n.file) ||
              (this.loadedSelectors.delete(e),
              n.file &&
                Yp({ family: n.cssFamilyName, url: n.file, weight: n.weight, style: n.style }));
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
            let e = mT.parseVariant(n.variant);
            if (op(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: n.variant,
                cssFamilyName: mp(n, `google`),
                source: `google`,
                category: void 0,
              };
          }
          let r = this.fontshare.parseSelector(e);
          if (r) {
            let e = cT.parseVariant(r.variant);
            if (op(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: r.variant,
                cssFamilyName: mp(r, `fontshare`),
                source: `fontshare`,
                category: void 0,
              };
          }
          let i = this.builtIn.parseSelector(e);
          if (i) {
            let e = Zw.parseVariant(i.variant);
            if (op(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: i.variant,
                cssFamilyName: mp(i, `builtIn`),
                source: `builtIn`,
                category: void 0,
              };
          }
          return fT.getDraftFontPropertiesBySelector(e) || null;
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
            i = Ep(t);
          switch (r) {
            case `local`:
              return (this.loadedSelectors.add(e), 1);
            case `framer`:
              if ((zn() || (await Jp(t.family.name, t.style, t.weight)), i)) {
                if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
                await ST({ family: n, url: t.file, weight: t.weight, style: t.style }, document);
              }
              return (this.loadedSelectors.add(e), 1);
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`: {
              if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
              let r = t.file;
              await ST({ family: n, url: r, weight: t.weight, style: t.style }, document);
              let i = this.getFontBySelector(e);
              return !i || i.file !== r
                ? (Yp({ family: n, url: r, weight: t.weight, style: t.style }), 2)
                : (this.loadedSelectors.add(e), 1);
            }
            default:
              H(r);
          }
        }
        async loadFontsFromSelectors(e) {
          if (!this.enabled) return [];
          let t = [];
          (e.some((e) => e.startsWith(iT)) &&
            t.push(
              this.importFontshareFonts().catch((e) => {
                gi(`Failed to load Fontshare fonts:`, e);
              })
            ),
            e.some((e) => e.startsWith(pT)) &&
              t.push(
                this.importGoogleFonts().catch((e) => {
                  gi(`Failed to load Google fonts:`, e);
                })
              ),
            e.some((e) => e.startsWith(Xw)) &&
              t.push(
                this.importBuiltInFonts().catch((e) => {
                  gi(`Failed to load built-in fonts:`, e);
                })
              ),
            e.some(Dp) &&
              t.push(
                this.customFontsImportPromise.catch((e) => {
                  gi(`Failed to load custom fonts:`, e);
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
          let n = e.filter((e) => !TT.loadedSelectors.has(e));
          n.length !== 0 &&
            (await TT.loadWebFontsFromSelectors(n),
            n.every((e) => TT.loadedSelectors.has(e)) && t && t());
        }
        async loadWebFontsFromSelectors(e) {
          return this.loadFontsFromSelectors(e);
        }
        get defaultFont() {
          let e = this.getFontBySelector(`Inter`);
          return (V(e, `Can’t find Inter font`), e);
        }
      }),
      (TT = new wT()),
      (ET = {
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
      (DT = { opacity: 0 }),
      (OT = { opacity: 1 }),
      (kT = um(
        f.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: i,
              draggable: a,
              fitImageDimension: o,
              style: c,
              ...u
            } = e,
            d = { ...c },
            p = l(() => ko(n), [n]),
            [m, h] = s();
          f.useEffect(() => {
            if (!n?.src || !o || p) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                A(() => h({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, o, p]);
          let g = p ?? m;
          return (
            o && g && ((d[o] = `auto`), (d.aspectRatio = g.width / g.height)),
            n && delete d.background,
            T(Ao(e.as), {
              ...u,
              style: d,
              ref: t,
              draggable: a,
              children: [n && _(wo, { image: n, alt: i, draggable: a }), r],
            })
          );
        })
      )),
      (jT = !In() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (MT =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (NT = `{{ text-placeholder }}`),
      (PT = `rich-text-wrapper`),
      (FT = Qa(
        h(function (e, n) {
          let {
              id: r,
              name: i,
              html: o,
              htmlFromDesign: s,
              text: u,
              textFromDesign: d,
              fonts: f = [],
              width: p,
              height: m,
              left: h,
              right: g,
              top: v,
              bottom: y,
              center: b,
              className: x,
              stylesPresetsClassName: S,
              visible: C = !0,
              opacity: w,
              rotation: T = 0,
              verticalAlignment: E = `top`,
              isEditable: D = !1,
              environment: O = Y.current,
              withExternalLayout: k = !1,
              positionSticky: A,
              positionStickyTop: j,
              positionStickyRight: ee,
              positionStickyBottom: te,
              positionStickyLeft: ne,
              __htmlStructure: M,
              __fromCanvasComponent: re = !1,
              _forwardedOverrideId: ie,
              _forwardedOverrides: ae,
              _usesDOMRect: oe,
              children: se,
              ...ce
            } = e,
            le = Na(),
            ue = Io(e),
            de = t(null),
            fe = n ?? de,
            { navigate: N, getRoute: pe } = At(),
            me = Mt();
          (En(e.preload ?? []), Ho(e, fe));
          let he = c(Py),
            ge = Fl(),
            _e = u,
            ve = ie ?? r;
          if (ve && ae) {
            let e = ae[ve];
            typeof e == `string` && (_e = e);
          }
          let F = ``;
          if (_e) {
            let e = fm(_e);
            F = M ? M.replace(NT, e) : `<p>${e}</p>`;
          } else if (o) F = o;
          else if (d) {
            let e = fm(d);
            F = M ? M.replace(NT, e) : `<p>${e}</p>`;
          } else s && (F = s);
          let ye = tu(),
            be = l(() => (ge || !pe || !me ? F : pm(F, pe, me, ye)), [F, pe, me, ye]);
          if (
            (a(() => {
              let e = fe.current;
              if (e === null) return;
              function t(e) {
                let t = Yl(e.target, fe.current);
                Hn(e) ||
                  !N ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (Vl(N, t, ye) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [N, ye]),
            gm(f, re, fe),
            !C)
          )
            return null;
          let I = D && O() === Y.canvas,
            L = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: hm(E),
              opacity: I ? 0 : w,
              flexShrink: 0,
            },
            xe = Y.hasRestrictions(),
            Se = Aa(e, le || 0, !1),
            Ce = oe && (p === `auto` || m === `auto`),
            we =
              e.transformTemplate || !Se || !xe || re || Ce
                ? (e.transformTemplate ?? Fo(b))
                : void 0;
          if (!k) {
            if (Se && xe && !Ce) {
              let e = Y_.getNumber(T).toFixed(4);
              ((L.transform = `translate(${Se.x}px, ${Se.y}px) rotate(${e}deg)`),
                (L.width = Se.width),
                (L.minWidth = Se.width),
                (L.height = Se.height));
            } else
              ((L.left = h),
                (L.right = g),
                (L.top = v),
                (L.bottom = y),
                (L.width = p),
                (L.height = m),
                (L.rotate = T));
            A
              ? (!ge || he) &&
                ((L.position = `sticky`),
                (L.willChange = `transform`),
                (L.top = j),
                (L.right = ee),
                (L.bottom = te),
                (L.left = ne))
              : ge && (e.positionFixed || e.positionAbsolute) && (L.position = `absolute`);
          }
          return (
            _c(e, L),
            mc(e, L),
            Object.assign(L, e.style),
            _(P.div, {
              id: r,
              ref: fe,
              ...ce,
              style: L,
              layoutId: ue,
              "data-framer-name": i,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": b,
              className: yc(x, S, PT),
              transformTemplate: we,
              dangerouslySetInnerHTML: { __html: be },
            })
          );
        })
      )),
      (IT = {
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
      (LT = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`
      )),
      (RT = h(function (e, t) {
        return _(`svg`, { ...e, ref: t, children: e.children });
      })),
      (zT = P.create(RT)),
      (BT = h(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return _(zT, {
          ...r,
          ref: i,
          viewBox: t,
          children: _(P.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (VT = []),
      (HT = `RichTextContainer`),
      (UT = h(function (e, n) {
        let {
            __fromCanvasComponent: r = !1,
            _forwardedOverrideId: i,
            _forwardedOverrides: a,
            _usesDOMRect: o,
            anchorLinkOffsetY: s,
            as: u,
            bottom: d,
            center: f,
            children: p,
            environment: m = Y.current,
            fonts: h = VT,
            height: g,
            isEditable: v = !1,
            left: y,
            name: b,
            opacity: x,
            positionSticky: S,
            positionStickyBottom: C,
            positionStickyLeft: w,
            positionStickyRight: T,
            positionStickyTop: E,
            right: D,
            rotation: O = 0,
            style: k,
            _initialStyle: A,
            stylesPresetsClassNames: j,
            text: ee,
            top: te,
            verticalAlignment: ne = `top`,
            visible: M = !0,
            width: re,
            withExternalLayout: ie = !1,
            viewBox: ae,
            viewBoxScale: oe = 1,
            effect: se,
            ...ce
          } = e,
          le = Na(),
          ue = m(),
          de = ue === Y.canvas,
          fe = de || ue === Y.export,
          N = c(Py),
          pe = Io(e),
          me = t(null),
          he = n ?? me;
        (Ho(e, he), gm(h, r, he));
        let ge = Tm(se, he),
          _e = l(() => {
            if (p) return Nm(p, j, ee, s, void 0, ge.getTokenizer());
          }, [p, j, ee, s, ge]);
        if (!M) return null;
        let P = { opacity: v && de ? 0 : x },
          ve = hm(ne);
        ve !== Zv.justifyContent && (P.justifyContent = ve);
        let F = {},
          ye = Y.hasRestrictions(),
          be = Aa(e, le || 0, !1),
          I = o && (re === `auto` || g === `auto`),
          L = e.transformTemplate || !be || !ye || r || I ? (e.transformTemplate ?? Fo(f)) : void 0;
        (ie ||
          (be && ye && !I
            ? ((F.x = be.x + (z(k?.x) ? k.x : 0)),
              (F.y = be.y + (z(k?.y) ? k.y : 0)),
              (F.left = 0),
              (F.top = 0),
              (P.rotate = Y_.getNumber(O)),
              (P.width = be.width),
              (P.minWidth = be.width),
              (P.height = be.height))
            : ((P.left = y),
              (P.right = D),
              (P.top = te),
              (P.bottom = d),
              (P.width = re),
              (P.height = g),
              (P.rotate = O)),
          S
            ? (!fe || N) &&
              ((P.position = `sticky`),
              (P.willChange = `transform`),
              (P.top = E),
              (P.right = T),
              (P.bottom = C),
              (P.left = w))
            : de && (e.positionFixed || e.positionAbsolute) && (P.position = `absolute`)),
          _c(e, P),
          mc(e, P),
          Object.assign(P, A, k, F),
          pe && (ce.layout = `preserve-aspect`));
        let xe = Ao(e.as),
          Se = ce[`data-framer-name`] ?? b,
          Ce = de ? Am(_y(ce)) : ce;
        return R(e.viewBox)
          ? e.as === void 0
            ? _(BT, {
                ...Ce,
                ref: he,
                style: P,
                layoutId: pe,
                viewBox: ae,
                viewBoxScale: oe,
                transformTemplate: L,
                "data-framer-name": Se,
                "data-framer-component-type": HT,
                children: _e,
              })
            : _(xe, {
                ...Ce,
                ref: he,
                style: P,
                layoutId: pe,
                transformTemplate: L,
                "data-framer-name": Se,
                "data-framer-component-type": HT,
                children: _(BT, {
                  viewBox: ae,
                  viewBoxScale: oe,
                  style: { width: `100%`, height: `100%` },
                  children: _e,
                }),
              })
          : _(xe, {
              ...Ce,
              ref: he,
              style: P,
              layoutId: pe,
              transformTemplate: L,
              "data-framer-name": Se,
              "data-framer-component-type": HT,
              children: _e,
            });
      })),
      (WT = Qa(
        h(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (R(a)) {
            !r.stylesPresetsClassName &&
              B(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [R(t) ? `html` : `htmlFromDesign`]: a };
            return _(FT, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && R(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return _(UT, { ...r, ref: i, children: y(a) ? a : void 0 });
        })
      )),
      (GT = `framer/asset-reference,`),
      (KT = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = Km(t);
        return _(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: _(
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
      (qT = Ln()),
      (JT = class {
        constructor(e, t, n, r, i = 0) {
          (M(this, `id`, e),
            M(this, `svg`, t),
            M(this, `innerHTML`, n),
            M(this, `viewBox`, r),
            M(this, `count`, i));
        }
      }),
      (YT = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (XT = class {
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
            n ||= `svg${String(Hy(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = Jm(e);
            (s &&
              (t && Ym(s, n),
              (s.id = n),
              (o = eh(s)),
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
          qT && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = YT),
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
          qT && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new JT(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !qT) ||
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
                        qT && document?.getElementById(e)?.remove());
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
            e.push(`<div id="svg-templates" style="${YT}" aria-hidden="true">`),
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
      (ZT = new XT()),
      (QT = {
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
      ($T = h(function (e, t) {
        let n = Na(),
          r = Io(e),
          i = f.useRef(null),
          a = t ?? i,
          o = Bw();
        return (
          Ho(e, i),
          _(tE, { ...e, innerRef: a, parentSize: n, layoutId: r, providedWindow: o })
        );
      })),
      (eE = 5e4),
      (tE = (() => {
        var e;
        return (
          (e = class extends Vy {
            constructor() {
              (super(...arguments),
                M(this, `container`, f.createRef()),
                M(this, `svgElement`, null),
                M(this, `setSVGElement`, (e) => {
                  ((this.svgElement = e), this.setLayerElement(e));
                }),
                M(this, `previouslyRenderedSVG`, ``),
                M(this, `unmountedSVG`, ``));
            }
            static frame(e) {
              return Aa(e, e.parentSize || 0);
            }
            get frame() {
              return Aa(this.props, this.props.parentSize || 0);
            }
            componentDidMount() {
              if (this.unmountedSVG) {
                let { svgContentId: e } = this.props,
                  t = e ? `svg${e}` : null;
                (ZT.subscribe(this.unmountedSVG, !e, t),
                  (this.previouslyRenderedSVG = this.unmountedSVG));
              }
              this.props.svgContentId || ih(this.container, this.props);
            }
            componentWillUnmount() {
              (ZT.unsubscribe(this.previouslyRenderedSVG),
                (this.unmountedSVG = this.previouslyRenderedSVG),
                (this.previouslyRenderedSVG = ``));
            }
            componentDidUpdate(e) {
              if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
              let { fill: t } = this.props;
              (jy.isImageObject(t) &&
                jy.isImageObject(e.fill) &&
                t.src !== e.fill.src &&
                qo(this.svgElement, `fill`, null, !1),
                ih(this.container, this.props));
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
                c = Y_.getNumber(r);
              if (
                ((e.opacity = U(this.props.opacity) ? this.props.opacity : 1),
                Y.hasRestrictions() && n)
              ) {
                (Object.assign(e, {
                  transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
                  width: `${n.width}px`,
                  height: `${n.height}px`,
                }),
                  Da(this.props) && (e.position = `absolute`));
                let r = n.width / (i || 1),
                  o = n.height / (a || 1);
                t.transformOrigin = `top left`;
                let { zoom: s, target: l } = vv;
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
                width: v,
                requiresOverflowVisible: y,
                ...b
              } = this.props;
              if (!f && (!t || !e)) return null;
              let x = e ?? l ?? `svg`,
                S = this.frame,
                C = S || { width: o || 100, height: a || 100 },
                w = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
                E = {};
              (this.collectLayout(w, E),
                fc(this.props, w),
                _c(this.props, w),
                Vy.applyWillChange(this.props, w, !1));
              let D = null;
              if (typeof r == `string` || J.isColorObject(r)) {
                let e = J.isColorObject(r) ? r.initialValue || J.toRgbString(r) : r;
                ((w.fill = e), (w.color = e));
              } else if (Yy.isLinearGradient(r)) {
                let t = r,
                  n = `${encodeURI(e || ``)}g${Yy.hash(t)}`;
                w.fill = `url(#${n})`;
                let { stops: i, x1: a, x2: o, y1: s, y2: c } = Rm(t, x);
                D = _(`svg`, {
                  ref: this.setSVGElement,
                  width: `100%`,
                  height: `100%`,
                  style: { position: `absolute` },
                  role: `presentation`,
                  children: _(`linearGradient`, {
                    id: n,
                    x1: a,
                    x2: o,
                    y1: s,
                    y2: c,
                    children: i.map((e, t) =>
                      _(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                    ),
                  }),
                });
              } else if (Zy.isRadialGradient(r)) {
                let t = r,
                  n = `${encodeURI(e || ``)}g${Zy.hash(t)}`;
                w.fill = `url(#${n})`;
                let i = zm(t, x);
                D = _(`svg`, {
                  ref: this.setSVGElement,
                  width: `100%`,
                  height: `100%`,
                  style: { position: `absolute` },
                  role: `presentation`,
                  children: _(`radialGradient`, {
                    id: n,
                    cy: t.centerAnchorY,
                    cx: t.centerAnchorX,
                    r: t.widthFactor,
                    children: i.stops.map((e, t) =>
                      _(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                    ),
                  }),
                });
              } else if (jy.isImageObject(r)) {
                let e = Wm(r, C, x);
                e &&
                  ((w.fill = `url(#${e.id})`),
                  (D = _(`svg`, {
                    ref: this.setSVGElement,
                    width: `100%`,
                    height: `100%`,
                    style: { position: `absolute` },
                    role: `presentation`,
                    children: _(`defs`, { children: _(KT, { ...e }) }),
                  })));
              }
              let k = { "data-framer-component-type": `SVG` },
                A = !S;
              A && Object.assign(k, Mo(this.props.center));
              let j =
                  !y &&
                  !D &&
                  !w.fill &&
                  !w.background &&
                  !w.backgroundImage &&
                  i.length < eE &&
                  !th(i) &&
                  !nh(i),
                ee = null;
              if (j)
                ((w.backgroundSize = `100% 100%`),
                  (w.backgroundImage = st(i)),
                  ZT.unsubscribe(this.previouslyRenderedSVG),
                  (this.previouslyRenderedSVG = ``));
              else {
                let e = m ? `svg${m}` : null,
                  t = ZT.subscribe(i, !m, e, y);
                (ZT.unsubscribe(this.previouslyRenderedSVG),
                  (this.previouslyRenderedSVG = i),
                  rh(w) && (w.overflow = `hidden`),
                  (ee = T(O, {
                    children: [
                      D,
                      _(
                        `div`,
                        {
                          className: `svgContainer`,
                          style: E,
                          ref: this.container,
                          dangerouslySetInnerHTML: { __html: t },
                        },
                        jy.isImageObject(r) ? r.src : ``
                      ),
                    ],
                  })));
              }
              let te = Ao(this.props.as),
                { href: ne, target: M, rel: re, onClick: ie, onTap: ae } = this.props,
                oe = s || c;
              return _(te, {
                ...k,
                ...b,
                layoutId: l,
                transformTemplate: A ? Fo(this.props.center) : void 0,
                id: e,
                ref: p,
                style: w,
                className: u,
                variants: d,
                tabIndex: this.props.tabIndex,
                role: oe ? `img` : void 0,
                "aria-label": s,
                "aria-description": c,
                "aria-hidden": oe ? void 0 : `true`,
                onTap: ae,
                onClick: ie,
                href: ne,
                target: M,
                rel: re,
                children: ee,
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
          M(e, `defaultProps`, { ...Vy.defaultProps, ...e.defaultSVGProps }),
          e
        );
      })()),
      (nE = Qa($T)),
      (rE = 1e3),
      (iE = `explicitInter`),
      (He.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = ae(e(this.get()));
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
  Ml as $,
  ex as A,
  aE as B,
  Uv as C,
  nx as D,
  vh as E,
  oo as F,
  mi as G,
  Lh as H,
  Ef as I,
  ZT as J,
  Rf as K,
  mg as L,
  sh as M,
  ch as N,
  $b as O,
  ah as P,
  Mt as Q,
  ii as R,
  hy as S,
  TT as T,
  Yr as U,
  ht as V,
  $x as W,
  Af as X,
  Gr as Y,
  ol as Z,
  WT as _,
  Ub as a,
  At as at,
  oh as b,
  cS as c,
  np as ct,
  nr as d,
  Dx as dt,
  Pf as et,
  nd as f,
  Mc as ft,
  nC as g,
  Y as h,
  wn as ht,
  fa as i,
  Rt as it,
  Bv as j,
  tx as k,
  Kh as l,
  Vv as lt,
  Ow as m,
  Rw as mt,
  Vx as n,
  Rr as nt,
  lS as o,
  qm as ot,
  Jb as p,
  gh as pt,
  Lg as q,
  Pv as r,
  hi as rt,
  kT as s,
  Vf as st,
  kx as t,
  Fl as tt,
  xS as u,
  rp as ut,
  nE as v,
  yc as w,
  ao as x,
  Hx as y,
  ft as z,
};
//# sourceMappingURL=framer.D26jh1-v.mjs.map
