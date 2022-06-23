import PropTypes from 'prop-types';
import Contact from './classContact';

function CompB({ contact }) {


  return (
    <div>
      <h3>Name: {contact.name}</h3>
      <h3>Lastname: {contact.lastname}</h3>
      <h3>Email: {contact.email}</h3>
      <h3>Connection: {contact.connected ? 'Online Contact' : 'Offline Contact'}</h3>
    </div>
  )
}

CompB.propTypes = {
  contact: PropTypes.instanceOf(Contact)
}

export default CompB
