import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";


import styles from './App.module.css'
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Vittaoo.png',
      name: 'Vitor Hugo',
      role: 'Desenvolvedor WEB'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCar'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-09-09 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Educador da rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCar'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-03-09 20:00:00')
  },
]

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post=> {
            return (
              // eslint-disable-next-line react/jsx-key
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />

            )
          })}
        </main>
      </div>
    </div>
  )
}


