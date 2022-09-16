import React, { useReducer } from 'react'

const countReducer =(state, action) => {

  console.log('args', state)
  console.log(action.type)
  /* if (action.type === 'ADD') {
     return state + 1;
   } else if (action.type === 'SUB') {
     return state - 1;
   }*/
  switch (action.type){
    case 'ADD':
      return  state + 1;
    case  'SUB':
      return  state - 1;
    default:
      return  state;
  }

};
const App = () => {
  /* const [count, setCount] = useState(1)

   const addHandler = () => {
     setCount(prevState => prevState + 1)
   }
   const subHandler = () => {
     setCount(prevState => prevState - 1)
   }*/
  //reducer, initialArg, init
  /*
  *   第一个参数
  *     reducer：函数 整合函数对于当前的state的所有操作都应该在该函数中定义
  *       state: 当前最新的state
  *       action: 他需要一个对象，{
  *       在对象中会存储dispatch的指令
  * }
  *       这个函数的返回值会成为state的新值
  *   第二个参数
  *     initialArg：state 初始值 作用和state的值是一样的
  *
  *
  * */
  const [count, countDisptch] = useReducer(countReducer, 1);

  const addHandler = () => {
    countDisptch({
      type: 'ADD'
    })
  }
  const subHandler = () => {
    countDisptch({
      type: 'SUB'
    })
  }
  /*  返回值 返回值是一个数组
      第一个参数就是state， 用来获取state的值
      ，第二个参数是，state派发器
        用来发送操作state的命令
          具体的修改行为会由另外一个函数执行
        */
  return (
    <div>
      <button onClick={subHandler}>减少</button>
      {count}
      <button onClick={addHandler}>增加</button>
    </div>
  )
}

export default App