import { useEffect, useState } from "react";
import checkLength from "../utils/checkLength";
import isValidHEX from "../utils/isValidHEX";

const InputColor = ({ setRGB }: { setRGB: (color: TColor) => void }) => {
    const [color, setColor] = useState<TColor>({ color: '#0000FF', success: 'ok' });

    useEffect(() => {
        setRGB(color);
    }, [color, setRGB])

    const handleChange = ((e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        setColor((prevInput) => {
            if (checkLength(value.length) && isValidHEX(value)) {
                const newColor = { ...prevInput, [name]: value, success: 'ok' };
                return newColor;
            } else if (checkLength(value.length) && !isValidHEX(value) && value[0] == '#') {
                const errorColor = { ...prevInput, [name]: value, success: 'error' };
                return errorColor
            } else {
                const pendingColor = { ...prevInput, [name]: value, success: 'pending' };
                return pendingColor
            }
        });
    });

    return (
        <input className='input-color' type="text" name='color' value={color.color} onChange={handleChange} />
    )
}

export default InputColor