import XLSX from 'xlsx';
import { EmailData } from '../../types/types';

/**
 * @description - This function reads the xslData.xlsx file and returns an array of EmailData objects
 * @returns {Promise<EmailData[]>} - Returns a promise of an array of EmailData objects
 */
export const getEmailList = async (): Promise<EmailData[]> => {
    const result: EmailData[] = [];
    var workbook = XLSX.readFile('xslData.xlsx');
    var sheet_name_list = workbook.SheetNames;
    for (let i = 0; i < sheet_name_list.length; i++) {
        var xlData: EmailData[] = XLSX.utils.sheet_to_json(
            workbook.Sheets[sheet_name_list[i]]
        );
        result.push(...xlData);
    }
    return [...result];
};
