import Sidebar from "./Components/Sidebar/Sidebar";
import Panel from "./Components/Panel/Panel";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

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

const AdminWrapper = styled.div`
    display: flex;
    height: 90%;
`

const PanelWrapper = styled.div`
    overflow: auto;
    width: 100%;
`
