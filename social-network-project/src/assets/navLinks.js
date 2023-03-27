import {
    faHome,
    faFaceSmile,
    faPlayCircle,
    faFaceLaugh,
    faRectangleList,
    faUsers,
    faSearch,
    faCommenting,
    faBell,
    faUser,
    faFlag,
    faShop,
    faRecordVinyl
} from '@fortawesome/free-solid-svg-icons'

const navLinks = [
  {
    path: "/home",
    icon: faFaceSmile,
    display: "Friends",
  },
  {
    path: "/home",
    icon: faRecordVinyl,
    display: "Records",
  },
  {
    path: "/home",
    icon: faFlag,
    display: "Pages",
  },
  {
    path: "/home",
    icon: faFlag,
    display: "Most recent",
  },
  {
    path: "/home",
    icon: faUsers,
    display: "Groups",
  },
  {
    path: "/home",
    icon: faShop,
    display: "Marketplace",
  },
  {
    path: "/home",
    icon: faPlayCircle,
    display: "Watch",
  },
];

export default navLinks;
