# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is object destructuring?

  Your answer:
    Object destructuring is a way to store object properties into variables so that you can create a pathway that can easily access the property. You must declare a variable, list the variable names inside curly brackets, and assign them to the object you're destructuring. This can save you keystrokes and memory while coding.

  Researched answer:
    Object destructuring allows you to break them out into individual, recallable variables. This was introduced to JavaSript ES6.


2. What are React lifecycle methods? Provide three examples.

  Your answer:
    I'm not sure what React lifecycle methods are, but I can find out for you.

  Researched answer:
    React components have three phases to a lifecycle: mounting, updating, and unmounting. You can run lifecycle methods to override code at particular times in the lifecycle process. The constructor() method is used when an instance of an component is being creataed and inserted into the DOM. render() can run during mounting and updating, which can happen as a result of changes to props or state. componentDidUpdate() is lifecycle method at the end of the updating lifecycle, which can be useful to utilize if you want something to be updated at the very end of a process.


3. What is the difference between a class and an object?

  Your answer:
    Classes are the blueprints to make objects. Objects that are made with class instances will have access to the same properites and methods as found in their shared parent class' constructor, but the objects act independetly of each other and may have unique properties as well.

  Researched answer:
    Classes are reusable and customizable. They are written in PascalCase. Objects are a non-primitave datatype written in JSON that are mutable, which means that their values can be updated. They are written in camelCase.


4. What is the difference between a HTML div and a span?

  Your answer:
    A div is a block-level element so it takes up the whole width of the page. A span is an in-line element, so it only takes as much space as it is wide.

  Researched answer:
    Because a div is block-level, it has a sort of line break before and after it. They're both used as content wrappers so that you may target them with classes or IDs for styling.


5. What is React.Fragment (or <>) and why would you want to use it?

  Your answer:
    A React.Fragment is similar to an HTML div tag. It's used to encapsulate several pieces of JSX. This is important because components can only return and render a single element. If you have several elements you want to render, you can simply wrap them in a React Fragment so that the component can render it all as a single element.

  Researched answer:
    React.Fragments are preferred by some coders because they are able to wrap JSX for rendering without creating another element to render, like a div.


6. What are three options for creating responsive design?

  Your answer:
    I'm not sure what this entails, but I can find out for you.

  Researched answer:
    Responsive design is fluid and dynamic, as opposed to webpages that are static and don't change across different platforms and browsers. Creating component-based apps is responsive, as you can quickly render each component upon each lifecycle rather than render the whole page. Styling with styled components in React is also an option for designing responsively. Media quieries in CSS3 allow you to customize the presentation of content based on specific output device types, like handheld or projection.


7. What are props in React?

  Your answer:
    Props stand for properties in React. State can only be sent in one direction in React, so it's best to create the state in a parent component and pass it down to however many childrean you need to. To pass state onto child components, it must be passed as props.

  Researched answer:
    Props are "read only", so they cannot be updated or changed by the child componenet. This is because components should be the only ones to manager their own state.


8. What is `this` in JavaScript?

  Your answer:
    `this` is a keyword in JavaScript that is used locally within an object to refer to the object itself. If you want to access a property or method within an object, you have to use `this` before the property or method name.

  Researched answer:
    This has different values depending on where it's used. In a method, this refers to the owner object. In an event, this refers to the element that received the event.



9. STRETCH: What is a ternary operator in JavaScript?

  Your answer:
    A ternary operator is shorthand for an if else statement. You first have the condition followed by a question mark. If the condition is true, the code on the left of the colon will execute; if it is false, the code on the right side of the colon will execute.
    
  Researched answer:
    The ternar operator is the only JavaScript operator that takes three operands: a condition, an expression to execute if the condition is truthy, and the expression to execute if the condition is falsy.


10. STRETCH: What is an anonymous function in JavaScript?

  Your answer:
    An anonymous function is an unnamed function that takes in no arguments. 

  Researched answer:
    Anonymous functions are functions stored in variables that do not require names. They are evoked using the variable name.


## Looking Ahead: Terms for Next Week
- Ruby
    A dynamic, open-source object-orietned programming language with a focus on simplicity and productivity.
- Object oriented programming
    Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic.
- RSpec
    RSpec is a computer domain-specific language testing tool written in programming language Ruby to test Ruby code.
- Instance variable
    Instance variables are created when an object is created with the use of the keyword 'new' and destroyed when the object is destroyed.
- Ruby blocks
    A Ruby block is a way of grouping statements. The block is written starting on the same line as the method call's last parameter.
- Ruby hashes
    A Hash is a collection of key-value pairs like this: "employee" = > "salary". It is similar to an Array, except that indexing is done via arbitrary keys of any object type, not an integer index.
- `getter` and `setter` methods in Ruby
    Getter methods are used to get the value of an instance variable while the setter methods are used to set the value of an instance variable of some class.