(window.webpackJsonpwebClient=window.webpackJsonpwebClient||[]).push([[32],{1040:function(e,t,n){"use strict";n.r(t);var o=n(1),l=(n(0),n(797)),i=n(1324),a=n(932),s={id:0,type:"AddNote",visible:!0,completed:null,seenAt:null,color:i.a.GREY},c={hideSkillDetailsDialog:jest.fn(),toggleShowAllSkills:jest.fn(),openCreateNotes:jest.fn()};jest.mock("../../hooks/use-secondary-onboarding-actions",function(){return{useSecondaryOnboardingActions:function(){return c}}}),it("should shallow render the AddNote component without crashing",function(){var e=Object(l.shallow)(Object(o.jsx)(a.default,{skill:s,expanded:!0,fromAllSkillsDialog:!1}));expect(e).toHaveLength(1)}),it("should mount render the AddNote component without crashing and click the CTA",function(){var e=Object(l.mount)(Object(o.jsx)(a.default,{skill:s,expanded:!0,fromAllSkillsDialog:!1}));e.find(".add-note-button").at(1).simulate("click"),e.unmount(),expect(c.openCreateNotes).toHaveBeenCalled(),expect(c.hideSkillDetailsDialog).toHaveBeenCalled(),expect(c.toggleShowAllSkills).toHaveBeenCalled()})},798:function(e,t){},799:function(e,t){},800:function(e,t){},801:function(e,t){}}]);