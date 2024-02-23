var chunk = function (arr, size) {
    const chunkedArray = [];
    let index = 0;

    while (index < arr.length) {
        chunkedArray.push(arr.slice(index, index + size));
        index += size;
    }

    return chunkedArray;
}

/* 
We can use the slice method to extract the chunk of the input array based on the current
index and the specified size.  The slice method creates a shallow copy of the portion of
the array starting from the current index up to the current index plus the chunk size.  
The chunk is then added to the chunked array, and the index is incremented by the chunk size.
This process continues until all the elements are processed.
*/