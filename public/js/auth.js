
// const { signInWithEmailAndPassword, signUpWithEmailAndPassword, signOut } = require('./auth')




// firebase.initializeApp(config);

// Sign in with email and password
 const signInWithEmailAndPassword = async (email, password) => {
    try {
        const user = await get.auth().signInWithEmailAndPassword(email, password);
        return user;
    } catch (error) {
        throw error;
    }
}

// Sign up with email and password
 const signUpWithEmailAndPassword = async (email, password) => {
    try {
        const user = await get.auth().createUserWithEmailAndPassword(email, password);
        return user;
    } catch (error) {
        throw error;
    }
}

// Sign out
 const signOut = async () => {
    try {
        await get.auth().signOut();
    } catch (error) {
        throw error;
    }
}
