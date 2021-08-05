
import "./Main.css"
import hello from "../../assets/cisco.png"
import Chart from "../charts/Chart"

const Main = () => {
    var today = new Date().toLocaleDateString()
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="hello"></img>
                    <div className="main__greeting">
                        <p id="date" >{today} </p>
                        <p>Welcome to Dashboard</p>
                    </div>
                </div>

                <div className="main__cards">
                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of subscribers</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Times of watching</p>
                            <span className="font-bold text-title"> 2567 </span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-video-camera fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Videos</p>
                            <span className="font-bold text-title">340</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-thumbs-up fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Likes</p>
                            <span className="font-bold text-title">645</span>
                        </div>
                    </div>
                </div>
                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily reports</h1>
                                <p>Cali</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart/>
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Stats report</h1>
                                <p>Cali</p>
                            </div>
                            <i className="fa fa-use"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Income</h1>
                                <p>$75,000</p>
                            </div>

                            <div className="card1">
                                <h1>Sales</h1>
                                <p>$275,000</p>
                            </div>

                            <div className="card1">
                                <h1>Users</h1>
                                <p>5000</p>
                            </div>

                            <div className="card1">
                                <h1>Orders</h1>
                                <p>1200</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;