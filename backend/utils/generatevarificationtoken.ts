export const generatevarificationcode = (length = 6): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let verificationcode = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        verificationcode += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return verificationcode
}