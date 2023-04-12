const app = require('../src/app')

const port = process.env.PORT || '3030';

app.listen(port, function () {
  console.log(`servidor executando na porta ${port}`);
});


