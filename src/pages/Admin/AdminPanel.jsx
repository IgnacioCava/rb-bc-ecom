import Sidebar from "./Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { AdminWrapper, PanelWrapper} from './AdminPanelStyled'

export default function AdminPanel(){
    return (
        <AdminWrapper>
            <Sidebar/>
            <PanelWrapper>
                <Outlet />
            </PanelWrapper>
        </AdminWrapper>
    )
}

