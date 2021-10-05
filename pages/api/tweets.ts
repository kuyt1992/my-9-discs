import Twitter from 'twitter'

const APP_KEY = process.env.NEXT_PUBLIC_TWTTER_APP_KEY
const APP_SECRET = process.env.NEXT_PUBLIC_TWTTER_APP_SECRET
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_TWITTER_ACCESS_TOKEN
const ACCESS_TOKEN_SECRET = process.env.NEXT_PUBLIC_TWITTER_ACCESS_TOKEN_SECRET

const client = new Twitter({
  consumer_key: APP_KEY,
  consumer_secret: APP_SECRET,
  access_token_key: ACCESS_TOKEN,
  access_token_secret: ACCESS_TOKEN_SECRET,
})

export default async (req, res) => {
  // const me = await client.get('account/verify_credentials', {})
  // console.log(me)
  // res.status(200).json(me)
  client.post('statuses/update', { status: 'test from next' }, function (error, tweet, response) {
    // if (!error) {
    //   console.log(tweet)
    // } else {
    //   console.log('error')
    // }
  })
}
