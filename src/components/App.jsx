import TwitterFollowCard from "./TwitterFollowCard"
export const App = () => {


  const users = [
    {
      userName: 'gabodkomodo',
      name: 'Gabriel Robles',
      isFollowing: true,
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s"
    },
    {
      userName: 'nirvanamill',
      name: 'Nirvana Miller',
      isFollowing: false,
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s"
    },
    {
      userName: 'denisscalderon',
      name: 'Deniss Calderón',
      isFollowing: true,
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s"

    },
    {
      userName: 'natalianoerobles',
      name: 'Natalia Robles',
      isFollowing: true,
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s"
    }
  ]



  return (
    <section className="App">
    <TwitterFollowCard users={users}/> 


    </section>
  )
}
