import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  function handleLogout() {
    signOut(auth)
      .then(() => {
        alert("Logout!");
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <div className="bg-theme py-2 px-6 sticky top-0 left-0 w-full flex justify-between items-center">
      <p className="text-white font-medium ">WalletWizard</p>
      <button
        onClick={handleLogout}
        className="text-white font-medium opacity-80 hover:opacity-100 duration-400"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
