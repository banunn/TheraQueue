(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"09fc":function(t,e,s){},"0a49":function(t,e,s){var n=s("9b43"),a=s("626a"),i=s("4bf8"),o=s("9def"),r=s("cd1c");t.exports=function(t,e){var s=1==t,u=2==t,c=3==t,l=4==t,d=6==t,v=5==t||d,f=e||r;return function(e,r,p){for(var m,_,h=i(e),g=a(h),C=n(r,p,3),b=o(g.length),w=0,q=s?f(e,b):u?f(e,0):void 0;b>w;w++)if((v||w in g)&&(m=g[w],_=C(m,w,h),t))if(s)q[w]=_;else if(_)switch(t){case 3:return!0;case 5:return m;case 6:return w;case 2:q.push(m)}else if(l)return!1;return d?-1:c||l?l:q}}},"0ccd":function(t,e,s){"use strict";var n=s("bf4c"),a=s.n(n);a.a},1088:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"request-page"},[s("header",{staticClass:"tools"},[s("div",[s("button",{staticClass:"button is-info is-rounded",on:{click:function(e){t.$router.go(-1)}}},[s("i",{staticClass:"material-icons"},[t._v("arrow_back")]),t._v(" Go Back")])]),s("div",[s("div",{staticClass:"select"},[t.statusTypes?s("select",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.status=e.target.multiple?s:s[0]},t.changeStatus]}},t._l(t.statusTypes,function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})):t._e()]),s("button",{staticClass:"button is-danger",attrs:{title:"Delete Request"},on:{click:t.deleteRequest}},[t._m(0)])])]),s("div",{staticClass:"content"},[s("div",{staticClass:"detail"},[s("header",{staticClass:"detail-head"},[t._v("\n            Student\n        ")]),t.student?s("div",{staticClass:"detail-content"},[s("div",{staticClass:"d-content"},[s("h3",[t._v(t._s(t.student.firstName+" "+t.student.lastName)+"                 "),s("span",{staticClass:"tag",class:"Yes"==t.student.onEdPlan?"is-success":"is-danger"},[t._v(t._s("Yes"==t.student.onEdPlan?"In Ed Plan":"Not In Ed Plan"))])]),s("widget",{attrs:{"w-title":"Has Related Services: "+t.student.hasServices}},[s("div",{staticClass:"tags"},t._l(t.student.services,function(e,n){return s("span",{key:n,staticClass:"tag"},[t._v(t._s(e))])}))]),s("widget",{attrs:{"w-title":"Location"}},[s("div",[t._v(t._s(t.student.location.campus.name))]),s("div",[t._v(t._s(t.student.location.description))])]),s("widget",{staticClass:"dates",attrs:{"w-title":"Important Dates"}},[s("ul",t._l(t.student.dates,function(e,n){return s("li",{key:n},[s("span",[t._v(t._s(e.type))]),t._v(":  "),s("span",[t._v(t._s(e.date?e.date:"No provided date"))])])}))])],1),s("widget",{attrs:{"w-title":"Comments"}},[s("p",[t._v(t._s(t.student.comments))])])],1):t._e()]),t.holder?s("div",{staticClass:"detail"},[s("header",{staticClass:"detail-head"},[t._v("File-holder")]),s("div",{staticClass:"detail-content"},[s("div",{staticClass:"d-content"},[s("h3",[t._v(t._s(t.holder.firstName+" "+t.holder.lastName))]),s("widget",{attrs:{"w-title":"Location"}},[s("div",[t._v(t._s(t.holder.location.campus.name))]),s("div",[t._v(t._s(t.holder.location.description))])])],1),s("widget",{attrs:{"w-title":"Comments"}},[s("p",[t._v(t._s(t.holder.comments))])])],1)]):t._e()]),s("note-panel")],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"material-icons"},[t._v("delete")])])}],i=(s("20d6"),s("d5c7")),o=s("56d7"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"note-panel",class:{active:t.open}},[s("div",{staticClass:"panel-head",on:{click:function(e){t.open=!t.open}}},[s("span",[t._v("Notes")]),s("i",{staticClass:"material-icons"},[t._v(t._s(t.open?"keyboard_arrow_up":"keyboard_arrow_down"))])]),t.open?s("div",{staticClass:"content"},[s("note-input",{attrs:{"note-id":t.noteId}}),s("note-list",{attrs:{notes:t.notes,"note-id":t.noteId}})],1):t._e()])},u=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"note-input"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note,expression:"note"}],staticClass:"textarea",attrs:{placeholder:"Add a note"},domProps:{value:t.note},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addNote(e):null},input:function(e){e.target.composing||(t.note=e.target.value)}}})])},l=[],d={name:"note-input",props:{noteId:String},data:function(){return{note:""}},methods:{addNote:function(){var t=this,e={author:"",date:new Date,note:t.note},s=o["db"].collection("requests").doc(t.noteId).collection("notes");s.add(e).then(function(){t.note=""})}}},v=d,f=(s("863e"),s("2877")),p=Object(f["a"])(v,c,l,!1,null,null,null);p.options.__file="input.vue";var m=p.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"note-list"},t._l(t.notes,function(t,e){return s("note-item",{key:e,attrs:{note:t}})}))},g=[],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"note-wrap"},[s("div",{staticClass:"note from-them"},[t._v("\n    "+t._s(t.note.note)+"\n")]),s("div",{staticClass:"date"},[s("span",[t._v("\n    "+t._s(t._f("moment")(t.note.date.toDate(),"lll"))+"  \n    ")])])])},b=[],w={name:"note",props:{note:Object}},q=w,y=(s("be38"),Object(f["a"])(q,C,b,!1,null,"bf3c90ce",null));y.options.__file="note.vue";var I=y.exports,$={name:"note-list",props:{notes:Array,noteId:String},components:{noteItem:I}},x=$,k=(s("c66c"),Object(f["a"])(x,h,g,!1,null,"77dab7dc",null));k.options.__file="list.vue";var E=k.exports,A={name:"note-panel",props:{},components:{noteInput:m,noteList:E},computed:{noteId:function(){return this.$route.params.id}},data:function(){return{open:!1,notes:[]}},firestore:function(){var t=this;return{notes:o["db"].collection("requests").doc(t.noteId).collection("notes").orderBy("date","desc")}}},N=A,O=(s("221d"),Object(f["a"])(N,r,u,!1,null,null,null));O.options.__file="panel.vue";var P=O.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"widget"},[s("header",[t._v(t._s(t.wTitle))]),s("div",{staticClass:"widget-body"},[t._t("default")],2)])},j=[],R={name:"Widget",props:{wTitle:String}},T=R,L=(s("4458"),Object(f["a"])(T,S,j,!1,null,null,null));L.options.__file="widget.vue";var D=L.exports,F={name:"Request-Item-Page",data:function(){return{request:{},status:null,statusTypes:i["statusTypes"]}},components:{notePanel:P,widget:D},computed:{itemId:function(){return this.$route.params.id},student:function(){return this.request.student},holder:function(){return this.request.fileHolder}},methods:{setInitialStatus:function(){var t=this,e=this.request.status,s=_.findIndex(t.statusTypes,function(t){return t.id==e});console.log(s),s>-1&&(this.status=t.statusTypes[s].id)},changeStatus:function(){var t=this,e=o["db"].collection("requests").doc(t.$route.params.id);e.update({status:t.status}).then(function(e){console.log(e),console.log("Update Successful"),t.$toast.open({message:"Successfully Changed Status!",type:"is-success"})})},deleteRequest:function(){var t=this,e=o["db"].collection("requests").doc(t.$route.params.id),s=confirm("You are about to delete this request! Would you like to proceed?");1==s&&e.delete().then(function(){console.log("deleted record"),t.$router.go(-1)})},getData:function(){var t=this,e=o["db"].collection("requests").doc(t.$route.params.id);e.get().then(function(e){e.exists?(console.log("Document data:",e.data()),t.request=e.data()):console.log("No such document!")}).catch(function(t){console.log("Error getting document:",t)})}},watch:{request:function(t,e){t&&(console.log(t),this.setInitialStatus())}},created:function(){this.getData()}},Y=F,W=(s("93a2"),Object(f["a"])(Y,n,a,!1,null,"55dc6c79",null));W.options.__file="Request-Item.vue";e["default"]=W.exports},1169:function(t,e,s){var n=s("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"19dd":function(t,e,s){},"20d6":function(t,e,s){"use strict";var n=s("5ca1"),a=s("0a49")(6),i="findIndex",o=!0;i in[]&&Array(1)[i](function(){o=!1}),n(n.P+n.F*o,"Array",{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")(i)},"221d":function(t,e,s){"use strict";var n=s("df4b"),a=s.n(n);a.a},"2d66":function(t,e,s){},"2fef":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"auth-page"},[s("div",{staticClass:"wrap"},[s("div",{staticClass:"form"},[s("header",[t._v("Therapist Login")]),s("login-form")],1),s("div",{staticClass:"request"},[s("header",[t._v("Fileholder Request")]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"}),s("button",{staticClass:"button is-primary is-fullwidth",on:{click:function(e){t.$router.push("/request")}}},[t._v("Submit New Request")])])])])])},a=[],i=(s("cadf"),s("551c"),s("097d"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loggedInUser?s("div",[s("p",[t._v("You are logged in")]),s("button",{staticClass:"button",on:{click:t.logOut}},[t._v("Log Out")])]):s("div",{staticClass:"form"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("email")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"input",attrs:{type:"email",placeholder:"email@address.com"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),s("p",{staticClass:"help"},[t._v("enter your full email")])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("password")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.pass,expression:"user.pass"}],staticClass:"input",attrs:{type:"password",placeholder:"password"},domProps:{value:t.user.pass},on:{input:function(e){e.target.composing||t.$set(t.user,"pass",e.target.value)}}})])]),s("div",{staticClass:"field is-grouped"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-link",on:{click:t.login}},[t._v("Log In")])]),s("p",{staticClass:"help"},[t._v(t._s(t.msg))])])])}),o=[],r=s("56d7"),u={name:"Login-Form",data:function(){return{msg:"",user:{email:"",pass:""}}},methods:{login:function(){var t=this.user,e=this;r["auth"].signInWithEmailAndPassword(t.email,t.pass).then(function(){e.$toast.open({message:"Welcome! You've signed in!",type:"is-success"})}).catch(function(t){e.msg=t})},reset:function(){this.user={email:"",pass:""}},logOut:function(){var t=this;r["auth"].signOut().then(function(){t.$toast.open({message:"You are no longer logged in. ",type:"is-success"}),t.$router.push("/queue")}).catch(function(e){t.$toast.open({message:"There was an error",type:"is-danger"})})}},computed:{loggedInUser:function(){return this.$store.state.user}}},c=u,l=(s("6f9c"),s("2877")),d=Object(l["a"])(c,i,o,!1,null,null,null);d.options.__file="login.vue";var v=d.exports,f={name:"Auth-View",components:{loginForm:v}},p=f,m=(s("0ccd"),Object(l["a"])(p,n,a,!1,null,"6a40ec46",null));m.options.__file="Auth.vue";e["default"]=m.exports},"34d5":function(t,e,s){},"3a29":function(t,e,s){},4334:function(t,e,s){"use strict";var n=s("19dd"),a=s.n(n);a.a},4458:function(t,e,s){"use strict";var n=s("6b29"),a=s.n(n);a.a},"4a14":function(t,e,s){"use strict";var n=s("9a16"),a=s.n(n);a.a},"6b29":function(t,e,s){},"6f9c":function(t,e,s){"use strict";var n=s("82a8"),a=s.n(n);a.a},7514:function(t,e,s){"use strict";var n=s("5ca1"),a=s("0a49")(5),i="find",o=!0;i in[]&&Array(1)[i](function(){o=!1}),n(n.P+n.F*o,"Array",{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")(i)},"82a8":function(t,e,s){},"863e":function(t,e,s){"use strict";var n=s("34d5"),a=s.n(n);a.a},"93a2":function(t,e,s){"use strict";var n=s("a19a"),a=s.n(n);a.a},"9a16":function(t,e,s){},"9b31":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"queue-page"},[s("div",[s("header",[t._v("New Requests")]),s("queue-list",{attrs:{items:t.newItems}})],1),s("div",[s("header",[t._v("In Progress")]),s("queue-list",{attrs:{items:t.inProgressItems}})],1),s("div",[s("header",[t._v("Completed Requests")]),s("queue-list",{attrs:{items:t.completedItems}})],1)])},a=[],i=(s("cadf"),s("551c"),s("097d"),s("56d7")),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"request-list"},t._l(t.items,function(t,e){return s("list-item",{key:e,attrs:{request:t}})}))},r=[],u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"request box"},[s("div",{staticClass:"content"},[s("div",{staticClass:"detail"},[s("div",{staticClass:"name"},[s("strong",[t._v(t._s(t.name))])]),s("div",{staticClass:"name"},[t._v(t._s(t.request.student.location.campus.name))]),s("div",{staticClass:"date"},[t._v("Scheduled Meeting: "+t._s(t.meetingDate))])]),s("div",{staticClass:"action"},[s("button",{staticClass:"button",on:{click:t.go}},[t._v("View")])])])])},c=[],l=(s("7514"),{name:"request-item",props:{request:Object},computed:{last:function(){return this.request.student.lastName.charAt(0)},name:function(){return this.last?this.request.student.firstName+" "+this.last+".":""},meetingDate:function(){var t=this.request.student.dates,e=_.find(t,function(t){return"Scheduled Meeting"==t.type});return e?this.$moment(e.date).format("LL"):null}},methods:{go:function(){var t=this;this.$router.push({name:"RequestItem",params:{id:t.request.id}})}}}),d=l,v=(s("4334"),s("2877")),f=Object(v["a"])(d,u,c,!1,null,"244c9346",null);f.options.__file="item.vue";var p=f.exports,m={name:"request-list",components:{listItem:p},props:{items:Array}},h=m,g=(s("4a14"),Object(v["a"])(h,o,r,!1,null,"71e4399b",null));g.options.__file="list.vue";var C=g.exports,b={name:"Queue-Page",data:function(){return{requests:[],newItems:[],inProgressItems:[],completedItems:[]}},components:{queueList:C},firestore:{newItems:i["db"].collection("requests").where("status","==",1),inProgressItems:i["db"].collection("requests").where("status","==",2),completedItems:i["db"].collection("requests").where("status","==",3)}},w=b,q=(s("a471"),Object(v["a"])(w,n,a,!1,null,"5099c59f",null));q.options.__file="Queue.vue";e["default"]=q.exports},a19a:function(t,e,s){},a471:function(t,e,s){"use strict";var n=s("3a29"),a=s.n(n);a.a},be38:function(t,e,s){"use strict";var n=s("09fc"),a=s.n(n);a.a},bf4c:function(t,e,s){},c66c:function(t,e,s){"use strict";var n=s("2d66"),a=s.n(n);a.a},cd1c:function(t,e,s){var n=s("e853");t.exports=function(t,e){return new(n(t))(e)}},df4b:function(t,e,s){},e853:function(t,e,s){var n=s("d3f4"),a=s("1169"),i=s("2b4c")("species");t.exports=function(t){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)||(e=void 0),n(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?Array:e}},f820:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("h1",[t._v("This is an about page")])])}],i=s("2877"),o={},r=Object(i["a"])(o,n,a,!1,null,null,null);r.options.__file="About.vue";e["default"]=r.exports}}]);
//# sourceMappingURL=about.7737fef4.js.map