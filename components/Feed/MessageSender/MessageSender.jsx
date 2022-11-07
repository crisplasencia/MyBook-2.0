import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../../../StateProvider';
import db from './../../../firebase'
import firebase from 'firebase'


function MessageSender() {
  const [{user} , dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const [inputURL, setInputURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: inputURL
    })

    setInput('');
    setInputURL('');
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL}/>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="messageSender__input"
            placeholder={`Qué piensas, ${user.displayName}?`}
          />
          <input
            value={inputURL}
            onChange={(e) => setInputURL(e.target.value)}
            type="text"
            placeholder="URL de la imagen (Opcional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Button
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Video en Vivo</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: 'blue' }} />
          <h3>Foto/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Actividad</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
