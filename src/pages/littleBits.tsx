import React from 'react'
import { Layout } from '../components/Layout'


export const LittleBits = () => (
    <div>
        <h2>Little Bits of Code</h2>
        <p>little code snippets</p>
        <ul><li>a</li><li>b</li><li>c</li><li>d</li></ul>
    </div>
)

const LayoutLittleBits = () => (
    <Layout>
        <LittleBits />
    </Layout>
)
export default LayoutLittleBits;