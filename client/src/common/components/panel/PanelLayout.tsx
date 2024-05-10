import { ReactNode, useEffect } from "react";
import Sidebar from "./Sidebar";
import { sendRequest } from "../../../tools/request-method/request";
import { useDispatch } from "react-redux";

const PanelLayout = ({
  children,
  type,
}: {
  children: ReactNode;
  type: string;
}) => {
  const dispatcher = useDispatch();

  const getAllUsers = async () => {
    const res = await sendRequest("GET", "creator/get_users");
    console.log(res.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <section className="dashboard-bg min-h-screen flex">
      <Sidebar type={type} />
      {children}
    </section>
  );
};

export default PanelLayout;
