import Sidebar from "./Components/Sidebar/Sidebar";
import Panel from "./Components/Panel/Panel";
import styled from "styled-components";

export default function AdminPanel(){
    return (
        <AdminWrapper>
            <Sidebar/>
            <Panel/>
        </AdminWrapper>
    )
}

const AdminWrapper = styled.div`
    display: flex;
    height: 90%;
`
