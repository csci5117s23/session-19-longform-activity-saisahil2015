import { useState } from 'react';

export default function Flashcard({ frontText }) {
  const [side, setSide] = useState('Front');
  const [style, setStyle] = useState('front');
  function changeSide() {
    if (side == 'Front') {
      setSide('Back');
      setStyle('back');
    } else {
      setSide('Front');
      setStyle('front');
    }
  }
  return (
    <div className={style} onClick={changeSide}>
      {side}
    </div>
  );
}
