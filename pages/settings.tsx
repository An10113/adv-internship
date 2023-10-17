import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";
import React from "react";

export default function settings() {
  return (
    <div className="wrapper">
    <SearchBar />
    <SideBar />
    <div className="container">
      <div className="row">
        <div className="section__title page__title">Settings</div>
        <div className="settings__login--wrapper">
          <img src="login.png" />
          <div className="settings__login--text">
            Log in to your account to see your details.
          </div>
          <button className="btn !w-[100px]">Login</button>
        </div>
      </div>
    </div>
    </div>
  );
}
