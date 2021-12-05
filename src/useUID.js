import { useState } from 'react';

export default function useUID() {
  const getUID = () => {
    const UIDString = localStorage.getItem('UID');
    const userUID = JSON.parse(UIDString);
    return userUID?.UID
  };

  const [UID, setUID] = useState(getUID());

  const saveUID = userUID => {
    sessionStorage.setItem('UID', JSON.stringify(userUID));
    console.log(userUID)
    setUID(userUID.UID);
  };

  return {
    setUID: saveUID,
    UID
  }
}