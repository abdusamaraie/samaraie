import { useRef } from "react"
import { useTheme } from "../contexts"

const ThemeBtn = ({ onToggle }: { onToggle: () => void }) => {
  // const { toggleTheme } = useTheme()
  const themeBtn = useRef(null)

  const onChangeBtn = () => {
    const checkedStatus = themeBtn.current.checked
    checkedStatus ? onToggle() : onToggle()
  }

  return (
    <label className="darkModeBtn">
      <input type="checkbox" onChange={onChangeBtn} ref={themeBtn} />
      <span className="check"></span>
    </label>
  )
}

export default ThemeBtn
