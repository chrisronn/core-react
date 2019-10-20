import React, { useEffect } from "react";
import { BrowserRouter as Router} from "react-router-dom";
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
    <Router>
      <div>
        <SiteLayout />
      </div>
    </Router>
  );
  
}

export default App;
