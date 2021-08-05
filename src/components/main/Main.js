
import "./Main.css"
import hello from "../../assets/cisco-icon.png"
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
                        <i class="fas fa-check-circle"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Good</p>
                            <span className="font-bold text-title">5</span>
                        </div>
                    </div>

                    <div className="card">
                        <i class="fas fa-times-circle"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Critical</p>
                            <span className="font-bold text-title"> 2 </span>
                        </div>
                    </div>

                    <div className="card">
                        <i class="far fa-exclamation"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Warning</p>
                            <span className="font-bold text-title">1</span>
                        </div>
                    </div>
                </div>
                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Current Usage</h1>
                                <p>San Jose, California</p>
                            </div>
                            <i class="far fa-project-diagram"></i>
                        </div>
                        <Chart/>
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Stats report</h1>
                                <p>San Jose, California</p>
                            </div>
                            <i className="fa fa-use"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Device 1</h1>
                                <p>14 GB</p>
                            </div>

                            <div className="card1">
                                <h1>Device 2</h1>
                                <p>4 GB</p>
                            </div>

                            <div className="card2">
                                <h1>Device 3</h1>
                                <p>20 GB</p>
                            </div>

                            <div className="card3">
                                <h1>Device 4</h1>
                                <p>1200</p>
                            </div>

                            <div className="card4">
                                <h1>Device 5</h1>
                                <p>32 GB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;