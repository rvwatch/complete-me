export default class Node {

  constructor(value) {
    this.value = value;
    this.children = {};
    this.isWord = false;
    this.favor = 0;
  }
}
