import { TOOLS } from '../data/tools'
import { useTheme } from 'nextra-theme-docs'
import { Card } from './card'

export const ToolsList = () => {
    const { theme } = useTheme()

    return (
        <>
            {TOOLS.map((tool) => (
                <Card
                    key={tool.text}
                    icon={
                        theme === 'light' && tool.lightIcon
                            ? tool.lightIcon
                            : tool.icon
                    }
                    url={tool.url}
                    text={tool.text}
                    external
                />
            ))}
        </>
    )
}
