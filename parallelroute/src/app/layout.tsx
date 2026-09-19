import React, { ReactNode } from 'react'
type CP = {
  children:ReactNode;
  comments:ReactNode;
  members:ReactNode;
}
const RootLayout = ({children, comments, members}:CP) => {
  return (
    <html>
        <body>
          <h1>{children}</h1>
          <div className='flex'>
            {comments}
            {members}
          </div>
        </body>
    </html>
  )
}

export default RootLayout
