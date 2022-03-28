import { Link } from "react-router-dom"
import styled from "styled-components";

export default function Panel(){

    return (
        <PanelWrapper>
            <h1>Admin panel</h1>
        </PanelWrapper>
    )
}

const PanelWrapper = styled.div`
    width: 100%;
`