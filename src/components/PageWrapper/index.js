import "./style.css";

const PageWrapper = ({children, className, ...props}) => (<div className={"page-content" + (className ? " " + className: "")} {...props}>{children}</div>)

export default PageWrapper;