import React from 'react';

const User = ( {user, onRemove, onToggle } ) => {

    // const {username,email , id,  onRemove} =props.user; 

    return (

        <div className='user'>

        <h3> 
           <span style={{
            color: user.active ? "green" : "black",
            cursor:"pointer"
            }} 
            onClick={() => onToggle(user.id)}>
                {user.username} </span> 
           <span>({user.email})</span> 
            <button onClick={() => onRemove(user.id)}>X</button>
        </h3>

        </div>
    );
};

export default User;