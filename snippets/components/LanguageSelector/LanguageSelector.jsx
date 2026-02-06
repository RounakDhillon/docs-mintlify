import React, { useEffect } from "react";

export const LanguageSelector = () => {
    useEffect(() => {
        const getActiveTab = () => {
            const activeTab = document.querySelector(
                '.client-sdks [data-active="true"]'
            )
            console.log(activeTab?.textContent)
        }

        getActiveTab()
        document.addEventListener('click', getActiveTab)

        return () => document.removeEventListener('click', getActiveTab)
    }, [])

    return (
        <div className="client-sdks">
            <div className="client-header">CLIENT SDKs</div>
            <Tabs>
                <Tab title="Python" icon="/public/images/icons/python-sdk.svg">
                    You can add any number of components inside of tabs. For example, a code block:
                </Tab>
                <Tab title="Java" icon="/public/images/icons/java-sdk.svg">
                    Java
                </Tab>
                <Tab title="Go" icon="/public/images/icons/go-sdk.svg">
                    Go
                </Tab>
            </Tabs>
        </div>
    )
}