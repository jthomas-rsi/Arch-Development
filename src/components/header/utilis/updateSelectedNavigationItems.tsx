const updateSelectedNavigationItems = (
  pathname: string,
  value: number,
  setValue: React.Dispatch<React.SetStateAction<number>>,
  setMenuItemIndex: React.Dispatch<React.SetStateAction<number>>,
) => {
  const options = [
    { name: "Home", link: "/", tabIndex: 0 },
    { name: "Services", link: "/services", tabIndex: 1 },
    {
      name: "Custom Software Development",
      link: "/customsoftware",
      tabIndex: 1,
      itemIndex: 1,
    },
    {
      name: "Mobile App Development",
      link: "/mobileapps",
      tabIndex: 1,
      itemIndex: 2,
    },
    {
      name: "Website Development",
      link: "/websites",
      tabIndex: 1,
      itemIndex: 3,
    },
    { name: "The Revolution", link: "/revolution", tabIndex: 2 },
    { name: "About Us", link: "/about", tabIndex: 3 },
    { name: "Contact Us", link: "/contact", tabIndex: 4 },
  ];

  options.forEach((option) => {
    switch (pathname) {
      case option.link:
        if (value !== option.tabIndex) {
          setValue(option.tabIndex);
        }
        if (option.itemIndex !== undefined && setMenuItemIndex !== undefined) {
          setMenuItemIndex(option.itemIndex);
        }
        break;
      default:
        break;
    }
  });
};

export default updateSelectedNavigationItems;
