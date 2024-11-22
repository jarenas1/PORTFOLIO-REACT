import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para enviar el correo usando EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',       // Sustituye con tu Service ID
        'YOUR_TEMPLATE_ID',      // Sustituye con tu Template ID
        e.target,                 // El formulario completo
        'YOUR_USER_ID'           // Sustituye con tu User ID
      )
      .then(
        (result) => {
          setStatus('Mensaje enviado correctamente!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setStatus('Hubo un error al enviar el mensaje. Intenta nuevamente.');
        }
      );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Formulario de Contacto</h1>
      
      {status && <p className="mb-4">{status}</p>}

      <form onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Mensaje</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};


export default Contact
