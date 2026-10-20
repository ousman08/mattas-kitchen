import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata = {
    title: "Matta's Kitchen | Catering & Events",
    description:
        "Matta's Kitchen — beautiful catering, desserts and drinks for every occasion.",
    icons: {
        icon: '/img/logo-mattas-kitchen.png',
    },
}

export const viewport = {
    themeColor: '#f8f3ed',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
                <SpeedInsights />
            </body>
        </html>
    )
}
