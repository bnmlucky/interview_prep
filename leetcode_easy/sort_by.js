var sortBy = function (arr, fn) {
    function swap(a, b) {
        return (fn(a) < fn(b)) ? -1 : 1
    }
    return arr.sort(swap);
}
/*
We define a compare function which determines the sort order by comparing the results of 
fn applied on a and b.  If fn(a) is less than fn(b), it returns -1, indicating that a
should come before b.  Conversely, if fn(a) is not less than fn(b), it returns 1, indicating
that a should come after b.  
When fn(a) equals fn(b), the compare function still returns 1, which suggests that a 
should be sorted after b.  This does change the relative order of a and b.  However,
since a and b are the same when processed through the function fn, this change in order
does not affect the resulting sorted array's appearance.  This is because the "swap"
operation between two identical values doesn't visibly change the array.
*/