const axiosMockAdapter = require('axios-mock-adapter')
const axios = require('axios')

const axiosMock = new axiosMockAdapter(axios, {delayResponse: 200})

axiosMock.onGet('/aaa').networkError()
axiosMock.onGet('/bbb').timeout()
axiosMock.onGet('/ccc').reply(500)

it('aaa', done => {
  axios.get('/aaa')
    .then(() => done())
    .catch(e => done())
})

it('bbb', done => {
  axios.get('/bbb')
    .then(() => done())
    .catch(e => done())
})

it('ccc', done => {
  axios.get('/ccc')
    .then(() => done())
    .catch(e => done())
})
