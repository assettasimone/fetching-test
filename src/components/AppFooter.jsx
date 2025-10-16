import { Link } from "react-router-dom"

export default function AppFooter() {

    return (

        <footer className="bg-dark py-5 mt-5  text-white">
            <div className="container">
                <div className="row row-col-1 row-col-sm-2">
                    <div className="col">
                        <h3>Rick & Morty</h3>
                        <p>Rick & morty Api Little App</p>
                    </div>
                    <div className="col">
                        <h3>Menu</h3>
                        <ul className="list-unstyled li">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/characters">Characters</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contacts">Contacts</Link></li>
                        </ul>

                    </div>
                    <div className="col">
                        <h3>Legal</h3>
                        <ul className="list-unstyled li">
                            <li><a href="">Privacy</a></li>
                            <li><a href="">Ship</a></li>
                            <li><a href=""></a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </footer>
    )


}