import React from "react"
import { Puck, ActionBar, AutoField, FieldLabel } from "@measured/puck"
import render from "../../utils/render"

// components
import heroImage from "./components/hero"
import HeroVideo from "./components/heroVideo"
import heroText from "./components/heroText"
import CallToAction from "./components/callToAction"
import product from "./components/product"
import social from "./components/social"

import "@measured/puck/puck.css"
// import { fields } from "./components/hero/constants"

const config = {
    categories: {
        bloques: {
            components: ["heroImage", "heroVideo", "heroText"],
        },
        other: {
            title: "Otros componentes",
        },
    },

    components: {
        heroText,
        heroImage,
        social,
        heroVideo: {
            label: "Hero Video",
            fields: {},
            render: (props) => {
                return <HeroVideo {...props} />
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
        Footer: {
            fields: {
                text: { type: "text" },
            },
            defaultProps: {
                text: "Footer",
            },
            render: ({ text }) => (
                <footer class="footer text-center">
                    <div class="container">
                        <p>Copyright &copy; 2024. All rights reserved.</p>
                        <p>
                            Designed with{" "}
                            <span class="text-danger">&hearts;</span> by Your
                            Name
                        </p>
                    </div>
                </footer>
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
