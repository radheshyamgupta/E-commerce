import React, { useState } from "react";
import "./ContactUs.css";
import { json } from "react-router-dom";

export default function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("https://e-commerse-23b6e-default-rtdb.firebaseio.com/project.json", {
                method: "POST",
                body: JSON.stringify({
                    name,
                    email,
                    phoneNumber
                }),
                headers: {
                    "Content-Type": "application-json"
                }
            })
            if (res.ok) {
                console.log("data saved successfully")
                setName("");
                setEmail("");
                setPhoneNumber("");
            }
            else {
                console.log("error in saving data in backend")
            }


        }

        catch (error) {
            console.log(error)
        }


    };

    return (
        <div className="contact">
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
