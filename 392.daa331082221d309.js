"use strict";(self.webpackChunkninth_challenge=self.webpackChunkninth_challenge||[]).push([[392],{4128:(H,y,a)=>{a.d(y,{D:()=>x});var i=a(9751),C=a(4742),U=a(8421),M=a(3269),u=a(5403),w=a(3268),N=a(1810);function x(...m){const _=(0,M.jO)(m),{args:F,keys:O}=(0,C.D)(m),R=new i.y(I=>{const{length:f}=F;if(!f)return void I.complete();const v=new Array(f);let A=f,g=f;for(let p=0;p<f;p++){let h=!1;(0,U.Xf)(F[p]).subscribe((0,u.x)(I,P=>{h||(h=!0,g--),v[p]=P},()=>A--,void 0,()=>{(!A||!h)&&(g||I.next(O?(0,N.n)(O,v):v),I.complete())}))}});return _?R.pipe((0,w.Z)(_)):R}},7392:(H,y,a)=>{a.d(y,{Hw:()=>X,Ps:()=>Z});var i=a(4650),C=a(3238),U=a(1281),M=a(6895),u=a(9646),w=a(2843),N=a(4128),x=a(727),m=a(8505),_=a(4004),F=a(262),O=a(8746),R=a(3099),I=a(5698),f=a(529),v=a(1481);const A=["*"];let g;function h(s){return function p(){if(void 0===g&&(g=null,typeof window<"u")){const s=window;void 0!==s.trustedTypes&&(g=s.trustedTypes.createPolicy("angular#components",{createHTML:l=>l}))}return g}()?.createHTML(s)||s}function P(s){return Error(`Unable to find icon with the name "${s}"`)}function B(s){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${s}".`)}function W(s){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${s}".`)}class d{constructor(l,t,e){this.url=l,this.svgText=t,this.options=e}}let D=(()=>{class s{constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new d(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,o){const r=this._sanitizer.sanitize(i.q3G.HTML,n);if(!r)throw W(n);const c=h(r);return this._addSvgIconConfig(t,e,new d("",c,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new d(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){const o=this._sanitizer.sanitize(i.q3G.HTML,e);if(!o)throw W(e);const r=h(o);return this._addSvgIconSetConfig(t,new d("",r,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){const e=this._sanitizer.sanitize(i.q3G.RESOURCE_URL,t);if(!e)throw B(t);const n=this._cachedIconsByUrl.get(e);return n?(0,u.of)(L(n)):this._loadSvgIconFromConfig(new d(t,null)).pipe((0,m.b)(o=>this._cachedIconsByUrl.set(e,o)),(0,_.U)(o=>L(o)))}getNamedSvgIcon(t,e=""){const n=K(e,t);let o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);const r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):(0,w._)(P(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?(0,u.of)(L(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe((0,_.U)(e=>L(e)))}_getSvgFromIconSetConfigs(t,e){const n=this._extractIconWithNameFromAnySet(t,e);if(n)return(0,u.of)(n);const o=e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe((0,F.K)(c=>{const S=`Loading icon set URL: ${this._sanitizer.sanitize(i.q3G.RESOURCE_URL,r.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(S)),(0,u.of)(null)})));return(0,N.D)(o).pipe((0,_.U)(()=>{const r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw P(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){const o=e[n];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){const r=this._svgElementFromConfig(o),c=this._extractSvgIconFromSet(r,t,o.options);if(c)return c}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe((0,m.b)(e=>t.svgText=e),(0,_.U)(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?(0,u.of)(null):this._fetchIcon(t).pipe((0,m.b)(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){const o=t.querySelector(`[id="${e}"]`);if(!o)return null;const r=o.cloneNode(!0);if(r.removeAttribute("id"),"svg"===r.nodeName.toLowerCase())return this._setSvgAttributes(r,n);if("symbol"===r.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(r),n);const c=this._svgElementFromString(h("<svg></svg>"));return c.appendChild(r),this._setSvgAttributes(c,n)}_svgElementFromString(t){const e=this._document.createElement("DIV");e.innerHTML=t;const n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){const e=this._svgElementFromString(h("<svg></svg>")),n=t.attributes;for(let o=0;o<n.length;o++){const{name:r,value:c}=n[o];"id"!==r&&e.setAttribute(r,c)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){const{url:e,options:n}=t,o=n?.withCredentials??!1;if(!this._httpClient)throw function j(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}();if(null==e)throw Error(`Cannot fetch icon from URL "${e}".`);const r=this._sanitizer.sanitize(i.q3G.RESOURCE_URL,e);if(!r)throw B(e);const c=this._inProgressUrlFetches.get(r);if(c)return c;const E=this._httpClient.get(r,{responseType:"text",withCredentials:o}).pipe((0,_.U)(S=>h(S)),(0,O.x)(()=>this._inProgressUrlFetches.delete(r)),(0,R.B)());return this._inProgressUrlFetches.set(r,E),E}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(K(t,e),n),this}_addSvgIconSetConfig(t,e){const n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){const e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){const o=this._resolvers[n](e,t);if(o)return $(o)?new d(o.url,null,o.options):new d(o,null)}}}return s.\u0275fac=function(t){return new(t||s)(i.LFG(f.eN,8),i.LFG(v.H7),i.LFG(M.K0,8),i.LFG(i.qLn))},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();function L(s){return s.cloneNode(!0)}function K(s,l){return s+":"+l}function $(s){return!(!s.url||!s.options)}const Y=(0,C.pj)(class{constructor(s){this._elementRef=s}}),G=new i.OlP("MAT_ICON_DEFAULT_OPTIONS"),V=new i.OlP("mat-icon-location",{providedIn:"root",factory:function k(){const s=(0,i.f3M)(M.K0),l=s?s.location:null;return{getPathname:()=>l?l.pathname+l.search:""}}}),b=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],J=b.map(s=>`[${s}]`).join(", "),Q=/^url\(['"]?#(.*?)['"]?\)$/;let X=(()=>{class s extends Y{constructor(t,e,n,o,r,c){super(t),this._iconRegistry=e,this._location=o,this._errorHandler=r,this._inline=!1,this._previousFontSetClass=[],this._currentIconFetch=x.w0.EMPTY,c&&(c.color&&(this.color=this.defaultColor=c.color),c.fontSet&&(this.fontSet=c.fontSet)),n||t.nativeElement.setAttribute("aria-hidden","true")}get inline(){return this._inline}set inline(t){this._inline=(0,U.Ig)(t)}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){const e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){const e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_splitIconName(t){if(!t)return["",""];const e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const t=this._elementsWithExternalReferences;if(t&&t.size){const e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();const e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){const t=this._elementRef.nativeElement;let e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){const n=t.childNodes[e];(1!==n.nodeType||"svg"===n.nodeName.toLowerCase())&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return"string"==typeof t?t.trim().split(" ")[0]:t}_prependPathToReferences(t){const e=this._elementsWithExternalReferences;e&&e.forEach((n,o)=>{n.forEach(r=>{o.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){const e=t.querySelectorAll(J),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)b.forEach(r=>{const c=e[o],E=c.getAttribute(r),S=E?E.match(Q):null;if(S){let T=n.get(c);T||(T=[],n.set(c,T)),T.push({name:r,value:S[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){const[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe((0,I.q)(1)).subscribe(o=>this._setSvgElement(o),o=>{this._errorHandler.handleError(new Error(`Error retrieving icon ${e}:${n}! ${o.message}`))})}}}return s.\u0275fac=function(t){return new(t||s)(i.Y36(i.SBq),i.Y36(D),i.$8M("aria-hidden"),i.Y36(V),i.Y36(i.qLn),i.Y36(G,8))},s.\u0275cmp=i.Xpm({type:s,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:8,hostBindings:function(t,e){2&t&&(i.uIk("data-mat-icon-type",e._usingFontIcon()?"font":"svg")("data-mat-icon-name",e._svgName||e.fontIcon)("data-mat-icon-namespace",e._svgNamespace||e.fontSet)("fontIcon",e._usingFontIcon()?e.fontIcon:null),i.ekj("mat-icon-inline",e.inline)("mat-icon-no-color","primary"!==e.color&&"accent"!==e.color&&"warn"!==e.color))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[i.qOj],ngContentSelectors:A,decls:1,vars:0,template:function(t,e){1&t&&(i.F$t(),i.Hsn(0))},styles:[".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0}),s})(),Z=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=i.oAB({type:s}),s.\u0275inj=i.cJS({imports:[C.BQ,C.BQ]}),s})()}}]);