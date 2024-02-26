var join = function (arr1, arr2) {
    const map = new Map;
    for (const obj of arr1) map.set(obj.id, obj);
    for (const obj of arr2) {
        if (!map.has(obj.id)) map.set(obj.id, obj);
        else {
            const prevObj = map.get(obj.id);
            for (const key of Object.keys(obj)) prevObj[key] = obj[key];
        }
    }
    const res = new Array;
    for (let key of map.keys()) res.push(map.get(key));
    return res.sort((a, b) => a.id - b.id);
}

/* 
We can combine two arrays, arr1 and arr2, using a Map.  We add all objects from arr 1 to the Map
and then merge the objects from arr2 based on their ID.  The merged objects are stored in 
an array called res.  Finally, we sort the res array in ascending order based on the ID
property.
*/
