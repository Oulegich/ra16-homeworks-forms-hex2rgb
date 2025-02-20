import hexToRgbValue from "../utils/hexToRgbValue";

const ViewColorRGB = ({ color, success }: { color: string, success: string }) => {

    return (
        <span className="rgb-text">
            {success === 'ok' ? hexToRgbValue(color) : success == 'pending' ? 'Loading...' : 'Ошибка!'}
        </span>
    )
}

export default ViewColorRGB