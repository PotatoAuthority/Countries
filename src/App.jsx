
import { Suspense } from 'react';
import './App.css'
import Countries from './Countries'
import Country from './components/countries/Country';

function App() {

  const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').
  then(res => res.json());

  return (
    <>
      <section id="center">
        <h1>My React Project</h1>
        <Suspense fallback={<p>Countries loading...</p>}>
          <Countries countriesPromise={countriesPromise}></Countries>
        </Suspense>
        <Country></Country>
      </section>

    </>
  )
}

export default App
