import React, {useEffect, useState} from 'react';
import B from "./B";

const App = () => {
    console.log('组件重新渲染了')
    const [count, setCount] = useState(0);
    const [obj, setObj] = useState({
      a: 1,
      b: 2,
      c: 3
    })
  console.log(obj);
    //useEffect是一个钩子函数需要一个函数作为参数
    //这个函数会在组件渲染完毕后执行
    useEffect(() =>{
            setCount(1);
            //降低数据过滤次数，提供用户体验
            //用户输入完了你在过滤，用户输入过程中，不要过滤
        //当用户输入动作一秒后，我们才做查询
    }, []);
    //可以在开发中可以将那些会产生副作用的代码编写到useEffect的回调函数中
        //这样就可以避免这些代码影响到组件的渲染//默认情况下useEffect会在组件渲染完成后调用
    //每次渲染完成后就调用
    //第二个参数可以传递一个数组
    //在数组中指定useEffect中这个依赖项发生变化时渲染
        //通常会把useEffect中所使用的局部变量全部设置为依赖项
    //  这样以来确保这些值发生变化时，会触发useEffect的执行
        //向setState()是由useState生成的
        //useState会确保组件的每次渲染都会获取到相同的setState()函数
        //所以setState方法可以不设置到依赖中
        //如果依赖项设置为空数组只会在Effect组件初始化的时候触发一次

    /*
    * 在useEffect中可以指定一个函数作为返回值
    * 这个函数称为清理函数，他会在下次Effect执行前调用
    *   可以在这个函数中做一些工作来清除上次Effect执行中带来的影响
    *
    *
    * */
    return (
        <div>
            {count}
            <hr/>
            <button onClick={() => {
                console.log('按钮点击了')
                setCount(1)
            }
            }>点我一下
            </button>
            <hr/>
            <B/>
        </div>
    );
};

export default App;