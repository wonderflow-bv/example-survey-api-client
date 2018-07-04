const { client } = require('./lib/client')

const API = {
  async retrieveSurveyResponse ({ token, whereFeedback }) {
    const query = `
      query getSurveyResponses($token: String!, $whereSurvey: FeedbackInput!) {
        user {
          products {
            feedback(where: $whereFeedback) {
              respondentId
              annotations
            }
          }
        }
      }
      `

    return client.request(query, { token, whereFeedback })
  },
  async insertSurveyResponse ({ token, surveyResponse }) {
    const mutation = `
      mutation insertSurveyResponse($token: String!, $surveyResponse: SurveyResponse!) {
        insertSurveyResponse(token: $token, surveyResponse: $surveyResponse) {
          error
          hint
          surveyResponse
        }
      }
      `

    return client.request(mutation, { token, surveyResponse })
  },
  async login ({ apiKey, apiPassword }) {
    const mutation = `
      mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
          error
          hint
          surveyResponse
        }
      }
      `

    return client.request(mutation, { username: apiKey, password: apiPassword })
  }
}

module.exports = API
