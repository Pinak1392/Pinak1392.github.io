import { useState, useEffect, useEffectEvent } from 'react'
import resume from './assets/Pinak_Limaye_CV.pdf'


export default function Resume(){
    const [width,setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <>
        <div className='downloadCV'><a href={resume} download="Pinak_Limaye_CV.pdf" > Download CV </a></div>
        
        <div className='Resume_holder'>
            <iframe key={width} src={resume + (width > 1000 ? "#zoom=130" : "#zoom=60")}/>
        </div>
        </>
    );
}
