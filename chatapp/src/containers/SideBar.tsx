import { legacy_connect as connect } from "react-redux";
import type { RootState } from "../types/index";
import SideBarComponent from "../components/Sidebar";

const mapStateToProps = (state: RootState) => ({
    users: state.users
})

export const Sidebar = connect(mapStateToProps)(SideBarComponent)