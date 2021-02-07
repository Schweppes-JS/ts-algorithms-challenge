// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"


// Solution №1
const likes = (names: string[]): string => names[0] ? `${names[3] ? `${names[0]}, ${names[1]} and ${names.length - 2} others like this` : `${names[2] ? `${names[0]}, ${names[1]} and ${names[2]} like this` : `${names[1] ? `${names[0]} and ${names[1]} like this` : `${names[0]} likes this`}`}`}` : `no one likes this`;

// Test №1
console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));


// Solution №2
function like(names: string[]): string {
    switch (names.length) {
        case 0: return `no one likes this`; break;
        case 1: return `${names[0]} likes this`; break;
        case 2: return `${names[0]} and ${names[1]} like this`; break;
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`; break;
        default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}

// Test №2
console.log(like([]));
console.log(like(['Peter']));
console.log(like(['Jacob', 'Alex']));
console.log(like(['Max', 'John', 'Mark']));
console.log(like(['Alex', 'Jacob', 'Mark', 'Max']));