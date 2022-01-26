import React, { useState } from 'react';

function Subscribe() {

    const [message, setMessage] = useState(null);
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState("");

    const subscribe = async () => {
        console.log(JSON.stringify({ email }))
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/email-subscription`, {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await res.json();
        if (data.errors) {
            setMessage(data.errors[0].message);
            setSuccess(false);
        } else {
            setMessage(data.message)
            setSuccess(true);
        }
    }

    return (
    <section className="subscribe-area footer-bg border-bot pt-145 pb-50 pt-md-90 pt-xs-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8">
                    <div className="subscribe-wrapper text-center mb-30">
                        <h2>Subscribe our Newsletter and Get every updates.</h2>
                        <div className="subscribe-form-box pos-rel">
                            <form className="subscribe-form">
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Write Your E-mail"/>
                            </form>
                            {!success && ( <button onClick={(e) => subscribe()} className="sub_btn">Subscribe Now</button> )}
                            {message && (
                                <p style={{color: (success ? 'green' : 'red')}}>{message}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Subscribe;
