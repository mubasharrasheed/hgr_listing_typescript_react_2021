import React from "react";
import TabsList from "./SmallComponents/TabsList";
import SearchBar from "./SmallComponents/SearchBar";
import Notifications from "./Notifications";
function Header(props: any) {
  return (
      <div className="bg-trans" style={{ padding: 0 }}>
        <div className="plx-lg-4 px-md-3 px-2">
          <Notifications />
          <SearchBar />
          <TabsList />
        </div>
      </div>
  );
}

export default Header;
