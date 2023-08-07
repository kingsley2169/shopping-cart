import React, { useState } from 'react';

export function App() {
  const menuItems = document.querySelectorAll('.js-show-header-dropdown');
  const [subMenuShownIndex, setSubMenuShownIndex] = useState(-1);

  const toggleSubMenu = (index) => {
    if (subMenuShownIndex === index) {
      setSubMenuShownIndex(-1);
    } else {
      for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].parentElement.querySelector('.header-dropdown').classList.remove('show-header-dropdown');
      }

      setSubMenuShownIndex(index);
    }
  };

  const closeSubMenus = () => {
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].parentElement.querySelector('.header-dropdown').classList.remove('show-header-dropdown');
    }
    setSubMenuShownIndex(-1);
  };

  const handleMenuItemClick = (event, index) => {
    event.stopPropagation();
    toggleSubMenu(index);
  };

  const handleSubMenuClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div>
      {Array.from(menuItems).map((menuItem, index) => (
        <div key={index} className="js-show-header-dropdown" onClick={(event) => handleMenuItemClick(event, index)}>
          {/* Your menu item content */}
        </div>
      ))}
      <div className="header-dropdown" onClick={handleSubMenuClick}>
        {/* Your submenu content */}
      </div>
      <button onClick={closeSubMenus}>Close Submenus</button>
    </div>
  );
}

export default App;
