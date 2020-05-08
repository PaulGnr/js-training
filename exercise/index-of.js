/*
## Index Of

### Instructions

Create 3 functions:
- `indexOf` that returns the index of the first occurence of a value
in an array
- `lastIndexOf` that returns the index of the last occurence of a value
in an array
- `includes` that returns true if the value was found in the array
,false otherwise

> If a value is not found, for `indexOf` or `lastIndexOf`
the function returns -1

> `indexOf` and `lastIndexOf` takes an additionnal `fromIndex` argument
> that allow you to begin searching from a specific index.


### Notions

- https://devdocs.io/javascript/global_objects/array/indexof
- https://devdocs.io/javascript/global_objects/array/lastindexof
- https://devdocs.io/javascript/global_objects/array/includes

*/

Array.prototype.indexOf = undefined
Array.prototype.lastIndexOf = undefined
Array.prototype.includes = undefined

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)
const bigArray = [...Array(999).keys(), ...Array(999).keys()]

t((_, ctx) => (ctx.rn = Math.trunc(Math.random() * 999)))
t(() => indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2) === 1)
t(() => indexOf([0, 0, t, t], t) === 2)
t(() => indexOf([t, 0, 0, t], t, 1) === 3)
t(() => indexOf([t, 0, 0, t], t, 0) === 0)
t((_, ctx) => indexOf(bigArray, ctx.rn) === ctx.rn)
t((_, ctx) => indexOf(bigArray, {}) === -1)

t(() => lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2) === 7)
t(() => lastIndexOf([0, 0, t, t], t) === 3)
t(() => lastIndexOf([0, 0, t, t], t, 3) === 3)
t(() => lastIndexOf([t, 0, 0, t], t, 2) === 0)
t((_, ctx) => lastIndexOf(bigArray, ctx.rn) === ctx.rn + 999)
t((_, ctx) => lastIndexOf(bigArray, {}) === -1)

t(() => includes([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))
t(() => includes([0, 0, t, t], t))
t((_, ctx) => includes(bigArray, ctx.rn))
t((_, ctx) => !includes(bigArray, {}))

Object.freeze(tests)
