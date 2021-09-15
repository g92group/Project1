import { useState } from 'react';
import { Button, List, ListItem } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import Link from "next/link";
import { toggleSidebar } from '../../redux/actions.js/globalActions';
import ContainerWrapper from './ContainerWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCog, faComments, faEnvelopeOpenText, faHome, faListUl, faSearch, faStickyNote, faTable, faThLarge, faThList, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faBell, faMoon } from '@fortawesome/free-regular-svg-icons';

const menus = [
    { to: "/", icon: faHome, title: "Dashboard" },
    { to: "/", icon: faComments, title: "Chat" },
    { to: "/", icon: faEnvelopeOpenText, title: "Email" },
    { to: "/", icon: faListUl, title: "Invoice List" },
    { to: "/", icon: faThLarge, title: "User Grid" },
    { to: "/", icon: faThList, title: "User LIst" },
    { to: "/", icon: faUserCircle, title: "Profile" },
    { to: "/", icon: faTable, title: "Datatable" },
    { to: "/", icon: faBoxOpen, title: "Lightbox" },
    { to: "/", icon: faStickyNote, title: "Cards" },
]

const Container = ({ children }) => {
    const isSidebarShow = useSelector(state => state.global.isSidebarShow);
    const [select, setselect] = useState(0);

    const changeSelect = (i) => {
        setselect(i);
    }

    return (
        <ContainerWrapper>
            <div className={`sidebar ${isSidebarShow ? "show" : ""}`}>
                <div className="d-flex px-3 align-items-center pb-3 pt-2">
                    <img src="./logo1.svg" alt="?" style={{ width: "30px" }} />
                    <h5 className="mb-0 ms-3">Minia</h5>
                </div>
                <List>
                    {
                        menus.map((v, i) => {
                            return <ListItem className="p-2">
                                <Link href={v.to}>
                                    <a className={`btn d-flex flex-nowrap ${i == select && 'select' || 'text-muted'}`} onClick={() => changeSelect(i)}>
                                        <FontAwesomeIcon icon={v.icon} className=" fs-5 me-3" /> {v.title}
                                    </a>
                                </Link>
                            </ListItem>
                        })
                    }
                </List>
            </div>

            <div className="rightside">
                <header className="border-bottom mb-3 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <button className="btn" onClick={toggleSidebar}>
                            <Menu />
                        </button>
                        <div className="input-group p-1" style={{ backgroundColor: "#F3F3F9", borderRadius: "8px" }}>
                            <input type="text" className="form-control border-0 py-1" placeholder="Search..." style={{ backgroundColor: "transparent" }}></input>
                            <Button variant="contained" style={{ backgroundColor: "#6D71C4", color: "white", borderRadius: "8px" }}>
                                <FontAwesomeIcon icon={faSearch} /></Button>
                        </div>
                    </div>
                    <div className="d-flex align-items-center me-4">
                        <button className="btn text-muted fs-5"><img src="lang.jpg" alt="?" style={{ width: "30px" }} /></button>
                        <button className="btn text-muted fs-5"><FontAwesomeIcon icon={faMoon} /></button>
                        <button className="btn text-muted fs-5"><FontAwesomeIcon icon={faThLarge} /></button>
                        <button className="btn text-muted fs-5"><FontAwesomeIcon icon={faBell} /></button>
                        <button className="btn text-muted fs-5"><FontAwesomeIcon icon={faCog} /></button>
                        <button className="btn border-end border-start rounded-0 bg-light p-3 text-muted">
                            <img src="http://minia-v-light.react.themesbrand.com/static/media/avatar-1.0fdabd61.jpg" alt="?" className="rounded-circle me-2" style={{ width: "40px", border: "2px solid grey" }} />
                            admin
                        </button>
                    </div>
                </header>
                <div className="content">
                    {children}
                </div>
            </div>

        </ContainerWrapper>
    )
}

export default Container;