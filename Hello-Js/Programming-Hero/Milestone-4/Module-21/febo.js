let visited = [];

function febo(num) {
    if (num === 0)
        return 0;
    else if (num === 1)
        return 1;
    else {
        if (visited[num] !== undefined)
            return visited[num];
        let x = febo(num - 1);
        let y = febo(num - 2);
        visited[num] = x + y;
        return x + y;
    }
}

console.log(febo(42));
