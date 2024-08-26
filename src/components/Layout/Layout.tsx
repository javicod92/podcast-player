import { ReactNode } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

type Props = {
  children: ReactNode;
  setSidebarMode: () => void;
  sidebarMode: "compact" | "expanded";
  setIsPlaylistAddOpen: () => void;
};

export default function Layout(props: Props) {
  return (
    <>
      <Header onToggleSidebar={props.setSidebarMode} />
      <SideBar
        setIsPlaylistAddOpen={props.setIsPlaylistAddOpen}
        size={props.sidebarMode}
      />
      {props.children}
    </>
  );
}
