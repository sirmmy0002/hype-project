var omarMigrationTour=function(a,t,n,e,o,i){"use strict";var r={name:"omarMigrationTour",showDate:new Date,isLater:!1,isTaken:!1,isNever:!1,isAvailable:function(){var t="undefined"===a.get("g_sites")?0:Object.keys(a.get("g_sites")).length,n="undefined"===a.get("g_securenotes")?0:Object.keys(a.get("g_securenotes")).length,e=0<a.MigrationBackground.getBlobVersion()&&(s||this.isLater)&&(1<t||0<n);if(e&&localStorage){var o=JSON.parse(localStorage.getItem("omarMigrationTour"));null===o?localStorage.setItem("omarMigrationTour",JSON.stringify({shown:1})):1===o.shown&&(e=!1)}return e},canStartAutomatically:function(){return!0},tour:{welcomeStep:{class:"omar-migration-override migration-first-step",title:e.translateString("We've reorganized some things in your Vault!"),contentText1:e.translateString("Credit cards, addresses, and other info can now be filled on any site - just like your passwords. None of your info is gone, it's just moved."),contentImage:{src:"images/vault_4.0/extension-locations.svg",style:"omar-migration-header-image",placement:"after"},contentLink:{text:e.translateString("Read more."),href:"https://blog.lastpass.com/2019/03/new-improved-look-lastpass.html/",style:"read-more"},buttons:[{style:"btn-link",autoId:"migrationCloseBtn",sizeStyle:"col-1 btn-container-sm",text:e.translateString("Close"),action:"close"},{style:"btn-primary",autoId:"migrationChangedBtn",sizeStyle:"col-2 btn-container-lg",text:e.translateString("See What's Changed"),action:"start"}],position:{targetId:"#header",align:"left",orientation:"top",offset:{left:200,top:150}},openAction:function(){n.maximizeLeftMenu()},shadeOn:!0,exitAction:"exit"},steps:[{printTags:!0,hideXCloseBtn:!0,class:"omar-migration-override",title:e.translateString("Addresses, everything about you"),contentText1:e.translateString("These can be auto-filled into any form. They contain your contact information: address, phone, email, and more"),buttons:[{style:"btn-link",text:e.translateString("Close"),action:"close"},{style:"btn-primary",text:e.translateString("Next"),action:"next"}],position:{targetId:"#addresses",align:"top",orientation:"left",offset:{left:20,top:-25},arrowPosition:50},openAction:function(){o("#addresses").click()},closeAction:function(){o("#all").click()}},{printTags:!0,hideXCloseBtn:!0,class:"omar-migration-override",title:e.translateString("Payment cards, your digital wallet."),contentText1:e.translateString("Payment cards include credit cards, debit cards, and anything else you use to shop. They can be auto-filled into any form."),buttons:[{style:"btn-link",text:e.translateString("Close"),action:"close"},{style:"btn-primary",text:e.translateString("Next"),action:"next"}],position:{targetId:"#payment-cards",align:"top",orientation:"left",offset:{left:20,top:-25},arrowPosition:50},openAction:function(){o("#payment-cards").click()},closeAction:function(){o("#all").click()}},{printTags:!0,hideXCloseBtn:!0,class:"omar-migration-override migration-last-step",title:e.translateString("Bank accounts, secure in your Vault."),contentText1:e.translateString("Bank accounts include your bank, routing, and account information for savings and checking accounts. They can be auto-filled into any form."),buttons:[{style:"btn-primary",text:e.translateString("Finish"),action:"close"}],position:{targetId:"#bank-accounts",align:"top",orientation:"left",offset:{left:20,top:-25},arrowPosition:50},openAction:function(){o("#bank-accounts").click()},closeAction:function(){o("#all").click()}}]}},s=!1,l=function(t){t&&(s=t)},c=function(){i.migrationBackground.wasMigration(l),i.migrationBackground.subscribeToStateOnce(c)};return i.migrationBackground.subscribeToStateOnce(c),i.migrationBackground.wasMigration(l),i.migrationBackground.setMigrationState(!1),{getTourData:function(){return r}}}(bg,LPFeatures,LPVault,Strings,$,Migrator);