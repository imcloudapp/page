(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c5a9365"],{"04b3":function(t,e,n){},"11d7":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Drawer",{attrs:{placement:"left","mask-style":{backgroundColor:"rgba(0,0,0,0.2)"},width:470,closable:!1},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"sidebar-header",attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"btn left",on:{click:function(e){t.show=!1}}},[n("i",{staticClass:"iconfont"},[t._v("")])]),n("div",{staticClass:"btn right"},[n("Dropdown",{attrs:{trigger:"click",placement:"bottom-end"},on:{"on-click":t.dropdown}},[n("i",{staticClass:"iconfont"},[t._v("")]),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",{attrs:{name:"newapp"}},[t._v("添加应用")]),n("DropdownItem",{attrs:{name:"newfolder"}},[t._v("新文件夹")])],1)],1)],1),n("div",{staticClass:"title"},[t._v("抽屉")])]),n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"drawer",style:{height:"100%"},on:{touchstart:function(t){t.stopPropagation()},contextmenu:function(e){return e.preventDefault(),t.mainContextmenu(e)}}},[n("Input",{staticClass:"searchInput",style:{marginBottom:"10px"},attrs:{placeholder:"搜索"},nativeOn:{contextmenu:function(t){t.stopPropagation()}},model:{value:t.filterText,callback:function(e){t.filterText=e},expression:"filterText"}},[""==t.filterText?n("i",{staticClass:"iconfont",attrs:{slot:"suffix"},slot:"suffix"},[t._v("")]):n("i",{staticClass:"iconfont",attrs:{slot:"suffix"},on:{click:function(e){t.filterText=""}},slot:"suffix"},[t._v("")])]),n("el-tree",{directives:[{name:"show",rawName:"v-show",value:""==t.filterText,expression:"filterText==''"}],ref:"drawer",attrs:{data:t.data,"node-key":"_id",indent:10,draggable:"","allow-drop":t.allowDrop,"allow-drag":t.allowDrag,"filter-node-method":t.filterNode,lazy:"","empty-text":"",load:t.getchilds,props:{isLeaf:function(t){return!t.folder}}},on:{"node-drop":t.handleDrop,"node-click":t.href,"node-contextmenu":t.contextmenu},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.node,r=e.data;return n("div",{staticClass:"drawer-item",on:{touchstart:function(e){return t.startLongTouch(e,r,a)},touchmove:t.endLongTouch,touchend:t.endLongTouch}},[r.folder?n("Folder",{attrs:{data:r,node:a,datatime:t.datatime,"rename-id":t.renameId},on:{"update:renameId":function(e){t.renameId=e},"update:rename-id":function(e){t.renameId=e},update:function(e){return t.settime(e)}}}):n("Link",{attrs:{data:r},on:{update:function(e){return t.settime(e)}}})],1)}}])}),n("Result",{attrs:{kw:t.filterText},on:{href:t.href}})],1)])},r=[],i=(n("55dd"),n("20d6"),n("7f7f"),n("cebc")),s=(n("ac6a"),n("96cf"),n("3b8d")),o=(n("4917"),n("2aad")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"folder"},[n("Iconsvg",{attrs:{type:"folder",size:24}}),t.data._id==t.renameId?n("span",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],attrs:{id:"folder_input_"+t.data._id,draggable:""},domProps:{value:t.data.name},on:{blur:t.blur,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enter(e)},click:function(t){t.stopPropagation()},dragstart:function(t){t.preventDefault(),t.stopPropagation()},input:function(e){e.target.composing||t.$set(t.data,"name",e.target.value)}}})]):n("span",{staticClass:"name"},[t._v(t._s(t.data.name))])],1)},c=[],d={props:["data","node","datatime","renameId"],components:{Iconsvg:function(){return n.e("chunk-2d0c7ec5").then(n.bind(null,"534e"))}},inject:["getChildsCount"],data:function(){return{oldname:this.data.name}},methods:{blur:function(){var t=this;if(this.$emit("update:renameId",""),this.oldname!=this.data.name)return""==this.data.name?this.data.name=this.oldname:void this.$api.user.app.update({_id:this.data._id,name:this.data.name}).then(function(e){e.time&&(t.oldname=t.data.name,t.$store.commit("drawer_time",e.time),t.$emit("update",e))})},focus:function(){var t=this;setTimeout(function(){var e=document.getElementById("folder_input_"+t.data._id);e.focus(),e.select(),t.oldname=t.data.name},100)},enter:function(t){t.target.blur()},checkEmpty:function(){var t=this,e=this.data._id;this.getChildsCount(e,function(n){t.node.isLeaf=!n[e]})}},mounted:function(){this.renameId==this.data._id?(this.focus(),this.node.isLeaf=!0):this.checkEmpty()},watch:{renameId:function(t){t==this.data._id&&this.focus()},datatime:function(){this.checkEmpty()}}},l=d,h=n("2877"),f=Object(h["a"])(l,u,c,!1,null,null,null),p=f.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"link"},[t.data.icon&&isNaN(t.data.icon)?n("span",{staticClass:"icon",style:{backgroundImage:"url("+t.sys.osshost+"/appicon/"+t.data.icon+".jpg?x-oss-process=image/resize,w_32)"}}):n("span",{staticClass:"iconfont"},[t._v("")]),n("span",{staticClass:"name"},[t._v(t._s(t.data.name))])])},w=[],v=(n("7514"),n("db49")),g={props:["data"],data:function(){return{sys:v["a"]}},created:function(){this.data.name||this.checkname()},methods:{checkname:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(""==this.data.name){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.$api.store.find({url:this.data.href});case 4:e=t.sent,e&&(this.data.icon=e.icon||"",this.data.name=e.name||e.title||"",this.data.name&&this.update());case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),update:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.user.app.update({_id:this.data._id,href:this.data.href,icon:this.data.icon,name:this.data.name});case 2:e=t.sent,this.$emit("update",e);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},x=g,k=Object(h["a"])(x,m,w,!1,null,null,null),b=k.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.kw,expression:"kw"},{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"searchResult"},[n("el-tree",{attrs:{data:t.data,"node-key":"_id",indent:10,"empty-text":""},on:{"node-click":t.href},scopedSlots:t._u([{key:"default",fn:function(t){t.node;var e=t.data;return n("div",{staticClass:"drawer-item"},[n("Link",{attrs:{data:e}})],1)}}])}),0!=t.data.length||t.loading?t._e():n("div",{staticClass:"empty"},[t._v("未搜索到结果")])],1)},$=[],C=(n("386d"),{components:{Link:b},props:{kw:{type:String,default:"",timer:null}},data:function(){return{data:[],loading:!1}},methods:{href:function(t){this.$emit("href",t)},search:function(){var t=this;this.$api.user.app.list({kw:this.kw}).then(function(e){t.loading=!1,e.err||(t.data=e.data)})}},watch:{kw:function(t){this.timer&&clearTimeout(this.timer),t?(this.loading=!0,this.timer=setTimeout(this.search,500)):this.data=[]}}}),y=C,I=Object(h["a"])(y,_,$,!1,null,null,null),R=I.exports,O=!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),T={components:{Folder:p,Link:b,Result:R},provide:function(){return{getChildsCount:this.getChildsCount}},data:function(){return{show:!1,data:[],filterText:"",time:this.$store.state.drawer_time,datatime:0,renameId:"",loading:!1}},methods:{getdata:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$api.user.app.list({drawer:!0});case 3:if(e=t.sent,this.loading=!1,!e.err){t.next=7;break}return t.abrupt("return",e.showError());case 7:this.data=e.data,this.datatime=Date.now();case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getchilds:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,n){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e.data.folder){t.next=2;break}return t.abrupt("return",n([]));case 2:return t.next=4,this.$api.user.app.list({drawer:!0,pid:e.data._id});case 4:if(a=t.sent,!a.err){t.next=7;break}return t.abrupt("return",n([]));case 7:n(a.data);case 8:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),getChildsCount:function(t,e){var n=this;this.folderIds||(this.folderIds=[]),this.folderCbs||(this.folderCbs=[]),this.folderIds.push(t),this.folderCbs.push(e),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$api.user.app.childs({ids:n.folderIds.join(",")});case 2:if(e=t.sent,!e.err){t.next=5;break}return t.abrupt("return");case 5:n.folderCbs.forEach(function(t){t(e)}),n.folderIds=null,n.folderCbs=null;case 8:case"end":return t.stop()}},t)})),500)},checknew:function(){this.time!=this.drawer_time&&(this.time=this.drawer_time,this.getdata())},href:function(t){t.folder||(this.show=!1,window.open(t.href))},newfolder:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,n){var a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.user.app.add({name:"新文件夹",drawer:!0,folder:!0,pid:e});case 2:if(a=t.sent,!a.err){t.next=5;break}return t.abrupt("return");case 5:r={_id:a._id,name:"新文件夹",sort:a.time,folder:!0,drawer:!0},this.renameId=r._id,e?(r.pid=e,this.$refs.drawer.append(r,e)):this.data.push(r),this.settime(a),n&&n();case 10:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),newapp:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,n){var a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$fnModal.addbox({done:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(r){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r.sort=Date.now(),e&&(r.pid=e),r.drawer=!0,t.next=5,a.$api.user.app.add(r);case 5:if(i=t.sent,!i.err){t.next=8;break}return t.abrupt("return",a.$Message.error("添加失败"));case 8:r._id=i._id,e?(r.pid=e,a.$refs.drawer.append(r,e)):a.data.push(r),a.$Message.success("添加成功"),a.settime(i),n&&n();case 13:case"end":return t.stop()}},t)}));function r(e){return t.apply(this,arguments)}return r}()});case 1:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),contextmenu:function(t,e,n){var a=this,r=[];r=e.folder?[{text:"添加应用",click:function(){a.newapp(e._id,function(){n.expanded||t.target.click()})}},{text:"新文件夹",click:function(){a.newfolder(e._id,function(){n.expanded||t.target.click()})}},{text:"重命名",click:function(){a.renameId=e._id}},{text:this.$t("w46"),click:function(){return a.del(e)}}]:[{text:"取出",click:function(){o["b"].tran(e,!1,function(t){a.settime(t)}),a.$refs.drawer.remove(e)}},{line:!0},{text:this.$t("w45"),click:function(){a.$fnModal.addbox({drawer:!0,data:Object(i["a"])({},e),done:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n.sort=Date.now(),t.next=3,a.$api.user.app.update({_id:n._id,href:n.href,icon:n.icon,name:n.name});case 3:if(r=t.sent,!r.err){t.next=6;break}return t.abrupt("return",a.$Message.error("修改失败"));case 6:a.$set(e,"href",n.href),a.$set(e,"icon",n.icon),a.$set(e,"name",n.name),a.$Message.success("修改成功"),a.settime(r);case 11:case"end":return t.stop()}},t)}));function n(e){return t.apply(this,arguments)}return n}()})}},{text:this.$t("w46"),click:function(){return a.del(e)}}],this.$contextmenu({event:t,items:r})},mainContextmenu:function(t){var e=this;this.$contextmenu({event:t,items:[{text:"添加应用",click:function(){return e.newapp()}},{text:"新文件夹",click:function(){return e.newfolder()}}]})},dropdown:function(t){switch(t){case"newapp":return this.newapp();case"newfolder":return this.newfolder()}},handleDrop:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,n,a,r){var i,s,o,u,c,d,l;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i="",s=[],"inner"==a?(i=n.data._id,s=n.childNodes):(i=n.data.pid||"",s=n.parent.childNodes),o=e.data._id,u=s.findIndex(function(t){return t.data._id==o}),c=Date.now(),d=1==s.length?1e4:u==s.length-1?c:0==u?s[u+1].data.sort/2:(s[u-1].data.sort+s[u+1].data.sort)/2,s[u].data.sort=d,i?s[u].data.pid=i:delete s[u].data.pid,s[u].isLeaf=e.isLeaf,t.next=11,this.$api.user.app.update({_id:s[u].data._id,pid:i,sort:d});case 11:if(l=t.sent,!l.err){t.next=14;break}return t.abrupt("return",this.$Message.error("操作失败"));case 14:this.settime(l);case 15:case"end":return t.stop()}},t,this)}));function e(e,n,a,r){return t.apply(this,arguments)}return e}(),allowDrop:function(t,e,n){return"inner"!=n||e.data.folder},allowDrag:function(t){return!0},filterNode:function(t,e){return!t||(t=t.toLocaleLowerCase(),-1!==e.name.toLocaleLowerCase().indexOf(t)||e.href&&-1!==e.href.toLocaleLowerCase().indexOf(t))},del:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.user.app.del({_id:e._id});case 2:if(n=t.sent,!n.err){t.next=5;break}return t.abrupt("return",this.$Message.error("删除失败"));case 5:this.$refs.drawer.remove(e),this.$Message.success("删除成功"),this.settime(n);case 8:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),settime:function(t){t&&t.time&&(this.$store.commit("drawer_time",t.time),this.time=t.time)},startLongTouch:function(t,e,n){var a=this;O&&(clearTimeout(this.timeOutEvent),this.timeOutEvent=setTimeout(function(){a.contextmenu(t,e,n)},600))},endLongTouch:function(){O&&clearTimeout(this.timeOutEvent)}},computed:{drawer_time:function(){return this.$store.state.drawer_time}},watch:{show:function(t){this.$emit("visible",t),t?this.data.length?this.checknew():this.getdata():this.filterText=""}}},L=T,j=(n("d3b9"),Object(h["a"])(L,a,r,!1,null,null,null));e["default"]=j.exports},d3b9:function(t,e,n){"use strict";var a=n("04b3"),r=n.n(a);r.a}}]);