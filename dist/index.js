!(function(t, e) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = e())
        : 'function' == typeof define && define.amd
            ? define(e)
            : (t.eventDrops = e());
})(this, function() {
    'use strict';
    var je =
        'undefined' != typeof window
            ? window
            : 'undefined' != typeof global
                ? global
                : 'undefined' != typeof self ? self : {};
    function t(t, e) {
        return t((e = { exports: {} }), e.exports), e.exports;
    }
    var P = t(function(t, e) {
            var a = 200,
                n = '__lodash_hash_undefined__',
                r = 9007199254740991,
                j = '[object Arguments]',
                o = '[object Array]',
                x = '[object Boolean]',
                A = '[object Date]',
                i = '[object Error]',
                O = '[object Function]',
                D = '[object GeneratorFunction]',
                S = '[object Map]',
                T = '[object Number]',
                M = '[object Object]',
                u = '[object Promise]',
                k = '[object RegExp]',
                F = '[object Set]',
                $ = '[object String]',
                I = '[object Symbol]',
                c = '[object WeakMap]',
                z = '[object ArrayBuffer]',
                E = '[object DataView]',
                C = '[object Float32Array]',
                U = '[object Float64Array]',
                P = '[object Int8Array]',
                B = '[object Int16Array]',
                L = '[object Int32Array]',
                W = '[object Uint8Array]',
                Y = '[object Uint8ClampedArray]',
                Z = '[object Uint16Array]',
                G = '[object Uint32Array]',
                J = /\w*$/,
                l = /^\[object .+?Constructor\]$/,
                f = /^(?:0|[1-9]\d*)$/,
                s = {};
            (s[C] = s[U] = s[P] = s[B] = s[L] = s[W] = s[Y] = s[Z] = s[G] = !0),
                (s[j] = s[o] = s[z] = s[x] = s[E] = s[A] = s[i] = s[O] = s[
                    S
                ] = s[T] = s[M] = s[k] = s[F] = s[$] = s[c] = !1);
            var N = {};
            (N[j] = N[o] = N[z] = N[E] = N[x] = N[A] = N[C] = N[U] = N[P] = N[
                B
            ] = N[L] = N[S] = N[T] = N[M] = N[k] = N[F] = N[$] = N[I] = N[
                W
            ] = N[Y] = N[Z] = N[G] = !0),
                (N[i] = N[O] = N[c] = !1);
            var d = 'object' == typeof je && je && je.Object === Object && je,
                p =
                    'object' == typeof self &&
                    self &&
                    self.Object === Object &&
                    self,
                v = d || p || Function('return this')(),
                h = e && !e.nodeType && e,
                y = h && t && !t.nodeType && t,
                _ = y && y.exports === h,
                g = _ && d.process,
                b = (function() {
                    try {
                        return g && g.binding('util');
                    } catch (t) {}
                })(),
                m = b && b.isTypedArray;
            function R(t, e) {
                return t.set(e[0], e[1]), t;
            }
            function V(t, e) {
                return t.add(e), t;
            }
            function w(t, e, r) {
                switch (r.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, r[0]);
                    case 2:
                        return t.call(e, r[0], r[1]);
                    case 3:
                        return t.call(e, r[0], r[1], r[2]);
                }
                return t.apply(e, r);
            }
            function X(t, e) {
                for (
                    var r = -1, n = t ? t.length : 0;
                    ++r < n && !1 !== e(t[r], r, t);

                );
                return t;
            }
            function H(t, e, r, n) {
                var a = -1,
                    o = t ? t.length : 0;
                for (n && o && (r = t[++a]); ++a < o; ) r = e(r, t[a], a, t);
                return r;
            }
            function q(t) {
                var e = !1;
                if (null != t && 'function' != typeof t.toString)
                    try {
                        e = !!(t + '');
                    } catch (t) {}
                return e;
            }
            function K(t) {
                var r = -1,
                    n = Array(t.size);
                return (
                    t.forEach(function(t, e) {
                        n[++r] = [e, t];
                    }),
                    n
                );
            }
            function Q(e, r) {
                return function(t) {
                    return e(r(t));
                };
            }
            function tt(t) {
                var e = -1,
                    r = Array(t.size);
                return (
                    t.forEach(function(t) {
                        r[++e] = t;
                    }),
                    r
                );
            }
            var et,
                rt = Array.prototype,
                nt = Function.prototype,
                at = Object.prototype,
                ot = v['__core-js_shared__'],
                it = (et = /[^.]+$/.exec(
                    (ot && ot.keys && ot.keys.IE_PROTO) || ''
                ))
                    ? 'Symbol(src)_1.' + et
                    : '',
                ut = nt.toString,
                ct = at.hasOwnProperty,
                lt = ut.call(Object),
                ft = at.toString,
                st = RegExp(
                    '^' +
                        ut
                            .call(ct)
                            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                            .replace(
                                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                                '$1.*?'
                            ) +
                        '$'
                ),
                dt = _ ? v.Buffer : void 0,
                pt = v.Symbol,
                vt = v.Uint8Array,
                ht = Q(Object.getPrototypeOf, Object),
                yt = Object.create,
                _t = at.propertyIsEnumerable,
                gt = rt.splice,
                bt = Object.getOwnPropertySymbols,
                mt = dt ? dt.isBuffer : void 0,
                wt = Q(Object.keys, Object),
                jt = Math.max,
                xt = Qt(v, 'DataView'),
                At = Qt(v, 'Map'),
                Ot = Qt(v, 'Promise'),
                Dt = Qt(v, 'Set'),
                St = Qt(v, 'WeakMap'),
                Tt = Qt(Object, 'create'),
                Mt = oe(xt),
                kt = oe(At),
                Ft = oe(Ot),
                $t = oe(Dt),
                It = oe(St),
                zt = pt ? pt.prototype : void 0,
                Et = zt ? zt.valueOf : void 0;
            function Ct(t) {
                var e = -1,
                    r = t ? t.length : 0;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            function Ut(t) {
                var e = -1,
                    r = t ? t.length : 0;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            function Pt(t) {
                var e = -1,
                    r = t ? t.length : 0;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            function Bt(t) {
                this.__data__ = new Ut(t);
            }
            function Lt(t, e) {
                var r =
                        ce(t) || ue(t)
                            ? (function(t, e) {
                                  for (var r = -1, n = Array(t); ++r < t; )
                                      n[r] = e(r);
                                  return n;
                              })(t.length, String)
                            : [],
                    n = r.length,
                    a = !!n;
                for (var o in t)
                    (!e && !ct.call(t, o)) ||
                        (a && ('length' == o || re(o, n))) ||
                        r.push(o);
                return r;
            }
            function Wt(t, e, r) {
                ((void 0 === r || ie(t[e], r)) &&
                    ('number' != typeof e || void 0 !== r || e in t)) ||
                    (t[e] = r);
            }
            function Yt(t, e, r) {
                var n = t[e];
                (ct.call(t, e) && ie(n, r) && (void 0 !== r || e in t)) ||
                    (t[e] = r);
            }
            function Zt(t, e) {
                for (var r = t.length; r--; ) if (ie(t[r][0], e)) return r;
                return -1;
            }
            function Gt(r, n, a, o, t, e, i) {
                var u;
                if ((o && (u = e ? o(r, t, e, i) : o(r)), void 0 !== u))
                    return u;
                if (!ve(r)) return r;
                var c,
                    l,
                    f,
                    s,
                    d,
                    p,
                    v = ce(r);
                if (v) {
                    if (
                        ((u = (function(t) {
                            var e = t.length,
                                r = t.constructor(e);
                            e &&
                                'string' == typeof t[0] &&
                                ct.call(t, 'index') &&
                                ((r.index = t.index), (r.input = t.input));
                            return r;
                        })(r)),
                        !n)
                    )
                        return Ht(r, u);
                } else {
                    var h = ee(r),
                        y = h == O || h == D;
                    if (se(r))
                        return (function(t, e) {
                            if (e) return t.slice();
                            var r = new t.constructor(t.length);
                            return t.copy(r), r;
                        })(r, n);
                    if (h == M || h == j || (y && !e)) {
                        if (q(r)) return e ? r : {};
                        if (
                            ((u =
                                'function' !=
                                    typeof (d = y ? {} : r).constructor || ne(d)
                                    ? {}
                                    : ve((p = ht(d))) ? yt(p) : {}),
                            !n)
                        )
                            return (
                                (s = c = r),
                                (l = (f = u) && qt(s, be(s), f)),
                                qt(c, te(c), l)
                            );
                    } else {
                        if (!N[h]) return e ? r : {};
                        u = (function(t, e, r, n) {
                            var a = t.constructor;
                            switch (e) {
                                case z:
                                    return Xt(t);
                                case x:
                                case A:
                                    return new a(+t);
                                case E:
                                    return (
                                        (v = t),
                                        (h = n ? Xt(v.buffer) : v.buffer),
                                        new v.constructor(
                                            h,
                                            v.byteOffset,
                                            v.byteLength
                                        )
                                    );
                                case C:
                                case U:
                                case P:
                                case B:
                                case L:
                                case W:
                                case Y:
                                case Z:
                                case G:
                                    return (
                                        (d = t),
                                        (p = n ? Xt(d.buffer) : d.buffer),
                                        new d.constructor(
                                            p,
                                            d.byteOffset,
                                            d.length
                                        )
                                    );
                                case S:
                                    return (
                                        (f = t),
                                        (s = r),
                                        H(
                                            n ? s(K(f), !0) : K(f),
                                            R,
                                            new f.constructor()
                                        )
                                    );
                                case T:
                                case $:
                                    return new a(t);
                                case k:
                                    return (
                                        ((l = new (c = t).constructor(
                                            c.source,
                                            J.exec(c)
                                        )).lastIndex =
                                            c.lastIndex),
                                        l
                                    );
                                case F:
                                    return (
                                        (i = t),
                                        (u = r),
                                        H(
                                            n ? u(tt(i), !0) : tt(i),
                                            V,
                                            new i.constructor()
                                        )
                                    );
                                case I:
                                    return (
                                        (o = t), Et ? Object(Et.call(o)) : {}
                                    );
                            }
                            var o;
                            var i, u;
                            var c, l;
                            var f, s;
                            var d, p;
                            var v, h;
                        })(r, h, Gt, n);
                    }
                }
                i || (i = new Bt());
                var _,
                    g,
                    b,
                    m = i.get(r);
                if (m) return m;
                if ((i.set(r, u), !v))
                    var w = a
                        ? ((g = te),
                          (b = be((_ = r))),
                          ce(_)
                              ? b
                              : (function(t, e) {
                                    for (
                                        var r = -1, n = e.length, a = t.length;
                                        ++r < n;

                                    )
                                        t[a + r] = e[r];
                                    return t;
                                })(b, g(_)))
                        : be(r);
                return (
                    X(w || r, function(t, e) {
                        w && (t = r[(e = t)]),
                            Yt(u, e, Gt(t, n, a, o, e, r, i));
                    }),
                    u
                );
            }
            function Jt(t) {
                return (
                    !(!ve(t) || ((e = t), it && it in e)) &&
                    (de(t) || q(t) ? st : l).test(oe(t))
                );
                var e;
            }
            function Nt(t) {
                if (!ve(t))
                    return (function(t) {
                        var e = [];
                        if (null != t) for (var r in Object(t)) e.push(r);
                        return e;
                    })(t);
                var e = ne(t),
                    r = [];
                for (var n in t)
                    ('constructor' != n || (!e && ct.call(t, n))) && r.push(n);
                return r;
            }
            function Rt(n, a, o, i, u) {
                if (n !== a) {
                    if (!ce(a) && !_e(a)) var c = Nt(a);
                    X(c || a, function(t, e) {
                        if ((c && (t = a[(e = t)]), ve(t)))
                            u || (u = new Bt()),
                                (function(t, e, r, n, a, o, i) {
                                    var u = t[r],
                                        c = e[r],
                                        l = i.get(c);
                                    if (l) return Wt(t, r, l);
                                    var f = o
                                            ? o(u, c, r + '', t, e, i)
                                            : void 0,
                                        s = void 0 === f;
                                    s &&
                                        (ce((f = c)) || _e(c)
                                            ? (f = ce(u)
                                                  ? u
                                                  : fe(u)
                                                      ? Ht(u)
                                                      : Gt(c, !(s = !1)))
                                            : (function(t) {
                                                  if (
                                                      !he(t) ||
                                                      ft.call(t) != M ||
                                                      q(t)
                                                  )
                                                      return !1;
                                                  var e = ht(t);
                                                  if (null === e) return !0;
                                                  var r =
                                                      ct.call(
                                                          e,
                                                          'constructor'
                                                      ) && e.constructor;
                                                  return (
                                                      'function' == typeof r &&
                                                      r instanceof r &&
                                                      ut.call(r) == lt
                                                  );
                                              })(c) || ue(c)
                                                ? (f = ue(u)
                                                      ? qt(
                                                            (d = u),
                                                            le((p = d))
                                                                ? Lt(p, !0)
                                                                : Nt(p)
                                                        )
                                                      : !ve(u) || (n && de(u))
                                                          ? Gt(c, !(s = !1))
                                                          : u)
                                                : (s = !1));
                                    var d, p;
                                    s &&
                                        (i.set(c, f),
                                        a(f, c, n, o, i),
                                        i.delete(c));
                                    Wt(t, r, f);
                                })(n, a, e, o, Rt, i, u);
                        else {
                            var r = i ? i(n[e], t, e + '', n, a, u) : void 0;
                            void 0 === r && (r = t), Wt(n, e, r);
                        }
                    });
                }
            }
            function Vt(o, i) {
                return (
                    (i = jt(void 0 === i ? o.length - 1 : i, 0)),
                    function() {
                        for (
                            var t = arguments,
                                e = -1,
                                r = jt(t.length - i, 0),
                                n = Array(r);
                            ++e < r;

                        )
                            n[e] = t[i + e];
                        e = -1;
                        for (var a = Array(i + 1); ++e < i; ) a[e] = t[e];
                        return (a[i] = n), w(o, this, a);
                    }
                );
            }
            function Xt(t) {
                var e = new t.constructor(t.byteLength);
                return new vt(e).set(new vt(t)), e;
            }
            function Ht(t, e) {
                var r = -1,
                    n = t.length;
                for (e || (e = Array(n)); ++r < n; ) e[r] = t[r];
                return e;
            }
            function qt(t, e, r, n) {
                r || (r = {});
                for (var a = -1, o = e.length; ++a < o; ) {
                    var i = e[a],
                        u = n ? n(r[i], t[i], i, r, t) : void 0;
                    Yt(r, i, void 0 === u ? t[i] : u);
                }
                return r;
            }
            function Kt(t, e) {
                var r,
                    n,
                    a = t.__data__;
                return ('string' == (n = typeof (r = e)) ||
                'number' == n ||
                'symbol' == n ||
                'boolean' == n
                  ? '__proto__' !== r
                  : null === r)
                    ? a['string' == typeof e ? 'string' : 'hash']
                    : a.map;
            }
            function Qt(t, e) {
                var r,
                    n,
                    a = ((n = e), null == (r = t) ? void 0 : r[n]);
                return Jt(a) ? a : void 0;
            }
            (Ct.prototype.clear = function() {
                this.__data__ = Tt ? Tt(null) : {};
            }),
                (Ct.prototype.delete = function(t) {
                    return this.has(t) && delete this.__data__[t];
                }),
                (Ct.prototype.get = function(t) {
                    var e = this.__data__;
                    if (Tt) {
                        var r = e[t];
                        return r === n ? void 0 : r;
                    }
                    return ct.call(e, t) ? e[t] : void 0;
                }),
                (Ct.prototype.has = function(t) {
                    var e = this.__data__;
                    return Tt ? void 0 !== e[t] : ct.call(e, t);
                }),
                (Ct.prototype.set = function(t, e) {
                    return (
                        (this.__data__[t] = Tt && void 0 === e ? n : e), this
                    );
                }),
                (Ut.prototype.clear = function() {
                    this.__data__ = [];
                }),
                (Ut.prototype.delete = function(t) {
                    var e = this.__data__,
                        r = Zt(e, t);
                    return !(
                        r < 0 ||
                        (r == e.length - 1 ? e.pop() : gt.call(e, r, 1), 0)
                    );
                }),
                (Ut.prototype.get = function(t) {
                    var e = this.__data__,
                        r = Zt(e, t);
                    return r < 0 ? void 0 : e[r][1];
                }),
                (Ut.prototype.has = function(t) {
                    return -1 < Zt(this.__data__, t);
                }),
                (Ut.prototype.set = function(t, e) {
                    var r = this.__data__,
                        n = Zt(r, t);
                    return n < 0 ? r.push([t, e]) : (r[n][1] = e), this;
                }),
                (Pt.prototype.clear = function() {
                    this.__data__ = {
                        hash: new Ct(),
                        map: new (At || Ut)(),
                        string: new Ct(),
                    };
                }),
                (Pt.prototype.delete = function(t) {
                    return Kt(this, t).delete(t);
                }),
                (Pt.prototype.get = function(t) {
                    return Kt(this, t).get(t);
                }),
                (Pt.prototype.has = function(t) {
                    return Kt(this, t).has(t);
                }),
                (Pt.prototype.set = function(t, e) {
                    return Kt(this, t).set(t, e), this;
                }),
                (Bt.prototype.clear = function() {
                    this.__data__ = new Ut();
                }),
                (Bt.prototype.delete = function(t) {
                    return this.__data__.delete(t);
                }),
                (Bt.prototype.get = function(t) {
                    return this.__data__.get(t);
                }),
                (Bt.prototype.has = function(t) {
                    return this.__data__.has(t);
                }),
                (Bt.prototype.set = function(t, e) {
                    var r = this.__data__;
                    if (r instanceof Ut) {
                        var n = r.__data__;
                        if (!At || n.length < a - 1)
                            return n.push([t, e]), this;
                        r = this.__data__ = new Pt(n);
                    }
                    return r.set(t, e), this;
                });
            var te = bt
                    ? Q(bt, Object)
                    : function() {
                          return [];
                      },
                ee = function(t) {
                    return ft.call(t);
                };
            function re(t, e) {
                return (
                    !!(e = null == e ? r : e) &&
                    ('number' == typeof t || f.test(t)) &&
                    -1 < t &&
                    t % 1 == 0 &&
                    t < e
                );
            }
            function ne(t) {
                var e = t && t.constructor;
                return t === (('function' == typeof e && e.prototype) || at);
            }
            function ae(t, e, r, n, a, o) {
                return (
                    ve(t) &&
                        ve(e) &&
                        (o.set(e, t), Rt(t, e, void 0, ae, o), o.delete(e)),
                    t
                );
            }
            function oe(t) {
                if (null != t) {
                    try {
                        return ut.call(t);
                    } catch (t) {}
                    try {
                        return t + '';
                    } catch (t) {}
                }
                return '';
            }
            function ie(t, e) {
                return t === e || (t != t && e != e);
            }
            function ue(t) {
                return (
                    fe(t) &&
                    ct.call(t, 'callee') &&
                    (!_t.call(t, 'callee') || ft.call(t) == j)
                );
            }
            ((xt && ee(new xt(new ArrayBuffer(1))) != E) ||
                (At && ee(new At()) != S) ||
                (Ot && ee(Ot.resolve()) != u) ||
                (Dt && ee(new Dt()) != F) ||
                (St && ee(new St()) != c)) &&
                (ee = function(t) {
                    var e = ft.call(t),
                        r = e == M ? t.constructor : void 0,
                        n = r ? oe(r) : void 0;
                    if (n)
                        switch (n) {
                            case Mt:
                                return E;
                            case kt:
                                return S;
                            case Ft:
                                return u;
                            case $t:
                                return F;
                            case It:
                                return c;
                        }
                    return e;
                });
            var ce = Array.isArray;
            function le(t) {
                return null != t && pe(t.length) && !de(t);
            }
            function fe(t) {
                return he(t) && le(t);
            }
            var se =
                mt ||
                function() {
                    return !1;
                };
            function de(t) {
                var e = ve(t) ? ft.call(t) : '';
                return e == O || e == D;
            }
            function pe(t) {
                return 'number' == typeof t && -1 < t && t % 1 == 0 && t <= r;
            }
            function ve(t) {
                var e = typeof t;
                return !!t && ('object' == e || 'function' == e);
            }
            function he(t) {
                return !!t && 'object' == typeof t;
            }
            var ye,
                _e = m
                    ? ((ye = m),
                      function(t) {
                          return ye(t);
                      })
                    : function(t) {
                          return he(t) && pe(t.length) && !!s[ft.call(t)];
                      };
            var ge = Vt(function(t) {
                return t.push(void 0, ae), w(we, void 0, t);
            });
            function be(t) {
                return le(t)
                    ? Lt(t)
                    : (function(t) {
                          if (!ne(t)) return wt(t);
                          var e = [];
                          for (var r in Object(t))
                              ct.call(t, r) && 'constructor' != r && e.push(r);
                          return e;
                      })(t);
            }
            var me,
                we = ((me = function(t, e, r, n) {
                    Rt(t, e, r, n);
                }),
                Vt(function(t, e) {
                    var r = -1,
                        n = e.length,
                        a = 1 < n ? e[n - 1] : void 0,
                        o = 2 < n ? e[2] : void 0;
                    for (
                        a =
                            3 < me.length && 'function' == typeof a
                                ? (n--, a)
                                : void 0,
                            o &&
                                (function(t, e, r) {
                                    if (!ve(r)) return !1;
                                    var n = typeof e;
                                    return (
                                        !!('number' == n
                                            ? le(r) && re(e, r.length)
                                            : 'string' == n && (e in r)) &&
                                        ie(r[e], t)
                                    );
                                })(e[0], e[1], o) &&
                                ((a = n < 3 ? void 0 : a), (n = 1)),
                            t = Object(t);
                        ++r < n;

                    ) {
                        var i = e[r];
                        i && me(t, i, r, a);
                    }
                    return t;
                }));
            t.exports = ge;
        }),
        e = {
            dateTime: '%x, %X',
            date: '%-m/%-d/%Y',
            time: '%-I:%M:%S %p',
            periods: ['AM', 'PM'],
            days: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
            ],
            shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            months: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ],
            shortMonths: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
        },
        B = function(r) {
            return {
                locale: e,
                metaballs: {
                    blurDeviation: 10,
                    colorMatrix:
                        '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -10',
                },
                bound: {
                    format: r.timeFormat('%d %B %Y'),
                    location: 'end',
                    height: 20,
                },
                axis: {
                    formats: {
                        milliseconds: '%L',
                        seconds: ':%S',
                        minutes: '%I:%M',
                        hours: '%I %p',
                        days: '%a %d',
                        weeks: '%b %d',
                        months: '%B',
                        year: '%Y',
                    },
                    verticalGrid: !1,
                    tickPadding: 6,
                },
                drops: function(t) {
                    return t.data;
                },
                drop: {
                    color: null,
                    radius: 5,
                    date: function(t) {
                        return new Date(t);
                    },
                    onClick: function() {},
                    onMouseOver: function() {},
                    onMouseOut: function() {},
                    key: function(t, e) {
                        return e;
                    },
                },
                label: {
                    padding: 20,
                    text: function(t) {
                        return t.name + ' (' + t.data.length + ')';
                    },
                    width: 200,
                },
                indicator: { previousText: '◀', nextText: '▶' },
                line: {
                    color: function(t, e) {
                        return r.schemeCategory10[e];
                    },
                    height: 40,
                },
                margin: { top: 20, right: 10, bottom: 20, left: 10 },
                range: {
                    start: new Date(new Date().getTime() - 31536e6),
                    end: new Date(),
                },
                zoom: {
                    onZoomStart: null,
                    onZoom: null,
                    onZoomEnd: null,
                    minimumScale: 0,
                    maximumScale: 1 / 0,
                },
                numberDisplayedTicks: {
                    small: 3,
                    medium: 5,
                    large: 7,
                    extra: 12,
                },
                breakpoints: {
                    small: 576,
                    medium: 768,
                    large: 992,
                    extra: 1200,
                },
            };
        },
        v = t(function(t, e) {
            var p = 200,
                r = 'Expected a function',
                n = '__lodash_hash_undefined__',
                _ = 1,
                m = 2,
                o = 1 / 0,
                a = 9007199254740991,
                g = '[object Arguments]',
                b = '[object Array]',
                w = '[object Boolean]',
                j = '[object Date]',
                x = '[object Error]',
                i = '[object Function]',
                u = '[object GeneratorFunction]',
                A = '[object Map]',
                O = '[object Number]',
                D = '[object Object]',
                c = '[object Promise]',
                S = '[object RegExp]',
                T = '[object Set]',
                M = '[object String]',
                k = '[object Symbol]',
                l = '[object WeakMap]',
                F = '[object ArrayBuffer]',
                $ = '[object DataView]',
                f = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                s = /^\w*$/,
                d = /^\./,
                v = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                h = /\\(\\)?/g,
                y = /^\[object .+?Constructor\]$/,
                I = /^(?:0|[1-9]\d*)$/,
                z = {};
            (z['[object Float32Array]'] = z['[object Float64Array]'] = z[
                '[object Int8Array]'
            ] = z['[object Int16Array]'] = z['[object Int32Array]'] = z[
                '[object Uint8Array]'
            ] = z['[object Uint8ClampedArray]'] = z['[object Uint16Array]'] = z[
                '[object Uint32Array]'
            ] = !0),
                (z[g] = z[b] = z[F] = z[w] = z[$] = z[j] = z[x] = z[i] = z[
                    A
                ] = z[O] = z[D] = z[S] = z[T] = z[M] = z[l] = !1);
            var E = 'object' == typeof je && je && je.Object === Object && je,
                C =
                    'object' == typeof self &&
                    self &&
                    self.Object === Object &&
                    self,
                U = E || C || Function('return this')(),
                P = e && !e.nodeType && e,
                B = P && t && !t.nodeType && t,
                L = B && B.exports === P && E.process,
                W = (function() {
                    try {
                        return L && L.binding('util');
                    } catch (t) {}
                })(),
                Y = W && W.isTypedArray;
            function Z(t, e) {
                return (
                    !!(t ? t.length : 0) &&
                    -1 <
                        (function(t, e, r) {
                            if (e != e)
                                return (function(t, e, r, n) {
                                    var a = t.length,
                                        o = r + (n ? 1 : -1);
                                    for (; n ? o-- : ++o < a; )
                                        if (e(t[o], o, t)) return o;
                                    return -1;
                                })(t, N, r);
                            var n = r - 1,
                                a = t.length;
                            for (; ++n < a; ) if (t[n] === e) return n;
                            return -1;
                        })(t, e, 0)
                );
            }
            function G(t, e, r) {
                for (var n = -1, a = t ? t.length : 0; ++n < a; )
                    if (r(e, t[n])) return !0;
                return !1;
            }
            function J(t, e) {
                for (var r = -1, n = t ? t.length : 0; ++r < n; )
                    if (e(t[r], r, t)) return !0;
                return !1;
            }
            function N(t) {
                return t != t;
            }
            function R(t, e) {
                return t.has(e);
            }
            function V(t) {
                var e = !1;
                if (null != t && 'function' != typeof t.toString)
                    try {
                        e = !!(t + '');
                    } catch (t) {}
                return e;
            }
            function X(t) {
                var r = -1,
                    n = Array(t.size);
                return (
                    t.forEach(function(t, e) {
                        n[++r] = [e, t];
                    }),
                    n
                );
            }
            function H(t) {
                var e = -1,
                    r = Array(t.size);
                return (
                    t.forEach(function(t) {
                        r[++e] = t;
                    }),
                    r
                );
            }
            var q,
                K,
                Q,
                tt = Array.prototype,
                et = Function.prototype,
                rt = Object.prototype,
                nt = U['__core-js_shared__'],
                at = (q = /[^.]+$/.exec(
                    (nt && nt.keys && nt.keys.IE_PROTO) || ''
                ))
                    ? 'Symbol(src)_1.' + q
                    : '',
                ot = et.toString,
                it = rt.hasOwnProperty,
                ut = rt.toString,
                ct = RegExp(
                    '^' +
                        ot
                            .call(it)
                            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                            .replace(
                                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                                '$1.*?'
                            ) +
                        '$'
                ),
                lt = U.Symbol,
                ft = U.Uint8Array,
                st = rt.propertyIsEnumerable,
                dt = tt.splice,
                pt = ((K = Object.keys),
                (Q = Object),
                function(t) {
                    return K(Q(t));
                }),
                vt = Jt(U, 'DataView'),
                ht = Jt(U, 'Map'),
                yt = Jt(U, 'Promise'),
                _t = Jt(U, 'Set'),
                gt = Jt(U, 'WeakMap'),
                bt = Jt(Object, 'create'),
                mt = Qt(vt),
                wt = Qt(ht),
                jt = Qt(yt),
                xt = Qt(_t),
                At = Qt(gt),
                Ot = lt ? lt.prototype : void 0,
                Dt = Ot ? Ot.valueOf : void 0,
                St = Ot ? Ot.toString : void 0;
            function Tt(t) {
                var e = -1,
                    r = t ? t.length : 0;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            function Mt(t) {
                var e = -1,
                    r = t ? t.length : 0;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            function kt(t) {
                var e = -1,
                    r = t ? t.length : 0;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            function Ft(t) {
                var e = -1,
                    r = t ? t.length : 0;
                for (this.__data__ = new kt(); ++e < r; ) this.add(t[e]);
            }
            function $t(t) {
                this.__data__ = new Mt(t);
            }
            function It(t, e) {
                var r =
                        ne(t) || re(t)
                            ? (function(t, e) {
                                  for (var r = -1, n = Array(t); ++r < t; )
                                      n[r] = e(r);
                                  return n;
                              })(t.length, String)
                            : [],
                    n = r.length,
                    a = !!n;
                for (var o in t)
                    (!e && !it.call(t, o)) ||
                        (a && ('length' == o || Rt(o, n))) ||
                        r.push(o);
                return r;
            }
            function zt(t, e) {
                for (var r = t.length; r--; ) if (ee(t[r][0], e)) return r;
                return -1;
            }
            function Et(t, e) {
                for (
                    var r = 0, n = (e = Vt(e, t) ? [e] : Wt(e)).length;
                    null != t && r < n;

                )
                    t = t[Kt(e[r++])];
                return r && r == n ? t : void 0;
            }
            function Ct(t, e) {
                return null != t && e in Object(t);
            }
            function Ut(t, e, r, n, a) {
                return (
                    t === e ||
                    (null == t || null == e || (!ue(t) && !ce(e))
                        ? t != t && e != e
                        : (function(t, e, r, n, a, o) {
                              var i = ne(t),
                                  u = ne(e),
                                  c = b,
                                  l = b;
                              i || (c = (c = Nt(t)) == g ? D : c);
                              u || (l = (l = Nt(e)) == g ? D : l);
                              var f = c == D && !V(t),
                                  s = l == D && !V(e),
                                  d = c == l;
                              if (d && !f)
                                  return (
                                      o || (o = new $t()),
                                      i || se(t)
                                          ? Zt(t, e, r, n, a, o)
                                          : (function(t, e, r, n, a, o, i) {
                                                switch (r) {
                                                    case $:
                                                        if (
                                                            t.byteLength !=
                                                                e.byteLength ||
                                                            t.byteOffset !=
                                                                e.byteOffset
                                                        )
                                                            return !1;
                                                        (t = t.buffer),
                                                            (e = e.buffer);
                                                    case F:
                                                        return !(
                                                            t.byteLength !=
                                                                e.byteLength ||
                                                            !n(
                                                                new ft(t),
                                                                new ft(e)
                                                            )
                                                        );
                                                    case w:
                                                    case j:
                                                    case O:
                                                        return ee(+t, +e);
                                                    case x:
                                                        return (
                                                            t.name == e.name &&
                                                            t.message ==
                                                                e.message
                                                        );
                                                    case S:
                                                    case M:
                                                        return t == e + '';
                                                    case A:
                                                        var u = X;
                                                    case T:
                                                        var c = o & m;
                                                        if (
                                                            (u || (u = H),
                                                            t.size != e.size &&
                                                                !c)
                                                        )
                                                            return !1;
                                                        var l = i.get(t);
                                                        if (l) return l == e;
                                                        (o |= _), i.set(t, e);
                                                        var f = Zt(
                                                            u(t),
                                                            u(e),
                                                            n,
                                                            a,
                                                            o,
                                                            i
                                                        );
                                                        return i.delete(t), f;
                                                    case k:
                                                        if (Dt)
                                                            return (
                                                                Dt.call(t) ==
                                                                Dt.call(e)
                                                            );
                                                }
                                                return !1;
                                            })(t, e, c, r, n, a, o)
                                  );
                              if (!(a & m)) {
                                  var p = f && it.call(t, '__wrapped__'),
                                      v = s && it.call(e, '__wrapped__');
                                  if (p || v) {
                                      var h = p ? t.value() : t,
                                          y = v ? e.value() : e;
                                      return (
                                          o || (o = new $t()), r(h, y, n, a, o)
                                      );
                                  }
                              }
                              if (!d) return !1;
                              return (
                                  o || (o = new $t()),
                                  (function(t, e, r, n, a, o) {
                                      var i = a & m,
                                          u = de(t),
                                          c = u.length,
                                          l = de(e).length;
                                      if (c != l && !i) return !1;
                                      for (var f = c; f--; ) {
                                          var s = u[f];
                                          if (!(i ? s in e : it.call(e, s)))
                                              return !1;
                                      }
                                      var d = o.get(t);
                                      if (d && o.get(e)) return d == e;
                                      var p = !0;
                                      o.set(t, e), o.set(e, t);
                                      for (var v = i; ++f < c; ) {
                                          s = u[f];
                                          var h = t[s],
                                              y = e[s];
                                          if (n)
                                              var _ = i
                                                  ? n(y, h, s, e, t, o)
                                                  : n(h, y, s, t, e, o);
                                          if (
                                              !(void 0 === _
                                                  ? h === y || r(h, y, n, a, o)
                                                  : _)
                                          ) {
                                              p = !1;
                                              break;
                                          }
                                          v || (v = 'constructor' == s);
                                      }
                                      if (p && !v) {
                                          var g = t.constructor,
                                              b = e.constructor;
                                          g != b &&
                                              'constructor' in t &&
                                              'constructor' in e &&
                                              !(
                                                  'function' == typeof g &&
                                                  g instanceof g &&
                                                  'function' == typeof b &&
                                                  b instanceof b
                                              ) &&
                                              (p = !1);
                                      }
                                      return o.delete(t), o.delete(e), p;
                                  })(t, e, r, n, a, o)
                              );
                          })(t, e, Ut, r, n, a))
                );
            }
            function Pt(t) {
                return (
                    !(!ue(t) || ((e = t), at && at in e)) &&
                    (oe(t) || V(t) ? ct : y).test(Qt(t))
                );
                var e;
            }
            function Bt(t) {
                return 'function' == typeof t
                    ? t
                    : null == t
                        ? pe
                        : 'object' == typeof t
                            ? ne(t)
                                ? (function(c, l) {
                                      if (Vt(c) && Xt(l)) return Ht(Kt(c), l);
                                      return function(t) {
                                          var e,
                                              r,
                                              n,
                                              a,
                                              o,
                                              i,
                                              u = ((r = c),
                                              void 0 ===
                                              (a =
                                                  null == (e = t)
                                                      ? void 0
                                                      : Et(e, r))
                                                  ? n
                                                  : a);
                                          return void 0 === u && u === l
                                              ? ((i = c),
                                                null != (o = t) &&
                                                    (function(t, e, r) {
                                                        e = Vt(e, t)
                                                            ? [e]
                                                            : Wt(e);
                                                        for (
                                                            var n,
                                                                a = -1,
                                                                o = e.length;
                                                            ++a < o;

                                                        ) {
                                                            var i = Kt(e[a]);
                                                            if (
                                                                !(n =
                                                                    null != t &&
                                                                    r(t, i))
                                                            )
                                                                break;
                                                            t = t[i];
                                                        }
                                                        return (
                                                            n ||
                                                            (!!(o = t
                                                                ? t.length
                                                                : 0) &&
                                                                ie(o) &&
                                                                Rt(i, o) &&
                                                                (ne(t) ||
                                                                    re(t)))
                                                        );
                                                    })(o, i, Ct))
                                              : Ut(l, u, void 0, _ | m);
                                      };
                                  })(t[0], t[1])
                                : (function(e) {
                                      var r = (function(t) {
                                          var e = de(t),
                                              r = e.length;
                                          for (; r--; ) {
                                              var n = e[r],
                                                  a = t[n];
                                              e[r] = [n, a, Xt(a)];
                                          }
                                          return e;
                                      })(e);
                                      if (1 == r.length && r[0][2])
                                          return Ht(r[0][0], r[0][1]);
                                      return function(t) {
                                          return (
                                              t === e ||
                                              (function(t, e, r, n) {
                                                  var a = r.length,
                                                      o = a,
                                                      i = !n;
                                                  if (null == t) return !o;
                                                  for (t = Object(t); a--; ) {
                                                      var u = r[a];
                                                      if (
                                                          i && u[2]
                                                              ? u[1] !== t[u[0]]
                                                              : !(u[0] in t)
                                                      )
                                                          return !1;
                                                  }
                                                  for (; ++a < o; ) {
                                                      var c = (u = r[a])[0],
                                                          l = t[c],
                                                          f = u[1];
                                                      if (i && u[2]) {
                                                          if (
                                                              void 0 === l &&
                                                              !(c in t)
                                                          )
                                                              return !1;
                                                      } else {
                                                          var s = new $t();
                                                          if (n)
                                                              var d = n(
                                                                  l,
                                                                  f,
                                                                  c,
                                                                  t,
                                                                  e,
                                                                  s
                                                              );
                                                          if (
                                                              !(void 0 === d
                                                                  ? Ut(
                                                                        f,
                                                                        l,
                                                                        n,
                                                                        _ | m,
                                                                        s
                                                                    )
                                                                  : d)
                                                          )
                                                              return !1;
                                                      }
                                                  }
                                                  return !0;
                                              })(t, e, r)
                                          );
                                      };
                                  })(t)
                            : Vt((e = t))
                                ? ((n = Kt(e)),
                                  function(t) {
                                      return null == t ? void 0 : t[n];
                                  })
                                : ((r = e),
                                  function(t) {
                                      return Et(t, r);
                                  });
                var e, r, n;
            }
            function Lt(t) {
                if (
                    ((r = (e = t) && e.constructor),
                    (n = ('function' == typeof r && r.prototype) || rt),
                    e !== n)
                )
                    return pt(t);
                var e,
                    r,
                    n,
                    a = [];
                for (var o in Object(t))
                    it.call(t, o) && 'constructor' != o && a.push(o);
                return a;
            }
            function Wt(t) {
                return ne(t) ? t : qt(t);
            }
            (Tt.prototype.clear = function() {
                this.__data__ = bt ? bt(null) : {};
            }),
                (Tt.prototype.delete = function(t) {
                    return this.has(t) && delete this.__data__[t];
                }),
                (Tt.prototype.get = function(t) {
                    var e = this.__data__;
                    if (bt) {
                        var r = e[t];
                        return r === n ? void 0 : r;
                    }
                    return it.call(e, t) ? e[t] : void 0;
                }),
                (Tt.prototype.has = function(t) {
                    var e = this.__data__;
                    return bt ? void 0 !== e[t] : it.call(e, t);
                }),
                (Tt.prototype.set = function(t, e) {
                    return (
                        (this.__data__[t] = bt && void 0 === e ? n : e), this
                    );
                }),
                (Mt.prototype.clear = function() {
                    this.__data__ = [];
                }),
                (Mt.prototype.delete = function(t) {
                    var e = this.__data__,
                        r = zt(e, t);
                    return !(
                        r < 0 ||
                        (r == e.length - 1 ? e.pop() : dt.call(e, r, 1), 0)
                    );
                }),
                (Mt.prototype.get = function(t) {
                    var e = this.__data__,
                        r = zt(e, t);
                    return r < 0 ? void 0 : e[r][1];
                }),
                (Mt.prototype.has = function(t) {
                    return -1 < zt(this.__data__, t);
                }),
                (Mt.prototype.set = function(t, e) {
                    var r = this.__data__,
                        n = zt(r, t);
                    return n < 0 ? r.push([t, e]) : (r[n][1] = e), this;
                }),
                (kt.prototype.clear = function() {
                    this.__data__ = {
                        hash: new Tt(),
                        map: new (ht || Mt)(),
                        string: new Tt(),
                    };
                }),
                (kt.prototype.delete = function(t) {
                    return Gt(this, t).delete(t);
                }),
                (kt.prototype.get = function(t) {
                    return Gt(this, t).get(t);
                }),
                (kt.prototype.has = function(t) {
                    return Gt(this, t).has(t);
                }),
                (kt.prototype.set = function(t, e) {
                    return Gt(this, t).set(t, e), this;
                }),
                (Ft.prototype.add = Ft.prototype.push = function(t) {
                    return this.__data__.set(t, n), this;
                }),
                (Ft.prototype.has = function(t) {
                    return this.__data__.has(t);
                }),
                ($t.prototype.clear = function() {
                    this.__data__ = new Mt();
                }),
                ($t.prototype.delete = function(t) {
                    return this.__data__.delete(t);
                }),
                ($t.prototype.get = function(t) {
                    return this.__data__.get(t);
                }),
                ($t.prototype.has = function(t) {
                    return this.__data__.has(t);
                }),
                ($t.prototype.set = function(t, e) {
                    var r = this.__data__;
                    if (r instanceof Mt) {
                        var n = r.__data__;
                        if (!ht || n.length < p - 1)
                            return n.push([t, e]), this;
                        r = this.__data__ = new kt(n);
                    }
                    return r.set(t, e), this;
                });
            var Yt =
                _t && 1 / H(new _t([, -0]))[1] == o
                    ? function(t) {
                          return new _t(t);
                      }
                    : function() {};
            function Zt(t, e, r, n, a, o) {
                var i = a & m,
                    u = t.length,
                    c = e.length;
                if (u != c && !(i && u < c)) return !1;
                var l = o.get(t);
                if (l && o.get(e)) return l == e;
                var f = -1,
                    s = !0,
                    d = a & _ ? new Ft() : void 0;
                for (o.set(t, e), o.set(e, t); ++f < u; ) {
                    var p = t[f],
                        v = e[f];
                    if (n)
                        var h = i ? n(v, p, f, e, t, o) : n(p, v, f, t, e, o);
                    if (void 0 !== h) {
                        if (h) continue;
                        s = !1;
                        break;
                    }
                    if (d) {
                        if (
                            !J(e, function(t, e) {
                                if (!d.has(e) && (p === t || r(p, t, n, a, o)))
                                    return d.add(e);
                            })
                        ) {
                            s = !1;
                            break;
                        }
                    } else if (p !== v && !r(p, v, n, a, o)) {
                        s = !1;
                        break;
                    }
                }
                return o.delete(t), o.delete(e), s;
            }
            function Gt(t, e) {
                var r,
                    n,
                    a = t.__data__;
                return ('string' == (n = typeof (r = e)) ||
                'number' == n ||
                'symbol' == n ||
                'boolean' == n
                  ? '__proto__' !== r
                  : null === r)
                    ? a['string' == typeof e ? 'string' : 'hash']
                    : a.map;
            }
            function Jt(t, e) {
                var r,
                    n,
                    a = ((n = e), null == (r = t) ? void 0 : r[n]);
                return Pt(a) ? a : void 0;
            }
            var Nt = function(t) {
                return ut.call(t);
            };
            function Rt(t, e) {
                return (
                    !!(e = null == e ? a : e) &&
                    ('number' == typeof t || I.test(t)) &&
                    -1 < t &&
                    t % 1 == 0 &&
                    t < e
                );
            }
            function Vt(t, e) {
                if (ne(t)) return !1;
                var r = typeof t;
                return (
                    !(
                        'number' != r &&
                        'symbol' != r &&
                        'boolean' != r &&
                        null != t &&
                        !le(t)
                    ) ||
                    (s.test(t) || !f.test(t) || (null != e && t in Object(e)))
                );
            }
            function Xt(t) {
                return t == t && !ue(t);
            }
            function Ht(e, r) {
                return function(t) {
                    return (
                        null != t &&
                        (t[e] === r && (void 0 !== r || e in Object(t)))
                    );
                };
            }
            ((vt && Nt(new vt(new ArrayBuffer(1))) != $) ||
                (ht && Nt(new ht()) != A) ||
                (yt && Nt(yt.resolve()) != c) ||
                (_t && Nt(new _t()) != T) ||
                (gt && Nt(new gt()) != l)) &&
                (Nt = function(t) {
                    var e = ut.call(t),
                        r = e == D ? t.constructor : void 0,
                        n = r ? Qt(r) : void 0;
                    if (n)
                        switch (n) {
                            case mt:
                                return $;
                            case wt:
                                return A;
                            case jt:
                                return c;
                            case xt:
                                return T;
                            case At:
                                return l;
                        }
                    return e;
                });
            var qt = te(function(t) {
                var e;
                t =
                    null == (e = t)
                        ? ''
                        : (function(t) {
                              if ('string' == typeof t) return t;
                              if (le(t)) return St ? St.call(t) : '';
                              var e = t + '';
                              return '0' == e && 1 / t == -o ? '-0' : e;
                          })(e);
                var a = [];
                return (
                    d.test(t) && a.push(''),
                    t.replace(v, function(t, e, r, n) {
                        a.push(r ? n.replace(h, '$1') : e || t);
                    }),
                    a
                );
            });
            function Kt(t) {
                if ('string' == typeof t || le(t)) return t;
                var e = t + '';
                return '0' == e && 1 / t == -o ? '-0' : e;
            }
            function Qt(t) {
                if (null != t) {
                    try {
                        return ot.call(t);
                    } catch (t) {}
                    try {
                        return t + '';
                    } catch (t) {}
                }
                return '';
            }
            function te(a, o) {
                if ('function' != typeof a || (o && 'function' != typeof o))
                    throw new TypeError(r);
                var i = function() {
                    var t = arguments,
                        e = o ? o.apply(this, t) : t[0],
                        r = i.cache;
                    if (r.has(e)) return r.get(e);
                    var n = a.apply(this, t);
                    return (i.cache = r.set(e, n)), n;
                };
                return (i.cache = new (te.Cache || kt)()), i;
            }
            function ee(t, e) {
                return t === e || (t != t && e != e);
            }
            function re(t) {
                return (
                    ce((e = t)) &&
                    ae(e) &&
                    it.call(t, 'callee') &&
                    (!st.call(t, 'callee') || ut.call(t) == g)
                );
                var e;
            }
            te.Cache = kt;
            var ne = Array.isArray;
            function ae(t) {
                return null != t && ie(t.length) && !oe(t);
            }
            function oe(t) {
                var e = ue(t) ? ut.call(t) : '';
                return e == i || e == u;
            }
            function ie(t) {
                return 'number' == typeof t && -1 < t && t % 1 == 0 && t <= a;
            }
            function ue(t) {
                var e = typeof t;
                return !!t && ('object' == e || 'function' == e);
            }
            function ce(t) {
                return !!t && 'object' == typeof t;
            }
            function le(t) {
                return 'symbol' == typeof t || (ce(t) && ut.call(t) == k);
            }
            var fe,
                se = Y
                    ? ((fe = Y),
                      function(t) {
                          return fe(t);
                      })
                    : function(t) {
                          return ce(t) && ie(t.length) && !!z[ut.call(t)];
                      };
            function de(t) {
                return ae(t) ? It(t) : Lt(t);
            }
            function pe(t) {
                return t;
            }
            t.exports = function(t, e) {
                return t && t.length
                    ? (function(t, e, r) {
                          var n = -1,
                              a = Z,
                              o = t.length,
                              i = !0,
                              u = [],
                              c = u;
                          if (r) (i = !1), (a = G);
                          else if (p <= o) {
                              var l = e ? null : Yt(t);
                              if (l) return H(l);
                              (i = !1), (a = R), (c = new Ft());
                          } else c = e ? [] : u;
                          t: for (; ++n < o; ) {
                              var f = t[n],
                                  s = e ? e(f) : f;
                              if (((f = r || 0 !== f ? f : 0), i && s == s)) {
                                  for (var d = c.length; d--; )
                                      if (c[d] === s) continue t;
                                  e && c.push(s), u.push(f);
                              } else
                                  a(c, s, r) ||
                                      (c !== u && c.push(s), u.push(f));
                          }
                          return u;
                      })(t, Bt(e))
                    : [];
            };
        }),
        x = function(d, p) {
            return function(t) {
                var e,
                    r,
                    n = d.drop,
                    a = n.color,
                    o = n.radius,
                    i = n.date,
                    u = n.onClick,
                    c = n.onMouseOver,
                    l = n.onMouseOut,
                    f = n.key,
                    s = t.selectAll('.drop', f).data(
                        ((e = p),
                        (r = i),
                        function(t) {
                            return v(t.data, function(t) {
                                return Math.round(e(r(t)));
                            });
                        })
                    );
                s
                    .enter()
                    .append('circle')
                    .classed('drop', !0)
                    .on('click', u)
                    .on('mouseover', c)
                    .on('mouseout', l)
                    .merge(s)
                    .attr('r', o)
                    .attr('fill', a)
                    .attr('cx', function(t) {
                        return p(i(t));
                    }),
                    s
                        .exit()
                        .on('click', null)
                        .on('mouseover', null)
                        .on('mouseout', null)
                        .remove();
            };
        };
    var p = function(t) {
            return t instanceof Date;
        },
        h = 36e5,
        y = 6e4,
        _ = 2,
        g = /[T ]/,
        b = /:/,
        m = /^(\d{2})$/,
        w = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
        j = /^(\d{4})/,
        A = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
        O = /^-(\d{2})$/,
        D = /^-?(\d{3})$/,
        S = /^-?(\d{2})-?(\d{2})$/,
        T = /^-?W(\d{2})$/,
        M = /^-?W(\d{2})-?(\d{1})$/,
        k = /^(\d{2}([.,]\d*)?)$/,
        F = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
        $ = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
        I = /([Z+-].*)$/,
        z = /^(Z)$/,
        E = /^([+-])(\d{2})$/,
        C = /^([+-])(\d{2}):?(\d{2})$/;
    function U(t, e, r) {
        (e = e || 0), (r = r || 0);
        var n = new Date(0);
        n.setUTCFullYear(t, 0, 4);
        var a = 7 * e + r + 1 - (n.getUTCDay() || 7);
        return n.setUTCDate(n.getUTCDate() + a), n;
    }
    var i = function(t, e) {
        if (p(t)) return new Date(t.getTime());
        if ('string' != typeof t) return new Date(t);
        var r = (e || {}).additionalDigits;
        r = null == r ? _ : Number(r);
        var n = (function(t) {
                var e,
                    r = {},
                    n = t.split(g);
                if (
                    (b.test(n[0])
                        ? ((r.date = null), (e = n[0]))
                        : ((r.date = n[0]), (e = n[1])),
                    e)
                ) {
                    var a = I.exec(e);
                    a
                        ? ((r.time = e.replace(a[1], '')), (r.timezone = a[1]))
                        : (r.time = e);
                }
                return r;
            })(t),
            a = (function(t, e) {
                var r,
                    n = w[e],
                    a = A[e];
                if ((r = j.exec(t) || a.exec(t))) {
                    var o = r[1];
                    return {
                        year: parseInt(o, 10),
                        restDateString: t.slice(o.length),
                    };
                }
                if ((r = m.exec(t) || n.exec(t))) {
                    var i = r[1];
                    return {
                        year: 100 * parseInt(i, 10),
                        restDateString: t.slice(i.length),
                    };
                }
                return { year: null };
            })(n.date, r),
            o = a.year,
            i = (function(t, e) {
                if (null === e) return null;
                var r, n, a, o;
                if (0 === t.length)
                    return (n = new Date(0)).setUTCFullYear(e), n;
                if ((r = O.exec(t)))
                    return (
                        (n = new Date(0)),
                        (a = parseInt(r[1], 10) - 1),
                        n.setUTCFullYear(e, a),
                        n
                    );
                if ((r = D.exec(t))) {
                    n = new Date(0);
                    var i = parseInt(r[1], 10);
                    return n.setUTCFullYear(e, 0, i), n;
                }
                if ((r = S.exec(t))) {
                    (n = new Date(0)), (a = parseInt(r[1], 10) - 1);
                    var u = parseInt(r[2], 10);
                    return n.setUTCFullYear(e, a, u), n;
                }
                if ((r = T.exec(t)))
                    return (o = parseInt(r[1], 10) - 1), U(e, o);
                if ((r = M.exec(t))) {
                    o = parseInt(r[1], 10) - 1;
                    var c = parseInt(r[2], 10) - 1;
                    return U(e, o, c);
                }
                return null;
            })(a.restDateString, o);
        if (i) {
            var u,
                c = i.getTime(),
                l = 0;
            return (
                n.time &&
                    (l = (function(t) {
                        var e, r, n;
                        if ((e = k.exec(t)))
                            return (
                                ((r = parseFloat(e[1].replace(',', '.'))) %
                                    24) *
                                h
                            );
                        if ((e = F.exec(t)))
                            return (
                                (r = parseInt(e[1], 10)),
                                (n = parseFloat(e[2].replace(',', '.'))),
                                (r % 24) * h + n * y
                            );
                        if ((e = $.exec(t))) {
                            (r = parseInt(e[1], 10)), (n = parseInt(e[2], 10));
                            var a = parseFloat(e[3].replace(',', '.'));
                            return (r % 24) * h + n * y + 1e3 * a;
                        }
                        return null;
                    })(n.time)),
                n.timezone
                    ? ((f = n.timezone),
                      (u = (s = z.exec(f))
                          ? 0
                          : (s = E.exec(f))
                              ? ((d = 60 * parseInt(s[2], 10)),
                                '+' === s[1] ? -d : d)
                              : (s = C.exec(f))
                                  ? ((d =
                                        60 * parseInt(s[2], 10) +
                                        parseInt(s[3], 10)),
                                    '+' === s[1] ? -d : d)
                                  : 0))
                    : ((u = new Date(c + l).getTimezoneOffset()),
                      (u = new Date(c + l + u * y).getTimezoneOffset())),
                new Date(c + l + u * y)
            );
        }
        var f, s, d;
        return new Date(t);
    };
    var n = function(t, e) {
        var r = i(t),
            n = i(e);
        return r.getTime() < n.getTime();
    };
    var s = function(t, e) {
        var r = Math.min.apply(
            Math,
            (function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, r = Array(t.length); e < t.length; e++)
                        r[e] = t[e];
                    return r;
                }
                return Array.from(t);
            })(e)
        );
        return n(new Date(t), r);
    };
    var a = function(t, e) {
        var r = i(t),
            n = i(e);
        return r.getTime() > n.getTime();
    };
    var d = function(t, e) {
            var r = Math.max.apply(
                Math,
                (function(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, r = Array(t.length); e < t.length; e++)
                            r[e] = t[e];
                        return r;
                    }
                    return Array.from(t);
                })(e)
            );
            return a(new Date(t), r);
        },
        L = function(l, f) {
            return function(t) {
                var e = l.label.width,
                    r = l.line.height,
                    n = l.drop.date,
                    a = l.indicator,
                    o = a.previousText,
                    i = a.nextText,
                    u = f.domain().map(function(t) {
                        return new Date(t);
                    }),
                    c = t.selectAll('.indicator').data(function(t) {
                        var e = [];
                        return (
                            t.fullData.some(function(t) {
                                return s(n(t), u);
                            }) && e.push('before'),
                            t.fullData.some(function(t) {
                                return d(n(t), u);
                            }) && e.push('after'),
                            e
                        );
                    });
                c
                    .enter()
                    .append('text')
                    .classed('indicator', !0)
                    .attr('opacity', 0.5)
                    .attr('x', function(t) {
                        return 'before' === t ? e : '100%';
                    })
                    .attr('dx', function(t) {
                        return 'before' === t ? 0 : -25;
                    })
                    .attr('y', r / 2)
                    .attr('dy', '0.25em')
                    .text(function(t) {
                        return 'before' === t ? o : i;
                    }),
                    c
                        .attr('x', function(t) {
                            return 'before' === t ? e : '100%';
                        })
                        .attr('dx', function(t) {
                            return 'before' === t ? 0 : -25;
                        })
                        .attr('y', r / 2)
                        .attr('dy', '0.25em')
                        .text(function(t) {
                            return 'before' === t ? o : i;
                        }),
                    c.exit().remove();
            };
        };
    var W = function(t, e, r) {
        var n = i(t).getTime(),
            a = i(e).getTime(),
            o = i(r).getTime();
        if (o < a)
            throw new Error(
                'The start of the range cannot be after the end of the range'
            );
        return a <= n && n <= o;
    };
    function Y(t) {
        if (Array.isArray(t)) {
            for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
            return r;
        }
        return Array.from(t);
    }
    return function(t) {
        var e = t.d3,
            I = void 0 === e ? window.d3 : e,
            r = t.global,
            z = void 0 === r ? window : r,
            E = (function(t, e) {
                var r = {};
                for (var n in t)
                    0 <= e.indexOf(n) ||
                        (Object.prototype.hasOwnProperty.call(t, n) &&
                            (r[n] = t[n]));
                return r;
            })(t, ['d3', 'global']),
            C = function t(e) {
                (t._initialize = function() {
                    return (function(t) {
                        t.selectAll('svg').remove();
                        var e = t.selectAll('svg').data(t.data());
                        e.exit().remove();
                        var r = P(E || {}, B(I)),
                            n = (r.drops, r.zoom),
                            a = r.drop,
                            o = (a.onClick,
                            a.onMouseOut,
                            a.onMouseOver,
                            r.metaballs),
                            i = r.label.width,
                            u = r.line.height,
                            c = r.range,
                            l = c.start,
                            f = c.end,
                            s = r.margin,
                            d = r.breakpoints,
                            p = t.node().clientWidth - s.left - s.right,
                            v = I.scaleTime()
                                .domain([l, f])
                                .range([0, p - i]);
                        (C._scale = v),
                            (C.currentBreakpointLabel = (function(t, e) {
                                for (var r in t) if (e <= t[r]) return r;
                                return 'extra';
                            })(d, z.innerWidth));
                        var h,
                            y,
                            _,
                            g,
                            b,
                            m,
                            w,
                            j,
                            x,
                            A,
                            O,
                            D,
                            S,
                            T,
                            M,
                            k,
                            F,
                            $ = e
                                .enter()
                                .append('svg')
                                .attr('width', p + s.left + s.right)
                                .classed('event-drop-chart', !0);
                        n &&
                            $.call(
                                ((h = I),
                                (y = $),
                                (g = v),
                                (b = U),
                                (m = function() {
                                    return I.event;
                                }),
                                (w = (_ = r).label),
                                (j = w.width),
                                (x = w.padding),
                                (A = _.zoom),
                                (O = A.onZoomStart),
                                (D = A.onZoom),
                                (S = A.onZoomEnd),
                                (T = A.minimumScale),
                                (M = A.maximumScale),
                                (k = h.zoom().scaleExtent([T, M]))
                                    .on('zoom.start', O)
                                    .on('zoom.end', S),
                                k.on('zoom', function(t) {
                                    var e,
                                        r,
                                        n,
                                        a,
                                        o,
                                        i,
                                        u,
                                        c,
                                        l = ((e = m().transform),
                                        (a = h),
                                        (o = (r = j) + (n = x)),
                                        (i = e.x),
                                        (u = e.y),
                                        (c = e.k),
                                        a.zoomIdentity
                                            .translate(-o, 0)
                                            .translate(i, u)
                                            .scale(c)
                                            .translate(r + n, 0)).rescaleX(g);
                                    y.call(b(_, l)), D && D(t);
                                }),
                                k)
                            ),
                            o &&
                                $.call(
                                    ((F = r),
                                    function(t) {
                                        var e = F.metaballs,
                                            r = e.blurDeviation,
                                            n = e.colorMatrix,
                                            a = t
                                                .append('defs')
                                                .append('filter')
                                                .attr('id', 'metaballs');
                                        a
                                            .append('feGaussianBlur')
                                            .attr('in', 'SourceGraphic')
                                            .attr('stdDeviation', r)
                                            .attr('result', 'blur'),
                                            a
                                                .append('feColorMatrix')
                                                .attr('in', 'blur')
                                                .attr('mode', 'matrix')
                                                .attr('values', n)
                                                .attr('result', 'contrast'),
                                            a
                                                .append('feBlend')
                                                .attr('in', 'SourceGraphic')
                                                .attr('in2', 'contrast');
                                    })
                                ),
                            $.merge(e).attr('height', function(t) {
                                return (t.length + 1) * u + s.top + s.bottom;
                            }),
                            $.append('g')
                                .classed('viewport', !0)
                                .attr(
                                    'transform',
                                    'translate(' + s.left + ',' + s.top + ')'
                                )
                                .call(U(r, v));
                    })(e);
                }),
                    t._initialize(),
                    z.addEventListener('resize', t._initialize, !0);
            };
        (C.scale = function() {
            return C._scale;
        }),
            (C.filteredData = function() {
                return C._filteredData;
            }),
            (C.destroy = function() {
                var t =
                    0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : function() {};
                z.removeEventListener('resize', C._initialize, !0), t();
            });
        var U = function(w, j) {
            return function(t) {
                var p,
                    v,
                    h,
                    y,
                    a,
                    e,
                    n,
                    o,
                    i,
                    r,
                    u,
                    c,
                    l,
                    f,
                    s,
                    d,
                    _ = P(w || {}, B(I)),
                    g = _.drop.date,
                    b = j.domain().map(function(t) {
                        return new Date(t);
                    }),
                    m = t.data().map(function(t) {
                        if (!Array.isArray(t))
                            throw new Error(
                                'Selection data is not an array. Are you sure you provided an array of arrays to `data` function?'
                            );
                        return t.map(function(t) {
                            if (
                                !t.fullData &&
                                ((t.fullData = _.drops(t)), !t.fullData)
                            )
                                throw new Error(
                                    'No drops data has been found. It looks by default in the `data` property. You can use the `drops` configuration parameter to tune it.'
                                );
                            return (
                                (t.data = t.fullData.filter(function(t) {
                                    return (
                                        (e = g(t)),
                                        (r = b),
                                        (n = Math.min.apply(Math, Y(r))),
                                        (a = Math.max.apply(Math, Y(r))),
                                        W(new Date(e), n, a)
                                    );
                                    var e, r, n, a;
                                })),
                                t
                            );
                        });
                    });
                (C._scale = j),
                    (C._filteredData = m[0]),
                    t
                        .data(m)
                        .call(
                            ((a = I),
                            (e = _),
                            (n = j),
                            (o = C.currentBreakpointLabel),
                            (i = e.label.width),
                            (r = e.axis),
                            (u = r.formats),
                            (c = r.verticalGrid),
                            (l = r.tickPadding),
                            (f = e.locale),
                            (s = e.numberDisplayedTicks),
                            (d = e.line.height),
                            a.timeFormatDefaultLocale(f),
                            function(t) {
                                var e = t.selectAll('.axis').data(function(t) {
                                    return t;
                                });
                                e.exit().remove();
                                var r = a
                                    .axisTop(n)
                                    .tickFormat(function(t) {
                                        return (
                                            (e = t),
                                            (r = u),
                                            (n = a).timeSecond(e) < e
                                                ? n.timeFormat(r.milliseconds)(
                                                      e
                                                  )
                                                : n.timeMinute(e) < e
                                                    ? n.timeFormat(r.seconds)(e)
                                                    : n.timeHour(e) < e
                                                        ? n.timeFormat(
                                                              r.minutes
                                                          )(e)
                                                        : n.timeDay(e) < e
                                                            ? n.timeFormat(
                                                                  r.hours
                                                              )(e)
                                                            : n.timeMonth(e) < e
                                                                ? n.timeWeek(
                                                                      e
                                                                  ) < e
                                                                    ? n.timeFormat(
                                                                          r.days
                                                                      )(e)
                                                                    : n.timeFormat(
                                                                          r.weeks
                                                                      )(e)
                                                                : n.timeYear(
                                                                      e
                                                                  ) < e
                                                                    ? n.timeFormat(
                                                                          r.months
                                                                      )(e)
                                                                    : n.timeFormat(
                                                                          r.year
                                                                      )(e)
                                        );
                                        var e, r, n;
                                    })
                                    .ticks(s[o])
                                    .tickPadding(l);
                                c && r.tickSizeInner(-t.data()[0].length * d),
                                    e
                                        .enter()
                                        .filter(function(t, e) {
                                            return !e;
                                        })
                                        .append('g')
                                        .classed('axis', !0)
                                        .merge(e)
                                        .attr(
                                            'transform',
                                            'translate(' + i + ',0)'
                                        )
                                        .call(r),
                                    e.call(r);
                            })
                        )
                        .call(
                            ((h = _),
                            (y = j),
                            function(t) {
                                var e = h.metaballs,
                                    r = h.label,
                                    n = r.text,
                                    a = r.padding,
                                    o = r.width,
                                    i = h.line,
                                    u = i.color,
                                    c = i.height,
                                    l = h.indicator,
                                    f = t
                                        .selectAll('.drop-line')
                                        .data(function(t) {
                                            return t;
                                        }),
                                    s = f
                                        .enter()
                                        .append('g')
                                        .classed('drop-line', !0)
                                        .attr('fill', u)
                                        .attr('transform', function(t, e) {
                                            return (
                                                'translate(0, ' + e * c + ')'
                                            );
                                        });
                                s
                                    .append('line')
                                    .classed('line-separator', !0)
                                    .attr('x1', o)
                                    .attr('x2', '100%')
                                    .attr('y1', function() {
                                        return c;
                                    })
                                    .attr('y2', function() {
                                        return c;
                                    });
                                var d = s
                                    .append('g')
                                    .classed('drops', !0)
                                    .attr('transform', function() {
                                        return (
                                            'translate(' +
                                            o +
                                            ', ' +
                                            c / 2 +
                                            ')'
                                        );
                                    })
                                    .call(x(h, y));
                                d
                                    .append('rect')
                                    .attr('x', 0)
                                    .attr('y', -h.line.height / 2)
                                    .attr('width', 1)
                                    .attr('height', h.line.height)
                                    .attr('fill', 'transparent'),
                                    e && d.style('filter', 'url(#metaballs)'),
                                    s
                                        .append('text')
                                        .classed('line-label', !0)
                                        .attr('x', o - a)
                                        .attr('y', c / 2)
                                        .attr('dy', '0.25em')
                                        .attr('text-anchor', 'end')
                                        .text(n),
                                    f.selectAll('.line-label').text(n),
                                    f.selectAll('.drops').call(x(h, y)),
                                    l &&
                                        (s
                                            .append('g')
                                            .classed('indicators', !0)
                                            .call(L(h, y)),
                                        f
                                            .selectAll('.indicators')
                                            .call(L(h, y))),
                                    f.exit().remove();
                            })
                        )
                        .call(
                            ((p = _),
                            (v = j),
                            function(t) {
                                var e = p.margin,
                                    r = p.bound,
                                    n = r.format,
                                    a = r.location,
                                    o = r.height,
                                    i = void 0 === o ? e.top : o,
                                    u = p.label.width,
                                    c = p.line.height,
                                    l = t.selectAll('.bound').data(function(t) {
                                        return t;
                                    }),
                                    f = t.data()[0].length,
                                    s = 'end' === a ? c * f + i : -i;
                                l.exit().remove();
                                var d = l
                                    .enter()
                                    .filter(function(t, e) {
                                        return !e;
                                    })
                                    .append('g')
                                    .classed('bound', !0)
                                    .attr(
                                        'transform',
                                        'translate(' + u + ', ' + s + ')'
                                    );
                                d
                                    .append('text')
                                    .classed('start', !0)
                                    .text(n(v.domain()[0])),
                                    d
                                        .append('text')
                                        .classed('end', !0)
                                        .attr('x', v.range()[1])
                                        .attr('text-anchor', 'end')
                                        .text(n(v.domain()[1])),
                                    l
                                        .selectAll('.bound text.start')
                                        .text(n(v.domain()[0])),
                                    l
                                        .selectAll('.bound text.end')
                                        .text(n(v.domain()[1]));
                            })
                        );
            };
        };
        return (C.draw = U), C;
    };
});
//# sourceMappingURL=index.js.map
