const isValidHEX = (hex: string): boolean => {
    return /^#([0-9A-F]{6})$/i.test(hex);
}

export default isValidHEX