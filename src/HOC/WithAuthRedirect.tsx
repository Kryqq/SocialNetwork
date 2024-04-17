
import React, {ComponentType} from 'react';
import { Redirect } from 'react-router-dom';
import { StateType } from '../redux/reduxStore';
import { connect } from 'react-redux';

type mapStateToProps = {
	isAuth: boolean
}
const mapStateToProps = ((state: StateType): mapStateToProps => ({isAuth: state.auth.isAuth}))
export function WithAuthRedirect<T>(Component: ComponentType<T> ) {
	  const RedirectComponent = (props: mapStateToProps) => {
		const {isAuth} = props


		if (!isAuth) return <Redirect to={'/login'} />

		return <Component {...props as any} />
	  }
	  return connect(mapStateToProps)(RedirectComponent)
    
} 
	
	
 


