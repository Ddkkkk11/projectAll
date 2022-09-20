import React, { useCallback, useEffect, useState } from 'react'

const App = () => {
    const [stuData, setStuData] = useState({});
    let flag = false;
    useEffect(() => {
            //加载数据
      //fetch用来向服务器发送请求，是ajax的升级版
      //他需要两个参数，请求地址，请求信息(method)
        fetch('http://localhost:1337/api/students')
          .then((res) => {
            console.log(res);
           return  res.json(); //可以将响应的json直接转换为js对象
          })
          .then((data) => {
            console.log(data);
            flag = true;
            const val = data;
          })
          .catch((err) => {
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

        </div>
    );
};

export default App;