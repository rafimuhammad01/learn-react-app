import React from "react";

function Profile(props) {
    return (
        <div className="Profile">
            <h1>{props.name}</h1>
            <h1>{props.npm}</h1>
            <h1>{props.description}</h1>
        </div>
    )
}

export default Profile;