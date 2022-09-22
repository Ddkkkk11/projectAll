import React, { useEffect, useState } from 'react'

const App = () => {
  const [stuData, setStuData] = useState(null)
  //添加一个state记录数据是否正在加载
  const [loading, setLoading] = useState(false)

  //记录错误信息
  const [error, setError] = useState(null);
  let arr = []
  useEffect(() => {
    //加载数据
    setLoading(true)
    //fetch用来向服务器发送请求，是ajax的升级版
    //他需要两个参数，请求地址，请求信息(method)
    fetch('http://localhost:1337/api/student')
      .then((res) => {
        //判断是否正常返回响应信息
        if (res.data) {
          console.log(res)
          return res.json() //可以将响应的json直接转换为js对象
        }
        //代码运行到这里说明没有成功加载数据
        setLoading(false)
        //直接抛出错误
        throw new Error('数据加载失败')
      })
      .then((data) => {
        arr = data
        console.log('arr', arr)
        console.log(data)
        setStuData(data.data)
        setLoading(false)
      })
      .catch((err) => {
        //用来处理统一错误
        //catch执行 说明代码出错了
        setLoading(false);
        console.log(err)
        setError(err.message)
      })
  }, [])

  return (

    /*
    *   将写死的数据替换为从接口中加载的数据
    *   组件初始化就需要向服务器发送请求加载数据
    *
    *
    * */
    <div>

      {/*
        ( !loading && ! error) && <Student>


      */}
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