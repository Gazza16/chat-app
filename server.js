const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Post = ('../models/post')


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const posts = [
	{key: 1, content: 'Yo, whats up', username:'GMollica' },
	{key: 2, content: 'oi!', username: 'DERF'}
]

//Getting a request for the site
app.get('api/chat', (req, res) => {
	Post.find().then((posts) => {
	  res.send(posts);	
	})
})

app.post('/api/chat', (req, res) => {
  let username = req.body.username;
  let content = req.body.content;
  Post.create({ username, content}).then((post) => {
    res.send(post); 
  })
})



app.listen(3000, () => console.log('Sup, Lil Nelly'))
