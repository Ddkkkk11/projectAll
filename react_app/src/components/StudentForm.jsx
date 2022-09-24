import React, {useCallback, useContext, useState} from 'react';
import './StudentForm.css'
import stuContext from "../store/stuContent";

const StudentForm = () => {
        const [inputData, setInputData] = useState({
            name: '',
            age: '',
            address: '',
            gender: '男'
        });
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);
        const ctx = useContext(stuContext);
        const nameChange = (e) => {
            setInputData(prevState => ({...prevState, name: e.target.value}));
        }
        const genderChange = (e) => {
            setInputData(prevState => ({...prevState, gender: e.target.value}));
        }
        const ageChange = (e) => {
            setInputData(prevState => ({...prevState, age: + e.target.value}));
        }
        const addressChange = (e) => {
            setInputData(prevState => ({...prevState, address: e.target.value}));
        }

        const addStudent = useCallback(async (params) => {
            try {
                setError(null);
                setLoading(true);
                const res = await fetch('http://localhost:1337/api/students', {
                    method: 'post',
                    body: JSON.stringify({data: params}),
                    headers: {
                        "Content-type": "application/json"
                    }
                });
                ctx.fetchData();
                if (!res.ok) {
                    throw  new Error('添加学生数据不成功');
                }
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);

            }


        }, []);
        const submit = () => {
            addStudent(inputData);
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
                {loading && <tr>
                    <td colSpan={5}>
                        正在添加数据
                    </td>
                </tr>}
                {error && <tr>
                    <td colSpan={5}>
                        添加失败
                    </td>
                </tr>}
            </>
        );
    }
;

export default StudentForm;