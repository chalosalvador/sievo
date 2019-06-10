import React from 'react';
import './App.css';
import { Layout } from 'antd';
import TaskGrid from '../task/TaskGrid';

const { Header, Content, Footer } = Layout;


class App extends React.Component {

  render() {
    return (
      <Layout className='layout'>
        <Header>
          <div className='logo'>SIEVO</div>
        </Header>
        <Content className='content'>

          <TaskGrid />
        </Content>
        <Footer style={ { textAlign: 'center' } }>Sievo Assignment ©2019 Created by Chalo Salvador</Footer>
      </Layout>
    );
  }
}

export default App;