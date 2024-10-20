const display = document.querySelector('.display');
const container = document.querySelector('#container');
console.log(container);
console.log(container.firstElementChild);
console.log(container.children[1])
let title = container.children[0];
let bibleVerse = container.children[1];
let content = container.children[2];

let posts = [
  {
    title: 'Rape; Justifiable?',
    bibleVerse: 'Genesis 1:1-2',
    content: 'Dinah was the 1st child'
  },
  {
    title: 'Dance; Justifiable?',
    bibleVerse: 'Genesis 2:1-2',
    content: 'Dinah was the 2nd child'
  },
  {
    title: 'Song; Justifiable?',
    bibleVerse: 'Genesis 3:1-2',
    content: 'Dinah was the 3rd child'
  }
];

function render() {
  let msgs = [];
  let items = posts.forEach((item) => {
  
    // container.children[0] = item.title;
    // container.children[1] = item.bibleVerse;
    // container.children[2] = item.content;

    title = item.title;
    bibleVerse = item.bibleVerse;
    content = item.content;

    // msgs.push(item);

    msgs.push(`<div>title</div><div>bibleVerse</div><div>content</div>`);
  });
  console.log(msgs);
  
  display.innerHTML = msgs;
}

render();