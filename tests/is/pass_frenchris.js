is.num = el => typeof el === 'number'
is.nan = el => typeof el === 'Nan'
is.str = el => typeof el === 'string'
is.bool = el => typeof el === 'boolean'
is.undef = el => typeof el === 'undefined'
is.def = el => typeof el === 'defined'
is.arr = el => typeof el === 'array'
is.obj = el => typeof el === 'object' || typeof el === null
is.fun = el => typeof el === 'function'
is.truthy = el => el == true
is.falsy = el => el == false
