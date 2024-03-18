import { useState } from 'react';
import './contact.css';
export const Contact = () =>
{
    const [contact, setContact] = useState({
        username:"",
        email:"",
        text:"",

    });

    const handleInput =(e) =>{
        const name=e.target.name;
        const value=e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(contact);
    };
    return <>
        <section className="section-contact">
            <div className="contact-content">
                <h1 className="mainheading">Contact Us</h1>
            </div>
            <div className="container grid grid-two-cols">
                <div className="contact-img">
                    {/* <img src="G:\thapar\client\src\pages\contactus.png" alt="" /> */}
                </div>
                <section className="formcontent">
                    <form onSubmit={handleSubmit} className='cont'>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" name='username' id='username' autoComplete='off' required value={contact.username} onChange={handleInput} />
                        </div>

                        <div>
                            <label htmlFor="email">Email Id</label>
                            <input type="email" name='email' id='email' autoComplete='off' required value={contact.email} onChange={handleInput} />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10" required autoComplete='off' value={contact.message} onChange={handleInput}></textarea>
                        </div>
                        <div>
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </section>

            </div>

        </section>
    </>
};