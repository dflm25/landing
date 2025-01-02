import React from "react"
import { Puck, ActionBar, AutoField, FieldLabel } from "@measured/puck"
import render from "../../utils/render"

// components
import Hero from "./components/hero"
import HeroVideo from "./components/heroVideo"
import HeroText from "./components/heroText"
import CallToAction from "./components/callToAction"
import product from "./components/product"

import "@measured/puck/puck.css"
// import { fields } from "./components/hero/constants"

const config = {
    categories: {
        bloques: {
            components: ["Hero", "heroVideo", "heroText"],
        },
        other: {
            title: "Otros componentes",
        },
    },

    components: {
        Hero: {
            fields: {
                title: {
                    type: "text",
                    label: "Heading",
                    placeholder: "Enter a heading",
                },
                intro: {
                    type: "textarea",
                    label: "Intro",
                    placeholder: "Enter an intro",
                },
                heroImage: {
                    type: "object",
                    label: "Propiedades de la imagen",
                    objectFields: {
                        url: { type: "text", label: "URL de la imagen" },
                        alt: { type: "text", label: "Image alt" },
                        position: {
                            type: "radio",
                            label: "Position imagen",
                            options: [
                                { label: "Left", value: "left" },
                                { label: "Right", value: "right" },
                            ],
                        },
                    },
                },
            },
            defaultProps: {
                title: "Hero",
                intro: "Lorem ipsum dolor sit amet, consectetur adipiscingelit. Nunc et metus id ligula malesuada placerat sit",
                heroImage: {
                    url: "https://images.unsplash.com/photo-1525004866327-07739b938272?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTZ8fGJ1aWxkaW5nfGVufDB8Mnx8fDE2MzQ1NTA4MDc&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080",
                    position: "left",
                    alt: "Photo by Kaloyan Draganov",
                },
            },
            render: (props) => {
                return <Hero {...props} />
            },
        },
        heroVideo: {
            fields: {},
            render: (props) => {
                return <HeroVideo {...props} />
            },
        },
        heroText: {
            fields: {},
            render: (props) => {
                return <HeroText {...props} />
            },
        },
        callToAction: {
            fields: {},
            render: (props) => {
                return <CallToAction {...props} />
            },
        },
        product,
        Paragraph: {
            fields: {
                text: { type: "text" },
            },
            defaultProps: {
                text: "Paragraph",
            },
            render: ({ text }) => (
                <div style={{ padding: 20 }}>
                    <p>{text}</p>
                </div>
            ),
        },
    },
}

// cambiar el header de la template
const overrides = {
    header: ({ actions }) => (
        <header>
            <span>care monda</span>
            <div>{actions}</div>
        </header>
    ),
    actionBar: ({ children }) => (
        <ActionBar label="Actions">
            <ActionBar.Group>{children}</ActionBar.Group>
        </ActionBar>
    ),
}

// Describe the initial data
const initialData = {}

// Save the data to your database
const save = (data) => {
    console.log("Save data to your database", data)
}

// Render Puck editor
export function View() {
    return (
        <Puck
            config={config}
            data={initialData}
            onPublish={save}
            // overrides={overrides}
        />
    )
}

render(View)
