import React from 'react';

import classes from './UserInfo.scss';

const userInfo = props => {
  let displayName = props.userName;
  let classModifier = '';
  if (props.userName === '') {
    displayName = 'Anonymous';
    classModifier = '__NoUser';
  }
  return (
    <div className={classes.UserInfo}>
      <div className={classes[`UserPhoto${classModifier}`]}>
        <img 
          alt="Avatar" 
          src={props.photoURL}>
        </img>
      </div>
      <span className={classes[`UserName${classModifier}`]}>{displayName}</span>
    </div>
  );
};

export default userInfo;