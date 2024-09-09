import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



const style1 = {
    
  width : "80%",
  margin : "0 auto",
  marginBottom : "20px",

}

// const style2 = {
//     marginBottom : "40px",
//     width : "78%",

// }


const CreateUser = ({ username , email, onChange, onCreate}) => {

    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        marginBottom: "40px",
        width: "78%",
        backgroundColor: isHovered ? "blue" : "#007bff", 
    };



    return (
        <div className='createUser'>

        <Form>
            <Row style={style1}>
                <Col>
                <Form.Control 
                name='username' 
                placeholder='이름' 
                onChange={onChange}
                value={username}/>
                </Col>
                <Col>
                <Form.Control
                name='email'
                 placeholder='이메일' 
                 onChange={onChange}
                 value={email} />
                </Col>
            </Row>
            </Form>

{/* 
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
             /> */}
            {/* <button onClick={onCreate}>Create</button> */}
            <Button style={buttonStyle}  onClick={onCreate}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >Create</Button>{' '}
        </div>
    );
};

export default CreateUser;