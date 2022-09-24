import React, {useState} from 'react';
import './StudentForm.css'

const StudentForm = () => {
    const [inputData, setInputData] = useState({
        name: '',
        age: '',
        address: '',
        gender: '男'
    });
    const nameChange = (e) => {
        setInputData(prevState => ({...prevState, name: e.target.value}));
    }
    const genderChange = (e) => {
        setInputData(prevState => ({...prevState, gender: e.target.value}));
    }
    const ageChange = (e) => {
        setInputData(prevState => ({...prevState, age: e.target.value}));
    }
    const addressChange = (e) => {
        setInputData(prevState => ({...prevState, address: e.target.value}));
    }

    const submit = () => {
        console.log(inputData);
    }
    return (
        <>
            <tr className='Student-Form'>
                <td>
                    <input type="text"
                           onChange={nameChange}
                           value={inputData.name}
                    />
                </td>
                <td>
                    <select
                        onChange={genderChange}
                        value={inputData.gender}
                    >
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                </td>
                <td><input type="text" onChange={ageChange} value={inputData.age}/></td>
                <td><input type="text" onChange={addressChange} value={inputData.address}/></td>
                <td>
                    <button onClick={submit}>add</button>
                </td>
            </tr>
        </>
    );
};

export default StudentForm;