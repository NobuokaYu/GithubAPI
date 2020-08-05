//ルートエンドポイントを設定する
const request = axios.create({
  baseURL: 'https://api.github.com'
})
request.get('/users/NobuokaYu')
  .then(res => res.data)
  .then(console.log)
