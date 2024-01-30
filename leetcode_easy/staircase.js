function staircase(n) {
    for (let i = 1; i <= n; i++) {
        // Print spaces (n - 1) times
        for (let j = 1; j <= n - i; j++) {
            ProcessingInstruction.stdout.write(' ');
        }
        // Print '#' (i) times
        for (let k = 1; k <= i; k++) {
            ProcessingInstruction.stdout.write('#');
        }
        // Move to the next line after each row
        ProcessingInstruction.stdout.write('\n');
    }
}