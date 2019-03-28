# Setting Up The Starter
1. Clone this repo
2. In your teriminal, from the directory 'jsx-and-props-starter' run ```npm install```
3. In your terminal, same directory, run ```npm start```

# React JSX & Props Starter

This is a very small sample app using React. There are a handful of things to try with the codebase here, or you can break the app and experiment, or use the files to do something different entirely.

The app features a button, when clicked, a random number will be generated, and a status of either online or offline will be selected. Those two values will be bundled as a 'server' object, stored in a 'server' array in state, and then it will be rendered to the page. The button can be pressed multiple times, and will render a new server each time. There are three components here. The Servers component is stateful, and handles the logic of adding servers, and is tracking the servers in it's state. The Server component is a display component that is receiving a prop from the Servers component for every new server. This works because the Servers Component is using .map() to iterate over the servers, and display them all in their own Server Component. **
There is also a Navbar Component that has been built and stubbed, but is not being used.


## Things to Try
* There are various style sheets, or styling props not being utilized. Read through the code, and see where those styles should be applied, and style some elements. Or use those stylesheets or props to generate your own custom styling.

* The Server display component is not rendering the number of the server, or the servers status, but there is a prop being passed to every Server Component. Try to dig into the props object to get that data back out. **

* The Navbar files have been created and stubbed out, but are not being used in any way, shape, or form. Create your own navbar and style it. Import this into the app. Play around and see if you can pass it some data.

* Try building your own footer from a functional component, style it as you see fit. Pass it data from a prop.

* See if you can get different server statuses to render different. Like all offline servers have red titles, and online servers have green. Try using a ternary above the return of the Server Display component.

* Break the app. Start changing various bits of code and see what happens, or what kind of errors you get it. Or comment out different lines. Remember ctrl/cmd-z is your friend, and you can always clone this repo again.

* Add on to the app. Create some of your own properties for a server to have, hard code them in, and display those props in the Server Component too. For an extra challenge, try to get the properties to be random. You could also recreate the same functionality that the servers have, but with another item. Create some new components and replicate the way the Servers component adds to a collection of items held in the component's state, iterate through them and display them in a functional component. Play around with different methods of styling(CSS files or using CSS in JS and the JSX style attribute).

** ( Uncomment Server.js Line 5 to see props displayed to console. Useful to see what props are being recieved by a Server Component, or to see when each Server Component is being rendered and displayed.)
