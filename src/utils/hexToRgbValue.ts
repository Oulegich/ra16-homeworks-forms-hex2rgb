const hexToRgbValue = (hex: string): string => {

    hex = hex.replace(/^#/, '');

    const r = String(parseInt(hex.substring(0, 2), 16));
    const g = String(parseInt(hex.substring(2, 4), 16));
    const b = String(parseInt(hex.substring(4, 6), 16));

    const rgb = `rgb(${r}, ${g}, ${b})`

    return rgb;
}

export default hexToRgbValue