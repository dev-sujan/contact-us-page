import { useState } from "react";
import Button from "../button/Button";
import style from "./ContactForm.module.css";
import { MdCall, MdMessage } from "react-icons/md";

const ContactForm = () => {
  const initialValue = {
    name: "",
    email: "",
    text: "",
  };

  const [data, setData] = useState(initialValue);
  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData(initialValue)
  };

  return (
    <section className={`${style.container}`}>
      <div className={`${style.contact_form}`}>
        <div className={`${style.top_button}`}>
          <Button
            text="Via Chat Support"
            icon={<MdMessage fontSize={"24px"} />}
          />
          <Button text="Via Call" icon={<MdCall fontSize={"24px"} />} />
        </div>
        <Button
          text="Via Call"
          icon={<MdCall fontSize={"24px"} />}
          isOutlined={true}
        />

        <form onSubmit={handleSubmit}>
          <div className={`${style.form_control}`}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={data.name}
            />
          </div>

          <div className={`${style.form_control}`}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={data.email}
            />
          </div>

          <div className={`${style.form_control}`}>
            <label htmlFor="text">Text</label>
            <textarea
              name="text"
              id="text"
              cols="30"
              rows="8"
              onChange={handleChange}
              value={data.text}
            ></textarea>
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="Submit" />
          </div>

          <pre>
            {data.name + data.email + data.text}
          </pre>
        </form>
      </div>

      <div className={`${style.contact_image}`}>
        <img src="/images/contact.svg" alt="contact" />
      </div>
    </section>
  );
};

export default ContactForm;
