class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
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

The TrieNode class represents a node in the Trie. Each node has a children property, which is a dictionary (or map) of child nodes, and an isEndOfWord property, which indicates whether the current node represents the end of a word.

The Trie class represents the Trie data structure. It has a root property that points to the root node.

The insert method is used to insert a word into the Trie. It iterates through each character of the word, creating new nodes as needed, and marks the last node as the end of the word.

The search method is used to search for a complete word in the Trie. It traverses the Trie and returns true if the word is found.

The startsWith method is used to check if a given prefix exists in the Trie. It traverses the Trie and returns true if the prefix is found.

This implementation ensures efficient storage and retrieval of words based on prefixes, making it a useful data structure for tasks like autocomplete or searching for words with a common prefix.
*/