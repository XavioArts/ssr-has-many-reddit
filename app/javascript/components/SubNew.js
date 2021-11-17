import React from "react";

const SubNew = () => {
    return (
        <div>
            <h1>New SubReddit Form</h1>
            <form>
                <p>Enter new SubReddit name:</p>
                <input name="sub[name]" />
                <input type="Submit">Create</input>
            </form>
        </div>
    );
};

export default SubNew;