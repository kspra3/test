// O(1) Time and Space complexity

/* Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]] */

// Sol 1
var isValidSudoku = function(board) {
    
    for(let i = 0; i < board.length; i++) {
        const set = new Set();
        for(let j = 0; j < board[i].length; j++) {
            const cell = board[i][j];
            if(cell === '.') continue;
            if(set.has(cell)) return false;
            set.add(cell);
        }
    }
    
    for(let i = 0; i < board.length; i++) {
        const set = new Set();
        for(let j = 0; j < board[i].length; j++) {
            const cell = board[j][i];
            if(cell === '.') continue;
            if(set.has(cell)) return false;
            set.add(cell);
        }
    }
    
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            
            const set = new Set();
            for(let k = 0; k < 3; k++) {
                for(let l = 0; l < 3; l++) {
                    const cell = board[3 * i + k][3 * j + l]
                    if(cell === '.') continue;
                    if(set.has(cell)) return false;
                    set.add(cell);
                }
            }
            
        }
    }
    
    return true
    
};


// Sol 2
var isValidSudoku = function(board) {

// Array to hold sets for rows, cols and boxes
const rows = [], cols = [], boxes = [];
for(let i = 0; i < board.length; i++) {
    // 9 sets for rows, cols and boxes
    rows.push(new Set());
    cols.push(new Set());
    boxes.push(new Set());
}

// Double for loop to iterate
for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
        const cell = board[i][j];
        if(cell === '.') continue;
        // Creating boxes
        const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);
        if(rows[i].has(cell) || cols[j].has(cell) || boxes[boxNum].has(cell))
            return false;
        // If no duplicate, add/record to set.
        rows[i].add(cell);
        cols[j].add(cell);
        boxes[boxNum].add(cell);
    }
}

return true

};


// Sol 3
var isValidSudoku = function(board) {
    
    //Check for duplicates
    const set = new Set();
    // Double for loop
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            // Current cell
            const cell = board[i][j];
            // Cell is empty
            if(cell === '.') continue;

            const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            const row = `row: ${i}, value ${cell}`;
            const col = `col: ${j}, value ${cell}`;
            const box = `box: ${boxNum}, value ${cell}`;
            // Check if set already has the number
            if(set.has(row) || set.has(col) || set.has(box)) 
                return false;
            set.add(row);
            set.add(col);
            set.add(box);
            
        }
    }
    
    return true
    
};

/* Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1] */

var reverseList = function(head) {
    let current = head;
    if (!current) {
        return current;
    }
    let curPre = head.next;
    current.next = null;
    while (curPre) {
        // save the next node
        let tmp = curPre.next;
        curPre.next = current;
        current = curPre;
        curPre = tmp;
    }
    return current;
};

/* Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5] */

var reverseBetween = function(head, left, right) {
    let mid = []
    let list = head
    let L2 = new ListNode(0,0)
    let newList = L2
    let idx = 1
    
    while(list){
        if(idx >= left && idx <= right){
            mid.push(list.val)
        }
        idx += 1
        list = list.next
    }
    
    idx = 1
    
    while(head){
        if(idx >= left && idx <= right){
            newList.next = new ListNode(mid.pop())
        } else{
            newList.next = head
        }
        idx++
        newList = newList.next
        head = head.next
    }
    return L2.next
};