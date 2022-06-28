export const getLocalStorageItem = (key, format = 'json') => {
    if (!localStorage.hasOwnProperty(key)) return null;
    const value = localStorage.getItem(key);

    switch (format) {
        case 'json': {
            try {
                return JSON.parse(value);
            } catch (e) {
                return null;
            }
        }
        default:
            return value;
    }
};

export const setLocalStorageItem = (key, value, format = 'json') => {
    switch (format) {
        case 'json': {
            // Let the error be displayed - wrong use of api
            value = JSON.stringify(value);
            break;
        }
        default:
            break;
    }

    localStorage.setItem(key, value);
};