export const getElement = (
    target: HTMLElement | string
): HTMLElement => {
    if (typeof target == "string") {
        return document.getElementById(target)!
    }
    return target
}

export const validateElement = (
    element: HTMLElement
): void => {
    if (!element) throw new Error("Invalid Target!")
    if (!element.textContent) throw new Error("Element Without Text!")
}

export const insertKeyframes = () => {
    const styleId = "cm-typing-effect-styles"
    if (!document.getElementById(styleId)) {
        const style = document.createElement("style")
        style.id = styleId
        style.textContent = `
            @keyframes blinking-cm-typing-effect {
                50% { color: transparent; }
            }

            @keyframes typing-cm-typing-effect {
                from { width: 0; }
            }
        `
        document.head.appendChild(style)
    }
}
