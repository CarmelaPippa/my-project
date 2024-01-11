import { BsPlus, BsFillLightningFill } from "react-icons/fa";
import { FaFire, FaPoo } from "react-icons/fa";
import PropTypes from "prop-types";

export function SideBar() {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0 flex 
      flex-col bg-gray-900 text-white shadow-lg"
    >
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="28" />} />
      <SideBarIcon icon={<BsFillLightningFill size="28" />} />
      <SideBarIcon icon={<FaPoo size="28" />} />
    </div>
  );
}

const SideBarIcon = ({ icon, text = "tooltip" }) => (
  <>
    <div className="sidebar-icon group">{icon}</div>
    <span className="sidebar-tooltrip group-hover:scale-100">{text} </span>
  </>
);

SideBarIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string,
};
