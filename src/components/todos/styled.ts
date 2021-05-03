import styled from 'styled-components';

const Page = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 2em;
`;

const Todos = styled.div`
    display: flex;
    flex-direction: column;
`;

const Todo = styled.div`
    align-items: center;
    background: #EEEFF0;
    border: 2px solid;
    display: inline-flex;
    justify-content: space-between;
    margin-bottom: .5em;
    padding: 1em 2em;
`;

const TodoTitle = styled.span`
    font-size: 1rem;
    font-weight: 500;
`;

const DeleteButton = styled.button`
    margin-left: 0.5em;
`;

export default { Page, Title, Todos, Todo, TodoTitle, DeleteButton };