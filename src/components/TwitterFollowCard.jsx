import PropTypes from "prop-types";
import { useState } from "react";

export default function TwitterFollowCard({ users }) {
    const [followingState, setFollowingState] = useState(
        users.reduce((acc, user) => {
            acc[user.userName] = user.isFollowing;
            return acc;
        }, {})
    );

    const handleClick = (userName) => {
        setFollowingState((prevStates) => ({
            ...prevStates,
            [userName]: !prevStates[userName]
        }));
    };

    return (
        <>
            {users.map((user, i) => {
                const isFollowing = followingState[user.userName];
                const followText = isFollowing ? "Seguido" : "Seguir";
                const buttonClassName = isFollowing
                    ? "x-followCard-button is-following"
                    : "x-followCard-button";

                return (
                    <article key={i + user.name} className="x-followCard">
                        <header className="x-followCard-header">
                            <img
                                className="x-followCard-avatar"
                                src={
                                    user.imageSrc
                                        ? user.imageSrc
                                        : "https://www.shutterstock.com/image-vector/no-user-profile-picture-hand-260nw-99335579.jpg"
                                }
                                alt="ava"
                            />
                            <div className="x-followCard-info">
                                <strong>{user.name}</strong>
                                <span className="x-followCard-infoUserName">@{user.userName}</span>
                            </div>
                        </header>
                        <aside>
                            <button onClick={() => handleClick(user.userName)} className={buttonClassName}>
                                <span className="x-followCard-follow-text">{followText}</span>
                                <span className="x-followCard-stopFollow">Dejar de seguir</span>
                            </button>
                        </aside>
                    </article>
                );
            })}
        </>
    );
}

TwitterFollowCard.propTypes = {
    users: PropTypes.array.isRequired
};
