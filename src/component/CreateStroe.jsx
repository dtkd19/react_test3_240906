import React from 'react';

const CreateStroe = ( {storename, storemenu , onChange, onAdd }) => {
    return (
        <div className='createStore'>
            <input type="text" name='storename' placeholder='맛집이름' onChange={onChange} value={storename}/>
            <input type="text" name='storemenu' placeholder='메뉴' onChange={onChange} value={storemenu}/>
            <button onClick={onAdd}>add</button>
        </div>
    );
};

export default CreateStroe;