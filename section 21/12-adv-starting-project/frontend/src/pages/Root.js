import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router";
import classes from "./Root.module.css";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
