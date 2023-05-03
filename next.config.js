/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental:{appDir: true},
  env: {
    STRIPE_PUBLISHABLE_KEY:'pk_test_51N3jdYGuPVBl9todAf2jn3AxE54HzD8AijUaWx3kzAkj9r3cUg6tl0BVwiUWlAOfLRwuno9YckMAjYOL3biUTyBu00SyISOg1h',
  },
}

module.exports = nextConfig
