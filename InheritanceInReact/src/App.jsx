import React from 'react'
class Parent
{
    greet()
    {
        return<h3>Hello From Parent Class</h3>
    }
}
class Child extends Parent{}
function App() {
  const obj = new Child()
  return (
    <div>
      {obj.greet()}
      <h3>Hello From Child Class</h3>
    </div>
  )
}

export default App