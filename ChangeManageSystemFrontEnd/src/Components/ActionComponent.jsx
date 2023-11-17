import React, {Component} from "react";
import user from "../files/UserFile";
import { getCookie } from "../files/CookieManagement";
import { left } from "@popperjs/core";



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
    const authorizationLevel = getCookie("authorizationLevel");
    const params = {
        stateLevel: this.state.stateLevel,
    }
    
    if (e.target.value == "Freeze") {
        // Freeze 
        params.stateLevel = "Frozen";
    } else if (e.target.value == "Approve") {
        // Approve & Archive if user role is Operations, otherwise go to next department.
        switch (authorizationLevel) {
            case "departmentUser":
                params.stateLevel = "Department Approved";
                
                break;
            case "applicationUser":
                
                params.stateLevel = "Application Approved";
                
                
                break;
            case "operationUser":
                
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
   
   
   
   
   this.state.stateLevel = params.stateLevel;
   


   //this.props.changeCount();
   window.location.reload();
   
   
}

render() {
if (this.state.stateLevel == "Open") {
    // Display the following options:
    // Freeze
    // Edit
    if (this.props.tabSet == 1) {
        var left1 = '1163px';
        var left2 = '0px';
        var width = '135px';
    } else {
        var left1 = '1019px';
        var left2 = '63px';
        var width = '273px';
        
    }
    return (
        <div id="u531-1" class="ax_default box_1 u531" data-label="Action" style={{width: '135px', height: '70px', left: left1, top: '0px', visibility: 'inherit'}}>
            <div id="u531-1_div" class="u531_div" style={{width: width, height: '70px', visibility: 'inherit'}}></div>
            <div id="u531-1_text" class="text u531_text" style={{ visibility: 'inherit', left: left2,}}>
                <ul>
                    <button onClick={this.handleClick} style={{cursor: 'pointer'}} value="Freeze">Freeze</button>
                </ul>
            </div>
        </div>
    )
} else if (this.state.stateLevel == "Frozen") {
    // Display the following options:
    // (Application) Approve
    // Deny
    // Unfreeze
    if (this.props.tabSet == 1) {
        var left1 = '1163px';
        var left2 = '0px';
        var width = '135px';
    } else {
        var left1 = '1019px';
        var left2 = '63px';
        var width = '273px';
        
    }
    return (
    <div id="u531-1" class="ax_default box_1 u531" data-label="Action" style={{width: '135px', height: '70px', left: left1, top: '0px', visibility: 'inherit'}}>
        <div id="u531-1_div" class="u531_div" style={{width: width, height: '70px', visibility: 'inherit'}}></div>
        <div id="u531-1_text" class="text u531_text" style={{visibility: 'inherit', left: left2}}>
            <ul>
                <button onClick={this.handleClick} style={{cursor: 'pointer'}} value="Approve">Approve</button>
                <button onClick={this.handleClick} style={{cursor: 'pointer'}} value="Deny">Deny</button>
                <button onClick={this.handleClick} style={{cursor: 'pointer'}} value="Unfreeze">Unfreeze</button>
            </ul>
        </div>
    </div>
    )
} else if (this.state.stateLevel == "Application Approved") {
    // Display the following options:
    // (Department) Approve
    // Deny
    // Unfreeze
    if (this.props.tabSet == 1) {
        var left1 = '1163px';
        var left2 = '0px';
        var width = '135px';
    } else {
        var left1 = '1019px';
        var left2 = '63px';
        var width = '273px';
        
    }
    return (
    <div id="u531-1" class="ax_default box_1 u531" data-label="Action" style={{width: '135px', height: '70px', left: left1, top: '0px', visibility: 'inherit'}}>
        <div id="u531-1_div" class="u531_div" style={{width: width, height: '70px', visibility: 'inherit'}}></div>
        <div id="u531-1_text" class="text u531_text" style={{visibility: 'inherit', left: left2}}>
            <ul>
                <button onClick={this.handleClick} style={{cursor: 'pointer'}} value="Approve">Approve</button>
                <button onClick={this.handleClick} style={{cursor: 'pointer'}} value="Deny">Deny</button>
                <button onClick={this.handleClick} style={{cursor: 'pointer'}} value="Unfreeze">Unfreeze</button>
            </ul>
        </div>
    </div>
    )
} else {
    // Department Approval
    // Display the following options:
    // (Operations) Approve
    // Deny
    // Unfreeze
    if (this.props.tabSet == 1) {
        var left1 = '1163px';
        var left2 = '0px';
        var width = '135px';
    } else {
        var left1 = '1019px';
        var left2 = '63px';
        var width = '273px';
        
    }
    return (
    <div id="u531-1" class="ax_default box_1 u531" data-label="Action" style={{width: '135px', height: '70px', left: left1, top: '0px', visibility: 'inherit'}}>
        <div id="u531-1_div" class="u531_div" style={{width: width, height: '70px', visibility: 'inherit'}}></div>
        <div id="u531-1_text" class="text u531_text" style={{visibility: 'inherit', left: left2}}>
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