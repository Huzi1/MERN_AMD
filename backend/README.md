## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm debug`

Launches server in debug mode



## 'APi Test'

Use postman to test api. Sample object body 

{
	
	"username":"huz1",
	"password":"admin1",
	"category":"internet",
	"data": {
		"category":"internet",
		"id": "aug2020",
		"amount": 50
	}
}

## `MongoDB & Mongoose`

Implemented Mongoose model schema. The data Object in model can take in any input structure, I have used and Array of Objects. Each user will have a seperate document containg all its data