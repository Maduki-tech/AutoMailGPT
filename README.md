# Automation mail with ChatGPT

## You need to Create a Gmail Api Key

### Create an [ Google Cloud Project ]( https://developers.google.com/workspace/guides/create-project?hl=de )

-   Tool only works with Gmail for now.

### Enable API

To enable the API you need to got to [ Google API ]( https://console.cloud.google.com/apis/enableflow?apiid=gmail.googleapis.com&hl=de )

### Download the Credentials from Google Cloud

-   Visit [ Google Cloud Console ]( https://console.cloud.google.com/apis/credentials?hl=de )
-   Klicken Sie auf Anmeldedaten erstellen > OAuth-Client-ID.
-   Klicken Sie auf Anwendungstyp > Desktop-App.
-   Geben Sie in das Feld Name einen Namen für die Anmeldedaten ein. Dieser Name wird nur in der Google Cloud Console angezeigt.
-   Klicken Sie auf Erstellen. Der Bildschirm „OAuth-Client erstellt“ wird mit Ihrer neuen Client-ID und Ihrem Clientschlüssel angezeigt.
-   Klicken Sie auf OK. Die neu erstellten Anmeldedaten werden unter OAuth 2.0-Client-IDs angezeigt.
-   Speichern Sie die heruntergeladene JSON-Datei als `credentials.json` und verschieben Sie die Datei in Ihr Arbeitsverzeichnis.

### Installation

To install it use
**NPM:**
`npm install`
**Yarn:**
`yarn`
**PNPM:**
`pnpm install`

### Choose the Emailadress

If you run `npm run run` for the first time. You will get Prompted to select the Email you want to use.

After the first time the `token.json` file get's created and you wont be asked again, unless you will delete the `token.json` file.

### Permission the Tools has
 
This tool has only 2 Permissions.

1. `https://www.googleapis.com/auth/gmail.readonly`,
    - This is just to read some Informations like Tags etc.
    - Read more [ here ]( https://developers.google.com/gmail/api/auth/scopes?hl=de )
2. `https://www.googleapis.com/auth/gmail.compose`,
    - This is to create Drafts
    - Read more [ here ]( https://developers.google.com/gmail/api/guides/sending?hl=de )

---
# Important to notice.

This is just a Hobby project. If you want to contibute. Feel free to do so.

[Contact me](mailto:d.schlueter1011@gmail.com) 

