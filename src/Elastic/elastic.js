const { Client } = require('@elastic/elasticsearch')
const ElasticClient = new Client({
  cloud: {
    id: 'TesteElastic:c291dGhhbWVyaWNhLWVhc3QxLmdjcC5lbGFzdGljLWNsb3VkLmNvbSQ4YmVjYmI4Njg2M2Y0MjhlYjY4OGYwMzk5NmUxNzRiMCQ5NGU5NmRlYTM4YWM0ODQxYTI4ZDA2MzI0OWZmNjAzNQ==',
  },
  auth: {
    username: 'elastic',
    password: 'GdffS3MpVZMAQEEGXZSsFEQD'
  }
})

export default ElasticClient