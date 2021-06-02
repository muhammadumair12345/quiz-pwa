import React from 'react';
import QuizContainer from './components/QuizContainer/QuizContainer';
import { GlobalStyle } from './App.style';
import { QuizProvider } from './context/QuizContext';
import firebase from './firebase';

const App = () => {
  const messaging=firebase.messaging();
  messaging.requestPermission()
  .then(()=>messaging.getToken())
  .then((token:any)=>console.log("Token",token));
  return (
    <QuizProvider>
      <GlobalStyle/>
      <QuizContainer/>
    </QuizProvider>
  )
}

export default App
