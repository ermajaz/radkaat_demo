

// Sleep for X milliseconds
export const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

// Debounce for non-react usage (react hook already exists)
export function debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number
): T {
    let timer: NodeJS.Timeout;
    return function (...args: any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    } as T;
}

// Throttle function
export function throttle<T extends (...args: any[]) => void>(
    func: T,
    limit: number
): T {
    let inThrottle = false;

    return function (...args: any[]) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;

            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    } as T;
}

// Generate random ID
export function generateId(prefix = "id") {
    return `${prefix}_${Math.random().toString(36).substring(2, 10)}`;
}

// Check if object is empty
export function isEmptyObject(obj: object): boolean {
    return Object.keys(obj).length === 0;
}

// Deep clone (safe structured clone)
export function deepClone<T>(data: T): T {
    return structuredClone(data);
}

// Convert file to Base64
export function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Group array by key
export function groupBy<T>(list: T[], key: keyof T) {
    return list.reduce((acc: any, item: T) => {
        const groupValue = item[key];
        acc[groupValue] = acc[groupValue] || [];
        acc[groupValue].push(item);
        return acc;
    }, {});
}
