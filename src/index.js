import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import store from '@/redux/store'
import App from '@/components/App/App'

renderWithHotReload(App)

if (module.hot) {
  module.hot.accept('@/components/App/App', () => {
    const NextApp = require('@/components/App/App').default
    renderWithHotReload(NextApp)
  })
}

function renderWithHotReload(RootElement) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <RootElement />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}