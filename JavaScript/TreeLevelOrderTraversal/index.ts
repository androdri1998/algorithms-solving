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

    breadthFirstSearch(nodes: NodeTree[]): string {
        const memorize: number[] = [];
        const BFS = (nodeTrees: NodeTree[]) => {
            if (nodeTrees.length === 0) {
                return;
            }

            const newNodeTrees: NodeTree[] = [];
            nodeTrees.forEach((nodeTree) => {
                memorize.push(nodeTree.value);
                if (nodeTree.left) {
                    newNodeTrees.push(nodeTree.left);
                }

                if (nodeTree.right) {
                    newNodeTrees.push(nodeTree.right);
                }
            });

            BFS(newNodeTrees);
        }

        BFS(nodes);

        return memorize.join(' ');
    }
}

function solution(values: string[]) {
    const binarySearchTree = new BinarySearchTree();

    const addItemToBinarySearchTree = (item: string) =>
        binarySearchTree.insert(parseInt(item));

    values.forEach(addItemToBinarySearchTree);

    console.log(
        binarySearchTree.breadthFirstSearch(
            binarySearchTree.getRoot() ? [binarySearchTree.getRoot() as NodeTree] : []
        )
    )
}
