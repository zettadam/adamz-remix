import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Adam Z.' },
    { name: 'description', content: 'Personal disquiet of Adam Z.' },
  ]
}

export default function Index() {
  return (
    <div>
      <p>Hello, world!</p>
    </div>
  )
}
