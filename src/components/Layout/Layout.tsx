import {  ReactNode, useState } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

type Props = {
  children: ReactNode;
  setIsPlaylistAddOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Layout(props: Props) {
  //This status is for setting the sidebar mode
  const [sidebarMode, setSidebarMode] = useState<"compact" | "expanded">(
    "compact"
  );

  return (
    <>
      <Header  setSidebarMode={setSidebarMode}/>
      <SideBar
        setIsPlaylistAddOpen={props.setIsPlaylistAddOpen}
        size={sidebarMode}
      />
      {props.children}
    </>
  );
}
