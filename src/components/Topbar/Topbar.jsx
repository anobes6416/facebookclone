import React from 'react'
import './Topbar.css'
import { Search , Person, Chat, Notifications } from '@material-ui/icons'
function Topbar() {
  return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">KankotTube</span>
            </div>
            <div className="topbarCenter">
                <div className="Searchbar">
                    <Search className='searchIcon'/>
                    <input type="text" placeholder='search for friends, post or video' className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <div className="topbarLink">Home Page</div>
                    <div className="topbarLink">Time Line</div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">7</span>
                    </div>
                </div>
                    <img src="/assets/person/1.jpeg" alt="" className='topbarImg' />
            </div>
        </div>

    )
}

export default Topbar