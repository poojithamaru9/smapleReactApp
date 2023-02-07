const h1Element = React.createElement(
    "h1",
    {
        id:"heading"
    },
    "Sample React App"
)

const container = React.createElement(
    "div",
    {
        id:"container"
    },
    [h1Element]
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(container)