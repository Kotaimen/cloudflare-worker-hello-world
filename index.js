addEventListener('fetch', event => {
  console.log(`Received new request: ${event.request}`)
  event.passThroughOnException()
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  let body = JSON.stringify({ 'message': 'Hello, worker!' })
  let headers = {
    'content-type': 'application/json',
  }
  return new Response(body,
    { headers: headers },
  )
}
