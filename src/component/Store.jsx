import React from 'react';

const style = {
    backgroundColor : "skyblue",
    border : "none",
    boxShadow : "2px 2px 2px gray",
    marginLeft : "10px",
    cursor : "pointer"
}



const Store = ({store , onRemove, onToggle}) => {

    // const {store , onRemove} = props.store; 

    return (

        <div className='user'>

        <h3> 
            <span>{store.storename}</span>
            <span
            style={{
                color: store.active ? "red" : "black",
                cursor:"pointer"
                }} 
                onClick={() => onToggle(store.id)}>({store.storemenu})</span> 

        <button style={style} onClick={() => onRemove(store.id)}>X</button>
        </h3>
        </div>
    );
};

export default Store;