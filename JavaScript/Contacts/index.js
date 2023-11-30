class Node {
    constructor(value) {
        this.key = value;
        this.end = false;
        this.size = 0;
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new Node(null);
    }

    insert(value) {
        let currentNode = this.root;
        for (let letter of value) {
            if (!currentNode.children.get(letter)) {
                currentNode.children.set(letter, new Node(letter));
            }

            currentNode = currentNode.children.get(letter);
            currentNode.size++;
        }

        currentNode.end = true;
    }

    searchAmount(value) {
        let currentNode = this.root;

        for (let letter of value) {
            if (!currentNode.children.get(letter)) {
                return 0;
            }

            currentNode = currentNode.children.get(letter);
        }

        return currentNode.size;
    }
}

function solution(queries) {
    const METHODS = {
        add: 'add',
        find: 'find',
    };

    const values = new Trie();
    const results = [];

    const METHOD_FUNCTIONS = {
        add: (value) => {
            values.insert(value);
        },
        find: (value) => {
            const result = values.searchAmount(value);
            return result;
        },
    }

    queries.forEach(query => {
        const [method, value] = query;
        const methodFunction = METHOD_FUNCTIONS[method];
        if (methodFunction) {
            const result = methodFunction(value);
            if (method === METHODS.find) {
                results.push(result);
            }
        }
    })

    return results;
}