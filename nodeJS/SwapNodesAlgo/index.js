class Deque {
    constructor() {
        this.count = 0;
        this.lowest = 0;
        this.deque = {};
    }

    add(value) {
        this.deque[this.count] = value;
        this.count++;
    }

    removeLeft() {
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this.deque[this.lowest];
        delete this.deque[this.lowest];
        this.lowest++;
        return result;
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.count - this.lowest;
    }
}

class NodeTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const create = (node, indexes) => {
    const deque = new Deque();
    deque.add(node);

    for (let index of indexes) {
        const [left, right] = index;
        const temp = deque.removeLeft();

        if (left != -1) {
            temp.left = new NodeTree(left);
            deque.add(temp.left);
        }

        if (right != -1) {
            temp.right = new NodeTree(right);
            deque.add(temp.right);
        }
    }

    return node;
}

const swap = (node, query, level, list) => {
    if (node) {
        if (level % query === 0) {
            const temp = node.left;
            node.left = node.right;
            node.right = temp;
        }

        swap(node.left, query, level + 1, list);
        list.push(node.value);
        swap(node.right, query, level + 1, list);
    }
}

function solution(indexes, queries) {
    let root = new NodeTree(1);
    root = create(root, indexes);

    const result = queries.map(query => {
        const list = [];
        swap(root, query, 1, list);
        return list;
    });

    return result;
}
