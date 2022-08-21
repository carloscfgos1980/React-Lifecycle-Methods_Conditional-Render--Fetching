import React, { Component } from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: ["a", "b"]
        }
    }
    // &&
    // false && false
    render() {
        return (
            <div>
                {
                    //<h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                    // Display the amount of messages 

                    // if dont want display any message when there is no message then we need an (if else), Example:
                    //  {this.state.unreadMessages.length > 0 ? 
                    //<h2>You have {this.state.unreadMessages.length} unread messages!</h2> :
                    //null
                    //}

                    //We can also use the && which doesnt need a second condition, like the one bellow:
                    this.state.unreadMessages.length > 0 &&
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                }
            </div>
        )
    }
}

export default App
