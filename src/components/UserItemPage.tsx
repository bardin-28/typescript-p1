import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";

interface userItemPageParams {
    id: string;
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<userItemPageParams>()
    const history = useHistory()

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser () {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id )
            setUser(response.data)
        }catch (e) {
            console.error(e);
        }
    }return (
        <div>
            <button onClick={() => history.push('/users')}>Back</button>
          <h1>
              {user?.id}. {user?.name} from {user?.address.city} live in {user?.address.street}
          </h1>

        </div>
    );
};

export default UserItemPage;