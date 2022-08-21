import { NavLink } from "react-router-dom";
import { FaHome, FaPaintBrush, FaPenNib } from "react-icons/fa";
import { BiSearch, BiTrendingUp} from "react-icons/bi";
import { BiNews } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import { MdSportsBasketball, MdInsertPhoto } from "react-icons/md";
import { SiClubhouse } from "react-icons/si";
import { DiTechcrunch } from "react-icons/di";
import { AiFillContacts } from "react-icons/ai";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "college-magazine",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "college-magazine/NewsAndEvent",
    name: "News And Events",
    icon: <BiNews />,
  },
  {
    path: "college-magazine/Trends",
    name: "Trends",
    icon: <BiTrendingUp />,
  },
  {
    path: "college-magazine/Sports",
    name: "Sports",
    icon: <MdSportsBasketball />,
  },
  {
    path: "college-magazine/Clubs",
    name: "Clubs",
    icon: <SiClubhouse />,
    subRoutes: [
      {
        path: "college-magazine/clubs/ArtsAndPaintings",
        name: "Arts and Paintings ",
        icon: <FaPaintBrush />,
      },
      {
        path: "college-magazine/clubs/Photography",
        name: "Photography",
        icon: <MdInsertPhoto />,
      },
      {
        path: "college-magazine/clubs/ScienceAndTech",
        name: "Science And Tech",
        icon: <DiTechcrunch />,
      },
    ],
  },
  
  {
    path: "college-magazine/Writings",
    name: "Writings",
    icon: <FaPenNib />,
    exact: true,
    subRoutes: [
      {
        path: "college-magazine/Writings/Poems",
        name: "Poem ",
        icon: <GoPrimitiveDot />,
      },
      {
        path: "college-magazine/Writings/Articles",
        name: "Articles",
        icon: <GoPrimitiveDot />,
      },
      {
        path: "college-magazine/Writings/Nanotales",
        name: "Nanotales",
        icon: <GoPrimitiveDot />,
      },
      {
        path: "college-magazine/Writings/Stories",
        name: "Stories",
        icon: <GoPrimitiveDot />,
      },
    ],
  },
  {
    path: "college-magazine/AboutUs",
    name: "AboutUs",
    icon: <AiFillContacts />,
  },
];

const SideBar = ({ children }) => {

  return (
    <>
      <div className="main-container">
        <div className="sidebar" >
          <div className="search">
            
                <input
                  type="text"
                  placeholder="Search"
                />
                <div className="search_button">
                  <button><BiSearch /></button>
                </div>
                        
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  
                    <SidebarMenu 
                    route={route}/>
                  
                  
                );
              }

              return (
                <NavLink to={route.path} key={route.name}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  
                      <div
                        className="link_text"
                      >
                        {route.name}
                      </div>
                    
                  
                </NavLink>
              );
            })}
          </section>
        </div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
