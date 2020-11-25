const Jumbotron = ({children, className, ...props}) => (<div className={"jumbotron" + (className ? " " + className: "")} {...props}>{children}</div>)

export default Jumbotron;