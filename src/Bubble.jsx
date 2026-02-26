import { useState,useEffect } from "react";

export default function Bubble(props) {
    const [size, setSize] = useState(Math.ceil(Math.random() * 50) + 10);
    const [position, setPosition] = useState({ x: Math.random() * window.innerWidth, y: -size });
    const [direction, setDirection] = useState(Math.random() - 0.5);
    
    function popBubble() {
        props.popAudio.current.currentTime = 0;
        props.popAudio.current.play();
        resetBubble();
    }

    function resetBubble() {
        setSize(Math.ceil(Math.random() * 50) + 10);
        setPosition({ x: Math.random() * window.innerWidth, y: -size });
        setDirection(Math.random() - 0.5);
    }
    
    useEffect(() => {
        const moveBubble = () => {
            setPosition((prev) => ({
                x: prev.x + direction,
                y: prev.y + 1,
            }));

            setDirection((prev) => prev + (Math.random() - 0.5) * 0.2);
        };

        const interval = setInterval(moveBubble, Math.random() * 30 + 5);

        return () => {clearInterval(interval)};
    }, []);


    if (position.y > window.innerHeight) {
        resetBubble();
    }

    if (position.x < -size|| position.x > window.innerWidth) {
        resetBubble();
    }

    return (
        <div
            className="bubble"
            onClick={popBubble}
            style={{
                position: "absolute",
                left: position.x,
                bottom: position.y,
                width: size,
                height: size,
            }}>
        </div>
   );
}
