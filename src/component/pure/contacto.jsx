import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactoComponent = ({contacto}) => {
    return (
        <div>
            <h2>Nombre: {contacto.nombre}</h2>
            <h2>Apellido: {contacto.apellido}</h2>
            <h3>Email: {contacto.email}</h3>
            <h3>Contacto: {contacto.conectado ? "disponible": "No Disponible"}</h3>  
        </div>
    );
}

ContactoComponent.prototype={
    contacto :PropTypes.instanceOf(Contact)
}

export default ContactoComponent;

