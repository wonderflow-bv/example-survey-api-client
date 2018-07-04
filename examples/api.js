const ApiClient = require('../')
const { print, setup } = require('../lib/utils')

async function main () {
  setup()

  // usage demo for "ApiClient.login"
  const loginResponse = await ApiClient.login({ apiKey: 'myApiKey', apiPassword: 'myApiPassword' })

  print({ name: 'login', exampleResponse: loginResponse })

  const { token } = loginResponse

  // usage demo of "ApiClient.insertSurveyResponse()"
  const surveyResponse = {
    surveyId: '422989',
    questionId: '3666178',
    respondentId: '1207212',
    rating: 5,
    comment: 'because the operator was not kind'
  }

  const insertResponse = await ApiClient.insertSurveyResponse({ token, surveyResponse })

  print({ name: 'insertSurveyResponse', exampleResponse: insertResponse })

  // usage demo of "ApiClient.retrieveSurveyResponses"
  const retrieveResponse = await ApiClient.retrieveSurveyResponse({ token })

  print({ name: 'retrieveSurveyResponse', exampleResponse: retrieveResponse })
}

main()
