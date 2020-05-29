import React from 'react'


const TestComponent = ({test}) => {
    return <div>
        {test && <img src='blah.png' />}
        </div>
}
export default TestComponent

export const getServerSideProps = async context => {
    console.log(context.params)
    return { props: { test: true } }
  }