import React from 'react'

export default function Alert(props) {
    return (
        <div className="container-sm pt-2" style={{ height: `50px`, maxWidth: `500px`, margin: `0 auto` }}>
            {props.alert &&
                <div className="alert alert-success fade show text-center" role="alert">
                    {props.alert.msg}
                </div>}
        </div>
    )
}
