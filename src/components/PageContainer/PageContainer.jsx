/**
 * Universal Page Container Component
 *
 * props:
 *  - children (`component`): Required.
 *  - title (`string`): Optional, rendered in Topbar.
 *  - privilege (`string`): Optional, must belong to ["admin", ].
 *                          Conditionally renders some components.
 *  - component (`component`): Optional. Custom component to render
 *                             on the topbar.
 */

import { useState, useEffect, createContext } from "react";
import "./styles.scss";

import Navigation from "../Navigation";
import Topbar from "../Topbar";

export const PageContext = createContext(null);

const PageContainer = ({ title, privilege, component, children }) => {
    const [content, setContent] = useState(null);
    const [searchContent, setSearchContent] = useState(null);

    useEffect(() => setSearchContent(content), [content]);

    return (
        <div className="page-container">
            <div className="navigation-container">
                <Navigation />
            </div>
            <PageContext.Provider
                value={{
                    privilege,
                    content,
                    setContent,
                    searchContent,
                    setSearchContent,
                }}
            >
                <div className="main-container">
                    <div className="topbar-container my-1">
                        <Topbar title={title} component={component} />
                    </div>
                    <div className="content-container">{children}</div>
                </div>
            </PageContext.Provider>
        </div>
    );
};

export default PageContainer;
