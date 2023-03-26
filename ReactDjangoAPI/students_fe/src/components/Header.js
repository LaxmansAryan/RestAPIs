import React, { Component } from "react";

class Header extends Component{
    render() {
        return (
            <div className="text-center">
                <img
                    src="https://www.canva.com/design/DAFWcli5OhY/XApothsszQIa0Z1gKEtnNw/view?utm_content=DAFWcli5OhY&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
                    width="300"
                    className="img-thumbnail"
                    style={{ marginTop: "20px"}}
                />
                <hr />
                <h5>
                    <i>presents</i>
                </h5>
                <h1>App with React + Django</h1>
            </div>
        );
    }
}

export default Header;