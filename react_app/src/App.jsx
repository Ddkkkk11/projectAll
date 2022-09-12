import React, {useEffect, useState} from 'react';
import B from "./B";

const App = () => {
    console.log('组件重新渲染了')
    const [count, setCount] = useState(0);

    //useEffect是一个钩子函数需要一个函数作为参数
    //这个函数会在组件渲染完毕后执行
    useEffect(() =>{
            setCount(1);
    }, []);
    //可以在开发中可以将那些会产生副作用的代码编写到useEffect的回调函数中
        //这样就可以避免这些代码影响到组件的渲染
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