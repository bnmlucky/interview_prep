class TrieNode {
    children: Record<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let node: TrieNode = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word: string): boolean {
        let node: TrieNode = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix: string): boolean {
        let node: TrieNode = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: false
console.log(trie.startsWith("app")); // Output: true
trie.insert("app");
console.log(trie.search("app")); // Output: true
/* 
Explanation:

The TrieNode class remains the same, representing a node in the Trie.

The Trie class is defined similarly to the JavaScript version, with types added to function parameters and return types.

TypeScript allows us to explicitly define types, providing better static typing and catching potential errors during development.

The usage of Record<string, TrieNode> in the children property indicates that it is an object with string keys, where each key is associated with a TrieNode.

The rest of the implementation follows the same logic as in the JavaScript version, with the necessary adjustments for TypeScript syntax and type annotations.

This TypeScript implementation provides the benefits of static typing, making the code more robust and helping to catch potential issues early in the development process.
*/