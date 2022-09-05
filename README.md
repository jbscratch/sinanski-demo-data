# sinanski-demo-data
A demo repo for @the_real_sinan for demo-data package in typescript



## Original Readme added below: 

--- 

Todo
- Add random image here. Maybe person, food and landscape

# Demo data
This is a helper to create demo data for prototypes. All numeric values offer a `range` param to be able to control a random range.

    type Range = number | [number, number];

#### `id()`
creates a random id like `_abcd1234` with random values but always starting with `_`

#### `number(range: Range)`
Will create a random natural number in the range provided by the param.
- When providing a number it will have the range from 0 to the provided number
- When providing an array the values will work as [min, max]

#### `price(range: Range, currency?: string, thousand_separator?: string): string`
Will provide something like `1.234 €` and uses the range from `number()`

#### `chance(value?: number): boolean`
Will throw a coin to decide wether it is true or false. The optional param can set the chances between 0 and 1 as a 
percentage chance to be true

#### `name(): string`
Returns a random name like `Abandoned Information`

#### `date(start?: Date, end?: Date): Date`
A random date within the range. Per default this is 1.1.2018 - now

#### `text(length: Range): string`
Will create a lorem ipsum text with a random length calculated by the length param.

#### `createArray(length: number, value?: (index: number) => string): string[]`
Usually used to create an array of a specific length to map or otherwise loop over.
By default the array consists of random ids. A passed callback can set custom string values instead.
