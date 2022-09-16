import React from 'react';
import { useState } from 'react';

const B = () => {
    console.log('组件b重新渲染了 ')
    const [test, setTest] = useState(1);

    return (
        <div>
          {/* <p>{props.test? '哈哈' : ''}</p> */}
            组件B
            <h1>{test}</h1>
            <button onClick={() => setTest((state, props) => {
              console.log(props);
              return state +1 ;
            })}>点我一下</button>
        </div>
    );
};
 //react.memo 是一个高阶组件 他接受另一个组件作为参数
 //并且返回一个包装过的新组件 包装过的组件有缓存功能
 //只有props发生变化，才会触发组件的重新渲染，否则总是返回缓存中的执行结果


export default React.memo(B);