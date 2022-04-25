import { addExampleValueToElement as addValue } from './writeValues.js';

const tree = [
    {value: 6, left: 1, right: 2},
    {value: 5, left: 3, right: 4},
    {value: 7, left: null, right: 5},
    {value: 3, left: 6, right: null},
    {value: 4, left: null, right: null},
    {value: 9, left: 7, right: 8},
    {value: 2, left: 9, right: null},
    {value: 8, left: null, right: null},
    {value: 10, left: null, right: null},
    {value: 1, left: null, right: null}
];

const breadthFirstSearch = (tree, value) => {
    let queue = []
    queue.push(tree[0])
    while (queue.length !== 0) {
        for (let i = 0; i < queue.length; i++) {
        let node = queue.shift()
            if (node.value === value) {
                return node;
            }
            if (node.left) {
                queue.push(tree[node.left]);
            }
            if (node.right) {
                queue.push(tree[node.right]);
            }
        }
    }
    return null;
}
const breadthSearchValue = breadthFirstSearch(tree, 6);
addValue(`The seach value is: ${breadthSearchValue.value}, The left node is: ${breadthSearchValue.left}, The right node is: ${breadthSearchValue.right}`, "breadth-first-container");

//  Depth-First Search
const depthFirstSearch = (tree, value) => {
    let stack = []
    stack.push(tree[0])
    while (stack.length !== 0) {
        for (let i = 0; i < stack.length; i++) {
            let node = stack.pop();
            if (node.value === value) {
                return node;
            }
            if (node.right) {
                stack.push(tree[node.right]);
            }
            if (node.left) {
                stack.push(tree[node.left]);
            }
        }
    }
    return null;
}
const depthSearchValue = depthFirstSearch(tree, 6);
addValue(`The seach value is: ${depthSearchValue.value}, The left node is: ${depthSearchValue.left}, The right node is: ${depthSearchValue.right}`, "depth-first-container");
