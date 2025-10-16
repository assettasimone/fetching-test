import { NavLink } from "react-router-dom"

export default function AppHeader() {

    const menu = [
        {
            id: 1,
            text: 'Home',
            link: '/'
        },
        {
            id: 2,
            text: 'Characters',
            link: '/characters'
        },
        {
            id: 3,
            text: 'About',
            link: '/about'
        },
        {
            id: 4,
            text: 'Contacts',
            link: '/contacts'
        }
    ]

    return (

        <header className="container mb-4 p-2">
            <div className="nav d-flex justify-content-between">
                <h1>Rick & Morty</h1>
                <ul
                    className="nav justify-content-center  "
                >
                    {menu.map(item =>

                        <li key={item.id} className="nav-item">
                            <NavLink className="nav-link" to={item.link}>{item.text}</NavLink>
                        </li>
                    )

                    }

                </ul>

            </div>
        </header>
    )

}