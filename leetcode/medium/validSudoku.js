/* Description
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

*/

// My solution
function isValidSudoku(board) {
	//create array of sets for each check
	const cols = new Array(9).fill(null).map(() => new Set());
	const rows = new Array(9).fill(null).map(() => new Set());
	const squares = new Array(9).fill(null).map(() => new Set());

	for (let r = 0; r < 9; r++) {
		for (let c = 0; c < 9; c++) {
			const cellValue = board[r][c];
			if (cellValue === '.') {
				continue;
			}

			const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

			if (
				rows[r].has(cellValue) ||
				cols[c].has(cellValue) ||
				squares[boxIndex].has(cellValue)
			) {
				return false;
			}

			rows[r].add(cellValue);
			cols[c].add(cellValue);
			squares[boxIndex].add(cellValue);
		}
	}

	return true;
}
