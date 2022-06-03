(window.webpackJsonpwebClient=window.webpackJsonpwebClient||[]).push([[25],{1043:function(e,t,n){"use strict";n.r(t);var o=n(1),r=(n(0),n(797)),i=n(1324),a=n(934),l=n(804),s=n.n(l),c=n(13),u=n(8),d={id:0,type:"AddThreePassword",visible:!0,completed:null,seenAt:null,color:i.a.GREY},f={hideSkillDetailsDialog:jest.fn(),toggleShowAllSkills:jest.fn(),openAddItemDialog:jest.fn(),openAllItemsView:jest.fn()};jest.mock("../../hooks/use-secondary-onboarding-actions",function(){return{useSecondaryOnboardingActions:function(){return f}}}),jest.mock("../../services/lp-vault",function(){return{LPVault:{extensionInstalled:function(){return!0}}}}),it("should render render the AddThreePassword component without crashing",function(){var e=s()([])({login:{baseUrl:"https://dummy.com"},vaultData:{passwords:{recordType:c.a.Password,username:"test@test.com",record:{}}}}),t=Object(r.mount)(Object(o.jsx)(u.a,{store:e},Object(o.jsx)(a.default,{skill:d,expanded:!0,fromAllSkillsDialog:!1})));expect(f.openAllItemsView).toHaveBeenCalled(),expect(t).toHaveLength(1),t.unmount()}),it("should render the SiteComponent when extension is installed in AddThreePassword component without crashing",function(){var e=s()([]),t=top.bg;top.bg={};var n=e({login:{baseUrl:"https://dummy.com"},vaultData:{passwords:{recordType:c.a.Password,username:"test@test.com",record:{}}}}),i=Object(r.mount)(Object(o.jsx)(u.a,{store:n},Object(o.jsx)(a.default,{skill:d,expanded:!0,fromAllSkillsDialog:!1})));console.log(i.html()),expect(i.find(".site-name")).toHaveLength(6),i.unmount(),top.bg=t}),it("should render the AddThreePassword component and click the Add Item button",function(){var e=s()([]),t={recordType:c.a.Password,username:"test@test.com",record:{}};top.bg=void 0;var n=e({login:{baseUrl:"https://dummy.com"},vaultData:{passwords:t}}),i=Object(r.mount)(Object(o.jsx)(u.a,{store:n},Object(o.jsx)(a.default,{skill:d,expanded:!0,fromAllSkillsDialog:!1})));i.find(".add-item-button").at(1).simulate("click"),i.unmount(),expect(f.openAddItemDialog).toHaveBeenCalled(),expect(f.hideSkillDetailsDialog).toHaveBeenCalled(),expect(f.toggleShowAllSkills).toHaveBeenCalled()})},798:function(e,t){},799:function(e,t){},800:function(e,t){},801:function(e,t){},804:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var n=r.applyMiddleware.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e))(function(){var e=[],n=[];return{getState:function(){return l(t)?t(e):t},getActions:function(){return e},dispatch:function(t){if(!(0,a.default)(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant? Action: '+JSON.stringify(t));e.push(t);for(var o=0;o<n.length;o++)n[o]();return t},clearActions:function(){e=[]},subscribe:function(e){return l(e)&&n.push(e),function(){var t=n.indexOf(e);t<0||n.splice(t,1)}},replaceReducer:function(e){if(!l(e))throw new Error("Expected the nextReducer to be a function.")}}});return n()}};var o,r=n(69),i=n(805),a=(o=i)&&o.__esModule?o:{default:o};var l=function(e){return"function"===typeof e}},805:function(e,t){var n="[object Object]";var o,r,i=Function.prototype,a=Object.prototype,l=i.toString,s=a.hasOwnProperty,c=l.call(Object),u=a.toString,d=(o=Object.getPrototypeOf,r=Object,function(e){return o(r(e))});e.exports=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||u.call(e)!=n||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e))return!1;var t=d(e);if(null===t)return!0;var o=s.call(t,"constructor")&&t.constructor;return"function"==typeof o&&o instanceof o&&l.call(o)==c}}}]);