const Jumbotron = ({children, className, ...props}) => (<div className={"container my-3" + (className ? " " + className: "")} {...props}>{children}</div>)

export default Jumbotron;