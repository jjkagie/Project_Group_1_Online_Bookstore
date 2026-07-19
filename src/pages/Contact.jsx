function Contact(){
  return(
    <div className="contact-page">

        <div className="contact-card">

            <h1>Contact Us</h1>

            <form>
                <input
                    type="text"
                    placeholder="Name"
                />

                <input
                    type="email"
                    placeholder="Email"
                />

                <textarea
                    placeholder="Message"
                />

                <button>
                    Submit
                </button>
            </form>

        </div>

    </div>
  );
}
export default Contact;