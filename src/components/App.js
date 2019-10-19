import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { getUser, updateContentHeight, updateSidebarHeight } from "../redux/actions/index";

import layoutHeight from './layout/Heights';
import SiteLayout from './layout/SiteLayout';


const App = () => {  

  const dispatch = useDispatch();

  useEffect(() => {  
    
    dispatch(getUser());

    const handleResize = () => {
      dispatch(updateContentHeight(layoutHeight("content")));
      dispatch(updateSidebarHeight(layoutHeight("sidebar")));
    }
    handleResize(); // run once when mount
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
        
  }, [dispatch]);

  return (
    <div>
      <SiteLayout />
    </div>
  );
  
}

export default App;
