import React from 'react';

const CreateUser = ({ username , email, onChange, onCreate}) => {
    return (
        <div className='createUser'>
            <input type="text" 
            name='username' 
            placeholder='이름' 
            onChange={onChange}
            value={username}
            />
            <input type="text" 
            name='email'
             placeholder='이메일' 
             onChange={onChange}
             value={email}
             />
            <button onClick={onCreate}>Create</button>
        </div>
    );
};

export default CreateUser;