import styled from "styled-components";
import { Layout } from "antd";

const { Sider, Footer } = Layout;

export const SiderStyled = styled(Sider)`
    position: fixed !important;
    overflow: auto;
    height: 100vh;
    left: 0px;
    top: 0px;
    bottom: 0px;
    flex: 0 0 200px;
    min-width: 250px;
`

export const LogoContainer = styled.div`
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.2);
`
