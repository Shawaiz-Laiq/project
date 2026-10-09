function Alert(props) {
    return(
        props.alerts && <div className={`alert alert-${props.alerts.msg === "Warning" ? "danger" : props.alerts.msg } alert-dismissible fade show`} role="alert" >
                            <strong>{props.alerts.msg}</strong> {props.alerts.type}
                        </div>

    )
}

export default Alert;
