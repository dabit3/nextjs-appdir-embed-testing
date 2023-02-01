import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: `
            <blockquote class="twitter-tweet">
              <p lang="en" dir="ltr">Is there any way to do basic async HTML / JS embeds with the new version of Next.js?<br /><br />I&#39;ve tried using &#39;use client&#39; but have not been able to get around the &quot;Hydration failed because the initial UI does not match...&quot; error<br /><br />
              Tried different ways placing the script, not working ...</p>
              &mdash; nader (🧱, 🚀) | nader.lens (@dabit3)
              <a href="https://twitter.com/dabit3/status/1620809505801129985?ref_src=twsrc%5Etfw">February 1, 2023</a>
            </blockquote> 
            <script src="https://platform.twitter.com/widgets.js" async=""></script>
          `
        }}
      />
    </main>
  )
}
