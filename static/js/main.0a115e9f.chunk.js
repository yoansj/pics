(this.webpackJsonppics=this.webpackJsonppics||[]).push([[0],{50:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAACa0lEQVRogd3a3UpUURjG8d/sgzQIoW6gL0xPMiuxoA6ikzSqO+iKKknqKrqJOvCD6NOjMiIUO0uNPhQEpQ7WTOmkzbj3ctbSPzwwsAf286zN3mut9101cenHNZzDGZzAURypX/+JZcxjFjN4Vv+dDYMYw2f8KqkFPBAGIgk13Mb0DgaraAq36vfoCMN4sQdBmvUcQ3sZ5DAeYaMDYRrawDi6Y4fpE17gTgVp1hv0xgpzCYsJwzS0jKtVw4xiNYMwDa1gpGyYy8K8kTpEs1aVeFJ9+JqB+Z20ZBfvVDdeZ2C6lWaEL29LHmdgtl09bBVmCOsZGG1XG8JEvy01nVkBxNa0HZZJdzIwV1aj2wXai4VmpzTZHOZ8BqaqagCKeqC7zQn3IVsyVNmc5aJ5wtehH+8ijFAO9BZCDeCgcL2QcB+/BwwUwkL0oNBX4GRqFxE5VaAntYuI9NSwhkOpnURirWj9n/1FIWyzDwo/CnxL7SIi3wvMpXYRkU+FzCr/FZkt8Da1i4jM1ISVwvvUTiLxp7S1IP3yv6rm+LvBexJhdFKzJcOg9CNcVQPNCacyMFVWE81hCG3A1MbKatuORE1oA6Y2t1v9U8LazEX7qxS8LpTg/st4Bkbb1VirMNCFVxmYbaW22ymEGXcpA9M7aRGn2w3T4JJ8W5JXdhumwYjQqE0doqEV3CgbpsEwvmQQZlmFJ9NMr7R915dKvDOt6BZ6mp2cp9aFT3NX7DCbuaAzzbFJbUyaMblZv2nsIBMqnBaJwQDuC/2ZsiHmcA9nq5qJfciuV2jPDApb++M4ZusRzSUh/AehnvEUH2MZ+A2NIB+6dJcjPQAAAABJRU5ErkJggg=="},66:function(e,t,a){e.exports=a(85)},71:function(e,t,a){},81:function(e,t,a){e.exports=a.p+"static/media/radioOn.c0409065.mp3"},82:function(e,t,a){e.exports=a.p+"static/media/radioOff.f89ef430.mp3"},83:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAYUlEQVRoge3WMQrCUBRE0YurM+6/TkDcR9JKQEjz8SvnwPRvXjUFAMzlUW3VPlm2arlS4DnBsZ/yOh97u9Lo1yzV2ve/fc5a3Qf2BuBP2EIDYwvZQgBMzxYaGFvIFgIA3hxYjFv4qJ6tFQAAAABJRU5ErkJggg=="},85:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(6),o=a.n(s),r=(a(71),a(24)),c=a(25),l=a(29),u=a(26),m=a(105),h=a(14),g=a(21),d=a(62),p=a(103),f=a(104),y=a(54),v=a.n(y),b=a(53),w=a.n(b);var S=function(e){var t=Object(n.useState)(!0),a=Object(d.a)(t,2),s=(a[0],a[1]);function o(){s(!1),setTimeout((function(){e.onClick(),s(!0)}),400)}return!0===e.isPaused?i.a.createElement(p.a,{title:"Resume the diaporama",arrow:!0,disableFocusListener:!0},i.a.createElement(f.a,{onClick:function(){return o()}},i.a.createElement(w.a,{style:{color:"black",fontSize:40}}))):i.a.createElement(p.a,{title:"Pause the diaporama",arrow:!0,disableFocusListener:!0},i.a.createElement(f.a,{onClick:function(){return o()}},i.a.createElement(v.a,{style:{color:"black",fontSize:40}})))};var E=function(e){var t={modalText:{fontFamily:"Roboto Mono",fontSize:30,fontWeight:900}};return i.a.createElement("div",null,i.a.createElement(h.a,{show:e.showModal,onHide:e.hideModal,size:"xl"},i.a.createElement(h.a.Header,{closeButton:!0},i.a.createElement(h.a.Title,{style:t.modalText},e.imageShown.name)),i.a.createElement(h.a.Body,null,i.a.createElement(g.a,{src:e.imageShown.src,fluid:!0})),i.a.createElement(h.a.Footer,{style:{justifyContent:"flex-start"}},function(){var a=[];return e.imageShown.categories.forEach((function(e){a.push(e.style)})),i.a.createElement("div",null,i.a.createElement("h3",{style:t.modalText},"Categories : "),e.imageShown.categories.map((function(e){return i.a.createElement("h3",{style:t.modalText},"\u2022 ",e.style)})))}())))},k=a(59);var A=function(e){return!1===e.isImageLoaded?i.a.createElement(k.a,{animation:"border",role:"status"},i.a.createElement("span",{className:"sr-only"},"Chargement...")):!0===e.isImageLoaded?null:!0===e.isImageFailLoaded?i.a.createElement("h3",null,"Hey the image failed to load would you refresh that window please ?"):void 0},x=a(37),I=a.n(x),j=a(60),P=a.n(j),M=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={playlist:["dance.mp3","portugal.mp3","20min.mp3","controlla.mp3","pressGarden.mp3","thatWay.mp3"],transitions:[],playStatus:I.a.status.PLAYING,playFromPosition:null,pauseTimerInterval:0,miliSecSincePause:0,soundDuration:0,isOn:!1,alreadyStarted:!1,soundOn:new Audio(a(81)),soundOff:new Audio(a(82))},i}return Object(c.a)(n,[{key:"handleLoad",value:function(e){this.setState({soundDuration:e.duration})}},{key:"handlePause",value:function(e){this.setState({pausePosition:e.position})}},{key:"handleEnd",value:function(){this.pickNewSound()}},{key:"radioStartup",value:function(){this.pickNewSound()}},{key:"pickNewSound",value:function(){var e=this;this.setState((function(t){return{playing:"http://github.com/yoansj/pics/raw/master/src/musics/"+e.state.playlist[F(0,e.state.playlist.length-1)]}}))}},{key:"updateRadio",value:function(){this.setState((function(e){return{miliSecSincePause:e.miliSecSincePause+1e3}})),this.state.miliSecSincePause>=this.state.soundDuration&&this.pickNewSound()}},{key:"radioManager",value:function(){var e=this;!1===this.state.isOn?(this.setState({isOn:!0}),this.state.soundOn.play(),!1===this.state.alreadyStarted?(this.radioStartup(),this.setState({alreadyStarted:!0})):(clearInterval(this.state.pauseTimerInterval),this.setState((function(e){return{playStatus:I.a.status.PLAYING,playFromPosition:e.pausePosition+e.miliSecSincePause,miliSecSincePause:0}})),this.setState({playFromPosition:null}))):(this.state.soundOff.play(),this.setState({isOn:!1,playStatus:I.a.status.PAUSED,pauseTimerInterval:setInterval((function(){return e.updateRadio()}),1e3)}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(p.a,{title:this.state.isOn?"Turn off the radio":"Turn on the radio",arrow:!0,disableFocusListener:!0},i.a.createElement(f.a,{onClick:function(){return e.radioManager()}},i.a.createElement(P.a,{style:{color:"black",fontSize:40}}))),i.a.createElement(I.a,{url:this.state.playing,playStatus:this.state.playStatus,playFromPosition:this.state.playFromPosition,onPause:this.handlePause.bind(this),onFinishedPlaying:this.handleEnd.bind(this),volume:50}))}}]),n}(i.a.Component),C=a(45),L=a.n(C),T=a(61),B=a.n(T);function F(e,t){return Math.floor(Math.random()*(t-e+1))+e}var O={imageDiv:{alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column"},textAndButtonDiv:{position:"relative",display:"flex",flexDirection:"column"},image:{textAlign:"center",alignItems:"center",resizeMode:"contain",maxWidth:"50%",boxShadow:"10px 10px 10px 0px rgba(0,0,0,0.75)"},imageText:{fontFamily:"Roboto Mono",fontSize:60,fontWeight:900,textAlign:"center"}},D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={seconds:0,timeSwitch:F(20,45),isPaused:!1,imageShown:n.getRandomImage(),lastImageShown:null,showModal:!1,isImageLoaded:!1,isImageFailLoaded:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.imageTimer=setInterval((function(){return e.updateTime()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.imageTimer)}},{key:"getRandomImage",value:function(){return this.props.imageList[F(0,this.props.imageList.length-1)]}},{key:"showModal",value:function(){this.setState({showModal:!0}),this.state.isPaused||this.pauseDiaporama()}},{key:"hideModal",value:function(){this.setState({showModal:!1}),this.state.isPaused&&this.pauseDiaporama()}},{key:"setImageLoaded",value:function(e){this.setState({isImageLoaded:e})}},{key:"setImageFailLoaded",value:function(e){this.setState({isImageFailLoaded:e})}},{key:"pauseDiaporama",value:function(){var e=this;!1===this.state.isPaused?(this.setState((function(e){return{isPaused:!0}})),clearInterval(this.imageTimer)):(this.setState((function(e){return{isPaused:!1}})),this.imageTimer=setInterval((function(){return e.updateTime()}),1e3))}},{key:"nextImage",value:function(){for(var e=this.getRandomImage(),t=0;(e===this.state.imageShown||e===this.state.lastImageShown)&&(e=this.getRandomImage(),!(++t>=5)););this.setState((function(t){return{seconds:0,timeSwitch:F(20,45),lastImageShown:t.imageShown,imageShown:e,showModal:!1,isImageLoaded:!1,isImageFailLoaded:!1}}))}},{key:"updateTime",value:function(){!1!==this.state.isImageLoaded&&(this.setState((function(e){return{seconds:e.seconds+1}})),this.state.seconds===this.state.timeSwitch&&this.nextImage())}},{key:"setPreviousImage",value:function(){this.setState((function(e){return{imageShown:e.lastImageShown,seconds:0,timeSwitch:F(20,45),lastImageShown:e.imageShown,showModal:!1,isImageLoaded:!1,isImageFailLoaded:!1}}))}},{key:"PreviousButton",value:function(){var e=this;return i.a.createElement("div",null,null===this.state.lastImageShown?i.a.createElement(f.a,{disabled:!0},i.a.createElement(L.a,{style:{fontSize:40}})):i.a.createElement(p.a,{title:"Previous image",arrow:!0,disableFocusListener:!0},i.a.createElement(f.a,{onClick:function(){return e.setPreviousImage()}},i.a.createElement(L.a,{style:{color:"black",fontSize:40}}))))}},{key:"NextButton",value:function(){var e=this;return i.a.createElement(p.a,{title:"Next image",arrow:!0,disableFocusListener:!0},i.a.createElement(f.a,{onClick:function(){return e.nextImage()}},i.a.createElement(B.a,{style:{color:"black",fontSize:40}})))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:O.imageDiv},i.a.createElement(g.a,{src:this.state.imageShown.src,style:O.image,onClick:function(){return e.showModal()},onLoad:function(){return e.setImageLoaded(!0)},onError:function(){return e.setImageFailLoaded(!0)},fluid:!0}),i.a.createElement(A,{isImageLoaded:this.state.isImageLoaded}),i.a.createElement(E,{showModal:this.state.showModal,hideModal:function(){return e.hideModal()},imageShown:this.state.imageShown}),i.a.createElement("div",{style:O.textAndButtonDiv},i.a.createElement("text",{style:O.imageText},this.state.imageShown.name),i.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},this.PreviousButton(),i.a.createElement(S,{onClick:function(){return e.pauseDiaporama()},isPaused:this.state.isPaused}),this.NextButton(),i.a.createElement(M,null))))}}]),a}(i.a.Component);var z=function(){var e={footer:{width:"100%",display:"flex",backgroundColor:"black",position:"absolute",bottom:0,justifyContent:"center",alignItems:"center"},smallText:{fontFamily:"Roboto Mono",fontSize:15,fontWeight:900,textAlign:"center",color:"white"},separator:{fontFamily:"Roboto Mono",fontSize:20,fontWeight:900,color:"white",paddingLeft:5,paddingRight:5}};return i.a.createElement("div",{style:e.footer},i.a.createElement("a",{style:e.separator},"\u2022"),i.a.createElement("a",{style:e.smallText},"Powered by React \ud83d\udda5 "),i.a.createElement("a",{style:e.separator},"\u2022"),i.a.createElement("a",{style:e.smallText,href:"https://www.linkedin.com/in/ysjtek/"},"\xa9 ",(new Date).getFullYear()," Copyright: Yoan Saint Juste \ud83d\udc99"),i.a.createElement("a",{style:e.separator},"\u2022"),i.a.createElement("a",{style:e.smallText,href:"https://github.com/yoansj/pics"},"Github Page \ud83d\udcc1"),i.a.createElement("a",{style:e.separator},"\u2022"),i.a.createElement("a",{style:e.smallText,href:"https://www.instagram.com/rboypics/"},"See more pictures \ud83d\uddbc "),i.a.createElement("a",{style:e.separator},"\u2022"))},R={portrait:{name:"portrait",style:"Portrait"},montage:{name:"montage",style:"Montage"},paysage:{name:"paysage",style:"Landscape"},sneakers:{name:"sneakers",style:"Sneakers"},architecture:{name:"architecture",style:"Architecture"},lightPainting:{name:"lightPainting",style:"Light Painting"},night:{name:"night",style:"Night"},bw:{name:"blackAndWhite",style:"Black & White"}},J=[{name:"Through my phone",src:"https://i.ibb.co/tYZ63VV/see-through-phone-ile-de-re.jpg",categories:[R.paysage,R.montage]},{name:"Red",src:"https://i.ibb.co/t2P43Mm/red.jpg",categories:[R.architecture]},{name:"AJ3 I",src:"https://i.ibb.co/XD0JKbd/Jordan-2.jpg",categories:[R.sneakers]},{name:"AJ3 II",src:"https://i.ibb.co/Mh4HmTJ/jay-jay.jpg",categories:[R.sneakers]},{name:"Airmax x Lacoste",src:"https://i.ibb.co/YLyZ3cm/airmax-x-lacoste.jpg",categories:[R.sneakers]},{name:"Blue",src:"https://i.ibb.co/BZhVgcg/square.jpg",categories:[R.architecture]},{name:"Pink Sunset",src:"https://i.ibb.co/y6KnZfY/IMG-3878.jpg",categories:[R.paysage]},{name:"Red and White",src:"https://i.ibb.co/YpMytxS/light-painting.jpg",categories:[R.lightPainting,R.night]},{name:"City",src:"https://i.ibb.co/ysVHMvJ/city.jpg",categories:[R.night]},{name:"Shades of Grey",src:"https://i.ibb.co/C57Fms3/b-w.jpg",categories:[R.bw,R.paysage,R.portrait]},{name:"Blue Metro",src:"https://i.ibb.co/gT3sKPg/blue.jpg",categories:[R.night,R.architecture]},{name:"The blocks",src:"https://i.ibb.co/Y0hFft2/another-blockview.jpg",categories:[R.architecture]},{name:"Free smoke",src:"https://i.ibb.co/tXZQcjk/free-smoke.jpg",categories:[R.night]},{name:"Blockview",src:"https://i.ibb.co/qr6NB0c/da-block.jpg",categories:[R.architecture]},{name:"Haxo",src:"https://i.ibb.co/9YVQv5F/haxo.jpg",categories:[R.architecture,R.night]},{name:"In the dark",src:"https://i.ibb.co/mHpjhtq/lamp.jpg",categories:[R.architecture,R.night,R.bw]},{name:"New York",src:"https://i.ibb.co/v3Gx3d4/newyork.jpg",categories:[R.architecture,R.portrait]},{name:"Two blocks",src:"https://i.ibb.co/x8z06xm/the-final-blockview.jpg",categories:[R.architecture]},{name:"Tramway",src:"https://i.ibb.co/6vWYdPQ/tramwaayy.jpg",categories:[R.night]},{name:"A View",src:"https://i.ibb.co/Kqs5J8r/view.jpg",categories:[R.architecture]},{name:"Bars",src:"https://i.ibb.co/SNnCmkw/bars.jpg",categories:[R.architecture,R.bw]},{name:"Bleu et Beige",src:"https://i.ibb.co/nrztJvP/bleuetbeige.jpg",categories:[R.architecture]}],N={modalText:{fontFamily:"Roboto Mono",fontSize:30,fontWeight:900,textAlign:"center"},smallText:{fontFamily:"Roboto Mono",fontSize:15,fontWeight:900,textAlign:"center"},buttonText:{fontFamily:"Roboto Mono",fontSize:18,fontWeight:990,textAlign:"center"}},Y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={categories:[["Portrait",!0,0],["Montage",!0,1],["Landscape",!0,2],["Sneakers",!0,3],["Architecture",!0,4],["Light Painting",!0,5],["Night",!0,6],["Black & White",!0,7]],isOpen:!1,sortedImageList:J},a}return Object(c.a)(n,[{key:"Categories",value:function(e){return i.a.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"column"}},i.a.createElement("h3",{style:N.modalText},"What is this website ?"),i.a.createElement("h6",{style:N.smallText},"Pics is an interactive Diaporama that showcases basic React functionnalities."),i.a.createElement("h6",{style:N.smallText},"See the footer for more info about the creator and the pictures that are being shown. "),i.a.createElement(g.a,{style:{width:"10px",paddingTop:"3px",paddingBottom:"9px"},src:a(50),title:"https://icones8.fr/icons/set/new-moon"}),i.a.createElement("h3",{style:N.modalText},"Categories"),i.a.createElement("h6",{style:N.smallText},"Use the buttons to select the categories shown by the diaporama. Click on the image to show its categories"),i.a.createElement(g.a,{style:{width:"10px",paddingTop:"3px",paddingBottom:"9px"},src:a(50),title:"https://icones8.fr/icons/set/new-moon"}),e.parent.state.categories.map((function(t,a){return i.a.createElement(m.a,{variant:e.parent.state.categories[a][1]?"success":"secondary",onClick:function(){return e.parent.setCategory(a,!e.parent.state.categories[a][1])},block:!0},i.a.createElement("h6",{style:N.buttonText},e.parent.state.categories[a][0],!0===e.parent.state.categories[a][1]&&" \u2713"))})))}},{key:"sortImageList",value:function(){var e=this,t=[],a=!1;J.forEach((function(n){for(var i=0;i!==n.categories.length;i++)for(var s=0;s!==e.state.categories.length;s++){if(a){a=!1;break}if(n.categories[i].style===e.state.categories[s][0]&&e.state.categories[s][1]){t.push(n),a=!0;break}}})),this.setState({sortedImageList:t})}},{key:"setOpen",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.setState({isOpen:e})}},{key:"checkZeroCategories",value:function(e){for(var t=0;t!==e.length;t++)if(e[t][1])return e;return e[F(0,e.length-1)][1]=!0,e}},{key:"setCategory",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=this.state.categories;a[e][1]=t,a=this.checkZeroCategories(a),this.setState({categories:a}),this.sortImageList()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement(g.a,{src:a(83),onClick:function(){return e.setOpen(!0)}}),i.a.createElement("div",null,i.a.createElement(h.a,{show:this.state.isOpen,onHide:function(){return e.setOpen(!1)},size:"md"},i.a.createElement(h.a.Header,{closeButton:!0},i.a.createElement(h.a.Title,{style:N.modalText},"Settings")),i.a.createElement(h.a.Body,null,i.a.createElement(this.Categories,{parent:this}))))),i.a.createElement(D,{imageList:this.state.sortedImageList}),i.a.createElement(z,null))}}]),n}(i.a.Component),V={gradient:{width:"100%",minHeight:"100%",backgroundColor:"white"}};var Z=function(){return i.a.createElement("div",{style:V.gradient},i.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(84);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.0a115e9f.chunk.js.map