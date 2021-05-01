(this["webpackJsonpmy-react-cities"]=this["webpackJsonpmy-react-cities"]||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){},19:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r.n(n),a=r(8),s=r.n(a),o=(r(13),r(14),r(3)),i=r.n(o),u=r(5),l=r(4),d="https://tnobile.github.io/data-world-cities/",j=function(){var e=Object(u.a)(i.a.mark((function e(t){var r,n,c,a,s=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:100,e.next=3,fetch(d+t);case 3:if((n=e.sent).ok){e.next=7;break}throw c="An error has occured: ".concat(n.status),new Error(c);case 7:return e.next=9,n.json();case 9:if(a=e.sent,!(r<=0)){e.next=12;break}return e.abrupt("return",a);case 12:return e.abrupt("return",a.filter((function(e,t){return t<r})));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=r(1),h=r(6),p=r(0),O=function(e){var t=e.columns,r=e.data,c=Object(h.useTable)({columns:t,data:r},h.useFilters,h.useSortBy),a=c.getTableProps,s=c.getTableBodyProps,o=c.headerGroups,i=c.rows,u=c.prepareRow,d=c.setFilter,j=Object(n.useState)(""),O=Object(l.a)(j,2),f=O[0],g=O[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",{value:f,onChange:function(e){var t=e.target.value||void 0;d("city",t),g(t)},placeholder:"Search name"}),Object(p.jsxs)("table",Object(b.a)(Object(b.a)({},a()),{},{children:[Object(p.jsx)("thead",{children:o.map((function(e){return Object(p.jsx)("tr",Object(b.a)(Object(b.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(p.jsx)("th",Object(b.a)(Object(b.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{className:e.isSorted?e.isSortedDesc?"sort-desc":"sort-asc":"",children:e.render("Header")}))}))}))}))}),Object(p.jsx)("tbody",Object(b.a)(Object(b.a)({},s()),{},{children:i.map((function(e,t){return u(e),Object(p.jsx)("tr",Object(b.a)(Object(b.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(p.jsx)("td",Object(b.a)(Object(b.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))]})},f=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)("gb"),s=Object(l.a)(a,2),o=s[0],d=s[1];Object(n.useEffect)((function(){Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(o,100);case 2:t=e.sent,console.log("got ".concat(t.length,"  for ").concat(o)),c(t);case 5:case"end":return e.stop()}}),e)})))().catch((function(e){c([]),console.error("".concat(e.name,":").concat(e.message))}))}),[o]);var b=Object(n.useMemo)((function(){return[{Header:"Cities",columns:[{Header:"Name",accessor:"city"},{Header:"Name(admin)",accessor:"admin_name"},{Header:"Country",accessor:"country"},{Header:"Code",accessor:"iso2",id:"flag",Cell:function(e){var t=e.cell.value;return Object(p.jsx)("span",{className:"badge",children:t})}},{Header:"Flag",accessor:"iso2",Cell:function(e){return function(e){switch(e){case"ES":return"\ud83c\uddea\ud83c\uddf8";case"JP":return"\ud83c\uddef\ud83c\uddf5";case"GB":return"\ud83c\uddec\ud83c\udde7";case"AR":return"\ud83c\udde6\ud83c\uddf7";case"CN":return"\ud83c\udde8\ud83c\uddf3";case"CH":return"\ud83c\udde8\ud83c\udded";case"IT":return"\ud83c\uddee\ud83c\uddf9";case"FR":return"\ud83c\uddeb\ud83c\uddf7";case"US":return"\ud83c\uddfa\ud83c\uddf8";case"DE":return"\ud83c\udde9\ud83c\uddea";default:return e}}(e.cell.value)}},{Header:"Capital",accessor:"capital"}]},{Header:"Details",columns:[{Header:"Population",accessor:"population"},{Header:"Population(Proper)",accessor:"population_proper"},{Header:"Latitude",accessor:"lat"},{Header:"Longitudo",accessor:"lng"}]}]}),[]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Country/City Data"}),Object(p.jsx)("a",{href:"https://tnobile.github.io/data-world-cities/",children:"source"})," ",Object(p.jsxs)("select",{name:"country",defaultValue:o,onChange:function(e){d(e.target.value)},children:[Object(p.jsx)("option",{value:"jp",name:"jp",children:"Japan"}),Object(p.jsx)("option",{value:"gb",name:"gb",children:"UK"}),Object(p.jsx)("option",{value:"ch",name:"ch",children:"Switzerland"}),Object(p.jsx)("option",{value:"ar",name:"ar",children:"Argentina"}),Object(p.jsx)("option",{value:"cn",name:"cn",children:"China"}),Object(p.jsx)("option",{value:"de",name:"de",children:"Germany"}),Object(p.jsx)("option",{value:"es",name:"es",children:"Spain"}),Object(p.jsx)("option",{value:"fr",name:"fr",children:"France"})]})]}),r&&r.length>0&&Object(p.jsx)(O,{columns:b,data:r}),r&&0===r.length&&Object(p.jsxs)("h2",{children:["No data for ",o]})," "]})};r(18);var g=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(f,{})})},m=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,20)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root")),m()}},[[19,1,2]]]);
//# sourceMappingURL=main.c407b82a.chunk.js.map