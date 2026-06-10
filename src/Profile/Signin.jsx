import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase"
import { useEffect } from "react";
function Singin() {
    // We will write code so user can signin with google account
    const navigate = useNavigate();

    const signinwithgoogle = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
        });

        if (error) {
            console.log(error)
        }

    }
    return <>
        <div className="text-green-100 text-4xl">
            <h1 className="text-center">
                Sign in with your google account
            </h1>
            <button
                className="text-white bg-blue-600"
                onClick={signinwithgoogle}
            >
                Sign in with google
            </button>

        </div>

    </>
}
export default Singin;