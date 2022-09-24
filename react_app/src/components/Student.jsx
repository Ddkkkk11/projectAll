import React, {useCallback, useContext, useState} from 'react'
import stuContext from "../stuContent";

const Student = (props) => {
    // {stu:{name, age, gender, address}} = props
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    console.log(props);
    const ctx = useContext(stuContext);
    const delStu = useCallback(async () => {
        try {
            setLoading(true);
            setError(false);
            const res = await fetch(`http://localhost:1337/api/students/${props.stu.id}`, {
                method: 'delete'
            });

            //判断是否成功
            if (!res.ok) {
                throw new Error('删除数据失败');
            }

            //修改数据后需要触发列表重新刷新
            ctx.fetchData();
            // const data = await res.json();//被删除的学生
        } catch (e) {
            setError(e);
        } finally {

        }


    }, [])
    const deleteHandle = (props) => {
        //删除接口 http://localhost:1337/api/students/4
        // console.log(props.stu.id)
        delStu()

    };

    return (
        <>
            <tr>
                <td>{props.stu.attributes.name}</td>
                <td>{props.stu.attributes.gender}</td>
                <td>{props.stu.attributes.age}</td>
                <td>{props.stu.attributes.address}</td>
                <td>
                    <button onClick={deleteHandle}>删除</button>
                </td>
            </tr>
            {loading && <tr colSpan={5}>正在删除数据</tr>}
            {error && <tr colSpan={5}>删除失败</tr>}
        </>
    )
}

export default Student
