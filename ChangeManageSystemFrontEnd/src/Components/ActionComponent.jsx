import React, {Component} from "react";

class ActionComponent extends Component {
constructor(props) {
    super(props)
    this.state = {
      stateLevel: props.stateLevel,
    }
    this.handleClick = this.handleClick.bind(this);
}

handleClick=(e)=>{
    if (e.target.value == "Freeze") {
        console.log("Freeze");
    } else if (e.target.value == "Edit") {
        console.log("Edit");
    }
}

render() {


if (this.state.stateLevel == "Open") {
    return (
    // Display the following options:
    // Freeze
    // Edit
    <div id="u531-1" class="ax_default box_1 u531" data-label="Action" style={{width: '120px', height: '120px', left: '1197px', top: '0px', visibility: 'inherit'}}>
        <div id="u531-1_div" class="u531_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
        <div id="u531-1_text" class="text u531_text">
            <ul>
                <button onClick={this.handleClick} style={{cursor: 'pointer'}} value="Freeze">Freeze</button>
                <button onClick={this.handleClick} style={{cursor: 'pointer'}} value="Edit">Edit</button>
            </ul>
        </div>
    </div>
    )
    
} else if (this.state.stateLevel == "Frozen") {
    return (
    // Display the following options:
    // (Application) Approve
    // Deny
    // Unfreeze
    <div id="u531-1" class="ax_default box_1 u531" data-label="Action" style={{width: '120px', height: '120px', left: '1197px', top: '0px', visibility: 'inherit'}}>
        <div id="u531-1_div" class="u531_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
        <div id="u531-1_text" class="text u531_text">
            <ul>
                <button onClick={this.handleClick} style={{cursor: 'pointer'}} value="Approve">Approve</button>
                <button onClick={this.handleClick} style={{cursor: 'pointer'}} value="Deny">Deny</button>
                <button onClick={this.handleClick} style={{cursor: 'pointer'}} value="Unfreeze">Unfreeze</button>
            </ul>
        </div>
    </div>
    )
} else if (this.state.stateLevel == "Application Approval") {
    return (
    // Display the following options:
    // (Department) Approve
    // Deny
    // Unfreeze
    <div id="u531-1" class="ax_default box_1 u531" data-label="Action" style={{width: '120px', height: '120px', left: '1197px', top: '0px', visibility: 'inherit'}}>
        <div id="u531-1_div" class="u531_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
        <div id="u531-1_text" class="text u531_text">
            <ul>
                <button onClick={this.handleClick} style={{cursor: 'pointer'}} value="Approve">Approve</button>
                <button onClick={this.handleClick} style={{cursor: 'pointer'}} value="Deny">Deny</button>
                <button onClick={this.handleClick} style={{cursor: 'pointer'}} value="Unfreeze">Unfreeze</button>
            </ul>
        </div>
    </div>
    )
} else {
    return (
    // Department Approval
    // Display the following options:
    // (Operations) Approve
    // Deny
    // Unfreeze
    <div id="u531-1" class="ax_default box_1 u531" data-label="Action" style={{width: '120px', height: '120px', left: '1197px', top: '0px', visibility: 'inherit'}}>
        <div id="u531-1_div" class="u531_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
        <div id="u531-1_text" class="text u531_text">
            <ul>
                <button onClick={this.handleClick} style={{cursor: 'pointer'}} value="Approve">Approve</button>
                <button onClick={this.handleClick} style={{cursor: 'pointer'}} value="Deny">Deny</button>
                <button onClick={this.handleClick} style={{cursor: 'pointer'}} value="Unfreeze">Unfreeze</button>
            </ul>
        </div>
    </div>
    )
    }
    }
}
export default ActionComponent;