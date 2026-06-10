import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

function ProfileEdit() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);

        const {
            data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
            console.log("User not logged in");
            setLoading(false);
            return;
        }

        const { data, error } = await supabase
            .from("profiles")
            .upsert({
                user_id: user.id,
                name: name,
                bio: bio,
            });

        if (error) {
            console.log(error);
        } else {
            console.log(data);
            navigate("/profile");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">

                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Edit Profile
                </h2>

                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <textarea
                        placeholder="Enter your bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                    />

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 rounded-lg disabled:opacity-50"
                    >
                        {loading ? "Saving..." : "Save Profile"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileEdit;