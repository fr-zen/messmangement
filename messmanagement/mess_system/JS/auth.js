// async function signup(e) {
//     e.preventDefault();
//     const email = document.querySelector('#signup-email');
//     const pwd = document.querySelector('#signup-password');
//     try {
//         const res = await firebase.auth().createUserWithEmailAndPassword(email.value, pwd.value)
//         alert(res);
//     }
//     catch(err) {
//         alert(err);
//     }
//     email.value="";
//     pwd.value="";
// }


async function login(e) {
    e.preventDefault();
    const email = document.querySelector('#email');
    const pwd = document.querySelector('#password');
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email.value, pwd.value);
        alert(res);
    }
    catch(err) {
        alert(err);
    }
    email.value="";
    pwd.value="";
}


function logout() {
    firebase.auth().signOut();
}
