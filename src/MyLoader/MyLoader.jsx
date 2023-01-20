import React from "react";
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader 
      speed={2}
      width={500}
      height={300}
      // viewBox="0 120 300 180"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      
      <rect x="50" y="20" rx="3" ry="3" width="300" height="50" /> 
      <rect x="50" y="90" rx="3" ry="3" width="300" height="50" /> 
      <rect x="50" y="150" rx="3" ry="3" width="300" height="50" /> 
      {/* <rect x="50" y="100" rx="3" ry="3" width="400" height="100" />  */}
   
    </ContentLoader>
  )
  
  export {MyLoader} 