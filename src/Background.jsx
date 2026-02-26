import { useRef } from 'react';
import Bubble from './Bubble';
import popSound from './assets/bubblePop.mp3';

export default function Background(){
    const audioRef = useRef(new Audio(popSound));
    audioRef.current.volume = 0.2;

    return(
        <div className='Background'>
            <div className='BackgroundInner'>
                
            </div>
            {[...Array(200)].map((_, i) => (
                <Bubble key={i} popAudio={audioRef} />
            ))}
        </div>
    );
}