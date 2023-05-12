
import { MdSpaceDashboard } from "react-icons/md";
import { BsTable, BsFillCalendarCheckFill} from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import css from "./Sidebar.module.css";

const Sidebar = () => {
  return (
        <div className={css.container}>        
    
    <img src="./logo.png" alt="logo"  className={css.logo}/>
        <div className={css.menu}>
            <NavLink to="dashboard" className={css.item} title={"Dashboard"}>
                
                <MdSpaceDashboard size={30}/>
            </NavLink>

            <NavLink 
                    to="calender"
                    className={css.item}
                    title='Calender'>

                <BsFillCalendarCheckFill size={30}/>
            </NavLink>
            
            <NavLink
                to="board"
                className={css.item}
                title='Trello Board'>

                <FaTasks size={30}/>
            </NavLink>

            <NavLink 
                to="users"
                className={css.item}
                title='Users'>
                    
                    <BsTable size={30}/>
            </NavLink>
        </div>

    </div>

  )
  

        
}

export default Sidebar