import React from "react";





const navStyle = {
    backgroundColor:'black',
      lineHeight: 1.5,
      color: '#fafafa',
      fontWeight: 700,
      letterSpacing: '2px',
      padding: '50px',
      display:'flex',
      
     
      
};

const menuListStyle = {
    listStyle:'none',
    display:'flex',
    gap:'20px',
    
    margin:'auto',
    
};

export default function NavComponent (){
    return(
        <div style={navStyle}>
            <h1>Logo</h1>
                
                    <ul style={menuListStyle}>
                        <li>Menu Item</li>
                        <li>Menu Item</li>
                        <li>Menu Item</li>
                    </ul>
                
            
        </div>
    )
}