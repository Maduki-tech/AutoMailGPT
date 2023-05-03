import { google, GoogleApis } from 'googleapis';

import { EmailData } from '../../types/types';
import { getEmailList } from '../emailHandler/getEmailList';
import { getRandomBody } from '../emailHandler/getRandomBody';
import { getRandomSubject } from '../emailHandler/getRandomSubject';

type OAuth2Client = typeof GoogleApis.prototype.auth.OAuth2.prototype;

export const handleGmail = async (auth: OAuth2Client) => {
    const emailList = await getEmailList();
    const RandomBody = await getRandomBody(emailList);
    const RandomSubject = await getRandomSubject(emailList);
    for (let i = 0; i < emailList.length; i++) {
        await createEmail(auth, 'me', emailList, RandomSubject[0], RandomBody[0], i);
    }
};

const createEmail = async (
    auth: OAuth2Client,
    from: string,
    to: EmailData[],
    subject: string,
    body: string,
    i: number
) => {
    const gmail = google.gmail({ version: 'v1', auth });

    const raw =
        `From: ${from}\n` +
        `To: ${to[i].Email}\n` +
        `Subject: ${subject}\n\n` +
        `${body}`;
    const raw2 = from + to + subject + '\n' + body;
    const resp = await gmail.users.drafts.create({
        userId: 'me',
        requestBody: {
            message: {
                raw: Buffer.from(raw).toString('base64'),
            },
        },
    });
    console.log(resp.data);
};
