# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.81.96.130
Launching my AMI I initially put it on a private subnet. Even though it had a public IP address and the security group was right, I wasn't able to connect to it.

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

This was easy. I was careful to use the correct structural elements such as header, footer, main, nav, and form. The links between the three views work great using the `a` element.

The part I didn't like was the duplication of the header and footer code. This is messy, but it will get cleaned up when I get to React.

## CSS

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```

HTML & CSS
Q: In the following code, what does the link element do?
HTML

<head>
  <link rel="stylesheet" href="styles.css">
</head>
The <link> element creates a relationship between the current HTML document and an external resource. In this example, rel="stylesheet" specifies that the external resource is a stylesheet, and href="styles.css" provides the URL for that stylesheet. Essentially, it tells the browser to load and apply the CSS rules from styles.css to the HTML page.

Q: In the following code, what does a div tag do?
HTML

<body>
  <div class="container">
    <h1>Welcome</h1>
    <p>This is a paragraph inside a container.</p>
  </div>
</body>
The <div> (or "division") tag is a generic container used to group other HTML elements together. It doesn't have any semantic meaning on its own but is fundamental for layout and styling. You can apply CSS styles or manipulate a whole section of the page with JavaScript by targeting the div.

Q: What is the difference between the #title and .grid selector?
CSS

#title {
  font-size: 24px;
}

.grid {
  display: grid;
}
The key difference is how they select elements:

#title: The hash (#) symbol selects an element by its ID. IDs must be unique within an HTML document. You would use this for one specific element, like <h1 id="title">.

.grid: The period (.) symbol selects elements by their class. A class can be applied to multiple elements. You could use this for several divs, like <div class="grid">...</div> and <section class="grid">...</section>.

Q: What is the difference between padding and margin?
CSS

.box {
  padding: 10px;
  margin: 20px;
  border: 1px solid black;
}
Padding is the space inside an element, between its content and its border. In the example, padding: 10px creates 10 pixels of space around the text/content within the .box.

Margin is the space outside an element, between its border and other elements. margin: 20px creates 20 pixels of space around the entire .box, pushing other elements away from it.

Q: Given this HTML and CSS, how will the images be displayed using flex?
HTML

<div class="image-container">
  <img src="img1.png">
  <img src="img2.png">
  <img src="img3.png">
</div>
CSS

.image-container {
  display: flex;
  justify-content: space-around;
}
The display: flex; property turns the .image-container into a flex container. By default, this will arrange the child <img> elements horizontally in a row. The justify-content: space-around; property will distribute the images evenly within the container, with space before the first image, between the images, and after the last one.

Q: What does the following padding CSS do?
CSS

.card {
  padding: 10px 5px 15px 20px;
}
This is shorthand for setting the padding on all four sides of an element. The values are applied in a clockwise direction starting from the top:

Top: 10px

Right: 5px

Bottom: 15px

Left: 20px

Q: How would you use CSS to change all div elements to have a background color of red?
You would use the div type selector.

CSS

div {
  background-color: red;
}
Q: How would you display an image with a hyperlink in HTML?
You would nest an <img> tag inside an anchor <a> tag.

HTML

<a href="https://www.example.com">
  <img src="path/to/your/image.jpg" alt="Descriptive text for the image">
</a>
Q: In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
Content: The text, image, or other media in the element.

Padding: The transparent space around the content.

Border: The line that goes around the padding and content.

Margin: The transparent space outside the border.

Q: Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
HTML

<p>Bubble bubble, toil and <span>trouble</span>, on the double.</p>
You would target the <span> element that wraps the word "trouble".

CSS

span {
  color: green;
}
Q: What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
Paragraph: <p>

Ordered List: <ol>

Unordered List: <ul>

First Level Heading: <h1>

Second Level Heading: <h2>

Third Level Heading: <h3>

Q: How do you declare the document type to be HTML?
You use the <!DOCTYPE> declaration at the very top of your HTML file.

HTML

<!DOCTYPE html>
JavaScript
Q: What does the following code using arrow syntax function declaration do?
JavaScript

const calculateArea = (width, height) => width * height;
This code defines a constant named calculateArea and assigns it an arrow function.

The function accepts two parameters, width and height.

Because there are no curly braces { }, the expression width * height is implicitly returned.

It's a concise way of writing function calculateArea(width, height) { return width * height; }.

Q: What does the following code using map with an array output?
JavaScript

const numbers = [2, 4, 6];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
The .map() method creates a new array by calling the provided function on every element in the original array. In this case, it multiplies each number by 2.

Output: [4, 8, 12]

Q: What does the following code output using getElementById and addEventListener?
HTML

<button id="actionBtn">Click Me</button>
<p id="message"></p>
JavaScript

const button = document.getElementById('actionBtn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = 'Button was clicked!';
});
This code finds the button with the ID actionBtn and adds a "click" event listener to it. When the button is clicked, the browser executes the arrow function, which finds the paragraph with the ID message and changes its text content. The page will initially show a button and an empty paragraph. After clicking, the paragraph will display "Button was clicked!".

Q: What does the following line of Javascript do using a # selector?
JavaScript

const header = document.querySelector('#main-header');
This code uses the document.querySelector() method to find the first element in the HTML document that matches the provided CSS selector. Here, the selector '#main-header' will find the element with the ID of main-header. The found element is then stored in the header constant.

Q: What will the following code output when executed using a for loop and console.log?
JavaScript

for (let i = 0; i < 3; i++) {
  console.log(i);
}
This for loop initializes a variable i at 0. It will continue to run as long as i is less than 3, and it increments i by 1 after each iteration.

Output:

0
1
2
Q: How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
JavaScript

const element = document.getElementById('byu');
element.style.color = 'green';
Q: Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
HTML

<p>The quick brown <span id="target">animal</span> jumps over the lazy fish.</p>
JavaScript

document.getElementById('target').textContent = 'crow';
Q: If you want to include JavaScript on an HTML page, which tag do you use?
You use the <script> tag. It can be used to embed code directly or to link to an external file.

HTML

<script src="app.js"></script>

<script>
  console.log('Hello from inline JavaScript!');
</script>
Q: Which of the following are true? (mark all that are true about the DOM)
✅ The DOM is a tree of objects that represents the HTML.
✅ The DOM can be modified with JavaScript.
❌ The DOM is another name for HTML. (Incorrect. The DOM is a representation of the HTML).
✅ Browser events can trigger changes in the DOM.

Q: By default, the HTML span element has a default CSS display property value of:
inline

Q: What is valid JavaScript syntax for if, else, for, while, switch statements?
JavaScript

// if / else if / else
if (condition1) {
  // code to run if condition1 is true
} else if (condition2) {
  // code to run if condition2 is true
} else {
  // code to run if all previous conditions are false
}

// for loop
for (let i = 0; i < 10; i++) {
  // code to run 10 times
}

// while loop
let i = 0;
while (i < 10) {
  // code to run as long as i is less than 10
  i++;
}

// switch statement
switch (expression) {
  case value1:
    // code to run if expression matches value1
    break;
  case value2:
    // code to run if expression matches value2
    break;
  default:
    // code to run if no cases match
}
Q: What is the correct syntax for creating a JavaScript object?
You use curly braces {} with key-value pairs.

JavaScript

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};
Q: Is it possible to add new properties to JavaScript objects?
Yes. You can add new properties at any time using dot notation or bracket notation.

JavaScript

const car = { make: "Honda", model: "Civic" };
car.year = 2022; // Add a new property
console.log(car.year); // Outputs 2022
Q: Which of the following correctly describes JSON?
JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is often used to send data from a server to a web page.

Q: What will the following code using Promises output when executed?
JavaScript

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 500);
});

myPromise.then((message) => {
  console.log("Got a message: " + message);
});

console.log("Waiting for promise...");
Because the promise waits for 500 milliseconds before resolving, the console.log outside the promise will execute first.

Output:

Waiting for promise...
Got a message: Success!
Command Line & Networking
Q: What do the console commands chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?
chmod: Change mode (change file permissions).

pwd: Print working directory (shows your current location).

cd: Change directory.

ls: List directory contents.

vim/nano: Text editors for the command line.

mkdir: Make directory.

mv: Move or rename a file/directory.

rm: Remove a file.

man: Displays the manual page for a command.

ssh: Secure Shell (connect to a remote computer).

ps: Process status (list currently running processes).

wget: A non-interactive tool to get files from the web.

sudo: Super user do (execute a command with root/administrator privileges).

Q: Which of the following console commands creates a remote shell session?
ssh (Secure Shell)

Q: Which of the following is true when the -la parameter is specified for the ls console command?
The -la flag combines -l (long listing format) and -a (show all files, including hidden ones). It will:

Display files in a list format with details like permissions, owner, size, and modification date.

Include files and directories that start with a . (dot), which are normally hidden.

Q: For the domain name banana.fruit.bozo.click, which is the top-level domain, which is a subdomain, and which is the root domain?
Top-Level Domain (TLD): .click

Root Domain / Second-Level Domain: bozo.click

Subdomain: banana.fruit (or fruit is a subdomain of bozo.click, and banana is a subdomain of fruit.bozo.click).

Q: Is a web certificate necessary to use HTTPS?
Yes. An SSL/TLS certificate is required to establish a secure, encrypted HTTPS connection.

Q: Can a DNS A record point to an IP address or another A record?
A DNS A record can only point to an IPv4 address. To point to another domain name (like another A record), you would use a CNAME record.

Q: Port 443, 80, and 22 are reserved for which protocols?
Port 443: HTTPS (Hypertext Transfer Protocol Secure)

Port 80: HTTP (Hypertext Transfer Protocol)

Port 22: SSH (Secure Shell)
