import React from 'react'

import { Telescopic } from 'telescopic-text'
import 'telescopic-text/dist/index.css'

const App = () => {
  return (
    <div className='container'>
      <h1>Hello Weary Traveler!</h1>

      <p>
        So you've found this site. Fantastic! Telescopic is a lightweight react
        component inspired by{' '}
        <a
          href='https://www.telescopictext.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          this project
        </a>{' '}
        which essentially has the same implementation but I can't find the
        source code for. Plus I wanted to write it in react. So hey! Now it
        exists
      </p>
      <p>
        Formally, it acts as a small thing to question how you add and
        elaborate. Could it be used as a tool for editing? Who knows! That's the
        joy of it. I just wanted to make something silly and get it out there.
      </p>

      <p>
        For more full documentation and info, check out the github repo and
        README{' '}
        <a
          href='https://github.com/zhaovan/telescopic-text'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          here
        </a>
      </p>
      <div className='poem-container'>
        <h2>on this earth</h2>
        <p className='poem'>
          I looked to
          <Telescopic>
            carve
            <Telescopic>
              bury my sins under
              <Telescopic>
                pray to the gods that my life could be forgiven for ravaging
              </Telescopic>
            </Telescopic>
          </Telescopic>
          the land. I never, wanted to do this. I never, wanted to be here. I
          was{' '}
          <Telescopic>
            tricked.
            <Telescopic>
              tortured and beaten.
              <Telescopic>
                burned, demolished, and rattled at the stake until I came
                quenching for more.
              </Telescopic>
            </Telescopic>
          </Telescopic>
          And yet, here I lay.
        </p>
      </div>
    </div>
  )
}

export default App
