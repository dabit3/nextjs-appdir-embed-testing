'use client'

import styles from './page.module.css'
import {
  useState, useEffect
} from 'react'

export default function Home() {
  /* also tried adding the below to see if I can get it to work */
  // const [isLoaded, setIsLoaded] = useState(false)

  // useEffect(() => {
  //   setIsLoaded(true)
  // }, [])
  // if (!isLoaded) return null
  return (
    <main className={styles.main}>
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">Is there any way to do basic async HTML / JS embeds with the new version of Next.js?<br /><br />I&#39;ve tried using &#39;use client&#39; but have not been able to get around the &quot;Hydration failed because the initial UI does not match...&quot; error<br /><br />
        Tried different ways placing the script, not working ...</p>
        &mdash; nader (🧱, 🚀) | nader.lens (@dabit3)
        <a href="https://twitter.com/dabit3/status/1620809505801129985?ref_src=twsrc%5Etfw">February 1, 2023</a>
        </blockquote> 
    </main>
  )
}
