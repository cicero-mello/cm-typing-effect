import { animateCaret, animateText, getElement, insertElementsInTarget, insertStyles, makeCaretAbsolute, validateElement } from "./core"
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
        caret = "|",
        caretBlinkingSpeed = 1,
        caretTakeSpace = false,
        caretOffset = 0
    }: StartTypingOptions = {}
): null => {

    const element = getElement(target)
    validateElement(element)

    const targetHasCaret = !!element.querySelector(
        ".caret-cm-typing-effect"
    )
    const text = (
        targetHasCaret ?
            element.textContent!.trim().slice(0, -caret.length) :
            element.textContent!.trim()
    )

    const {
        caretElement,
        textElement,
        wrapperElement
    } = insertElementsInTarget(element, text, caret)

    if (!caretTakeSpace) {
        makeCaretAbsolute(caretElement, wrapperElement, caretOffset)
    }

    insertStyles()
    animateText(textElement, text.length, animationTime)
    animateCaret(caretElement, caretBlinkingSpeed)

    return null
}
