function Footer() {
    return (
        <footer className="py-5 bg-dark container-fluid d-flex justify-content-center">
            <div className="d-flex flex-column">
                <form>
                    <h5 className="text-light">Subscribe to our newsletter</h5>
                    <p className="text-light">Monthly digest of what's new and exciting from us.</p>
                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                        <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                        <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                        <button className="btn btn-primary" type="button">Subscribe</button>
                    </div>
                </form>
                <p className="text-light pt-5">© 2022 Santiago Nahuel Ruiz Sugliani.<br></br> All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;