## Observations

### JSX

```const element = <h1>Hello, world!</h1>;```

syntax extension to JavaScript  
React separates concerns with loosely coupled units called "components"


```const element = (<h1>Hello, {formatName(user)}!</h1>);```

wrapped in parenthesis

```<div tabIndex="0"><img src={user.avatarUrl}>```

quotes (for string values) or curly braces (for expressions)  
safe to imbed user input in JSX, there is protection from XSS

### Rendering Elements

Elements are what components are "made of"

```<div id="root"></div>```

We call this a "root" DOM node because everything inside it will be managed by React DOM  
React elements are immutable

### Components and Props

The simplest way to define a component is to write a JavaScript function

```function Welcome(props) {return <h1>Hello, {props.name}</h1>}```

We call such components "function components"  
You can also use an ES6 class to define a component

```class Welcome extends React.Component {render() {return <h1>Hello, {this.props.name}</h1>;}}```

Elements can represent user defined components

```const element = <Welcome name="Sara" />;```

**Always start component names with a capital letter**  
Whether you declare a component as a function or a class, it must never modify its own props  
Impure functions change their own input

```function withdraw(account, amount) {account.total -= amount;}```

Pure functions do not

```fuction sum(a, b) {return a+b;}```

**All React components must act like pure functions with respect to their props**

### State and Lifecycle

