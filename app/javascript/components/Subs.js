import React from "react";

const Subs = (props) => {
    const renderSubs = () => {
        return props.subs.map((sub) => {
            return (
                <div>
                    <h1>{sub.name}</h1>
                    <a href={`/subs/${sub.id}`}>Go to Sub Reddit</a>
                </div>
            );
        });
    };
    return (
        <div>
            <h1>All Sub Reddits</h1>
            <a href="/">Home Page</a>
            <br></br>
            <a href="/subs/new">Create a Sub</a>
            <p>{renderSubs()}</p>
        </div>
    );
};

export default Subs;