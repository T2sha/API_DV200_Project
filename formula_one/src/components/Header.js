const Header = ()=>{
    return(
        <>
        <div className="nav">
            <div className="nav-container">
            <img src="./f1.png" width="150" height="150"></img>
            
            <ul>
                <li><a href="/"> <img className='Dashboard' src="../Icons/Dashboard.png" width="150" height="150"></img></a></li>
                <li><a href="/Compare"><img className='Compare' src="../Icons/Compare.png" width="150" height="150"></img></a></li>
                <li><a href="/Timeline"><img className='Timeline' src="../Icons/Timeline.png" width="150" height="150"></img></a></li>
            </ul>
            </div>
        </div>
        </>
    )
}
export default Header

