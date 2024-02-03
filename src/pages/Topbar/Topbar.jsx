import React from 'react'
import './Topbar.css'
import { Search } from '@material-ui/icons'
function Topbar() {
  return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">KankotTube</span>
            </div>
            <div className="topbarCenter">
                <div className="Searchbar">
                    <Search />
                    <input type="text" placeholder='search for friends, post or video' className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">RIGHT</div>
        </div>

    )
}

export default Topbar