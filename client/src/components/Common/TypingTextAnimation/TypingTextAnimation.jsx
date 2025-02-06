import { motion as m } from "framer-motion";

export const TypingTextAnimation = ({ text, typingSpeed }) => {
    return (
        <m.div
            initial='hidden'
            animate='visible'
            variants={{
                hidden: { opacity: 1 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: typingSpeed },
                },
            }}
        >
            {text.split('').map((char, index) =>
                <m.span
                    key={index}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                >{char}</m.span>
            )}
        </m.div>
    )
}