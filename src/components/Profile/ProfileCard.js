import React from "react"
import "./Profile.css"
import { Link } from "react-router-dom"

// animal card representing animals
export const profileCard = ({ user }) => (
    <section className="profile">
        <h3 className="profile__name">{user.firstName}</h3>
        <div className="description__resume">Resume Description: {user.descriptionResume}</div>
        <button type="button" onClick={() => handleDeleteProfile(user.id)}>Delete</button>
    </section>
)