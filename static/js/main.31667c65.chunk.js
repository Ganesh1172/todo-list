(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),o=n(6),i=n.n(o),r=n(1),c=n(2),u=n(4),l=n(3),h=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"note",onClick:this.props.deleteMethod},this.props.text)}}]),n}(a.Component),d=(n(12),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).handleKeyPress=function(t){"Enter"===t.key&&(a.state.notes.push(a.state.noteText),a.setState({noteText:""}))},a.state={noteText:"",notes:[]},a}return Object(c.a)(n,[{key:"updateNoteText",value:function(t){this.setState({noteText:t.target.value})}},{key:"addNote",value:function(){""!==this.state.noteText&&(this.state.notes.push(this.state.noteText),this.setState({noteText:""}),this.textInput.focus())}},{key:"deleteNote",value:function(t){var e=this.state.notes;e.splice(t,1),this.setState({notes:e})}},{key:"render",value:function(){var t=this,e=this.state.notes.map((function(e,n){return s.a.createElement(h,{key:n,text:e,deleteMethod:function(){return t.deleteNote(n)}})}));return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"header"},"React Todo Application"),e,s.a.createElement("div",{className:"btn",onClick:this.addNote.bind(this)},"+"),s.a.createElement("input",{type:"text",ref:function(e){t.textInput=e},className:"textInput",value:this.state.noteText,onChange:function(e){return t.updateNoteText(e)},onKeyPress:this.handleKeyPress.bind(this)}))}}]),n}(a.Component));i.a.render(s.a.createElement(d,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.31667c65.chunk.js.map