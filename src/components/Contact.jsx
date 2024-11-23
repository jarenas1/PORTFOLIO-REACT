import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import astronauta from "../assets/nelson-tiapa-gif-con-telefono.gif"
import { delay, motion } from "framer-motion"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .send(
            'service_75ng5b7', 
            'template_zsnqwl6', 
            {
              user_name: formData.name,
              user_email: formData.email,
              message: formData.message, 
            },
            'bXke7shnbcuKVFm-y'
          )
          .then(
            (result) => {
                setFormData({ name: '', email: '', message: '' });
                Swal.fire({
                    icon: "success",
                    title: "Enviado",
                    text: "Gracias por contactarme",
                });
            },
            (error) => {
                Swal.fire({
                    icon: "error",
                    title: "No se ha podido enviar",
                    text: "Te invito a contactarme por otro medio",
                });
            }
        );
    };
    
    return (
      <>
       <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y: -100}}
        transition={{duration: 0.5}}
       className='my-16 text-center text-4xl mb-28 scroll-mt-28 xl:scroll-mt-40 lg:scroll-mt-36 md:scroll-mt-40'
       id="contact"> Contacto
       </motion.h2>
        <section className='border-b border-neutral-900 flex flex-col lg:flex-row justify-center items-center mb-28 pb-24' >
         

        <form 
        onSubmit={sendEmail} className="p-4 w-full flex flex-col items-center justify-center l">

              <motion.div 
              whileInView={{opacity:1, x:0, y:0}}
              initial={{opacity:0, x: -100}}
              transition={{duration: 0.5, delay: 0}}
              className="mb-4 w-full flex flex-col items-center justify-center ">
                
                  <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-1 border text-black border-gray-300 rounded lg:w-4/4 xl:w-3/4 lg:p-2"
                      placeholder="Escribe tu nombre"
                      required
                  />
              </motion.div>

              <motion.div 
              whileInView={{opacity:1, x:0, y:0}}
              initial={{opacity:0, x: 100}}
              transition={{duration: 0.5}}
              className="mb-4 w-full  text-black flex flex-col items-center justify-center">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-1 border  text-black border-gray-300 rounded lg:w-4/4 xl:w-3/4 lg:p-2"
                placeholder="Escribe tu correo"
                required
              />
            </motion.div>

            <motion.div
            whileInView={{opacity:1, x:0, y:0}}
            initial={{opacity:0, y: 100}}
            transition={{duration: 0.5}}
            className="mb-4 w-full flex flex-col items-center justify-center">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-1 border  text-black border-gray-900 rounded lg:w-4/4 xl:w-3/4 lg:p-2"
                placeholder="Escribe tu mensaje"
                rows="4"
                required
              />
            </motion.div>
            <div className="flex items-center justify-between"></div>
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-300  to-purple-500 text-white  font-semibold hover:text-gray-600 transition-all duration-300 py-2 px-4 mt-4 rounded"
            >
              Enviar
            </button>
          </form>

          <motion.img 
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y: 200}}
          transition={{duration: 0.5, delay: 0.2}}
          src={astronauta} alt="Astronauta gif" className='mt-20 lg:mt-0 lg:relative lg:bottom-6  w-72 lg:w-80 lg:mr-6v lg:ml-6 '  />
        </section>
        </>
      );
};

export default Contact
