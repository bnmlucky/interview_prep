function gameOfLife(board: number[][]): void {
    const rows: number = board.length;
    const cols: number = board[0].length;

    // Define the eight possible directions to neighboring cells
    const directions: number[][] = [
        [0, 1], [0, -1], [1, 0], [-1, 0],
        [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];

    // Helper function to count live neighbors for a given cell
    const countLiveNeighbors = (row: number, col: number): number => {
        let count = 0;

        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;

            // Check if the neighboring cell is within bounds and is alive or was alive
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && (board[newRow][newCol] === 1 || board[newRow][newCol] === 3)) {
                count++;
            }
        }

        return count;
    };

    // Iterate through each cell in the board
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const liveNeighbors = countLiveNeighbors(row, col);

            // Apply the rules based on the count of live neighbors
            if (board[row][col] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
                // Rule 1 and Rule 3: Cell dies due to under-population or over-population
                board[row][col] = 3; // Mark as dead (from 1)
            } else if (board[row][col] === 0 && liveNeighbors === 3) {
                // Rule 4: Cell becomes alive due to reproduction
                board[row][col] = 2; // Mark as alive (from 0)
            }
        }
    }

    // Update the board based on the marked cells
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] === 2) {
                // Marked as alive
                board[row][col] = 1;
            } else if (board[row][col] === 3) {
                // Marked as dead
                board[row][col] = 0;
            }
        }
    }
}

/* 
Explanation:

The TypeScript solution is essentially the same as the JavaScript solution, with the addition of type annotations for the function parameters and variables (board, rows, cols, directions, countLiveNeighbors, row, col, liveNeighbors, newRow, newCol, dx, dy). TypeScript adds static typing, which enhances code readability and catches potential errors during development.

The solution follows these steps:

Calculate the dimensions of the board (rows and cols).

Define the eight possible directions to neighboring cells (directions).

Implement a helper function (countLiveNeighbors) to calculate the count of live neighbors for a given cell.

Iterate through each cell in the board, applying the rules of the Game of Life based on the count of live neighbors.

Mark cells with values 2 (alive) and 3 (dead) to distinguish them from the original values.

Update the board based on the marked cells, changing values to 1 (alive) and 0 (dead).

The solution modifies the board in-place, following the rules of the Game of Life. The time complexity is O(rows * cols), and the space complexity is O(1) as the modifications are done in-place.
*/