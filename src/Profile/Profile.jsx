import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

function Profile() {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        async function getProfile() {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (!user) return;

            const { data, error } = await supabase
                .from("profiles")
                .select("*")
                .eq("user_id", user.id)
                .maybeSingle(); // safer

            if (error) {
                console.log(error);
            } else {
                setProfileData(data);
            }
        }

        getProfile();
    }, []);

    if (!profileData) return <p style={{ color: "white" }}>Loading...</p>;

    return (
        <div
            className="text-white p-6 m-6"
        >
            <h1
                className=""
            >Profile</h1>
            <p>Name: {profileData.name}</p>
            <p>Bio: {profileData.bio}</p>
        </div>
    );
}

export default Profile;