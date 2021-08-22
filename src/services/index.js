import { auth,db } from './firebase';
// import { useHistory } from 'react-router-dom';


async function signup (email,password){
    const credentUp = await auth.createUserWithEmailAndPassword(email,password);
    
    return credentUp;
};

async function signin(email,password){
    const credent = await auth.signInWithEmailAndPassword(email,password);
    
    return credent;
}

async function logout() {
    const mierd = await auth.signOut()
    
    return mierd;
};

function logeado(){
    auth.onAuthStateChanged(user=>{
        if(user){
            console.log(user.uid);
        }else{
            console.log("El hijo puta se salió");
    }
})
}

// Funciones para modificar, obtener los proyectos;

const cargarProyectos = async(nameCollection)=>{
    const snapshot = await db.collection(nameCollection).get();
    let proyectos = [];
    snapshot.forEach((doc) => {
    const data = doc.data();    
    proyectos.push({...data,id:doc.id});   
    });
    return proyectos
}

async function createTicket(data,nameCollection){
    return await db
    .collection(nameCollection)
    .doc()
    .set(data) 
}

async function updateTicket(id,data,nameCollection){
    return await db
    .collection(nameCollection)
    .doc(id)
    .update(data);
}

async function oneTicket(id,nameCollection){
    const snapshot = await db.collection(nameCollection).get();
    let mierda = {};
    snapshot.forEach(doc => {
    // console.log(doc.id, '=>', doc.data());
        if(doc.id === id){
            const data = doc.data();
           mierda =  data;   

        }
    });
    return mierda;
}

async function deleteTicket(id,nameCollection){
    return await db
    .collection(nameCollection)
    .doc(id)
    .delete();
}



export {
    signin,
    signup,
    logout,
    logeado,
    cargarProyectos,
    createTicket,
    updateTicket,
    deleteTicket,
    oneTicket
}
