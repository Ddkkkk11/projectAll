import React from 'react'

const Student = (props) => {
  // {stu:{name, age, gender, address}} = props
  console.log(props.stu.id)
  const deleteHandle = (props) => {
    //删除接口 http://localhost:1337/api/students/4
    console.log(props.stu.id)
    fetch(`http://localhost:1337/api/students/${props.stu.id}`);

  };

  return (
    <tr>
      <td>{props.stu.attributes.name}</td>
      <td>{props.stu.attributes.gender}</td>
      <td>{props.stu.attributes.age}</td>
      <td>{props.stu.attributes.address}</td>
      <td>
        <button onClick={deleteHandle}>删除</button>
      </td>
    </tr>
  )
}

export default Student
