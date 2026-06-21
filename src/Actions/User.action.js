export function getDataFromForm(prevState, formData){
    const name = formData.get("name");
    const email = formData.get("email");
    return {
        message: `My name is ${name} and my email address is ${email}`,
        success: true,
    }
}