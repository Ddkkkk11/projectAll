import React, { useCallback, useState } from 'react'
import B from "./B";

const App = () => {
    console.log('组件重新渲染了')
    const [count, setCount] = useState(1);
    const flag = count % 4 ==0;
   /* const addFun = () => {
      console.log('按钮点击了')
      // setCount(() => count + 1);
      setCount( prevState => {
        console.log(prevState)
        return prevState + 1;
      });
    };*/
    // useCallback() 是一个钩子函数用来创建react的回调函数 创建的回调函数不会总在组件重新渲染时重新创建


  /*
  * useCallback
  *     参数1：
  *         回调函数
  *     参数2
  *         依赖数组
  *       --当依赖数组发生变化时useCallBack才会执行，
  *       如果不指定回调函数每次都会重新创建
  *       将回调函数中使用到的变量都设置到依赖数组中
  *           除了setState 
  * */
    const addFun = useCallback(() => {
      setCount( prevState => {
        console.log(prevState)
        return prevState + 1;
      });
    });
    return (
        <div>
            {count}
            <hr/>
            <button onClick={addFun}>点我一下
            </button>
            <hr/>
            <B test = {flag} onAdd={addFun}/>
        </div>
    );
};

export default App;