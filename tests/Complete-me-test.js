import { expect } from 'chai';
import Node from '../lib/Node'
import Trie from '../lib/Complete-me.js'

describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
    node = new Node(null);
  });


  it('should start with zero words', () => {
    expect(trie.words).to.eq(0);
  })

  it('should add a word', () => {
    trie.insert('apple');
    expect(trie.words).to.eq(1);
    trie.insert('pepes');
    expect(trie.words).to.eq(2);
  })

  it('should populate dictionary into trie', () => {
    trie.populate();
    expect(trie.words).to.equal(235886);
    expect(trie.suggest('piz')).to.deep.equal(['pize', 'pizza', 'pizzeria', 'pizzicato', 'pizzle']);
  });

  it('should rank my selected suggestions', () => {
    trie.populate();
    expect(trie.suggest('piz')).to.deep.equal(['pize', 'pizza', 'pizzeria', 'pizzicato', 'pizzle']);
    trie.select('pizzicato');
    expect(trie.suggest('piz')).to.deep.equal(['pizzicato', 'pize', 'pizza', 'pizzeria', 'pizzle']);
  });

  it('should delete the word', () => {
    trie.populate();
    expect(trie.suggest('piz')).to.deep.equal(['pize', 'pizza', 'pizzeria', 'pizzicato', 'pizzle']);
    trie.delete('pizzicato');
    expect(trie.suggest('piz')).to.deep.equal(['pize', 'pizza', 'pizzeria', 'pizzle']);
  });


  it('should rank my selected suggestions', () => {
    trie.populate();
    expect(trie.suggest('piz')).to.deep.equal(['pize', 'pizza', 'pizzeria', 'pizzicato', 'pizzle']);
    trie.select('pizzicato');
    expect(trie.suggest('piz')).to.include.members(['pizzle']);
  });




});



