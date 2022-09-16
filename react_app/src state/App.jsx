import React, {useState} from 'react';
import B from "./B";

const App = () => {
    console.log('组件重新渲染了')
    const [count, setCount] = useState(0);

    /*
    * Too many re-renders当我们在函数中调用setState时，会触发这个错误
    *       新值和旧的值一样时不会触发重新渲染
    *   --setState()执行流程
    *       setCount()--》dispatchSetDate()
    *           -->会先判断组件当前处于什么状态
    *               渲染阶段
    *               不会检查state值是否相同
    *               非渲染阶段
    *               会检查state的值是否相同
    *                   如果值不相同，则对组件进行重新渲染
    * 、                 如果值相同 则不会渲染 （如果值相同react会在一些情况下会继续当前组件的一些渲染
    *                   但是这个值不会触发子组件的渲染，这次渲染不会产生实际的效果
    *                     这种情况通常发生在值第一次相同的时候
    *                   ）
    *
    * */
    // setCount(0);
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
            {/* <B/> */}
        </div>
    );
};

export default App;