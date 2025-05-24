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

export const insertElementsInTarget = (
    targetElement: HTMLElement,
    text: string,
    caret: string
) => {
    const wrapperElement = document.createElement("span")
    wrapperElement.className = "wrapper-cm-typing-effect"

    const textElement = document.createElement("span")
    textElement.className = "text-cm-typing-effect"
    textElement.textContent = text

    const caretElement = document.createElement("span")
    caretElement.className = "caret-cm-typing-effect"
    caretElement.textContent = caret

    wrapperElement.appendChild(textElement)
    wrapperElement.appendChild(caretElement)

    targetElement.innerHTML = ""
    targetElement.appendChild(wrapperElement)

    return {
        wrapperElement,
        textElement,
        caretElement
    }
}

export const insertStyles = () => {
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

            .text-cm-typing-effect {
                display: flex;
                height: 100%;
                overflow: hidden;
                white-space: nowrap;
            }
        `
        document.head.appendChild(style)
    }
}

export const animateText = (
    textElement: HTMLElement,
    keyTaps: number,
    animationTime: number
) => {
    textElement.style.width = keyTaps + "ch"
    textElement.style.animation = (
        `typing-cm-typing-effect ${animationTime}ms steps(${keyTaps})`
    )
}

export const animateCaret = (
    caretElement: HTMLElement,
    caretBlinkingSpeed: number
) => {
    caretElement.style.animation = (
        `blinking-cm-typing-effect ${caretBlinkingSpeed}s step-end infinite`
    )
}

export const makeCaretAbsolute = (
    caretElement: HTMLElement,
    wrapperElement: HTMLElement,
    caretOffset: number
) => {
    wrapperElement.style.display = "flex"
    wrapperElement.style.position = "relative"
    wrapperElement.style.width = "fit-content"

    caretElement.style.position = "absolute"
    caretElement.style.left = `calc(100% + ${caretOffset}px)`
}
