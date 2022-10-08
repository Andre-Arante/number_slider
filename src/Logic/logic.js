const size = 4;

export function setupBoard() {
    getNums(size);
}

// Generate 2d array for visualization
export function getNums() {
    const arr = new Array(size);
    for(let i=0; i<size; i++) {
        arr[i] = new Array(size);
    }

    // Populate with values
    let current = 0;
    for(let i=0; i<size; i++) {
        for(let j=0; j<size; j++) {
            arr[i][j] = ++current;
        }
    }

    // Empty Block
    arr[size-1][size-1] = -1;
    return arr;
}

export function generateJSON(arr) {
    var board = [];
    console.log(arr[0][0]);
    for(let i=0; i<size; i++) {
        for(let j=0; j<size; j++) {
            const {up, down, left, right} = getAdjacent(i, j);

            board.push({
                num: arr[i][j],
                pos: i,
                up: up,
                down: down,
                left: left,
                right: right,
            })
        }
    }

    return board;
}

// Given a point (x, y), create pointers for each adjacent cell (node)
function getAdjacent(x, y) {
    let top=x-1;
    let bot=x+1;
    let left=y-1;
    let right=y+1;

    // Edge cases
    // case top row
    if (x==0) top=-1; 
    // case bot row
    else if (x>size-1) bot=-1;
    // case first column
    if (y==0) left=-1;
    // case last column
    else if (y>size-1) right=-1;

    return {
        up: top,
        down: bot,
        left: left,
        right: right,
    }
}
