"use strict";(self.webpackChunkninth_challenge=self.webpackChunkninth_challenge||[]).push([[421],{1315:(M,g,i)=>{i.r(g),i.d(g,{LoginModule:()=>S});var e=i(4650),h=i(2183),v=i(7205),s=i(1791);let u=(()=>{class n{constructor(o,t,m){this.globalRest=o,this.tokenService=t,this.router=m}loginUser(o){return this.globalRest.login(o).subscribe({next:t=>{this.tokenService.setToken(t.data.token),localStorage.setItem("user",JSON.stringify(t.data.user)),this.goToHome()}})}goToHome(){this.router.navigate(["main"])}}return n.\u0275fac=function(o){return new(o||n)(e.LFG(h.w),e.LFG(v.B),e.LFG(s.F0))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();var a=i(9549),c=i(4144),d=i(7392),f=i(4859),r=i(4006),p=i(6895);function w(n,l){1&n&&(e.TgZ(0,"mat-error",12),e._uU(1,"Email is required"),e.qZA())}function C(n,l){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"Please enter a valid email"),e.qZA())}function y(n,l){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"Password is required"),e.qZA())}const L=[{path:"",component:(()=>{class n{constructor(o){this.restService=o,this.passwordShown=!1,this.loginForm=new r.cw({email:new r.NI("",[r.kI.required,r.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),r.kI.email]),password:new r.NI("",[r.kI.required,r.kI.maxLength(100)])})}get email(){return this.loginForm.get("email")}get password(){return this.loginForm.get("password")}onSubmit(){this.restService.loginUser({email:this.email?.value,password:this.password?.value})}toggleVisibility(){this.passwordShown=!this.passwordShown}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(u))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],decls:24,vars:7,consts:[[1,"container","login-theme"],[3,"formGroup","ngSubmit"],["appearance","legacy"],["matInput","","type","email","formControlName","email","placeholder","Your email","autocomplete","off"],["matSuffix",""],["color","warn",4,"ngIf"],[4,"ngIf"],["appearance","standard"],["matInput","","placeholder","Enter your password","formControlName","password","autocomplete","off",3,"type"],["matSuffix","",1,"eye",3,"click"],["mat-dialog-actions",""],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["color","warn"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Login"),e.qZA(),e.TgZ(3,"form",1),e.NdJ("ngSubmit",function(){return t.onSubmit()}),e.TgZ(4,"mat-form-field",2)(5,"mat-label"),e._uU(6,"Email Address:"),e.qZA(),e._UZ(7,"input",3),e.TgZ(8,"mat-icon",4),e._uU(9,"mail_outline"),e.qZA(),e.TgZ(10,"mat-hint"),e._uU(11,"Input the fully qualified email address"),e.qZA(),e.YNc(12,w,2,0,"mat-error",5),e.YNc(13,C,2,0,"mat-error",6),e.qZA(),e.TgZ(14,"mat-form-field",7)(15,"mat-label"),e._uU(16,"Password "),e.qZA(),e._UZ(17,"input",8),e.TgZ(18,"mat-icon",9),e.NdJ("click",function(){return t.toggleVisibility()}),e._uU(19),e.qZA(),e.YNc(20,y,2,0,"mat-error",6),e.qZA(),e.TgZ(21,"div",10)(22,"button",11),e._uU(23,"Submit"),e.qZA()()()()),2&o&&(e.xp6(3),e.Q6J("formGroup",t.loginForm),e.xp6(9),e.Q6J("ngIf",null==t.email||null==t.email.errors?null:t.email.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.email||null==t.email.errors?null:t.email.errors.pattern),e.xp6(4),e.Q6J("type",t.passwordShown?"text":"password"),e.xp6(2),e.Oqu(t.passwordShown?"visibility_off":"visibility"),e.xp6(1),e.Q6J("ngIf",null==t.password||null==t.password.errors?null:t.password.errors.required),e.xp6(2),e.Q6J("disabled",!t.loginForm.valid))},dependencies:[p.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,a.TO,a.KE,a.bx,a.hX,a.R9,c.Nt,d.Hw,f.lW],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;width:100%}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%;gap:1em}.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:80%}.register[_ngcontent-%COMP%]{text-align:right;align-self:flex-end;color:gray}.register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#00d3d7;font-weight:600;letter-spacing:1px;cursor:pointer}.register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#256d85}.eye[_ngcontent-%COMP%]{cursor:pointer}mat-form-field[_ngcontent-%COMP%]   mat-error[_ngcontent-%COMP%]{color:#ff4500;text-align:right;font-size:small}@media (min-width: 769px){.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:85%}}"]}),n})()}];let Z=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.Bz.forChild(L),s.Bz]}),n})(),S=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[u],imports:[p.ez,Z,r.UX,a.lN,c.c,d.Ps,f.ot]}),n})()}}]);