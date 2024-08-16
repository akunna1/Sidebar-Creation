import React from 'react';
// Importing the sidebar data which includes titles, icons, and links for each sidebar item
import { sidebarData } from './sidebarData';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul className='sidebar-list'>
        {/* Looping through the sidebarData array to create a list item for each sidebar entry */}
        {sidebarData.map((val, key) => {
          return (

            <li
              key={key}
              className='row'
              onClick={() => {
                // Changing the browser's URL path to the link specified in the sidebarData
                window.location.pathname = val.link;
              }}
            >
              {" "}
              {/* Displaying the icon for each sidebar entry */}
              <div id='icon'>{val.icon}</div>{" "}
              <div id='title'>{val.title}</div>
            </li>
            
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
