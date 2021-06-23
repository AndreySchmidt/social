import React from 'react';
import DialogeItem from './DialogeItem/DialogeItem';

const Message = (props) => {
  return (<div>{props.text}</div>);
}

const Dialogs = (props) => {

  let dialogeTag = props.data.map(
    item => <DialogeItem id = {item.id} name = {item.text} key = {item.id} />
  );

  return (<div>
    <h2>Dialogs</h2>
      <div>
        <h3>Names</h3>
        {dialogeTag}
      </div>
      <div>
        <h3>Messages</h3>
        <Message text = 'Messages 1' />
        <Message text = 'Messages 2' />
        <Message text = 'Messages3' />
        <Message text = 'Messages 4' />
        <Message text = 'Messages 5' />
      </div>
    </div>);
}

export default Dialogs;
