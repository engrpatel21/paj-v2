const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');

const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const projectRouter = require('./routes/projects')
const commentRouter = require('./routes/comments')
const featureRouter = require('./routes/features')
const taskRouter = require('./routes/tasks')
const messageRouter = require('./routes/messages')
const contributorRouter = require('./routes/contributors.js')


const cors = require('cors')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/projects', projectRouter)
app.use('/api/projects', commentRouter)
app.use('/api/features', featureRouter)
app.use('/api/tasks', taskRouter)
app.use('/api/users', messageRouter)
app.use('/api/contributors', contributorRouter)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3002;

app.listen(port, ()=> {
  console.log(`Express is listening on port ${port}.`)
});
