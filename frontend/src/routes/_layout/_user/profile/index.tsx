import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/_user/profile/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/_user/profile/"!</div>
}