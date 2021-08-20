import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div onClick={() => onClick(user)}>
            {user.id}. {user.name} from {user.address.city} live in {user.address.street}
        </div>
    );
};

export default UserItem;