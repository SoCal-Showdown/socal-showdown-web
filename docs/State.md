# WHAT IS THE SPOOKY "STATE"!!!
Now when I was new to React I found state a lil confusing and a tough one to deal with, so hopefully I can make it less spooky for you guys!

State is something that is local to your components, meaning each component you make has its own state!

### Alright, so what does it do? 
I imagine state almost like the ULTIMATE variable for your component. It is used in code quite differently, but the reason I compare it to a variable is because it also stores data and can be changed in the code to make very diverse/interactive.

Time to give you an EXAMPLE!

```jsx
import React, { Component } from 'react'; //This import React and Components so you can use them!

class Example extends Component {
    constructor(props) { //The constructor sets up important stuff like state!
        super(props);
        this.state = { count: 0 }; //Refer to Note One
    }
    add = () => {
            this.setState({ count: this.setState.count + 1}); //Refer to Note Two
    };
    render() {
        return(
            <div>
                <p>Current Number: {this.state.count}</p>
                <button onClick={this.add}>Add to Count</button>
            </div>
        );
    }
}
```
Note One: Stores the data "count" as 0. You can add more data points by putting a comma! ex: { count: 0, example: 2 }!

Note Two: You can change the initial state in the constructor by using setState (or useState in functions). This code gets the initial state of count using "this.setState.count", and adds one.

### So that is how you use State in a Component! You can also use it in a function in a similar manner using "useState"
```jsx
import React, { useState } from 'react';

function Example() {
  // Declare a state variable named "count" and its updater function "setCount" (refer to Note Three)
  const [count, setCount] = useState(0);

  // Event handler to increment the count
  const add = () => {
    setCount(count + 1); // Update the "count" state using the "setCount" function
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={add}>Add to Count</button>
    </div>
  );
}
```
Note Three: An updater function is what you call to update your state, like setState in the component!
# Congrats! You now can use the spooooky "state"
### If you are still confused, ask questions! It took me a while to get it too!