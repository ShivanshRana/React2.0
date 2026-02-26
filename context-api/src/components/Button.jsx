import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {
    const [theme,setTheme] = useContext(ThemeDataContext)
    const btnclicked=()=>{
        if(theme=='light'){
        setTheme( "dark" )}
        else {
            setTheme("light")
        }
    }
  return (
    <div>
      <button onClick={btnclicked}>
        Change theme
      </button>
    </div>
  )
}

export default Button
