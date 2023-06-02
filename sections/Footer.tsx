import Link from "next/link"
import React, { useEffect, useState } from "react"

function Footer() {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  })

  useEffect(() => {
    fetch("https://api.github.com/")
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        })
      })
      .catch((e) => console.error(e))
  }, [])

  return (
    <footer>
      <Link href='https://github.com/' target='_blank' className='footer-link'>
        <span className='footer-info '>
          © 2023 Платформа обучения профайлингу и симуляции эмоций.
          г.Санкт-Петербург. Санкт-Петербургский государственный
          электротехнический университет «ЛЭТИ» им. В.И.Ульянова (Ленина)
          СПбГЭТУ «ЛЭТИ». Все права защищены.
        </span>
      </Link>
    </footer>
  )
}

export default Footer
