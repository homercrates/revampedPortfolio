import React from 'react'
import {Link } from 'gatsby'
import { Layout } from '../components/Layout'
import { css } from '@emotion/core'
import { FaGithub } from 'react-icons/fa';

import { Dice } from '../components/Dice';

const style = {
  accentColor: css`
    color: #6f42c1;
  `,
  boldLook: css`
    font-weight: 800;
  `,
}

const kungFuDominoDesc = (
  'A kung fu domino game I built. Meant to be like a tile based kung fu match. Each tile has 2 options. When that tile is picked it round robins between players to decide what to choose based on the other players "stance" If a player shows a stance with Strike or Block options, its up to the other player to choose a stance to beat or force a draw. I strike you block I grab you strike.'
)
const weatherSchoolDesc = (
  "A very simple yet practical app for my personal use. Every morning I needed to check the weather to know how to dress my daughter for the day. So I made an easy url site I can look up with an API hooked up to a forecast site that when I check in the morning it will let me know how cold it is now, does my daughter need a sweater? How cold it will be at the middle of school 3 hours later. And what the weather will be like when I pick her up from school. Do I need an umbrella? It simplified this process by giving me 3 different 3 hour segments of forecast."
)
const reactNativeGroceryDesc = (
  "React Native App I created. In hind sight I preferred the Flutter experience, Flutter felt more stable. I created this App so that me and my wife could keep track of the list of groceries and be able to tell what has been grabbed and what has not yet. The repo has screen shots."
)
const rubyRailsDesc = (
  'A hosted Ruby on Rails site I made that can host blog posts, simple CRUD. Comments enabled, as well as images can be loaded up. Looking into the Ruby on Rails documentation I put it together out of curiosity.'
)

export const ProjectLink = (props: string) => {
  return (
  <div>
    <h2>{props.title}</h2>
    <p>{props.language}</p>
    <p>{props.info}</p>
    {props.linkHost ? <a target='_blank' href={props.linkHost} css={style.accentColor}>{props.title}</a> : null}
    <br />
    <a target='_blank' href={props.linkGit}><FaGithub /></a>  
    <br />
    <br />
  </div>
  )
}

export const LittleBits = () => (
    <div>
      <h1 css={style.boldLook}>Little Bits of <span css={style.accentColor}>Code</span></h1>
      <Link to="/tags/code-snippet"><span css={style.accentColor}>List</span> of all the code snippets</Link>
    </div>
)

const LayoutLittleBits = () => (
    <Layout>
      <LittleBits />
      <br />
      <ProjectLink 
        title='Kung Fu Domino' 
        language='React'
        info={kungFuDominoDesc} 
        linkHost='https://esemuu.com/merdice/'
        linkGit='https://github.com/homercrates/merdice'
      />
      <ProjectLink 
        title='Weather School'
        language='Javascript, API' 
        info={weatherSchoolDesc} 
        linkHost='https://esemuu.com/WeatherSchool/'
        linkGit='https://github.com/homercrates/WeatherSchool'
      />
      <ProjectLink 
        title='React Native Grocery App'
        language='React Native' 
        info={reactNativeGroceryDesc} 
        linkGit='https://github.com/homercrates/listView'
      />
      <ProjectLink 
        title='MERN Stack Task List'
        language='MERN Stack, MongoDB, NodeJS, Express, React' 
        info="Just a simple task list hosted on heroku. I don't recall why I don't have it on Github."
        linkHost='https://frozen-cliffs-96264.herokuapp.com/'
      />
      <ProjectLink 
        title='Ruby CMS Blog site'
        language='Ruby on Rails, Jade' 
        info={rubyRailsDesc}
        linkHost='https://salty-castle-91675.herokuapp.com/'
        linkGit='https://github.com/homercrates/my_ruby_port'
      />      
      <Dice text="Roll the dice. Get result."/>
    </Layout>
)
export default LayoutLittleBits;
