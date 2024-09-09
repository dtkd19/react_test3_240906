import React, { useMemo } from 'react';
import User from './User';
import { useRef } from 'react';
import CreateUser from './CreateUser';
import { useState } from 'react';

const UserList = () => {

    const nextId = useRef(6);

    // const [count , setCount] = useState(0);

    const [ users, setUsers] = useState([

        {
            id: 1,
            username: 'kim',
            email : 'kim@naver.com',
            active : true
        },
        {
            id: 2,
            username: 'lee',
            email : 'lee@naver.com',
            active : true
        },
        {
            id: 3,
            username: 'pack',
            email : 'pack@naver.com',
            active : false
        },
        {
            id: 4,
            username: 'choi',
            email : 'choi@naver.com',
            active : false
        },
        {
            id: 5,
            username: 'hong',
            email : 'hong@naver.com',
            active : false
        }

    ]);





    const [ inputs , setInputs] = useState({
        username : '',
        email : ''
        });


    const { username, email} = inputs

    const onChange= (e) => {
        const { name, value } = e.target;    
        setInputs({
            ...inputs, // 기존 inputs 값을 복사
            [name]:value // 현재 변경된 값을 key : value 형태로 set
        })

    }




    const onCreate = () => {
        // 값이 추가되면...
        // 나중에 여기서 구현.
        // .current : 현재값
        const user = {
            id:nextId.current,
            username : username,
            email : email
        };

        // 현재 user에 user 추가 => concat 

        setUsers(users.concat(user)); 


        // 기존 inputs 창 초기화

        setInputs({
            username : '',
            email : ''
        })

        nextId.current += 1;
    } 

    const onRemove = (id) => {
        // filter : 배열의 항목을 제거하기 위해서 사용
        // filter는 조건에 맞는 값만 배열로 리턴
        // user.id가 일치하지 않는 원소만 추출하여 새로운 배열로 리턴
        setUsers(users.filter(user => user.id !== id))

    }

    const onToggle = (id) => {
        // user.id 가 파라미터 id와 일치하면 active의 상태를 반전시켜 줌.
        setUsers(users.map(user =>  user.id === id ? { ...user, active : !user.active }  : user ))

    }

    const countActiveUser = (users) => {
        // user.active 가 true 인 사용자를 카운트해서 리턴
        return (users.filter(user => user.active).length);
    }

    const count = useMemo(() => countActiveUser(users), [users])
    



    return (
        <div className='userList'>

            <CreateUser username = {username} email = {email} onChange={onChange} onCreate={onCreate}/>

            {
                users.map(u => (
                    <User user = {u} key = {u.id} onRemove={onRemove} onToggle={onToggle}/>
                ))
            }


            <div>완료 사용자 수 : {count}</div>
            
       
        </div>
    );
};

export default UserList;