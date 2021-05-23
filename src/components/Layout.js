import React from "react";

function Layout(props) { 
    // this is the layout of the middle section of  the
    // so we are distributing all the details inside the middle container as children
     console.log(props.children)

    return (
        <div className="container max-w-6xl px-10 mx-auto">
            {props.children}
        </div>
    )
}

export default Layout;