import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    const formData = new FormData(form);

    let data = {};

    for (const [name, value] of formData) {
      data[name] = value;
    }

    if (data.name !== "" && data.email !== "" && data.text !== "") {
      emailjs
        .send("service_gmr9big", "template_gd0w0hr", data, "p0XmdxKKIPhzjDv11")
        .then(
          (result) => {
            if (result) {
              alert("La peticion se envió correctamente");
              form.reset();
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("debes rellenar el formulario completo");
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-content">
        <form action="" onSubmit={sendEmail}>
          <h1>Contáctame!</h1>

          <div className="form-components">
            <div>
              <label htmlFor="">Nombre</label>
              <input
                type="text"
                name="name"
                placeholder="Introduce tu nombre"
              />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input
                placeholder="Introduce tu email"
                name="email"
                type="email"
              />
            </div>
          </div>
          <div className="text-area">
            <label htmlFor="">Mensaje</label>
            <textarea
              placeholder="No te cortes, escribe aquí tu mensaje!"
              name="text"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="submit">
            <button type="submit" className="btn">
              Enviar
            </button>
          </div>
        </form>
        <div className="info-card">
          <p>
            Este portfolio aún está en desarrollo. Estoy en constante
            aprendizaje para dar lo mejor de mi y seguir completándolo
          </p>
          <p>
            Si tienes cualquier duda, inquietud o simplemente quieres hablarme,
            contáctame mediante el formulario :)
          </p>
          <img src="https://img.icons8.com/ios-filled/50/FFFFFF/long-arrow-left.png" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
