import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
// import style from './App.module.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

// const StyledAppBlock = styled(AppBlock)`
//     background-color: grey;
// `;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Score Yourself Before Scoring Others', important: false, like: false, id: 1},
                {label: 'No Short People', important: false, like: false, id: 2},
                {label: 'How High Does This Go?', important: false, like: false, id: 3},
                {label: 'Claw Machine Birth Control', important: false, like: false, id: 4},
                {label: 'You Are Not A Plane', important: false, like: false, id: 5},
                {label: 'No Time To Wait', important: false, like: false, id: 6},
                {label: 'Very Rude Little Green Men', important: false, like: false, id: 7},
                {label: 'Venn Vampire', important: false, like: false, id: 8},
                {label: 'Her Late Husband', important: false, like: false, id: 9},
                {label: 'What More Can You Do?', important: false, like: false, id: 10},
                {label: 'Fantasy Franchise Boys', important: false, like: false, id: 11},
                {label: 'We Are All Fans Of Those We Despise', important: false, like: false, id: 12},
                {label: 'L.A. Targets', important: false, like: false, id: 13},
                {label: 'Mind Your Own Business Simulator', important: false, like: false, id: 14},
            ],
            term: '',
            filter: 'all',
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.maxId = 15;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];
            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            }
        });
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]; 

            return {
                data: newArr,
            }
        })
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]; 

            return {
                data: newArr,
            }
        })
    }
    searchPost(items, term) {
        if(term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > - 1;
        });
    }

    filterPost(items, filter) {
        if(filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items;
        }

    }

    onUpdateSearch(term) {
        this.setState({term})
    }
    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        // const liked = this.state.data.filter(item => item.like).length;
        // const allPosts = this.state.data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock>
            {/* <div className={style.app}> */}
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <div className='search-panel d-flex'>
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
                <PostAddForm 
                    onAdd={this.addItem}/>
            </AppBlock>
        )
    }  
}
