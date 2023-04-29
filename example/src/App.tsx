import React from 'react'

import { TelescopicText } from 'telescopic-text'
import 'telescopic-text/dist/index.css'

const App = () => {
  return (
    <div className='container'>
      <h1>Telescopic Text</h1>

      <p>
        TelescopicText is a lightweight react component inspired by{' '}
        <a
          href='https://www.telescopictext.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          this project
        </a>{' '}
        which essentially has the same implementation but I can't find the
        source code for. Plus I wanted to write it in react. So hey! Now it
        exists. Also the typeface is recursive which I think should be on the
        web more. So here it is, in front of your eyes.
      </p>
      <p>
        Formally, it acts as a small thing to question how you add and elaborate
        to text. Could it be used as a tool for editing? Who knows! Does it add
        agency to the user who views the page? 100%! I love little works that
        are dynamic, fluid, interrogating and bringing in the viewer to interact
        with the work. That's the joy of life isn't it.
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
          <TelescopicText color={'gray'}>
            carve
            <TelescopicText>
              bury my sins under
              <TelescopicText>
                pray to the gods that my life could be forgiven for ravaging
              </TelescopicText>
            </TelescopicText>
          </TelescopicText>
          the land. I never, wanted to do this. I never, wanted to be here. I
          was{' '}
          <TelescopicText color={'gray'}>
            tricked.
            <TelescopicText>
              tortured and beaten.
              <TelescopicText>
                burned, demolished, and rattled at the stake until I came
                quenching for more.
              </TelescopicText>
            </TelescopicText>
          </TelescopicText>
          And yet, here I lay.
        </p>
      </div>
    </div>
  )
}

export default App
