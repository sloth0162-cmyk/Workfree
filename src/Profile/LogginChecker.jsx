import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useEffect } from "react";

function LogginChecker({ children }) {
    const navigate = useNavigate();

    useEffect(() => {
        const checkUser = async () => {
            const { data: authData, error: authError } =
                await supabase.auth.getUser();

            // Check if user is logged or not
            if (authError || !authData.user) {
                navigate("/signin");
                return;
            }

            const user = authData.user;

            //  user data will be checked from table now
            const { data: profile, error: profileError } = await supabase
                .from("profiles")
                .select("*")
                .eq("user_id", user.id)
                .maybeSingle(); // ✅ no 406

            //  no profile found
            if (profileError || !profile) {
                navigate("/profile-edit");
                return;
            }

            // profile exists but name missing
            if (!profile.name) {
                navigate("/profile-edit");
                return;
            }


        };

        checkUser();
    }, [navigate]);

    return children;
}

export default LogginChecker;