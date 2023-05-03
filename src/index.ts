import { authorize } from './gmail/auth'
import { handleGmail } from './gmail/handlingGmail'

const main = async () => {
    await authorize().then(handleGmail).catch(console.error)
}

main()
