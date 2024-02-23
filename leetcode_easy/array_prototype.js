Array.prototype.last = function () {
    return this.length === 0 ? -1 : this[this.length - 1];
}
/*
This version uses ternary operator for more concise code.  The ? and : act like a shorthand
for if/else.
*/
