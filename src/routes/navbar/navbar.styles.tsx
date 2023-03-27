import styled from "styled-components";
import { Layout } from "antd";

const { Sider } = Layout;

export const SiderStyled = styled(Sider)`
    position: fixed !important;
    overflow: auto;
    height: 100vh;
    left: 0px;
    top: 0px;
    bottom: 0px;
    flex: 0 0 200px;
    width: 250px !important;
    max-width: 250px !important;

    .history {
        position: absolute;
        bottom: 10px;
    }
`

export const LogoContainer = styled.div`
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    font-size: 16px;
    text-align: center;
    line-height: 32px;
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
`
