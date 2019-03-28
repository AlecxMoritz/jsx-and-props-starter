# React JSX & Props Starter

This is a very small sample app using React. The app features a button, when clicked, a random number will be generated, and a status of either online or offline will be selected. Those two values will be bundled as an object, stored in an array in state, and then it will be rendered to the page.The button can be pressed multiple times, and will render a new server each time. There are two components here. The Servers component is stateful, and handles the logic of adding servers, and is tracking the servers in it's state. The Server component is a display component that is receiving a prop from the Servers component for every new server. This works because the Servers Component is using .map() to iterate over the servers, and display them all in their own Server Component.
( Uncomment Server.js Line 5 to see)

## Things to Try
There are various style sheets, or styling props not being utilized. Read through the code, and see where those styles should be applied, and style them. 

The Server display component is not rendering the number of the server, or the servers status, but there is a prop being passed to every Server Component. Try to dig into the props object to get that data back out.

The Navbar files have been created and stubbed out, but are not being used in any way, shape, or form. Create your own navbar and style it. Import this into the app.

Try building your own footer from a functional component.

See if you can get different server status to render different. Like all offline servers have red titles, and online servers have green. Try using a ternary above the return of the Server Display component.

Break the app. Start changing various bits of code and see what happens, or what kind of errors you get it. Or comment out different lines. Remember ctrl/cmd-z is your friend. 

Add on to the app. Create some of your own properties for a server to have, hard code them in, and display those props in the Server Component too. For an extra challenge, try to get the properties to be random. You could also recreate the same functionality that the servers have, but with another item. Make a way to add another item to a collection of items, and iterate through them. Play around with different methods of styling(CSS files or using CSS in JS and the JSX style attribute).