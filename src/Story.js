import React from 'react';
import Button from './Button';
import Author from './Author';
import './Story.css';

const Story = (props) => {
  return (
    <div className='Story'>
      <img src={props.img} />
      <div className='story-info'>
        <div>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
        <Author authName={props.authName}
                authImg={props.authImg}
                estTime={props.estTime} />
      </div>
    </div>
  )
}

export default Story;
