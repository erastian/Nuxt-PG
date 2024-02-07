export default defineEventHandler(({ req, res, context }) => {
  const hostname = req.headers.host || 'localhost:5173'

  const mainDomain = ['localhost:5173']

  if (!mainDomain.includes(hostname)) {
    const currentHost =
      process.env.NODE_ENV === 'production' && process.env.VERCEL === '1'
        ? hostname.replace(`.keypress.blog`, '')
        : hostname.replace(`.localhost:5173`, '')

    console.log({ currentHost })
    context.subdomain = currentHost
  }
})
