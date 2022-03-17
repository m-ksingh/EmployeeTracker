import "./sidebar.css";
import {
  LineStyle,
  Storefront,
  PermIdentity,
  WorkOutline,
  Timeline,Report

} from "@material-ui/icons";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/dashboard" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            {/* <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li> */}
            {/* <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/addnewemp" className="link">
              <li className="sidebarListItem">
                <PersonAddIcon className="sidebarIcon" />
                Add New Employee 
              </li>
            </Link>
            <Link to="/employeedetails" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Employee Details
              </li>
            </Link>

            {/* <Link to="/exceldata" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Excel Data
              </li>
            </Link> */}
            

          </ul>
        </div>

        <div className="sidebarMenu">
          
          <ul className="sidebarList">
           <Link to ="/" className="link">
           
           <li className="sidebarListItem">
              <LogoutIcon className="sidebarIcon" />
              Log out
            </li>
           </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
