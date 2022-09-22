import React, { useEffect, useState } from 'react'

const App = () => {
  const [stuData, setStuData] = useState(null)
  //添加一个state记录数据是否正在加载
  const [loading, setLoading] = useState(false)

  //记录错误信息
  const [error, setError] = useState(null)
  let arr = []
  useEffect(() => {
    //加载数据
    try {
      //重置错误
      setError(null);
      setLoading(true)
      //fetch用来向服务器发送请求，是ajax的升级版
      //他需要两个参数，请求地址，请求信息(method)

      const fetchData = async () => {
        const res = await fetch('http://localhost:1337/api/students');
        console.log(res)
        //判断请求是否加载成功
        if (res.ok){
          const data = await res.json();
          console.log(data);
          setStuData(data.data);
        }else {
          throw new Error('数据加载出错');
        }
      }
      fetchData();

    }catch (e){
      setError(e.message)
      console.log(e)
    } finally {
        setLoading(false);
    }


  }, [])

  return (

    <div>
      {stuData !== null ? (
        stuData.map((item) => {
          return (
            <li key={item.id}>{item.attributes.name},年龄是{item.attributes.age}, 性别是{item.attributes.gender}</li>)
        })
      ) : null
      }
    </div>
  )
}

export default App