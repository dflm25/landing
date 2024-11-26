import React from "react"
import { Puck } from "@measured/puck"
import render from "../../utils/render"

import "@measured/puck/puck.css"

const config = {
    components: {
        HeadingBlock: {
            fields: {
                children: {
                    type: "text",
                },
            },
            render: ({ children }) => {
                return <h1>{children}</h1>
            },
        },
        Paragraph: {
            fields: {
                text: { type: "text" },
            },
            defaultProps: {
                text: "Paragraph",
            },
            render: ({ text }) => (
                <div style={{ padding: 64 }}>
                    <p>{text}</p>
                </div>
            ),
        },
        BootstrapCard: {
            fields: {
                title: { type: "text", label: "Title" },
                content: { type: "textarea", label: "Content" },
                imageUrl: { type: "text", label: "Image URL" },
            },
            defaultProps: {
                title: "Card Title",
                content: "Card content goes here.",
                imageUrl: "https://via.placeholder.com/150",
            },
            render: ({ title, content, imageUrl }) => (
                <div className="card" style={{ width: "18rem" }}>
                    <img
                        src={imageUrl}
                        className="card-img-top"
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{content}</p>
                    </div>
                </div>
            ),
        },
    },
}

// Describe the initial data
const initialData = {}

// Save the data to your database
const save = (data) => {}

// Render Puck editor
export function View() {
    return <Puck config={config} data={initialData} onPublish={save} />
}

render(View)
