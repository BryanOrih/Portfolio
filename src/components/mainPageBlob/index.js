import React from "react";
import './index.css'

const MainPageBlob = () => {
  return (
    <div className="HomePageBlob">
      <div className="MainImageContainer">
        <svg className="blob"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "rgb(84, 99, 107)" }} />
                <stop offset="100%" style={{ stopColor: "rgb(207, 214, 219)" }} />
              </linearGradient>
              <pattern id="img1" patternUnits="userSpaceOnUse" width="1000" height="1000" >
                <image href={require("../../images/neutralBryan.png")} x={0} y={0}width="500" height="500" />
              </pattern>
            </defs>
            <g transform="translate(0,50)">
              <path d="M389.5,316Q326,382,235.5,407Q145,432,74,341Q3,250,84.5,177Q166,104,258,91Q350,78,401.5,164Q453,250,389.5,316Z" fill="url(#gradient)" />
              <path d="M389.5,316Q326,382,235.5,407Q145,432,74,341Q3,250,84.5,177Q166,104,258,91Q350,78,401.5,164Q453,250,389.5,316Z" fill="url(#img1)" />
            </g>
            <image href={require("../../images/neutralBryan2.png")} x={18} y={-78} width="465" height="500" />
        </svg>
      </div>
    </div>
  );
};

export default MainPageBlob;