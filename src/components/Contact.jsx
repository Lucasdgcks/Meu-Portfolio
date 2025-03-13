import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula requisição async
      console.log(formData);
      setStatus("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2 id="contato-h2">Entre em Contato</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>

          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label>
            Mensagem:
            <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required />
          </label>

          <button type="submit">Enviar</button>
        </form>
        {status && (
          <motion.div 
            className="status-message" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 2 }}
            style={{ 
              backgroundColor: status === "Mensagem enviada com sucesso!" ? "#4CAF50" : "#f44336", 
              color: "#fff", 
              padding: "10px", 
              borderRadius: "5px", 
              marginTop: "100px", 
              textAlign: "center",
              width:"300px",
              margin: "auto"
            }}
          >
            {status}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;
