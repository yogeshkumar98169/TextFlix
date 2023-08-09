import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div>
            <div className="container-sm">
                <div className={`alert alert-success fade show my-3`} role="alert">
                    {props.alert.msg}
                </div>
            </div>
        </div>
    )
}
