import '../FooterHome/FooterHome.css'
<div id='FooterPrincipal'>

</div>


function FooterHome() {


    return (
        <footer className="text-center text-white" style={{ backgroundColor: "#cf0000" }}>

            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-facebook-f"></i                    ></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-twitter"></i                    ></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-google"></i                    ></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-instagram"></i                    ></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-linkedin-in"></i                    ></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-github"></i                    ></a>
                </section>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: "#cf0000" }}>
                © 2023 Copyright:
                <a className="text-white" href="https://google.com/">MyPersonal.com</a>
            </div>
        </footer>
    )
}

export default FooterHome