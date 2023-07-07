(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [862],
  {
    4071: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[episode]",
        function () {
          return n(5547);
        },
      ]);
    },
    5649: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return i;
        },
      });
      var s = n(5893),
        l = n(6010);
      function i(e) {
        let { className: t, children: n, ...i } = e;
        return (0, s.jsx)("div", {
          className: (0, l.Z)("lg:px-8", t),
          ...i,
          children: (0, s.jsx)("div", {
            className: "lg:max-w-4xl",
            children: (0, s.jsx)("div", {
              className: "mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0",
              children: n,
            }),
          }),
        });
      }
    },
    9843: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return i;
        },
      });
      var s = n(5893);
      let l = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      function i(e) {
        let { date: t, ...n } = e;
        return (0, s.jsx)("time", {
          dateTime: t.toISOString(),
          ...n,
          children: l.format(t),
        });
      }
    },
    5547: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return m;
          },
          default: function () {
            return u;
          },
        });
      var s = n(5893),
        l = n(7294),
        i = n(9008),
        r = n.n(i),
        a = n(1801),
        o = n(5649),
        c = n(9843),
        d = n(7304),
        m = !0;
      function u(e) {
        let { episode: t } = e,
          n = new Date(t.published),
          i = (0, l.useMemo)(
            () => ({
              title: t.title,
              audio: { src: t.audio.src, type: t.audio.type },
              link: `/${t.id}`,
            }),
            [t]
          ),
          m = (0, a.x)(i);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(r(), {
              children: [
                (0, s.jsx)("title", { children: `${t.title} - Their Side` }),
                (0, s.jsx)("meta", {
                  name: "description",
                  content: t.description,
                }),
              ],
            }),
            (0, s.jsx)("article", {
              className: "py-16 lg:py-36",
              children: (0, s.jsxs)(o.W, {
                children: [
                  (0, s.jsxs)("header", {
                    className: "flex flex-col",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex items-center gap-6",
                        children: [
                          (0, s.jsx)(d.J, { player: m, size: "large" }),
                          (0, s.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                              (0, s.jsx)("h1", {
                                className:
                                  "mt-2 text-4xl font-bold text-slate-900",
                                children: t.title,
                              }),
                              (0, s.jsx)(c.J, {
                                date: n,
                                className:
                                  "order-first font-mono text-sm leading-7 text-slate-500",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)("p", {
                        className:
                          "ml-24 mt-3 text-lg font-medium leading-8 text-slate-700",
                        children: t.description,
                      }),
                    ],
                  }),
                  (0, s.jsx)("hr", { className: "my-12 border-gray-200" }),
                  (0, s.jsx)("div", {
                    className:
                      "prose prose-slate mt-14 [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\\2013\\20'] [&>ul]:pl-5",
                    dangerouslySetInnerHTML: { __html: t.content },
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    9008: function (e, t, n) {
      e.exports = n(2636);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 4071));
    }),
      (_N_E = e.O());
  },
]);
