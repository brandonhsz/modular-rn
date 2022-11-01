import React from 'react'

const useHearth = () => {
  const [hearth, setHearth] = React.useState(50)
  const [hearthColor, setHearthColor] = React.useState('black')
  const [flag, setFlag] = React.useState(false)
  React.useEffect(() => {
    if (hearth > 50) {
      setHearthColor('red')
    } else {
      setHearthColor('black')
    }

    // setTimeout(() => {
    //   if (flag) {
    //     setHearth(hearth + 20)
    //   } else {
    //     setHearth(hearth - 20)
    //   }
    //   if (hearth >= 100) {
    //     setFlag(false)
    //   } else if (hearth <= 50) {
    //     setFlag(true)
    //   }
    // }, 300);

    // () => {
    //   clearTimeout()
    // }
  }, [hearth])

  return {
    hearth,
    hearthColor,
  }
}

export default useHearth