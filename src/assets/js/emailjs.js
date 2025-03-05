import emailjs from '@emailjs/browser';

    document.addEventListener("DOMContentLoaded", () => {
      emailjs.init("Dp9IOf7dxZ4uDYEDR"); // Substitua pela sua Public Key

      const form = document.querySelector("#contato form");

      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = form.querySelector("input[type='text']").value;
        const email = form.querySelector("input[type='email']").value;
        const mensagem = form.querySelector("textarea").value;

        const params = {
          nome: nome,
          email: email,
          mensagem: mensagem,
        };

        emailjs.send("service_597bl6m", "template_4nxoaqe", params)
          .then(() => {
            alert("Mensagem enviada com sucesso!");
            form.reset();
          })
          .catch((err) => {
            console.error("Erro ao enviar mensagem:", err);
            alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
          });
      });
    });