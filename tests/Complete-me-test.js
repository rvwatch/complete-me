import { expect } from 'chai';
import Node from '../lib/Node'
import Trie from '../lib/Complete-me.js'

describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });


  it('should start with zero words', () => {
    expect(trie.words).to.eq(0);
  })

  it('should add a word', () => {
    trie.insert('apple');
    expect(trie.words).to.eq(1);
    trie.insert('pepes');
    expect(trie.words).to.eq(2);
    console.log( JSON.stringify(trie, null, 4) );
  })


});



