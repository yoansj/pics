(this.webpackJsonppics=this.webpackJsonppics||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},21:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(6),r=a.n(o),s=(a(20),a(21),a(10)),l=a(11),c=a(14),u=a(13),h=a(12),m=a(8);var d=function(e){return i.a.createElement(m.a,{variant:"primary",onClick:function(){return e.onClick()}},!0===e.isPaused?i.a.createElement("h1",null,"Continuer"):i.a.createElement("h1",null,"Pause"))},g=a(7);var p=function(e){return i.a.createElement("div",null,i.a.createElement(g.a,{show:e.showModal,onHide:e.hideModal},i.a.createElement(g.a.Header,{closeButton:!0},i.a.createElement(g.a.Title,null,e.imageShown.name)),i.a.createElement(g.a.Body,null,"My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone."),i.a.createElement(g.a.Footer,null,i.a.createElement(m.a,{variant:"primary",onClick:e.hideModal},"Fermer"))))},y={portrait:{name:"portrait",style:"Portrait"},montage:{name:"montage",style:"Montage"},paysage:{name:"paysage",style:"Paysage"},sneakers:{name:"sneakers",style:"Sneakers"},architecture:{name:"architecture",style:"Architecture"},lightPainting:{name:"lightPainting",style:"Light Painting"}},f=[{name:"Through my phone",src:"https://i.ibb.co/tYZ63VV/see-through-phone-ile-de-re.jpg",categories:[y.paysage,y.montage]},{name:"Red",src:"https://i.ibb.co/t2P43Mm/red.jpg",categories:[y.architecture]},{name:"AJ3",src:"https://i.ibb.co/XD0JKbd/Jordan-2.jpg",categories:[y.sneakers]},{name:"Blue",src:"https://i.ibb.co/BZhVgcg/square.jpg",categories:[y.architecture]},{name:"Pink Sunset",src:"https://i.ibb.co/y6KnZfY/IMG-3878.jpg",categories:[y.paysage]},{name:"Red and White",src:"https://i.ibb.co/YpMytxS/light-painting.jpg",categories:[y.lightPainting]},{name:"Redddd",src:"https://i.ibb.co/t2P43Mm/red.jpg",categories:[y.sneakers]}];function v(e){return Math.floor(Math.random()*Math.floor(e))}var w={imageDiv:{alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column"},textAndButtonDiv:{position:"relative",display:"flex",flexDirection:"column"},image:{paddingTop:20,textAlign:"center",alignItems:"center",resizeMode:"contain",maxWidth:"60%"},imageText:{fontFamily:"Monsterrat",fontSize:60,fontWeight:800,fontStyle:"italic"}},k=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={seconds:0,timeSwitch:v(60),isPaused:!1,imageShown:n.getRandomImage(),showModal:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.imageTimer=setInterval((function(){return e.updateTime()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.imageTimer)}},{key:"getRandomImage",value:function(){return f[v(f.length-1)]}},{key:"showModal",value:function(){this.setState({showModal:!0})}},{key:"hideModal",value:function(){this.setState({showModal:!1})}},{key:"debugText",value:function(){0}},{key:"pauseDiaporama",value:function(){var e=this;!1===this.state.isPaused?(this.setState((function(e){return{isPaused:!0}})),clearInterval(this.imageTimer)):(this.setState((function(e){return{isPaused:!1}})),this.imageTimer=setInterval((function(){return e.updateTime()}),1e3))}},{key:"updateTime",value:function(){this.setState((function(e){return{seconds:e.seconds+1}})),this.state.seconds===this.state.timeSwitch&&this.setState({seconds:0,timeSwitch:v(60),imageShown:this.getRandomImage()})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:w.imageDiv},i.a.createElement(h.a,{src:this.state.imageShown.src,style:w.image,onClick:function(){return e.showModal()},fluid:!0}),i.a.createElement("div",{style:w.textAndButtonDiv},i.a.createElement("text",{style:w.imageText},this.state.imageShown.name),this.debugText(),i.a.createElement(p,{showModal:this.state.showModal,hideModal:function(){return e.hideModal()},imageShown:this.state.imageShown}),i.a.createElement(d,{onClick:function(){return e.pauseDiaporama()},isPaused:this.state.isPaused})))}}]),a}(i.a.Component);var b=function(){return i.a.createElement("div",{style:{"--color-1":"deepskyblue","--color-2":"navy",background:"linear-gradient(170deg, var(--color-1), var(--color-2) 80%)"}},i.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(25);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.4c8943f3.chunk.js.map