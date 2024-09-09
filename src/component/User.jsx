import React, { useState } from 'react';

const User = ( {user, onRemove, onToggle } ) => {

    // const {username,email , id,  onRemove} =props.user; 

    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    const isEven = user.id % 2 === 0;

    const style1 = {
    
        width : "80%",
        margin : "0 auto",
        marginBottom : "10px",
        backgroundColor: isHovered2 ? (isEven ? "skyblue" : "pink") : "white",
        paddingTop : "10px",
      }


      const buttonStyle2 = {
        margin : "0 auto",
        marginLeft : "10px",
        color : "red",
        borderColor : "red",
        backgroundColor: isHovered ? "pink" : "white", 
    };
    



    return (

        <div className='user'>

        <h3 style={style1}
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}> 
           <span style={{
            color: user.active ? "green" : "black",
            cursor:"pointer"
            }} 
            onClick={() => onToggle(user.id)}>
                {user.username} </span> 
           <span>({user.email})</span> 
            <button style={buttonStyle2}  onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}  onClick={() => onRemove(user.id)                
            }>X</button>
            <hr/>
        </h3>

        </div>
    );
};

export default User;