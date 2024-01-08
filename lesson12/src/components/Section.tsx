import { ReactNode } from "react"

type SectionProps = {
    title?: string,
    children: ReactNode
}

// FC는 FunctionComponents이다(축약가능)
export const Section = ({ children, title = 'My Subheading' }: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}