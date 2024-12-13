import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'

export function setupMockServer() {
  const server = setupServer(
    http.get('http://localhost:3000/api/hello', () => {
      return HttpResponse.json({ message: 'Mocked Hello from the API! (Next.js 14)' })
    })
  )

  return server
}

