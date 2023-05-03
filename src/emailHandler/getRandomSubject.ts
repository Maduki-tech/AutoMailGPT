import { EmailData } from "../../types/types";

export const getRandomSubject = async (data: EmailData[]): Promise<string[]> => {
    const response: string[] = [];
    for (let i = 0; i < data.length; i++) {
        const subject = `Application for ${data[i].Topic} position`;
        response.push(subject);
    }
    return response;
}

