import React, {Component} from "react";
import user from "../files/UserFile";


class ActionComponent extends Component {
constructor(props) {
    super(props)
    this.state = {
      stateLevel: props.stateLevel,
      changeId: props.changeId,
      count: 0,
      count2: 100,
      
    }
    this.handleClick = this.handleClick.bind(this);
    
}

handleClick=(e)=>{
    
    const params = {
        stateLevel: this.state.stateLevel,
    }
    
    if (e.target.value == "Freeze") {
        // Freeze 
        params.stateLevel = "Frozen";
    } else if (e.target.value == "Approve") {
        // Approve & Archive if user role is Operations, otherwise go to next department.
        switch (user.authorizationLevel) {
            case "departmentUser":
                params.stateLevel = "Department";
                
                break;
            case "applicationUser":
                params.stateLevel = "Application";
                break;
            case "operationsUser":
                params.stateLevel = "Approved";
                params.archivedStatus = "true";
                break;
        }
    } else if (e.target.value == "Deny") {
        // Deny & Archive
        params.stateLevel = "Deny";
    } else {
        // Unfreeze
        params.stateLevel = "Open";
    }
    
    const searchParams = new URLSearchParams(params);
        fetch(`http://localhost:8080/changerequests/` + this.state.changeId + '?' + searchParams.toString(), {method: 'PATCH'});
   // useReducer(this.reducer, 0);
   this.state.stateLevel = params.stateLevel;
   this.props.changeCount();
}

render() {
//{console.log(this.props)}

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