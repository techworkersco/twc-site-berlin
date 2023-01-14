import dotenv from 'dotenv';
import axios from 'axios';
import { cleanEnv, str, url } from 'envalid';

dotenv.config();

cleanEnv(process.env, {
  SLACK_TOKEN: str({ desc: 'Slack authentication token' }),
});

/**
 * @type import('@netlify/functions').Handler
 */
export async function handler(event, context, callback) {
  try {
    const payload = JSON.parse(event.body);
    console.log(payload)
    const email = encodeURIComponent(payload.payload.email.trim());
    const SLACK_TOKEN = process.env.SLACK_TOKEN;
    const SLACK_INVITE_ENDPOINT = 'https://slack.com/api/users.admin.invite';
    const toSlack = `email=${email}&token=${SLACK_TOKEN}&set_active=true`;
    await axios
      .get(`${SLACK_INVITE_ENDPOINT}?${toSlack}`)
      .then((response) => {
        if (response.status >= 200 && response.status < 400) {
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({
              message: 'success',
            }),
          });
        }
        else {
          callback('Invalid response')
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  catch (err) {
    console.log(err)
    callback('another error')
  }
}
