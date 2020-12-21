import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        isAuth:state.auth.isAuth
    }
}
let withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component{
        render() {

                if(!this.props.isAuth){
                    return (
                        <Redirect to={'login'}></Redirect>
                    )
                }
                return <Component {...this.props}></Component>

        }
    }
    let RedirectConnectState = connect(mapStateToProps)(RedirectComponent)
    return RedirectConnectState
}

export default withAuthRedirect;

