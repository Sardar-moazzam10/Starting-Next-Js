import React from 'react'
const showDeatail = (props) => {
    const userinfo=props.params.id;
    console.log(userinfo);
  return (
    <div className="relative top-20 ms-5 ">
        <h3>Blog Detail</h3>
        <h3>Blog Detail of {userinfo}</h3>
    </div>
  )
}

export default showDeatail
