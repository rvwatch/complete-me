import { expect } from 'chai';
import Node from '../lib/Node'
import Trie from '../lib/Complete-me.js'

describe('Trie', () => {
  let trie;
  let node;

  beforeEach(() => {
    trie = new Trie();
    node = new Node(null);
  });

  it('should be an object', () => {
    expect(trie).to.be.a('object');
  })

  it('should be a function', () => {
    expect(Trie).to.be.a('function');
  })

  it('should have a Node as the root', () => {
    expect(trie.root).to.deep.equal(node);
  })

  describe('insert', () => {

    it('should be a method', () => {
      expect(trie.insert).to.be.a('function');
    }) 

    it('should start with zero words', () => {
      expect(trie.words).to.eq(0);
    })

    it('should add a word', () => {
      trie.insert('app');
      expect(trie.words).to.eq(1);
      expect(trie.root.children.a.children.p.children.p.isWord).to.equal(true);
    })

    it.only('should count words', () => {
      trie.insert('pizza');
      expect(trie.words).to.eq(1);
      trie.insert('pie');
      expect(trie.words).to.eq(2) ;
      trie.insert('monkey');
      expect(trie.words).to.eq(3);
      trie.insert('overboard');
      expect(trie.words).to.eq(4);
      trie.insert('squiggly');
      expect(trie.words).to.eq(5);
      console.log( JSON.stringify(trie, null, 4) );
    })

    it('should not allow duplicate words', () => {
      trie.insert('apple');
      trie.insert('apple');
      expect(trie.words).to.eq(1);
    })
  })

  describe('populate dictionary', () => { 

    it('should be an method', () => {
        expect(trie.populate).to.be.a('function');
    })  

    it('should populate dictionary into a trie', () => {
      trie.populate();
      expect(trie.words).to.equal(235886);
      expect(trie.suggest('piz')).to.deep.equal(['pize', 'pizza', 'pizzeria', 'pizzicato', 'pizzle']);
    });
  })
 
  
  describe('suggest', () => { 

    it('should be a method', () => {
      expect(trie.suggest).to.be.a('function');
    }) 

    it('Should suggest a word from dictionary', () => {
      trie.populate();
      trie.insert('piz');

      expect(trie.suggest('piz')).to.include.members(['pizza']);
    })

    it('should increment a words favor count every time its selected', () => {
      trie.insert('hey');
      expect(trie.root.children.h.children.e.children.y.favor).to.equal(0);
      trie.select('hey');
      expect(trie.root.children.h.children.e.children.y.favor).to.equal(1);
      trie.select('hey');
      expect(trie.root.children.h.children.e.children.y.favor).to.equal(2);
    })

    it('should rank my selected suggestions', () => {
      trie.populate();
      expect(trie.suggest('piz')).to.deep.equal(['pize', 'pizza', 'pizzeria', 'pizzicato', 'pizzle']);
      trie.select('pizzicato');
      expect(trie.suggest('piz')).to.deep.equal(['pizzicato', 'pize', 'pizza', 'pizzeria', 'pizzle']);
    });

    it('Should have words with a higher favor count in first index suggest array', () => {
      trie.insert('honey');
      trie.insert('honkey');
      trie.insert('hoops');
      trie.select('hoops');
      trie.select('hoops');
      trie.select('honey');
      expect(trie.suggest('h')).to.deep.equal(['hoops','honey', 'honkey']);
    })
  })

  describe('delete', () => { 

    it('should be a method', () => {
      expect(trie.delete).to.be.a('function');
    })

    it('should delete a word', () => {
      trie.insert('monkey');
      trie.insert('banana');
      trie.insert('book');
      trie.insert('bank');
      trie.insert('bark')
      trie.insert('funky');
      expect(trie.suggest('ba')).to.deep.equal(['banana', 'bank', 'bark']);
      trie.delete('bark');
      expect(trie.suggest('ba')).to.deep.equal(['banana', 'bank']);
    })

    it('should delete a word from the dictionary', () => {
      trie.populate();
      expect(trie.suggest('piz')).to.deep.equal(['pize', 'pizza', 'pizzeria', 'pizzicato', 'pizzle']);
      trie.delete('pizzicato');
      expect(trie.suggest('piz')).to.deep.equal(['pize', 'pizza', 'pizzeria', 'pizzle']);
    })
  })
   
})



