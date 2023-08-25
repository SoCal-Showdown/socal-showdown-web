# State

<div style="font-size: 2em">WHAT IS THE SPOOKY "STATE"!!!</div>

Now when I was new to React I found state a lil confusing and a tough one to deal with, so hopefully I can make it less spooky for you guys!

State is something that is local to your components, meaning each component you make has its own state!

## Alright, so what does it do? 

I imagine state almost like the ULTIMATE variable for your component. It is used in code quite differently, but the reason I compare it to a variable is because it also stores data and can be changed in the code to make very diverse/interactive.

Time to give you an EXAMPLE!

```jsx
import React, { useState } from 'react';

function Example() {
  // Declare a state variable named "count" and its updater function "setCount" (refer to Note Two)
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

Note One: The initial state of "count" is 0. You can change the initial state by changing the value in `setState`. This code gets the initial state of count using "count", and adds one.

Note Two: An updater function is what you call to update your state, like setState in the component!

<div style="font-size: 1.5em">So that is how you use State in a Component!</div>

<div style="font-size: 2em">Congrats! You now can use the spooooky "state"</div>

<div style="font-size: 1.5em">If you are still confused, ask questions! It took me a while to get it too!</div>
