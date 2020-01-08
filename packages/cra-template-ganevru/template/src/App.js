import './App.css';

import React from 'react';

const App = () => {
  return (
    <main className="App">
      <h1>CRA Template Ganevru</h1>
      <section>
        <h2>Installation</h2>
        <p>
          With <code>yarn</code>:
        </p>
        <pre>
          <code>yarn create react-app my-react-app --template ganevru</code>
        </pre>
        <p>
          Better to use <code>yarn</code>, but if necessary:
        </p>
        <pre>
          <code>npm init react-app my-react-app --template ganevru</code>
        </pre>
      </section>
      <section>
        <h2>Links</h2>
        <p>
          On GitHub:{' '}
          <a href="https://github.com/ganevru/cra-template-ganevru">
            cra-template-ganevru
          </a>
        </p>
        <p>
          CSS Style:{' '}
          <a href="https://mblode.github.io/marx">mblode.github.io/marx</a>
        </p>
        <p>
          More about CRA custom-templates:{' '}
          <a href="https://create-react-app.dev/docs/custom-templates">
            create-react-app.dev/docs/custom-templates
          </a>
        </p>
      </section>
      <section>
        <h2>Form Example</h2>
        <fieldset>
          <legend>Fieldset Legend</legend>
          <label htmlFor="full-name">Full Name</label>
          <input id="full-name" type="text" placeholder="Name" />
          <br />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Use strong password!"
          />
          <br />
          <select id="country">
            <option value="china">China</option>
            <option value="russia">Russia</option>
            <option value="usa" selected>
              USA
            </option>
          </select>
          <br />
          <button type="reset">Button</button>
        </fieldset>
      </section>
    </main>
  );
};

export default App;
