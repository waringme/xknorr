import ffetch from '../../scripts/ffetch.js';

console.log('aaaaa');

export default async function decorate(block) {
  const list = document.createElement('ul');
  const entries = ffetch('/query-index.json');
  block.innerText = '';
  for await (const entry of entries) {
    if (entry.path.startsWith('/tips/')) {
      const item = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = entry.path;
      item.appendChild(a);
      list.appendChild(item);
      console.log(entry.path);
    }
    block.appendChild(list);
  }
}
