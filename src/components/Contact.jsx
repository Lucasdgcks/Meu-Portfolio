import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar dados para algum serviço de email ou API
    console.log(formData);
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Entre em Contato</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            E-mail:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Mensagem:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
