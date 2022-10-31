import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactoComponent from '../pure/contacto'

const ContactList = () => {

    const defaultContact = new Contact('Carlos','Jimenez', "cj@gmail.com", false )

  return (
    <div>
        <div>
            Lista de Contactos
        </div>
        <ContactoComponent contacto={defaultContact} ></ContactoComponent>

    </div>
  )
}

export default ContactList
