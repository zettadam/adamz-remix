import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      routes(defineRoutes) {
        return defineRoutes((route) => {
          /* Home */
          route('/', 'routes/home/index.tsx', { index: true })

          /* About */
          route('/about', 'routes/about/index.tsx')

          /* Posts */
          route('/posts', 'routes/posts/layout.tsx', () => {
            route('', 'routes/posts/index.tsx', { index: true })
            route('archive', 'routes/posts/archive/index.tsx', () => {
              route(':year/:month/:day', 'routes/posts/archive/day.tsx')
              route(':year/:month', 'routes/posts/archive/month.tsx')
              route(':year', 'routes/posts/archive/year.tsx')
            })
            route(':id/edit', 'routes/posts/edit.tsx')
            route(':id', 'routes/posts/details.tsx')
            route('new', 'routes/posts/create.tsx')
          })

          /* Notes */
          route('/notes', 'routes/notes/layout.tsx', () => {
            route('', 'routes/notes/index.tsx', { index: true })
            route('archive', 'routes/notes/archive/index.tsx', () => {
              route(':year/:month/:day', 'routes/notes/archive/day.tsx')
              route(':year/:month', 'routes/notes/archive/month.tsx')
              route(':year', 'routes/notes/archive/year.tsx')
            })
            route(':id/edit', 'routes/notes/edit.tsx')
            route(':id', 'routes/notes/details.tsx')
            route('new', 'routes/notes/create.tsx')
          })

          /* Code snippets */
          route('/code', 'routes/code/layout.tsx', () => {
            route('', 'routes/code/index.tsx', { index: true })
            route('archive', 'routes/code/archive/index.tsx', () => {
              route(':year/:month/:day', 'routes/code/archive/day.tsx')
              route(':year/:month', 'routes/code/archive/month.tsx')
              route(':year', 'routes/code/archive/year.tsx')
            })
            route(':id/edit', 'routes/code/edit.tsx')
            route(':id', 'routes/code/details.tsx')
            route('new', 'routes/code/create.tsx')
          })

          /* Links */
          route('/links', 'routes/links/layout.tsx', () => {
            route('', 'routes/links/index.tsx', { index: true })
          })

          /* Tasks */
          route('/tasks', 'routes/tasks/layout.tsx', () => {
            route('', 'routes/tasks/index.tsx', { index: true })
          })

          /* Calendar */
          route('/calendar', 'routes/calendar/layout.tsx', () => {
            route('', 'routes/calendar/index.tsx', { index: true })
          })
        })
      },
    }),
    tsconfigPaths(),
  ],
})
