import { getElement, insertKeyframes, validateElement } from "./core"
import { StartTypingOptions } from "./types"

/**
 * Starts a typing animation on a given HTML element or element ID.
 *
 * @param target - HTML element or ID of the element where the typing animation will occur
 * @param options - Configuration object for the typing animation.
 * @returns Returns `null` (placeholder — implement your logic here)
 */
export const startTyping = (
    target: HTMLElement | string,
    {
        startDelay = 0,
        endDelay = 0,
        realisticMode = false,
        keepCaretBlinkingAfterEnd = false,
        animationTime = 1000,
        caret = "|"
    }: StartTypingOptions = {}
): null => {
    const element = getElement(target)

    validateElement(element)
    insertKeyframes()

    const text = element.textContent!.trim()
    const charactersQuantity = text.length

    element.innerHTML = `<span>${text}</span>`

    const span = element.querySelector("span")!
    span.style.display = "flex"
    span.style.height = "100%"
    span.style.width = charactersQuantity + "ch"
    span.style.overflow = "hidden"
    span.style.whiteSpace = "nowrap"

    span.style.animation = (
        `typing-cm-typing-effect ${animationTime}ms steps(${charactersQuantity})`
    )

    return null
}
