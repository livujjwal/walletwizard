import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
const Header = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (user) navigate("/dashboard");
    else navigate("/");
  }, [user, loading]);
  function handleLogout() {
    signOut(auth)
      .then(() => {
        toast.success("Logout!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error);
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
