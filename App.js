/**
 * Parcel do all things below(All are transitive dependecies)
 * 
 * Created server
 * HRM- Hot MOdule Replacement
 * File watcher algorithm-- (written in C++)
 * BUNDLING
 * MINIFY
 * Cleaning our code
 * Dev and Production build
 * Super Fast build algorithm
 * Image optimization
 * Caching while developement
 * Compression
 * Compatable with older version of browser
 * HTTPS on dev (npm parcel index.html --https) to run on https in local but localhost will not trust by chrome browser.
 * Port Number
 * Consistant Hashing algorithm
 * Zero config 
 * 
 */

import React from 'react'
import ReactDOM from 'react-dom/client'

const h1Element = React.createElement(
    "h1",
    {
        id:"heading"
    },
    "Sample React App by Pujitha Maru"
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