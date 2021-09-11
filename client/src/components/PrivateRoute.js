import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({ component: Component, loginStatus, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => loginStatus
                ? (<Component {...props} />)

                : (<Redirect to='/' />)
            }
        />
    )
}