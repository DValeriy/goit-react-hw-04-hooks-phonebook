(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={title:"App_title__3nx5W"}},14:function(t,e,n){t.exports={list:"ContactList_list__1pVIM"}},15:function(t,e,n){t.exports={item:"ContactListItem_item__1Z6fE"}},16:function(t,e,n){t.exports={input:"Filter_input__1kYm0"}},2:function(t,e,n){t.exports={form:"Form_form__1QDAO",label:"Form_label__3Sqih",button:"Form_button__2mFew"}},23:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),i=(n(23),n(17)),s=n(4),l=n(5),u=n(8),m=n(7),b=n(10),d=n.n(b),h=n(13),j=n.n(h),f=n(6),p=n(2),O=n.n(p),v=n(0),x=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.cbOnSubmit=function(e){e.preventDefault(),(0,t.props.handleSubmitForm)(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("form",{onSubmit:this.cbOnSubmit,className:O.a.form,children:[Object(v.jsxs)("label",{className:O.a.label,children:["Name",Object(v.jsx)("input",{onChange:this.handleChange,value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(v.jsxs)("label",{className:O.a.label,children:["Number",Object(v.jsx)("input",{onChange:this.handleChange,value:this.state.number,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(v.jsx)("button",{className:O.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=x,_=n(11),S=n(18),g=n(14),y=n.n(g),F=n(15),N=n.n(F),A=function(t){var e=t.name,n=t.number,a=t.removeItem;return Object(v.jsxs)("li",{className:N.a.item,children:[Object(v.jsx)("span",{children:e}),Object(v.jsx)("span",{children:n}),Object(v.jsx)("button",{type:"button",onClick:function(){a(e)},children:"Remove"})]})},k=["id"],w=function(t){var e=t.contacts,n=t.removeItem,a=e.map((function(t){var e=t.id,a=Object(S.a)(t,k);return Object(v.jsx)(A,Object(_.a)(Object(_.a)({},a),{},{removeItem:n}),e)}));return Object(v.jsx)("ul",{className:y.a.list,children:a})},I=n(16),L=n.n(I),J=function(t){var e=t.handleFilter,n=t.value;return Object(v.jsxs)("div",{className:L.a.input,children:[Object(v.jsx)("p",{children:"Find contacts by name"}),Object(v.jsx)("input",{type:"text",name:"filterWord",value:n,onChange:e})]})},z=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleSubmitForm=function(e){var n=e.name,a=e.number;t.state.contacts.some((function(t){return t.name.toLocaleLowerCase()===n.toLocaleLowerCase()}))?alert("".concat(n," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[{name:n,number:a,id:j.a.generate()}])}}))},t.handleFilter=function(e){var n=e.target.value;t.setState({filter:n})},t.removeItem=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.name!==e}))}}))},t.filteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return a?n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())})):n},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));this.setState({contacts:t||[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;e.contacts!==n&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state,e=(t.contacts,t.filter);return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("h1",{className:d.a.title,children:"Phonebook"}),Object(v.jsx)(C,{handleSubmitForm:this.handleSubmitForm}),Object(v.jsx)("h2",{className:d.a.title,children:"Contacts"}),Object(v.jsx)(J,{handleFilter:this.handleFilter,value:e}),Object(v.jsx)(w,{contacts:this.filteredContacts(),removeItem:this.removeItem})]})}}]),n}(a.Component),D=z;o.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(D,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.99b8fa54.chunk.js.map