import "./Navbar.scss";

import { useContext, useEffect } from "react";
import { FaRegUser } from "react-icons/fa6";

import { Context } from "../../context/Context";
import { HiLogin, HiLogout } from "react-icons/hi";
import { baseUrl } from "../../main";
import { toast } from "sonner";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.post(`${baseUrl}/auth/logout`, null, {
        withCredentials: true,
      });

      localStorage.removeItem("user");
      dispatch({ type: "LOGOUT" });
      toast.success("Logout Successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Failed to logout. Try again!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/auth/profile`, {
          withCredentials: true,
        });
        setProfile(data?.user);
      } catch (error) {
        console.error("Error fetching profile", error);
      }
    };

    fetchProfile();
  }, []);

  const displayUser = profile;

  return (
    <div className="navbar">
      <div className="navbar-left">
        {user && (
          <Link to={"/profile"} className="user-link">
            <FaRegUser className="user-icon" />
            <div className="user">
              <p>{displayUser?.name}</p>
            </div>
          </Link>
        )}
      </div>
      <div className="navbar-right">
        <div className="sidebar-button">
          {user ? (
            <button onClick={handleLogout}>
              Logout
              <HiLogout className="login-icon" />
            </button>
          ) : (
            <Link to={"/login"}>
              <button>
                Login
                <HiLogin className="login-icon" />
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
