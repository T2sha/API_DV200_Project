const Header = ()=>{
    return(
        <>
        <div className="nav">
            <div className="nav-container">
            
            <ul>
                <li><a href="/">Dashboard</a></li>
                <li><i className='fa fa-bar-chart'></i><a href="/Compare">Compare</a></li>
                <li><a href="/Timeline">Timeline</a></li>
            </ul>
            </div>
        </div>
        </>
    )
}
export default Header

