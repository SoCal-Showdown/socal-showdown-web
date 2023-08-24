# Functional Components

## Why do we need components?

React is mostly made up of Javascript functions - so, you end up using a lot of the same functions over and over again.

To make our code cleaner and easier to navigate, we use **components**.

To understand **instances of components**, think of a litter of puppies. All of them have the same parent, and while some may look identical and some may look different, they are each their own.

Instances of components each have the same original code (the same core function), and whether instances look similar or different, they all serve different purposes.

You'll likely have many instances of the same component all over your code.

So, let's learn to build one!

---

## Building a functional component

Let's build a component that puts selectable bullet points (Radio Buttons, as they're called) on the screen.

First, we start off with our function setup. We always need a declaration, return statement, and export. (When storing many components in one file, all the exports go at the bottom)

```jsx
function RadioButtons() {


    return ();
}

export default RadioButtons;
```

What do we want this component to do?

We want it to generate a certain number of buttons - with words attached to each - based on input from the user. In this case, we'll have the user pass in a list of words (each an **"item"**) as an array (called **"items"**).

To get that list, we'll use **props**. Props, (or properties), get passed into the component so that the function can use them.

```jsx
function RadioButtons(props) {


    return ();
}

export default RadioButtons;
```

Now, the functionality!

For each item in that list, we want the code to generate a new button. So:

```jsx
function RadioButtons(props) {

    for (let item in props.items){

    }

    return ();
}

export default RadioButtons;
```

This for loop is running for each **item** (each word) in **props.items** (the list of words passed in through props).

Next, let's determine what's being iterated - run - for each item.

```jsx
function RadioButtons(props) {

    for (let item in props.items) {
        output.push(
            <p key={item}>
                <input type="radio" value={item} />
                {props.items[item]}
            </p>
        )
    }
    return ();

}

export default RadioButtons;
```

This seems like a lot, so let's break it down.

In the components we're building, we usually generate the elements inside of the return statement, so don't worry about output.push for now.

Each button needs to have it's own key, to identify it as different from the other buttons.

We'll make an input of the type "radio" (to get that rounded shape, and selectable feature).
We gave each item a piece of text to use as the label for that button, so we'll access that by setting the value to item - as the for loop iterates through the list of items, generating a button for each item in the list, it'll give the button the name value of whatever item iteration it's on.

Now you're seeing the beauty of React - this is a combination of both HTML and JavaScript!

And finally, we'll finish out our return statement.

```jsx
function RadioButtons(props) {
    let output = [];
    for (let item in props.items) {
        output.push(
            <p key={item}>
                <input type='radio' value={item} />
                {props.items[item]}
            </p>
        );
    }
    return output;
}

export default RadioButtons;
```

We're having the buttons return as an array, for organization.

And finally, wherever you want to use this component, you simply write the name, and then specify information for whatever props that function might need, like so:

```jsx
<RadioButtons items={['one', 'two', 'three']} />
```

---

For more information on functional components, take a look at the [documentation from React](https://legacy.reactjs.org/docs/components-and-props.html)!

"Functional components in React serve the purpose of creating concise, readable UI components while utilizing React Hooks for efficient state management and side effect handling." (ChatGPT)
