// Node class to represent a node in the Huffman tree
class Node {
  constructor(symbol, frequency) {
    this.symbol = symbol;
    this.frequency = frequency;
    this.left = null;
    this.right = null;
  }
}

// Function to build the Huffman tree
function buildHuffmanTree(data) {
  // Calculate the frequency of each symbol
  const frequencyMap = {};
  for (let symbol of data) {
    frequencyMap[symbol] = frequencyMap[symbol] + 1 || 1;
  }

  // Create a priority queue (min heap) to store the nodes
  const priorityQueue = [];
  for (let symbol in frequencyMap) {
    priorityQueue.push(new Node(symbol, frequencyMap[symbol]));
  }
  priorityQueue.sort((a, b) => a.frequency - b.frequency);

  // Build the Huffman tree
  while (priorityQueue.length > 1) {
    const leftNode = priorityQueue.shift();
    const rightNode = priorityQueue.shift();
    const parentNode = new Node(null, leftNode.frequency + rightNode.frequency);
    parentNode.left = leftNode;
    parentNode.right = rightNode;
    priorityQueue.push(parentNode);
    priorityQueue.sort((a, b) => a.frequency - b.frequency);
  }

  // Return the root of the Huffman tree
  return priorityQueue[0];
}

// Function to generate Huffman codes
function generateHuffmanCodes(root, currentCode, huffmanCodes) {
  if (root.symbol) {
    huffmanCodes[root.symbol] = currentCode;
    return;
  }
  generateHuffmanCodes(root.left, currentCode + "0", huffmanCodes);
  generateHuffmanCodes(root.right, currentCode + "1", huffmanCodes);
}

// Function to encode data using Huffman codes
function encodeData(data, huffmanCodes) {
  let encodedData = "";
  for (let symbol of data) {
    encodedData += huffmanCodes[symbol];
  }
  return encodedData;
}

// Function to decode data using Huffman codes
function decodeData(encodedData, root) {
  let decodedData = "";
  let currentNode = root;
  for (let bit of encodedData) {
    if (bit === "0") {
      currentNode = currentNode.left;
    } else if (bit === "1") {
      currentNode = currentNode.right;
    }
    if (currentNode.symbol) {
      decodedData += currentNode.symbol;
      currentNode = root;
    }
  }
  return decodedData;
}

// Example usage
const inputData = "HELLO_WORLD";
const huffmanTree = buildHuffmanTree(inputData);
const huffmanCodes = {};
generateHuffmanCodes(huffmanTree, "", huffmanCodes);
const encodedData = encodeData(inputData, huffmanCodes);
const decodedData = decodeData(encodedData, huffmanTree);

console.log("Original Data:", inputData);
console.log("Encoded Data:", encodedData);
console.log("Decoded Data:", decodedData);
