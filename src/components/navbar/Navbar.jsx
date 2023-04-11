import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext,useEffect,useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";




const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);

  const [data, setData] = useState({});
  const [notifications,setNotifications] = useState(0)

 
  
  useEffect(() => {


      const fetchUserData = async () => {

          const docRef = doc(db, "USERDATA", currentUser.email);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {

            setData({ ...docSnap.data() });
          }

        }
    
      

      const fetchData = async () => {
        let list = [];
        try {
         
          const querySnapshot = await getDocs(collection(db, "HouseCollection"));
          querySnapshot.forEach((doc) => {
            let availability= doc.data().availability;
            !availability && list.push({ id: doc.id, ...doc.data() });
          });
          setNotifications(list.length);
        } catch (err) {
          console.log(err);
        }
      }
      
    fetchUserData();
     fetchData();

    
  }, [currentUser]);

  


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
           English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">{notifications}</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src={data.profileUrl}
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
