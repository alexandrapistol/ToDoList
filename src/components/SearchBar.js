import {findTodos} from "../store/actions";
import {connect} from "react-redux";

const SearchBar = ({dispatch}) => {
    return (
        <div id='search'>
            <form className='form-inline'>
                <div className='form-group'>
                    <label htmlFor='inputSearch'>Search</label>
                    <input type='text' id='inputSearch'
                           className='form-control'
                           aria-describedby='searchHelp'
                           onChange={e => dispatch(findTodos(e.target.value))}
                    />
                    <small id='searchHelp' className='text-muted'>
                        Type in to search Todos
                    </small>
                </div>
            </form>
        </div>
    );
};

export default connect()(SearchBar);