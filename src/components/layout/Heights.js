
const layoutHeight = (type) => {

    const windowHeight = window.innerHeight;
    const siteHeaderHeight = document.querySelector('#siteHeader').clientHeight;
    const siteFooterHeight = document.querySelector('#siteFooter').clientHeight;
    const contentLeftHeight =  document.querySelector('#contentLeft') ? document.querySelector('#contentLeft').clientHeight : 0;  
    const max = contentLeftHeight > windowHeight ? contentLeftHeight : windowHeight;
    const offset = 1;
    const contentHeight = max - siteHeaderHeight - siteFooterHeight - offset;
    const sidebarHeight = max - siteHeaderHeight - offset;
      
    if (type === "content") {
        return contentHeight;
    } else if (type === "sidebar") {
        return sidebarHeight;
    }  
};

export default layoutHeight;