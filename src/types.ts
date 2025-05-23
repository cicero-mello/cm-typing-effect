export interface StartTypingOptions {
    /** Time in milliseconds before typing animation starts. Default: `0` */
    startDelay?: number
    /** Time in milliseconds before typing animation ends. Default: `0` */
    endDelay?: number
    /** Realistic typing: caret blinks only when typing stops. Default: `false` */
    realisticMode?: boolean
    /** Keep the caret blinking after typing ends. Default: `false` */
    keepCaretBlinkingAfterEnd?: boolean
    /** Total duration (in ms) for typing animation. Default: `1000` */
    animationTime?: number
    /** Custom character for the caret. Default: `"|"` */
    caret?: string
    /** Speed of the caret blinking in blinks per second. Default: `1` */
    caretBlinkingSpeed?: number
}
