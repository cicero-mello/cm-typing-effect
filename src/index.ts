import { StartTypingOptions } from "./types"
import {
    animateCaret,
    animateText,
    delay,
    getElement,
    insertElementsInTarget,
    insertStyles,
    makeCaretAbsolute,
    removeAnimation,
    validateElement,
    verifyTargetElementVisibility,
} from "./core"

/**
 * Starts a typing animation on a given HTML element or element ID.
 * Requires text content with a monospaced font and no full-width characters.
 *
 * `Tip`: To keep the target element hidden before the animation starts,
 * use `visibility: hidden` (CSS) on it.
 *
 * @param target - HTML element or ID of the element where
 * the typing animation will occur.
 * @param options - Configuration object for the typing animation.
 * @returns A Promise<void> that resolves when the animation is complete.
 *
 */
export const startTyping = (
    target: HTMLElement | string,
    {
        startDelay = 0,
        endDelay = 0,
        realisticTyping = false,
        keepCaretBlinkingAfterEnd = false,
        animationTime = 1000,
        caret = "|",
        caretBlinkingSpeed = 1.6,
        caretTakeSpace = false,
        caretOffset = 0,
        eraseMode = false
    }: StartTypingOptions = {}
): Promise<void> => new Promise(async (resolve) => {

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
    const keyTaps = text.length

    const {
        caretElement,
        textElement
    } = insertElementsInTarget(element, text, caret)

    if (!caretTakeSpace) {
        makeCaretAbsolute(caretElement, caretOffset)
    }

    insertStyles(eraseMode, textElement, keyTaps)
    verifyTargetElementVisibility(element)
    animateCaret(caretElement, caretBlinkingSpeed)

    await delay(startDelay)
    if (realisticTyping) removeAnimation(caretElement)

    animateText(
        textElement,
        keyTaps,
        animationTime,
        eraseMode
    )
    await delay(animationTime)

    animateCaret(caretElement, caretBlinkingSpeed)
    await delay(endDelay)
    if (!keepCaretBlinkingAfterEnd) caretElement.remove()

    resolve()
})
