import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../../App'

function ComponentE() {
    return(
        <ComponentF />
    )

  //const user = useContext(UserContext)
  //const channel = useContext(ChannelContext)
  //return <div> {user} Industry is a {channel} Industry</div>
}

export default ComponentE