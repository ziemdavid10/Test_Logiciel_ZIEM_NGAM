import { test } from '@playwright/test';

export const monSet = new Set();
const URL = "https://ztrain-web.vercel.app/home";

function generateRandomEmail() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'*+/=?^_`{|}~";
    const domainChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const tldChars = "abcdefghijklmnopqrstuvwxyz";

    function getRandomString(length, charSet) {
        return Array.from({ length }, () => charSet[Math.floor(Math.random() * charSet.length)]).join('');
    }

    const localPart = getRandomString(8, chars);
    const domain = getRandomString(5, domainChars);
    const tld = getRandomString(3, tldChars);

    return `${localPart}@${domain}.${tld}`;
}

console.log(generateRandomEmail());

let emailaleatoire = generateRandomEmail();
while (monSet.has(emailaleatoire)) {
    // Si oui, générer un nouvel email
    emailaleatoire = generateRandomEmail();
}
monSet.add(emailaleatoire);
// Vérifier si l'email est déjà dans le set



test('Inscription d\'un utilisateur', async ({ page }) => {
    // se rendre sur le site en question
    await page.goto(`${URL}`, { waitUntil: 'domcontentloaded' });
    //clic sur l'icône de login et de registration
    await page.locator('#style_avatar_wrapper__pEGIQ').click();
    //clic sur l'onglet inscription
    await page.getByText('Inscription').click();
    // remplir les differents champs
    await page.locator('#email_register').fill(emailaleatoire);
    await page.locator('#password_register',).fill('davidloic');
    await page.locator('#confirm_password_register').fill('davidloic');
    // clique sur le bouton de validation
    await page.locator('#btn_register').click();
    console.log('Inscription réussie');
});