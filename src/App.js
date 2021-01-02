import React,{Component} from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Auxiliary from './hoc/Auxiliary';
class App extends Component {
  render(){
  return (
    <Auxiliary>
     <Layout>
       <BurgerBuilder/>
     </Layout>
    </Auxiliary>
  );
}
}
export default App;
