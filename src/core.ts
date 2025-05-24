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
    if (!element) throw new Error("Invalid Target! (cm-typing-effect)")
    if (!element.textContent) throw new Error("Element Without Text! (cm-typing-effect)")
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

export const insertStyles = (
    reverseMode: boolean,
    textElement: HTMLElement,
    keyTaps: number
) => {
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
            .wrapper-cm-typing-effect {
                display: flex;
                width: fit-content;
                position: relative;
            }
            .text-cm-typing-effect {
                display: flex;
                height: 100%;
                overflow: hidden;
                white-space: nowrap;
                width: 0;
            }
            .caret-cm-typing-effect {
                user-select: none;
            }
        `
        document.head.appendChild(style)
    }

    if (reverseMode) {
        makeTextElementFullWidth(textElement, keyTaps)
    }
}

export const makeTextElementFullWidth = (
    textElement: HTMLElement,
    keyTaps: number
) => {
    textElement.style.width = keyTaps + "ch"
}

export const animateText = (
    textElement: HTMLElement,
    keyTaps: number,
    animationTime: number,
    eraseMode: boolean
) => {
    makeTextElementFullWidth(textElement, keyTaps)
    if (eraseMode) {
        textElement.style.animation = (
            `typing-cm-typing-effect ${animationTime}ms steps(${keyTaps}) reverse forwards`
        )
        return
    }
    textElement.style.animation = (
        `typing-cm-typing-effect ${animationTime}ms steps(${keyTaps})`
    )
}

export const animateCaret = (
    caretElement: HTMLElement,
    caretBlinkingSpeed: number
) => {
    const time = (1 / caretBlinkingSpeed).toFixed(2)
    caretElement.style.animation = (
        `blinking-cm-typing-effect ${time}s step-end infinite`
    )
}

export const removeAnimation = (
    element: HTMLElement
) => element.style.removeProperty("animation")

export const makeCaretAbsolute = (
    caretElement: HTMLElement,
    caretOffset: number
) => {
    caretElement.style.position = "absolute"
    caretElement.style.left = `calc(100% + ${caretOffset}px)`
}

export const verifyTargetElementVisibility = (
    element: HTMLElement
) => {
    if (element.style.visibility === "hidden") {
        element.style.removeProperty("visibility")
    }
}

export const delay = (time: number) => new Promise((resolve) => {
    setTimeout(() => resolve(true), time)
})
