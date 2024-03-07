
import '../globals.css'
import { Inter } from 'next/font/google'
import Provider from "@/lib/authProvider";
import ReactQueryProvider from "@/components/query/queryclient";


const inter = Inter({ subsets: ['latin'] })



export default function ConversationLayout({
  children,
}: {
  children: any
}) {
  return (
    <html lang="en">
      <body>
      <main className="h-screen flex flex-col">
         <Provider>
            <ReactQueryProvider>
                {children}
            </ReactQueryProvider>
         </Provider>
      </main>
      </body>
    </html>
  )
}
