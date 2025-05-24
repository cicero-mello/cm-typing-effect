# cm-typing-effect
[![npm](https://img.shields.io/npm/v/cm-typing-effect)](https://www.npmjs.com/package/cm-typing-effect)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/cm-typing-effect)](https://bundlephobia.com/package/cm-typing-effect)

![Demo](https://raw.githubusercontent.com/cicero-mello/cm-typing-effect/refs/heads/main/demo.gif)
## **Function: `startTyping`**

`startTyping` creates a typing animation in a target element and returns a promise that resolves when the animation is complete.

To specify the target, you can pass its ID or the element itself.

## General Usage Example:
```typescript
import { startTyping } from "cm-typing-effect"

startTyping("elementId")
```

## More Customized Example (with React):
```typescript
export function App() {

    const animate = async () => {
        await startTyping("title", {
            caretBlinkingSpeed: 2,
            animationTime: 2000,
            startDelay: 5000,
            endDelay: 2000,
            realisticTyping: true
        })
        await startTyping("description", {
            caretBlinkingSpeed: 2,
            animationTime: 2000,
            realisticTyping: true,
            keepCaretBlinkingAfterEnd: true
        })
    }

    // Triggering after initial render
    // (but you can trigger wherever you wants)
    useEffect(() => { animate() }, [])

    return (
        <>
            <h1
                id="title"
                style={{ visibility: "hidden" }}
            >
                Hello Everynyan!
            </h1>
            <p
                id="description"
                style={{ visibility: "hidden" }}
            >
                How are you? Fine, thank you!
            </p>
        </>
    )
}
```

## Tips
### - To keep the target element hidden before the animation, use `visibility: hidden` (CSS) on them.
\- You can customize even more using the css classes:
`caret-cm-typing-effect`,
`text-cm-typing-effect`,
`wrapper-cm-typing-effect`.

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `startDelay` | `number` | `0` | Time in milliseconds before typing animation starts. Caret will be blinking during this time. |
| `endDelay` | `number` | `0` | Time in milliseconds before typing animation ends. Caret will be blinking during this time. |
| `realisticTyping` | `boolean` | `false` | When true, caret blinks only when typing stops. |
| `keepCaretBlinkingAfterEnd` | `boolean` | `false` | Keep the caret blinking after typing ends. |
| `animationTime` | `number` | `1000` | Total duration (in ms) for typing animation. |
| `caret` | `string` | `\|` | Custom character for the caret. |
| `caretBlinkingSpeed` | `number` | `1.6` | Speed of the caret blinking in blinks per second. |
| `caretTakeSpace` | `boolean` | `false` | Make caret take space of the target element. |
| `caretOffset` | `number` | `0` | Horizontal caret offset in px. Can't be used with `caretTakeSpace: true`. |
| `eraseMode` | `boolean` | `false` | Make an erase animation. |

## Requirements (current version)

- The target element must have text content.
- Text content should use a monospaced font.
- No Full-Width characters are supported.
