// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ''       => "Hello, World!" # name is an empty String

// My solution №1
function hello(name: string = "World"): string {
  if (name === "") {
    return "Hello, World!";
  } else {
    if (typeof name === "string") {
      let capitalLetter = name[0].toUpperCase();
      let trueName = capitalLetter + name.toLowerCase().slice(1);
      return `Hello, ${trueName}!`;
    } else {
      alert("Please, enter correct name");
    }
  }
}

// My solution №2
const hi = (name?: string): string =>
  `Hello, ${name ? name[0].toUpperCase() + name.toLowerCase().slice(1) : "World"
  }`;

// Test №1
console.log(hello("johN"));
console.log(hello("alice"));
console.log(hello(""));
console.log(hello());

// Test №2
console.log(hi("johN"));
console.log(hi("alice"));
console.log(hi(""));
console.log(hi());
