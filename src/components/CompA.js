import CompB from './CompB';
import Contact from './classContact';

export default function CompA() {
  const defaultContact = new Contact('Juan', 'Rosas', 'juan.rosas@email.com', true)

  return (
    <div>
      <h2>Contacts</h2>
      <CompB contact={defaultContact}/>
    </div>
  )
}
