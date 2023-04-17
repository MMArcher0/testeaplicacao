import {useNavigate} from "react-router-dom"

export default function useNavigation(){
    const navigate = useNavigate();
 
    const navigateToMain = () => navigate("/main")
    const navigateToLogin = () => navigate("/")
    const navigateToUnauthorized = () =>navigate("/unauthorized")
    const navigateToUsers = () => navigate("/users")
    const navigateToUsersCreate = () => navigate("/users/create")
    const navigateToQuiosques = () => navigate("/quiosques")
    const navigateToQuiosquesCreate = () => navigate("/quiosques/create")
    const navigateToFinances = () => navigate("/finances")
    const navigateBack = () => navigate(-1)


    return {
        navigate,
        navigateToMain,
        navigateToLogin,
        navigateToUnauthorized,
        navigateBack,
        navigateToUsers,
        navigateToFinances,
        navigateToQuiosques,
        navigateToQuiosquesCreate,
        navigateToUsersCreate
    }
}