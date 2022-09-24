import React, {useCallback, useEffect, useState} from 'react'
import StudentList from './components/StudentList'
import './App.css'
import StuContent from "./stuContent";

const App = () => {

    const [stuData, setStuData] = useState([])

    // 添加一个state来记录数据是否正在加载,false表示没有加载数据，true表示加载
    const [loading, setLoading] = useState(false)

    // 创建一个state来记录错误信息
    const [error, setError] = useState(null);

    //抽出请求方法
    const fetchData = useCallback(async () => {
        try {
            setLoading(true)
            setError(null)
            const res = await fetch('http://localhost:1337/api/students')
            //判断请求是否加载成功
            if (res.ok) {
                const data = await res.json();
                console.log(data.data)
                setStuData(data.data)
            } else {
                throw new Error('数据加载失败！')
            }
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }

    })


    useEffect(() => {
        fetchData();
    }, [])

    return (
        <StuContent.Provider value={{fetchData}}>
            <div className="app">
                <button onClick={() => fetchData()}>点我加载数据</button>
                {(!loading && !error) && <StudentList stus={stuData}/>}
                {loading && <p>数据正在加载中...</p>}
                {error && <p>数据加载异常！</p>}
            </div>
        </StuContent.Provider>
    )
}

export default App
