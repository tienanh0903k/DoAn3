import { Navigate, useOutletContext, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserRole } from 'src/redux/userSlice'
import PropTypes from 'prop-types'

const ProtectRoute = ({ role, ...props }: { role: string }) => {
  const context = useOutletContext()
  const userRole = useSelector(selectUserRole)
  //console.log(userRole, role)
  console.log(props)
  const isAuthorized = userRole && userRole == role
  //console.log(isAuthorized);
  return isAuthorized ? <Outlet context={context} /> : <Navigate to='/login' replace />
}

ProtectRoute.propTypes = {
  role: PropTypes.string.isRequired
}

export default ProtectRoute
