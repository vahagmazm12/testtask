import React from 'react';
import { useSpring, animated } from 'react-spring';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    const animProps = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <animated.button className="Button" style={animProps} onClick={onClick}>
            {text}
        </animated.button>
    );
};

export default Button;