# Functional Components

## Why do we need components?

React is mostly made up of Javascript functions - so, you end up using a lot of the same functions over and over again.

To make our code cleaner and easier to navigate, we use **components**.

Each time we use a component, it's called an instance. To understand **instances of components**, think of a litter of puppies. All of them have the same parent, and while some may look identical and some may look different, they are each their own.

Instances of components each have the same original code (the same core function), and whether instances look similar or different, they all serve different purposes. (You'll likely have many instances of the same component all over your code.)

So, let's learn to build one!

## Building a functional component

Let's build a component that puts selectable bullet points (Radio Buttons, as they're called) on the screen.

First, we start off with our function setup. We always need a declaration, return statement, and export. (When storing many components in one file, all the exports go at the bottom)

```jsx
function RadioButtons() {

    return;
}

export default RadioButtons;
```

What do we want this component to do?

We want it to generate a certain number of buttons - with words attached to each - based on input from the user. In this case, we'll have the user pass in a list of words (each an **"item"**) as an array (called **"items"**).

To get that list, we'll use **props**. Props, (or properties), get passed into the component so that the function can use them. We can specify that we want the list of **items** to be passed in, like so:

```jsx
function RadioButtons({items}) {


    return;
}

export default RadioButtons;
```

Now, the functionality!

For each item in that list, we want the code to generate a new button. To do that, we'll use the function .map(), which allows us to apply a certain function to every index (Each item, in this case) in an array. 

We're using the .map function on the array items, so:

```jsx
function RadioButtons({items}) {

    return items.map(

    );

}

export default RadioButtons;
```

Next, let's determine what should go inside the .map() function - what do we want to do for each item in our list?

We want to generate a button, with the text given for it:

```jsx
function RadioButtons({items}) {

    return items.map (item => (
            <p>
                <input type="radio" value={item} />
            </p>
        ));
}

export default RadioButtons;
```

Let's break that down.

For each **item** in the array, we're generating an input of type "radio" (to get a selectable, rounded button). We set the value (the text that will be displayed with the button) to item, so that as the function iterates through each item in the loop, the name for each button will pop up with it.


Now you're seeing the beauty of React - this is a combination of both HTML and JavaScript!

And finally, we need to give each button a unique **key**, so that it's identifiable even if it has the same value as another item. To do this, we'll need to get the **index** (the location of an item in an array) of the item we're applying the function to. So, we'll include it wherever we're importing **items** in.

```jsx
function RadioButtons({items}) {

    return items.map ((item, index) => (
        <p key={index}>
            <input type="radio" value={item} />
            {props.items[item]}
        </p>
        ));
}

export default RadioButtons;
```

And finally, wherever you want to use this component, you simply write the name, and then specify information for whatever props that function might need, like so:

```jsx
<RadioButtons items={['one', 'two', 'three']} />
```

---

For more information on functional components, take a look at the [documentation from React](https://legacy.reactjs.org/docs/components-and-props.html)!

"Functional components in React serve the purpose of creating concise, readable UI components while utilizing React Hooks for efficient state management and side effect handling." (ChatGPT)
