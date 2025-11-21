

// Validate email
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Validate Indian mobile number
export function isValidPhone(phone: string): boolean {
  return /^[6-9]\d{9}$/.test(phone);
}

// Validate OTP (4 or 6 digit)
export function isValidOtp(otp: string): boolean {
  return /^\d{4,6}$/.test(otp);
}

// Strong password: min 8 chars, number, letter
export function isStrongPassword(password: string): boolean {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
}

// Check if empty string
export function isEmpty(value: string | undefined | null): boolean {
  return !value || value.trim().length === 0;
}

// Validate pincode (India)
export function isValidPincode(pin: string): boolean {
  return /^\d{6}$/.test(pin);
}

// Validate number only
export function isNumeric(value: string): boolean {
  return /^\d+$/.test(value);
}

// Validate file size (in MB)
export function isFileSizeValid(file: File, maxMB: number): boolean {
  const maxSize = maxMB * 1024 * 1024;
  return file.size <= maxSize;
}

// Validate file type
export function isValidFileType(file: File, allowedTypes: string[]): boolean {
  return allowedTypes.includes(file.type);
}
