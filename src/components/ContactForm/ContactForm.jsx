import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContact({ id: Date.now().toString(), name, number }));
        setName("");
        setNumber("");
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Number
                <input
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Add contact</button>
        </form>
    );
};

export default ContactForm;
