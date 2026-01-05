const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) -> we expect it to merge the elements from both arrays, but it pushes/adds the complete array of dc_heros as a single element to marvel_heroes

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); -> in order to dig in an element in a subarray

// const allHeros = marvel_heros.concat(dc_heros) -> concat builds a new array by adding elements of an array into another specified array | NOTE-> it does not make changes of any of the original arrays
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]// -> this ... is called 'spread' which makes array with all the elements of the given array, it is more used than concat

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // -> it dissolves all the sub arrays in an array and spreads all the elements of the sub array | we can specify upto how much depth we want to dissolve subarrays

console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // -> checks if input is an array or not (boolean)
console.log(Array.from("Hitesh")) // -> makes an array from the elements of input, in this case -> [ 'H', 'i', 't', 'e', 's', 'h']
console.log(Array.from({name: "hitesh"})) // interesting -> answer: [], it gives an empty array when it is not able to interpret elements from given input

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // -> creates an array from the given elements