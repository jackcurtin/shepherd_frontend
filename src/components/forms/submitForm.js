export default function submitForm(url, formFields){
    console.log(`Form submitted`);
    const headers = new Headers({
        'Content-Type' : 'application/json',
        'Authorization': `${localStorage.token}`
    })
    fetch(url, {
        credentials: "include",
        method: 'POST',
        headers: headers,
        body: JSON.stringify(formFields)
    })
        .then((response) => console.log(response))
        .catch(error => console.log(error))
}