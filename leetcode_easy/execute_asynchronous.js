var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        if (functions.length === 0) {
            resolve([]);
            return;
        }
        const res = new Array(functions.length).fill(null);
        let resolvedCount = 0;
        functions.forEach((el, idx) => {
            el().then((subResult) => {
                res[idx] = subResult;
                resolvedCount++;
                if (resolvedCount === functions.length) {
                    resolve(res);
                }
            }).catch((err) => {
                reject(err);
            })
        });
    });
};
/* 
This code uses traditional promise syntax with then and catch instead of async/await.  
Each function in the input array is run, and its then method is called to handle its 
resolution or its catch method to handle its rejection.  If all functions resolve
successfully, the promise returned by promiseAll() resolves with the results array.
If any function rejects, the promise returned by promiseAll() immediately rejects with 
the reason provided by the first function that rejected.
*/