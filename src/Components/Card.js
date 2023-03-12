import React, { useState } from 'react'

const Card = (props) => {
const { url, auth } = props;
const [valuee, setValue] = useState(auth)

  return (
    <div className="card">
      <img height={200} src={url} alt="imageeee" />
      <h3>{auth}</h3>
      <input type="text" value={valuee} onChange={(e)=> setValue(e.target.value)} />
    </div>
  );
}

export default Card;