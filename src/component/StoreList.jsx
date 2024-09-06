import React from 'react';
import { useState } from 'react';
import Store from './Store';
import CreateStroe from './CreateStroe';
import { useRef } from 'react';

const StoreList = () => {

    const nextId = useRef(2);

    const [stores, setStores] = useState([

        {
            id: 1,
            storename: '월미당',
            storemenu : '쌀국수',
            active : true
        }
        
    ])

    const [inputs, setInputs] = useState({
        storename : '',
        storemenu : ''
    });

    const { storename , storemenu } = inputs

    const onChange= (e) => {
        const { name, value } = e.target;    
        setInputs({
            ...inputs,
            [name]:value 
        })

    }

    const onAdd = () => {
        const store = {
            id:nextId.current,
            storename : storename,
            storemenu : storemenu
        };

        setStores( stores.concat(store));

        setInputs({
            storename : '',
            storemenu : ''
        })

        nextId.current += 1;
        console.log(stores);
    }

    const onRemove = (id) => {
        setStores(stores.filter(store => store.id !== id))
    }

    const onToggle = (id) => {
        setStores(stores.map( store => store.id === id ? { ...store, active : !store.active} : store))
    }


    return (
        <div className='storeList'>

            <CreateStroe storename={storename} storemenu={storemenu} onChange={onChange} onAdd={onAdd}/>
            
            {
                stores.map( s => (
                    <Store store = {s} key = {s.id} onRemove = {onRemove} onToggle={onToggle} />
                ))
            }
        </div>
    );
};

export default StoreList;