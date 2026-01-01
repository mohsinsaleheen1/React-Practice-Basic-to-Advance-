import { useEffect, useState } from "react";
import { MdOutlineWavingHand } from "react-icons/md";
import { DashboardWellcome } from "../../services/auth/auth";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  console.log("Ha ustaad", user);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/login", { replace: true });
    }
    const fetchUser = async () => {
      try {
        const res = await DashboardWellcome();
        setUser(res.user);
      } catch (error) {
        localStorage.removeItem("userToken");
        navigate("/login", { replace: true });
      };
    }
    fetchUser();
  }, []);
  if (!user) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }
  return (
    <>
      <div className="flex flex-col justify-center gap-5 items-center h-[100vh]">
        <MdOutlineWavingHand className="text-9xl" />
        <h1>Wellcome {user.username}</h1>
      </div>
    </>
  );
};
export default Dashboard;