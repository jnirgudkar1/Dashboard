import "./Navbar.css"
import avatar from "../../assets/avatar-icon-images-4.jpg.png"

const Navbar = ({sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                {/* <a href="/#">Home</a>
                <a href="/#">World Charts</a>
                <a className="active_link" href="/#">Admin</a> */}
            </div>
            <div className="navbar__right">
                <a href="/#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="/#">
                    <i className="fa fa-clock-o"></i>
                </a>
                <a href="/#">
                    <img width="30" src={avatar} alt="avatar">

                    </img>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;