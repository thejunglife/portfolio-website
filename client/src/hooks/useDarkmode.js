import { useEffect, useState } from 'react'

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const className = 'dark'
    if (isDark) {
      window.document.body.classList.add(className)
    } else {
      window.document.body.classList.remove(className)
    }
  }, [isDark])

  return [isDark, setIsDark]
}

export default DarkMode
