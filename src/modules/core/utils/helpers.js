export function getImage(url) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            resolve(img);
        };
        img.onerror = function () {
            reject(img);
        };
        img.src = url;
    });
}

export const isBrowser = () => typeof window !== 'undefined';
