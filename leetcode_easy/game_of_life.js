/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    const rows = board.length;
    const cols = board[0].length;

    // Define the eight possible directions to neighboring cells
    const directions = [
        [0, 1], [0, -1], [1, 0], [-1, 0],
        [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];

    // Helper function to count live neighbors for a given cell
    const countLiveNeighbors = (row, col) => {
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
    };
};

/*
Explanation:

The gameOfLife function takes a 2D array board representing the current state of the game and modifies it in-place according to the rules of the Game of Life.

The rows and cols variables store the dimensions of the board.

The directions array defines the eight possible directions to neighboring cells (horizontal, vertical, and diagonal).

The countLiveNeighbors function calculates the count of live neighbors for a given cell. It iterates through the eight possible directions and checks if the neighboring cell is within bounds and is alive or was alive.

The main iteration through each cell in the board:

The liveNeighbors variable is calculated using the countLiveNeighbors function.

Based on the count of live neighbors, the rules of the Game of Life are applied:

Rule 1 and Rule 3: If a live cell has fewer than two live neighbors or more than three live neighbors, it dies.
Rule 4: If a dead cell has exactly three live neighbors, it becomes alive.
Marked cells are temporarily updated with values 2 (alive) and 3 (dead) to distinguish them from the original values.

A second iteration updates the board based on the marked cells:

Cells marked as alive (2) are updated to 1 (alive).
Cells marked as dead (3) are updated to 0 (dead).
This solution applies the rules in two steps, marking cells first and then updating the board to avoid interference with subsequent calculations. The time complexity is O(rows * cols), and the space complexity is O(1) as the modifications are done in-place.

*/