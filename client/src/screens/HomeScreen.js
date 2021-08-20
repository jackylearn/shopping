import './HomeScreen.css'
import Book from '../components/Book.js'

export default function HomeScreen(props) {
    return (
        <div className='home-screen'>
            <h2 className='screen-title'>Home</h2>
            <div id="all-books">
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
            </div>
        </div>
    )
}