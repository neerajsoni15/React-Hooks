import React from 'react';
import './App.css';
import Hookcounter from './Componets/useState/HookCounter'
import UseStateAsObject from './Componets/useState/UseStateASObject'
import HooksArray from './Componets/useState/HooksArray'
//import UseeffectHooks from './Componets/useEffect/effectHooksHover'
import HookHover from './Componets/useEffect/effectHooks'
import FatchingData from './Componets/useEffect/DataFatchingEffectHooks'
import ClassCounter from './Componets/classHooks'
//import DocTitleOne from './Componets/CustomeHooks/DocTitleOne'
//import DocTitleTwo from './Componets/CustomeHooks/DocTitleTwo'
//import ContextHooks from './Componets/ContextHooks/ComponentC'

import ComponentC from './Componets/ContextHooks/ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
       {/* { <ClassCounter />} */}
        {/* {<Hookcounter />} */}
        {/* {<HooksArray />} */}
        {/* {<UseStateAsObject />} */}
        {/* {<HookHover />} */}
        {/* {<FatchingData />} */}
        {/* {<UseStateAsObject />*/}
        {/* { <DocTitleOne />*/}
         {/*<DocTitleTwo />*/}
          <UserContext.Provider value={'Cerner'}>
            <ChannelContext.Provider value={'Healthcare'}>
					    <ComponentC />
				    </ChannelContext.Provider>
			    </UserContext.Provider>
    </div>
  );
}

export default App;
