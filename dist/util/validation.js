export function validate(validatableInput) {
    const { value, required, minLength, maxLength, min, max } = validatableInput;
    let isValid = true;
    if (required) {
        isValid = isValid && value.toString().trim().length !== 0;
    }
    if (minLength != null && typeof value === 'string') {
        isValid = isValid && value.trim().length >= minLength;
    }
    if (maxLength != null && typeof value === 'string') {
        isValid = isValid && value.trim().length <= maxLength;
    }
    if (min && typeof value === 'number') {
        isValid = isValid && value >= min;
    }
    if (max && typeof value === 'number') {
        isValid = isValid && value <= max;
    }
    return isValid;
}
//# sourceMappingURL=validation.js.map