import {
  ctaButton,
  logoConfig,
  contactInfo,
  menuItems,
} from "assets/data/data";

export const useNavigation = () => {



  const setActiveMenu = (menuId) => {
    menuItems.forEach((item) => {
      item.active = item.id === menuId;
    });
  };

  return {
    menuItems,
    contactInfo,
    logoConfig,
    ctaButton,
    setActiveMenu,
  };
};
