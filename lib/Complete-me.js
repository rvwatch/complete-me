import Node from './Node';

export default class Trie extends Node {

  constructor() {
    super(null);
    this.words = 0;
    this.root = new Node(null);
    this.suggestArray = [];
  }

  insert(string, node = this.root) {
    
    //base case 
    if(string.length === 0){
      this.words++;
      node.isWord = true;
      return; 
    }
    
    if (!node.children[string[0]]){
      node.children[string[0]] = new Node();
      return this.insert(string.substr(1), node.children[string[0]]);
    } else {
      return this.insert(string.substr(1), node.children[string[0]]);
    }
  }

  count(){
    return this.words;
  }


  suggest(string){
    let stringArray = [...string];
    let currentNode = this.root;

    stringArray.forEach((letter)=>{
      if(currentNode && currentNode.children){
        currentNode = currentNode.children[value];
      }
    })

    if (!currentNode || !currentNode.children){
      return '[]';
    } else {
      return this.findSuggestions(current, string);
    }
  }

  findSuggestions(currentNode, string){
    let nextLetter = Object.keys(currentNode.children);

    //base case

    if (currentNode.isWord){
      console.log('isWord');
      this.suggestArray.push(string);
    }
    nextLetter.forEach((value) => {
      this.findSuggestions(currentNode.children[value], string + value);
    });
    console.log(this.suggestArray);
    return this.suggestArray;
  }


}












 