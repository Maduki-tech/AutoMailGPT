import { EmailData } from '../../types/types';

export const getRandomBody = async (data: EmailData[]): Promise<string[]> => {
    const response: string[] = [];
    for (let i = 0; i < data.length; i++) {
        const body =
            `Hi ${data[i].Name},\n\n` +
            `I'm a software developer and I'm looking for a job.\n` +
            `I'm interested in working at ${data[i].Company} as a ${data[i].Topic}.\n` +
            `I'm attaching my resume to this email.\n\n` +
            `Thanks,\n` +
            `David\n`;

        response.push(body);
    }

    return response;
};
