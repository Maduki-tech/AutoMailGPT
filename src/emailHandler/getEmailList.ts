import XLSX from 'xlsx';
import { EmailData } from '../../types/types';
import { GoogleApis, google } from 'googleapis';
type OAuth2Client = typeof GoogleApis.prototype.auth.OAuth2.prototype;
/**
 * @description - This function reads the xslData.xlsx file and returns an array of EmailData objects
 * @returns {Promise<EmailData[]>} - Returns a promise of an array of EmailData objects
 */
export const getEmailList = async (
    auth: OAuth2Client
): Promise<EmailData[]> => {
    const table = process.argv.slice(2)[0];
    const position = process.argv.slice(2)[1];

    if (!table || !position) {
        throw new Error('Please provide a table and position');
    }

    const sheets = google.sheets({ version: 'v4', auth });
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId: table,
        range: position,
    });
    const rows = res.data.values;
    if (!rows || rows.length === 0) {
        console.log('No data found.');
        throw new Error('No data found.');
    }
    console.log('Name, Major:');
    rows.forEach((row) => {
        console.log(`${row[0]}, ${row[4]}`);
    });
    const emailList: EmailData[] = [];
    rows.forEach((row) => {
        const emailData: EmailData = {
            Id: row[0],
            Email: row[1],
            Topic: row[2],
            Company: row[3],
            Name: row[5],
        };
        emailList.push(emailData);
    });
    console.log(emailList);

    return emailList;
};
