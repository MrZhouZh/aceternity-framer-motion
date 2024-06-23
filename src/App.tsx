import { CardHoverEffect } from '@/components/ui/CardHoverEffect'

import './App.css'

const CardItems = [
  {
    title: 'Stripe',
    link: 'https://stripe.com',
    description: 'A technology company that builds economic infrastructure for the internet.',
  },
  {
    title: 'Netflix',
    link: 'https://netflix.com',
    description: 'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
  },
  {
    title: 'Google',
    link: 'https://google.com',
    description: 'A multinational technology company that specializes in Internet-related services and products.',
  },
  {
    title: 'Meta',
    link: 'https://meta.com',
    description: 'A technology company that focuses on building products that advance Facebook\'s mission of bringing the world closer together.',
  },
  {
    title: 'Amazon',
    link: 'https://amazon.com',
    description: 'A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
  },
  {
    title: 'Microsoft',
    link: 'https://microsoft.com',
    description: 'A multinational technology company that specializes in Internet-related services and products.',
  },
  {
    title: 'Google',
    link: 'https://google.com',
    description: 'A multinational technology company that specializes in Internet-related services and products.',
  },
  {
    title: 'Google',
    link: 'https://google.com',
    description: 'A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
  }
]

function App() {
  return (
    <>
      <div className="content">
        <div className="max-w-5xl mx-auto px-8">
          <h3>Card Hover Effect</h3>
          <CardHoverEffect items={CardItems} />
        </div>
        <hr />
      </div>
    </>
  )
}

export default App
