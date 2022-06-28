import SearchBar from '../components/SearchBar';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <div className='image'></div>
                <div className='title'>Todos Application</div>
            </div>

            {/*Enable after filtering by substring but keeping the previous data in localstorage*/}
            {/*<SearchBar/>*/}
        </div>
    );
};

export default Header;