const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const posts = [
	{id: 1, content: '', userName:'' },
]

//Getting a request for the site
app.get('/api/chat', (req, res) = res.send(post))

//For posting and storing chat logs
app.post('/api/chat', (req, res) => {
	
	let newPost = req.body
	posts.push(newPost)
	console.log(post)
	res.send(newPost)
}

})

app.listen(3000, () => console.log('chat app example'))