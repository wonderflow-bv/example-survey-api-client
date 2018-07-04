const sinon = require('sinon')
const { client } = require('../lib/client')

const ExampleUtils = {
  setup () {
    const LOGIN_EXPECTED_OUTPUT = { 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imdpb3Zhbm5pQHdvbmRlcmZsb3cuY28iLCJpYXQiOjE1MzA2NjE3NTYsImV4cCI6MTUzMTI2NjU1Nn0.Tf9hmgyEfVqXnH2yw6V4Sc74XjXa1r4LHyRFFPiq8OM' }

    const stub = sinon.stub(client, 'request')

    stub.onCall(0).returns(Promise.resolve(LOGIN_EXPECTED_OUTPUT))

    const INSERT_SURVEY_RESPONSE_EXPECTED_OUTPUT = {
      error: '',
      hint: 'Survey response inserted correctly',
      surveyResponse: {
        surveyId: '422989',
        questionId: '3666178',
        respondentId: '1207212',
        rating: 5,
        comment: 'because the operator was not kind'
      }
    }

    stub.onCall(1).returns(Promise.resolve(INSERT_SURVEY_RESPONSE_EXPECTED_OUTPUT))

    const RETRIEVE_SURVEY_RESPONSE_EXPECTED_OUTPUT = {
      skip: 23,
      limit: 1,
      total: 24,
      data: [{
        surveyId: '422989',
        questionId: '3666178',
        respondentId: '1207212',
        rating: 5,
        comment: 'because the operator was not kind'
      }]

    }

    stub.onCall(2).returns(Promise.resolve(RETRIEVE_SURVEY_RESPONSE_EXPECTED_OUTPUT))
  },
  print ({ name, exampleResponse }) {
    const stringified = JSON.stringify(exampleResponse, null, 4).split('\n').join('\n\t').replace(/^/gi, '\t')

    console.log('')
    console.log('')
    console.log('')
    console.log(`${name}`)
    console.log('')
    console.log(`${stringified}`)
  }
}

module.exports = ExampleUtils
