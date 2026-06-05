import React, { useEffect, useState } from 'react'

function FourthEffectQuestion() {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const getUser = async () => {

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users/1"
            );

            const data = await response.json();

            setUser(data);
        };

        getUser();

    }, []);

    return (
        <div className='bg-gray-200'>
        <div className="w-[640px] h-52 bg-white rounded-md gap-3 mx-auto py-8 my-2 shadow-2xl shadow-gray-600">
            <h1 className='text-center text-3xl font-bold text-fuchsia-800 font-serif'>Third question of useEffect</h1>
            <h1 className='text-3xl font-bold mb-5 text-center'>
                User Information
            </h1>

            {
                user ? (
                    <div className='space-y-2 text-xl'>

                        <p>Name: {user.name}</p>

                        <p>Username: {user.username}</p>

                        <p>Email: {user.email}</p>

                        <p>Phone: {user.phone}</p>

                    </div>
                ) : (
                    <h2 className='text-center text-xl font-bold'>Please wait a minute...</h2>
                )
            }

        </div>
        </div>
    )
}

export default FourthEffectQuestion