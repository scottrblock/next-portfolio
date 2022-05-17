const YEAR = new Date().getFullYear()
const TITLE = 'scottblock.com'

export default {
  navs: [
    {
      url: 'https://github.com/shuding/nextra',
      name: 'Nextra'
    }
  ],
  darkMode: true,
  titleSuffix: ` | ${TITLE}`,

  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time>, {TITLE}
      <a href="/feed.xml">rss</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
