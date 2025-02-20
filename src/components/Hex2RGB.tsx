import { useState } from "react"
import Background from "./Background";
import InputColor from "./InputColor";
import ViewColorRGB from "./ViewColorRGB";

const Hex2RGB = () => {

    const [rgb, setRGB] = useState<TColor>({ color: '#0000FF', success: 'ok' });

    return (
        <div className="hex-2-rgb">
            <Background color={rgb.color} success={rgb.success} />
            <div className="input-view-color">
                <InputColor setRGB={setRGB} />
                <ViewColorRGB color={rgb.color} success={rgb.success} />
            </div>
        </div>
    )
}

export default Hex2RGB