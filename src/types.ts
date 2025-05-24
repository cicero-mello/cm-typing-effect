export interface StartTypingOptions {
    /** Time in milliseconds before typing animation starts.
     *  (Caret will be blinking alone during this.)
     *  Default: `0`
     */
    startDelay?: number

    /** Time in milliseconds before typing animation ends.
     *  Default: `0`
     */
    endDelay?: number

    /** Caret blinks only when typing stops.
     *  Default: `false`
     */
    realisticTyping?: boolean

    /** Keep the caret blinking after typing ends.
     *  Default: `false`
     */
    keepCaretBlinkingAfterEnd?: boolean

    /** Total duration (in ms) for typing animation.
     *  Default: `1000`
     */
    animationTime?: number

    /** Custom character for the caret.
     *  Default: `"|"`
     */
    caret?: string

    /** Speed of the caret blinking in blinks per second.
     *  Default: `1.6`
     */
    caretBlinkingSpeed?: number

    /** Make caret take space of the target element.
     *  Default `false`
     */
    caretTakeSpace?: boolean

    /** Horizontal caret offset in px.
     *  Can't be used with "caretTakeSpace: true".
     *  Default `0`
     */
    caretOffset?: number

    /** Make a erase animation.
     *  Default `false`
     */
    eraseMode?: boolean
}
