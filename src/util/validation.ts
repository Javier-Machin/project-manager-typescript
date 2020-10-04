// Validation
namespace App {
  export interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  }

  export function validate(validatableInput: Validatable) {
    const {
      value,
      required,
      minLength,
      maxLength,
      min,
      max,
    } = validatableInput;
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
}
