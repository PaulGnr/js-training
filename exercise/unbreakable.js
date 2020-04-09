/*
## Title

### Instruction

Implement 2 functions:
- `split` that works like the string method `.split` but takes the string as
  its first argument and the separator as its second

- `join` that works like the array method `.join` but takes the array as
  its first argument.


### Notions

- https://devdocs.io/javascript/global_objects/array/join
- https://devdocs.io/javascript/global_objects/string/split

*/

String.prototype.split = undefined
String.prototype.match = undefined
RegExp.prototype.exec = undefined
Array.prototype.join = undefined

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = f => tests.push(f)

t(({ eq }) => eq(split('a b c', ' '), ['a', 'b', 'c']))
t(({ eq }) => eq(split('ggg - ddd - b', ' - '), ['ggg', 'ddd', 'b']))
t(({ eq }) => eq(split('ee,ff,g,', ','), ['ee', 'ff', 'g', '']))

t(() => join(['ee', 'ff', 'g', ''], ',') === 'ee,ff,g,')
t(() => join(['ggg', 'ddd', 'b'], ' - ') === 'ggg - ddd - b')
t(() => join(['a', 'b', 'c'], ' ') === 'a b c')

// Object.freeze(tests)
