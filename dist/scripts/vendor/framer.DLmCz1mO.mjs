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
  u as ee,
  v as k,
  w as A,
  x as te,
  y as ne,
  z as re,
} from "./react.B4kFiiQA.mjs";
import {
  $ as j,
  A as ie,
  B as ae,
  C as oe,
  D as se,
  E as ce,
  F as le,
  G as ue,
  H as de,
  I as fe,
  J as pe,
  K as M,
  L as me,
  M as he,
  O as ge,
  P as _e,
  Q as ve,
  S as N,
  T as ye,
  U as P,
  V as be,
  W as xe,
  X as F,
  Y as I,
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
} from "./motion.CYX_XZth.mjs";
function Ze(e) {
  return typeof e == `function`;
}
function Qe(e) {
  return typeof e == `boolean`;
}
function L(e) {
  return typeof e == `string`;
}
function R(e) {
  return Number.isFinite(e);
}
function $e(e) {
  return Array.isArray(e);
}
function z(e) {
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
  return z(e) && Ze(e.return);
}
function ot(e) {
  return z(e) && Ze(e.then);
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
  if (lg.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (lg.set(e, t), t))
    .catch((t) => {
      throw (lg.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(tg), lg.set(e, r));
}
function ft(e, t) {
  ng && (ug.set(e, t), dg.has(e) && dt(e, t, `registered loader ${e}`));
}
function pt() {
  if (!ng) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(fg),
      i = r ? e.slice(fg.length) : e;
    if (!i) continue;
    dg.add(i);
    let a = ug.get(i);
    a ? dt(i, a, `registered loader ${i}`) : r && dt(i, () => import(n), n);
  }
}
function mt(e) {
  return typeof e == `object` && !!e && !y(e) && mg in e;
}
function ht(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function gt(e, t = `default`, n) {
  n && ft(n, e);
  let r,
    i,
    o,
    s = () => {
      if (i || !n || !lg.has(n)) return;
      let e = lg.get(n);
      st(e) ? c(() => e) : (i = ht(e, t));
    },
    c = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = ht(e, t);
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
      if ((s(), n !== void 0 && pg !== void 0 && pg.add(n), !i)) throw c(e);
      return _(i, { ref: r, ...t });
    });
  return (
    (u.preload = () => (s(), c(e))),
    (u.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: l })),
    u
  );
}
function _t(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function vt(e) {
  return e === null || !(gg in e) ? !1 : typeof e.equals == `function`;
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
  let n = hg(e);
  if (n.length !== hg(t).length) return !1;
  for (let r of n)
    if (!_t(t, r) || (!(r === `_owner` && _t(e, `$$typeof`) && e.$$typeof) && !yt(e[r], t[r])))
      return !1;
  return !0;
}
function Et(e, t) {
  let n = hg(e);
  if (n.length !== hg(t).length) return !1;
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
  return f.useCallback((t) => e[t], [e]);
}
function At({ api: e, children: t }) {
  return _(_g.Provider, { value: e, children: t });
}
function jt() {
  return f.useContext(_g);
}
function Mt({ routes: e, children: t }) {
  let n = kt(e),
    r = l(() => ({ getRoute: n }), [n]);
  return _(_g.Provider, { value: r, children: t });
}
function Nt() {
  let e = jt(),
    t = c(vg),
    n = t?.routeId ?? e.currentRouteId,
    r = t?.routeId ? t.pathVariables : e.currentPathVariables,
    i = n ? e.getRoute?.(n) : void 0;
  return l(() => {
    if (!(!n || !i)) return { ...i, id: n, pathVariables: r };
  }, [n, r, i]);
}
function Pt() {
  let e = Nt();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Ft(e) {
  let t = Nt(),
    n = f.useRef(t);
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
    r = It(t) ?? n;
  return f.useMemo(() => (r ? Lt(r, e) : e), [e, r]);
}
function B(e, t) {
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
function V(e, t) {
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
    Object.getOwnPropertyNames(t).sort().join(`\0`) === Ng
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
  return Pg.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function qt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > jg);
}
function Jt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > Ag);
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
    if (e === Cg) return;
    if (e === Tg) return NaN;
    if (e === Eg) return 1 / 0;
    if (e === Dg) return -1 / 0;
    if (e === Og) return -0;
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
            let n = Rg(t);
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
      } else if (s[0] === kg) {
        let t = s[1];
        if (!Jt(t)) throw Error(`Invalid input`);
        let n = [];
        ((r[e] = n), (n[jg] = void 0), delete n[jg]);
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
          n !== wg && (t[e] = a(n));
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
    if (n === void 0) return Cg;
    if (Number.isNaN(n)) return Tg;
    if (n === 1 / 0) return Eg;
    if (n === -1 / 0) return Dg;
    if (n === 0 && 1 / n < 0) return Og;
    if (i.has(n)) return i.get(n);
    ((l ??= s++), i.set(n, l));
    for (let { key: e, fn: t } of a) {
      let i = t(n);
      if (i) return ((r[l] = `["${e}",${c(i)}]`), l);
    }
    if (typeof n == `function`) throw new Mg(`Cannot stringify a function`, o, n, t);
    if (typeof n == `symbol`) throw new Mg(`Cannot stringify a Symbol primitive`, o, n, t);
    let u = ``;
    if (Bt(n)) u = cn(n);
    else if (typeof n.then == `function`) {
      if (!e)
        throw new Mg(
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
            else if (e) u += wg;
            else {
              let t = Xt(n),
                r = t.length,
                i = String(n.length).length;
              if ((n.length - r) * 3 > 4 + i + r * (i + 1)) {
                u = `[` + kg + `,` + n.length;
                for (let e = 0; e < t.length; e++) {
                  let r = t[e];
                  (o.push(`[${r}]`), (u += `,` + r + `,` + c(n[r])), o.pop());
                }
                break;
              } else ((e = !0), (u += wg));
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
          u = `["ArrayBuffer","${Lg(n)}"]`;
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
          if (!Vt(n)) throw new Mg(`Cannot stringify arbitrary non-POJOs`, o, n, t);
          if (Gt(n).length > 0) throw new Mg(`Cannot stringify POJOs with symbolic keys`, o, n, t);
          if (Object.getPrototypeOf(n) === null) {
            u = `["null"`;
            for (let e of Object.keys(n)) {
              if (e === `__proto__`)
                throw new Mg(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (o.push(Kt(e)), (u += `,${Wt(e)},${c(n[e])}`), o.pop());
            }
            u += `]`;
          } else {
            u = `{`;
            let e = !1;
            for (let r of Object.keys(n)) {
              if (r === `__proto__`)
                throw new Mg(`Cannot stringify objects with __proto__ keys`, o, n, t);
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
      ? Cg.toString()
      : e === 0 && 1 / e < 0
        ? Og.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function ln(e, t, n = `lazy`) {
  switch ((K.__framer_events?.push([e, t, n]), e)) {
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
  return L(e) && (e === `` || Bg.test(e));
}
function dn() {
  return { [Vg.QueryCache]: new Map(), [Vg.CollectionUtilsCache]: new Map() };
}
function fn() {
  if (!ng) return;
  if (Hg !== void 0) return Hg;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      Hg = rn(e.text) ?? dn();
    } catch (e) {
      ((Hg = dn()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      ag(() => {
        (e?.remove(), (e = null));
      }),
      Hg
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
  return e?.id ?? bg;
}
function gn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function _n(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (Kg.has(n)) return Kg.get(n);
    let r = new Jg(n, t);
    return (Kg.set(n, r), r);
  };
}
function vn({ children: e, collectionUtils: t }) {
  let n = l(() => ({ get: _n(t) }), [t]);
  return _(qg.Provider, { value: n, children: e });
}
function yn() {
  return c(qg);
}
function bn() {
  for (let e of Zg) e();
  Zg.clear();
}
function xn(e) {
  return new Promise((t) => {
    if ((Zg.add(t), document.hidden)) {
      bn();
      return;
    }
    (document.addEventListener(`visibilitychange`, bn),
      document.addEventListener(`pagehide`, bn),
      je.read(() => {
        Cn(e).then(() => {
          (Zg.delete(t), !e?.signal?.aborted && t());
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
    n = K.scheduler;
  return t === `background`
    ? wn(1)
    : Yg && n
      ? n.yield(e).catch(tg)
      : Xg && n
        ? n.postTask(() => {}, e).catch(tg)
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
  return u(
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
  a(() => {
    if (!(!t || !Qg)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function On(e, t, n = !0, r = !0) {
  if (!Qg || !e) return;
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
  return n === void 0 ? void 0 : n;
}
function jn() {
  let e = An();
  return e ? $g.test(e.platform) : !1;
}
function Mn() {
  let e = An();
  return e
    ? e_.test(e.platform)
      ? !0
      : t_.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function Nn() {
  return jn() || Mn();
}
function Pn() {
  let e = An();
  return e ? n_.test(e.userAgent) : !1;
}
function Fn() {
  let e = An();
  return e ? r_.test(e.userAgent) && i_.test(e.vendor) && !Pn() : !1;
}
function In() {
  let e = An();
  return e ? a_.test(e.userAgent) && o_.test(e.vendor) : !1;
}
function Ln() {
  let e = An();
  return e ? s_.test(e.userAgent) : !1;
}
function Rn() {
  return typeof document == `object`;
}
function zn() {
  let e = An();
  if (!e) return -1;
  let t = c_.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function Bn() {
  let e = An();
  return e ? l_.test(e.userAgent) : !1;
}
function Vn() {
  return !1;
}
function Hn() {
  let e = An();
  return e && u_.test(e.userAgent) ? `tablet` : e && d_.test(e.userAgent) ? `phone` : `desktop`;
}
function Un() {
  return Hn() === `desktop`;
}
function Wn(e) {
  return Nn() ? e.metaKey : e.ctrlKey;
}
function Gn(e, t) {
  return e.replace(h_, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function Kn(e, t = !1) {
  let n = ``;
  if (m !== void 0)
    if (t) n = m.location.search;
    else {
      let e = m.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? m.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? qn(n, e) : e;
}
function qn(e, t) {
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
async function Jn(e, t, n, r, i, a, o) {
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
        if (!d || !L(d)) throw Error(`No slug found for path variable ${u}`);
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
function Yn(e, t) {
  return t ? `/${t}${e}` : e;
}
async function Xn({
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
      u = await Jn(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = Yn(u.path, t.slug)),
    o && u.path && (u.path = Kn(u.path, !0)),
    u
  );
}
function Zn(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = Qn(e),
    [r, i] = Qn(t),
    a = $n(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function Qn(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function $n(e, t) {
  if (e === t || ((e = `/` + er(e)), (t = `/` + er(t)), e === t)) return ``;
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
function er(e) {
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
function tr(e) {
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
function nr(e, t, n) {
  let r = Lt(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(h_, (e, t) => i[t] ?? e);
}
function rr(
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
    localeSlug: f,
  }
) {
  let p = nr(i, e, o);
  if (l) return p ?? ``;
  let h = t ?? `/`;
  (n && d && (h = n[d] ?? h), r && (h = h.replace(h_, (e, t) => String(r[t] || e))));
  let g = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (g = g.replace(h_, (e, t) => String(a[t] || e)));
  let _ = !!(h === g && p),
    v = !_ && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && h !== g;
  if (s)
    if (T_.has(h) && m !== void 0) {
      let e = tr(u);
      g = Zn(m.location.pathname, e + g);
    } else g = Zn(h, g);
  else g = Yn(g, f);
  let y = _ || v;
  return ((c || y) && (g = Kn(g, y)), p && (g = `${g}#${p}`), g);
}
function ir() {
  if (E_) return;
  E_ = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (m.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((m.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), ln(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function ar({ children: e, value: t }) {
  return _(D_.Provider, { value: t, children: e });
}
function or() {
  return f.useContext(D_);
}
function sr(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function cr(e) {
  let t = O_,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < k_; ) ((n = e.next(t)), r.push(n.value), (t += O_));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - O_ }
  );
}
function lr(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function ur(e) {
  let { innerWidth: t, innerHeight: n } = m,
    [r, i] = lr(e.x),
    [a, o] = lr(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function dr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function fr(e) {
  return e ? j_[e] : void 0;
}
function pr(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (mr(t)) {
    let { easing: e, duration: n } = cr(
      se({ keyframes: [0, 1], ...hr(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = fr(n?.mask?.type),
    o = dr(n, `start`, e, a),
    s = dr({ ...M_, mask: n.mask }, `end`, e, a);
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
function mr(e) {
  return e.type === `spring`;
}
function hr(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function gr({ exit: e = P_, enter: t }) {
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
    (r += pr(`exit`, e)),
    (r += pr(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function _r() {
  ag(() => {
    je.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(N_);
      e && document.head.removeChild(e);
    });
  });
}
function vr() {
  return !!document.startViewTransition;
}
function yr(e) {
  return new Promise((t) => {
    je.render(() => {
      (performance.mark(`framer-vt-style`), gr(e), t());
    });
  });
}
async function br(e, t, n) {
  if (!vr()) {
    e();
    return;
  }
  if ((await yr(t), n?.aborted)) return;
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
        (performance.mark(`framer-vt-finished`), _r());
      })
      .catch(F_),
    r
  );
}
function xr() {
  let e = or(),
    n = t(void 0);
  return (
    a(() => {
      n.current &&= (n.current(), void 0);
    }),
    u(
      (t, r, i, a) => {
        let o = sr(t, r, e);
        if (o) {
          let e = new Promise((e) => {
            n.current = e;
          });
          return br(
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
function Sr(e, t) {
  ag(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function Cr(e, t, n, i = r) {
  i(() => {
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
function wr(e) {
  let n = t(void 0);
  return (
    Cr(
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
function Tr(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let { hash: i, pathVariables: a, localeId: o, currentRoutePath: s } = n,
    c = `historyPath` in n ? n.historyPath : rr(t, n),
    l = s !== void 0 && s === r,
    u = Dr(),
    d = l ? u?.queryParamBackAnchorSearch : void 0;
  try {
    Ir({ routeId: e, hash: i, pathVariables: a, localeId: o, queryParamBackAnchorSearch: d }, c);
  } catch {}
}
function Er(e) {
  return z(e) && `routeId` in e;
}
function Dr(e = m.history.state) {
  return Er(e) ? e : void 0;
}
function Or(e) {
  return e?.entryId;
}
function kr(e) {
  R_ = e;
}
function Ar() {
  return R_;
}
function jr() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function Mr(e, t) {
  return Nr(e, Or(e) ?? Or(t));
}
function Nr(e, t = jr()) {
  return { ...e, entryId: t };
}
function Pr(e, t, n = !1) {
  (performance.mark(`framer-history-replace`),
    kr(Mr(e, Dr())),
    t && Sr(t, m.location.href),
    p_().privateRouterReplaceState
      ? (!t || t === m.location.href
          ? m.History.prototype.replaceState
          : m.history.replaceState
        ).call(m.history, R_, ``, t)
      : (n ? m.History.prototype.replaceState : m.history.replaceState).call(m.history, R_, ``, t));
}
function Fr(e) {
  (performance.mark(`framer-history-replace`),
    kr(Nr(e)),
    History.prototype.replaceState.call(m.history, R_, ``, void 0));
}
function Ir(e, t) {
  (performance.mark(`framer-history-push`),
    kr(Nr(e)),
    Sr(t, m.location.href),
    ir(),
    m.history.pushState(R_, ``, t));
}
function Lr({ disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: i }) {
  r(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let r = m.location.hash ? m.location.hash.slice(1) : void 0;
    Pr({ ...Dr(), routeId: t, hash: r, pathVariables: n, localeId: i }, void 0, !0);
  }, []);
}
function Rr(e, n, r) {
  let i = xr(),
    o = wr(`framer-route-change`),
    s = t(void 0),
    c = u(() => {
      (s.current?.resolve(), (s.current = void 0));
    }, []),
    l = u(
      async ({ state: t }) => {
        if (!Er(t)) return;
        let a = o({ popstate: !0 }),
          s = Rt();
        (a.promise.finally(s), kr(t));
        let { routeId: l, hash: u, pathVariables: d, localeId: f } = t,
          p = L(u) ? u : m.location.hash ? m.location.hash.slice(1) : void 0,
          h = !1,
          g = () => {
            h ||=
              (r(
                l,
                L(f) ? f : void 0,
                p,
                m.location.pathname + m.location.search + m.location.hash,
                z(d) ? d : void 0,
                !0,
                a,
                !1
              ),
              !0);
          },
          _ = e === `after-transition`;
        (await Promise.resolve(i(n.current, l, g))
          .then((e) => e?.updateCallbackDone)
          .catch(g)
          .finally(() => {
            _ || c();
          }),
          await a.promise,
          _ && c(),
          await m.navigation?.transition?.finished.catch(tg),
          L_(),
          Sr(m.location.href));
      },
      [n, o, c, r, i, e]
    ),
    d = u(
      (t) => {
        if (t.navigationType !== `traverse` || !t.canIntercept) return;
        let n = t.destination?.getState();
        Er(n) &&
          t.intercept({
            async handler() {
              (await new Promise((e, t) => {
                s.current = { resolve: e, reject: t };
              }),
                (s.current = void 0));
            },
            scroll: e,
          });
      },
      [e]
    );
  a(
    () => (
      m.addEventListener(`popstate`, l),
      z_ && m.navigation.addEventListener(`navigate`, d),
      () => {
        (m.removeEventListener(`popstate`, l),
          z_ && m.navigation.removeEventListener(`navigate`, d));
      }
    ),
    [l, d]
  );
}
async function zr(e, t, n) {
  if (!e.path || !t) return !1;
  let r = Yn(Gn(e.path, t), n.slug);
  return (await fetch(r, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((m.location.href = m.location.origin + r), !0)
    : !1;
}
function Br() {
  let e = yn();
  return u((t) => Vr({ ...t, collectionUtils: e }), [e]);
}
async function Vr(e) {
  let t = await Xn(e);
  if (t) {
    try {
      localStorage.preferredLocale = e.nextLocale.code;
    } catch {}
    try {
      if (!L(t.path)) throw Error(`Expected result.path to be a string`);
      if (t.isMissingInLocale && (await zr(e.route, t.pathVariables, e.nextLocale))) return;
    } catch {}
    return t;
  }
}
function Hr(e) {
  let n = t(Promise.resolve()),
    r = t(),
    i = u(
      (t) => {
        if (t.navigationType === `traverse` || !t.canIntercept) return;
        let i = r.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          t.intercept({ handler: () => n.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return u(
    (t, a, o) => {
      if (!z_) {
        o?.();
        return;
      }
      ((n.current = t),
        (r.current = a),
        m.navigation.addEventListener(`navigate`, i),
        e || o?.(),
        t.finally(() => {
          n.current === t &&
            ((r.current = void 0), m.navigation.removeEventListener(`navigate`, i));
        }));
    },
    [e, i]
  );
}
function Ur(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`; ) t++;
  for (; n > t && e[n - 1] === `-`; ) n--;
  return e.slice(t, n);
}
function Wr(e) {
  return Ur(e.trim().toLowerCase().replace(B_, `-`));
}
function Gr({ children: e, value: t }) {
  return _(H_.Provider, { value: t, children: e });
}
function Kr() {
  return c(H_);
}
function qr(e, n) {
  let r = s(() => ({ inputs: n, result: e() }))[0],
    i = t(!0),
    o = t(r),
    c =
      i.current || (n && o.current.inputs && Ot(n, o.current.inputs, !1))
        ? o.current
        : { inputs: n, result: e() };
  return (
    a(() => {
      ((i.current = !1), (o.current = c));
    }, [c]),
    c.result
  );
}
function Jr(e, t) {
  return qr(() => e, t);
}
function Yr() {
  return f.useContext(G_);
}
function Xr() {
  return m.location.search;
}
function Zr() {
  return ``;
}
function Qr(e) {
  return (
    q_.add(e),
    m.addEventListener(`popstate`, e),
    () => {
      (q_.delete(e), m.removeEventListener(`popstate`, e));
    }
  );
}
function $r() {
  for (let e of q_) e();
}
function ei({ children: e }) {
  let t = Kr() === `preview`,
    [n, r] = s(``),
    i = w(te(Qr, Xr, Zr));
  jt();
  let a = t ? n : i,
    o = u(
      async (e) => {
        if (t) {
          k(() => {
            r((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        await Tn({ continueAfter: `paint` });
        let n = Dr();
        if (!n) return;
        let i = new URL(m.location.href),
          a = e(i.searchParams).toString();
        i.search = a;
        let o = n.queryParamBackAnchorSearch,
          s = m.location.search.slice(1),
          c = o === void 0 && a !== s,
          l = o !== void 0 && a === o,
          u = { ...n, queryParamBackAnchorSearch: l ? void 0 : (o ?? (c ? s : void 0)) },
          d = i.toString();
        (c || l ? await Ir(u, d) : Pr(u, d), $r());
      },
      [t]
    ),
    c = qr(() => ({ urlSearchParams: new URLSearchParams(a), replaceSearchParams: o }), [a, o]);
  return _(J_.Provider, { value: c, children: e });
}
function ti(e) {
  return Y_ in e && e[Y_] === 1;
}
function ni() {
  if (!X_) return;
  ((Q_ = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  X_.forEach((n) => t.addEventListener(n, Z_, e));
}
function ri() {
  return (
    a(() => {
      if (!Q_ || !X_) return;
      let e = { capture: !0 },
        t = document.body;
      (X_.forEach((n) => t.removeEventListener(n, Z_, e)),
        (X_ = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function ii(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function ai(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function oi() {
  ((vv = new _v()), vv.render.markStart());
}
function si() {
  (A(() => {
    vv?.useInsertionEffects.markRouterStart();
  }, []),
    r(() => {
      vv?.useLayoutEffects.markRouterStart();
    }, []),
    a(() => {
      vv?.useEffects.markRouterStart();
    }, []));
}
function ci() {
  (A(() => {
    (vv?.render.markEnd(), vv?.useInsertionEffects.markStart());
  }, []),
    r(() => {
      if ((vv?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        yv = !0;
        return;
      }
      je.read(() => {
        (vv?.browserRendering.requestAnimationFrame.markStart(),
          vv?.unattributedHydrationOverhead.measure());
      });
    }, []),
    a(() => {
      (vv?.useEffects.markStart(),
        vv?.browserRendering.hasStarted ||
          (vv?.mutationEffects.measure(), vv?.useEffects.markAreSynchronous()));
    }, []));
}
function li() {
  (A(() => {
    vv?.useInsertionEffects.markEnd();
  }, []),
    r(() => {
      (vv?.useLayoutEffects.markEnd(),
        !(yv || document.visibilityState !== `visible`) &&
          je.read(() => {
            (vv?.browserRendering.requestAnimationFrame.markEnd(),
              Tn().then(() => {
                vv?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    a(() => {
      vv?.useEffects.markEnd();
    }, []));
}
function ui() {
  return (ci(), null);
}
function di() {
  return (li(), null);
}
function fi(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return f.isValidElement(e) ? f.cloneElement(e, n) : _(e, { ...n });
}
function pi() {
  return Cv;
}
function mi(e) {
  if (wv?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      B(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: _i(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          B(t, `localizedPath must be defined`);
          let i = _i(t),
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
    wv = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: wv.pathRoutes,
    paths: wv.paths,
    pathRoutesLocalized: wv.pathRoutesLocalized,
    pathsLocalized: wv.pathsLocalized,
  };
}
function hi(e, t, n = !0, r = pi()) {
  return gi(e, t, r, n);
}
function gi(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = mi(e),
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
      let e = vi(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = vi(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = vi(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = vi(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function _i(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function vi(e, t) {
  let n = [],
    r = yi(t).replace(h_, (e, t) => (n.push(t), `([^/]+)`)),
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
function yi(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function bi() {
  if (`PerformanceServerTiming` in m) {
    let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
    if (!e || e.length === 0) return new URLSearchParams();
    let t = e.find((e) => e.name === `abtests`);
    return t ? new URLSearchParams(t.description) : new URLSearchParams();
  }
  return new URLSearchParams();
}
function xi(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n;
  if (!e[i]) return;
  let { abTestingParentId: a, ...o } = r,
    s = e[i].elements || r.elements ? { ...e[i].elements, ...r.elements } : void 0;
  e[i] = { ...o, elements: s, abTestingVariantId: n, abTestId: t };
}
function Si(e, t) {
  for (let [n, r] of t) xi(e, n, r);
}
function Ci(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function wi(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    { abTestingParentId: r, ...i } = e[t],
    a = e[n]?.elements || i.elements ? { ...e[n]?.elements, ...i.elements } : void 0;
  e[n] = { ...i, elements: a, abTestingVariantId: t };
}
function Ti(e, t) {
  if (m === void 0) return t;
  let n = t;
  if (t) {
    wi(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (Si(e, bi()), Ci(e), n);
}
function Ei(e) {
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
    A(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function Di(e, ...t) {
  Tv.has(e) || (Tv.add(e), console.warn(e, ...t));
}
function Oi(e, t, n) {
  Di(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function ki(e) {
  return (
    typeof e == `object` &&
    !!e &&
    Ov in e &&
    e[Ov] instanceof Function &&
    kv in e &&
    e[kv] instanceof Function
  );
}
function Ai(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = Dv(r);
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
function ji(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Mi(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Ni(e) {
  return Math.round(e * 2) / 2;
}
function Pi(e, t) {
  return { x: e, y: t };
}
function Fi(e, t, n, r = !1) {
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
function Ii(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Li(e) {
  let t = Ri(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function Ri(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function zi(e, t, n) {
  return (
    (Mv.rgb_r = e / 255),
    (Mv.rgb_g = t / 255),
    (Mv.rgb_b = n / 255),
    Mv.rgbToHsluv(),
    { h: Mv.hsluv_h, s: Mv.hsluv_s, l: Mv.hsluv_l }
  );
}
function Bi(e, t, n, r = 1) {
  return (
    (Mv.hsluv_h = e),
    (Mv.hsluv_s = t),
    (Mv.hsluv_l = n),
    Mv.hsluvToRgb(),
    { r: Mv.rgb_r * 255, g: Mv.rgb_g * 255, b: Mv.rgb_b * 255, a: r }
  );
}
function Vi(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function Hi(e, t, n) {
  return {
    r: Ii(e) ? Yi(e, 255) * 255 : 0,
    g: Ii(t) ? Yi(t, 255) * 255 : 0,
    b: Ii(n) ? Yi(n, 255) * 255 : 0,
  };
}
function Ui(e, t, n, r) {
  let i = [
    Qi(Math.round(e).toString(16)),
    Qi(Math.round(t).toString(16)),
    Qi(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function Wi(e, t, n) {
  let r,
    i,
    a = Yi(e, 255),
    o = Yi(t, 255),
    s = Yi(n, 255),
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
function Gi(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function Ki(e, t, n) {
  let r, i, a;
  if (((e = Yi(e, 360)), (t = Yi(t * 100, 100)), (n = Yi(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = Gi(s, o, e + 1 / 3)), (i = Gi(s, o, e)), (a = Gi(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function qi(e, t, n) {
  ((e = Yi(e, 255)), (t = Yi(t, 255)), (n = Yi(n, 255)));
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
function Ji(e, t, n) {
  ((e = Yi(e, 360) * 6), (t = Yi(t * 100, 100)), (n = Yi(n * 100, 100)));
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
function Yi(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    Xi(e) && (e = `100%`);
    let t = Zi(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function Xi(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function Zi(e) {
  return typeof e == `string` && e.includes(`%`);
}
function Qi(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function $i(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = jv[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = Nv.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = Nv.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = Nv.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: Li(r[2] ?? ``), l: Li(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = Nv.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: Li(r[2] ?? ``),
              l: Li(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = Nv.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: Li(r[2] ?? ``), v: Li(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = Nv.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: Li(r[2] ?? ``),
                  v: Li(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = Nv.hex8.exec(t))
                ? {
                    r: ea(r[1] ?? ``),
                    g: ea(r[2] ?? ``),
                    b: ea(r[3] ?? ``),
                    a: ta(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = Nv.hex6.exec(t))
                  ? {
                      r: ea(r[1] ?? ``),
                      g: ea(r[2] ?? ``),
                      b: ea(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = Nv.hex4.exec(t))
                    ? {
                        r: ea(`${r[1]}${r[1]}`),
                        g: ea(`${r[2]}${r[2]}`),
                        b: ea(`${r[3]}${r[3]}`),
                        a: ta(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = Nv.hex3.exec(t))
                      ? {
                          r: ea(`${r[1]}${r[1]}`),
                          g: ea(`${r[2]}${r[2]}`),
                          b: ea(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function ea(e) {
  return parseInt(e, 16);
}
function ta(e) {
  return ea(e) / 255;
}
function na(e) {
  let t = Pv.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function ra(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function ia({ r: e, g: t, b: n, a: r }) {
  return { r: ra(e), g: ra(t), b: ra(n), a: r };
}
function aa(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function oa({ r: e, g: t, b: n, a: r }) {
  return { r: aa(e), g: aa(t), b: aa(n), a: r };
}
function sa({ r: e, g: t, b: n, a: r }) {
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
function ca(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function la({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = ca(e),
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
function ua(e) {
  return Rv(Lv(e));
}
function da(e) {
  return Iv(Fv(e));
}
function fa(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = ha({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = pa(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? ha(e)
              : ga(e)),
    i
  );
}
function pa(e) {
  let t = $i(e);
  if (t) return t.format === `hsl` ? ga(t) : t.format === `hsv` ? ma(t) : ha(t);
}
function ma(e) {
  let t = Ji(e.h, e.s, e.v);
  return { ...Wi(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : _a(e.a) };
}
function ha(e) {
  let t = Hi(e.r, e.g, e.b);
  return { ...Wi(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : _a(e.a) };
}
function ga(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = Ii(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Ii(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = Ri(e.s)),
    (r = Ii(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = Ri(e.l)),
    (i = Ki(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function _a(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function va() {
  return K.location.origin === `https://screenshot.framer.invalid`;
}
function ya({ children: e }) {
  if (c(Qv).top) return _(O, { children: e });
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
            B(!!c, `duplicatedId must be defined`);
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
          { layoutId: m, value: h } = ba(p, (n.current.count[o][p] ?? -1) + 1, i);
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
  return _(Qv.Provider, { value: a, children: e });
}
function ba(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function xa({ enabled: e = !0, ...t }) {
  let n = c(Qv),
    r = l(() => ({ ...n, enabled: e }), [e]);
  return _(Qv.Provider, { ...t, value: r });
}
function Sa(e) {
  let n = t(null);
  return (n.current === null && (n.current = e()), n.current);
}
function Ca(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${wa(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return T(`div`, {
    style: ey,
    children: [
      _(`div`, { className: `text`, style: ny, children: r }),
      i && _(`div`, { className: `text`, style: ry, children: i }),
    ],
  });
}
function wa(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function H(e) {
  return Number.isFinite(e);
}
function Ta(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Ea(e) {
  return typeof e != `string` && typeof e != `number`;
}
function Da(e) {
  return e != null && typeof e != `boolean` && !Ta(e);
}
function Oa(e) {
  return (Math.PI / 180) * e;
}
function ka(e) {
  return tt(e) ? !1 : e === 2 || e === 5;
}
function Aa(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function ja(e, t, n, r) {
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
      if (!r) return Ma(e);
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
function Ma(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      V(e, `unknown constraint key`);
  }
}
function Na(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(ja(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(ja(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function Pa(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(ja(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(ja(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function Fa(e, t, n, r, i) {
  let a = Pa(H(e) ? e : cy, n, r, i),
    o = Na(H(t) ? t : ly, n, r, i);
  return (
    H(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (H(n.left) && H(n.right)
        ? (o = a / n.aspectRatio)
        : (H(n.top) && H(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function Ia(e, t) {
  return !H(e) || !H(t) ? null : e + t;
}
function La(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function Ra(e) {
  return !e._constraints || La(e) ? !1 : e._constraints.enabled;
}
function za(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    H(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    H(n) && H(r) ? { width: n, height: r } : null
  );
}
function Ba(e) {
  let t = za(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return H(n) && H(r) ? { x: n, y: r, ...t } : null;
}
function Va(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Ra(e) || r) return Ba(e);
  let i = Ha(e),
    a = Ua(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return sy.toRect(i, o, null, n, null);
}
function Ha(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = oy.quickfix({
      left: H(t),
      right: H(n),
      top: H(r),
      bottom: H(i),
      widthType: Aa(c),
      heightType: Aa(l),
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
function Ua(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Wa() {
  return f.useContext(uy).parentSize;
}
function Ga(e) {
  return typeof e == `object`;
}
function Ka(e) {
  return Ga(e) ? e.width : e;
}
function qa(e) {
  return Ga(e) ? e.height : e;
}
function Ja(e, t) {
  return _(dy, { parentSize: t, children: e });
}
function Ya(e) {
  return Va(e, Wa(), !0);
}
function Xa({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function Za(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function Qa(e, t, n = my) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!hy) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) hy = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = hy;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function $a() {
  return va() ? J.preview : J.current();
}
function eo(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? Ty.variable(e) : e === `` ? `""` : e;
}
function to(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return no(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return ro(r);
    case `lower-roman`:
    case `upper-roman`:
      return ao(r);
    default:
      return no(r);
  }
}
function no(e) {
  return String(e).length;
}
function ro(e) {
  let t = 1;
  for (; io(t) < e; ) t++;
  return t;
}
function io(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function ao(e) {
  let t = 0;
  for (let n of Oy) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function oo(e, t) {
  return Ty.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function so(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function co() {
  return J.current() === J.preview ? qy.value : Ky.value;
}
function lo(e) {
  return yy(e, co, `framer-lib-combinedCSSRules`);
}
function uo(e) {
  return z(e) || Ze(e);
}
function fo(e) {
  return !!e && Jy in e && e[Jy] === !0;
}
function po(e) {
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
        return L(e.defaultValue) ? e.defaultValue : void 0;
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
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return $e(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return $e(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = z(e.defaultValue) ? e.defaultValue : {};
        return (z(e.controls) && mo(t, e.controls), t);
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
function mo(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!tt(i) || fo(r)) continue;
    let a = po(r);
    tt(a) || (e[n] = a);
  }
}
function ho(e) {
  if (z(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function go(e, t) {
  uo(e) && mo(ho(e), t);
}
function _o(e, t) {
  (Object.assign(e, { propertyControls: t }), go(e, t));
}
function vo(e) {
  return e.propertyControls;
}
function yo() {
  let e = J.current();
  return e === J.canvas || e === J.export;
}
function bo() {
  let [e] = s(() => yo());
  return e;
}
function xo(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function So(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of ab) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function Co(e, t) {
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
function wo(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < ob) continue;
    let n = Co(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${Co(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function To(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of ib) {
    let n = Co(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function Eo(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = To(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: wo(n, t, So(t.pixelWidth, t.pixelHeight)) };
}
function Do() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: ct(nb.imagePlaceholderSvg),
  };
}
function Oo(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function ko(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function Ao(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...rb,
    objectPosition: ko(e.positionX, e.positionY),
    objectFit: Oo(e.fit),
  };
}
function jo(e) {
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
function Mo({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = nb.useImageSource(e, t, n),
    s = Ao(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = jo(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : Eo(e.nodeFixedSize, e, o);
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
function No({ image: e, containerSize: t, nodeId: n }) {
  let r = f.useRef(null),
    i = nb.useImageElement(e, t, n),
    a = Ao(e);
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
    _(`div`, { ref: r, style: { display: `contents`, ...rb } })
  );
}
function Po({ nodeId: e, image: t, containerSize: n }) {
  let r = f.useRef(null),
    i = nb.useImageSource(t, n, e);
  return (
    f.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = Ao(t);
      nb.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    _(`div`, { ref: r, style: { display: `contents`, ...rb } })
  );
}
function Fo({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (L(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = R(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Ni(e * (t.pixelWidth / 2)),
        s = nb.useImageSource(t, n);
      ((r = {
        ...sb,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: ko(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        J.current() === J.canvas
          ? nb.canRenderOptimizedCanvasImage(nb.useImageSource(t))
            ? _(Po, { image: t, ...n })
            : _(No, { image: t, ...n })
          : _(Mo, { image: t, avoidAsyncDecoding: J.current() === J.export, ...n });
  let o = a ? sb : (r ?? { ...sb, ...Do() });
  return i
    ? _(N.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : _(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function Io(e, t, n = !0) {
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
function Lo(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...rb,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), _(N.div, { style: n }))
    : (Io(e, n, !1), _(N.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function Ro(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function zo(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !lb.isImageObject(t)) return;
  let r = null;
  if (((r = L(n) ? { alt: ``, src: n } : Dv.get(t, null)), lb.isImageObject(r))) return Ro(r, e);
}
function Bo(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Vo(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? N[e] : N.div;
}
function Ho(e, t) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0));
}
function Uo(e) {
  let t = {};
  return (!e || !ub || J.current() !== J.canvas || Ho(t, e), t);
}
function Wo(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function Go(e, t) {
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
function Ko(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function qo(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: o = !1, drag: s } = e,
    { getLayoutId: u, enabled: d } = c(Qv);
  return l(() => {
    if (!d) return e.layoutId;
    let c = t || e.layoutId;
    if (!c && (s || !i || o)) return;
    let l = c || u({ id: i, name: r, duplicatedFrom: a });
    if (l) return n ? `${l}-${n}` : l;
  }, [d]);
}
function Jo() {
  let [e, t] = f.useState(0);
  return f.useCallback(() => t((e) => e + 1), []);
}
function Yo(e) {
  let t = Jo();
  a(() => {
    let n = e?.current;
    if (n)
      return (
        mb?.observeElementWithCallback(e.current, t),
        () => {
          mb?.unobserve(n);
        }
      );
  }, [e, t]);
}
function Xo(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(hb)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Zo)
    .map(Qo);
}
function Zo(e) {
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
function Qo(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(Zo);
  return t ? Qo(t) : e;
}
function $o(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    l = c(fb),
    u = J.current() === J.canvas;
  db(() => {
    !u ||
      l ||
      s ||
      (t.current && i && a && o && nb.queueMeasureRequest(Wo(i), t.current, n(t.current)));
  });
}
function es(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && nb.queueMeasureRequest(Wo(t.id), t, Xo(t));
}
function ts(e) {
  e.willChange = `transform`;
  let t = J.current() === J.canvas;
  vb && t && (e.translateZ = gb);
}
function ns(e) {
  ((e.willChange = `transform`), rs(e, !0));
}
function rs(e, t) {
  let n = J.current() === J.canvas;
  if (!vb || !n) return;
  let r = (L(e.transform) && e.transform) || ``;
  t ? r.includes(_b) || (e.transform = r + _b) : (e.transform = r.replace(_b, ``));
}
function is(e, t, n, r = !0) {
  if (!e) return;
  let i = Yy(e.style),
    a = n || i[t],
    o = () => {
      as(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function as(e) {
  return L(e) || R(e) || nt(e);
}
function os(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function ss(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  os(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function cs(e, t) {
  let n = [e, t];
  return Sb.test(e) ? e : ss(1e3, Cb, n, () => xb.multiplyAlpha(e, t));
}
function ls(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: cs(e.value, t) }))
  );
}
function us(e, t) {
  let n = 0;
  return (
    ls(e, t).forEach((e) => {
      n ^= bb(e.value) ^ e.position;
    }),
    n
  );
}
function ds(e) {
  return e && wb.every((t) => t in e);
}
function fs(e) {
  return e && Tb.every((t) => t in e);
}
function ps({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || Vv(t)
      ? (n.backgroundColor = t)
      : q.isColorObject(e) && (n.backgroundColor = e.initialValue || q.toRgbString(e))
    : e &&
      ((e = Dv.get(e, null)),
      typeof e == `string` || Vv(e)
        ? (n.background = e)
        : Db.isLinearGradient(e)
          ? (n.background = Db.toCSS(e))
          : kb.isRadialGradient(e)
            ? (n.background = kb.toCSS(e))
            : q.isColorObject(e) && (n.backgroundColor = e.initialValue || q.toRgbString(e)));
}
function U(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function ms(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function hs(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function gs(e) {
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
    U(e, `size`, t),
    U(e, `width`, t),
    U(e, `height`, t),
    U(e, `minWidth`, t),
    U(e, `minHeight`, t),
    U(e, `top`, t),
    U(e, `right`, t),
    U(e, `bottom`, t),
    U(e, `left`, t),
    U(e, `position`, t),
    U(e, `overflow`, t),
    U(e, `opacity`, t),
    (!e._border || !e._border.borderWidth) && U(e, `border`, t),
    U(e, `borderRadius`, t),
    U(e, `radius`, t, `borderRadius`),
    U(e, `color`, t),
    U(e, `shadow`, t, `boxShadow`),
    U(e, `x`, t),
    U(e, `y`, t),
    U(e, `z`, t),
    U(e, `rotate`, t),
    U(e, `rotateX`, t),
    U(e, `rotateY`, t),
    U(e, `rotateZ`, t),
    U(e, `scale`, t),
    U(e, `scaleX`, t),
    U(e, `scaleY`, t),
    U(e, `skew`, t),
    U(e, `skewX`, t),
    U(e, `skewY`, t),
    U(e, `originX`, t),
    U(e, `originY`, t),
    U(e, `originZ`, t),
    ps(e, t),
    t
  );
}
function _s(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof Yy(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function vs(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (jb.has(t)) return `pointer`;
}
function ys(e) {
  return bs(e) ? !0 : e.style ? !!bs(e.style) : !1;
}
function bs(e) {
  return Mb in e && (e[Mb] === `scroll` || e[Mb] === `auto`);
}
function xs(e) {
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
    m = ye(e.minWidth),
    h = ye(e.minHeight),
    g = ye(e.maxWidth),
    _ = ye(e.maxHeight);
  return {
    top: ye(n),
    left: ye(t),
    bottom: ye(r),
    right: ye(i),
    width: ye(a),
    height: ye(o),
    size: ye(l),
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
function Ss(e) {
  let t = c(fb),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = xs(e),
    s = Ya(o),
    l = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: J.current() === J.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let u = !_s(e) && !e.__fromCanvasComponent && !ys(e),
    d = !e.style || !(`pointerEvents` in e.style);
  u && d && (l.pointerEvents = `none`);
  let p = f.Children.count(e.children) > 0 &&
      f.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    m = gs(e);
  (a === void 0 && !i && (ms(m) || (l.width = Nb.width), hs(m) || (l.height = Nb.height)),
    o.minWidth !== void 0 && (l.minWidth = o.minWidth),
    o.minHeight !== void 0 && (l.minHeight = o.minHeight));
  let h = {};
  (Ra(o) &&
    s &&
    !Xa(e) &&
    (h = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(l, p, r, m, h, n),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    yb.applyWillChange(e, l, !0));
  let g = l;
  l.transform || (g = { x: 0, y: 0, ...l });
  let _ = yo();
  return (
    e.positionSticky
      ? (!_ || nb.isOnPageCanvas || t) &&
        ((g.position = `sticky`),
        (g.willChange = `transform`),
        (g.top = e.positionStickyTop),
        (g.right = e.positionStickyRight),
        (g.bottom = e.positionStickyBottom),
        (g.left = e.positionStickyLeft))
      : _ &&
        (e.positionFixed
          ? (g.position = nb.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (g.position = `absolute`)),
    `rotate` in g && g.rotate === void 0 && delete g.rotate,
    [g, s]
  );
}
function Cs(e) {
  let t = {};
  for (let n in e)
    (Je(n) || Zy(n)) && !Pb.has(n)
      ? (t[n] = Yy(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof Yy(e)[n] != `boolean` && !e.transition && (t.transition = Yy(e)[n]));
  return t;
}
function ws(e) {
  return `data-framer-name` in e;
}
function Ts(e, t, n, r) {
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
function Es(e) {
  return _(N.div, { layoutId: Lb, style: Bb, children: e.children });
}
function Ds(e, t) {
  Ze(e) ? e(t) : Os(e) && (e.current = t);
}
function Os(e) {
  return z(e) && `current` in e;
}
function ks() {
  let e = Sa(() => new Set()),
    t = Sa(() => new Map());
  return Sa(() => (n, r) => ({
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
function As(e) {
  let n = t(null),
    r = ks();
  return Sa(() => (Os(e) ? r(e) : Ze(e) ? r(n, e) : r(n)));
}
function js(e, n, r) {
  let i = t(),
    a = t();
  (qr(
    () => {
      a.current !== void 0 && (a.current = !0);
    },
    r ?? [{}]
  ),
    e &&
      a.current !== !1 &&
      ((a.current = !1), e.unobserve(i.current), e.observe(n), (i.current = n)));
}
function Ms(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new Vb({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Ns(e, t, n) {
  let r = Sa(() => `${n.rootMargin}`),
    i = c(Hb),
    { enabled: a, root: o, rootMargin: s, threshold: l } = n;
  js(
    e,
    (e) => {
      if (a && e !== null) return Ms(i, r, e, o, t, s, l);
    },
    [a, t, o, s, l]
  );
}
function Ps(e, t, n) {
  let r = f.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  Ub(
    e,
    f.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = Is(e, o?.y ?? 0);
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
    { threshold: Wb, rootMargin: s, enabled: i ?? !0 }
  );
}
function Fs(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, K.innerHeight);
}
function Is({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && Fs(t, e) >= r;
}
function Ls() {
  return new Map();
}
function Rs() {
  return Sa(Ls);
}
function zs(e, t = []) {
  let { register: n, deregister: r } = c(Yb);
  a(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function Bs(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function Vs(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (H(t.originX) && (r.originX = t.originX),
      H(t.originY) && (r.originY = t.originY),
      H(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (H(n.originX) && (r.originX = n.originX),
      H(n.originY) && (r.originY = n.originY),
      H(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function Hs(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function Us(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return tx.PushLeft;
    case `left`:
      return tx.PushRight;
    case `bottom`:
      return tx.PushUp;
    case `top`:
      return tx.PushDown;
  }
}
function Ws(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return tx.OverlayLeft;
    case `left`:
      return tx.OverlayRight;
    case `bottom`:
      return tx.OverlayUp;
    case `top`:
      return tx.OverlayDown;
  }
}
function Gs(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return tx.FlipLeft;
    case `left`:
      return tx.FlipRight;
    case `bottom`:
      return tx.FlipUp;
    case `top`:
      return tx.FlipDown;
  }
}
function Ks(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return Js(e, t.transition, t.component);
    case `removeOverlay`:
      return Ys(e);
    case `add`:
      return Xs(e, t.key, t.transition, t.component);
    case `remove`:
      return $s(e);
    case `update`:
      return qs(e, t.key, t.component);
    case `back`:
      return Zs(e);
    case `forward`:
      return Qs(e);
    default:
      return;
  }
}
function qs(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function Js(e, t, n) {
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
function Ys(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function Xs(e, t, n, r) {
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
    c = i?.key && n.withMagicMotion ? ic(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = nc(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = ec(e, t, c),
    p = rc(l, u, e.history, e.containerIndex, e.transitionForContainer);
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
function Zs(e) {
  let t = { ...e.containers },
    n = $s(e);
  if (n) return ((n.containers = t), n);
}
function Qs(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = Xs(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function $s(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (B(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = tc(e, r, n),
    u = rc(i, a, e.history, e.containerIndex, e.transitionForContainer);
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
function ec(e, t, n) {
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
function tc(e, t, n) {
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
function nc(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function rc(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = ac(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function ic(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1 ||
        !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function ac(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return oc(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return oc(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return oc(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return oc(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function oc(e, t, n) {
  let r = {},
    i = {};
  return (
    rx.forEach((e) => {
      ((r[e] = Qb[e]), (i[e] = { ...n, from: Qb[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${Yy(Qb)[a]}%` : Yy(Qb)[a];
        ((Yy(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function sc(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function cc({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function lc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
      ? t.transition.animation
      : sx;
}
function uc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function dc(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function fc(e, t) {
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
function pc(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function mc(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function hc(e, t) {
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
function gc(e, t) {
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
  return sx;
}
function _c(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function vc(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function yc(e) {
  return f.Children.map(e.component, (t) => {
    if (!Da(t) || !Ea(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? z(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      f.cloneElement(t, n)
    );
  });
}
function bc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function xc(e, t) {
  let n = ae(),
    r = _e();
  return _(ox, {
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
function Sc(e) {
  return mx in e;
}
function Cc(e, t) {
  if (!Sc(e)) return;
  let n = Dv.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function wc(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function Tc(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function Ec(e, t) {
  let n = [];
  (H(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    H(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    H(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    H(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    H(e.invert) && n.push(`invert(${e.invert / 100})`),
    H(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    H(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    H(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...wc(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function Dc(e, t) {
  H(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Oc(e, t) {
  (Dc(e, t), Ec(e, t));
}
function kc(e, t) {
  let n,
    r = (...r) => {
      (K.clearTimeout(n), (n = K.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      K.clearTimeout(n);
    }),
    r
  );
}
function Ac(...e) {
  return e.filter(Boolean).join(` `);
}
function jc(e, t) {
  let n = {},
    r = {};
  for (let i in e) {
    let a = Mc(i);
    if (a && t.has(a)) {
      n[a] = e[i];
      continue;
    }
    r[i] = e[i];
  }
  return [n, r];
}
function Mc(e) {
  if (e.startsWith(yx)) return e.substr(bx);
}
function Nc(e, t, n) {
  let r = i.map(e, (e) => (y(e) ? C(e, t) : e));
  return n ? r : _(O, { children: r });
}
function Pc(e) {
  let t = Sa(() => Fc(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function Fc(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = Ic(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = Ic(t)));
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
          let i = Ze(o) ? o(e.props) : o;
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
function Ic(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (Ds(n, e), Ds(t, e));
  };
}
function Lc(e, t, n, r, i, a, o, s) {
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
    if (!n || !Vc(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = Bc([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let p = Bc([i, ...d], a);
  p.length && u.unshift({ variants: p });
  let m = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = _(
        Sx.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = zc(e, a, r);
    (f.length
      ? (B(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = _(
          `div`,
          { className: `${Cx} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : B(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      m.push(d));
  }
  return (
    B(!s || m.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? m : [...m, _(`div`, { className: wx }, `property-overrides-separator`)]
  );
}
function Rc(e) {
  return e.split(`-`)[2];
}
function zc(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${Rc(a)}`);
  }
  return r;
}
function Bc(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function Vc(e, t) {
  for (let n of Object.keys(t)) if (!Ot(e[n], t[n], !0)) return !0;
  return !1;
}
function Hc(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function Uc(e) {
  return f.forwardRef(({ optimized: t, ...n }, r) => {
    let i = f.useContext(xx),
      a = f.useContext(Sx)?.variants,
      o = n[Nx];
    o && !Rn() && jx.setAll(o, a, t ? n : null, i);
    let s = Fx(n);
    return _(e, { ref: r, ...n, ...s });
  });
}
function Wc(e) {
  return L(e) || Array.isArray(e);
}
function Gc(e) {
  return e in X;
}
function Kc(e, t) {
  let n = Sa(() => ({ values: Lx(t ? e : void 0) }));
  return (
    f.useEffect(() => {
      if (!t)
        for (let e of Ix) {
          let t = X[e];
          tt(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function qc(
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
  let f = Xe(),
    p = Sa(Lx),
    m = t(!1),
    h = Vx(),
    g = t(null),
    _ = u(async () => {
      if (!o) return;
      let e = r || void 0,
        t = m.current && i === `mirror`,
        n = t ? X : o,
        a = t ? o : X;
      return (
        (m.current = !m.current),
        (g.current = Promise.all(
          Ix.map((t) => {
            if (!(f && t !== `opacity`))
              return (
                p[t].jump(a[t] ?? X[t]),
                new Promise((r) => {
                  let i = { ...e, onComplete: () => r() },
                    o = n[t] ?? a[t];
                  typeof o == `number` && ke(p[t], o, i);
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
      b.current || ((b.current = !0), k(() => y(!0)), x());
    }, [x]),
    C = u((e = !0) => {
      (Ix.forEach((e) => {
        p[e].stop();
      }),
        Ix.forEach((e) => {
          p[e].set(X[e]);
        }),
        (m.current = !1),
        e && ((b.current = !1), k(() => y(!1))));
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
  Ub(
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
  return l(() => ({ values: p, style: w && O ? Rx : zx }), [w, O]);
}
function Jc(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function Yc(e, t, n) {
  let { speed: r = 100, offset: i = 0, adjustPosition: a = !1, parallaxTransformEnabled: o } = e,
    s = f.useRef(null),
    l = Xe(),
    u = f.useCallback(
      (e) => (s.current === null || r === 100 ? 0 : Jc(e, s.current, r, i, a)),
      [r, i, a]
    ),
    { scrollY: d } = be(),
    p = P(d, u),
    m = fe(a && s.current === null ? `hidden` : n),
    h = fe(0),
    g = c(Hb);
  return (
    js(
      t,
      (e) => {
        if (e === null || !o) return;
        let t = Ms(g, `undefined`, e, null, (e) => {
          ((s.current = e.boundingClientRect.top),
            je.update(() => {
              (p.set(u(d.get())), a && m.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [a, o]
    ),
    Ft(() => {
      o && p.set(0);
    }),
    { values: { y: l || !o ? h : p }, style: o ? { ...Rx, visibility: m } : zx }
  );
}
function Xc(e) {
  return typeof e == `object` && !!e;
}
function Zc(e) {
  if (Xc(e)) return e?.transition;
}
function Qc(e, t, n, r, i, a) {
  let o = Zc(e);
  return Promise.all(
    Ix.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = Xc(e) ? (e?.[s] ?? X[s]) : X[s];
          if ((Te(u) && (u = u.get()), !R(u))) return c();
          let d = xe.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (L(i) && !l?.hasAnimated && K.MotionHandoffAnimation) {
            let e = K.MotionHandoffAnimation(i, s, je);
            e && (f = e);
          }
          a ? l.set(u) : ke(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function $c(
  { initial: e, animate: n, exit: r, presenceInitial: i, presenceAnimate: a, presenceExit: o },
  s,
  c,
  u,
  d
) {
  let f = i ?? e,
    p = a ?? n,
    m = o ?? r,
    [h, g] = me(),
    _ = t({ lastPresence: !1, lastAnimate: p, hasMounted: !1, running: !1 }),
    v = Sa(() => {
      let e = f ?? u;
      if (!z(e)) return { values: Lx() };
      let t = {};
      for (let n in e) {
        let r = z(e) ? e[n] : void 0;
        R(r) && (t[n] = r);
      }
      return { values: Lx(t) };
    });
  js(
    s,
    (e) => {
      let { hasMounted: t } = _.current;
      if (t && p) return;
      let n = xe.get(e);
      if (n) {
        Object.assign(_.current, { hasMounted: !0 });
        for (let e in v.values) {
          if (!Gc(e)) continue;
          let t = u?.[e];
          n.setBaseTarget(e, R(t) ? t : X[e]);
        }
      }
    },
    [p]
  );
  let y = Xe();
  js(s, (e) => {
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
            Qc(p, v, y, s, d).then(() => Object.assign(_.current, { running: !1 })))
          : m
            ? (Object.assign(_.current, { running: !0 }),
              Qc(m, v, y, s, d)
                .then(() => Object.assign(_.current, { running: !1 }))
                .then(() => g()))
            : g());
      return;
    }
    let { lastAnimate: t, running: n } = _.current;
    Ot(p, t) ||
      !p ||
      (Object.assign(_.current, { lastAnimate: p }),
      Qc(p, v, y, s, d, !n).then(() => Object.assign(_.current, { running: !1 })));
  });
  let b = c && p;
  return l(() => ({ values: v.values, style: b ? Rx : zx }), [b]);
}
function el(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; ) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function tl(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o || !o.current) continue;
    let c = el(o.current, document.documentElement) - Wx - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function nl(e, t = 0) {
  return e < t ? `up` : `down`;
}
function rl(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Pt();
  f.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return ce((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = nl(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < Gx) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function il(e, t, n) {
  let r = tl(e, t),
    i = [...qx],
    a = r[0];
  if (!R(a)) return Jx;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!R(e)) return Jx;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function al(e) {
  return {
    x: e?.x ?? X.x,
    y: e?.y ?? X.y,
    scale: e?.scale ?? X.scale,
    opacity: e?.opacity ?? X.opacity,
    transformPerspective: e?.transformPerspective ?? X.transformPerspective,
    rotate: e?.rotate ?? X.rotate,
    rotateX: e?.rotateX ?? X.rotateX,
    rotateY: e?.rotateY ?? X.rotateY,
    skewX: e?.skewX ?? X.skewX,
    skewY: e?.skewY ?? X.skewY,
    transition: e?.transition ?? void 0,
  };
}
function ol({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return f.useMemo(
    () => ({
      initial: r ?? al({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? al({ opacity: t }),
      exit: i ?? al(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function sl(e, t) {
  let n = Xe(),
    r = ol(e),
    i = e.styleAppearEffectEnabled,
    a = Kc(i ? r.initial : r.animate, i),
    o = f.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = Pt(),
    c = f.useRef(),
    u = f.useCallback(async ({ transition: i, ...o }, s) => {
      let l = i ?? r.animate.transition ?? e.transition;
      await c.current;
      let u = xe.get(t.current);
      c.current = Promise.all(
        Ix.map((e) => {
          s && a.values[e].set(r.initial[e] ?? X[e]);
          let t = o[e] ?? X[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (R(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...l, onComplete: () => r() };
                typeof t == `number` && ke(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    d = e.animateOnce && o.current.lastAppearState === !0;
  Ps(
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
      return ce((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = il(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let l = Pe(a.current, s, c);
        if ((e.animateOnce && t[l]) || ((t[l] = !0), n === l)) return;
        n = l;
        let d = Yy(r)[l];
        d && u(d);
      });
    }, [s, p]),
    rl(e.scrollDirection, (e) => void u(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    Ft(() => {
      if (i && !(!e.targets && !e.scrollDirection))
        for (let e of Ix) a.values[e].set(r.initial?.[e] ?? X[e]);
    }),
    l(() => ({ values: a.values, style: i ? Rx : zx }), [i])
  );
}
function cl(e, t) {
  let n = f.useRef({});
  f.useEffect(() => {
    if (t !== void 0)
      for (let r of hg(e)) {
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
function ll(e, t) {
  let n = Zx();
  return {
    inputRange: tl(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of Ix) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function ul(e) {
  let t = Zx();
  for (let { target: n } of e) for (let e of Ix) t[e]?.push(n[e]);
  return t;
}
function dl(
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
    c = Kc(Xx(n, s), t),
    l = !t || !n,
    u = e === `onScrollTarget`,
    d = Pt();
  return (
    r(() => {
      if (!(l || !u))
        return ce((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: i } = ll(n, a * t.containerLength);
          if (r.length !== 0)
            for (let e of Ix)
              (s && e !== `opacity`) ||
                (r.length === i[e].length &&
                  i[e][0] !== void 0 &&
                  c.values[e].set(Pe(t.current, r, i[e])));
        });
    }, [s, u, a, n, l]),
    js(
      o,
      (t) => {
        if (l || u || t === null) return;
        let r = ul(n);
        return ce(
          (e, { y: t }) => {
            for (let e of Ix)
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
    cl(c.values, i),
    Ft(() => {
      if (l) return;
      let e = Xx(n, s);
      for (let t of Ix) c.values[t].set(e?.[t] ?? X[t]);
    }),
    f.useMemo(() => ({ values: c.values, style: t ? Rx : zx }), [t])
  );
}
function fl(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function pl(e) {
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
    let r = Mc(n);
    if (r) {
      for (let i of eS)
        if ($x[i]?.has(r)) {
          t[i][r] = Yy(e)[n];
          break;
        }
    } else t.forwardedProps[n] = Yy(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = fl(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = fl(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function ml(e) {
  return z(e) && rS in e;
}
function hl(e, t) {
  if (!e || !z(e)) return t;
  for (let n in e) {
    let r = e[n];
    !Te(r) || !Gc(n) || (R(r.get()) && t[n].push(r));
  }
}
function gl(e) {
  return L(e) || Array.isArray(e);
}
function _l() {
  return f.useContext(aS);
}
function vl(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function yl() {
  if (m === void 0 || cS)
    return _(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw uS;
}
function bl({ children: e }) {
  return c(fS) ? _(O, { children: e }) : _(E, { fallback: dS, children: e });
}
function xl() {
  return _(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function Sl(e, t) {
  if (!ng || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  ln(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Cl(...e) {
  console.error(...e);
}
function wl() {
  return J.current() !== J.canvas;
}
function Tl({ getErrorMessage: e, fallback: t, children: n }) {
  return wl()
    ? _(El, { fallback: t, children: _(mS, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function El({ children: e, fallback: t = pS }) {
  return m === void 0 ? _(E, { fallback: t, children: e }) : _(bl, { children: e });
}
function Dl() {
  return f.useContext(gS);
}
function Ol() {
  let e = Dl();
  return f.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0; ) t = t.parent;
    return t;
  }, [e]);
}
function kl({ children: e, scopeId: t, nodeId: n }) {
  let r = Dl(),
    i = f.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return _(gS.Provider, { value: i, children: e });
}
function Al(e, t) {
  return `${_S}${e}:${t}`;
}
function jl(e, t) {
  return Nl(`component`, e, t);
}
function Ml(e, t) {
  return Nl(`override`, e, t);
}
function Nl(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${Al(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function Pl(e, t, n, r, i, a) {
  let o = Il(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function Fl(e, t, n, r) {
  return Il(e, t, n, r);
}
function Il(e, t, n, r) {
  return !!(tt(n) || (n === 1 && r && e === t));
}
function Ll(e, t, n, r, i, a) {
  let o = Dl();
  if (tt(t) || tt(n)) return _(hS, { children: e });
  let { disableCustomCode: s } = p_();
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
    : (Pl(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = _(Tl, { getErrorMessage: jl.bind(null, t, n), fallback: null, children: e })),
      i && (e = _(kl, { scopeId: t, nodeId: n, children: e })),
      e);
}
function Rl(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function zl(e) {
  return !(!e || e.placement || e.alignment);
}
function Bl(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      V(e);
  }
}
function Vl(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${Bl(t)}, -100%`;
    case `right`:
      return `0%, ${Bl(t)}`;
    case `bottom`:
      return `${Bl(t)}, 0%`;
    case `left`:
      return `-100%, ${Bl(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function Hl(e, t) {
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
function Ul(e) {
  let { registerCursors: t } = c(bS),
    n = Sa(() => e),
    i = ne();
  r(() => t(n, i), [t, i]);
}
function Wl(e) {
  return !!(e && typeof e == `object` && OS in e);
}
function Gl(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function Kl() {
  return J.current() === J.canvas;
}
function ql(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function Jl(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function Yl(e, t, n, r) {
  if (L(e)) {
    let i = ql(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    let { routeId: s } = hi(t.routes, o, void 0, r);
    return t.getRoute(s);
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function Xl(e) {
  return L(e) && e.startsWith(`data:${FS}`);
}
function Zl(e) {
  if (Xl(e))
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
function Ql(e, t, n) {
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
    let n = Zl(e);
    if (!n || !n.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function $l(e) {
  if (!Xl(e)) return e;
  let t = Zl(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: eu(i) };
}
function eu(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function tu(e, t, n, r, a, o) {
  let s = c(IS),
    d = Ol(),
    f = l(() => ({ scopeId: t, nodeId: n, furthestExternalComponent: d }), [t, n, d]),
    p = jt(),
    m = Nt(),
    { locales: h } = Yr(),
    g = l(() => {
      let e = Wl(r) ? r : $l(r);
      if (e) return Yl(e, p, m, h);
    }, [m, r, p, h]),
    v = !!(!Kl() && s?.nodeId && f.nodeId),
    y = u(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), Wn(e))) {
            iu(a.href, ``, `_blank`);
            return;
          }
          g ? a.navigate?.() : iu(a.href, a.rel, a.target);
        }
      },
      [a, g]
    ),
    b = u(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), iu(a.href, ``, `_blank`));
      },
      [a]
    ),
    x = u(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          g ? a.navigate?.() : iu(a.href, a.rel, a.target));
      },
      [a, g]
    );
  js(
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
        ru(e) &&
          (B(
            nu(s),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          B(
            nu(f),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          AS.collectNestedLink(s, f));
      }),
      (S = i.map(e, (e) => {
        if (!ru(e)) return e;
        let t = au(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: y,
            onAuxClick: b,
            onKeyDown: x,
            as: r.as && au(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return ee(t, { ...i, ref: a }, n);
      }))),
    _(IS.Provider, { value: f, children: S })
  );
}
function nu(e) {
  return !tt(e?.nodeId);
}
function ru(e) {
  return y(e) && (au(e.type) !== e.type || au(e.props.as) !== e.props.as);
}
function iu(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function au(e) {
  return e === `a` ? `span` : Ye(e) && Ne(e) === `a` ? N.span : e;
}
function ou(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : ou(e.parentElement, t)
      : null;
}
function su({ children: e }) {
  return _(bl, { children: e });
}
function cu(e) {
  return h(function (t, n) {
    return _(su, { children: _(e, { ...t, ref: n }) });
  });
}
function lu(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return du(e, t, o, s, a, c, l, i, r);
}
function uu(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && ql(t))
    try {
      let [i, a] = t.split(`#`, 2);
      B(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      B(o !== void 0, `A href must have a defined pathname.`);
      let { routeId: s, pathVariables: c, localeId: l } = hi(e.routes, o, void 0, r),
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
function du(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = rr(d, {
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
function fu() {
  let e = c(HS),
    t = Nt()?.pathVariables;
  return e || t;
}
function pu(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(VS)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function mu() {
  let e = n.connection || n.mozConnection || n.webkitConnection || {},
    t = n.deviceMemory && n.deviceMemory > GS,
    r,
    i,
    a;
  function o() {
    ((r = e.effectiveType || ``),
      (i = e.saveData || r.includes(`2g`)),
      (a = r === `3g` || t ? KS : qS));
  }
  (e.addEventListener?.(`change`, o), o());
  let s = new IntersectionObserver(u, { threshold: WS }),
    c = 0;
  async function l(e, t) {
    if (i) return;
    let { id: n, preload: r } = e,
      a = XS.get(n);
    if (!a?.size || YS.has(n)) return;
    (++c, YS.add(n));
    let o = r()?.catch(() => {});
    (s.unobserve(t), JS.delete(t));
    for (let e of a) (s.unobserve(e), JS.delete(e));
    (a.clear(), XS.delete(n), await o, --c);
  }
  function u(e) {
    for (let t of e) {
      let e = t.target,
        n = JS.get(e);
      if (!n || YS.has(n.id)) {
        (s.unobserve(e), JS.delete(e));
        continue;
      }
      let r = n.id,
        i = XS.get(r),
        o = XS.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (c >= a) continue;
        (i ? i.add(e) : XS.set(r, new Set([e])), setTimeout(l, US, n, e));
      } else (i && i.delete(e), o <= 1 && XS.delete(r));
    }
  }
  return (e, t, n) => {
    if (!YS.has(n))
      return (
        JS.set(e, { id: n, preload: t }),
        s.observe(e),
        () => {
          (JS.delete(e), s.unobserve(e));
        }
      );
  };
}
function hu(e, t) {
  let n = ql(e),
    r = {
      href: e === `` || Jl(e, n) ? e : `https://${e}`,
      target: gu(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = Kn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function gu(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function _u(e, t) {
  console.warn(
    ut(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function vu(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return _u(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return st(i) ? i.catch(_u) : i;
  } catch (e) {
    _u(e);
  }
}
function yu(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = vu(o, r, n);
      st(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function bu() {
  let e = yn();
  return u((t, n, r, i = []) => yu(t, n, r, e, i), [e]);
}
function xu({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = yn();
  return u(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = Wl(r) ? r : $l(r);
      if (!Wl(c))
        return ln(
          `published_site_click`,
          {
            ...s,
            href: o ? Su(o) : null,
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
        if (L(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (st(n) ? await n : n) ?? null;
        }
      }
      return ln(
        `published_site_click`,
        {
          ...s,
          href: o ? Su(o) : null,
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
function Su(e) {
  try {
    let t = new URL(e, K.document.baseURI);
    return t.origin === K.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function Cu(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function wu(e, t, n) {
  return async (r) => {
    let i = Wn(r),
      a = ou(r.target),
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
function Tu(e, t, n, r, i, a, o, s) {
  if (!n) return hu(e, r);
  let c = uu(t, e, s, o);
  if (!c) return hu(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return hu(e, r);
  let m = rr(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !rg,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = gu(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = { pathVariables: f, locale: p },
    v = (e) => Cu(t, l, () => i(l, _, !1, !g), d, f, r.smoothScroll, e);
  return {
    href: m,
    target: h,
    onClick: wu(m, r.trackLinkClick, v),
    navigate: v,
    "data-framer-page-link-current":
      (n && pu(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () => i(l, _, !0, !g),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
  };
}
function Eu(e, t, n) {
  let r = Du(e.style, t.style),
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
function Du(e, t) {
  let n = z(e) ? e : void 0,
    r = n && !et(n),
    i = t && !et(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function Ou(e, t, n) {
  if (!(t && Mn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: ku } : { ...i, onTap: r }) : e;
}
function ku(e) {
  let t = ou(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function Au(e, t, n, r, i, a) {
  let o = Wl(e) ? e : $l(e);
  if (!Wl(o)) return L(e) ? hu(e).href : void 0;
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
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return rr(m, {
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
    localeSlug: i?.slug,
  });
}
function ju({ EditorBar: e, fast: t = !1 }) {
  let n = c($S),
    r = te(og, t ? nC : rC, cg),
    i = p_(),
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
    : _(tC, { children: _(E, { children: _(e, { framerSiteId: n, features: a }) }) });
}
function Mu({ currentRoutePath: e, routerAPI: n, children: r }) {
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
        c.current ? Pu(c.current, c.current.currentRouteId, c.current.currentPathVariables) : ``,
      resolveRoute: (e) => (c.current ? Pu(c.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        o.current = e;
      },
      sendTrackingEvent: async (e) => {
        c.current && Nu(c.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: l,
  }));
  return _(iC.Provider, { value: u, children: r });
}
async function Nu(e, t) {
  if (!un(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    ln(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Pu(e, t, n) {
  let r = e.getRoute(t);
  return !r || !r.path ? `` : n ? Gn(r.path, n) : r.path;
}
function Fu({ children: e, loadSnippetsModule: t }) {
  return _(hC.Provider, { value: t, children: e });
}
function Iu() {
  return f.useContext(hC);
}
function Lu(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function Ru(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (B(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (B(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
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
      V(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await zu(a.createContextualFragment(e), r, i));
}
async function zu(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = Bu(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await zu(r, e, null)));
  }
}
function Bu(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return Vu(r, t, n);
}
function Vu(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function Hu(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = dC), (n = fC));
      break;
    case `bodyEnd`:
      ((t = pC), (n = mC));
      break;
    case `headStart`:
      ((t = sC), (n = cC));
      break;
    case `headEnd`:
      ((t = lC), (n = uC));
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
function Uu(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = Lu(e),
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
async function Wu(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = Hu(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = Uu(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((Gu(t, o), s)) {
      await Ru(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = Lu(e.id),
      u = `${c}
${e.code}
${l}`,
      d = qu(e.id, n, r, i);
    d ? await Ru(u, d, `afterend`) : await Ru(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function Gu(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t; ) {
    let e = n.nextSibling;
    (Ku(n) && n.remove(), (n = e));
  }
}
function Ku(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function qu(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = Uu(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function Ju() {
  let e = Iu();
  return u(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(aC),
        o = a && a.dataset[oC] !== void 0;
      if (i && o) return;
      let { getSnippets: s, snippetsSorting: c } = await e.readMaybeAsync(),
        l = await s(t, n, r);
      for (let e in l) {
        let t = e,
          n = l[t],
          r = c[t];
        await Wu(t, n, r);
      }
    },
    [e]
  );
}
function Yu(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function Xu() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((gC = e.timeZone), (_C = e.locale));
}
function Zu() {
  return zn() >= 17 ? CC : SC;
}
function Qu() {
  let e = (e) => {
    e.persisted && fd();
  };
  In() && (m.addEventListener(`pageshow`, e), (xC = Date.now() - Zu()));
  let t = $u(),
    n = ud();
  return function () {
    (id(), m.removeEventListener(`pageshow`, e), t(), n());
  };
}
function $u() {
  let e = m.history.scrollRestoration;
  return (
    (m.history.scrollRestoration = `manual`),
    function () {
      m.history.scrollRestoration = e;
    }
  );
}
function ed(e) {
  return z(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function td() {
  return { x: m.scrollX, y: m.scrollY };
}
function nd() {
  let e = Dr();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (ed(t)) return t;
}
function rd(e) {
  let t = Dr();
  t && (Pr({ ...t, scrollPosition: e }, void 0, !0), In() && (xC = Date.now()));
}
function id() {
  (bC !== void 0 && clearTimeout(bC), ad());
}
function ad() {
  ((yC = void 0), (bC = void 0));
}
function od() {
  let e = yC;
  (ad(), e && e.entryId === Or(Dr()) && rd(e.position));
}
function sd(e, t = !1) {
  let n = nd();
  if (!(!n || n.x !== e.x || n.y !== e.y)) {
    id();
    return;
  }
  if (!In() || t) {
    (id(), rd(e));
    return;
  }
  yC = { entryId: Or(Dr()), position: e };
  let r = Zu() - (Date.now() - xC);
  if (r <= 0) {
    od();
    return;
  }
  bC === void 0 && (bC = m.setTimeout(od, r));
}
function cd() {
  sd(td());
}
function ld() {
  sd(td(), !0);
}
function ud() {
  let e = () => {
    document.visibilityState === `hidden` && ld();
  };
  (document.addEventListener(`visibilitychange`, e), m.addEventListener(`pagehide`, ld));
  let t = () => {
    (document.removeEventListener(`visibilitychange`, e), m.removeEventListener(`pagehide`, ld));
  };
  if (!(`onscrollend` in m)) {
    let e = dd(cd);
    return function () {
      (t(), e());
    };
  }
  return (
    m.addEventListener(`scrollend`, cd),
    function () {
      (t(), m.removeEventListener(`scrollend`, cd));
    }
  );
}
function dd(e) {
  let t,
    n,
    r = !1;
  function i() {
    (clearInterval(t), (t = void 0), (n = void 0), (r = !1));
  }
  let a = () => {
      let t = n;
      if (t === void 0 || Or(Dr()) !== t) {
        (id(), i());
        return;
      }
      if (!r) {
        i();
        return;
      }
      ((r = !1), e());
    },
    o = () => {
      let e = Or(Dr());
      if (e === void 0) {
        (id(), i());
        return;
      }
      if (t !== void 0) {
        if (n === e) {
          r = !0;
          return;
        }
        i();
      }
      ((n = e), (r = !0), (t = m.setInterval(a, In() ? Zu() : 100)));
    };
  return (
    m.addEventListener(`scroll`, o),
    function () {
      (m.removeEventListener(`scroll`, o), i());
    }
  );
}
function fd() {
  let e = nd();
  return e ? (m.scrollTo(e.x, e.y), !0) : !1;
}
function pd(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function md(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (pd(n, t), !0);
}
function hd(e, t, n, r) {
  (n && !r) ||
    je.render(
      () => {
        (n && r && fd()) || md(e, t) || m.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function gd(e, t, n = !0) {
  je.read(() => {
    m.scrollY !== 0 ||
      m.scrollX !== 0 ||
      je.render(
        () => {
          (n && fd()) || (n && md(e, t));
        },
        !1,
        !0
      );
  });
}
function _d(e) {
  let n = p_().scrollRestoration,
    i = t(void 0),
    a = u((e) => {
      i.current = e;
    }, []),
    o = u((e, t) => {
      let n = i.current;
      if (!(n?.routeId !== e || n.remountKey !== t)) return ((i.current = void 0), n);
    }, []),
    s = !!(n && !e),
    c = u(() => {
      s && ld();
    }, [s]),
    l = s ? `manual` : `after-transition`;
  return (
    r(() => {
      if (s) return Qu();
    }, [s]),
    {
      usesCustomScrollRestoration: s,
      flushScrollPosition: c,
      scrollRestorationForFramerTraversal: l,
      scheduleScroll: a,
      consumeScheduledScroll: o,
    }
  );
}
function vd({ currentRouteId: e, remountKey: t, scrollRestoration: n }) {
  let { consumeScheduledScroll: i, usesCustomScrollRestoration: o } = n;
  return (
    r(() => {
      let n = i(e, t);
      n && hd(n.hash, n.shouldSmoothScroll, n.isHistoryTransition, o);
    }),
    a(() => {
      o && gd(m.location.hash.slice(1) || void 0, !1, o);
    }, []),
    null
  );
}
function yd() {
  let [e, t] = f.useState(0);
  return [e, f.useCallback(() => t((e) => e + 1), [])];
}
function bd(e) {
  if (!e) return tg;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function xd(e) {
  let n = Hr(e.usesCustomScrollRestoration),
    r = t({ controller: void 0, updateURL: void 0 }),
    i = u(() => {
      ((r.current.updateURL = void 0),
        r.current.controller?.abort(),
        (r.current.controller = void 0));
    }, []);
  return (
    A(() => {
      let e = r.current.updateURL;
      e && ((r.current.updateURL = void 0), e());
    }),
    {
      startNavigation: u(
        async (t, a, o, s = !0) => {
          let c = o !== void 0,
            { usesCustomScrollRestoration: l } = e;
          (c && e.flushScrollPosition(), i());
          let u = s ? new AbortController() : void 0;
          r.current.controller = u;
          let d = u?.signal,
            f = Rt(d);
          if ((a.promise.finally(f), !c)) return ((r.current.controller = void 0), t(d), a.promise);
          let p,
            h = new Promise((e, t) => {
              ((p = e), d?.addEventListener(`abort`, t));
            }).catch(tg);
          if (
            (l
              ? (n(h, u),
                (r.current.updateURL = () => {
                  o();
                }),
                t(d))
              : (t(d), n(h, u, o)),
            await a.promise,
            d?.aborted)
          )
            return;
          let g = m.navigation?.transition;
          p();
          try {
            await g?.finished;
          } catch (e) {
            console.error(`Navigation transition failed`, e);
          }
          d?.aborted || L_();
        },
        [i, e, n]
      ),
      cancelPendingNavigation: i,
    }
  );
}
function Sd({
  defaultPageStyle: e,
  disableHistory: n,
  initialPathVariables: i,
  initialRoute: s,
  notFoundPage: c,
  collectionUtils: d,
  routes: f,
  initialLocaleId: p,
  initialCollectionItemId: h,
  locales: g = yg,
  preserveQueryParams: v = !1,
  LayoutTemplate: y,
  EditorBar: b,
  siteCanonicalURL: x,
  adaptLayoutToTextDirection: S,
}) {
  (si(), Lr({ disabled: n, routeId: s, initialPathVariables: i, initialLocaleId: p }));
  let C = xr(),
    [w, E] = yd(),
    D = wr(`framer-route-change`),
    O = l(() => (!p_().synchronousNavigationOnDesktop || !Un() ? k : (e) => e()), []),
    ee = Ju(),
    A = t(!0),
    te = t(),
    ne = t(s),
    re = t(i),
    j = t(p),
    ie = _d(n),
    { startNavigation: ae, cancelPendingNavigation: oe } = xd(ie),
    se = ie.scheduleScroll,
    ce = j.current,
    le = l(() => g.find(({ id: e }) => (ce ? e === ce : e === bg)) ?? null, [ce, g]),
    ue = le?.textDirection ?? `ltr`,
    de = S ? ue : `ltr`;
  r(() => {
    S && document.documentElement.setAttribute(`dir`, ue);
  }, [ue, S]);
  let fe = Br(),
    pe = l(
      () => ({
        activeLocale: le,
        locales: g,
        setLocale: async (e) => {
          let t = D({ localized: !0 });
          await Tn({ priority: `user-blocking`, continueAfter: `paint` });
          let r;
          L(e) ? (r = e) : z(e) && (r = e.id);
          let i = g.find(({ id: e }) => e === bg),
            a = g.find(({ id: e }) => e === r);
          if (!a) return;
          let o = ne.current,
            s = f[o];
          if (s)
            try {
              let e = await fe({
                currentLocale: le,
                nextLocale: a,
                route: s,
                routeId: o,
                defaultLocale: i,
                pathVariables: re.current,
                preserveQueryParams: v,
              });
              if (!e) return;
              let r = Dr()?.paginationInfo,
                c = e.path;
              ((A.current = !1),
                (re.current = e.pathVariables),
                (j.current = a.id),
                (te.current = c),
                ae(
                  () => {
                    C(o, o, () => O(E));
                  },
                  t,
                  n
                    ? void 0
                    : () => {
                        c &&
                          Ir(
                            {
                              routeId: o,
                              pathVariables: e.pathVariables,
                              localeId: a.id,
                              paginationInfo: r,
                            },
                            c
                          );
                      },
                  !1
                ));
            } catch {}
        },
      }),
      [le, n, E, g, v, f, ae, C, D, O, fe]
    ),
    M = u(
      (e, t, n, r, i, a, o, s, c) => {
        A.current = !1;
        let l = ne.current,
          u = f[e],
          d = Lt(u, n),
          p = u?.path && i ? Gn(u.path, i) : u?.path;
        if (
          ((ne.current = e),
          (re.current = i),
          (j.current = t),
          (te.current = r),
          se({
            routeId: e,
            remountKey: `${t}${p}`,
            hash: d,
            shouldSmoothScroll: s ?? !1,
            isHistoryTransition: a,
          }),
          a)
        ) {
          (oe(), O(E));
          return;
        }
        ae(
          (t) => {
            C(l, e, () => O(E), t);
          },
          o,
          c,
          !0
        );
      },
      [E, f, se, ae, C, O, oe]
    );
  (Rr(ie.scrollRestorationForFramerTraversal, ne, M),
    a(() => {
      if (n) return;
      let e = () => {
        let e = Dr(),
          t = m.location.hash === `` ? void 0 : m.location.hash.slice(1);
        (e && Lt(f[e.routeId], e.hash) === t) ||
          Fr({
            ...(e ||
              (Ar() ?? { routeId: ne.current, pathVariables: re.current, localeId: j.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (m.addEventListener(`hashchange`, e), () => m.removeEventListener(`hashchange`, e));
    }, [n, f]));
  let me = u(
      async (e, t, r, i, a) => {
        let o = f[e],
          s = mt(o?.page) ? o.page.getStatus() : void 0,
          c = s?.hasRendered,
          l = D({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
          u = bd(a);
        if (
          (Tn({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(u),
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
        let d = Lt(o, t),
          p = re.current,
          m = j.current;
        if (Yu({ routeId: ne.current, pathVariables: p }, { routeId: e, pathVariables: r })) {
          oe();
          let { usesCustomScrollRestoration: a } = ie;
          (l.ignore?.(), a && (ie.flushScrollPosition(), hd(d, i, !1, a)));
          let o = f[e];
          (Dr()?.hash !== t &&
            !n &&
            o &&
            (u(),
            Tr(e, o, {
              currentRoutePath: o.path,
              currentPathVariables: p,
              pathVariables: r,
              hash: t,
              localeId: m,
              preserveQueryParams: v,
              siteCanonicalURL: x,
              currentRoutePathLocalized: o.pathLocalized,
            })),
            a || hd(d, i, !1, a));
          return;
        }
        if (!o) return;
        let h = f[ne.current],
          _ =
            tr(x) +
            rr(o, {
              currentRoutePath: h?.path,
              currentRoutePathLocalized: h?.pathLocalized,
              currentPathVariables: p,
              hash: t,
              pathVariables: r,
              localeId: m,
              localeSlug: g.find(({ id: e }) => e === m)?.slug,
              preserveQueryParams: v,
              relative: !1,
              siteCanonicalURL: x,
            });
        M(
          e,
          m,
          t,
          _,
          r,
          !1,
          l,
          i,
          n
            ? void 0
            : () => {
                (u(),
                  Tr(e, o, {
                    historyPath: _,
                    currentRoutePath: h?.path,
                    hash: t,
                    pathVariables: r,
                    localeId: m,
                  }));
              }
        );
      },
      [oe, f, g, M, n, v, x, D, ie]
    ),
    he = kt(f),
    ge = ne.current,
    _e = te.current,
    ve = re.current,
    N = f[ge],
    ye = N?.path,
    P = vC(N, ge, _e, ve, le, h),
    be = A.current;
  a(() => {
    ee(ge, ve ?? {}, pe.activeLocale, be);
  }, [ee, ge, ve, pe, be]);
  let xe = l(
    () => ({
      navigate: me,
      getRoute: he,
      currentRouteId: ge,
      currentPathVariables: ve,
      routes: f,
      collectionUtils: d,
      preserveQueryParams: v,
      pageviewEventData: P,
      siteCanonicalURL: x,
      isInitialNavigation: be,
    }),
    [me, he, ge, ve, f, d, v, x, P, be]
  );
  if (!N) throw Error(`Router cannot find route for ${ge}`);
  let F = !le || !N.includedLocales || N.includedLocales.includes(le.id),
    I = ye && ve ? Gn(ye, ve) : ye,
    Se = `${ce}${I}`,
    Ce = Sa(() => ({ ...e, display: `contents` }));
  return _(At, {
    api: xe,
    children: _(G_.Provider, {
      value: pe,
      children: _(K_.Provider, {
        value: de,
        children: _(wS, {
          children: _(ei, {
            children: T(Mu, {
              currentRoutePath: I,
              routerAPI: xe,
              children: [
                b && _(ju, { EditorBar: b, fast: !0 }),
                _(lS, {
                  children: T(bl, {
                    children: [
                      T(Sv, {
                        notFoundPage: c,
                        defaultPageStyle: e,
                        forceUpdateKey: w,
                        children: [
                          _(bv.Start, {}),
                          _(Cd, {
                            LayoutTemplate: y,
                            webPageId: N?.abTestingVariantId ?? ge,
                            style: e,
                            children: (t) =>
                              _(o, { children: F ? fi(N.page, t ? Ce : e) : c && fi(c, e) }, Se),
                          }),
                        ],
                      }),
                      b && _(ju, { EditorBar: b }),
                      _(ri, {}),
                      _(vd, { currentRouteId: ge, remountKey: Se, scrollRestoration: ie }),
                      _(bv.End, {}),
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
function Cd({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? _(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function wd(e) {
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
function Td(e) {
  return typeof e == `object` && !!e;
}
function Ed(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!Td(r)) return;
    r = r[e];
  }
  return r;
}
function Dd(e) {
  return `${e.credentials}:${e.url}`;
}
function Od(e) {
  return L(e) && !Number.isNaN(Number(e));
}
function kd(e, t) {
  switch (e) {
    case `string`:
      return L(t) || R(t);
    case `color`:
      return L(t);
    case `boolean`:
      return Qe(t);
    case `number`:
      return R(t) || Od(t);
    case `link`:
    case `image`:
      return L(t) && Jl(t, !1);
    default:
      return !1;
  }
}
function Ad(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = Ed(e.data, t.resultKeyPath);
  if (tt(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!kd(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function jd(e, t) {
  if (J.current() === J.canvas) return !1;
  let n = Math.max(t * 1e3, TC);
  return Date.now() >= e + n;
}
function Md(e) {
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
      n || Yv.start();
    }, []),
    n
      ? _(Gr, {
          value: r ?? `preview`,
          children: _(Me, {
            reducedMotion: d ? `always` : u ? `user` : `never`,
            skipAnimations: d,
            children: _(vn, {
              collectionUtils: c,
              children: _(LC, {
                children: _($S.Provider, {
                  value: a,
                  children: _(Fu, {
                    loadSnippetsModule: w,
                    children: _(Sd, {
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
      : _(p ? vx : f.Fragment, {
          children: _(Mt, {
            routes: s,
            children: _(cx, { children: f.isValidElement(t) ? t : f.createElement(t, { key: i }) }),
          }),
        })
  );
}
function Nd(e) {
  return {
    trace(...t) {
      return nb.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return nb.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return nb.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return nb.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return nb.getLogger(e)?.error(...t);
    },
    get enabled() {
      return nb.getLogger(e) !== void 0;
    },
  };
}
function Pd(e) {
  let t = e.next();
  return (B(t.done, `Generator must not yield`), t.value);
}
async function Fd(e, t = e.next()) {
  for (; !t.done; ) {
    let n = await t.value;
    t = e.next(n);
  }
  return t.value;
}
function Id(e) {
  let t = e.next();
  return t.done ? t.value : Fd(e, t);
}
function* W(e) {
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
            Fd(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function* Ld(e) {
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
            Fd(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function Rd(e) {
  return Vd(e) || Wd(e);
}
function zd(e) {
  return $e(e) && e.every(z);
}
function Bd(e) {
  return z(e) && Ze(e.read) && Ze(e.preload);
}
function Vd(e) {
  return zd(e) || Bd(e);
}
function Hd(e) {
  return z(e) && z(e.schema);
}
function Ud(e) {
  return z(e) && z(e.collectionByLocaleId);
}
function Wd(e) {
  return Hd(e) || Ud(e);
}
function Gd(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = xf(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Kd(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => Z.cast(e, t.definition)) };
  }
  return null;
}
function qd(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Jd(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function Yd(e) {
  return Jd(e)?.value ?? !1;
}
function Xd(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Zd(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function Qd(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function $d(e) {
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
function ef(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function tf(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function nf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function rf(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function af(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function of(e) {
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
function sf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function cf(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function lf(e) {
  return cf(e)?.value ?? null;
}
function uf(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = xf(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function df(e, t) {
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
function ff(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function pf(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function mf(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function hf(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function gf(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function _f(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function vf(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function yf(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function bf(e) {
  return yf(e)?.value ?? null;
}
function xf(e, t, n) {
  if (nt(e) || nt(t)) return (B(e === t), 0);
  switch (e.type) {
    case `array`:
      return (B(e.type === t.type), Gd(e, t, n));
    case `boolean`:
      return (B(e.type === t.type), qd(e, t));
    case `color`:
      return (B(e.type === t.type), Xd(e, t));
    case `date`:
      return (B(e.type === t.type), Qd(e, t));
    case `enum`:
      return (B(e.type === t.type), ef(e, t));
    case `file`:
      return (B(e.type === t.type), nf(e, t));
    case `link`:
      return (B(e.type === t.type), af(e, t));
    case `number`:
      return (B(e.type === t.type), sf(e, t));
    case `object`:
      return (B(e.type === t.type), uf(e, t, n));
    case `responsiveimage`:
      return (B(e.type === t.type), ff(e, t));
    case `richtext`:
      return (B(e.type === t.type), mf(e, t));
    case `vectorsetitem`:
      return (B(e.type === t.type), gf(e, t));
    case `string`:
      return (B(e.type === t.type), vf(e, t, n));
    default:
      V(e);
  }
}
async function Sf(e, t) {
  return Bd(e) ? (await e.preload(t), e.read(t)) : e;
}
function Cf(e) {
  if (!Wd(e) || !e.id) return;
  let t = VC.get(e.id);
  if (!t) return (VC.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function wf(e) {
  let t = Cf(e);
  if (t) return t;
  let n = HC.get(e);
  if (n) return n;
  let r = `${UC}${Math.random().toString(16).slice(2)}`;
  return (HC.set(e, r), r);
}
function Tf(e, t) {
  if (Vd(e)) {
    let n = wf(e) + (t?.id ?? bg),
      r = WC.get(n);
    if (r) return r;
    let i = new BC(e, t);
    return (WC.set(n, i), i);
  }
  if (Hd(e)) return e;
  if (Ud(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  V(e, `Unsupported collection type`);
}
function Ef() {
  return 25;
}
function Df() {
  return 12500;
}
function Of(e) {
  return e;
}
function kf(e) {
  return e;
}
function Af(e) {
  return z(e) && Ze(e.getHash);
}
function G(e, ...t) {
  return kf(
    `${e}(${t.map((e) => (B(!(e instanceof $C), `Pass CollectionMetadata.id instead`), B(!(e instanceof nw), `Pass FieldMetadata.id instead`), B(!(e instanceof ew), `Pass IndexMetadata.id instead`), B(!(e instanceof YC), `Pass RelationalNode.group.id instead`), B(!(e instanceof KC), `Pass Group.id instead`), Af(e) ? e.getHash() : JSON.stringify(e))).join(`, `)})`
  );
}
function jf(e, t) {
  return { collectionId: wf(e), pointer: t };
}
function Mf(e) {
  return z(e) && L(e.collectionId);
}
function Nf(e, t) {
  return { collectionId: wf(e), pointer: t };
}
function Pf(e) {
  return z(e) && L(e.collectionId);
}
function Ff(e, t) {
  let n = new Map();
  function r(e) {
    if (z(e))
      if (e.type === `Collection` && Rd(e.data)) {
        let r = Tf(e.data, t),
          i = wf(r);
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
function If(e) {
  return e;
}
function Lf(e) {
  return e;
}
function Rf(e) {
  return e;
}
function zf(e) {
  return Array(e).fill({ type: `All` });
}
function Bf(e, t) {
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
function Vf(e) {
  let t = new Set();
  if (!e) return t;
  Bf(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (Bf(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function Hf(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) Hf(n, t);
      return;
    case `object`:
      for (let n in e.value) Hf(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function Uf(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function Wf(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Gf(e) {
  return `${e.functionName}(${e.arguments.map((e) => Xf(e)).join(`, `)})`;
}
function Kf(e) {
  let t = `CASE`;
  e.value && (t += ` ${Xf(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Xf(n.when)} THEN ${Xf(n.then)}`;
  return (e.else && (t += ` ELSE ${Xf(e.else)}`), (t += ` END`), t);
}
function qf(e) {
  let t = Xf(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function Jf(e) {
  let t = Xf(e.left),
    n = Xf(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function Yf(e) {
  return `CAST(${Xf(e.value)} as ${e.dataType})`;
}
function Xf(e) {
  switch (e.type) {
    case `Identifier`:
      return Uf(e);
    case `LiteralValue`:
      return Wf(e);
    case `FunctionCall`:
      return Gf(e);
    case `Case`:
      return Kf(e);
    case `UnaryOperation`:
      return qf(e);
    case `BinaryOperation`:
      return Jf(e);
    case `TypeCast`:
      return Yf(e);
    case `Select`:
      return `${tp(e)}`;
    default:
      V(e);
  }
}
function Zf(e) {
  return Hd(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function Qf(e) {
  let t = `${$f(e.left)} LEFT JOIN ${$f(e.right)}`;
  return (e.constraint && (t += ` ON ${Xf(e.constraint)}`), t);
}
function $f(e) {
  switch (e.type) {
    case `Collection`:
      return Zf(e);
    case `LeftJoin`:
      return Qf(e);
    default:
      V(e);
  }
}
function ep(e) {
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
function tp(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = Xf(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${$f(e.from)}`),
    e.where && (t += ` WHERE ${Xf(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${Xf(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Xf(e.limit)}`),
    e.offset && (t += ` OFFSET ${Xf(e.offset)}`),
    ep(t)
  );
}
function np(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(tt(e) || z(e)))
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
function rp(e) {
  let n = t(e);
  return (
    A(() => {
      n.current = e;
    }, [e]),
    Jr((...e) => {
      let t = n.current;
      return t(...e);
    }, [])
  );
}
function ip(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function ap() {
  return new Set();
}
function op(e) {
  let n = Sa(ap),
    r = Sa(ap);
  return (
    zs(() => () => ip(r, n)),
    a(() => () => ip(r, n), []),
    a(() => {
      ip(r, n);
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
function sp(e, t, n) {
  return f.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function cp(e) {
  for (let [t, n] of Object.entries(e)) if (K.matchMedia(n).matches) return t;
}
function lp(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && K.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function up(e, n, r = !0) {
  let i = c(ax),
    o = bo(),
    s = va(),
    l = Rn() && (!o || s),
    d = t(l ? (cp(n) ?? e) : e),
    f = t(r && i ? e : d.current),
    p = Jo(),
    m = le(),
    h = u(
      (e) => {
        if (e !== d.current || e !== f.current) {
          let t = function () {
            ((d.current = f.current = e),
              k(() => {
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
    db(() => {
      if (o) {
        if (s) {
          h(cp(n) ?? e);
          return;
        }
        h(e);
      }
    }, [e, s, o, n, h]),
    db(() => {
      !r || i !== !0 || h(d.current);
    }, []),
    a(() => {
      if (!l || s) return;
      let e = [];
      for (let [t, r] of Object.entries(n)) {
        let n = K.matchMedia(r),
          i = (e) => {
            e.matches && h(t);
          };
        (dp(n, i), e.push([n, i]));
      }
      return () => e.forEach(([e, t]) => fp(e, t));
    }, [s, n, h, l]),
    [d.current, f.current]
  );
}
function dp(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function fp(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function pp(e) {
  setTimeout(e, 1);
}
function mp(e) {
  let t = new Set(),
    n = lp(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (hp(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (ig ? K.requestIdleCallback : pp)(() => {
    document.querySelector(dT)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (hp(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    gp(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function hp(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function gp(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function _p() {
  let e = Nt(),
    { activeLocale: t } = Yr(),
    n = l(
      () =>
        rr(e, {
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
        r = fT.get(t);
      if (r) return r;
      let i = x();
      return (fT.set(t, i), i);
    },
    [n]
  );
}
function vp(e) {
  return z(e) && pT in e && e.page !== void 0;
}
function yp(e, t) {
  return `${e}-${t}`;
}
function bp(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (B(r !== void 0, `nextVariant should be defined`), r);
}
function xp(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function Sp(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function Cp(e, t) {
  return t[e] || `framer-v-${e}`;
}
function wp(e, t, n) {
  return e && n.has(e) ? e : t;
}
function Tp() {
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
function Ep() {
  let e = t(),
    n = t(!1),
    r = t(),
    i = c(Hb);
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
        e.current = Ms(i, `undefined`, a.current, null, (e) => {
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
function Dp(e) {
  let t = Tp(),
    n = Ep();
  return u(
    (r, i = !1) => {
      if (rg) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function Op() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (gT = () => {
        (e(), (t = void 0));
      }));
  });
}
function kp(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (hT = Op()));
}
function Ap() {
  (performance.mark(`click-received-listener`), (hT = void 0), gT?.(), (gT = void 0));
}
function jp(e = !1) {
  a(() => {
    e &&
      (document.addEventListener(`pointerup`, kp, !0),
      document.__proto__.addEventListener.call(document, `click`, Ap, !0));
  }, [e]);
}
function Mp({
  variant: e,
  defaultVariant: n,
  transitions: r,
  enabledGestures: i,
  cycleOrder: a = [],
  variantProps: o = {},
  variantClassNames: s = {},
  ref: c,
}) {
  let d = Jo(),
    f = Kl(),
    p = Sa(() => new Set(a));
  jp(p_().yieldOnTap);
  let m = Dp(c),
    h = t({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: wp(e, n, p),
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
        o = wp(e, a, p),
        s = Sp(i?.[o], t, n, !1, r);
      return [o, s ? yp(o, s) : void 0];
    }, []),
    _ = u(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = g(r);
        if (o === e && s === t) return;
        (a && (h.current.isError = !1),
          (h.current.baseVariant = o || n),
          (h.current.gestureVariant = s));
        let c = p_().yieldOnTap && h.current.isPressedHasUpdated;
        (c &&
          hT &&
          (performance.mark(`wait-for-tap-start`),
          await hT,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await Tn({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: l,
          isPressed: u,
          isHoveredHasUpdated: f,
          isPressedHasUpdated: p,
        } = h.current;
        if (l || f || u || p) {
          k(d);
          return;
        }
        m(() => k(d), i);
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
          o = e === mT ? bp(r || [], i || n) : e;
        _(i, a, n, o, t, !0);
      },
      [_]
    ),
    b = u(() => {
      let { baseVariant: e } = h.current;
      ((h.current.loadedBaseVariant[e] = !0), m(() => k(d), !0));
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
    ee = sp(h.current.baseVariant, h.current.gestureVariant, o);
  return l(() => {
    let e = [];
    x !== C && e.push(x);
    let t = w?.[x]?.loading,
      n = !D && !f && !!t && !O[x],
      r = n ? yp(x, `loading`) : S;
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
        transition: xp(h.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: ee,
        gestureHandlers: a,
        classNames: Ac(Cp(x, s), Sp(i, T, E, n, D)),
      }
    );
  }, [x, S, T, E, O, ee, y, C, w, v, b, s]);
}
function Np(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!wl()) return r(e);
  let a = Pp(e, r),
    o = !1;
  function s(r, s) {
    let c = Dl(),
      { disableCustomCode: l } = p_();
    if (l) return _(e, { ...r, ref: s });
    if (Fl(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? _(V_.Provider, {
            value: n,
            children: _(Tl, {
              getErrorMessage: Ml.bind(null, t, n),
              fallback: _(e, { ...r, ref: s }),
              children: _(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (Cl(a.error), Cl(Ml(t, n)), Sl(a.error), !0)), _(e, { ...r, ref: s }));
    if (a.status === `success`)
      return _(V_.Provider, { value: n, children: _(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return f.forwardRef(s);
}
function Pp(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function Fp(e, t, n) {
  let r = [],
    i = tl(e, t, (e) => r.unshift(e, e));
  if (n) {
    let e = i[i.length - 1];
    if (!R(e)) return yT;
    (i.push(e + 1), r.push(-1));
  }
  let a = i[0];
  return R(a)
    ? a <= 1
      ? { inputRange: i, outputRange: r }
      : { inputRange: [0, Math.max(a - 1, 0), ...i], outputRange: [-1, -1, ...r] }
    : yT;
}
function Ip(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
function Lp(e, t) {
  let n = t === `normal` ? `Regular` : `Italic`;
  return e === 400 ? n : t === `normal` ? `${OT[e]}` : `${OT[e]} ${n}`;
}
function Rp() {
  return m === void 0 ? {} : AT || ((AT = zp()), AT);
}
function zp() {
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
function Bp(e) {
  return e.key + e.extension;
}
function Vp(e) {
  return `${Rp().userContent}/assets/${e}`;
}
function Hp(e) {
  return Vp(Bp(e));
}
function Up(e, t) {
  return t ? `${e} ${jT}` : e;
}
function Wp(e, t) {
  switch (t) {
    case `custom`:
      throw Error(`Custom fonts are not supported`);
    default:
      return Up(e.name, e.isVariable);
  }
}
function Gp(e) {
  return !!(e && Array.isArray(e));
}
function Kp(e) {
  if (!e || !Array.isArray(e)) return;
  let t = [];
  for (let n of e)
    Jp(n) &&
      t.push({
        tag: n.tag,
        name: n.name,
        minValue: n.minValue,
        maxValue: n.maxValue,
        defaultValue: n.defaultValue,
      });
  return t;
}
function qp(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
  );
}
function Jp(e) {
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
function Yp(e) {
  return PT[Zp(e)];
}
function Xp(e, t) {
  let n = e?.find((e) => e.tag === `wght`)?.defaultValue;
  return n !== void 0 && n >= 1 && n <= 1e3 ? n : (t ?? Yp(`variable`) ?? 500);
}
function Zp(e) {
  return e.toLowerCase().replace(/\s+/gu, `-`);
}
function Qp(e) {
  return (
    (e = e.toLowerCase()),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
  );
}
function $p(e, t) {
  return { ...em(e, t), ...tm(e, t) };
}
function em(e, t) {
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
function tm(e, t) {
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
function nm(e) {
  return !!e.variationAxes;
}
function rm(e) {
  return im(e) || am(e);
}
function im(e) {
  return e.startsWith(LT);
}
function am(e) {
  return e.startsWith(IT);
}
function om(e, t) {
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
function sm(e) {
  let { font: t } = e,
    n = t.fontFamily,
    r = Array.isArray(t.variationAxes);
  if (r && n.toLowerCase().includes(`variable`)) return n;
  let i = r ? jT : t.fontSubFamily.trim();
  return i === `` ? n : `${n} ${i}`;
}
function cm({ fontFamily: e, fontSubFamily: t, variationAxes: n, faceDescriptors: r }) {
  let i = t.trim() || `Regular`,
    a = i.toLocaleLowerCase().includes(`variable`),
    o = Kp(n) && !a ? `Variable ${i}` : i,
    s = `normal`,
    c = 400;
  return (
    r && ((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
    { family: e, variant: o, weight: c, style: s }
  );
}
function lm(e) {
  if (!(!e.weight || !e.style))
    return { weight: e.weight, style: e.style, isVariable: nm(e), selector: e.selector };
}
function um(e) {
  let t = e.fonts.map((e) => lm(e)).filter((e) => e !== void 0);
  for (let n of e.fonts) {
    let e = lm(n);
    if (!e) continue;
    let r = $p(e, t);
    ((n.selectorVariable = r.variantVariable?.selector),
      (n.selectorVariableItalic = r.variantVariableItalic?.selector),
      (n.selectorBold = r.variantBold?.selector),
      (n.selectorBoldItalic = r.variantBoldItalic?.selector),
      (n.selectorItalic = r.variantItalic?.selector));
  }
}
function dm(e) {
  return e.ownerTypes.includes(`team`) ? `team` : `project`;
}
function fm(e, t, n) {
  let r = e.get(t);
  r || ((r = new Map()), e.set(t, r));
  let i = r.get(n);
  return (i || ((i = { fonts: [] }), r.set(n, i)), i);
}
function pm(e, t) {
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
async function mm(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-FGWL63I4.CgGyHVDp.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-NODQXKXY.CjCmvCKY.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
async function hm(e) {
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
function gm(e) {
  return e
    .split(`,`)
    .map((e) => e.trim().toLowerCase())
    .filter(_m);
}
function _m(e) {
  return zT.includes(e);
}
function vm(e) {
  let t = {
      serif: `serif`,
      sans: `sans-serif`,
      slab: `slab`,
      display: `display`,
      handwritten: `handwriting`,
      script: `handwriting`,
    },
    n = gm(e)[0];
  return n && t[n];
}
function ym(e) {
  let t = {
    serif: `serif`,
    "sans-serif": `sans-serif`,
    display: `display`,
    handwriting: `handwriting`,
    monospace: `monospace`,
  };
  if (e) return t[e];
}
function bm(e, t) {
  return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
function xm(e, t, n, r) {
  return `${e}-${t}-${n}-${r}`;
}
function Sm(e, t, n) {
  return `${e}-${t}-${n}`;
}
async function Cm(e, t, n = 0) {
  let { family: r, url: i, stretch: a, unicodeRange: o } = e,
    s = e.weight,
    c = e.style || `normal`,
    l = xm(r, c, s, i);
  if (!tE.has(l) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: L(s) ? s : s?.toString(),
        style: c,
        stretch: a,
        unicodeRange: o,
      }),
      d = u
        .load()
        .then(() => (t.fonts.add(u), rE.set(l, { fontFace: u, doc: t }), wm(r, c, s)))
        .catch((l) => {
          if (l.name !== `NetworkError`) throw l;
          if (n < $T) return Cm(e, t, n + 1);
          throw new eE(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: s, url: i, stretch: a, unicodeRange: o })}`
          );
        });
    tE.set(l, d);
  }
  await tE.get(l);
}
async function wm(e, t, n) {
  let r = Sm(e, t, n);
  if (!nE.has(r)) {
    let i = new ZT.default(e, { style: t, weight: n }).load(null, QT);
    nE.set(r, i);
  }
  try {
    await nE.get(r);
  } catch {
    throw new eE(
      `Failed to check if font is ready (${QT}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`
    );
  }
}
function Tm(e) {
  let t = e.style || `normal`,
    { family: n, url: r, weight: i } = e,
    a = xm(n, t, i, r),
    o = rE.get(a);
  (o && (o.doc.fonts.delete(o.fontFace), rE.delete(a)), tE.delete(a), nE.delete(Sm(n, t, i)));
}
function Em(e) {
  try {
    if (e === `framer`) return Dm(aE) ? aE : void 0;
    {
      let t = (async () => {
        switch (e) {
          case `google`:
            return (await import(`./google-NDSGZUS3.dOlWbCKa.mjs`)).default;
          case `fontshare`:
            return (await import(`./fontshare-32OC4HMY.DwUZJPwH.mjs`)).default;
          default:
            V(e);
        }
      })();
      return Dm(t) ? t : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function Dm(e) {
  return z(e) && Object.values(e).every(km);
}
function Om(e) {
  return z(e) && L(e.tag);
}
function km(e) {
  return Array.isArray(e) && e.every(Om);
}
function Am(e, t) {
  a(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (m.addEventListener(`keyup`, n), () => m.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function jm(e, t, n, r) {
  let i = m.innerHeight - r,
    a = Math.min(m.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function Mm(e, { width: t, height: n }) {
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
function Nm() {
  return document.getElementById(RS) ?? document.getElementById(LS) ?? document.body;
}
function Pm(e, t) {
  return R(e) ? e : (t ?? 0);
}
function Fm(e) {
  return Pm(e?.paddingTop, e?.padding) + Pm(e?.paddingBottom, e?.padding);
}
function Im(e) {
  return Pm(e?.paddingLeft, e?.padding) + Pm(e?.paddingRight, e?.padding);
}
function Lm(e, t) {
  if (!e || !t || !t.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - Im(e)}px)`,
      srcSet: Eo(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function Rm(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in cE)) continue;
    let n = cE[t],
      r = e[t];
    if (!(!R(n) || !R(r)) && n !== r) return !0;
  }
  return !1;
}
function zm(e) {
  let t = xe.get(e.current);
  if (!t) return !1;
  if (Rm(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (Rm(e.latestValues)) return !0;
  return !1;
}
function Bm(e) {
  return h(function ({ lightbox: n, lightboxClassName: r, onClick: i, ...d }, f) {
    let p = c(we),
      m = c(_T),
      h = !!m,
      g = t(null),
      v = f ?? g,
      y = t(),
      b = l(() => Lm(n, d.background), [n, d.background]),
      [x, C] = s(!1),
      [w, E] = s(),
      D = u(() => {
        if (n) {
          if (x) {
            k(() => {
              C(!0);
            });
            return;
          }
          je.read(() => {
            if (!v.current) return;
            let e = getComputedStyle(v.current),
              t =
                v.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(v.current, `::after`)
                  : void 0,
              r = v.current.offsetWidth ?? 1,
              i = v.current.offsetHeight ?? 1,
              a = zm(v) || h ? { duration: 0 } : n.transition;
            k(() => {
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
      ee = w?.aspectRatio ?? 1,
      A = rp(() => {
        if (!n || !b || !b.src) return;
        let e = y.current?.[b.src];
        if (e) return e;
        let t = jm(ee, n.maxWidth, Im(n), Fm(n)),
          r = Mm(b, { width: t, height: t * ee });
        return ((y.current = { [b.src]: r }), r);
      }),
      te = u(
        async (e) => {
          (i?.(e), !(x || !n || !b) && (await A(), D()));
        },
        [i, D, x, b, n, A]
      ),
      re = u((e) => {
        (e?.stopPropagation(),
          k(() => {
            C(!1);
          }));
      }, []);
    (Am(x, re),
      a(() => {
        if (!n) return;
        let e;
        function t() {
          e = setTimeout(() => {
            A();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = v.current;
        return (
          i?.addEventListener(`mouseenter`, t),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, A),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, t),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, A));
          }
        );
      }, [A, v, n]));
    let j = ne(),
      ie = w?.transition ?? d.transition ?? p.transition,
      ae = w?.borderRadius,
      oe = w?.imageRendering,
      se = w?.filter,
      ce = w?.borderTop,
      le = w?.borderRight,
      ue = w?.borderBottom,
      de = w?.borderLeft,
      fe = w?.borderStyle,
      pe = w?.borderColor,
      M = !!(ce || le || ue || de || fe || pe),
      me = M
        ? {
            "--border-top-width": ce,
            "--border-right-width": le,
            "--border-bottom-width": ue,
            "--border-left-width": de,
            "--border-style": fe,
            "--border-color": pe,
          }
        : void 0,
      he = { [ES]: d.id },
      ge = Pm(n?.paddingTop, n?.padding),
      _e = Pm(n?.paddingBottom, n?.padding),
      ve = Pm(n?.paddingLeft, n?.padding),
      ye = Pm(n?.paddingRight, n?.padding),
      P = w?.borderRadius ? { ...d.style, borderRadius: w.borderRadius } : d.style,
      be = x ? (d.layoutDependency ? `${d.layoutDependency}-open` : `open`) : d.layoutDependency,
      xe = h && x ? void 0 : (d.layoutId ?? (n ? j : void 0));
    return T(O, {
      children: [
        _(e, {
          ...d,
          style: P,
          onClick: te,
          layoutId: xe,
          ref: v,
          layoutDependency: be,
          transition: ie,
        }),
        _(Le, {
          onExitComplete: () => {
            k(() => {
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
                      _(N.div, {
                        ...he,
                        className: r,
                        onClick: re,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: n.zIndex,
                          backgroundColor: n.backdrop ?? `transparent`,
                        },
                        transition: ie,
                        initial: lE,
                        animate: uE,
                        exit: lE,
                      }),
                      _(N.div, {
                        ...he,
                        className: r,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${ge}px ${ye}px ${_e}px ${ve}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: n.zIndex,
                        },
                        children: _(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: ee,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: n.maxWidth,
                          },
                          children: _(N.div, {
                            layoutId: xe,
                            transition: ie,
                            onClick: D,
                            className: `framer-lightbox-container`,
                            "data-border": M,
                            style: {
                              aspectRatio: ee,
                              borderRadius: ae,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: oe,
                              filter: se,
                              ...me,
                            },
                            children: _(Fo, { image: b, alt: b.alt, draggable: d.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  Nm()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function Vm(e, t) {
  return pE && !t
    ? Document.parseHTMLUnsafe(e)
    : ((fE ??= new DOMParser()), fE.parseFromString(e, t ?? `text/html`));
}
function Hm(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function Um(e, t, n, r) {
  return e.replace(mE, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = Zl(u.replace(/&amp;/gu, `&`));
    if (!d || !d.target) return e;
    let f = t(d.target);
    if (!vp(f) || !vp(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Lt(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = $l(u);
    if (!_ || L(_)) return e;
    pu(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(VS, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = Zn(m, v)), i + o + `"${Hm(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function Wm(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Gm(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function Km(e, n, r) {
  let i = t([]);
  Wm(i.current, e) ||
    ((i.current = e),
    sE.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !n || !r.current || J.current() !== J.canvas || (e > 0 && es(r.current));
    }));
}
function qm() {
  return { current: null };
}
async function Jm(e, t) {
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
function Ym(e) {
  return e in vE;
}
function Xm(e, t) {
  let n = {};
  for (let r in e) {
    if (!Ym(r)) continue;
    let i = e[r],
      a = vE[r];
    tt(i) || tt(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function Zm(e, t = `character`, n, r, i) {
  if (r) {
    let t = qm();
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
                children: e.match(yE)?.map((e, t) => {
                  let r = qm();
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
          s = qm();
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
function Qm(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      V(t);
  }
}
function $m(e) {
  let t = [];
  return (
    R(e.x) && t.push(`translateX(${e.x}px)`),
    R(e.y) && t.push(`translateY(${e.y}px)`),
    R(e.scale) && t.push(`scale(${e.scale})`),
    R(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    R(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    R(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    R(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    R(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function eh(e, t, n, r) {
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
                transform: r ? void 0 : $m(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : $m(n.effect),
              };
      }
    default:
      V(i);
  }
}
function th(e, n, r) {
  let i = Sa(() => new Set()),
    o = yo(),
    s = r || !o,
    c = Xe(),
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
            rh(
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
          V(t);
      }
    }
    switch (d) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let t = n?.current;
        return t ? Ae(t, e, { amount: p ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = f?.ref?.current;
        return t
          ? Ae(t, e, {
              amount: p ?? 0,
              root: document,
              margin: f?.offset ? `${f.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        V(d);
    }
  }, [s, i, r, n, f, p, d]);
  let m = !!e,
    h = e ? Qm(e) : void 0;
  return l(
    () => ({
      getTokenizer: () => {
        if ((i.clear(), !m)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: n } = u.current,
          a = eh(s, r || nh(e, t, n), u.current.effect, c);
        return {
          text: (e) => Zm(e, h, i, c, a),
          props: (e) => {
            if (n?.tokenization !== `element`) return;
            let t = qm();
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
            rh(h, e.effect, i, t, n, !1, c);
            break;
          }
          default:
            V(t);
        }
      },
    }),
    [s, m, i, r, h]
  );
}
function nh(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function rh(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = Xm(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await ih(n, u);
      if (
        e === null ||
        (ke(e, l, { ...r, restDelta: 0.001, delay: ge(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        ke(e, n, { ...r, restDelta: 0.001, delay: ge(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await Jm(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (je.read(() => {
          ((e = ah(n)),
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
      V(e);
  }
}
async function ih(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await Jm(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function ah(e) {
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
function oh(e) {
  let t = {};
  for (let n in e) (Je(n) || Zy(n)) && (t[n] = e[n]);
  return t;
}
function sh(e) {
  return e.type === o;
}
function ch(e) {
  return e.type === `br`;
}
function lh(e, t, n, r, a = {}, o, s = sh(e) ? -1 : 0) {
  let c = i.toArray(e.props.children);
  tt(n) || (c = c.slice(0, 1));
  let l = !0;
  c = c.map((e) => {
    if (((!y(e) || !ch(e)) && (l = !1), y(e))) return lh(e, t, n, r, a, o, s + 1);
    let i = tt(n) ? e : n;
    return L(i) && o ? o.text(i) : i;
  });
  let { "data-preset-tag": u, ...d } = e.props;
  if (L(e.type) || Ye(e.type)) {
    let n = Ne(e.type) || e.type,
      f = u || n,
      p = L(f) ? t?.[f] : void 0;
    ((d.className = Ac(`framer-text`, d.className, p)),
      o && s === 0 && !l && Object.assign(d, o.props(d.style)));
    let m = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      h = t?.anchor;
    if (m && h) {
      let e = uh(c, a);
      d.id = e;
      let t = Ac(`framer-text`, h),
        n = _(`a`, { href: `#${e}`, className: t, children: c });
      ((d.style = { ...(d.style ?? {}), scrollMarginTop: r }), (c = [n]));
    }
    f === `ol` &&
      (d.style = {
        ...(d.style ?? {}),
        [Dy]: fh(d.start ?? 1, i.count(d.children), d.style?.[Ey] ?? ``),
      });
  }
  return C(e, d, ...c);
}
function uh(e, t) {
  let n = Wr(e.map(dh).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function dh(e) {
  return L(e) || R(e)
    ? e.toString()
    : y(e)
      ? dh(e.props.children)
      : Array.isArray(e)
        ? e.map(dh).join(``)
        : ``;
}
function fh(e, t, n) {
  return to(Number(e) || 1, t, n);
}
function ph(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = Pi(n.x, n.y),
    i = iy(Pi(0.5, 0.5), r),
    a = Y.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: Pi.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  B(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !Pi.isEqual(e, s) && !Pi.isEqual(e, c));
  B(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = iy.intersection(i, iy(s, c)),
    f = iy.intersection(i, iy(l, u));
  return (B(d && f, `linearGradientLine: Must have a start and end point.`), iy(d, f));
}
function mh(e, t) {
  let n = ph(e.angle),
    r = ls(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = iy.pointAtPercentDistance(n, i),
    s = iy.pointAtPercentDistance(n, a),
    c = Ke([i, a], [0, 1]);
  return {
    id: `id${t}g${Db.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: xb.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function hh(e, t) {
  return {
    id: `id${t}g${kb.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: ls(e).map((t) => ({
      color: t.value,
      alpha: xb.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function gh(e) {
  if (!L(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return R(parseFloat(t));
}
function _h(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return R(n) ? n : 50;
}
function vh(e) {
  return gh(e) ? _h(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function yh(e) {
  return gh(e) ? _h(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function bh(e, t, n, r) {
  if (((e = Dv.get(e, `#09F`)), !lb.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
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
        (u = (t.width - c) * vh(e.positionX) + f),
        (d = (t.height - l) * yh(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * yh(e.positionY)))
        : ((n = g), (u = (1 - g) * vh(e.positionX))),
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
function xh(e) {
  return e.startsWith(`data:${DE}`);
}
function Sh(e, t) {
  if (/^\w+:/u.test(e) && !xh(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = J.current() === J.export;
  return nb.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function Ch(e, t) {
  return (a(() => NE.subscribeToTemplate(e), [e]), NE.template(e, t));
}
function wh(e) {
  try {
    let t = Vm(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function Th(e, t) {
  Dh(e, Eh(t));
}
function Eh(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function Dh(e, t) {
  (Oh(e, t),
    Array.from(e.children).forEach((e) => {
      Dh(e, t);
    }));
}
function Oh(e, t) {
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
function kh(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (PE[t[2]] || 1));
}
function Ah(e) {
  let t = kh(e.getAttribute(`width`)),
    n = kh(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function jh(e) {
  return e.indexOf(`image`) >= 0;
}
function Mh(e) {
  return e.indexOf(`var(--`) >= 0;
}
function Nh(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function Ph(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? K,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = NE.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && Ra(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    H(s) &&
    H(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l && l.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function Fh(e) {
  return e > zE ? `lazy` : void 0;
}
function Ih(e, t, n) {
  let r = zh(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function Lh(e) {
  return e ? (e.fonts ?? pi()) : pi();
}
function Rh(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : zh(e);
}
function zh(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    Bh(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(Vh) })
      : t.fonts.push(Vh(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function Bh(e) {
  return BE in e;
}
function Vh(e) {
  let t = Hh(e) || Uh(e) ? e : Wh(e);
  return Uh(t) ? t : Gh(t);
}
function Hh(e) {
  return `source` in e;
}
function Uh(e) {
  return `cssFamilyName` in e;
}
function Wh(e) {
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
function Gh(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${jT}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function Kh(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function qh(e) {
  return e.loader;
}
function Jh(e, t, n) {
  let r = qh(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var Yh,
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
  K,
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
  Bv,
  q,
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
  J,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  Y,
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
  X,
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
  Z,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  Q,
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
  $,
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
  VE = e(() => {
    (re(),
      Ce(),
      Re(),
      p(),
      D(),
      g(),
      (Yh = ue({
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
      (Xh = ue({
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
      (Zh = ue({
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
      (Qh = ue({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = Zh();
        },
      })),
      ($h = ue({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = Qh(),
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
      (eg = ue({
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
      (tg = () => {}),
      (ng = m !== void 0),
      (rg =
        ng &&
        (n.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(n.userAgent))),
      (ig = ng && typeof m.requestIdleCallback == `function`),
      (ag = ig ? m.requestIdleCallback : setTimeout),
      (og = () => () => {}),
      (sg = () => !0),
      (cg = () => !1),
      (lg = new Map()),
      (ug = new Map()),
      (dg = new Set()),
      (fg = `:`),
      (pg = ng ? void 0 : new Set()),
      (mg = `preload`),
      (hg = Object.keys),
      (gg = `equals`),
      (_g = f.createContext({})),
      (vg = f.createContext({})),
      (yg = []),
      (bg = `default`),
      (xg = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (Sg = class e {
        constructor(e, t) {
          (j(this, `resolver`, e),
            j(this, `cacheHash`, t),
            j(this, `promiseState`, xg.Pending),
            j(this, `preloadPromise`),
            j(this, `value`),
            j(this, `reason`),
            j(this, `read`, () => {
              if (this.promiseState === xg.Fulfilled) return this.value;
              throw this.promiseState === xg.Rejected
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
          return this.promiseState === xg.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === xg.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== xg.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && pg !== void 0 && pg.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = xg.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = xg.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && lg.has(this.cacheHash) ? lg.get(this.cacheHash) : this.resolver();
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
      (Cg = -1),
      (wg = -2),
      (Tg = -3),
      (Eg = -4),
      (Dg = -5),
      (Og = -6),
      (kg = -7),
      (Ag = 2 ** 32 - 1),
      (jg = Ag - 1),
      (Mg = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (Ng = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (Pg = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (Fg = typeof Uint8Array.fromBase64 == `function`),
      (Ig = typeof process == `object` && process.versions?.node !== void 0),
      (Lg = Fg ? Zt : Ig ? $t : tn),
      (Rg = Fg ? Qt : Ig ? en : nn),
      (K = ng
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
      (zg = 2),
      (Bg = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (Vg = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (Ug = class {
        constructor() {
          (j(this, `payload`, dn()), j(this, `isEmpty`, !0));
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
      (Wg = ng ? void 0 : new Ug()),
      (Gg = Vg.CollectionUtilsCache),
      (Kg = new WeakMap()),
      (qg = d(void 0)),
      (Jg = class {
        constructor(e, t) {
          (j(this, `collectionId`, t),
            j(this, `module`),
            j(this, `cacheMap`, new Map()),
            (this.module = new Sg(async () => {
              try {
                let t = await e();
                return (B(t, `Couldn't find CollectionUtils`), t);
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
            if (Wg !== void 0) {
              if (st(e)) return e.then((e) => (Wg.set(Gg, i, e), e));
              Wg.set(Gg, i, e);
            }
            return e;
          }
          if (pn(Gg, i)) {
            let e = mn(Gg, i);
            return (this.cacheMap.set(i, new Sg(() => e)), e);
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
            (Wg !== void 0 && Wg.set(Gg, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new Sg(() =>
            s
              .then((e) => (Wg !== void 0 && Wg.set(Gg, i, e), e))
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
      (Yg = K.scheduler && `yield` in K.scheduler),
      (Xg = K.scheduler && `postTask` in K.scheduler),
      (Zg = new Set()),
      (Qg = !rg),
      ($g = /Mac/u),
      (e_ = /iPhone|iPod|iPad/iu),
      (t_ = /MacIntel/iu),
      (n_ = /Edg\//u),
      (r_ = /Chrome/u),
      (i_ = /Google Inc/u),
      (a_ = /Safari/u),
      (o_ = /Apple Computer/u),
      (s_ = /Firefox\/\d+\.\d+$/u),
      (c_ = /Version\/([\d.]+)/u),
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
      (D_ = f.createContext({ global: void 0, routes: {} })),
      (O_ = 10),
      (k_ = 1e4),
      (A_ = (e) => `--view-transition-${e}`),
      (j_ = {
        circle: {
          makeKeyframe: (e, t) => {
            let { x: n, y: r } = ur(e);
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
            let { x: n, y: r } = ur(e),
              i = m.innerHeight - r,
              a = m.innerWidth - n;
            return t === `start`
              ? `clip-path: inset(${r}px ${a}px ${i}px ${n}px round ${e.round}px);`
              : `clip-path: inset(0 round 0);`;
          },
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = lr(e.width),
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
      (z_ =
        ng &&
        typeof m.navigation?.back == `function` &&
        !(() => {
          if (n === void 0) return !1;
          let e = n.userAgent,
            t = e.indexOf(`Chrome/`),
            r = +e.slice(t + 7, e.indexOf(`.`, t));
          return r > 101 && r < 128;
        })() &&
        !In()),
      (B_ = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (V_ = f.createContext(null)),
      (H_ = (() => {
        let e = d(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (U_ = async () => {}),
      (W_ = { activeLocale: null, locales: [], setLocale: U_ }),
      (G_ = (() => {
        let e = f.createContext(W_);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (K_ = (() => {
        let e = f.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (q_ = new Set()),
      (J_ = (() => {
        let e = d({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (Y_ = `__f_replay`),
      (X_ =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (Z_ = (e) => {
        e.target?.closest?.(`#main`) &&
          (ti(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (Q_ = !1),
      (hv = [ii]),
      (mv = [ii]),
      (pv = [ii]),
      (fv = [ii]),
      (dv = [ii]),
      (uv = [ii]),
      (lv = [ii]),
      (cv = [ii]),
      (sv = [ii]),
      (ov = [ii]),
      (av = [ii]),
      (iv = [ii]),
      (rv = [ii]),
      (nv = [ii]),
      (tv = [ii]),
      (ev = [ii]),
      ($_ = [ii]),
      (_v = class {
        constructor() {
          (Oe(gv, 5, this),
            j(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            j(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            j(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            j(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            j(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            j(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            j(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            ai(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            ai(
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
            ai(
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
            ai(
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
            ai(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            ai(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            ai(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          ai(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          ai(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (gv = pe(null)),
      M(gv, 1, `markRenderStart`, hv, _v),
      M(gv, 1, `markRenderEnd`, mv, _v),
      M(gv, 1, `markUseInsertionEffectsStart`, pv, _v),
      M(gv, 1, `markUseInsertionEffectRouterStart`, fv, _v),
      M(gv, 1, `markUseInsertionEffectsEnd`, dv, _v),
      M(gv, 1, `markUseLayoutEffectsStart`, uv, _v),
      M(gv, 1, `markRouterUseLayoutEffectStart`, lv, _v),
      M(gv, 1, `markUseLayoutEffectsEnd`, cv, _v),
      M(gv, 1, `markUseEffectsStart`, sv, _v),
      M(gv, 1, `markUseEffectsRouterStart`, ov, _v),
      M(gv, 1, `markUseEffectsAreSynchronous`, av, _v),
      M(gv, 1, `markUseEffectsEnd`, iv, _v),
      M(gv, 1, `markRafStart`, rv, _v),
      M(gv, 1, `markRafEnd`, nv, _v),
      M(gv, 1, `markLayoutStylePaintEnd`, tv, _v),
      M(gv, 1, `measureMutationEffects`, ev, _v),
      M(gv, 1, `measureUnattributedHydrationOverhead`, $_, _v),
      Ve(gv, _v),
      (yv = !1),
      (bv = { Start: ui, End: di }),
      (xv = class extends Error {}),
      (Sv = class extends v {
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
          if (!(this.state.error instanceof xv)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return fi(e, t);
        }
      }),
      (Cv = Object.freeze([])),
      (Tv = new Set()),
      (Ev = class {
        constructor() {
          (j(this, `observers`, new Set()), j(this, `transactions`, {}));
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
      (Dv = (() => {
        function e(e) {
          return (
            Oi(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            ki(e) ? e : new Av(e)
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
          (e.get = (e, t) => (e == null ? t : ki(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              ki(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (Ov = `onUpdate`),
      (kv = `finishTransaction`),
      (Av = class {
        constructor(e) {
          (j(this, `value`, e), j(this, `observers`, new Ev()));
        }
        static interpolationFor(e, t) {
          if (ki(e)) return Ai(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (ki(e) && (e = e.get()), (this.value = e));
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
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Mi(e.x, t.x), y: Mi(e.y, t.y) })),
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
      })((Pi ||= {})),
      (jv = {
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
      (Mv = new (Yh().Hsluv)()),
      (Nv = {
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
      (Pv =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (Fv = (e) => {
        let { r: t, g: n, b: r, a: i } = ia(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (Iv = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        oa({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (Lv = (e) => {
        let { r: t, g: n, b: r, a: i } = ia(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (Rv = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        oa({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (zv = class e {
        constructor(e) {
          (j(this, `format`, `p3`),
            j(this, `r`),
            j(this, `g`),
            j(this, `b`),
            j(this, `a`),
            (this.r = e.r ?? 0),
            (this.g = e.g ?? 0),
            (this.b = e.b ?? 0),
            (this.a = e.a ?? 1));
        }
        hsv() {
          return sa(this);
        }
        rgb() {
          return da(this);
        }
        hsl() {
          return Wi(this.r, this.g, this.b);
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
              return new e(la(t));
            case `srgb`:
              return new e(ua(la(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            ua({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = q(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = na(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!L(t) || !q.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (Bv = new Map()),
      (q = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = Bv.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (Bv.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = fa(t, n, r, i);
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
          (e.isColorString = (e) => typeof e == `string` && $i(e) !== !1),
          (e.isColorObject = (e) =>
            z(e) &&
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
          (e.toHex = (e, t = !1) => Ui(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && zv.isP3String(e)),
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
          (e.toHusl = (e) => ({ ...zi(e.r, e.g, e.b), a: e.roundA })),
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
            let t = qi(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = qi(e.r, e.g, e.b),
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
            let t = Ui(e.r, e.g, e.b, !0);
            for (let e of Object.keys(jv)) if (jv[e] === t) return e;
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
                r: Fi(i, [0, 1], [t.r, r.r], a),
                g: Fi(i, [0, 1], [t.g, r.g], a),
                b: Fi(i, [0, 1], [t.b, r.b], a),
                a: Fi(i, [0, 1], [t.a, r.a], a),
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
                h: Fi(i, [0, 1], [u, u + f], a),
                s: Fi(i, [0, 1], [c.s, l.s], a),
                l: Fi(i, [0, 1], [c.l, l.l], a),
                a: Fi(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(Bi(p.h, p.s, p.l, p.a));
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
          (e.rgbToHsl = (e, t, n) => Wi(e, t, n)),
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
      (Vv = (e) => e instanceof Ue),
      (Hv = Xh().EventEmitter),
      (Uv = class {
        constructor() {
          j(this, `_emitter`, new Hv());
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
      (Wv = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (Gv = K.requestAnimationFrame || Wv),
      (Kv = (e) => Gv(e)),
      (qv = 1 / 60),
      (Jv = class extends Uv {
        constructor(e = !1) {
          (super(),
            j(this, `_started`, !1),
            j(this, `_frame`, 0),
            j(this, `_frameTasks`, []),
            j(this, `tick`, () => {
              this._started &&
                (Kv(this.tick),
                this.emit(`update`, this._frame, qv),
                this.emit(`render`, this._frame, qv),
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
          qv = e;
        }
        static get TimeStep() {
          return qv;
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), Kv(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * qv;
        }
      }),
      (Yv = new Jv()),
      (Xv = { target: va() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (J = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => Xv.target,
        hasRestrictions: () => {
          let e = Xv.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (Zv = (e) => ({
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
        borderTopWidth: Zv(`y`),
        borderLeftWidth: Zv(`x`),
        borderRightWidth: Zv(`x`),
        borderBottomWidth: Zv(`y`),
      }),
      (Qv = f.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      ($v = {
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
      (ey = {
        ...$v,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (ty = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (ny = { ...ty, fontWeight: 500 }),
      (ry = {
        ...ty,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (iy = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = Oa(Pi.angleFromX(t.a, t.b)),
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
            return e(Pi(n.x - i, n.y + r), n);
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
          (e.distance = (e) => Pi.distance(e.a, e.b)),
          e
        );
      })()),
      (Y = {
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
        divide: (e, t) => Y.multiply(e, 1 / t),
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
          x: ji(e.x, t),
          y: ji(e.y, t),
          width: ji(e.width, t),
          height: ji(e.height, t),
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
          maxX: Y.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: Y.maxY(e),
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
          return { x: a, y: o, width: Pi.distance(t, n), height: Pi.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(Y.minX)), y: Math.min(...e.map(Y.minY)) },
            n = { x: Math.max(...e.map(Y.maxX)), y: Math.max(...e.map(Y.maxY)) };
          return Y.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: Y.minX(e), y: Y.minY(e) },
          { x: Y.minX(e), y: Y.maxY(e) },
          { x: Y.maxX(e), y: Y.minY(e) },
          { x: Y.maxX(e), y: Y.maxY(e) },
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
            t.x < Y.minX(e) ||
            t.x > Y.maxX(e) ||
            t.y < Y.minY(e) ||
            t.y > Y.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of Y.points(t)) if (!Y.containsPoint(e, n)) return !1;
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
          !(t.x >= Y.maxX(e) || Y.maxX(t) <= e.x || t.y >= Y.maxY(e) || Y.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = Y.maxX(e),
            r = Y.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = Y.maxY(e),
            r = Y.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => t.find((t) => Y.intersects(t, e)) === void 0,
        isEqual: (e, t) => Y.equals(e, t),
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
            t.x < e.x ? (n = e.x - t.x) : t.x > Y.maxX(e) && (n = t.x - Y.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > Y.maxY(e) && (r = t.y - Y.maxY(e)),
            Pi.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: Y.minX(e), y: Y.minY(e) },
            r = { x: Y.minX(t), y: Y.minY(t) };
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
          let n = Y.minX(e),
            r = Y.minY(e),
            i = Y.maxX(e),
            a = Y.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = Y.cornerPoints(e);
          return [iy(t, n), iy(n, r), iy(r, i), iy(i, t)];
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
                  V(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              V(n);
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
                  V(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              V(n);
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
          let n = iy(t, Y.center(e)),
            r = Y.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && iy.intersection(n, t, !0)) {
              let n = ay[e];
              return (B(n, () => `Invalid edge name: ${JSON.stringify(ay)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          B(r, `Rect array is empty`);
          let i = Y.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            B(o);
            let s = Y.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (ay = [`top`, `right`, `bottom`, `left`]),
      (oy = {
        quickfix: (e) => (
          (ka(e.widthType) || ka(e.heightType)) && (e.aspectRatio = null),
          H(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || ka(e.widthType) || H(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || ka(e.heightType) || H(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (sy = {
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
            d = oy.quickfix({
              left: H(t) || ki(t),
              right: H(n) || ki(n),
              top: H(r) || ki(r),
              bottom: H(i) || ki(i),
              widthType: Aa(a),
              heightType: Aa(o),
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
          } else a !== void 0 && typeof a != `string` && (f = Dv.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = Dv.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? Dv.getNumber(t) : null,
              right: d.right ? Dv.getNumber(n) : null,
              top: d.top ? Dv.getNumber(r) : null,
              bottom: d.bottom ? Dv.getNumber(i) : null,
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
            o = t?.sizing ? Dv.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? Dv.getNumber(t?.sizing.height) : null,
            c = Ia(e.left, e.right);
          if (o && H(c)) i = o - c;
          else if (n && ka(e.widthType)) i = n.width;
          else if (H(e.width))
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
                V(e.widthType);
            }
          let l = Ia(e.top, e.bottom);
          if (s && H(l)) a = s - l;
          else if (n && ka(e.heightType)) a = n.height;
          else if (H(e.height))
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
                V(e.heightType);
            }
          return Fa(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = sy.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? Dv.getNumber(l.width) : null,
            d = l ? Dv.getNumber(l.height) : null;
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
          return r ? Y.pixelAligned(f) : f;
        },
      }),
      (cy = 200),
      (ly = 200),
      (uy = f.createContext({ parentSize: 0 })),
      (dy = (e) => {
        let t = Wa(),
          { parentSize: n, children: r } = e,
          i = f.useMemo(() => ({ parentSize: n }), [Ka(n), qa(n)]);
        return t === 1
          ? r
            ? _(O, { children: r })
            : null
          : _(uy.Provider, { value: i, children: r });
      }),
      (fy = ((e) => (
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
      ))(fy || {})),
      (py = f.createContext(void 0)),
      (my = new Set()),
      (gy = `style[data-framer-css-ssr-minified]`),
      (_y = (() => {
        if (!Rn()) return new Set();
        let e = document.querySelector(gy)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (vy = `data-framer-css-ssr`),
      (yy = (e, t, n) =>
        f.forwardRef((r, i) => {
          let { sheet: a, cache: o } = f.useContext(py) ?? {},
            s = n;
          if (!Rn()) {
            Ze(t) && (t = t($a(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            xy.add(e, s);
          }
          return (
            A(() => {
              (s && _y.has(s)) ||
                (Ze(t)
                  ? t($a(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && Qa(e, a, o));
            }, []),
            _(e, { ...r, ref: i })
          );
        })),
      (by = class {
        constructor() {
          (j(this, `styles`, new Set()), j(this, `componentIds`, new Set()));
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
      (xy = new by()),
      (Sy = [
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
      (Cy = ((e) => (
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
      ))(Cy || {})),
      (wy = Cy),
      (Ty = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (B(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${eo(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            B(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      `${wy.BorderTopWidth}${wy.BorderRightWidth}${wy.BorderBottomWidth}${wy.BorderLeftWidth}`,
      (Ey = `--list-style-type`),
      (Dy = `--max-list-digits`),
      (Oy = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (ky = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (Ay = { display: `inline-block` }),
      (jy = { display: `block` }),
      (My = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${ky.display};
            flex-direction: ${ky.flexDirection};
            justify-content: ${ky.justifyContent};
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
                color: ${oo([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${oo([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${oo([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
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
            display: ${Ay.display};
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
                color: ${oo([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
                color: ${oo([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${oo([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${oo([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
            color: ${oo([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
            color: ${oo([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${oo([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${oo([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
            color: ${oo([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
                color: ${oo([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${oo([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${oo([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
                color: ${oo([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${oo([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
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
                color: ${oo([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${oo([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${oo([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
                color: ${oo([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${oo([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${jy.display};
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
            padding-inline-start: calc(calc(var(${Dy}, 1) + 1) * 1ch);
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
        ${so(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (Ny = `--text-truncation-display-inline-for-safari-16`),
      (Py = `--text-truncation-display-none-for-safari-16`),
      (Fy = `--text-truncation-line-break-for-safari-16`),
      (Iy = [
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
      (Ly = `(background: -webkit-named-image(i))`),
      (Ry = `(contain-intrinsic-size: inherit)`),
      (zy = [
        `@supports ${Ly} and (not ${Ry}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${Iy.join(`, `)} { display: var(${Ny}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${Iy.map((e) => `${e}::after`).join(`, `)} { content: var(${Fy}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${Py}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${Ny}, ${Ay.display}) }
    }`,
      ]),
      (By = `--framer-will-change-override`),
      (Vy = `--framer-will-change-effect-override`),
      (Hy = `--framer-will-change-filter-override`),
      (Uy = `--overflow-clip-fallback`),
      (Wy = `--one-if-corner-shape-supported`),
      (Gy = (e) => {
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
                  `body { ${By}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${By}: transform; } }`,
                ]
              : [`body { ${By}: none; ${Vy}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${Hy}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${Hy}: filter; } }`,
                ]
              : [`body { ${Hy}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${Uy}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${Wy}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...My,
          ...Sy,
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
          ...zy,
          f,
        ];
      }),
      (Ky = Za(() => Gy(!1))),
      (qy = Za(() => Gy(!0))),
      (Jy = `optional`),
      (Yy = (e) => e),
      (Xy =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (Zy = xo(
        (e) =>
          Xy.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (Qy = (e) => () => {
        Di(e);
      }),
      ($y = () => () => {}),
      (eb = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = nb.useImageSource(e, t, n);
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
      (tb = !1),
      (nb = new Proxy(eb, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? $y()
              : Qy(
                  tb
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (rb = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (ib = [1, 2, 2.2]),
      (ab = [512, 1024, 2048, 4096]),
      (ob = 512),
      (sb = { position: `absolute`, ...rb, top: 0, right: 0, bottom: 0, left: 0 }),
      (cb = `src`),
      (lb = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && cb in e;
        },
      }),
      (ub = Fn()),
      (db = typeof document < `u` ? r : a),
      (fb = f.createContext(!1)),
      (pb = class {
        constructor() {
          (j(this, `sharedResizeObserver`),
            j(this, `callbacks`, new WeakMap()),
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
      (mb = Rn() ? new pb() : void 0),
      (hb = `data-framer-size-compatibility-wrapper`),
      (gb = `0.000001px`),
      (_b = ` translateZ(${gb})`),
      (vb = Bn() || In() || Vn()),
      (yb = (() => {
        class e extends v {
          constructor() {
            (super(...arguments),
              j(this, `layerElement`, null),
              j(this, `setLayerElement`, (e) => {
                this.layerElement = e;
              }));
          }
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? ts(t) : ns(t));
          }
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Ot(this.props, e);
          }
          componentDidUpdate(e) {
            Yy(this.props).clip &&
              Yy(this.props).radius === 0 &&
              Yy(e).radius !== 0 &&
              is(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return (j(e, `defaultProps`, {}), e);
      })()),
      (bb = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (xb = {
        hueRotate: (e, t) => q.toHslString(q.hueRotate(q(e), t)),
        setAlpha: (e, t) => q.toRgbString(q.alpha(q(e), t)),
        getAlpha: (e) => {
          let t = $i(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => q.toRgbString(q.multiplyAlpha(q(e), t)),
        toHexValue: (e) => q.toHex(q(e)).toUpperCase(),
        toHex: (e) => q.toHexString(q(e)).toUpperCase(),
        toRgb: (e) => q.toRgb(q(e)),
        toRgbString: (e) => q.toRgbString(q(e)),
        toHSV: (e) => q.toHsv(q(e)),
        toHSL: (e) => q.toHsl(q(e)),
        toHslString: (e) => q.toHslString(q(e)),
        toHsvString: (e) => q.toHsvString(q(e)),
        hsvToHSLString: (e) => q.toHslString(q(Vi(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => q.toHex(q(Vi(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => q.toHexString(q(Vi(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => q.toRgbString(q(Vi(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => Vi(e.h, e.s, e.v),
        rgbaToString: (e) => q.toRgbString(q(e)),
        rgbToHexValue: (e) => q.toHex(q(e)),
        rgbToHexString: (e) => q.toHexString(q(e)),
        hslToString: (e) => q.toHslString(q(e)),
        hslToRgbString: (e) => q.toRgbString(q(e)),
        toColorPickerSquare: (e) => q.toRgbString(q({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => q(e).isValid !== !1,
        equals: (e, t) =>
          q.isP3String(e) || q.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = q(e)),
              typeof t == `string` && (t = q(t)),
              q.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = q(e);
          return t.a === 1 ? q.toHexString(t) : q.toRgbString(t);
        },
        toFormatString: (e) => (q.isP3String(e) ? e : q.toRgbString(q(e))),
      }),
      (Sb = /var\(.+\)/u),
      (Cb = new Map()),
      (wb = [`stops`]),
      (Tb = [`start`, `end`]),
      (Eb = [`angle`, `alpha`]),
      (Db = {
        isLinearGradient: (e) => z(e) && Eb.every((t) => t in e) && (fs(e) || ds(e)),
        hash: (e) => e.angle ^ us(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = ls(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (Ob = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (kb = {
        isRadialGradient: (e) => z(e) && Ob.every((t) => t in e) && (fs(e) || ds(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ us(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = ls(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (Ab = [
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
      (jb = new Set([...Ab, ...Ab.map((e) => `${e}Capture`)])),
      (Mb = `overflow`),
      (Nb = { x: 0, y: 0, width: 200, height: 200 }),
      (Pb = new Set([
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
      (Fb = h(function (e, n) {
        let { name: r, center: i, border: a, _border: o, __portal: s } = e,
          { props: l, children: u } = Go(e),
          d = Cs(l),
          f = qo(e),
          p = vs(e),
          m = t(null),
          h = n ?? m,
          g = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": p,
            "data-framer-highlight": p === `pointer` || void 0,
            "data-layoutid": f,
            "data-framer-offset-parent-id": Yy(e)[`data-framer-offset-parent-id`],
          };
        !ws(e) && r && (Yy(g)[`data-framer-name`] = r);
        let [v, y] = Ss(l),
          b = xs(l),
          x = Xa(b);
        (i && !(y && !x && Ra(b))
          ? ((d.transformTemplate ||= Ko(i)), Object.assign(g, Uo(i)))
          : (d.transformTemplate ||= void 0),
          $o(e, h));
        let S = zo(e),
          C = Ts(l, b, y, c(fb)),
          w = Ja(
            T(O, {
              children: [
                S
                  ? _(Fo, {
                      alt: e.alt ?? ``,
                      image: S,
                      containerSize: y ?? void 0,
                      nodeId: e.id && Wo(e.id),
                      layoutId: f,
                    })
                  : null,
                u,
                _(Lo, { ...o, border: a, layoutId: f }),
              ],
            }),
            C
          ),
          E = Vo(e.as),
          D = Bo(S);
        return (
          e.fitImageDimension &&
            D &&
            ((v[e.fitImageDimension] = `auto`), (v.aspectRatio = D.width / D.height)),
          T(E, { ...g, ...d, layoutId: f, style: v, ref: h, children: [w, s] })
        );
      })),
      (Ib = lo(
        h(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? _(Fb, { ...e, ref: t }) : null;
        })
      )),
      (Lb = `__LAYOUT_TREE_ROOT`),
      (Rb = f.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (zb = class extends v {
        constructor() {
          (super(...arguments),
            j(this, `shouldAnimate`, !1),
            j(this, `transition`),
            j(this, `lead`),
            j(this, `follow`),
            j(this, `scheduledPromotion`, !1),
            j(this, `scheduledDidUpdate`, !1),
            j(this, `scheduleProjectionDidUpdate`, () => {
              this.scheduledDidUpdate = !0;
            }),
            j(this, `schedulePromoteTree`, (e, t, n) => {
              ((this.follow = this.lead),
                (this.shouldAnimate = n),
                (this.lead = e),
                (this.transition = t),
                (this.scheduledPromotion = !0));
            }),
            j(this, `initLead`, (e, t) => {
              ((this.follow = this.lead),
                (this.lead = e),
                this.follow && t && (this.follow.layoutMaybeMutated = !0));
            }),
            j(this, `sharedLayoutContext`, {
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
                preserveFollowOpacity: t.options.layoutId === Lb && !this.follow?.isExiting,
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
          return _(Rb.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (Bb = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (Vb = class {
        constructor(e) {
          (j(this, `sharedIntersectionObserver`),
            j(this, `callbacks`, new WeakMap()),
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
      (Hb = d(new Map())),
      (Ub = typeof IntersectionObserver > `u` ? tg : Ns),
      (Wb = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (Gb = f.createContext(null)),
      (Kb = class extends v {
        constructor() {
          (super(...arguments),
            j(this, `layoutMaybeMutated`, !1),
            j(this, `projectionNodes`, new Map()),
            j(this, `rootProjectionNode`),
            j(this, `isExiting`),
            j(
              this,
              `shouldPreserveFollowOpacity`,
              (e) => e.options.layoutId === Lb && !this.props.isExiting
            ),
            j(this, `switchLayoutGroupContext`, {
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
          return _(Fe.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (qb = (e) => {
        let t = f.useContext(Rb);
        return _(Kb, { ...e, sharedLayoutContext: t });
      }),
      (Jb = f.createContext(!0)),
      (Yb = d({ register: () => {}, deregister: () => {} })),
      (Xb = ({ isCurrent: e, isOverlayed: n, children: r }) => {
        let i = Rs(),
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
                i.set(r, Ze(a) ? a : void 0);
              }),
              () => {
                i.forEach((e, t) => {
                  e && (e(), i.set(t, void 0));
                });
              }
            ),
            [e, n, i]
          ),
          _(Yb.Provider, { value: o, children: r })
        );
      }),
      (Zb = f.memo(function ({
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
        let D = he(),
          O = c(Ee),
          { persistLayoutIdCache: ee } = c(Qv),
          k = t({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: Vs({}, v, s),
          }),
          A = t(null),
          te = O !== null && !O.isPresent;
        (n && k.current.wasCurrent === void 0 && ee(),
          a(() => {
            if (e || !D) return;
            if (te) {
              k.current = { ...k.current, wasBeingRemoved: te };
              return;
            }
            let { wasPrevious: t, wasCurrent: i } = k.current,
              a = (n && !i) || (!te && k.current.wasBeingRemoved && n),
              o = r && !t,
              c = Vs(k.current.origins, v, s),
              l = k.current.wasReset;
            (a || o
              ? (D.stop(), D.start({ zIndex: S, ...c, ...s }), (l = !1))
              : l === !1 && (D.stop(), D.set({ zIndex: S, ...Qb, opacity: 0 }), (l = !0)),
              (k.current = {
                wasCurrent: !!n,
                wasPrevious: !!r,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [n, r, te]));
        let ne = g ? { type: !1 } : `velocity` in m ? { ...m, velocity: 0 } : m,
          re = g ? { type: !1 } : h || m,
          j = { ...b };
        ((j.left === void 0 || j.right === void 0) && (j.width = `auto`),
          (j.top === void 0 || j.bottom === void 0) && (j.height = `auto`));
        let ie = (Hs(s) || Hs(v)) && (e || n || r) ? 1200 : void 0,
          ae = { ...Qb, ...k.current.origins },
          oe = e
            ? {
                initial: { ...ae, ...v },
                animate: { ...ae, ...s, transition: ne },
                exit: { ...ae, ...y, transition: m },
              }
            : { animate: D, exit: { ...ae, ...y, transition: re } },
          se = !(te || C === !1),
          ce = !!n && se,
          le = n && E;
        return T(Ib, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || te || (n && x) ? S : void 0,
            pointerEvents: void 0,
            visibility: o ? `visible` : `hidden`,
            perspective: ie,
          },
          children: [
            e &&
              _(Ib, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: m,
                initial: { opacity: g && o ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: u || `transparent`,
                onTap: te ? void 0 : d,
              }),
            _(Ib, {
              ...j,
              ...oe,
              transition: {
                default: ne,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: te ? p : f,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!n,
              style: { pointerEvents: void 0, opacity: le || e || (n && x) ? 1 : 0 },
              "data-is-present": se ? void 0 : !1,
              ref: A,
              children: _(Gb.Provider, {
                value: A,
                children: _(Jb.Provider, {
                  value: ce,
                  children: _(Xb, {
                    isCurrent: ce,
                    isOverlayed: i,
                    children: _(qb, {
                      isLead: n,
                      animatesLayout: !!x,
                      transition: ne,
                      isExiting: !se,
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
      }, Bs)),
      (Qb = {
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
      ($b = class {
        constructor() {
          (j(this, `warning`, () => {
            Di(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
          }),
            j(this, `goBack`, () => this.warning()),
            j(this, `instant`, () => this.warning()),
            j(this, `fade`, () => this.warning()),
            j(this, `push`, () => this.warning()),
            j(this, `modal`, () => this.warning()),
            j(this, `overlay`, () => this.warning()),
            j(this, `flip`, () => this.warning()),
            j(this, `customTransition`, () => this.warning()),
            j(this, `magicMotion`, () => this.warning()));
        }
      }),
      (ex = d(new $b())),
      (tx = {
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
      (nx = () => ({
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
      (rx = hg(Qb)),
      (ix = f.createContext(void 0)),
      (ax = f.createContext(void 0)),
      (ox = (() => {
        var e, t, n, r, i, a;
        class o extends v {
          constructor(n) {
            (super(n),
              I(this, t),
              I(this, e, null),
              j(this, `state`, nx()),
              I(this, i, (e) => {
                if (!this.props.enabled && this.state.history.length > 0) return;
                let t = Ks(this.state, e);
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
              j(this, `goBack`, () => {
                if (!Se(this, t, r).call(this))
                  return (
                    ve(this, e, globalThis.event?.timeStamp || null),
                    this.state.currentOverlay === -1
                      ? F(this, i).call(this, { type: `remove` })
                      : F(this, i).call(this, { type: `removeOverlay` })
                  );
              }));
            let a = this.props.children;
            if (!a || !Da(a) || !Ea(a)) return;
            let o = { ...tx.Instant },
              s = {
                type: `add`,
                key: a.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: o,
                component: a,
              },
              c = Ks(this.state, s);
            c && (this.state = c);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let n = e.children;
            if (!Da(n) || !Ea(n)) return;
            let r = n.key?.toString();
            r &&
              (this.state.history.length === 0
                ? Se(this, t, a).call(this, n, tx.Instant)
                : F(this, i).call(this, { type: `update`, key: r, component: n }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          instant(e) {
            Se(this, t, a).call(this, e, tx.Instant, void 0);
          }
          fade(e, n) {
            Se(this, t, a).call(this, e, tx.Fade, n);
          }
          push(e, n) {
            Se(this, t, a).call(this, e, Us(n), n);
          }
          modal(e, n) {
            Se(this, t, a).call(this, e, tx.Modal, n);
          }
          overlay(e, n) {
            Se(this, t, a).call(this, e, Ws(n), n);
          }
          flip(e, n) {
            Se(this, t, a).call(this, e, Gs(n), n);
          }
          magicMotion(e, n) {
            Se(this, t, a).call(this, e, tx.MagicMotion, n);
          }
          customTransition(e, n) {
            Se(this, t, a).call(this, e, n);
          }
          render() {
            let e = Se(this, t, n).call(this, { overCurrentContext: !1 }),
              r = Se(this, t, n).call(this, { overCurrentContext: !0 }),
              i = sc(r),
              a = r.current > -1,
              o = this.state.history.length === 1,
              s = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let r = this.state.containerIndex[t];
              B(r !== void 0, `Container's index must be registered`);
              let i = this.state.containerVisualIndex[t];
              B(i !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[r],
                u = this.state.transitionForContainer[t],
                d = r === this.state.current,
                f = r === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              s.push(
                _(
                  Zb,
                  {
                    id: t,
                    index: i,
                    isInitial: o,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: a,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: _c(r, e),
                    transitionProps: u,
                    animation: gc(r, e),
                    backfaceVisible: mc(r, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: _(Es, { children: yc({ component: n, transition: l?.transition }) }),
                  },
                  t
                )
              );
            }
            let c = this.state.overlayStack.map((e, t) =>
              _(
                Zb,
                {
                  isLayeredContainer: !0,
                  isCurrent: t === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: pc(t, r),
                  transitionProps: hc(t, r),
                  instant: _c(t, r, !0),
                  animation: gc(t, r),
                  exitProps: e.transition.enter,
                  visible: vc(t, r),
                  backdropColor: dc(e.transition),
                  backfaceVisible: fc(t, r),
                  onTapBackdrop: bc(e.transition, this.goBack),
                  index: this.state.current + 1 + t,
                  children: yc({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return _(Ib, {
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
              children: _(ex.Provider, {
                value: this,
                children: T(ax.Provider, {
                  value: o,
                  children: [
                    _(Zb, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: cc(i),
                      animation: lc(i),
                      backfaceVisible: uc(i),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: _(ya, {
                        children: _(zb, {
                          children: _(Le, { presenceAffectsLayout: !1, children: s }),
                        }),
                      }),
                    }),
                    _(Le, { children: c }),
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
            return globalThis.event ? F(this, e) === globalThis.event.timeStamp : !1;
          }),
          (i = new WeakMap()),
          (a = function (n, a, o) {
            if (
              Se(this, t, r).call(this) ||
              (ve(this, e, globalThis.event?.timeStamp || null), !n || !Da(n) || !Ea(n))
            )
              return;
            let s = { ...a, ...o };
            if (s.overCurrentContext)
              return F(this, i).call(this, { type: `addOverlay`, transition: s, component: n });
            let c = n.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            F(this, i).call(this, { type: `add`, key: c, transition: s, component: n });
          }),
          j(o, `defaultProps`, { enabled: !0 }),
          j(o, `contextType`, ix),
          o
        );
      })()),
      (sx = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (cx = lo(f.forwardRef(xc))),
      We($h(), 1),
      We($h(), 1),
      We($h(), 1),
      (lx = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (ux = Symbol(`private`)),
      (dx = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [ux]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new Ev(),
                reset() {
                  for (let t in i)
                    if (lx(i, t)) {
                      let n = lx(e, t) ? Yy(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, px);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[ux].reset()),
          (e.addObserver = (e, t) => e[ux].observers.add(t)),
          e
        );
      })()),
      (fx = class {
        constructor() {
          (j(this, `set`, (e, t, n, r) => {
            if (t === ux) return !1;
            let i = e[ux],
              a,
              o;
            if (
              (ki(n) ? ((a = n), (o = a.get())) : (o = n),
              i.makeAnimatables &&
                typeof n != `function` &&
                typeof n != `object` &&
                !a &&
                (a = Dv(n)),
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
              l = Yy(e)[t];
            if (l !== void 0) {
              ki(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (Yy(e)[t] = o));
              let n = typeof o == `object` && !!o;
              ((Array.isArray(o) || n) && (c = !0), (s = !0));
            } else (a && (n = a), (s = Reflect.set(e, t, n)));
            return (c && i.observers.notify({ value: r }), s);
          }),
            j(this, `get`, (e, t, n) => {
              if (t === ux) return Yy(e)[t];
              let r = Reflect.get(e, t, n);
              return typeof r == `function` ? r.bind(n) : r;
            }));
        }
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[ux].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(ux);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== ux) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (px = new fx()),
      (mx = `opacity`),
      (hx = (() => {
        function e(t = {}) {
          let n = dx(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => dx.resetObject(e));
          }),
          (e.addObserver = (e, t) => dx.addObserver(e, t)),
          e
        );
      })()),
      (gx = { update: 0 }),
      (_x = f.createContext({ update: NaN })),
      (vx = class extends v {
        constructor() {
          (super(...arguments),
            j(this, `observers`, []),
            j(this, `state`, gx),
            j(this, `taskAdded`, !1),
            j(this, `frameTask`, () => {
              (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
            }),
            j(this, `observer`, () => {
              this.taskAdded || ((this.taskAdded = !0), Yv.addFrameTask(this.frameTask));
            }));
        }
        componentWillUnmount() {
          (this.observers.map((e) => e()), hx.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            hx._stores.forEach((e) => {
              let t = hx.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            _(_x.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      We($h(), 1),
      (yx = `__framer__`),
      (bx = yx.length),
      (xx = f.createContext(void 0)),
      (Sx = f.createContext(void 0)),
      (Cx = `ssr-variant`),
      (wx = `ssr-variant-group-separator`),
      (Tx = f.forwardRef(function (e, t) {
        let n = Pc(t),
          r = f.useContext(Sx),
          i = f.useSyncExternalStore(og, cg, sg),
          a = Sa(() => (i ? (Rn() ? 1 : 2) : 0)),
          o = f.useContext(xx);
        return qr(() => {
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
              return n(s, Hc(t, c, i));
            case 1:
              return Lc(i, s, c, u, l, d, n, t);
            case 2:
              return Lc(i, s, c, u, l, d, Nc, void 0);
            default:
              V(a);
          }
        }, [o, r, n, e]);
      })),
      (Ex = yy(Tx, `.${Cx} { display: contents }`, `PropertyOverrides`)),
      (Dx = `default`),
      (Ox = new Set([Dx])),
      (Ax = class {
        constructor() {
          (j(this, `entries`, new Map()), I(this, kx, {}));
        }
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (B(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (B(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = Dx, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return Dx;
          let n = F(this, kx)[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (F(this, kx)[e] = Rc(r)) : Dx;
        }
        setAll(e, t = Ox, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = Ze(n.transformTemplate) ? n.transformTemplate?.({}, Mx) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: z(a) ? a : void 0,
              animate: z(o) ? o : void 0,
              transformTemplate: L(i) ? i : void 0,
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
      (kx = new WeakMap()),
      (jx = new Ax()),
      (Mx = `__Appear_Animation_Transform__`),
      (Nx = `data-framer-appear-id`),
      (Px = `data-framer-appear-animation`),
      (Fx = (e) => {
        if (yo())
          return {
            animate: Wc(e.animate) ? e.animate : void 0,
            initial: Wc(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (Ix = [
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
      (Lx = (e) => ({
        x: oe(e?.x ?? 0),
        y: oe(e?.y ?? 0),
        opacity: oe(e?.opacity ?? 1),
        scale: oe(e?.scale ?? 1),
        rotate: oe(e?.rotate ?? 0),
        rotateX: oe(e?.rotateX ?? 0),
        rotateY: oe(e?.rotateY ?? 0),
        skewX: oe(e?.skewX ?? 0),
        skewY: oe(e?.skewY ?? 0),
        transformPerspective: oe(e?.transformPerspective ?? 0),
      })),
      (X = {
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
      (eS = hg($x)),
      (tS = (e) => e.reduce((e, t) => (e += t), 0)),
      (nS = (e) => e.reduce((e, t) => (e *= t), 1)),
      (rS = `current`),
      (iS = (e) =>
        f.forwardRef((t, n) => {
          if (t.__withFX)
            return _(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let r = Fx(t);
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
            } = pl(t),
            m = As(n),
            { values: h, style: g } = $c(s, m, p, t.style, t[qe]),
            { values: v, style: y } = Yc(i, m, t.style?.visibility),
            { values: b, style: x } = dl(o, m),
            { values: S, style: C } = sl(a, m),
            { values: w, style: T } = qc(c, m),
            E = f.useMemo(() => {
              let e = new Ue(u ?? 1);
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
          hl(t.style, E);
          let D = P(E.scale, nS),
            O = P(E.opacity, nS),
            ee = P(E.x, tS),
            k = P(E.y, tS),
            A = P(E.rotate, tS),
            te = P(E.rotateX, tS),
            ne = P(E.rotateY, tS),
            re = P(E.skewX, tS),
            j = P(E.skewY, tS),
            ie = P(E.transformPerspective, tS),
            { drag: ae, dragConstraints: oe } = l;
          Yo(ae && ml(oe) ? oe : void 0);
          let se = {
            opacity: O,
            scale: D,
            x: ee,
            y: k,
            rotate: A,
            rotateX: te,
            rotateY: ne,
            skewX: re,
            skewY: j,
          };
          tt(d) && (se.transformPerspective = ie);
          let ce = gl(t.animate) ? t.animate : void 0,
            le = gl(t.initial) ? t.initial : void 0,
            ue = gl(t.exit) ? t.exit : void 0,
            de = p && !s.presenceInitial ? { initial: le, animate: ce, exit: ue } : {};
          return _(e, {
            ...l,
            ...de,
            __withFX: !0,
            style: { ...t.style, ...y, ...x, ...T, ...se, ...C, ...g },
            values: h,
            ref: m,
          });
        })),
      (aS = f.createContext({})),
      (oS = f.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = f.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = Pc(a);
        return _(aS.Provider, { value: o, children: s(r, i) });
      })),
      (sS = (e) =>
        f.forwardRef((t, n) =>
          _(e, { layoutId: qo(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (cS = !1),
      (lS = class extends v {
        constructor() {
          (super(...arguments), j(this, `state`, { error: void 0 }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!vl(e)) return;
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
          if (!vl(e)) throw e;
          return ((cS = !0), this.props.children);
        }
      }),
      (uS = m === void 0 ? null : new Promise(() => {})),
      (dS = _(yl, {})),
      (fS = d(!1)),
      (fS.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (pS = _(xl, {})),
      (mS = class extends v {
        constructor() {
          (super(...arguments), j(this, `state`, { hasError: !1 }));
        }
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Cl(this.props.getErrorMessage(), t?.componentStack), Sl(e, t));
        }
        render() {
          let { children: e, fallback: t = pS } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (hS = class extends v {
        constructor() {
          (super(...arguments), j(this, `state`, { hasError: !1 }));
        }
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            Sl(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (gS = f.createContext(void 0)),
      (_S = `code-crash:`),
      (vS = sS(
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
          let u = Sa(() => (t ? `${t}-container` : void 0)),
            d = Vo(n),
            p = Ll(
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
            children: _(fb.Provider, {
              value: !0,
              children: _(V_.Provider, {
                value: i ?? null,
                children: _(xa, {
                  enabled: !1,
                  children: _(He, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: p }),
                }),
              }),
            }),
          });
        })
      )),
      (yS = f.forwardRef(function (e, t) {
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
          d = Ll(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = Vo(f);
          return _(V_.Provider, {
            value: a ?? null,
            children: _(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return _(V_.Provider, {
            value: a ?? null,
            children: _(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (bS = d({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (xS = `framer-cursor-none`),
      (SS = `framer-pointer-events-none`),
      (CS = b(function ({ children: e }) {
        let t = Sa(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = Rl(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = Xe();
        return T(bS.Provider, { value: t, children: [e, !n && _(DS, {})] });
      })),
      (wS = yy(
        CS,
        [
          `.${xS}, .${xS} * { cursor: none !important; }`,
          `.${SS}, .${SS} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (TS = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (ES = `data-framer-portal-id`),
      (DS = b(function () {
        let { onRegisterCursors: e } = c(bS),
          [n, i] = s(!1),
          o = fe(0),
          l = fe(0),
          d = fe(0),
          f = t(null),
          p = t({ cursors: {}, cursorHash: void 0 }),
          m = Jo();
        (r(() => {
          let e = K.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? k(() => i(!1)) : i(!0);
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
              (o.set(e), l.set(t), ke(d, 1, { type: `tween`, duration: 0.2 }));
            }
            let i = () => {
              if (et(p.current.cursors)) return;
              let n = Hl(e, t);
              n !== p.current.cursorHash && ((p.current.cursorHash = n), je.update(() => m()));
            };
            function a(n) {
              if (n.pointerType === `touch`) {
                Ie(i);
                return;
              }
              (je.read(i, !0), (e = n.clientX), (t = n.clientY), je.update(r));
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
              je.update(() => {
                f.current?.dispatchEvent(t);
              });
            }
            return (
              K.addEventListener(`pointermove`, a),
              document.addEventListener(`pointerdown`, s),
              document.addEventListener(`pointerup`, s),
              je.read(i, !0),
              () => {
                (K.removeEventListener(`pointermove`, a),
                  document.removeEventListener(`pointerdown`, s),
                  document.removeEventListener(`pointerup`, s),
                  Ie(i));
              }
            );
          }, [d, o, l, m, n]),
          a(() => {
            if (!n) return;
            function e() {
              ke(d, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              K.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), K.removeEventListener(`blur`, e));
              }
            );
          }, [d, n]),
          r(() => {
            function t(e) {
              ((p.current.cursors = e),
                (p.current.cursorHash = et(e) ? null : Hl(o.get(), l.get())),
                m());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(xS, !1));
            };
          }, [o, l, e, m]));
        let { cursors: h, cursorHash: g } = p.current,
          v = g ? h[g] : null,
          y = zl(v);
        r(() => {
          n && document.body.classList.toggle(xS, y);
        }, [y, n]);
        let b = v?.component,
          x = v?.transition ?? { duration: 0 },
          S = x.duration === void 0 ? x : { ...x, duration: x.duration * 1e3 },
          C = de(o, S),
          w = de(l, S),
          T = P(() => C.get() + (v?.offset?.x ?? 0)),
          D = P(() => w.get() + (v?.offset?.y ?? 0)),
          O = v?.alignment,
          ee = v?.placement,
          A = u((e, t) => `translate(${Vl(ee, O)}) ${t}`, [O, ee]);
        return !n || !v || !b
          ? null
          : _(E, {
              children: _(b, {
                transformTemplate: A,
                style: { ...TS, x: T, y: D, opacity: d },
                globalTapTarget: !0,
                variant: v?.variant,
                ref: f,
                className: SS,
              }),
            });
      })),
      (OS = `webPageId`),
      (kS = class {
        constructor() {
          (j(this, `collectedLinks`, new Map()), j(this, `nestingInfo`, new Map()));
        }
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            B(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (B(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((ng && !Vn()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(Gl(e), e), this.collectedLinks.set(Gl(t), t));
          let n = this.nestingInfo.get(Gl(e)) ?? new Set();
          (n.add(Gl(t)), this.nestingInfo.set(Gl(e), n));
        }
      }),
      (AS = new kS()),
      (jS = `element`),
      (MS = `collection`),
      (NS = `collectionItemId`),
      (PS = `pathVariables`),
      (FS = `framer/page-link,`),
      (IS = d(void 0)),
      (LS = `overlay`),
      (RS = `template-overlay`),
      (zS = f.forwardRef(function ({ Component: e, ...t }, n) {
        return e ? _(e, { ...t, ref: n }) : null;
      })),
      (BS = class extends v {
        constructor() {
          (super(...arguments),
            j(this, `state`, { error: void 0 }),
            j(this, `message`, `Made UI non-interactive due to an error.`),
            j(this, `messageFatal`, `Fatal error.`));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((m.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(ut(rg ? this.message : this.messageFatal, e)),
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
            r = (rg && document.getElementById(`main`)?.innerHTML) || ``;
          return _(`div`, {
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
      (VS = /:([a-z]\w*)/gi),
      (HS = d(void 0)),
      (US = 500),
      (WS = 0.9),
      (GS = 1.7),
      (KS = 4),
      (qS = 1 / 0),
      (JS = new WeakMap()),
      (YS = new Set()),
      (XS = new Map()),
      (ZS = !Qg || typeof IntersectionObserver > `u` ? null : mu()),
      (QS = cu(
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
          let p = jt(),
            m = Nt(),
            h = fu(),
            { activeLocale: g, locales: _ } = Yr(),
            v = bu(),
            b = En(),
            x = Kl(),
            S = xu({ nodeId: s, clickTrackingId: i, router: p, href: t, activeLocale: g }),
            C = l(() => {
              if (!t) return {};
              let e = Wl(t) ? t : $l(t);
              if (!e) return {};
              if (L(e))
                return Tu(
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
              if (st(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: y,
                } = lu(p, m, e, g, c, h),
                x = gu(n, !0),
                C = x === `_blank`,
                w = { pathVariables: f, locale: y },
                T = (e) => Cu(p, l, () => b(l, w, !1, !C), d, f, r, e);
              return {
                href: u,
                target: x,
                onClick: wu(u, S, T),
                "data-framer-page-link-current": (m && pu(m, e, h)) || void 0,
                navigate: T,
                preload: () => b(l, w, !0, !C),
                _routeId: l,
                _pathVariables: f,
                _locale: y,
              };
            }, [t, p, g, h, n, m, r, S, a, _, o, v, b]),
            w = As(y(e) && `ref` in e ? e.ref : void 0),
            { navigate: T, preload: E, _routeId: D, _pathVariables: O, _locale: ee, ...k } = C;
          js(
            w,
            (e) => {
              if (!(e === null || !D || !E || x))
                return ZS?.(e, E, `${D}:${ee?.id}:${JSON.stringify(O)}`);
            },
            [E, D, O, ee]
          );
          let A = !!T;
          return tu(
            Pc(f).cloneAsArray(e, (e) => Eu(e, { ...d, ...Ou(k, u, A) }, w)),
            c,
            s,
            t,
            C,
            w
          );
        })
      )),
      ($S = f.createContext(void 0)),
      (eC = `__framer_force_showing_editorbar_since`),
      (tC = class extends v {
        constructor() {
          (super(...arguments), j(this, `state`, { error: void 0 }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (nC = () => {
        try {
          return !!localStorage[eC];
        } catch {
          return !1;
        }
      }),
      (rC = () => !nC()),
      (iC = (() => {
        let e = d(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (aC = `main`),
      (oC = `framerGeneratedPage`),
      (sC = `<!-- Start of headStart -->`),
      (cC = `<!-- End of headStart -->`),
      (lC = `<!-- Start of headEnd -->`),
      (uC = `<!-- End of headEnd -->`),
      (dC = `<!-- Start of bodyStart -->`),
      (fC = `<!-- End of bodyStart -->`),
      (pC = `<!-- Start of bodyEnd -->`),
      (mC = `<!-- End of bodyEnd -->`),
      (hC = f.createContext(void 0)),
      (gC = null),
      (_C = null),
      ag(Xu),
      (vC = (e, n, r, i, o, s) => {
        let l = c($S),
          u = t(),
          d = yn(),
          f = t(!0);
        return (
          a(() => {
            function t() {
              (!gC || !_C) && Xu();
              let t = r ? new URL(r, K.location.href) : K.location,
                a = {
                  version: zg,
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
                  timezone: gC,
                  locale: _C,
                },
                c = f.current && s !== void 0 ? s : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = c ?? null;
                    if (c === void 0) {
                      let n = e.collectionId && d?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && L(r)) {
                        let e = n.getRecordIdBySlug(r, o || void 0);
                        t = (st(e) ? await e : e) ?? null;
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
                f.current ? (f.current = !1) : ln(`published_site_pageview`, n, `eager`));
            })();
            let a = async (e) => {
              if (e.persisted) {
                let e = (u.current = t()),
                  n = e instanceof Promise ? await e : e;
                ((u.current = n), ln(`published_site_pageview`, n, `eager`));
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
      (xC = 0),
      (SC = 500),
      (CC = 200),
      (wC = { status: `loading`, data: void 0 }),
      (TC = 5e3),
      (EC = () => {}),
      (NC = class e {
        constructor() {
          (j(this, `responseValues`, new Map()),
            I(this, DC, new Map()),
            I(this, OC, new Set()),
            I(this, kC, new Map()),
            I(this, AC, new Map()),
            I(this, jC, new Map()),
            I(this, MC, new Map()),
            j(
              this,
              `persistCache`,
              kc(() => {
                let t = {};
                for (let [e, n] of this.responseValues) {
                  if (!n || n.status !== `success`) continue;
                  let r = F(this, kC).get(e);
                  if (!r || r === 0) continue;
                  let i = F(this, AC).get(e);
                  i && ((i && jd(i, r)) || (t[e] = [i, r, n.data]));
                }
                try {
                  localStorage.setItem(e.cacheKey, JSON.stringify(t));
                } catch {}
              }, 500)
            ));
        }
        unmount() {
          for (let [e, t] of F(this, MC)) (clearInterval(t), F(this, MC).delete(e));
        }
        stopQueryRefetching(e) {
          let t = Dd(e),
            n = F(this, MC).get(t);
          n && (clearInterval(n), F(this, MC).delete(t));
        }
        startQueryRefetching(e) {
          let t = Dd(e),
            n = F(this, MC).get(t),
            r = F(this, kC).get(t);
          if (n || !r) return;
          let i = K.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = F(this, AC).get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          F(this, MC).set(t, i);
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
              jd(r, i) ||
                (F(this, AC).set(e, r),
                F(this, kC).set(e, i),
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
          let n = F(this, DC).get(e);
          if (n) for (let e of n) e();
        }
        async prefetch(e) {
          if (!Rn() || !Jl(e.url, !1)) return;
          let t = Dd(e);
          (F(this, OC).add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = F(this, DC).get(t);
          for (let e of r ?? []) e();
          let i = Ad(n, e);
          return (e.resultOutputType === `image` && L(i) && (await wd(i).catch(EC)), i);
        }
        async fetchWithCache(e) {
          if (!Rn()) return;
          let t = Dd(e),
            n = F(this, jC).get(t);
          if (n) return n;
          let r = F(this, AC).get(t),
            i = r && jd(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, wC);
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
                F(this, AC).set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            F(this, jC).set(t, a),
            a.finally(() => {
              F(this, jC).delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !F(this, OC).has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!Jl(r, !1)) return EC;
          let a = Dd(e),
            o = F(this, kC).get(a);
          ((!o || i < o) && F(this, kC).set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = F(this, DC).get(a) ?? new Set();
          return (
            s.add(t),
            F(this, DC).set(a, s),
            () => {
              let n = F(this, DC).get(a);
              n &&
                (n.delete(t),
                n.size === 0 && F(this, DC).delete(a),
                F(this, DC).size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (DC = new WeakMap()),
      (OC = new WeakMap()),
      (kC = new WeakMap()),
      (AC = new WeakMap()),
      (jC = new WeakMap()),
      (MC = new WeakMap()),
      j(NC, `cacheKey`, `framer-fetch-client-cache`),
      (PC = NC),
      (FC = d(void 0)),
      (IC = d(!0)),
      (LC = ({ children: e, client: t }) => {
        let [n] = s(() => t ?? new PC()),
          [r, i] = s(!0);
        return (
          a(
            () => (
              n.hydrateCache(),
              k(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          _(IC.Provider, { value: r, children: _(FC.Provider, { value: n, children: e }) })
        );
      }),
      (ze.WillChange = Ge),
      (RC = cu(
        h(function ({ links: e, children: t, ...n }, r) {
          let i = jt(),
            { activeLocale: a } = Yr(),
            o = Pc(r),
            s = bu(),
            c = [],
            l = e.map((e) => {
              if (e)
                return L(e)
                  ? Au(e, i, void 0, void 0, a)
                  : Au(e.href, i, e.implicitPathVariables, e.refKey, a, (e, t) => s(e, t, a, c));
            });
          if (c.length > 0) throw Promise.allSettled(c);
          return o(t(l), n);
        })
      )),
      (Z = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return Kd(e, t);
            case `boolean`:
              return Jd(e);
            case `color`:
              return Zd(e);
            case `date`:
              return $d(e);
            case `enum`:
              return tf(e);
            case `file`:
              return rf(e);
            case `link`:
              return of(e);
            case `number`:
              return cf(e);
            case `object`:
              return df(e, t);
            case `responsiveimage`:
              return pf(e);
            case `richtext`:
              return hf(e);
            case `string`:
              return yf(e);
            case `vectorsetitem`:
              return _f(e);
            case `unknown`:
              return e;
            default:
              V(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Qe(e)
            ? { type: `boolean`, value: e }
            : it(e)
              ? { type: `date`, value: e.toISOString() }
              : R(e)
                ? { type: `number`, value: e }
                : L(e)
                  ? { type: `string`, value: e }
                  : $e(e)
                    ? { type: `array`, value: e.map(Z.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && xf(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && xf(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && xf(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && xf(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && xf(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => Z.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => Z.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = bf(e),
            i = bf(t);
          return nt(r) || nt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = bf(e),
            i = bf(t);
          return nt(r) || nt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = bf(e),
            i = bf(t);
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
              return L(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              V(e);
          }
        },
      }),
      (zC = { type: `unknown`, isNullable: !0 }),
      (BC = class {
        constructor(e, t) {
          (j(this, `collection`, e),
            j(this, `locale`, t),
            j(this, `schema`),
            j(this, `indexes`, []));
          let n = vo(e);
          B(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (B(n !== `array`, `Array properties are not supported`),
              B(n !== `object`, `Object properties are not supported`),
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
              if ((B(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
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
            r = (await Sf(this.collection, this.locale))[t]?.[n];
          return Sg.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems() {
          return (await Sf(this.collection, this.locale)).map((e, t) => {
            let n = String(t);
            return this.getDatabaseItem(e, n);
          });
        }
        async resolveItems(e) {
          let t = await Sf(this.collection, this.locale);
          return e.map((e) => {
            let n = Number(e),
              r = t[n];
            return (B(r, `Can't find collection item`), this.getDatabaseItem(r, e));
          });
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (VC = new Map()),
      (HC = new WeakMap()),
      (UC = `$r_`),
      (WC = new Map()),
      (GC = 1e3),
      (Q = class e {
        constructor(e) {
          j(this, `network`, e);
        }
        static estimate(t, n) {
          let r = Ef(),
            i = Df(),
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
      (KC = class {
        constructor(e, t) {
          (j(this, `id`, e),
            j(this, `relational`, t),
            j(this, `nodes`, []),
            j(this, `winners`, new Map()));
        }
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new qC();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          B(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (qC = class {
        constructor() {
          (j(this, `node`), j(this, `cost`, new Q(1 / 0)), j(this, `nodes`, []));
        }
        update(e, t) {
          (this.nodes.push(e), Q.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (JC = class {
        constructor(e) {
          j(this, `isSynchronous`, e);
        }
      }),
      (YC = class extends JC {
        constructor() {
          (super(...arguments), j(this, `group`));
        }
        getGroup() {
          return (B(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (B(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return Pd(this.evaluate(void 0));
        }
        evaluateAsync() {
          return Fd(this.evaluate(void 0));
        }
      }),
      (XC = class {
        constructor(e, t, n = {}) {
          (j(this, `options`, n),
            j(this, `collections`),
            j(this, `richTextCache`, new WeakMap()),
            j(this, `vectorSetItemCache`, new WeakMap()),
            (this.collections = Ff(e, t)));
        }
        *resolveArrayValue(e) {
          return yield* Ld(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* W(t);
        }
        loadRichTextValue(e) {
          let t = e.value;
          B(Mf(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          B(n, `Can't find collection for rich text pointer`);
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
          B(Pf(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (B(n, `Can't find collection for vector set item pointer`),
            B(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
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
      (ZC = `index`),
      (QC = class extends Set {
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
          return (e.sort((e, t) => e - t), G(this.name, ...e));
        }
      }),
      ($C = class {
        constructor(e, t, n) {
          (j(this, `id`, e),
            j(this, `name`, t),
            j(this, `data`, n),
            j(this, `indexes`, new tw()),
            j(this, `fields`, new $()));
        }
      }),
      (ew = class {
        constructor(e, t, n, r, i, a) {
          (j(this, `id`, e),
            j(this, `data`, t),
            j(this, `collection`, n),
            j(this, `lookupNodes`, r),
            j(this, `constraint`, i),
            j(this, `ordering`, a),
            j(this, `resolvedFields`, new $()));
          for (let e in t.schema)
            for (let t of n.fields) t.name === e && this.resolvedFields.add(t);
        }
      }),
      (tw = class extends QC {
        constructor() {
          (super(...arguments), j(this, `name`, `Indexes`));
        }
      }),
      (nw = class {
        constructor(e, t, n, r) {
          (j(this, `id`, e),
            j(this, `name`, t),
            j(this, `definition`, n),
            j(this, `collection`, r));
        }
        getValue(e) {
          B(this.name, `Can only get value of field with a name`);
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
                B(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: jf(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                B(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: Nf(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      ($ = class extends QC {
        constructor() {
          (super(...arguments), j(this, `name`, `Fields`));
        }
      }),
      (rw = class {
        constructor(e, t = `asc`) {
          (j(this, `field`, e), j(this, `direction`, t));
        }
        getHash() {
          return G(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (iw = class {
        constructor(e) {
          (j(this, `fields`, []), e && this.merge(e));
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return G(`Ordering`, ...this.fields);
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
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== ZC) return !1;
          return !0;
        }
      }),
      (aw = class {
        constructor(e, t) {
          (j(this, `ordering`, e), j(this, `resolvedFields`, t));
        }
        getHash() {
          return G(`RequiredProps`, this.ordering, this.resolvedFields);
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
      (ow = class e {
        constructor(e) {
          (j(this, `parent`, e), j(this, `node`), j(this, `ordering`), j(this, `fields`, []));
        }
        takeNode() {
          let e = this.node;
          return (B(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (B(!this.node, `Node already set`), (this.node = e));
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
          return this.ordering ?? new iw();
        }
        getRequiredResolvedFields() {
          let e = new $();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new aw(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          B(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (B(e, `Field must exist`), e.field);
        }
      }),
      (sw = class {
        constructor() {
          (j(this, `pointers`, new Map()), j(this, `values`, new Map()));
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
      (cw = class e {
        constructor(e, t = []) {
          (j(this, `fields`, e), j(this, `tuples`, t));
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
      (lw = class {
        constructor(e, t) {
          (j(this, `input`, e), j(this, `field`, t));
        }
        getHash() {
          return G(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (uw = class e extends YC {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            j(this, `input`, e),
            j(this, `projections`, t),
            j(this, `passthrough`, n),
            j(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
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
          return new aw(e.ordering, t);
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
            i = this.projections.map((e) => new lw(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Ld(
              n.tuples.map((t) =>
                Ld(
                  this.projections.map((n) => W({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new sw();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            B(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (dw = { type: 0 }),
      (fw = class extends JC {
        constructor(e, t, n) {
          (super(n),
            j(this, `referencedFields`, e),
            j(this, `referencedOuterFields`, t),
            j(this, `isSynchronous`, n));
        }
        evaluateSync() {
          return Pd(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return Fd(this.evaluate(void 0, void 0));
        }
      }),
      (pw = { type: 0 }),
      (mw = class {
        constructor(e, t) {
          (j(this, `when`, e), j(this, `then`, t));
        }
        getHash() {
          return G(`CaseCondition`, this.when, this.then);
        }
      }),
      (hw = class e extends fw {
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
            j(this, `input`, e),
            j(this, `conditions`, t),
            j(this, `otherwise`, n),
            j(this, `definition`, { type: `unknown`, isNullable: !0 }));
        }
        getHash() {
          return G(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new Q(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new mw(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* W({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Ld(
              this.conditions.map((n) =>
                W({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (Z.equal(n, e, pw)) return t;
          } else for (let { when: e, then: t } of r) if (Yd(e)) return t;
          return i;
        }
      }),
      (gw = class {
        constructor(e, t, n) {
          (j(this, `normalizer`, e),
            j(this, `query`, t),
            j(this, `locale`, n),
            j(this, `collectionId`, 0),
            j(this, `indexId`, 0),
            j(this, `fieldId`, 0),
            j(this, `subqueries`, []));
        }
        build() {
          let e = new ow();
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
            o = new iw();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (tt(t)) continue;
                a.add(t.field);
                let r = new rw(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new nw(Rf(this.fieldId++), void 0, t.definition, void 0),
                  a = new lw(t, r);
                i.push(a);
                let s = new rw(r, e.direction);
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
              B(n.alias, `Subqueries should have an alias`);
              let r = Rf(this.fieldId++),
                a = n.alias,
                s = new nw(r, a, t.definition, void 0),
                c = new lw(t, s);
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
              V(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = Tf(t.data, this.locale),
            i = t.alias,
            a = new $C(If(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new nw(Rf(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.fields.add(r));
          }
          {
            let e = new nw(Rf(this.fieldId++), ZC, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: ZC, collectionName: i });
            let t = new iw(),
              r = new rw(e);
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
            let i = new iw(),
              o = new ew(Lf(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new iw(),
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
              V(t.type, `Unsupported join type`);
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
              V(t, `Unsupported expression`);
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
          return this.normalizer.newScalarConstant(zC, null);
        }
        buildLiteralValue(e) {
          let t = Z.parse(e.value);
          return this.normalizer.newScalarConstant(zC, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (B(r, `Missing argument`), this.buildExpression(e, r));
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
                B(n, `Missing argument`),
                B(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                B(n, `Missing argument`),
                B(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              V(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new _w(e);
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
            let n = new _w(e);
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
              (t) => new mw(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
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
              V(t.operator, `Unsupported unary operator`);
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
              V(t.operator, `Unsupported binary operator`);
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
      (_w = class {
        constructor(e) {
          (j(this, `inScope`, e),
            j(this, `referencedFields`, new $()),
            j(this, `referencedOuterFields`, new $()));
        }
      }),
      (vw = class e extends YC {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            j(this, `input`, e),
            j(this, `predicate`, t),
            j(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`RelationalFilter`, this.inputGroup.id, this.predicate);
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
          return (t.merge(this.predicate.referencedFields), new aw(e.ordering, t));
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
            n = yield* Ld(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => Yd(n[t] ?? null));
        }
      }),
      (yw = class e extends YC {
        constructor(e, t) {
          (super(!1), j(this, `index`, e), j(this, `query`, t));
        }
        getHash() {
          return G(`RelationalIndexLookup`, this.index.id, ...this.query);
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
          return Q.estimate(1, e ? 100 * GC : 50 * GC);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection;
          return new cw(
            this.getOutputFields(),
            (yield e.data.lookupItems(this.query)).map((n) => {
              let r = new sw();
              for (let i of e.resolvedFields) {
                let e = i.getValue(n);
                (r.addPointer(t, n.pointer), r.addValue(i, e));
              }
              return r;
            })
          );
        }
      }),
      (bw = class e extends YC {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            j(this, `left`, e),
            j(this, `right`, t),
            j(this, `leftGroup`),
            j(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return G(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
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
          return new aw(new iw(), e.resolvedFields);
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
          let { left: t, right: n } = yield* W({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (xw = class e extends YC {
        constructor(e) {
          (super(!1), j(this, `collection`, e));
        }
        getHash() {
          return G(`RelationalScan`, this.collection.id);
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
          return Q.estimate(1, 200 * GC);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields();
          return new cw(
            t,
            (yield e.data.scanItems()).map((n) => {
              let r = new sw();
              for (let i of t) {
                let t = i.getValue(n);
                (r.addPointer(e, n.pointer), r.addValue(i, t));
              }
              return r;
            })
          );
        }
      }),
      (Sw = class e extends YC {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            j(this, `left`, e),
            j(this, `right`, t),
            j(this, `leftGroup`),
            j(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return G(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
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
          return new aw(new iw(), e.resolvedFields);
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
          let { left: t, right: n } = yield* W({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (Cw = class e extends fw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            j(this, `left`, e),
            j(this, `right`, t),
            j(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarAnd`, this.left, this.right);
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
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Yd(n) && Yd(r) };
        }
      }),
      (ww = class extends fw {
        constructor(e, t) {
          let n = new $(),
            r = new $();
          (super(n, r, !0), j(this, `definition`, e), j(this, `value`, t));
        }
        getHash() {
          return G(`ScalarConstant`, this.definition, this.value);
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
      (Tw = { type: 0 }),
      (Ew = class e extends fw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            j(this, `source`, e),
            j(this, `target`, t),
            j(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarContains`, this.source, this.target);
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
          let { source: n, target: r } = yield* W({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.contains(n, r, Tw) };
        }
      }),
      (Dw = { type: 0 }),
      (Ow = class e extends fw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            j(this, `source`, e),
            j(this, `target`, t),
            j(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarEndsWith`, this.source, this.target);
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
          let { source: n, target: r } = yield* W({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.endsWith(n, r, Dw) };
        }
      }),
      (kw = class e extends fw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            j(this, `left`, e),
            j(this, `right`, t),
            j(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarEquals`, this.left, this.right);
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
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.equal(n, r, dw) };
        }
      }),
      (Aw = class e extends fw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            j(this, `left`, e),
            j(this, `right`, t),
            j(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarGreaterThan`, this.left, this.right);
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
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.greaterThan(n, r, dw) };
        }
      }),
      (jw = class e extends fw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            j(this, `left`, e),
            j(this, `right`, t),
            j(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarGreaterThanOrEqual`, this.left, this.right);
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
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.greaterThanOrEqual(n, r, dw) };
        }
      }),
      (Mw = class e extends fw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            j(this, `left`, e),
            j(this, `right`, t),
            j(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarLessThan`, this.left, this.right);
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
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.lessThan(n, r, dw) };
        }
      }),
      (Nw = class e extends fw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            j(this, `left`, e),
            j(this, `right`, t),
            j(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarLessThanOrEqual`, this.left, this.right);
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
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.lessThanOrEqual(n, r, dw) };
        }
      }),
      (Pw = class e extends fw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            j(this, `left`, e),
            j(this, `right`, t),
            j(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarNotEquals`, this.left, this.right);
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
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Z.equal(n, r, dw) };
        }
      }),
      (Fw = class e extends fw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            j(this, `left`, e),
            j(this, `right`, t),
            j(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarOr`, this.left, this.right);
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
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Yd(n) || Yd(r) };
        }
      }),
      (Iw = { type: 0 }),
      (Lw = class e extends fw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            j(this, `source`, e),
            j(this, `target`, t),
            j(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarStartsWith`, this.source, this.target);
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
          let { source: n, target: r } = yield* W({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.startsWith(n, r, Iw) };
        }
      }),
      (Rw = class {
        constructor(e) {
          (j(this, `normalizer`, e), j(this, `memo`), (this.memo = e.memo));
        }
        explore(e) {
          let t = e.getGroup();
          if (e instanceof vw) {
            if (e.predicate instanceof Cw) {
              let n = new bw(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof Fw) {
              let n = new Sw(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof xw)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new yw(n, zf(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof vw) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof xw)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof kw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof ww &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = zf(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new yw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Pw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof ww &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = zf(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new yw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Mw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof ww &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = zf(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new yw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Nw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof ww &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = zf(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new yw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Aw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof ww &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = zf(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new yw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof jw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof ww &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = zf(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new yw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Ew &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof ww &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = zf(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new yw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Lw &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof ww &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = zf(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new yw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Ow &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof ww &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = zf(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new yw(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (zw = class {
        constructor(e) {
          j(this, `outputFields`, e);
        }
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (Bw = class {
        constructor() {
          (j(this, `nodes`, new Map()), j(this, `groups`, []));
        }
        addGroup(e) {
          let t = new KC(Of(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new zw(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            B(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (Vw = class e extends YC {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            j(this, `left`, e),
            j(this, `right`, t),
            j(this, `constraint`, n),
            j(this, `leftGroup`),
            j(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return G(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
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
          return new aw(new iw(), n);
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
          let o = new cw(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new sw();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* W({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof kw) {
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
          let r = new cw(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new sw();
              (n.merge(i),
                n.merge(a),
                Yd(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (Hw = class e extends YC {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            j(this, `input`, e),
            j(this, `limit`, t),
            j(this, `ordering`, n),
            j(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`RelationalLimit`, this.inputGroup.id, this.limit);
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
          return (t.merge(this.limit.referencedFields), new aw(this.ordering, t));
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
          let { input: t, limit: n } = yield* W({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = lf(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (Uw = class e extends YC {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            j(this, `input`, e),
            j(this, `offset`, t),
            j(this, `ordering`, n),
            j(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`RelationalOffset`, this.inputGroup.id, this.offset);
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
          return (t.merge(this.offset.referencedFields), new aw(this.ordering, t));
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
          let { input: t, offset: n } = yield* W({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = lf(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (Ww = class e extends fw {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            j(this, `input`, e),
            j(this, `namedFields`, t),
            j(this, `ordering`, n),
            j(this, `referencedFields`, r),
            j(this, `referencedOuterFields`, i),
            j(this, `inputGroup`),
            j(this, `definition`),
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
          return G(
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
          return new aw(this.ordering, e);
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
          let n = new sw();
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
      (Gw = class e extends fw {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            j(this, `input`, e),
            j(this, `definition`, t),
            B(t.isNullable, `Unsupported non-nullable cast`));
        }
        getHash() {
          return G(`ScalarCast`, this.input, this.definition);
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
      (Kw = class e extends fw {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            j(this, `input`, e),
            j(this, `field`, t),
            j(this, `ordering`, n),
            j(this, `referencedFields`, r),
            j(this, `referencedOuterFields`, i),
            j(this, `inputGroup`),
            j(this, `definition`),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        getHash() {
          return G(
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
          return (tt(this.field.collection) || e.add(this.field), new aw(this.ordering, e));
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
          let n = new sw();
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
      (qw = { type: 0 }),
      (Jw = class e extends fw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            j(this, `left`, e),
            j(this, `right`, t),
            j(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarIn`, this.left, this.right);
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
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.in(n, r, qw) };
        }
      }),
      (Yw = { type: 1 }),
      (Xw = class e extends fw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            j(this, `source`, e),
            j(this, `target`, t),
            j(this, `definition`, { type: `number`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarIndexOf`, this.source, this.target);
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
          let { source: n, target: r } = yield* W({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: Z.indexOf(n, r, Yw) };
        }
      }),
      (Zw = class e extends fw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            j(this, `left`, e),
            j(this, `right`, t),
            j(this, `definition`, {
              type: `array`,
              definition: { type: `string`, isNullable: !1 },
              isNullable: !1,
            }));
        }
        getHash() {
          return G(`ScalarIntersection`, this.left, this.right);
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
          let { left: n, right: r } = yield* W({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = Vf(n),
            a = Vf(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (Qw = class e extends fw {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            j(this, `input`, e),
            j(this, `definition`, { type: `number`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarLength`, this.input);
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
      ($w = class e extends fw {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            j(this, `input`, e),
            j(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !Yd(yield* this.input.evaluate(e, t)) };
        }
      }),
      (eT = { type: 0 }),
      (tT = class e extends fw {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            j(this, `left`, e),
            j(this, `right`, t),
            j(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarNotIn`, this.left, this.right);
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
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Z.in(n, r, eT) };
        }
      }),
      (nT = class extends fw {
        constructor(e, t) {
          B(e.name !== ZC, `Invalid field name`);
          let n = new $(),
            r = new $();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            j(this, `field`, e),
            j(this, `isOuterField`, t),
            j(this, `definition`),
            (this.definition = e.definition));
        }
        getHash() {
          return G(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (B(e, `Context must exist`), e.getValue(this.field))
            : (B(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (rT = class {
        constructor(e) {
          j(this, `memo`, e);
        }
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new xw(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new yw(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new Vw(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof ww && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof Vw && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new vw(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new uw(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof uw &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new Hw(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new Uw(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof ww) &&
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
          let n = new nT(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new ww(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof $w)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof kw) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof Pw) return this.newScalarEquals(e.left, e.right);
          if (e instanceof Mw) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof Nw) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof Aw) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof jw) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof Cw) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof Fw) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new $w(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof ww && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof ww && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof ww && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof ww && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new Cw(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof ww && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof ww && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof ww && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof ww && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new Fw(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof nT;
          if (t instanceof nT && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new kw(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof nT;
          if (t instanceof nT && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Pw(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof nT;
          if (t instanceof nT && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Mw(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof nT;
          if (t instanceof nT && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Nw(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof nT;
          if (t instanceof nT && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Aw(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof nT;
          if (t instanceof nT && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new jw(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new Jw(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new tT(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new mw(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new hw(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new Ew(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new Lw(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new Ow(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new Qw(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new Xw(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new Ww(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new Kw(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new Zw(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new Gw(e, t);
          return this.finishScalar(n);
        }
      }),
      (iT = class extends YC {}),
      (aT = class e extends iT {
        constructor(e, t, n) {
          (super(!1),
            j(this, `input`, e),
            j(this, `fields`, t),
            j(this, `resolver`, n),
            j(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`EnforcerResolve`, this.inputGroup.id, this.fields);
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
          return new aw(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return Q.estimate(0, 100 * GC).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          B(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Set();
          for (let e of this.fields)
            (B(e.collection, `Collection required to resolve field`), n.add(e.collection));
          for (let e of t.tuples) for (let t of this.fields) Hf(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async (e) => {
              let n = [];
              for (let r of t.tuples) {
                let t = r.getPointer(e);
                t && n.push(t);
              }
              let r = await e.data.resolveItems(n);
              return (B(r.length === n.length, `Invalid number of items`), [e, r]);
            })
          );
          return t.map(t.fields, (e) => {
            let t = new sw();
            t.merge(e);
            for (let [n, i] of r) {
              let r = e.getPointer(n);
              if (!r) continue;
              let a = i.shift();
              (B(a, `Item not found`), B(a.pointer === r, `Pointer mismatch`));
              for (let e of n.fields) {
                let n = e.getValue(a);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (oT = { type: 0 }),
      (sT = class e extends iT {
        constructor(e, t) {
          (super(e.isSynchronous),
            j(this, `input`, e),
            j(this, `ordering`, t),
            j(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`EnforcerSort`, this.inputGroup.id, this.ordering);
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
            e.name !== ZC && (tt(e.collection) || t.add(e));
          return new aw(new iw(), t);
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
              if (n.name === ZC) {
                let r = n.collection;
                B(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                B(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                B(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!Z.equal(a, o, oT)) {
                if (nt(a) || Z.lessThan(a, o, oT)) return i ? -1 : 1;
                if (nt(o) || Z.greaterThan(a, o, oT)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (cT = class {
        constructor(e, t, n) {
          (j(this, `query`, e),
            j(this, `locale`, t),
            j(this, `resolver`, n),
            j(this, `memo`, new Bw()),
            j(this, `normalizer`, new rT(this.memo)),
            j(this, `explorer`, new Rw(this.normalizer)));
        }
        optimize() {
          let e = new gw(this.normalizer, this.query, this.locale).build(),
            t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (B(r, `Normalized node not found`), this.createEnforcer(n, r, t));
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
            let r = new aT(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new sT(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (lT = Nd(`query-engine`)),
      (uT = class {
        async evalQuery(e, t, n, r = {}) {
          lT.enabled &&
            lT.debug(`Query:
${tp(e)}`);
          let i = new XC(e, t, r),
            [a, o] = new cT(e, t, i).optimize(),
            s = await a.evaluateAsync(),
            c = Object.entries(o),
            l = [],
            u = Id(
              Ld(
                s.tuples.map((e) => {
                  let t = {},
                    r = {};
                  for (let [a, o] of c) {
                    let s = e.getValue(o);
                    ((t[a] = i.resolveValue(s)), n && (r[a] = s));
                  }
                  return (n && l.push(r), W(t));
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
          let r = new XC(t, n);
          return Id(
            Ld(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let i = e[n];
                  t[n] = r.resolveValue(i);
                }
                return W(t);
              })
            )
          );
        }
      }),
      (dT = `style[data-framer-breakpoint-css]`),
      (fT = new Map()),
      (pT = `page`),
      (mT = Symbol(`cycle`)),
      (_T = (() => {
        let e = d(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (vT = new Set([
        `visibleVariantId`,
        `obscuredVariantId`,
        `threshold`,
        `animateOnce`,
        `variantAppearEffectEnabled`,
        `targets`,
        `exitTarget`,
        `scrollDirection`,
      ])),
      (yT = { inputRange: [], outputRange: [] }),
      (bT = (e) =>
        f.forwardRef((t, n) => {
          if (J.current() === J.canvas) return _(e, { ...t, ref: n });
          let [r, i] = jc(t, vT),
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
            v = As(n);
          Ps(
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
          let y = Pt(),
            b = f.useRef(y);
          return (
            f.useEffect(() => {
              if (p || !u) return;
              b.current !== y && ((b.current = y), f.startTransition(() => h(o)));
              let e = {},
                t;
              return ce((n, { y: r }) => {
                if (!u[0] || (u[0].ref && !u[0].ref.current)) return;
                let { inputRange: i, outputRange: a } = Fp(u, (c ?? 0) * r.containerLength, d);
                if (i.length === 0 || i.length !== a.length) return;
                let o = Math.floor(Pe(r.current, i, a));
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
            rl(p, (e) => f.startTransition(() => h(e)), { enabled: l, repeat: !s }),
            Ft(() => {
              if (!l) return;
              let e = !r.targets && !r.scrollDirection ? r.obscuredVariantId : void 0;
              f.startTransition(() => h(e));
            }),
            !(`variantAppearEffectEnabled` in r) || l === !0
              ? _(e, { ...i, variant: m ?? t.variant, ref: v })
              : _(e, { ...i })
          );
        })),
      (xT = f.createContext(void 0)),
      (ST = () => f.useContext(xT)),
      (CT = {
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
      (wT = {
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
      (TT = CT),
      (ET = `System Default`),
      (DT = class {
        constructor() {
          (j(this, `name`, `local`),
            j(this, `fontFamilies`, []),
            j(this, `byFamilyName`, new Map()),
            j(this, `fontAliasBySelector`, new Map()),
            j(this, `fontAliases`, new Map()));
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
          for (let t of Object.keys(TT)) {
            let n = TT[t];
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
          for (let [e, t] of Object.entries(wT)) this.addFontAlias(e, t);
          let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
          this.addFontFamily(t);
          for (let [e, t] of n) this.addFontAlias(e, t);
          return (e.push(...t.fonts), e);
        }
        addFontAlias(e, t) {
          (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
        }
        getSystemFontFamily() {
          let e = { name: ET, fonts: [], source: this.name },
            t = new Map(),
            n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
          for (let r of [`normal`, `italic`])
            for (let i of n) {
              let n = Lp(i, r),
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
      (OT = {
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
      (kT = class extends Map {
        constructor() {
          (super(...arguments), j(this, `_hash`, 0));
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
      (jT = `Variable`),
      (MT = `BI;`),
      (NT = class {
        constructor() {
          (j(this, `name`, `builtIn`),
            j(this, `fontFamilies`, []),
            j(this, `byFamilyName`, new Map()),
            j(this, `assetByKey`, new Map()));
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
              l = Hp(n),
              u = Kp(o),
              d = {
                assetKey: n.key,
                family: i,
                selector: this.createSelector(r, c, e.font.fontVersion),
                variant: c,
                file: l,
                hasOpenTypeFeatures: Gp(a),
                variationAxes: u,
                category: e.font.fontCategory,
                weight: s ? Xp(u, e.font.faceDescriptors?.weight) : Yp(c),
                style: Qp(c),
                cssFamilyName: Up(r, s),
              };
            (i.fonts.push(d), this.assetByKey.set(n.key, n), t.push(d));
          }
          for (let e of this.fontFamilies)
            e.fonts.sort((e, t) => {
              let n = Yp(e.variant),
                r = Yp(t.variant);
              return !n || !r ? 1 : n - r;
            });
          return t;
        }
        static parseVariant(e) {
          let t = Zp(e);
          return {
            weight: t === `variable` || t === `variable-italic` ? 400 : PT[t],
            style: Qp(e),
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
          B(e.assetKey, `Font must have an asset key`);
          let t = this.assetByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return Gp(t)
            ? t?.map((e) => {
                if (qp(e)) return { tag: e.tag, coverage: e.coverage };
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
          return `${MT}${e}/${t}/${n}`;
        }
        parseSelector(e) {
          if (!e.startsWith(MT)) return null;
          let [t, n] = e.split(MT);
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
      (PT = {
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
      (FT = Nd(`custom-font-source`)),
      (IT = `CUSTOM;`),
      (LT = `CUSTOMV2;`),
      (RT = class e {
        constructor() {
          (j(this, `name`, `custom`),
            j(this, `fontFamilies`, []),
            j(this, `byFamilyName`, new Map()),
            j(this, `assetsByKey`, new Map()),
            j(this, `debugByFamily`, new Map()),
            j(this, `debugFamilies`));
        }
        importFonts(t) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let n = {},
            r = new Map();
          for (let i of t) {
            if (!this.isValidCustomFontAsset(i)) continue;
            let { family: t, variant: a, weight: o, style: s } = cm(i.properties.font),
              c = i.properties.font.variationAxes,
              l = Array.isArray(c),
              u = i.properties.font.openTypeData,
              d = Hp(i),
              f = dm(i),
              p = sm(i.properties),
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
                hasOpenTypeFeatures: Gp(u),
                variationAxes: Kp(c),
                owner: f,
                alternativeSelectors: {
                  [m]: {
                    variant: l ? `variable` : this.inferVariantName(p),
                    cssFamilyName: e.cssFontFamilyFromSelector(m),
                  },
                },
                cssFamilyName: e.cssFontFamilyFromSelector(g),
              },
              v = om(h.fonts, _);
            if (v?.projectDuplicate) _.owner === `team` && ((h.fonts[v.index] = _), (n[g] = _));
            else if (v) {
              FT.debug(`Duplicate font found for:`, _, `with existing font:`, v.existingFont);
              let e = v.existingFont,
                t = _.file?.endsWith(`.woff2`) ?? !1,
                r = e.file?.endsWith(`.woff2`) ?? !1,
                i = t && !r,
                a = t === r,
                o = _.owner === `team` || e.owner !== `team`;
              (i || (a && o)) && ((h.fonts[v.index] = _), (n[g] = _));
            } else (h.fonts.push(_), (n[g] = _));
            (this.assetsByKey.set(i.key, i),
              fm(r, t, a).fonts.push({ font: _, asset: i, selected: !1 }));
          }
          for (let e of this.fontFamilies) e.fonts.length > 0 && um(e);
          return ((this.debugByFamily = r), (this.debugFamilies = void 0), Object.values(n));
        }
        getDebugFamilies() {
          if (this.debugFamilies) return this.debugFamilies;
          let e = new Set();
          for (let t of this.fontFamilies)
            for (let n of t.fonts) n.assetKey && n.owner && e.add(`${n.assetKey}:${n.owner}`);
          return ((this.debugFamilies = pm(this.debugByFamily, e)), this.debugFamilies);
        }
        static createSelector(e, t) {
          return `${LT}${e}${t ? ` ${t}` : ``}`;
        }
        static createLegacySelector(e) {
          return `${IT}${e}`;
        }
        static cssFontFamilyFromSelector(e) {
          return (
            B(rm(e), `Selector must be a custom font selector`),
            am(e) ? e.slice(IT.length) : e.slice(LT.length)
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
          B(e.assetKey, `Font must have an asset key`);
          let t = this.assetsByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return Gp(t)
            ? t?.map((e) => {
                if (qp(e)) return { tag: e.tag, coverage: e.coverage };
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
      (zT = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`]),
      (BT = `FS;`),
      (VT = {
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
      (HT = Object.keys(VT)),
      (UT = RegExp(`^(?:${[...HT, `italic`, `variable`].join(`|`)})`, `u`)),
      (WT = class e {
        constructor() {
          (j(this, `name`, `fontshare`),
            j(this, `fontFamilies`, []),
            j(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          let t = e.toLowerCase().split(` `),
            n = HT.find((e) => t.includes(e)),
            r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
          return { weight: (n && VT[n]) || 400, style: r === `italic` ? r : `normal` };
        }
        parseSelector(e) {
          if (!e.startsWith(BT)) return null;
          let t = e.split(`-`);
          if (t.length !== 2) return null;
          let [n, r] = t;
          return !n || !r
            ? null
            : {
                name: n.replace(BT, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`),
              };
        }
        static createSelector(e, t) {
          return `${BT}${e}-${t.toLowerCase()}`;
        }
        static createMetadataSelector(e) {
          return `${BT}${e}`;
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        async importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = await mm(`fontshare`),
            i = [];
          for (let a of t) {
            let t = a.font_styles
                .filter((e) => {
                  let t = e.name.toLowerCase();
                  return !(!UT.exec(t) || t.split(` `).includes(`wide`));
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
                } = $p(e, t),
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
                  category: vm(a.category),
                  hasOpenTypeFeatures: u,
                  variationAxes: e.isVariable ? s : void 0,
                  cssFamilyName: Up(l.name, e.isVariable),
                };
              (l.fonts.push(f), i.push(f));
            }
          }
          return i;
        }
        async getOpenTypeFeatures(t) {
          return (await hm(`fontshare`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (GT = `Inter`),
      (KT = `FR;`),
      (qT = {
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
      (JT = class e {
        constructor() {
          (j(this, `name`, `framer`),
            j(this, `fontFamilies`, []),
            j(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        static getDraftFontPropertiesBySelector(e) {
          if (!e.startsWith(KT) && !e.startsWith(GT)) return null;
          let [t, n = ``] = e.split(`-`);
          if (!t) return null;
          let r = n.includes(`Italic`) ? `italic` : `normal`,
            i = n.replace(`Italic`, ``);
          return {
            cssFamilyName: t,
            style: r,
            weight: (i && qT[i]) || 400,
            source: `framer`,
            variant: void 0,
            category: `sans-serif`,
          };
        }
        static createMetadataSelector(e) {
          return `${KT}${e}`;
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
          return (await hm(`framer`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (YT = `GF;`),
      (XT = class e {
        constructor() {
          (j(this, `name`, `google`),
            j(this, `fontFamilies`, []),
            j(this, `byFamilyName`, new Map()));
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
          if (!e.startsWith(YT)) return null;
          let t = e.includes(`-variable-`),
            n = t ? e.split(`-variable-`) : e.split(`-`);
          if (n.length !== 2) return null;
          let [r, i] = n;
          return !r || !i
            ? null
            : { name: r.replace(YT, ``), variant: i, source: this.name, isVariable: t };
        }
        static createSelector(e, t, n) {
          return `${YT}${e}-${n ? `variable-` : ``}${t}`;
        }
        static createMetadataSelector(e) {
          return `${YT}${e}`;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        async importFonts(t, n, r) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let i = await mm(`google`),
            a = [],
            o = bm(t, (e) => e.family),
            s = bm(n, (e) => e.family);
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
              h = m.filter(Ip),
              g = i[e.createMetadataSelector(t)];
            for (let e of m) {
              let { weight: t, style: r, selector: i, googleFontsVariantName: o } = e,
                {
                  variantBold: s,
                  variantItalic: l,
                  variantBoldItalic: u,
                  variantVariable: d,
                  variantVariableItalic: f,
                } = (Ip(e) ? $p(e, h) : void 0) ?? {},
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
                  category: ym(n.category),
                  file: e.file?.replace(`http://`, `https://`),
                  variationAxes: e.isVariable ? p : void 0,
                  hasOpenTypeFeatures: g,
                  cssFamilyName: Up(c.name, e.isVariable),
                };
              (c.fonts.push(m), a.push(m));
            }
          }
          return a;
        }
        async getOpenTypeFeatures(t) {
          return (await hm(`google`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (ZT = We(eg(), 1)),
      (QT = 5e3),
      ($T = 3),
      (eE = class extends Error {
        constructor(e) {
          (super(e), (this.name = `FontLoadingError`));
        }
      }),
      (tE = new Map()),
      (nE = new Map()),
      (rE = new Map()),
      (iE = (e, t) => Cm(e, t)),
      (aE = {
        "FR;Inter": [
          { tag: `opsz`, minValue: 14, maxValue: 32, defaultValue: 14, name: `Optical size` },
          { tag: `wght`, minValue: 100, maxValue: 900, defaultValue: 400, name: `Weight` },
        ],
      }),
      (oE = class {
        constructor() {
          (j(this, `enabled`, !1),
            j(this, `bySelector`, new kT()),
            j(this, `loadedSelectors`, new Set()),
            j(this, `getGoogleFontsListPromise`),
            j(this, `getFontshareFontsListPromise`),
            j(this, `getBuiltInFontsListPromise`),
            j(
              this,
              `customFontsImportPromise`,
              new Promise((e) => {
                this.resolveCustomFontsImportPromise = e;
              })
            ),
            j(this, `local`),
            j(this, `google`),
            j(this, `fontshare`),
            j(this, `builtIn`),
            j(this, `framer`),
            j(this, `custom`),
            j(this, `bySelectorValuesCache`),
            j(this, `testing`, { addFont: this.addFont.bind(this) }),
            (this.local = new DT()),
            (this.google = new XT()),
            (this.fontshare = new WT()),
            (this.framer = new JT()),
            (this.custom = new RT()),
            (this.builtIn = new NT()),
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
              let { staticFonts: e, variableFonts: t } = await nb.fetchGoogleFontsList(),
                n = await Em(`google`);
              for (let r of await this.google.importFonts(e, t, n)) this.addFont(r);
              return { staticFonts: e, variableFonts: t };
            })),
            this.getGoogleFontsListPromise
          );
        }
        async importFontshareFonts() {
          if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = nb.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise,
              t = await Em(`fontshare`);
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
            this.getBuiltInFontsListPromise = nb.fetchBuiltInFontsList();
            let e = await this.getBuiltInFontsListPromise;
            for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
          }
          return this.getBuiltInFontsListPromise;
        }
        importFramerFonts(e) {
          let t = Em(`framer`);
          this.framer.importFonts(e, t).forEach((e) => {
            this.addFont(e);
          });
        }
        importCustomFonts(e) {
          let t = new Map();
          for (let e of this.loadedSelectors) {
            if (!rm(e)) continue;
            let n = this.getFontBySelector(e);
            n && t.set(e, n);
          }
          this.bySelector.forEach((e, t) => {
            rm(t) && this.bySelector.delete(t);
          });
          let n = this.custom.importFonts(e);
          for (let e of n) this.addFont(e);
          for (let [e, n] of t) {
            let t = this.getFontBySelector(e);
            (t && t.file === n.file) ||
              (this.loadedSelectors.delete(e),
              n.file &&
                Tm({ family: n.cssFamilyName, url: n.file, weight: n.weight, style: n.style }));
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
            let e = XT.parseVariant(n.variant);
            if (Ip(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: n.variant,
                cssFamilyName: Wp(n, `google`),
                source: `google`,
                category: void 0,
              };
          }
          let r = this.fontshare.parseSelector(e);
          if (r) {
            let e = WT.parseVariant(r.variant);
            if (Ip(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: r.variant,
                cssFamilyName: Wp(r, `fontshare`),
                source: `fontshare`,
                category: void 0,
              };
          }
          let i = this.builtIn.parseSelector(e);
          if (i) {
            let e = NT.parseVariant(i.variant);
            if (Ip(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: i.variant,
                cssFamilyName: Wp(i, `builtIn`),
                source: `builtIn`,
                category: void 0,
              };
          }
          return JT.getDraftFontPropertiesBySelector(e) || null;
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
            i = nm(t);
          switch (r) {
            case `local`:
              return (this.loadedSelectors.add(e), 1);
            case `framer`:
              if ((Vn() || (await wm(t.family.name, t.style, t.weight)), i)) {
                if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
                await iE({ family: n, url: t.file, weight: t.weight, style: t.style }, document);
              }
              return (this.loadedSelectors.add(e), 1);
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`: {
              if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
              let r = t.file;
              await iE({ family: n, url: r, weight: t.weight, style: t.style }, document);
              let i = this.getFontBySelector(e);
              return !i || i.file !== r
                ? (Tm({ family: n, url: r, weight: t.weight, style: t.style }), 2)
                : (this.loadedSelectors.add(e), 1);
            }
            default:
              V(r);
          }
        }
        async loadFontsFromSelectors(e) {
          if (!this.enabled) return [];
          let t = [];
          (e.some((e) => e.startsWith(BT)) &&
            t.push(
              this.importFontshareFonts().catch((e) => {
                Di(`Failed to load Fontshare fonts:`, e);
              })
            ),
            e.some((e) => e.startsWith(YT)) &&
              t.push(
                this.importGoogleFonts().catch((e) => {
                  Di(`Failed to load Google fonts:`, e);
                })
              ),
            e.some((e) => e.startsWith(MT)) &&
              t.push(
                this.importBuiltInFonts().catch((e) => {
                  Di(`Failed to load built-in fonts:`, e);
                })
              ),
            e.some(rm) &&
              t.push(
                this.customFontsImportPromise.catch((e) => {
                  Di(`Failed to load custom fonts:`, e);
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
          let n = e.filter((e) => !sE.loadedSelectors.has(e));
          n.length !== 0 &&
            (await sE.loadWebFontsFromSelectors(n),
            n.every((e) => sE.loadedSelectors.has(e)) && t && t());
        }
        async loadWebFontsFromSelectors(e) {
          return this.loadFontsFromSelectors(e);
        }
        get defaultFont() {
          let e = this.getFontBySelector(`Inter`);
          return (B(e, `Can’t find Inter font`), e);
        }
      }),
      (sE = new oE()),
      (cE = {
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
      (lE = { opacity: 0 }),
      (uE = { opacity: 1 }),
      (dE = Bm(
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
            p = l(() => Bo(n), [n]),
            [m, h] = s();
          f.useEffect(() => {
            if (!n?.src || !o || p) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                k(() => h({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, o, p]);
          let g = p ?? m;
          return (
            o && g && ((d[o] = `auto`), (d.aspectRatio = g.width / g.height)),
            n && delete d.background,
            T(Vo(e.as), {
              ...u,
              style: d,
              ref: t,
              draggable: a,
              children: [n && _(Fo, { image: n, alt: i, draggable: a }), r],
            })
          );
        })
      )),
      (pE = !Ln() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (mE =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (hE = `{{ text-placeholder }}`),
      (gE = `rich-text-wrapper`),
      (_E = lo(
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
              environment: O = J.current,
              withExternalLayout: ee = !1,
              positionSticky: k,
              positionStickyTop: A,
              positionStickyRight: te,
              positionStickyBottom: ne,
              positionStickyLeft: re,
              __htmlStructure: j,
              __fromCanvasComponent: ie = !1,
              _forwardedOverrideId: ae,
              _forwardedOverrides: oe,
              _usesDOMRect: se,
              children: ce,
              ...le
            } = e,
            ue = Wa(),
            de = qo(e),
            fe = t(null),
            pe = n ?? fe,
            { navigate: M, getRoute: me } = jt(),
            he = Nt();
          (Dn(e.preload ?? []), $o(e, pe));
          let ge = c(fb),
            _e = Kl(),
            ve = u,
            ye = ae ?? r;
          if (ye && oe) {
            let e = oe[ye];
            typeof e == `string` && (ve = e);
          }
          let P = ``;
          if (ve) {
            let e = Hm(ve);
            P = j ? j.replace(hE, e) : `<p>${e}</p>`;
          } else if (o) P = o;
          else if (d) {
            let e = Hm(d);
            P = j ? j.replace(hE, e) : `<p>${e}</p>`;
          } else s && (P = s);
          let be = fu(),
            xe = l(() => (_e || !me || !he ? P : Um(P, me, he, be)), [P, me, he, be]);
          if (
            (a(() => {
              let e = pe.current;
              if (e === null) return;
              function t(e) {
                let t = ou(e.target, pe.current);
                Wn(e) ||
                  !M ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (Ql(M, t, be) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [M, be]),
            Km(f, ie, pe),
            !C)
          )
            return null;
          let F = D && O() === J.canvas,
            I = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: Gm(E),
              opacity: F ? 0 : w,
              flexShrink: 0,
            },
            Se = J.hasRestrictions(),
            Ce = Va(e, ue || 0, !1),
            we = se && (p === `auto` || m === `auto`),
            Te =
              e.transformTemplate || !Ce || !Se || ie || we
                ? (e.transformTemplate ?? Ko(b))
                : void 0;
          if (!ee) {
            if (Ce && Se && !we) {
              let e = Dv.getNumber(T).toFixed(4);
              ((I.transform = `translate(${Ce.x}px, ${Ce.y}px) rotate(${e}deg)`),
                (I.width = Ce.width),
                (I.minWidth = Ce.width),
                (I.height = Ce.height));
            } else
              ((I.left = h),
                (I.right = g),
                (I.top = v),
                (I.bottom = y),
                (I.width = p),
                (I.height = m),
                (I.rotate = T));
            k
              ? (!_e || ge) &&
                ((I.position = `sticky`),
                (I.willChange = `transform`),
                (I.top = A),
                (I.right = te),
                (I.bottom = ne),
                (I.left = re))
              : _e && (e.positionFixed || e.positionAbsolute) && (I.position = `absolute`);
          }
          return (
            Oc(e, I),
            Tc(e, I),
            Object.assign(I, e.style),
            _(N.div, {
              id: r,
              ref: pe,
              ...le,
              style: I,
              layoutId: de,
              "data-framer-name": i,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": b,
              className: Ac(x, S, gE),
              transformTemplate: Te,
              dangerouslySetInnerHTML: { __html: xe },
            })
          );
        })
      )),
      (vE = {
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
      (yE = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`
      )),
      (bE = h(function (e, t) {
        return _(`svg`, { ...e, ref: t, children: e.children });
      })),
      (xE = N.create(bE)),
      (SE = h(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return _(xE, {
          ...r,
          ref: i,
          viewBox: t,
          children: _(N.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (CE = []),
      (wE = `RichTextContainer`),
      (TE = h(function (e, n) {
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
            environment: m = J.current,
            fonts: h = CE,
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
            style: ee,
            _initialStyle: k,
            stylesPresetsClassNames: A,
            text: te,
            top: ne,
            verticalAlignment: re = `top`,
            visible: j = !0,
            width: ie,
            withExternalLayout: ae = !1,
            viewBox: oe,
            viewBoxScale: se = 1,
            effect: ce,
            ...le
          } = e,
          ue = Wa(),
          de = m(),
          fe = de === J.canvas,
          pe = fe || de === J.export,
          M = c(fb),
          me = qo(e),
          he = t(null),
          ge = n ?? he;
        ($o(e, ge), Km(h, r, ge));
        let _e = th(ce, ge),
          ve = l(() => {
            if (p) return lh(p, A, te, s, void 0, _e.getTokenizer());
          }, [p, A, te, s, _e]);
        if (!j) return null;
        let N = { opacity: v && fe ? 0 : x },
          ye = Gm(re);
        ye !== ky.justifyContent && (N.justifyContent = ye);
        let P = {},
          be = J.hasRestrictions(),
          xe = Va(e, ue || 0, !1),
          F = o && (ie === `auto` || g === `auto`),
          I = e.transformTemplate || !xe || !be || r || F ? (e.transformTemplate ?? Ko(f)) : void 0;
        (ae ||
          (xe && be && !F
            ? ((P.x = xe.x + (R(ee?.x) ? ee.x : 0)),
              (P.y = xe.y + (R(ee?.y) ? ee.y : 0)),
              (P.left = 0),
              (P.top = 0),
              (N.rotate = Dv.getNumber(O)),
              (N.width = xe.width),
              (N.minWidth = xe.width),
              (N.height = xe.height))
            : ((N.left = y),
              (N.right = D),
              (N.top = ne),
              (N.bottom = d),
              (N.width = ie),
              (N.height = g),
              (N.rotate = O)),
          S
            ? (!pe || M) &&
              ((N.position = `sticky`),
              (N.willChange = `transform`),
              (N.top = E),
              (N.right = T),
              (N.bottom = C),
              (N.left = w))
            : fe && (e.positionFixed || e.positionAbsolute) && (N.position = `absolute`)),
          Oc(e, N),
          Tc(e, N),
          Object.assign(N, k, ee, P),
          me && (le.layout = `preserve-aspect`));
        let Se = Vo(e.as),
          Ce = le[`data-framer-name`] ?? b,
          we = fe ? oh(Yy(le)) : le;
        return L(e.viewBox)
          ? e.as === void 0
            ? _(SE, {
                ...we,
                ref: ge,
                style: N,
                layoutId: me,
                viewBox: oe,
                viewBoxScale: se,
                transformTemplate: I,
                "data-framer-name": Ce,
                "data-framer-component-type": wE,
                children: ve,
              })
            : _(Se, {
                ...we,
                ref: ge,
                style: N,
                layoutId: me,
                transformTemplate: I,
                "data-framer-name": Ce,
                "data-framer-component-type": wE,
                children: _(SE, {
                  viewBox: oe,
                  viewBoxScale: se,
                  style: { width: `100%`, height: `100%` },
                  children: ve,
                }),
              })
          : _(Se, {
              ...we,
              ref: ge,
              style: N,
              layoutId: me,
              transformTemplate: I,
              "data-framer-name": Ce,
              "data-framer-component-type": wE,
              children: ve,
            });
      })),
      (EE = lo(
        h(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (L(a)) {
            !r.stylesPresetsClassName &&
              z(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [L(t) ? `html` : `htmlFromDesign`]: a };
            return _(_E, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && L(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return _(TE, { ...r, ref: i, children: y(a) ? a : void 0 });
        })
      )),
      (DE = `framer/asset-reference,`),
      (OE = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = Sh(t);
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
      (kE = Rn()),
      (AE = class {
        constructor(e, t, n, r, i = 0) {
          (j(this, `id`, e),
            j(this, `svg`, t),
            j(this, `innerHTML`, n),
            j(this, `viewBox`, r),
            j(this, `count`, i));
        }
      }),
      (jE = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (ME = class {
        constructor() {
          (j(this, `entries`, new Map()), j(this, `vectorSetItems`, new Map()));
        }
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(bb(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = wh(e);
            (s &&
              (t && Th(s, n),
              (s.id = n),
              (o = Ah(s)),
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
          kE && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = jE),
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
          kE && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new AE(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !kE) ||
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
                        kE && document?.getElementById(e)?.remove());
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
            e.push(`<div id="svg-templates" style="${jE}" aria-hidden="true">`),
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
      (NE = new ME()),
      (PE = {
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
      (FE = h(function (e, t) {
        let n = Wa(),
          r = qo(e),
          i = f.useRef(null),
          a = t ?? i,
          o = ST();
        return (
          $o(e, i),
          _(LE, { ...e, innerRef: a, parentSize: n, layoutId: r, providedWindow: o })
        );
      })),
      (IE = 5e4),
      (LE = (() => {
        var e;
        return (
          (e = class extends yb {
            constructor() {
              (super(...arguments),
                j(this, `container`, f.createRef()),
                j(this, `svgElement`, null),
                j(this, `setSVGElement`, (e) => {
                  ((this.svgElement = e), this.setLayerElement(e));
                }),
                j(this, `previouslyRenderedSVG`, ``),
                j(this, `unmountedSVG`, ``));
            }
            static frame(e) {
              return Va(e, e.parentSize || 0);
            }
            get frame() {
              return Va(this.props, this.props.parentSize || 0);
            }
            componentDidMount() {
              if (this.unmountedSVG) {
                let { svgContentId: e } = this.props,
                  t = e ? `svg${e}` : null;
                (NE.subscribe(this.unmountedSVG, !e, t),
                  (this.previouslyRenderedSVG = this.unmountedSVG));
              }
              this.props.svgContentId || Ph(this.container, this.props);
            }
            componentWillUnmount() {
              (NE.unsubscribe(this.previouslyRenderedSVG),
                (this.unmountedSVG = this.previouslyRenderedSVG),
                (this.previouslyRenderedSVG = ``));
            }
            componentDidUpdate(e) {
              if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
              let { fill: t } = this.props;
              (lb.isImageObject(t) &&
                lb.isImageObject(e.fill) &&
                t.src !== e.fill.src &&
                is(this.svgElement, `fill`, null, !1),
                Ph(this.container, this.props));
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
                c = Dv.getNumber(r);
              if (
                ((e.opacity = H(this.props.opacity) ? this.props.opacity : 1),
                J.hasRestrictions() && n)
              ) {
                (Object.assign(e, {
                  transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
                  width: `${n.width}px`,
                  height: `${n.height}px`,
                }),
                  Ra(this.props) && (e.position = `absolute`));
                let r = n.width / (i || 1),
                  o = n.height / (a || 1);
                t.transformOrigin = `top left`;
                let { zoom: s, target: l } = Xv;
                if (l === J.export) {
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
                Cc(this.props, w),
                Oc(this.props, w),
                yb.applyWillChange(this.props, w, !1));
              let D = null;
              if (typeof r == `string` || q.isColorObject(r)) {
                let e = q.isColorObject(r) ? r.initialValue || q.toRgbString(r) : r;
                ((w.fill = e), (w.color = e));
              } else if (Db.isLinearGradient(r)) {
                let t = r,
                  n = `${encodeURI(e || ``)}g${Db.hash(t)}`;
                w.fill = `url(#${n})`;
                let { stops: i, x1: a, x2: o, y1: s, y2: c } = mh(t, x);
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
              } else if (kb.isRadialGradient(r)) {
                let t = r,
                  n = `${encodeURI(e || ``)}g${kb.hash(t)}`;
                w.fill = `url(#${n})`;
                let i = hh(t, x);
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
              } else if (lb.isImageObject(r)) {
                let e = bh(r, C, x);
                e &&
                  ((w.fill = `url(#${e.id})`),
                  (D = _(`svg`, {
                    ref: this.setSVGElement,
                    width: `100%`,
                    height: `100%`,
                    style: { position: `absolute` },
                    role: `presentation`,
                    children: _(`defs`, { children: _(OE, { ...e }) }),
                  })));
              }
              let ee = { "data-framer-component-type": `SVG` },
                k = !S;
              k && Object.assign(ee, Uo(this.props.center));
              let A =
                  !y &&
                  !D &&
                  !w.fill &&
                  !w.background &&
                  !w.backgroundImage &&
                  i.length < IE &&
                  !jh(i) &&
                  !Mh(i),
                te = null;
              if (A)
                ((w.backgroundSize = `100% 100%`),
                  (w.backgroundImage = ct(i)),
                  NE.unsubscribe(this.previouslyRenderedSVG),
                  (this.previouslyRenderedSVG = ``));
              else {
                let e = m ? `svg${m}` : null,
                  t = NE.subscribe(i, !m, e, y);
                (NE.unsubscribe(this.previouslyRenderedSVG),
                  (this.previouslyRenderedSVG = i),
                  Nh(w) && (w.overflow = `hidden`),
                  (te = T(O, {
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
                        lb.isImageObject(r) ? r.src : ``
                      ),
                    ],
                  })));
              }
              let ne = Vo(this.props.as),
                { href: re, target: j, rel: ie, onClick: ae, onTap: oe } = this.props,
                se = s || c;
              return _(ne, {
                ...ee,
                ...b,
                layoutId: l,
                transformTemplate: k ? Ko(this.props.center) : void 0,
                id: e,
                ref: p,
                style: w,
                className: u,
                variants: d,
                tabIndex: this.props.tabIndex,
                role: se ? `img` : void 0,
                "aria-label": s,
                "aria-description": c,
                "aria-hidden": se ? void 0 : `true`,
                onTap: oe,
                onClick: ae,
                href: re,
                target: j,
                rel: ie,
                children: te,
              });
            }
          }),
          j(e, `supportsConstraints`, !0),
          j(e, `defaultSVGProps`, {
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
          j(e, `defaultProps`, { ...yb.defaultProps, ...e.defaultSVGProps }),
          e
        );
      })()),
      (RE = lo(FE)),
      (zE = 1e3),
      (BE = `explicitInter`),
      (Ue.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = oe(e(this.get()));
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
  Ul as $,
  Mx as A,
  VE as B,
  xy as C,
  Px as D,
  Jh as E,
  vo as F,
  Ti as G,
  pg as H,
  np as I,
  NE as J,
  mp as K,
  Wg as L,
  Lh as M,
  Rh as N,
  jx as O,
  Fh as P,
  Nt as Q,
  hi as R,
  qy as S,
  sE as T,
  oi as U,
  gt as V,
  AS as W,
  op as X,
  ni as Y,
  _l as Z,
  EE as _,
  xx as a,
  jt as at,
  Ih as b,
  zS as c,
  Mp as ct,
  ar as d,
  iS as dt,
  up as et,
  Md as f,
  Uc as ft,
  RC as g,
  J as h,
  Tn as ht,
  Ca as i,
  zt as it,
  vy as j,
  Nx as k,
  Sg as l,
  yy as lt,
  uT as m,
  bT as mt,
  vS as n,
  Yr as nt,
  BS as o,
  Ch as ot,
  Ex as p,
  Kh as pt,
  m_ as q,
  fy as r,
  Ei as rt,
  dE as s,
  _p as st,
  oS as t,
  Kl as tt,
  QS as u,
  Np as ut,
  RE as v,
  Ac as w,
  _o as x,
  yS as y,
  pt as z,
};
//# sourceMappingURL=framer.DLmCz1mO.mjs.map
