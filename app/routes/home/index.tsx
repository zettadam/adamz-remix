import type { LinksFunction, MetaFunction } from '@remix-run/node'

import indexStylesheetHref from './index.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: indexStylesheetHref },
]

export const meta: MetaFunction = () => {
  return [
    { title: 'Adam Z.' },
    { name: 'description', content: 'Personal disquiet of Adam Z.' },
  ]
}

export default function Index() {
  return (
    <div className="home">
      <div className="about-me">
        <span>
          <p>
            Hi, I am{' '}
            <b>
              Adam{' '}
              <a href="https://www.howtopronounce.com/ziolkowski">Ziolkowski</a>
            </b>
            .
          </p>
          <p>
            I climb web mountains on weekdays. On Saturdays, I follow the
            Dao—mostly the <em>not trying</em> part. Any other time, I rest on
            my laurels and fritter hours away polishing my RPG character sheet.
          </p>
          <p>
            A ranged barbarian…{' '}
            <a href="https://en.wikipedia.org/wiki/Alignment_(Dungeons_%26_Dragons)#Chaotic_good">
              chaotic good
            </a>
            , on a quest to make better websites*.
          </p>
          <p>* I make and consult on web apps from Monday to Friday.</p>
        </span>
      </div>

      <blockquote>
        <p className="quote">
          Nobody climbs mountains for scientific reasons. Science is used to
          raise money for the expeditions, but{' '}
          <strong>you really climb for the hell of it.</strong>
        </p>
        <p className="author">Edmund Hillary</p>
      </blockquote>
    </div>
  )
}
