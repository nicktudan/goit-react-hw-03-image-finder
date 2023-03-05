import PropTypes from 'prop-types';
import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { 
    SearchHeader, 
    SearchForm, 
    SearchFormBtn, 
    SearchFormInput, 
} from './Searchbar.styled'


export class Searchbar extends Component {
    state = {
        searchQuery: '',
    };

    handleQueryChange = event => {
        this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
    }

    handleSubmit = event => {
        event.preventDefault();

        if(this.state.searchQuery.trim() === '') {
            toast.error('Please, enter the search name!');
            return;
        }

        this.props.onSubmit(this.state.searchQuery);
        this.setState({ searchQuery: '' });
    }

        render() {
            return <SearchHeader onSubmit={this.handleSubmit}>
            
                <SearchForm >
                    <SearchFormBtn type="submit">
                        <FaSearch />
                    </SearchFormBtn>
    
                    <SearchFormInput
                        type="text"
                        autocomplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name="searchQuery"
                        value={this.state.searchQuery}
                        onChange={this.handleQueryChange}
                    />
                </SearchForm>
    
        </SearchHeader>
        }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}