import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { collection, doc, getDoc, getDocs, orderBy, query, serverTimestamp, setDoc} from "firebase/firestore"
import { IUser } from "../../Interfaces/IUser"
import { auth, db } from "../firebase"

export const useUsers = () => {
	const singIn =  (email: string, password: string) =>  signInWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		return [userCredential.user.uid,"validated"]
	}).catch((error) => {
		return [error.code,"error"]
	})
	
	const createLoginUser = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		return [userCredential.user.uid,"created"]
	}).catch((error)=>{
		return [error.code,"error"]
	})
	
	const createUser = async (user: IUser) => await setDoc(doc(db,"users",user.id),{...user, createdAt: serverTimestamp()})
	
	const getUser = async (id: string) => {
		const docData = await getDoc(doc(db,"users",id))
		return {...docData.data, id: docData.id}
	}

	const getUsers = async () => {
		return await getDocs(query(collection(db,"users"), orderBy("createdAt","desc")))
	}
	return {
		singIn,
		createLoginUser,
		createUser,
		getUser,
		getUsers
	}
}