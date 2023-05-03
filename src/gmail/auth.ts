const fs = require('fs').promises
import path from 'path'
import process from 'process'
import { authenticate } from '@google-cloud/local-auth'
import { GoogleApis, google } from 'googleapis'

type OAuth2Client = typeof GoogleApis.prototype.auth.OAuth2.prototype
type Auth = typeof GoogleApis.prototype.auth.OAuth2

const SCOPES = [
    'https://www.googleapis.com/auth/gmail.readonly',
    'https://www.googleapis.com/auth/gmail.compose',
    'https://www.googleapis.com/auth/spreadsheets.readonly'
]
const TOKEN_PATH = path.join(process.cwd(), 'token.json')
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json')

async function loadSavedCredentialsIfExist(): Promise<OAuth2Client | null> {
    try {
        const content = await fs.readFile(TOKEN_PATH)
        const credentials = JSON.parse(content)
        return google.auth.fromJSON(credentials) as OAuth2Client
    } catch (err) {
        return null
    }
}

async function saveCredentials(client: OAuth2Client): Promise<void> {
    const content = await fs.readFile(CREDENTIALS_PATH)
    const keys = JSON.parse(content)
    const key = keys.installed || keys.web
    const payload = JSON.stringify({
        type: 'authorized_user',
        client_id: key.client_id,
        client_secret: key.client_secret,
        refresh_token: client.credentials.refresh_token,
    })
    await fs.writeFile(TOKEN_PATH, payload)
}

export async function authorize(): Promise<OAuth2Client> {
    let client = await loadSavedCredentialsIfExist()
    if (client) {
        return client
    }
    client = await authenticate({
        scopes: SCOPES,
        keyfilePath: CREDENTIALS_PATH,
    })
    if (client.credentials) {
        await saveCredentials(client)
    }
    return client
}
