(window.webpackJsonpwebClient=window.webpackJsonpwebClient||[]).push([[28],{1051:function(e,t,n){"use strict";n.r(t);var o=n(1),r=(n(0),n(797)),c=n(1324),i=n(929),l=n(804),a=n.n(l),u=n(8),s={id:0,type:"SetUpEmergencyAccess",visible:!0,completed:null,seenAt:null,color:c.a.GREY},f={hideExpandedSkillInDrawer:jest.fn(),hideSkillDetailsDialog:jest.fn(),toggleShowAllSkills:jest.fn(),openSetupEmergencyAccess:jest.fn()};jest.mock("../../hooks/use-secondary-onboarding-actions",function(){return{useSecondaryOnboardingActions:function(){return f}}}),it("should shallow render the SetUpEmergencyAccess component without crashing",function(){var e=a()([])({login:{baseUrl:"https://dummy.com"}}),t=Object(r.shallow)(Object(o.jsx)(u.a,{store:e},Object(o.jsx)(i.default,{skill:s,expanded:!0,fromAllSkillsDialog:!1})));expect(t).toHaveLength(1)}),it("should mount render the SetUpEmergencyAccess fromAllSkillsDialog=false component without crashing and click the CTA",function(){var e=a()([])({login:{baseUrl:"https://dummy.com"}}),t=Object(r.mount)(Object(o.jsx)(u.a,{store:e},Object(o.jsx)(i.default,{skill:s,expanded:!0,fromAllSkillsDialog:!1})));t.find(".action-cta").at(1).simulate("click"),expect(f.openSetupEmergencyAccess).toHaveBeenCalled(),expect(f.hideExpandedSkillInDrawer).toHaveBeenCalled(),t.unmount()}),it("should mount render the SetUpEmergencyAccess fromAllSkillsDialog=true component without crashing and click the CTA",function(){var e=a()([])({login:{baseUrl:"https://dummy.com"}}),t=Object(r.mount)(Object(o.jsx)(u.a,{store:e},Object(o.jsx)(i.default,{skill:s,expanded:!0,fromAllSkillsDialog:!0})));console.log(t.html()),t.find(".action-cta").at(1).simulate("click"),expect(f.openSetupEmergencyAccess).toHaveBeenCalled(),expect(f.hideSkillDetailsDialog).toHaveBeenCalled(),t.unmount()})},798:function(e,t){},799:function(e,t){},800:function(e,t){},801:function(e,t){},804:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var n=r.applyMiddleware.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e))(function(){var e=[],n=[];return{getState:function(){return l(t)?t(e):t},getActions:function(){return e},dispatch:function(t){if(!(0,i.default)(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant? Action: '+JSON.stringify(t));e.push(t);for(var o=0;o<n.length;o++)n[o]();return t},clearActions:function(){e=[]},subscribe:function(e){return l(e)&&n.push(e),function(){var t=n.indexOf(e);t<0||n.splice(t,1)}},replaceReducer:function(e){if(!l(e))throw new Error("Expected the nextReducer to be a function.")}}});return n()}};var o,r=n(69),c=n(805),i=(o=c)&&o.__esModule?o:{default:o};var l=function(e){return"function"===typeof e}},805:function(e,t){var n="[object Object]";var o,r,c=Function.prototype,i=Object.prototype,l=c.toString,a=i.hasOwnProperty,u=l.call(Object),s=i.toString,f=(o=Object.getPrototypeOf,r=Object,function(e){return o(r(e))});e.exports=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||s.call(e)!=n||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e))return!1;var t=f(e);if(null===t)return!0;var o=a.call(t,"constructor")&&t.constructor;return"function"==typeof o&&o instanceof o&&l.call(o)==u}}}]);