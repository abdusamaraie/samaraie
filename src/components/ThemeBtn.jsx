import { useRef } from "react"
import { useTheme } from "../contexts"

const ThemeBtn = () => {
  const { toggleTheme } = useTheme()
  const themeBtn = useRef(null)

  const onChangeBtn = () => {
    const checkedStatus = themeBtn.current.checked
    checkedStatus ? toggleTheme("dark") : toggleTheme("light")
  }

  return (
    <label className="darkModeBtn">
      <input type="checkbox" onChange={onChangeBtn} ref={themeBtn} />
      <span className="check" htmlFor="check"></span>
    </label>
  )
}

export default ThemeBtn
