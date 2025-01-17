import { useLocalStorage } from './useLocalStorage';
import React, { useEffect } from 'react';

function useDarkMode(key, initialValue) {
    const [someValue, setSomeValue] = useLocalStorage(key, initialValue);
    const body = document.querySelector('body');

    useEffect(() => {
        if(someValue) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    },[someValue])

    return [someValue, setSomeValue];
}

export default useDarkMode;