import React from 'react'

// https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb
const logProps = <P extends object>(
  Component: React.ComponentType<P>,
): React.FC<P> =>
  function Logger(props): JSX.Element {
    console.log(`HERE ARE THE PROPS:`, props)
    return <Component {...props as P} />
  }

export default logProps
