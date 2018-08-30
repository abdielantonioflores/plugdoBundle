let { template } = plugdo;
let { global } = plugdo;
 template.setLogo("Plugdo Estudents");

 var layoutSettings = {
   splitLeft: true,
   splitRight: true,
   showNavbar: true,
   showMenuLeft: true,
   showMenuRight: false,
   showMenuContentLeft: false,
   showMenuContentRight: true,
   tabContentMarging: true,
   showTab: true
 }
 var colorOptions = {
   bgNight: "#252525",
   bgDay: "#303130",
   bgNavbarBorder: "#141414",
   bgNavbarOver: "#353535",
   bgMenuTitle: "#C49A05",
   bgTabOver: "#202020",
   bgSplitter: "#C49A05",
   fontLogo: "#FFF",
   font: "#D7D7D7",
   fontDay: "#FFFFFF",
   fontOver: "#FFF",
   fontInactive: "#989898",
   fontMenuGroupRight: "#C6ECBC",
   fontMenuGroupLeft: "#D7D7D7",
   iconOver: "#C9E84D",
   fontSizeNavbar: "0.8em",
   fontSizeMenu: "14px",
   fontSizeMenuGroup: "13px",
   fontSizeMenuItem: "12px",
   fontSizeTab: "12px",
   fontSizeTabSelected: "14px",
   navigationHeight: "30px"
 };

 global.menu = [
  {
      title: "Bundle",
      selected: true,
      isLeft: true,
      menu: [
          {
              isGroup: true,
              title: "Settings"
          },
          {
              isGroup: false,
              title: "Perfil de usuarios ",
              target: "Perfil"
          },
          {
            isGroup: false,
            title: "Tipos de bundle   ",
            target: "bundle"
        },
        {
          isGroup: false,
          title: "Description bundle  ",
          target: "descriptions"
      }
      ]
  }
];
plugdo.window({
  name: "Perfil",
  path: "profile/pages/examples/profile.html",
  open: false
});
plugdo.window({
  name: "bundle",
  path: "profile/pages/examples/index.html",
  open: false
});
plugdo.window({
  name: "descriptions",
  path: "profile/pages/examples/bundle_descriptions.html",
  open: false
});


 template.setColorOptions(colorOptions);

 load(function () {
   template.applySettings(layoutSettings);
 });
