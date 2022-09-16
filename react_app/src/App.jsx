import React, {useState} from 'react';
import B from "./B";

const App = () => {
    console.log('组件重新渲染了')
    const [count, setCount] = useState(1);
    const flag = count % 4 ==0;

    return (
        <div>
            {count}
            <hr/>
            <button onClick={() => {
                console.log('按钮点击了')
                // setCount(() => count + 1);
                setCount( prevState => {
                  console.log(prevState)
                  return prevState + 1;
                });
                /* 
                React官网上说，这个函数接收两个参数
                ，第一个是当前的state，第二个是当前的props，
                函数返回一个对象，与之前使用this.setState的返回对象相同，
                代表想对state的更改。
                
                
                
                */
            }
            }>点我一下
            </button>
            <hr/>
            <B test = {flag}/>
        </div>
    );
};

export default App;