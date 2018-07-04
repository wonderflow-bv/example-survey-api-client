# SURVEY-DATA-API

## Install

`git clone <>`

`cd ...`

`npm i`

## Run example

```bash
npm run example
```

Output

```
login

	{
	    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imdpb3Zhbm5pQHdvbmRlcmZsb3cuY28iLCJpYXQiOjE1MzA2NjE3NTYsImV4cCI6MTUzMTI2NjU1Nn0.Tf9hmgyEfVqXnH2yw6V4Sc74XjXa1r4LHyRFFPiq8OM"
	}



insertSurveyResponse

	{
	    "error": "",
	    "hint": "Survey response inserted correctly",
	    "surveyResponse": {
	        "surveyId": "422989",
	        "questionId": "3666178",
	        "respondentId": "1207212",
	        "rating": 5,
	        "comment": "because the operator was not kind"
	    }
	}



retrieveSurveyResponse

	{
	    "skip": 23,
	    "limit": 1,
	    "total": 24,
	    "data": [
	        {
	            "surveyId": "422989",
	            "questionId": "3666178",
	            "respondentId": "1207212",
	            "rating": 5,
	            "comment": "because the operator was not kind"
	        }
	    ]
	}
```