# An Indepth explanantion and examples of React Hooks

### `UseState`

### `UseReducer`

### `UseEffect`

### `UseRef`

### `UseLayoutEffect`

### `UseContext`

### `UseImperativeHandle`

### `UseMemo`

### `UseCallback`

### `UseDebugValue`

### `ReactMemoization`

### `ReactMemo`

# 1 UseState:-

Note...
When ever a state changes in react component it forces the component to re-render.

# 2 UseReducer

This hook is actually a replacement or alternative to the useState hook, this means that they have the same purpose, which means they allow the user or develpoer to create variables, when there values are changed the component or page will re-render to show those values.

Note:-
if you are trying to execute more than one function you want to execute you might want to consider the use of use reducer. This is so you van have a single state that will change throught out in an onclick event for example and also collectively manage the states.

# 3 UseRef

    This hook is the easiest way to access and manipulate Dom element.

# 4 useLayoutEffect

This Hook is very similar to useEffect hook but the difference is that it renders before the useEffect Hook.
This is because the useEffect Hook is called after everything is rendered into the page and shown to the user,
wherease is called before the stuff is actually printed to the user.

# 4 UseImperativeHandle

     This Hook is use when the user wants to call a function from the outside,
     First you are going to use the forwardRef to that particular component so you can use useRef hook to access that component as a reference.

# 5 ReactMemoization

Note:-
This is the wikipedia Definition
Memoization this is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returing the cached result when the same inputs occurs again.

The definition of Memoization in react is different, this does not keep a log of all the component based on the props you sent in, what is does it only compares the previous props to the new props and when does props change it rerenders.

React.Memo:- This is a higher order function it creates components so you give it a component it wraps it and create another component.

Check up for code example on the folders.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
