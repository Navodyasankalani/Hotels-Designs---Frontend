import  React from 'react';
import Options from './Options';

const DrpDown = () => {
const initial =  Options[0].cover;

 const [value, setValue] = React.useState(initial);

 const handleChange = (event) => {

   setValue(event.target.value);

 };

 return (

   <div className='dropdown'>
ff
       <h1 >
        Our Destinations
        <br/>
        {Options[0].category}
       </h1>
       
       <div className="dropdown-select">
        <select value={value} onChange={handleChange}>

            {Options.map((option) =>  (
                // <div className="searchOption"></div>
            <option value={option.cover}>{option.title}</option>
            ))
            }

            

        </select>

        <div className="dropImage">
            <img src={value} alt='' />
            <div className="dropCard">
                {/* <p>{option.desc}</p> */}
        </div>
       </div>



       <div className="row">

{
    Options.map((detail)=>{
        return(
            <div className="column">
    <div className="single-property">
        <div className="card">

            <div className="property-thumb">
                <div className="property-tag"> For Sale </div>
                {/* <img src={detail.Cover} alt="Palace" /> */}
            </div>

            <div className="property-content">
                <h3>{detail.title}</h3>
                <div className="mark">
                <i class="fa-solid fa-location-dot"></i>
                <span>{detail.desc}</span>
                </div>
                <span className="amount">{detail.title}</span>
            </div>

            {/* <div className="property-footer">
                <ul>
                    <li>
                        <span>{detail.size}</span>
                    </li>
                    <li>
                        <img src={detail.bedImage} alt="bed" />
                        <span>{detail.bed}</span>
                    </li>
                    <li>
                        <img src={detail.bathImage} alt="bath" />
                        <span>{detail.bath}</span>
                    </li>
                </ul>
            </div> */}

        </div>
    </div>
    </div>
        )
    })
}

    
</div>

       </div>


     

   </div>

 );

};

export default DrpDown;







// import React, { useRef } from "react";
// import "./styles.css";
// import { UseDetectOutsideClick } from "./UseDetectOutsideClick";
// /*
//  * Read the blog post here:
//  * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
//  */
// export default function DrpDown() {
//   const dropdownRef = useRef(null);
//   const [isActive, setIsActive] = UseDetectOutsideClick(dropdownRef, false);
//   const onClick = () => setIsActive(!isActive);

//   return (
//     <div className="container">
//       <div className="menu-container">
//         <button onClick={onClick} className="menu-trigger">
//           <span>User</span>
//           {/* {isActive
//           ? "angle-up"
//           : "angle-down"} */}
//           <img
//             src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
//             alt="User avatar"
//           />
//         </button>
//         <nav
//           ref={dropdownRef}
//           className={`menu ${isActive ? "active" : "inactive"}`}
//         >
//           <ul>
//             <li>
//               <a href="mm">Messages</a>
//             </li>
//             <li>
//               <a href="mk">Trips</a>
//             </li>
//             <li>
//               <a href="mmj">Saved</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// }