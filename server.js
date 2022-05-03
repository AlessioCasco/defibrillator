const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  host = process.env.HOST || '0.0.0.0';

const { exec } = require('child_process');
const path = require('path');

const isValidMacAddress = require('./src/check_macaddress')

app.listen(port);

app.get("/api/run", (req, res) =>{
  let {macaddr} = req.query
  if(!isValidMacAddress(macaddr)){
    res.statusCode = 400;
    return res.json({
      message: `${macaddr} is not a valid macaddress`
    })
  }

  const cmd = `wakeonlan -p 7 ${macaddr}`

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      res.json({
          cmd: `${cmd}`,
          check: isValidMacAddress(),
          stdout,
          stderr,
          error
      })
    } else {
      res.status(200).send('All done, device turned on')
    }
  })
})


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

console.log(`Running on http://${host}:${port}`);
