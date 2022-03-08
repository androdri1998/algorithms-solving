class NodeTree {
    value: number;
    left: NodeTree | null;
    right: NodeTree | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root: NodeTree | null;

    constructor() {
        this.root = null;
    }

    heigth(nodeTree: NodeTree | null): number {
        if (nodeTree === null) {
            return -1;
        }

        return Math.max(this.heigth(nodeTree.left), this.heigth(nodeTree.right)) + 1;
    }

    insertNewNode(nodeTree: NodeTree, value: number) {
        if (value < nodeTree.value) {
            if (nodeTree.left === null) {
                nodeTree.left = new NodeTree(value);
                return;
            }

            this.insertNewNode(nodeTree.left, value);
            return;
        }

        if (nodeTree.right === null) {
            nodeTree.right = new NodeTree(value);
            return;
        }

        this.insertNewNode(nodeTree.right, value);
        return;
    }

    insert(value: number) {
        if (this.root === null) {
            this.root = new NodeTree(value);
            return;
        }

        this.insertNewNode(this.root, value);
    }

    getRoot(): NodeTree | null {
        return this.root;
    }
}

function solution(values: string[]) {
    const binarySearchTree = new BinarySearchTree();

    const addItemToBinarySearchTree = (item: string) =>
        binarySearchTree.insert(parseInt(item));

    values.forEach(addItemToBinarySearchTree);

    console.log(binarySearchTree.heigth(binarySearchTree.getRoot()));
}
