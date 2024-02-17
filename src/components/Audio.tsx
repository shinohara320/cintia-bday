import React, { useRef } from 'react';

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  return (
    <div>
      <audio className='mx-auto' ref={audioRef} controls autoPlay>
        <source src="src/assets/audio/audio.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <h2 className='text-center'>click play here</h2>
    </div>
  );
};

export default AudioPlayer;
