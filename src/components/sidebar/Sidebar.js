import "./Sidebar.css"
import logo from "../../assets/cisco.png"


const Sidebar = ({sidebarOpen, closeSidebar}) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo"/>
                </div>
                <i
                    className="fa fa-times"
                    id="sidebarIcon"
                    onClick={() => closeSidebar()}>
                </i>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="/#">Dashboard</a>
                </div>
                <h2>Select Colos</h2>
                <div className="sidebar__link">
                    <i className="fa"></i>
                    <a href="/#">Colo 1</a>
                </div>
                <div className = "sidebar__link">
                    <i className="fa"></i>
                    <a href="/#">Colo 2</a>
                </div>
                <div className = "sidebar__link">
                    <i className="fa"></i>
                    <a href="/#">Colo 3</a>
                </div>
                <div className = "sidebar__link">
                    <i className="fa"></i>
                    <a href="/#">Colo 4</a>
                </div>
                <div className = "sidebar__link">
                    <i className="fa"></i>
                    <a href="/#">Colo 5</a>
                </div>
                <div className = "sidebar__link">
                    <i className="fa"></i>
                    <a href="/#">Colo 6</a>
                </div>
                <div className = "sidebar__link">
                    <i className="fa"></i>
                    <a href="/#">Colo 7</a>
                </div>
                <div className = "sidebar__link">
                    <i className="fa"></i>
                    <a href="/#">Colo 8</a>
                </div>
                <div className = "sidebar__link">
                    <i className="fa"></i>
                    <a href="/#">Colo 9</a>
                </div>
                <div className = "sidebar__link">
                    <i className="fa"></i>
                    <a href="/#">Colo 10</a>
                </div>
                <div className = "sidebar__link">
                    <i className="fa"></i>
                    <a href="/#">Colo 11</a>
                </div>
                <h2>Logout</h2>
                <div className = "sidebar__link">
                    <i className="fa fa-power-off"></i>
                    <a href="/#">Log out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;