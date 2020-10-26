import Express from 'express';
import bodyParser from 'body-parser';

import { User } from './models';

const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/user/create", async (request, response) => {
  try {
    const data = request.body;

    const newUser = await User.create({
      ...data
    });

    return response.status(200).send({
      id: newUser.id
    });
  } catch (e) {
    console.error(e);
    return response.status(500).send();
  }
});

app.listen(3001, () => {
  console.log('Now running on some port');
});
