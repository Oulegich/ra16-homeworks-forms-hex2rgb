import { useRef, useState, useEffect } from "react";

const Background = ({ color, success }: { color: string, success: string }) => {
    const [backgroundColor, setBackgroundColor] = useState<string>(color);
    const backRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (backRef.current) {
            if (success == 'ok') {
                setBackgroundColor(color);
            } else if (success == 'error') {
                setBackgroundColor('red');
            } else {
                setBackgroundColor('white');
            }
        }
    }, [color, success]);

    return (
        <div
            className="background"
            style={{ backgroundColor }}
            ref={backRef}
        >
        </div>
    );
};

export default Background;