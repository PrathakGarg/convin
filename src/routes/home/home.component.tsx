import { FC } from "react"

import { Layout } from "antd";

const { Header, Content } = Layout;

const Home: FC = () => {
    return (
        <>
        <Header>
            <div className="logo" />
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                Content
            </div>
        </Content>
        </>
    )
}

export default Home;